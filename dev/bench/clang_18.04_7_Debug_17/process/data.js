window.BENCHMARK_DATA = {
  "lastUpdate": 1702489554599,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-7 18.04 Debug c++-17": [
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
        "date": 1702489551182,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17587.755861601163,
            "unit": "ns/iter",
            "extra": "iterations: 41243\ncpu: 17587.197827510125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 135445.48847261784,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 135443.03554274738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 255289.45291874444,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 255277.09005573485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 369699.03486871574,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 369686.5690916915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 489626.2005617797,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 489605.78651685384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 607265.5391061368,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 607218.0167597764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 585075.9209999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585014.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 676501.4197802078,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 676451.208791208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 773087.2071547098,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 773069.7171381031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13521.17599150895,
            "unit": "ns/iter",
            "extra": "iterations: 51815\ncpu: 13520.72565859309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11350.682348158325,
            "unit": "ns/iter",
            "extra": "iterations: 61495\ncpu: 11350.592731116354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11314.57147249731,
            "unit": "ns/iter",
            "extra": "iterations: 61793\ncpu: 11314.631107083309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11394.689325760339,
            "unit": "ns/iter",
            "extra": "iterations: 61447\ncpu: 11394.509089133715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19840.97942200481,
            "unit": "ns/iter",
            "extra": "iterations: 35329\ncpu: 19840.02377650089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56459.20030000298,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56453.23999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299856.2047899959,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 299843.21416174906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235151.92817680503,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 235147.8453038678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 234470.81159023565,
            "unit": "ns/iter",
            "extra": "iterations: 3641\ncpu: 234462.04339467178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 233068.72267759722,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 233056.22950819647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 512500.36699997284,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512481.30000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4262858.206422154,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4262721.100917435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3465409.5895523066,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3465320.522388062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3474240.958801547,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3474054.6816479317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3454845.252788202,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3454809.6654275153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2046209.337028784,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2046127.494456764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3365965.1854544464,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3365781.0909090945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12955122.939023646,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12954341.463414652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5876078.189999134,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5875294.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16707815.718749685,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16707134.374999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62200.642904290675,
            "unit": "ns/iter",
            "extra": "iterations: 13635\ncpu: 62195.44554455432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 332539.97483797604,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 332520.2058711405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265926.9807930621,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 265909.75836431165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 264468.55267221003,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 264449.21223355085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 266506.6296870018,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 266485.43538890657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 506944.1599999891,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506909.60000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4337131.065420172,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4336846.261682229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3519483.6515151365,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3519380.3030303223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3523832.5189394266,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3523546.59090911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3489834.142857305,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3489575.1879699235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2069555.4129464,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2069489.2857142815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3398417.0401458372,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3398146.3503649663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13189327.864198377,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13188899.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5833846.799999947,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5833113.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53340.6078999974,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53339.3199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 299283.4122990931,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 299266.352201258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230424.2197357777,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 230413.69641412765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226975.49986679188,
            "unit": "ns/iter",
            "extra": "iterations: 3753\ncpu: 226959.92539301835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223884.3224960894,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 223876.0618772943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 586749.7002025901,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 586706.279540852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4301109.543778626,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4301035.483870967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3464819.5836430425,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3464681.040892193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3472476.507462787,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3472057.4626865685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3453015.285185335,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3452916.2962962957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2040164.0745612774,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2040070.6140350823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3365080.628158949,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3364942.2382671656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6882.073907195786,
            "unit": "ns/iter",
            "extra": "iterations: 101871\ncpu: 6881.64737756577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37917.27405405869,
            "unit": "ns/iter",
            "extra": "iterations: 18500\ncpu: 37917.60540540557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29989.0969689196,
            "unit": "ns/iter",
            "extra": "iterations: 23358\ncpu: 29987.344806918187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30818.29286751215,
            "unit": "ns/iter",
            "extra": "iterations: 22727\ncpu: 30817.85541426497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23602.26729230351,
            "unit": "ns/iter",
            "extra": "iterations: 29623\ncpu: 23600.60426020304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 171321.70043945848,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 171322.5585937509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 287754.8502871595,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 287737.7358490536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73188.15036098221,
            "unit": "ns/iter",
            "extra": "iterations: 9557\ncpu: 73186.41833211383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73581.59481037098,
            "unit": "ns/iter",
            "extra": "iterations: 9519\ncpu: 73574.76625696091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73120.18875417032,
            "unit": "ns/iter",
            "extra": "iterations: 9568\ncpu: 73114.24540133703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 154432.0596791625,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 154432.91978609818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135836.64015519523,
            "unit": "ns/iter",
            "extra": "iterations: 5155\ncpu: 135828.94277400634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44541.06457576107,
            "unit": "ns/iter",
            "extra": "iterations: 15687\ncpu: 44539.1024415123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217113.15059117367,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 217101.99128811865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175445.1791979714,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 175445.96491228204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174231.24470470357,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174224.49538998015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176492.5476429233,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 176487.83851554708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343677.25110564777,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 343653.80835381016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1239135.9999999257,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1239118.3745583026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1030546.1544118423,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1030469.7058823694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1027429.3069016531,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027390.0146842987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1020277.2119884208,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1020224.5614035231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 677654.587778886,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 677620.659553825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1015206.0682147681,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1015185.3410740173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44586.85004764008,
            "unit": "ns/iter",
            "extra": "iterations: 15745\ncpu: 44584.53477294362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 217252.72561161435,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 217250.38711675195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176094.61302490576,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 176079.55745536808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173135.50210759815,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 173132.48202330805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174374.48569295826,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 174361.9557103766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 333949.1967603211,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 333937.97046212305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1231744.633156906,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1231623.9858906665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1027970.9382352981,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1027923.5294117647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1025879.4787077719,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1025883.8472834183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1021231.8116788269,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1021197.3722627662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 673815.241811145,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 673768.3044315974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1013656.5253256834,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1013558.3212735059 ns\nthreads: 1"
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
        "date": 1702489551182,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17587.755861601163,
            "unit": "ns/iter",
            "extra": "iterations: 41243\ncpu: 17587.197827510125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 135445.48847261784,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 135443.03554274738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 255289.45291874444,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 255277.09005573485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 369699.03486871574,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 369686.5690916915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 489626.2005617797,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 489605.78651685384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 607265.5391061368,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 607218.0167597764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 585075.9209999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585014.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 676501.4197802078,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 676451.208791208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 773087.2071547098,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 773069.7171381031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13521.17599150895,
            "unit": "ns/iter",
            "extra": "iterations: 51815\ncpu: 13520.72565859309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11350.682348158325,
            "unit": "ns/iter",
            "extra": "iterations: 61495\ncpu: 11350.592731116354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11314.57147249731,
            "unit": "ns/iter",
            "extra": "iterations: 61793\ncpu: 11314.631107083309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11394.689325760339,
            "unit": "ns/iter",
            "extra": "iterations: 61447\ncpu: 11394.509089133715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19840.97942200481,
            "unit": "ns/iter",
            "extra": "iterations: 35329\ncpu: 19840.02377650089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56459.20030000298,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56453.23999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299856.2047899959,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 299843.21416174906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235151.92817680503,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 235147.8453038678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 234470.81159023565,
            "unit": "ns/iter",
            "extra": "iterations: 3641\ncpu: 234462.04339467178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 233068.72267759722,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 233056.22950819647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 512500.36699997284,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512481.30000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4262858.206422154,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4262721.100917435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3465409.5895523066,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3465320.522388062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3474240.958801547,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3474054.6816479317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3454845.252788202,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3454809.6654275153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2046209.337028784,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2046127.494456764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3365965.1854544464,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3365781.0909090945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12955122.939023646,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12954341.463414652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5876078.189999134,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5875294.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16707815.718749685,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16707134.374999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62200.642904290675,
            "unit": "ns/iter",
            "extra": "iterations: 13635\ncpu: 62195.44554455432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 332539.97483797604,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 332520.2058711405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265926.9807930621,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 265909.75836431165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 264468.55267221003,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 264449.21223355085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 266506.6296870018,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 266485.43538890657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 506944.1599999891,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506909.60000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4337131.065420172,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4336846.261682229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3519483.6515151365,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3519380.3030303223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3523832.5189394266,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3523546.59090911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3489834.142857305,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3489575.1879699235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2069555.4129464,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2069489.2857142815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3398417.0401458372,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3398146.3503649663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13189327.864198377,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13188899.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5833846.799999947,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5833113.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53340.6078999974,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53339.3199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 299283.4122990931,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 299266.352201258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230424.2197357777,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 230413.69641412765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226975.49986679188,
            "unit": "ns/iter",
            "extra": "iterations: 3753\ncpu: 226959.92539301835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223884.3224960894,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 223876.0618772943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 586749.7002025901,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 586706.279540852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4301109.543778626,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4301035.483870967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3464819.5836430425,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3464681.040892193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3472476.507462787,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3472057.4626865685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3453015.285185335,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3452916.2962962957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2040164.0745612774,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2040070.6140350823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3365080.628158949,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3364942.2382671656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6882.073907195786,
            "unit": "ns/iter",
            "extra": "iterations: 101871\ncpu: 6881.64737756577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37917.27405405869,
            "unit": "ns/iter",
            "extra": "iterations: 18500\ncpu: 37917.60540540557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29989.0969689196,
            "unit": "ns/iter",
            "extra": "iterations: 23358\ncpu: 29987.344806918187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30818.29286751215,
            "unit": "ns/iter",
            "extra": "iterations: 22727\ncpu: 30817.85541426497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23602.26729230351,
            "unit": "ns/iter",
            "extra": "iterations: 29623\ncpu: 23600.60426020304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 171321.70043945848,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 171322.5585937509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 287754.8502871595,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 287737.7358490536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73188.15036098221,
            "unit": "ns/iter",
            "extra": "iterations: 9557\ncpu: 73186.41833211383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73581.59481037098,
            "unit": "ns/iter",
            "extra": "iterations: 9519\ncpu: 73574.76625696091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73120.18875417032,
            "unit": "ns/iter",
            "extra": "iterations: 9568\ncpu: 73114.24540133703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 154432.0596791625,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 154432.91978609818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135836.64015519523,
            "unit": "ns/iter",
            "extra": "iterations: 5155\ncpu: 135828.94277400634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44541.06457576107,
            "unit": "ns/iter",
            "extra": "iterations: 15687\ncpu: 44539.1024415123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217113.15059117367,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 217101.99128811865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175445.1791979714,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 175445.96491228204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174231.24470470357,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174224.49538998015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176492.5476429233,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 176487.83851554708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343677.25110564777,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 343653.80835381016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1239135.9999999257,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1239118.3745583026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1030546.1544118423,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1030469.7058823694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1027429.3069016531,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027390.0146842987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1020277.2119884208,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1020224.5614035231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 677654.587778886,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 677620.659553825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1015206.0682147681,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1015185.3410740173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44586.85004764008,
            "unit": "ns/iter",
            "extra": "iterations: 15745\ncpu: 44584.53477294362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 217252.72561161435,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 217250.38711675195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176094.61302490576,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 176079.55745536808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173135.50210759815,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 173132.48202330805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174374.48569295826,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 174361.9557103766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 333949.1967603211,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 333937.97046212305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1231744.633156906,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1231623.9858906665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1027970.9382352981,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1027923.5294117647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1025879.4787077719,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1025883.8472834183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1021231.8116788269,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1021197.3722627662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 673815.241811145,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 673768.3044315974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1013656.5253256834,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1013558.3212735059 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}