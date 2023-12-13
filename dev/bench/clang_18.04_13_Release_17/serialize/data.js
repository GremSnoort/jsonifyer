window.BENCHMARK_DATA = {
  "lastUpdate": 1702490327521,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 18.04 Release c++-17": [
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
        "date": 1702490326721,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 714.3953042688825,
            "unit": "ns/iter",
            "extra": "iterations: 986726\ncpu: 714.3279897357525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10825.478843819343,
            "unit": "ns/iter",
            "extra": "iterations: 76597\ncpu: 10824.784260480174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24193.889767197532,
            "unit": "ns/iter",
            "extra": "iterations: 34536\ncpu: 24192.1212647672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37765.7221474096,
            "unit": "ns/iter",
            "extra": "iterations: 22278\ncpu: 37763.93302809948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48055.92295849048,
            "unit": "ns/iter",
            "extra": "iterations: 16887\ncpu: 48054.52122934798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59777.90529502682,
            "unit": "ns/iter",
            "extra": "iterations: 14202\ncpu: 59773.165751302615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61013.1104000061,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61011.25999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69208.27081180103,
            "unit": "ns/iter",
            "extra": "iterations: 12577\ncpu: 69203.66542100663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79229.33725347742,
            "unit": "ns/iter",
            "extra": "iterations: 11054\ncpu: 79223.9279898679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 592.3206413942298,
            "unit": "ns/iter",
            "extra": "iterations: 1184794\ncpu: 592.2925841960704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 501.93085851705365,
            "unit": "ns/iter",
            "extra": "iterations: 1390945\ncpu: 501.88102333305784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 488.4621197584163,
            "unit": "ns/iter",
            "extra": "iterations: 1433135\ncpu: 488.43395772205645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 480.39603214073037,
            "unit": "ns/iter",
            "extra": "iterations: 1415524\ncpu: 480.381540687407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 970.0047415128555,
            "unit": "ns/iter",
            "extra": "iterations: 722976\ncpu: 969.9927798433148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4306.814974755877,
            "unit": "ns/iter",
            "extra": "iterations: 187569\ncpu: 4306.68553972138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18191.96317536219,
            "unit": "ns/iter",
            "extra": "iterations: 44291\ncpu: 18191.402316497715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14660.109972423412,
            "unit": "ns/iter",
            "extra": "iterations: 56205\ncpu: 14659.315007561583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15010.82938302141,
            "unit": "ns/iter",
            "extra": "iterations: 54848\ncpu: 15010.571032672064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15703.061489903397,
            "unit": "ns/iter",
            "extra": "iterations: 52594\ncpu: 15688.622276305274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47322.622753462994,
            "unit": "ns/iter",
            "extra": "iterations: 17527\ncpu: 47321.081759570894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 461902.6802651524,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 461883.12085670675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 364808.3111017059,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 364778.85183621803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366352.48654330836,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 366326.3666947012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371097.4736616992,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 371073.7044967872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227582.3608006204,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 227571.8481933978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363492.41512607096,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 363481.7226890758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1861602.3663967394,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1861567.611336033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750763.8068910857,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 750743.5096153851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2504222.0298103364,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2504134.959349591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4363.091341523034,
            "unit": "ns/iter",
            "extra": "iterations: 185841\ncpu: 4362.898929730257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19198.163738743227,
            "unit": "ns/iter",
            "extra": "iterations: 42977\ncpu: 19197.359052516505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15412.931989174005,
            "unit": "ns/iter",
            "extra": "iterations: 53565\ncpu: 15412.722860076597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15036.303321073443,
            "unit": "ns/iter",
            "extra": "iterations: 54922\ncpu: 15035.841739193722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15635.725664903788,
            "unit": "ns/iter",
            "extra": "iterations: 52188\ncpu: 15635.109603740317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47209.70472396398,
            "unit": "ns/iter",
            "extra": "iterations: 17570\ncpu: 47207.620944792376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 461432.7859049586,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 461434.1163908178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382430.20168064744,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 382416.80672269047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381560.51462242746,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 381533.08598865167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379847.1691974172,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 379839.17570499075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224387.87593692346,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 224381.67485138378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376709.4619706395,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376699.65427830484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1874221.7043120046,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1874133.2648870621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 721960.3710054359,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 721947.9345284521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4383.670189780118,
            "unit": "ns/iter",
            "extra": "iterations: 183739\ncpu: 4383.504862876146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19302.885035309195,
            "unit": "ns/iter",
            "extra": "iterations: 43048\ncpu: 19302.134826240486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15480.422479832489,
            "unit": "ns/iter",
            "extra": "iterations: 54173\ncpu: 15480.24292544261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15035.777381771268,
            "unit": "ns/iter",
            "extra": "iterations: 55274\ncpu: 15035.640626696097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15637.46145942277,
            "unit": "ns/iter",
            "extra": "iterations: 52555\ncpu: 15636.71962705742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47810.71857239855,
            "unit": "ns/iter",
            "extra": "iterations: 17596\ncpu: 47807.33121163916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 450863.4720169023,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 450849.6832101362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 371807.64586916036,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 371777.7969018923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368753.68454931077,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 368735.92274678015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370614.8515021213,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 370587.6824034328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225777.1204756903,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 225767.06308169742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369429.9021038917,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 369410.43366251886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.30965738442484,
            "unit": "ns/iter",
            "extra": "iterations: 2265717\ncpu: 305.2861853444206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1625.7202031789047,
            "unit": "ns/iter",
            "extra": "iterations: 432328\ncpu: 1625.6592217020261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1246.0570677737194,
            "unit": "ns/iter",
            "extra": "iterations: 561280\ncpu: 1245.9909492588374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1308.9690207225806,
            "unit": "ns/iter",
            "extra": "iterations: 559729\ncpu: 1308.9164577858219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1031.868338170087,
            "unit": "ns/iter",
            "extra": "iterations: 678830\ncpu: 1031.85201007616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8163.559354446871,
            "unit": "ns/iter",
            "extra": "iterations: 85756\ncpu: 8162.729138485881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17032.79401348619,
            "unit": "ns/iter",
            "extra": "iterations: 41226\ncpu: 17031.38068209381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4567.233350884443,
            "unit": "ns/iter",
            "extra": "iterations: 153837\ncpu: 4567.0287382099405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4527.527207076491,
            "unit": "ns/iter",
            "extra": "iterations: 154537\ncpu: 4527.492445174969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4557.57179697571,
            "unit": "ns/iter",
            "extra": "iterations: 153558\ncpu: 4557.488375727705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9387.1513327019,
            "unit": "ns/iter",
            "extra": "iterations: 73910\ncpu: 9387.176295494484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8513.33373885432,
            "unit": "ns/iter",
            "extra": "iterations: 82199\ncpu: 8513.18385868447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3277.9865901369512,
            "unit": "ns/iter",
            "extra": "iterations: 213947\ncpu: 3277.923037013821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16336.97175821058,
            "unit": "ns/iter",
            "extra": "iterations: 42384\ncpu: 16335.164212910533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13035.48507323895,
            "unit": "ns/iter",
            "extra": "iterations: 53796\ncpu: 13035.0286266636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13113.743750704105,
            "unit": "ns/iter",
            "extra": "iterations: 53366\ncpu: 13112.674736723726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13379.57376390936,
            "unit": "ns/iter",
            "extra": "iterations: 52302\ncpu: 13378.784750105184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29159.237390191258,
            "unit": "ns/iter",
            "extra": "iterations: 24247\ncpu: 29157.70610797228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99112.67608817783,
            "unit": "ns/iter",
            "extra": "iterations: 7076\ncpu: 99109.10118711126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85585.06296613286,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 85585.31605330654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85421.3132399082,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 85391.56801159665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85362.31145744065,
            "unit": "ns/iter",
            "extra": "iterations: 8213\ncpu: 85356.59320589266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55736.83782926101,
            "unit": "ns/iter",
            "extra": "iterations: 12604\ncpu: 55733.830529990155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85498.593681114,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 85495.49350967421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3125.063693039779,
            "unit": "ns/iter",
            "extra": "iterations: 223117\ncpu: 3125.021401327554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15657.095514004455,
            "unit": "ns/iter",
            "extra": "iterations: 44873\ncpu: 15656.401399505401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12469.881388259984,
            "unit": "ns/iter",
            "extra": "iterations: 56099\ncpu: 12469.190181643171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12248.475156584136,
            "unit": "ns/iter",
            "extra": "iterations: 57158\ncpu: 12247.24622974907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12799.246445585775,
            "unit": "ns/iter",
            "extra": "iterations: 53525\ncpu: 12798.72956562352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27488.047200190424,
            "unit": "ns/iter",
            "extra": "iterations: 25466\ncpu: 27485.87135788915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98243.38528501678,
            "unit": "ns/iter",
            "extra": "iterations: 7122\ncpu: 98236.70317326521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83802.84397843028,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 83801.10245655941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82396.91575608063,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 82393.07954412031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82965.57115771784,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 82962.48370660066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56019.528697044785,
            "unit": "ns/iter",
            "extra": "iterations: 12510\ncpu: 56015.091926458794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84058.97872084944,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 84053.50866706631 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}