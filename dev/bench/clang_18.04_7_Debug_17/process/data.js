window.BENCHMARK_DATA = {
  "lastUpdate": 1705777676520,
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
        "date": 1702492173268,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17032.861732245463,
            "unit": "ns/iter",
            "extra": "iterations: 41680\ncpu: 17030.674184261035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 134100.6314876128,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 134088.62596624074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250966.39601386536,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 250956.64355863672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 366117.89893840265,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 366102.42038216547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 483345.2422222232,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 483320.222222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 599144.0572414172,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 599128.6896551725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 576406.3499999564,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576394.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 669888.2797101523,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 669851.3043478266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 768252.7816091657,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 768227.5862068969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13290.008084767172,
            "unit": "ns/iter",
            "extra": "iterations: 52568\ncpu: 13289.799878252903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11194.010753546712,
            "unit": "ns/iter",
            "extra": "iterations: 62584\ncpu: 11193.907388469908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11265.449134948916,
            "unit": "ns/iter",
            "extra": "iterations: 62135\ncpu: 11265.016496338603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11259.059554826601,
            "unit": "ns/iter",
            "extra": "iterations: 62178\ncpu: 11258.686352085942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20049.618228620006,
            "unit": "ns/iter",
            "extra": "iterations: 35351\ncpu: 20048.7708975701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56115.83090000068,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56115.299999999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293470.16082473384,
            "unit": "ns/iter",
            "extra": "iterations: 2910\ncpu: 293459.07216494856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231387.43666938637,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 231385.5709248717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229958.91650904887,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 229956.74142123718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228002.69911505104,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 228002.9766693486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 505332.1400000641,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505321.00000000215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4126902.754464368,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4126675.8928571376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3349140.5362316645,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3348968.4782608696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3376618.2246379857,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3376468.8405797156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3323227.3082438135,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3323070.6093189903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1969461.6396590022,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1969353.7313432805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3259458.7323940936,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3259283.0985915433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12485994.376470443,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12485576.470588246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5554069.71000025,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5553711.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16021468.030303229,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16020698.484848475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61972.0574679136,
            "unit": "ns/iter",
            "extra": "iterations: 13712\ncpu: 61969.01254375715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 342390.83146961854,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 342370.4472843452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 264464.723371424,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 264451.92960790347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263684.04351823655,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 263679.4667483909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 260384.89553598315,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 260384.48223504316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 504728.01199998683,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504726.9000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4196081.84615363,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4195882.805429867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3411658.868131804,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3411492.6739926664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3413534.533088125,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3413428.308823525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3378005.5797103946,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3377873.5507246214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2020421.560869725,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2020319.3478260844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3302997.8647689316,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3302860.854092514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12759084.738095658,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12758627.380952433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5675681.6099994015,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5675331.000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53164.84139999602,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53160.650000000234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 305630.61178570805,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 305603.8571428589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 228698.55620985408,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 228686.1349036397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224949.90980805375,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 224937.7596634244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220567.96565971343,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 220554.9703072559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 592837.0429740234,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 592810.4365620776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4146252.2857140168,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4146120.0892857052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3355972.467625751,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3355794.2446043235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3372423.0072464976,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3372293.840579699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3337044.1577064223,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3336943.369175614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1959122.5675105713,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1958981.0126582384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3262596.5649119457,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3262541.0526315747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6838.924966092611,
            "unit": "ns/iter",
            "extra": "iterations: 102487\ncpu: 6838.790285597224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38577.165777752096,
            "unit": "ns/iter",
            "extra": "iterations: 18187\ncpu: 38577.236487601345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30952.877068034406,
            "unit": "ns/iter",
            "extra": "iterations: 22606\ncpu: 30952.60992656822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30726.591521483948,
            "unit": "ns/iter",
            "extra": "iterations: 22787\ncpu: 30726.61605301291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23504.159634200707,
            "unit": "ns/iter",
            "extra": "iterations: 29743\ncpu: 23504.192583128766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 173149.0247218767,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 173147.11990111342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 281160.95094489574,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 281152.71411338606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71413.8544213586,
            "unit": "ns/iter",
            "extra": "iterations: 9816\ncpu: 71411.83781581084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71972.55134967055,
            "unit": "ns/iter",
            "extra": "iterations: 9669\ncpu: 71969.09711449004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71105.3940471451,
            "unit": "ns/iter",
            "extra": "iterations: 9844\ncpu: 71103.5859406751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145800.49209650012,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 145799.16805324316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131924.5904283877,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 131921.90356694866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44118.368728779584,
            "unit": "ns/iter",
            "extra": "iterations: 15906\ncpu: 44118.00578398168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 216407.56961635174,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 216405.4146039632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174941.4125280784,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 174939.5557773874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 176183.9739217708,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 176178.68605817368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174451.22103432525,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 174444.62953754296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 334649.2535816445,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 334635.86437440274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1207358.0726644078,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1207347.0588235387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1007669.6434782497,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1007650.4347826043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1002381.1795977721,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1002325.5747126414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1001888.3628570816,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1001880.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 654934.0224719455,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 654928.1835206039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 989950.4471086249,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 989940.6205923985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43955.64158626725,
            "unit": "ns/iter",
            "extra": "iterations: 15962\ncpu: 43954.47312366916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 216990.39062988025,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 216985.7275829953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172665.08630070527,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 172659.81701285977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174307.88595615365,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 174303.21215139478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172758.87660732653,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 172755.48961424336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 334426.0177287856,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 334416.62673694576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1206100.860103513,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1206077.374784103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010208.2586704363,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1010177.3121387176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1010145.8874459545,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1010137.2294372364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 998994.3500001378,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 998965.1428571531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 657694.9389671666,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 657675.2112675983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 992409.5416666247,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 992387.9310344851 ns\nthreads: 1"
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
        "date": 1702503225985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17119.342482659224,
            "unit": "ns/iter",
            "extra": "iterations: 40513\ncpu: 17118.510107866612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137869.00715912483,
            "unit": "ns/iter",
            "extra": "iterations: 6146\ncpu: 137869.03677188416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 259952.59603841955,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 259944.77791116448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 380399.41001417267,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 380372.55550307035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 502419.0138328777,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 502377.46397694503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 500990.8509999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500992.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 597173.1879999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597124.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 695179.9692192598,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 695138.8138138138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 793523.5154109589,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 793448.5445205476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13851.192773976249,
            "unit": "ns/iter",
            "extra": "iterations: 49986\ncpu: 13850.210058816467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11492.104839105254,
            "unit": "ns/iter",
            "extra": "iterations: 61065\ncpu: 11491.63841807907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11545.993997456337,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11545.58880881729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11413.950308435884,
            "unit": "ns/iter",
            "extra": "iterations: 61439\ncpu: 11413.698139618156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19958.420099786403,
            "unit": "ns/iter",
            "extra": "iterations: 35075\ncpu: 19957.898788310755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56206.392199999296,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56206.56999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 292372.25349710125,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 292369.60081883316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231939.29912901344,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 231936.9624387586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 225547.48130470523,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 225548.6343145054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226757.9851063831,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 226754.8138297867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 646503.5128388171,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 646479.5292439371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4350909.88372093,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4350808.837209302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3491360.766037669,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3491295.4716981137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3487064.541353444,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3486842.481203006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3493980.247191139,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3493951.310861419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2011734.2331155266,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2011644.0087145972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3393366.021977948,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3393190.4761904655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12844025.939758819,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12843627.710843379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5725027.139999952,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5724795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16501813.437500346,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16501195.312499994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60911.67116890711,
            "unit": "ns/iter",
            "extra": "iterations: 13919\ncpu: 60909.85702995905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321462.8939903094,
            "unit": "ns/iter",
            "extra": "iterations: 2679\ncpu: 321459.8730869733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 260800.17620207745,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 260795.4656116848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263459.31871689163,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 263455.1206592115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255448.04364724114,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 255438.9536621823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 503095.395999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503096.1000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4396055.88625588,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4395982.938388607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3554255.731800824,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3554180.0766283576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3547819.3536120234,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3547670.7224334734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3505347.388679338,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3505347.169811342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2061511.002212397,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2061459.9557522016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3431951.3616236527,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3431798.8929889235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13159055.765431786,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13158882.716049358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5606520.779999755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5606372.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52675.781900001086,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52673.520000000455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 291468.4928229809,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 291468.6261107325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224770.12315010116,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 224764.799154334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 220579.96478508017,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 220576.04867944075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216722.047558175,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 216716.97775504852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 579442.9077539879,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 579418.9171123009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4370546.084506829,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4370466.197183081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3521965.2301885565,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3521845.2830188484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3496722.368420952,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3496685.338345852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3484810.621722907,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3484743.820224708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2019120.116883164,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2019083.1168831172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3395390.9343066877,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3395360.948905107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6845.382471365786,
            "unit": "ns/iter",
            "extra": "iterations: 102324\ncpu: 6845.113560845952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38106.41420794758,
            "unit": "ns/iter",
            "extra": "iterations: 18370\ncpu: 38106.52150244966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30054.822999356133,
            "unit": "ns/iter",
            "extra": "iterations: 23305\ncpu: 30053.6193949795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28746.732713586487,
            "unit": "ns/iter",
            "extra": "iterations: 24311\ncpu: 28746.810085969188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23669.422950819575,
            "unit": "ns/iter",
            "extra": "iterations: 29585\ncpu: 23667.993915835796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 172412.31028543925,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172412.59842519625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 279632.1335999892,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 279623.7599999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73761.22084210573,
            "unit": "ns/iter",
            "extra": "iterations: 9500\ncpu: 73754.69473684336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73816.45320560253,
            "unit": "ns/iter",
            "extra": "iterations: 9499\ncpu: 73813.38035582707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73203.95124252734,
            "unit": "ns/iter",
            "extra": "iterations: 9537\ncpu: 73201.57282164204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 147375.13723425826,
            "unit": "ns/iter",
            "extra": "iterations: 4751\ncpu: 147370.2167964636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 136476.9883131986,
            "unit": "ns/iter",
            "extra": "iterations: 5134\ncpu: 136467.90027269226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45411.70056497397,
            "unit": "ns/iter",
            "extra": "iterations: 15399\ncpu: 45411.29294109971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 222049.36870618953,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 222043.62651370274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 179883.40718718123,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 179875.775594621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 178036.9119816854,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 178031.18799287756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177856.77822990785,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 177843.2095625607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 340452.96887158236,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 340437.0136186779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1256860.7387388633,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1256759.6396396311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1044036.8221225073,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1044001.644245152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1039024.4866468522,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1038970.6231454029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1036481.081723684,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1036471.6196136638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 672606.4293948215,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 672577.0413064262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1023608.7672036059,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1023594.2898975079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45703.02675607027,
            "unit": "ns/iter",
            "extra": "iterations: 15361\ncpu: 45701.49078835996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220621.18193264364,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 220621.5297450439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177346.49505955068,
            "unit": "ns/iter",
            "extra": "iterations: 3947\ncpu: 177336.35672662884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178160.94080445406,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 178157.7030103726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176515.00783421737,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 176513.57088703295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 336446.48342142656,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 336442.86400769104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1253371.3172043026,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1253326.7025089697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1035842.6874073403,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1035790.5185185245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1035957.9377777833,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1035943.2592592713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1033348.6976401286,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1033312.2418878919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 675020.954720577,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 675021.676300588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1021600.0891814101,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1021586.4035087761 ns\nthreads: 1"
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
        "date": 1705574869304,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16802.724149521488,
            "unit": "ns/iter",
            "extra": "iterations: 41653\ncpu: 16801.788586656425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133402.88895879016,
            "unit": "ns/iter",
            "extra": "iterations: 6358\ncpu: 133395.58037118593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250737.71321188507,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 250724.71812662625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 365190.5290102392,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 365171.2457337884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 481274.5083240977,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 481244.39511653717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 596894.3945017786,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 596882.3367697599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 572476.550000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572462.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 664224.5541218383,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 664222.652329749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 760693.8683565347,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 760674.0801308264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13473.466879153422,
            "unit": "ns/iter",
            "extra": "iterations: 52082\ncpu: 13472.562497599927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11403.02829238181,
            "unit": "ns/iter",
            "extra": "iterations: 61536\ncpu: 11402.564352574107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11285.340946453993,
            "unit": "ns/iter",
            "extra": "iterations: 62655\ncpu: 11284.436996249304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11223.741314846719,
            "unit": "ns/iter",
            "extra": "iterations: 62319\ncpu: 11222.869429868906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19316.75641131617,
            "unit": "ns/iter",
            "extra": "iterations: 36225\ncpu: 19314.893029675666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56426.81949999542,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56425.69999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 307938.3104316404,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 307925.9352517987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 239211.87082278935,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 239202.72395394518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235153.3562741963,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 235153.0679933671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 233996.0921305023,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 233981.9029339178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 517549.0220000256,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517537.3000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4196963.648648516,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4196787.387387378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3387883.85714275,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3387819.4139194144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3384075.8363637426,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3383934.1818181816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3344800.874100715,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3344704.6762589905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1960123.3686438878,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1960092.7966101696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3280752.780918918,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3280479.5053003537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12512527.674418783,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12510949.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5554093.249999141,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5553498.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16218582.9846154,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16217573.846153827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61330.38988416378,
            "unit": "ns/iter",
            "extra": "iterations: 13899\ncpu: 61325.59896395426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 333094.67169955926,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 333057.18157181557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 271853.68569615897,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 271834.9825562951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 266140.9087523194,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 266127.0949720669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 261122.46972926293,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 261100.3346516581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 513862.7249999672,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513838.20000000217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4247463.999999974,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4247210.045662086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3416289.4669118854,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3415945.5882352926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3460948.156716615,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3460629.1044776053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3403131.693430723,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3402782.1167882993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2010447.334773017,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2010305.3995680294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3320895.4785712715,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3320584.28571429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12850752.84337277,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12849325.301204804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5653635.85,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5653506.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52728.866799998286,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52724.69000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 305191.94288753124,
            "unit": "ns/iter",
            "extra": "iterations: 2819\ncpu: 305161.1919120258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 231960.4380746382,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 231933.99134667357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 227418.94715880507,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 227399.68135953275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224983.15101287892,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 224969.06077347917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 606061.0706293125,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 606041.3986013947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4221870.613636466,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4221886.363636364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3388527.4160584863,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3388521.8978102175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3389252.1605838886,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3389140.8759124056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3347795.4604314365,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3347703.9568345384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1956655.2494759401,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1956603.3542976948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3278019.2765954803,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3278012.7659574253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6794.798164605541,
            "unit": "ns/iter",
            "extra": "iterations: 103411\ncpu: 6794.387444275771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38074.72786082737,
            "unit": "ns/iter",
            "extra": "iterations: 18395\ncpu: 38074.70508290307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30789.245090371944,
            "unit": "ns/iter",
            "extra": "iterations: 24289\ncpu: 30788.307464284248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30552.298552190718,
            "unit": "ns/iter",
            "extra": "iterations: 23691\ncpu: 30551.80870372696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23489.487397773497,
            "unit": "ns/iter",
            "extra": "iterations: 29836\ncpu: 23488.336238101587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 177584.8810550423,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 177584.75779863013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 284917.49959285895,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 284903.460912054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71266.63057977747,
            "unit": "ns/iter",
            "extra": "iterations: 9745\ncpu: 71266.68034889724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71647.26916786924,
            "unit": "ns/iter",
            "extra": "iterations: 9782\ncpu: 71642.40441627479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70948.92014592455,
            "unit": "ns/iter",
            "extra": "iterations: 9868\ncpu: 70944.35549250041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143507.85603114462,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 143507.7206635279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132113.0194633247,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 132108.35222978189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44537.36456873686,
            "unit": "ns/iter",
            "extra": "iterations: 15698\ncpu: 44536.83908778181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219735.75894541322,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 219726.45951035595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175149.30152387545,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 175146.56507619246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174159.60363274434,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 174148.09654142804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175689.9590966221,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 175686.67503136693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 332272.07611798635,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 332253.3301617513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1219115.2408375903,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1219078.184991295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1016821.6976744799,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1016763.6627906873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1015278.0681160631,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1015260.0000000112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1015355.6182873356,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1015340.6386066732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 660676.4783019006,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 660623.7735849055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 998506.6623748519,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 998486.8383404779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43955.34445144402,
            "unit": "ns/iter",
            "extra": "iterations: 15860\ncpu: 43954.85498108463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 216330.21532283872,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 216315.6626506025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173198.2685047235,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 173193.14456035706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173207.50123577545,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 173183.24270884946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173415.54120265757,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 173398.86166790323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 325426.1579925546,
            "unit": "ns/iter",
            "extra": "iterations: 2152\ncpu: 325397.630111524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1213058.2750863857,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212886.67820069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1002655.8022922471,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1002479.5128939877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1011718.3164739889,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011697.8323699574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1013556.4869565183,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1013502.8985507359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 659541.6880302076,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 659541.1875589027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 995668.9999999721,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 995608.0000000001 ns\nthreads: 1"
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
        "date": 1705772692350,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17002.153439152815,
            "unit": "ns/iter",
            "extra": "iterations: 41202\ncpu: 17001.24023105675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137119.53575463276,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 137111.4124293786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 257895.80445103042,
            "unit": "ns/iter",
            "extra": "iterations: 3370\ncpu: 257875.19287833816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 376538.1638986119,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 376516.1713286715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 498737.8702115411,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 498720.0114351057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 616764.4382102579,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 616738.7073863634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 594597.5970000176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594565.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 686783.7918215472,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 686744.0892193308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 783510.7129550959,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 783469.3480101604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13692.026772144445,
            "unit": "ns/iter",
            "extra": "iterations: 51322\ncpu: 13691.835859865167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11412.91897959846,
            "unit": "ns/iter",
            "extra": "iterations: 61466\ncpu: 11412.361305437145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11499.223214285774,
            "unit": "ns/iter",
            "extra": "iterations: 60928\ncpu: 11498.573726365541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11566.012702440177,
            "unit": "ns/iter",
            "extra": "iterations: 60697\ncpu: 11565.130072326476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19896.93662411365,
            "unit": "ns/iter",
            "extra": "iterations: 35250\ncpu: 19896.039716312047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56006.67539999903,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56004.58000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 289733.3892663049,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 289731.75951086986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231385.0702702703,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 231376.48648648683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229345.47080979266,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 229344.14850685972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226227.6679978659,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 226219.4355697555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 517558.36200004525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517544.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4294072.249999887,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4293834.722222228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3454560.5373134366,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3454447.761194035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3535062.091254778,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3534884.410646382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3468274.430711548,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3468041.198501873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2045031.0088105374,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2041006.8281938278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3387484.7179486793,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3387365.934065945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12932692.34146348,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12932285.365853671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5745662.180000294,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5745418.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16531613.796875177,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16531043.75000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61938.63819898282,
            "unit": "ns/iter",
            "extra": "iterations: 13770\ncpu: 61935.5482933915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 324927.51639654447,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 324923.1436110063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265072.4120743036,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 265054.458204335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 256846.34862109777,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 256834.02278177283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255882.59128877643,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 255863.4844868739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 519114.61199995305,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519099.40000000177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4387604.726415067,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4387386.792452836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3540479.9961978816,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3540342.58555135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3591705.32307692,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3591497.6923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3530870.151515091,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3530656.43939396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2092773.301801889,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2092693.2432432515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3441821.6914498005,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3441644.6096654353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13378972.227848167,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13378339.240506368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5870472.010000185,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5870119.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52960.811899998815,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52957.59000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 291169.0108991791,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 291158.7874659401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 225182.46855929823,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 225172.43300610213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222245.36046814927,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 222235.78673602012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216945.5794701909,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 216938.0285277636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 621052.3704496741,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 621020.9850107043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4303507.101851706,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4303180.555555563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3468477.5186566464,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3468267.5373134473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3552518.583969408,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3552300.763358774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3469970.661710045,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3469812.639405212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2042491.791208719,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2042414.0659340667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3398943.084249074,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3398879.120879102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6915.172643129287,
            "unit": "ns/iter",
            "extra": "iterations: 101342\ncpu: 6914.886226835874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38489.999532975766,
            "unit": "ns/iter",
            "extra": "iterations: 19271\ncpu: 38489.49717191649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29322.3125798492,
            "unit": "ns/iter",
            "extra": "iterations: 23482\ncpu: 29321.33123243345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29034.101514650425,
            "unit": "ns/iter",
            "extra": "iterations: 24164\ncpu: 29033.185730839155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23830.087026070843,
            "unit": "ns/iter",
            "extra": "iterations: 29382\ncpu: 23828.735280103443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 178638.50178662714,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 178634.2266462475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 291255.1532694676,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 291238.69221158174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72930.22451747544,
            "unit": "ns/iter",
            "extra": "iterations: 9585\ncpu: 72929.80699008919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73345.4453043251,
            "unit": "ns/iter",
            "extra": "iterations: 9562\ncpu: 73342.38653001413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72956.81355402964,
            "unit": "ns/iter",
            "extra": "iterations: 9606\ncpu: 72955.7047678532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149213.0939568619,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 149208.5842408718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135845.62129144275,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 135837.50242388953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45125.92150412705,
            "unit": "ns/iter",
            "extra": "iterations: 15504\ncpu: 45125.316047472166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 223560.39455999053,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 223554.78400000266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180693.57253484908,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 180687.68714507198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179588.2335129568,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 179579.72799589424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179013.58216202594,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 179011.11679018877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341160.09800097847,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 341146.3188688492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1244800.0766488465,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1244767.7361853786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1036738.4385185014,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1036692.888888903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1043203.6095380512,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1043197.6154992625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1027788.9617646999,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1027749.8529411635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 674597.7076923064,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 674567.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1023492.6924198446,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1023427.4052478014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44670.16820643545,
            "unit": "ns/iter",
            "extra": "iterations: 15695\ncpu: 44667.582032494865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220994.6050473045,
            "unit": "ns/iter",
            "extra": "iterations: 3170\ncpu: 220983.62776025123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178586.04750957823,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 178572.56704981075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176958.04945748512,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 176947.6659096639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177562.2646387893,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 177557.46514575384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 333657.2920481711,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 333648.67469879845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1235828.8989362612,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1235797.1631205834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1036670.4711963396,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1036646.5288035426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1041997.6337817811,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1041973.2436472254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1029684.3817913936,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1029648.8986784144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 676452.5241779434,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676448.8394584256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1023594.2829911682,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1023555.5718475155 ns\nthreads: 1"
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
        "date": 1705774111870,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16901.67799387924,
            "unit": "ns/iter",
            "extra": "iterations: 41493\ncpu: 16901.356855373197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 136000.66826684153,
            "unit": "ns/iter",
            "extra": "iterations: 6041\ncpu: 135998.06323456383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 256618.09557729913,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 256615.64262392413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 372100.7237807582,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 372092.49028916715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 491711.0311438337,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 491694.11098527745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 611676.6594101012,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 611661.165730337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 586868.1389999893,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586848.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 680125.3608855605,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 680119.1143911445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 779510.1533948542,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 779469.2372171008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13635.25775735586,
            "unit": "ns/iter",
            "extra": "iterations: 51145\ncpu: 13634.934011144796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11446.929544970917,
            "unit": "ns/iter",
            "extra": "iterations: 61117\ncpu: 11446.66132172716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11433.726665367629,
            "unit": "ns/iter",
            "extra": "iterations: 61668\ncpu: 11433.600895115762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11374.184950372062,
            "unit": "ns/iter",
            "extra": "iterations: 61357\ncpu: 11374.105644017807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19888.819274028276,
            "unit": "ns/iter",
            "extra": "iterations: 35208\ncpu: 19887.75562372186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55436.18169999718,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55434.75000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 295936.9889004474,
            "unit": "ns/iter",
            "extra": "iterations: 2883\ncpu: 295929.6566077001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235427.3073521265,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 235429.40851299037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232649.9318429424,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 232635.65976008747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 231477.12683325872,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 231473.22107550298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 508492.83800005197,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508484.70000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4274527.899082524,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4274505.504587165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3443969.6791045167,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3443851.8656716365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3428301.760148003,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3428250.922509222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3439381.5576207642,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3439328.2527881037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1995199.8441557344,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1995132.2510822543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3347809.7725631804,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3347749.0974729224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12687137.511903757,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12686688.095238097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5810318.869999946,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5810285.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16474823.95312494,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16474317.187500032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60920.825125627714,
            "unit": "ns/iter",
            "extra": "iterations: 13930\ncpu: 60920.071787508954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321759.34883718006,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 321755.8139534878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 263879.38492308214,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 263881.9076923074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 265597.58637771686,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 265587.1826625393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 262812.6568447037,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 262807.2130141186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 517012.4270000542,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517000.8999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4376265.995305073,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4376303.286384986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3519588.359848723,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3519507.954545459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3518514.037736133,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3518353.2075471515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3505447.9398496384,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3505410.9022556343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2051640.4083883385,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2051591.169977927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3417271.7851563836,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3417264.8437500177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12984918.719511613,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12984559.756097564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5652598.749999243,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5652649.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52393.52430000963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52393.129999999386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 297398.41343487834,
            "unit": "ns/iter",
            "extra": "iterations: 2888\ncpu: 297389.02354570676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 229639.52859061694,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 229634.65771812177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 231011.02821066015,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 231003.68081676503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223052.21837586208,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 223047.24102030112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 600733.0487302841,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 600730.8167467375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4335409.376743735,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4335322.790697693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3476370.616541621,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3476324.060150371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3441891.771217762,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3441873.062730624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3456331.1481482135,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3456063.333333319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2003654.2607757787,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2003609.91379311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3358615.685920332,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3358471.841155233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6781.04051402661,
            "unit": "ns/iter",
            "extra": "iterations: 102952\ncpu: 6780.735682648264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36830.7786259527,
            "unit": "ns/iter",
            "extra": "iterations: 18995\ncpu: 36827.886285864784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28876.35912011955,
            "unit": "ns/iter",
            "extra": "iterations: 24276\ncpu: 28875.465480309624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29726.13588362642,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 29724.025616014376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23690.134339443724,
            "unit": "ns/iter",
            "extra": "iterations: 29619\ncpu: 23689.142104730065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 178495.91851284026,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 178484.46651387753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 275651.90523002716,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 275644.4750294891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72879.37751589784,
            "unit": "ns/iter",
            "extra": "iterations: 9589\ncpu: 72876.49389925858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72878.86323009305,
            "unit": "ns/iter",
            "extra": "iterations: 9622\ncpu: 72879.35980045755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72443.39562830112,
            "unit": "ns/iter",
            "extra": "iterations: 9653\ncpu: 72439.16917020513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 146813.21460038473,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 146801.69918187623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135174.65425429682,
            "unit": "ns/iter",
            "extra": "iterations: 5183\ncpu: 135165.83060003835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45274.27925392607,
            "unit": "ns/iter",
            "extra": "iterations: 15280\ncpu: 45271.96335078491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 224056.17955269082,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 224045.2715654963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180605.30301468493,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 180594.4859572267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180171.21022871893,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 180166.53816499456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179302.4382194958,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 179287.74622665462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 345293.44055252,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 345276.07301430736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1239678.237588597,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1239587.411347519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1036306.5103549697,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1036314.6449704125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1022783.3255473083,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1022727.2992700617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1019748.3250728546,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1019686.8804664788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 676080.4729729375,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 676048.1660231666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1017516.807246301,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1017443.9130434829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45023.674061214944,
            "unit": "ns/iter",
            "extra": "iterations: 15552\ncpu: 45022.935956789624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224184.9926352663,
            "unit": "ns/iter",
            "extra": "iterations: 3123\ncpu: 224178.32212615735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179878.1445412664,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179870.29728344522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179198.6500256104,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 179188.0952380975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179176.34163246476,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 179176.20636550308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 341384.17968748725,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 341374.75585937354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1231214.0632689646,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1231207.732864685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1028477.2155425152,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1028414.2228739064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1018338.4366812654,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1018291.1208151445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1024382.6403508491,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1024330.7017543922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 677446.5938103779,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 677411.7021276536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1013896.3376812502,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1013888.5507246349 ns\nthreads: 1"
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
        "date": 1705777674045,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16860.438832609787,
            "unit": "ns/iter",
            "extra": "iterations: 41460\ncpu: 16860.291847563916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 136703.97509239218,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 136697.33247629763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 257025.19307076852,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 257012.55552265316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 375022.5476294009,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 374995.73727707716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 494399.7755102015,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 494349.9433106576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 615562.5782793391,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 615548.3779971792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 587527.3890000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587507.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 685628.7516878736,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 685593.2483120784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 778162.4625736632,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 778108.5786375105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13623.350494008868,
            "unit": "ns/iter",
            "extra": "iterations: 51416\ncpu: 13622.403531974503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11349.051832979423,
            "unit": "ns/iter",
            "extra": "iterations: 61621\ncpu: 11348.309829441243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11470.78986027627,
            "unit": "ns/iter",
            "extra": "iterations: 61264\ncpu: 11469.86811177854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11366.957142161695,
            "unit": "ns/iter",
            "extra": "iterations: 61599\ncpu: 11366.858228217976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19856.153769559678,
            "unit": "ns/iter",
            "extra": "iterations: 35150\ncpu: 19855.65576102415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56068.74400000379,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56064.80999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 290452.99759781687,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 290435.3122855183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232252.08664850076,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 232237.9564032694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 233095.17425904836,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 233081.09220636674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230286.97126746466,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 230270.86466165405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 513746.2520000327,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513699.40000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4308767.065116478,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4308547.906976739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3452904.739776799,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3452695.167286238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3469766.584269595,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3469681.6479400713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3469172.1641792553,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3468995.8955223905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2009135.1041215688,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2009014.316702815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3373884.226277408,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3373659.8540145988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12724956.119048633,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12724407.142857144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5757640.620000757,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5757531.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16357953.292306494,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16357295.384615391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61499.192704946145,
            "unit": "ns/iter",
            "extra": "iterations: 13845\ncpu: 61496.59082701317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 338859.82213435095,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 338849.683794466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 266901.255517535,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 266895.1196767164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263761.2455494194,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 263748.64947820595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 257769.12834387712,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 257754.7941088063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 522841.50700006646,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522791.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4371031.113207192,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4370739.1509433845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3537959.0076043303,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3537714.4486691994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3549930.1915708994,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3549652.490421447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3525118.7310608015,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3524840.151515134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2064559.0757238679,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2064437.6391982173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3439164.859778547,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3438986.3468634747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13023821.378048867,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 13023107.317073144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5651218.89000011,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5650796.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52979.550200007,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52978.009999999646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 298285.240484454,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 298268.99653979234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227715.73703801315,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 227709.04014889777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 236041.95425867854,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 236027.7602523661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221532.2585580948,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 221526.29668049735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 613790.2650602917,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 613768.2494684588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4326385.40930257,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4326184.186046516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3476499.9925651583,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3476303.71747212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3493887.749063743,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3493687.2659175997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3470648.180811918,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3470449.446494479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2017011.8771552101,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2016901.7241379279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3371906.235507229,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3371776.4492753544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6823.018738453283,
            "unit": "ns/iter",
            "extra": "iterations: 102303\ncpu: 6822.899621711984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38335.87622327983,
            "unit": "ns/iter",
            "extra": "iterations: 18291\ncpu: 38333.863648789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28839.378908186856,
            "unit": "ns/iter",
            "extra": "iterations: 24180\ncpu: 28838.858560794222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28581.021624495017,
            "unit": "ns/iter",
            "extra": "iterations: 24463\ncpu: 28579.765359931374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23530.679788343397,
            "unit": "ns/iter",
            "extra": "iterations: 29671\ncpu: 23530.275353038414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 174387.89578659038,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 174377.58663674977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 291678.8723404389,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 291676.47058823815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73068.95616782068,
            "unit": "ns/iter",
            "extra": "iterations: 9582\ncpu: 73065.06992277298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73616.1706081118,
            "unit": "ns/iter",
            "extra": "iterations: 9472\ncpu: 73614.29476351352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73370.9940550763,
            "unit": "ns/iter",
            "extra": "iterations: 9588\ncpu: 73369.65999165743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 148049.82794334134,
            "unit": "ns/iter",
            "extra": "iterations: 4731\ncpu: 148043.3734939745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 134995.1985692398,
            "unit": "ns/iter",
            "extra": "iterations: 5172\ncpu: 134993.94818252182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44163.316859362305,
            "unit": "ns/iter",
            "extra": "iterations: 15742\ncpu: 44161.71388641787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220541.1833019513,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 220535.09102322962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176431.25283876187,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 176421.650264953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175671.9700779457,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 175667.7143575542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174682.8883883782,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 174674.84984984846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338137.89168277156,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 338131.62475821737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1242552.9273048625,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1242506.7375886405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1034819.6656804592,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1034801.1834319545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1034056.692307689,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1034023.6686390504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1028894.8567251763,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1028827.0467836236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 670120.9715686218,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 670101.0784313685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1011715.8843929911,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011650.5780346893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44234.93670885761,
            "unit": "ns/iter",
            "extra": "iterations: 15800\ncpu: 44234.06962025292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213505.7255742672,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 213500.21439509734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173417.6308341594,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173405.93346573986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174651.842882141,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 174639.32949712282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173353.60158769772,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 173341.18084842528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 330808.75059043785,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 330788.71043930564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1235922.5636042175,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1235829.1519434757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1029749.7360703477,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1029679.3255131923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1028042.9457478893,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1027992.8152492659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1025081.6862168805,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1025071.5542522017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 669433.6198663367,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 669410.506208213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1011953.957970985,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1011933.6231884082 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}