window.BENCHMARK_DATA = {
  "lastUpdate": 1702418676918,
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412858989,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1486.0607016888555,
            "unit": "ns/iter",
            "extra": "iterations: 465819\ncpu: 1485.9808208767784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17593.762966750928,
            "unit": "ns/iter",
            "extra": "iterations: 46947\ncpu: 17593.115641042026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36883.12458655018,
            "unit": "ns/iter",
            "extra": "iterations: 21768\ncpu: 36880.64590224182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55117.39186462739,
            "unit": "ns/iter",
            "extra": "iterations: 15365\ncpu: 55114.78685323786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 61247.34680000756,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61245.11000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77592.74210061734,
            "unit": "ns/iter",
            "extra": "iterations: 11330\ncpu: 77588.87025595765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92548.27214650661,
            "unit": "ns/iter",
            "extra": "iterations: 9392\ncpu: 92542.87691652474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 107479.00061289295,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 107473.53518019119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 124358.44919863394,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 124350.57240984547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1326.7725240758953,
            "unit": "ns/iter",
            "extra": "iterations: 526359\ncpu: 1326.7051575065702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1117.7452757916842,
            "unit": "ns/iter",
            "extra": "iterations: 626560\ncpu: 1117.6773174157331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1101.4878298509923,
            "unit": "ns/iter",
            "extra": "iterations: 634832\ncpu: 1101.4154926027659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1081.5149635773516,
            "unit": "ns/iter",
            "extra": "iterations: 647539\ncpu: 1081.470305263467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2080.077639917135,
            "unit": "ns/iter",
            "extra": "iterations: 337378\ncpu: 2079.9915821422846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5896.201147549893,
            "unit": "ns/iter",
            "extra": "iterations: 137859\ncpu: 5895.896531963824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30693.920580345875,
            "unit": "ns/iter",
            "extra": "iterations: 26467\ncpu: 30693.02149846977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24976.17032899727,
            "unit": "ns/iter",
            "extra": "iterations: 32766\ncpu: 24975.682109503774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24534.343295156326,
            "unit": "ns/iter",
            "extra": "iterations: 33528\ncpu: 24533.285612025717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24619.538573289894,
            "unit": "ns/iter",
            "extra": "iterations: 33041\ncpu: 24618.44375170239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63067.373700005184,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 63065.39999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 637841.8040000042,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637799.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 508135.7850000359,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508120.3000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 510944.2020000188,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510928.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 504711.38199998223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504679.8000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 369725.2919099301,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 369712.5521267723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 504189.68299993593,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504149.99999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2634105.4431817667,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2634011.647727273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1204660.931168805,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 1204606.6233766256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3448743.8959109182,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3448334.572490707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9259.661759971466,
            "unit": "ns/iter",
            "extra": "iterations: 90081\ncpu: 9259.204493733409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48406.72616893134,
            "unit": "ns/iter",
            "extra": "iterations: 17131\ncpu: 48405.00846418757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38888.44780720196,
            "unit": "ns/iter",
            "extra": "iterations: 21411\ncpu: 38887.10942973237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38701.54384250541,
            "unit": "ns/iter",
            "extra": "iterations: 21486\ncpu: 38699.34841292012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38901.3548885556,
            "unit": "ns/iter",
            "extra": "iterations: 21356\ncpu: 38900.145158269246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74440.14093845701,
            "unit": "ns/iter",
            "extra": "iterations: 11764\ncpu: 74436.7477048625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 674076.2298181421,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 674053.0181818164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 533330.2340000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533315.7000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 530080.0989999743,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530050.2999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 525522.627999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525500.6000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 385232.31134563236,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 385210.5101143335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 519653.854000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519642.20000000694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2781567.695783191,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2781448.7951807347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1186081.0696202286,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 1186015.316455695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5690.3961000000445,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5682.305999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30914.57014214457,
            "unit": "ns/iter",
            "extra": "iterations: 26874\ncpu: 30912.819081640264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24473.631344378515,
            "unit": "ns/iter",
            "extra": "iterations: 34105\ncpu: 24472.25333528815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24790.830388902945,
            "unit": "ns/iter",
            "extra": "iterations: 33736\ncpu: 24788.58193028217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23900.72572050736,
            "unit": "ns/iter",
            "extra": "iterations: 34906\ncpu: 23899.03454993427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65585.60989999477,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 65575.29000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 642278.2640000832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642242.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 510977.687000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510938.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 510169.6100000481,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510145.399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 505229.26999997254,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505195.49999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 365770.6391666693,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 365744.45833333395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 621199.4936170703,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 621163.2624113468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 621.7040168385888,
            "unit": "ns/iter",
            "extra": "iterations: 1131686\ncpu: 621.6820743563155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3551.436617994485,
            "unit": "ns/iter",
            "extra": "iterations: 196073\ncpu: 3551.3951436454754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2694.3123872243723,
            "unit": "ns/iter",
            "extra": "iterations: 259364\ncpu: 2694.170740735027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2717.1113596036157,
            "unit": "ns/iter",
            "extra": "iterations: 257553\ncpu: 2717.0803679242617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2263.403551389162,
            "unit": "ns/iter",
            "extra": "iterations: 309569\ncpu: 2263.327723383166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16831.101980006428,
            "unit": "ns/iter",
            "extra": "iterations: 41616\ncpu: 16830.699730872857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34512.97975830624,
            "unit": "ns/iter",
            "extra": "iterations: 19860\ncpu: 34510.94662638486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8194.179747664708,
            "unit": "ns/iter",
            "extra": "iterations: 85442\ncpu: 8193.748975913479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8163.580786077415,
            "unit": "ns/iter",
            "extra": "iterations: 85615\ncpu: 8163.168837236492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8148.539041239116,
            "unit": "ns/iter",
            "extra": "iterations: 85986\ncpu: 8147.945014304599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16447.707888376062,
            "unit": "ns/iter",
            "extra": "iterations: 42607\ncpu: 16446.81390381861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15391.578899968057,
            "unit": "ns/iter",
            "extra": "iterations: 45526\ncpu: 15390.798664499447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4359.968425887347,
            "unit": "ns/iter",
            "extra": "iterations: 161113\ncpu: 4359.722679113407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 21935.12828647647,
            "unit": "ns/iter",
            "extra": "iterations: 31835\ncpu: 21933.874666248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17661.426128900082,
            "unit": "ns/iter",
            "extra": "iterations: 39596\ncpu: 17660.854631781134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17688.049704564262,
            "unit": "ns/iter",
            "extra": "iterations: 39433\ncpu: 17687.028630841964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18046.936893330425,
            "unit": "ns/iter",
            "extra": "iterations: 38839\ncpu: 18046.051649115423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45942.811190645385,
            "unit": "ns/iter",
            "extra": "iterations: 15227\ncpu: 45940.237735600625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 164183.2354868857,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 164181.53089887442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136910.32153334233,
            "unit": "ns/iter",
            "extra": "iterations: 5113\ncpu: 136902.1318208495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 136683.67570201537,
            "unit": "ns/iter",
            "extra": "iterations: 5128\ncpu: 136676.0920436838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 137505.91423536593,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 137498.3551987474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84932.92428830362,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 84927.31677771085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 136834.09514525367,
            "unit": "ns/iter",
            "extra": "iterations: 5129\ncpu: 136827.9001754726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4383.006233147421,
            "unit": "ns/iter",
            "extra": "iterations: 159470\ncpu: 4382.755377186881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21935.32770111587,
            "unit": "ns/iter",
            "extra": "iterations: 31959\ncpu: 21934.43474451671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17432.605378375934,
            "unit": "ns/iter",
            "extra": "iterations: 40198\ncpu: 17431.740385093675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17275.985530507245,
            "unit": "ns/iter",
            "extra": "iterations: 40499\ncpu: 17275.327785871013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17593.953423346207,
            "unit": "ns/iter",
            "extra": "iterations: 39698\ncpu: 17593.029875560347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44073.07674872551,
            "unit": "ns/iter",
            "extra": "iterations: 15883\ncpu: 44071.10117735973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 160437.6841502401,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 160428.6990380201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 134455.59629345202,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 134451.64310278866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 134452.2332372725,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 134444.66858789758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 133832.0833811439,
            "unit": "ns/iter",
            "extra": "iterations: 5229\ncpu: 133827.3474851786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82953.67869864193,
            "unit": "ns/iter",
            "extra": "iterations: 8422\ncpu: 82950.0474946565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 134050.7138214471,
            "unit": "ns/iter",
            "extra": "iterations: 5231\ncpu: 134039.97323647258 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418675231,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1510.1244768279194,
            "unit": "ns/iter",
            "extra": "iterations: 446316\ncpu: 1510.0778372274353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17525.705959592473,
            "unit": "ns/iter",
            "extra": "iterations: 47218\ncpu: 17525.081536702102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36475.59631934399,
            "unit": "ns/iter",
            "extra": "iterations: 22659\ncpu: 36474.027980052066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 54538.553110228815,
            "unit": "ns/iter",
            "extra": "iterations: 15449\ncpu: 54536.79849828465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 61107.16880000381,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61101.64999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76549.0606665492,
            "unit": "ns/iter",
            "extra": "iterations: 11522\ncpu: 76545.94688422156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 90835.1755733246,
            "unit": "ns/iter",
            "extra": "iterations: 9506\ncpu: 90830.50704818012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 105684.25913782464,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 105680.08500303583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 122932.55019908318,
            "unit": "ns/iter",
            "extra": "iterations: 7032\ncpu: 122927.7872582481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1317.3890515172757,
            "unit": "ns/iter",
            "extra": "iterations: 530521\ncpu: 1317.3704716684165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1070.1100033420673,
            "unit": "ns/iter",
            "extra": "iterations: 655271\ncpu: 1070.0893218225744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1091.760764738291,
            "unit": "ns/iter",
            "extra": "iterations: 642259\ncpu: 1091.70614969973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1059.0519934080114,
            "unit": "ns/iter",
            "extra": "iterations: 662007\ncpu: 1058.9869895635543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2031.3173210296588,
            "unit": "ns/iter",
            "extra": "iterations: 342445\ncpu: 2031.174057147867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5963.175001263667,
            "unit": "ns/iter",
            "extra": "iterations: 138519\ncpu: 5962.977642056327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30181.21500827734,
            "unit": "ns/iter",
            "extra": "iterations: 27185\ncpu: 30180.00000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24605.623096672884,
            "unit": "ns/iter",
            "extra": "iterations: 33494\ncpu: 24604.397802591553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24748.4674739338,
            "unit": "ns/iter",
            "extra": "iterations: 33281\ncpu: 24746.915657582365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24210.557549998997,
            "unit": "ns/iter",
            "extra": "iterations: 33649\ncpu: 24209.5842372731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63820.55280000714,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 63816.26000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 616467.1149999776,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616462.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 502668.6929999187,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 503416.45799994696,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503402.2999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 613499.7514204634,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 613470.738636364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 364273.11538460694,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 364250.29585798807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 619925.3190883145,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 619916.6666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2631754.9943503425,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2631567.2316384176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1181751.6343949223,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1181712.993630571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3422734.30370386,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3422580.3703703694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9168.002552424048,
            "unit": "ns/iter",
            "extra": "iterations: 90894\ncpu: 9167.511606926733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48686.6360169,
            "unit": "ns/iter",
            "extra": "iterations: 17042\ncpu: 48684.25067480344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39104.32932140813,
            "unit": "ns/iter",
            "extra": "iterations: 21353\ncpu: 39102.20577904741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38503.37340955281,
            "unit": "ns/iter",
            "extra": "iterations: 21692\ncpu: 38502.06527752178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38560.62016626103,
            "unit": "ns/iter",
            "extra": "iterations: 21412\ncpu: 38558.78479357378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74616.10856453837,
            "unit": "ns/iter",
            "extra": "iterations: 11606\ncpu: 74615.50921936963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 666877.2050359542,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 666845.3956834548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 531269.6630001029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531242.2999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 528966.8500000744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528936.900000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 522498.04000007315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522468.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 385487.3359649334,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 385473.07017543865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 517266.6749999735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517226.79999999603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2785177.577844005,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2785049.1017963947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1209329.4844559429,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1209244.8186528513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5580.99527999957,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5580.57599999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30556.59658512721,
            "unit": "ns/iter",
            "extra": "iterations: 26531\ncpu: 30554.86789039219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24208.397631792308,
            "unit": "ns/iter",
            "extra": "iterations: 33443\ncpu: 24207.535209161724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24092.293448140306,
            "unit": "ns/iter",
            "extra": "iterations: 33563\ncpu: 24090.89771474532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23759.844630437423,
            "unit": "ns/iter",
            "extra": "iterations: 33932\ncpu: 23759.050453848788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59436.606499991736,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59434.59999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 656358.7709999866,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656335.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 522180.33200006175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522151.2000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 520320.4590000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520309.8999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 506681.5459999816,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506640.30000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 367165.05680867616,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 367154.80367585644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 501747.2189999808,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501723.90000000177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 581.4033942733246,
            "unit": "ns/iter",
            "extra": "iterations: 1200964\ncpu: 581.3882014781474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3578.000861004069,
            "unit": "ns/iter",
            "extra": "iterations: 195121\ncpu: 3577.883467181893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2816.176093280277,
            "unit": "ns/iter",
            "extra": "iterations: 248198\ncpu: 2816.102063674968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2957.0824622234213,
            "unit": "ns/iter",
            "extra": "iterations: 236193\ncpu: 2957.0596927089423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2295.2703700181523,
            "unit": "ns/iter",
            "extra": "iterations: 305093\ncpu: 2295.230634593387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17229.503370400682,
            "unit": "ns/iter",
            "extra": "iterations: 40648\ncpu: 17229.105983074198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36310.17903225707,
            "unit": "ns/iter",
            "extra": "iterations: 19220\ncpu: 36309.157127991704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8918.509482036961,
            "unit": "ns/iter",
            "extra": "iterations: 82419\ncpu: 8918.30645846227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8164.869053934497,
            "unit": "ns/iter",
            "extra": "iterations: 79170\ncpu: 8164.475179992471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8203.515313012495,
            "unit": "ns/iter",
            "extra": "iterations: 82936\ncpu: 8203.269991318664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17140.607268686872,
            "unit": "ns/iter",
            "extra": "iterations: 42291\ncpu: 17139.65146248618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15446.173653353344,
            "unit": "ns/iter",
            "extra": "iterations: 45372\ncpu: 15445.684563166831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4394.796960535943,
            "unit": "ns/iter",
            "extra": "iterations: 159107\ncpu: 4394.629400340627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22040.055188678463,
            "unit": "ns/iter",
            "extra": "iterations: 31800\ncpu: 22039.531446540892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18728.019113500868,
            "unit": "ns/iter",
            "extra": "iterations: 39030\ncpu: 18726.7819625929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17771.475916732757,
            "unit": "ns/iter",
            "extra": "iterations: 39488\ncpu: 17770.920279578608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18454.293523026514,
            "unit": "ns/iter",
            "extra": "iterations: 37394\ncpu: 18453.86693052357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46308.922551572956,
            "unit": "ns/iter",
            "extra": "iterations: 14203\ncpu: 46307.39984510383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 167425.5197415848,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 167419.98085666535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 138972.30602504115,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 138971.24676873974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 137420.96825079698,
            "unit": "ns/iter",
            "extra": "iterations: 5008\ncpu: 137419.8682108628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 137554.33196401835,
            "unit": "ns/iter",
            "extra": "iterations: 5112\ncpu: 137548.55242566532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84759.11785540337,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 84756.36297020104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 137231.57221565978,
            "unit": "ns/iter",
            "extra": "iterations: 5082\ncpu: 137223.14049586726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4293.382162092648,
            "unit": "ns/iter",
            "extra": "iterations: 163203\ncpu: 4293.242158538767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21853.509351348846,
            "unit": "ns/iter",
            "extra": "iterations: 31974\ncpu: 21852.58960405318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17637.483593809317,
            "unit": "ns/iter",
            "extra": "iterations: 39223\ncpu: 17636.89926828632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17384.020506603407,
            "unit": "ns/iter",
            "extra": "iterations: 40426\ncpu: 17383.01093355781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17883.690300781716,
            "unit": "ns/iter",
            "extra": "iterations: 39364\ncpu: 17883.10639162684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44599.99592382417,
            "unit": "ns/iter",
            "extra": "iterations: 15701\ncpu: 44597.39507037737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 162602.42847205995,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 162594.6672849532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 134613.3249471754,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 134606.6064912604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 134319.9992325396,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 134314.31312356153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 134000.15139367507,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 133997.99541809832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83803.21240936554,
            "unit": "ns/iter",
            "extra": "iterations: 8413\ncpu: 83798.83513609813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 133812.01189546287,
            "unit": "ns/iter",
            "extra": "iterations: 5128\ncpu: 133804.6606864291 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}