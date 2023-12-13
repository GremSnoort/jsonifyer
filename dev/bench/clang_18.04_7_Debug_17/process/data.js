window.BENCHMARK_DATA = {
  "lastUpdate": 1702492179447,
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
      }
    ]
  }
}