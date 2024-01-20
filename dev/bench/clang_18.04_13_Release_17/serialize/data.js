window.BENCHMARK_DATA = {
  "lastUpdate": 1705773445020,
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
        "date": 1702492939125,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 714.8970454935483,
            "unit": "ns/iter",
            "extra": "iterations: 985173\ncpu: 714.8240968845066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10836.095795090434,
            "unit": "ns/iter",
            "extra": "iterations: 77029\ncpu: 10835.304885173113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24417.527222562967,
            "unit": "ns/iter",
            "extra": "iterations: 34071\ncpu: 24414.965806697783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38897.60305380299,
            "unit": "ns/iter",
            "extra": "iterations: 20892\ncpu: 38893.744016848555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48156.069161677806,
            "unit": "ns/iter",
            "extra": "iterations: 16700\ncpu: 48151.84431137725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60004.334110662254,
            "unit": "ns/iter",
            "extra": "iterations: 14151\ncpu: 59998.69973853436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59899.35429998922,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59894.82000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69312.1912021579,
            "unit": "ns/iter",
            "extra": "iterations: 12594\ncpu: 69306.3284103541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79555.46033621607,
            "unit": "ns/iter",
            "extra": "iterations: 11005\ncpu: 79554.0572467061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 584.2443481287179,
            "unit": "ns/iter",
            "extra": "iterations: 1201372\ncpu: 584.1891603932833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.4970333830622,
            "unit": "ns/iter",
            "extra": "iterations: 1433451\ncpu: 483.4931923030499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 480.24498358253265,
            "unit": "ns/iter",
            "extra": "iterations: 1461551\ncpu: 480.18741733952527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 489.32777381045304,
            "unit": "ns/iter",
            "extra": "iterations: 1429739\ncpu: 489.2671319730386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 968.4621797930643,
            "unit": "ns/iter",
            "extra": "iterations: 722775\ncpu: 968.4298709833629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4259.917192337028,
            "unit": "ns/iter",
            "extra": "iterations: 188014\ncpu: 4259.749805865526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19570.998889047223,
            "unit": "ns/iter",
            "extra": "iterations: 42306\ncpu: 19570.337540774388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15689.537772208141,
            "unit": "ns/iter",
            "extra": "iterations: 52671\ncpu: 15688.899014637998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14677.162278907746,
            "unit": "ns/iter",
            "extra": "iterations: 56255\ncpu: 14676.912274464546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15312.235554707322,
            "unit": "ns/iter",
            "extra": "iterations: 52370\ncpu: 15311.630704601845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47590.03906695815,
            "unit": "ns/iter",
            "extra": "iterations: 17534\ncpu: 47587.823656895125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 445359.9586990001,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 445336.39648941613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361103.61791666417,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 361090.83333333296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362446.6764214249,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 362440.21739130403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 366780.9619723996,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 366764.1872127033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223776.68162230562,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 223774.6261089987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360629.9622092732,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 360607.97342192713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1840967.2555332072,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1840769.416498995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 731087.6830601754,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 731058.5480093666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2514112.336956425,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2513769.021739136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4252.472132775835,
            "unit": "ns/iter",
            "extra": "iterations: 187263\ncpu: 4252.004934236853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19201.532720500905,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 19200.04654410056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15405.80815230685,
            "unit": "ns/iter",
            "extra": "iterations: 53261\ncpu: 15404.016071797332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15061.312792212122,
            "unit": "ns/iter",
            "extra": "iterations: 54541\ncpu: 15060.774463247886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15934.785220740805,
            "unit": "ns/iter",
            "extra": "iterations: 51667\ncpu: 15933.913329591498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46666.08054763359,
            "unit": "ns/iter",
            "extra": "iterations: 17530\ncpu: 46661.66571591563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 467232.17916894756,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 467184.5655693471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383463.29580576066,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 383456.55629139225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382511.7217882084,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 382493.53298611124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 382409.7127288651,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 382401.8308631221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223696.40853346194,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 223691.97751660584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376028.4930796038,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 376007.569204155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1878759.6796714594,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1878628.542094462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 728871.3071484731,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 728839.3558523131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4404.955155490462,
            "unit": "ns/iter",
            "extra": "iterations: 184192\ncpu: 4404.746134468367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19346.572772896976,
            "unit": "ns/iter",
            "extra": "iterations: 43038\ncpu: 19346.05000232354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15427.311658984718,
            "unit": "ns/iter",
            "extra": "iterations: 53581\ncpu: 15426.845336966397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15100.636421678395,
            "unit": "ns/iter",
            "extra": "iterations: 54819\ncpu: 15100.373957934262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15664.131491441121,
            "unit": "ns/iter",
            "extra": "iterations: 52627\ncpu: 15663.39141505319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47582.31332800447,
            "unit": "ns/iter",
            "extra": "iterations: 17512\ncpu: 47579.68250342624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 454331.27486911876,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 454275.7068062826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373572.226012807,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 373530.319829425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369541.96764583717,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 369502.8097062579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370807.2532769637,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 370765.11627907056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228455.14712762248,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 228436.10605666824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368319.01030926936,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 368309.1494845384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 329.7278887176144,
            "unit": "ns/iter",
            "extra": "iterations: 2117064\ncpu: 329.7180907143116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1642.1503941940832,
            "unit": "ns/iter",
            "extra": "iterations: 427962\ncpu: 1642.1371523639934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1249.06521851662,
            "unit": "ns/iter",
            "extra": "iterations: 560163\ncpu: 1249.038583412338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1240.873174755674,
            "unit": "ns/iter",
            "extra": "iterations: 568554\ncpu: 1240.8515286146894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1034.2633143562841,
            "unit": "ns/iter",
            "extra": "iterations: 677483\ncpu: 1034.2351025782234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8203.080576827577,
            "unit": "ns/iter",
            "extra": "iterations: 84739\ncpu: 8202.898311285273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18842.59292298643,
            "unit": "ns/iter",
            "extra": "iterations: 36993\ncpu: 18842.44316492323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4469.951390265848,
            "unit": "ns/iter",
            "extra": "iterations: 156265\ncpu: 4469.808338399496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4451.702390028601,
            "unit": "ns/iter",
            "extra": "iterations: 157404\ncpu: 4451.613046682398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4480.140947192491,
            "unit": "ns/iter",
            "extra": "iterations: 156399\ncpu: 4480.0510233441555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9434.467170866641,
            "unit": "ns/iter",
            "extra": "iterations: 74309\ncpu: 9434.018759504188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8421.7562226177,
            "unit": "ns/iter",
            "extra": "iterations: 83084\ncpu: 8421.582976265072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3219.7840104439897,
            "unit": "ns/iter",
            "extra": "iterations: 216779\ncpu: 3219.408245263601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16202.524130266105,
            "unit": "ns/iter",
            "extra": "iterations: 43203\ncpu: 16201.511469111201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12899.482781013463,
            "unit": "ns/iter",
            "extra": "iterations: 53894\ncpu: 12898.099974023236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12984.168985861257,
            "unit": "ns/iter",
            "extra": "iterations: 53898\ncpu: 12984.066199116913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13296.866061791823,
            "unit": "ns/iter",
            "extra": "iterations: 52793\ncpu: 13295.993787055035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28798.8182495379,
            "unit": "ns/iter",
            "extra": "iterations: 24165\ncpu: 28798.311607696985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99584.08634623034,
            "unit": "ns/iter",
            "extra": "iterations: 7053\ncpu: 99580.19282574837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86314.34908104302,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86312.84075490302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85696.90774502224,
            "unit": "ns/iter",
            "extra": "iterations: 8173\ncpu: 85694.35947632568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85677.86713030587,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85676.1957052213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56007.93977824604,
            "unit": "ns/iter",
            "extra": "iterations: 12537\ncpu: 56006.45289941671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86098.93096670884,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 86093.13352168092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3167.266363541732,
            "unit": "ns/iter",
            "extra": "iterations: 221911\ncpu: 3167.2409209097495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15785.878764586576,
            "unit": "ns/iter",
            "extra": "iterations: 44228\ncpu: 15785.310210726107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12596.869504210483,
            "unit": "ns/iter",
            "extra": "iterations: 55588\ncpu: 12596.501043390641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12521.74594088532,
            "unit": "ns/iter",
            "extra": "iterations: 55554\ncpu: 12521.334197357606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13122.9536733491,
            "unit": "ns/iter",
            "extra": "iterations: 53684\ncpu: 13122.39773489311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27635.913888557432,
            "unit": "ns/iter",
            "extra": "iterations: 25107\ncpu: 27635.213287131017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98715.72865812248,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98710.10300550231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84338.79283301864,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 84327.40106177719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82835.446863897,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82826.89940828407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83538.29393503815,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 83529.17860554047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55993.33301249904,
            "unit": "ns/iter",
            "extra": "iterations: 12468\ncpu: 55992.869746551136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84568.80183442602,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84564.89258991103 ns\nthreads: 1"
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
        "date": 1702503993158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 763.4739270033135,
            "unit": "ns/iter",
            "extra": "iterations: 913493\ncpu: 763.4548923746543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10881.294799644838,
            "unit": "ns/iter",
            "extra": "iterations: 76764\ncpu: 10881.066645823565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24115.632912126785,
            "unit": "ns/iter",
            "extra": "iterations: 34425\ncpu: 24115.17501815541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37581.89327636779,
            "unit": "ns/iter",
            "extra": "iterations: 22235\ncpu: 37580.33280863502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49489.64619653968,
            "unit": "ns/iter",
            "extra": "iterations: 16577\ncpu: 49489.61211316888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60063.561859294634,
            "unit": "ns/iter",
            "extra": "iterations: 14242\ncpu: 60062.069933998035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60325.4590000006,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60324.56000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69184.88962017222,
            "unit": "ns/iter",
            "extra": "iterations: 12611\ncpu: 69183.56989929429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79510.89785486602,
            "unit": "ns/iter",
            "extra": "iterations: 10955\ncpu: 79509.7946143314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 578.6034725677257,
            "unit": "ns/iter",
            "extra": "iterations: 1171813\ncpu: 578.5877951516151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 489.0122369616215,
            "unit": "ns/iter",
            "extra": "iterations: 1430257\ncpu: 489.0119747709685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 488.54958199315905,
            "unit": "ns/iter",
            "extra": "iterations: 1433948\ncpu: 488.54316892941756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 491.2977994106025,
            "unit": "ns/iter",
            "extra": "iterations: 1422528\ncpu: 491.28129639627497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 980.9166754194656,
            "unit": "ns/iter",
            "extra": "iterations: 714063\ncpu: 980.8570112160962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4416.114808527154,
            "unit": "ns/iter",
            "extra": "iterations: 186136\ncpu: 4415.978639274502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19335.95843410582,
            "unit": "ns/iter",
            "extra": "iterations: 42174\ncpu: 19334.668279034508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15328.160330546943,
            "unit": "ns/iter",
            "extra": "iterations: 53608\ncpu: 15327.717877928699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15010.760305035416,
            "unit": "ns/iter",
            "extra": "iterations: 54682\ncpu: 15010.081928239642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15504.108468360164,
            "unit": "ns/iter",
            "extra": "iterations: 52891\ncpu: 15503.724641243361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50033.97059330128,
            "unit": "ns/iter",
            "extra": "iterations: 17411\ncpu: 50032.95617712937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 452379.95198761486,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 452359.834796077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 364332.16976349184,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 364323.94425675663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366319.75821399,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 366305.47598989017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368271.8798137948,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 368261.87050359766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223859.318675651,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 223849.45680289692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 361410.39186925377,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 361383.90611902816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1866409.3014257785,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1866279.2260692513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 740462.2168387779,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 740442.8117553615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2531440.8547943733,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2531328.219178086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4259.455308883583,
            "unit": "ns/iter",
            "extra": "iterations: 186122\ncpu: 4259.316469842355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19209.607574946327,
            "unit": "ns/iter",
            "extra": "iterations: 43063\ncpu: 19209.604532893638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15310.461344365975,
            "unit": "ns/iter",
            "extra": "iterations: 53899\ncpu: 15309.4565761889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14980.699996366166,
            "unit": "ns/iter",
            "extra": "iterations: 55046\ncpu: 14980.692511717507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15798.773373479018,
            "unit": "ns/iter",
            "extra": "iterations: 52474\ncpu: 15798.439227045788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47747.361446468036,
            "unit": "ns/iter",
            "extra": "iterations: 17560\ncpu: 47746.702733485115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 463664.3995703215,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 463657.5187969931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382818.51696781715,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382808.770383428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378068.8740740587,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 378068.71459694917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378420.82345191867,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 378409.70575318515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222142.2946339032,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 222142.17652958853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378170.15918012266,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 378163.2795464482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1879080.8193018008,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1878848.4599589405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 727355.7333854347,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 727334.0109460567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4430.258220725801,
            "unit": "ns/iter",
            "extra": "iterations: 182344\ncpu: 4430.117250910358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19381.363346315575,
            "unit": "ns/iter",
            "extra": "iterations: 42626\ncpu: 19381.035049031234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15389.719303826476,
            "unit": "ns/iter",
            "extra": "iterations: 53435\ncpu: 15389.473191728244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15035.343749432786,
            "unit": "ns/iter",
            "extra": "iterations: 55043\ncpu: 15035.132532747084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15776.982262403046,
            "unit": "ns/iter",
            "extra": "iterations: 52431\ncpu: 15776.55013255507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47648.17674075314,
            "unit": "ns/iter",
            "extra": "iterations: 17636\ncpu: 47646.18961215674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 452719.41004184994,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 452719.08995816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375902.5433651229,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 375892.23764093674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372653.08954585245,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 372639.76006855187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369382.31176724925,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 369371.55883630086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224273.3850515395,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 224264.38144329976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370090.9205807052,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 370076.387702819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.3802374694814,
            "unit": "ns/iter",
            "extra": "iterations: 2301517\ncpu: 304.3755053731967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1592.8214946908402,
            "unit": "ns/iter",
            "extra": "iterations: 439141\ncpu: 1592.820301452156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1288.347534163862,
            "unit": "ns/iter",
            "extra": "iterations: 544217\ncpu: 1288.2919864686282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1232.0760143531581,
            "unit": "ns/iter",
            "extra": "iterations: 569353\ncpu: 1232.023015598408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1032.5504743472452,
            "unit": "ns/iter",
            "extra": "iterations: 677879\ncpu: 1032.5170126232015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8198.139221504729,
            "unit": "ns/iter",
            "extra": "iterations: 85267\ncpu: 8197.874910574952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19382.912840875757,
            "unit": "ns/iter",
            "extra": "iterations: 36267\ncpu: 19382.926627512537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4536.505186553859,
            "unit": "ns/iter",
            "extra": "iterations: 153763\ncpu: 4536.2818103184745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4479.980822128175,
            "unit": "ns/iter",
            "extra": "iterations: 156326\ncpu: 4479.84852167903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4523.305676657476,
            "unit": "ns/iter",
            "extra": "iterations: 154598\ncpu: 4523.25127103841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9361.996263877996,
            "unit": "ns/iter",
            "extra": "iterations: 74944\ncpu: 9361.836838172603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8515.108866810753,
            "unit": "ns/iter",
            "extra": "iterations: 82431\ncpu: 8514.985866967463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3296.980014302751,
            "unit": "ns/iter",
            "extra": "iterations: 211151\ncpu: 3296.7823974312314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16220.035686109035,
            "unit": "ns/iter",
            "extra": "iterations: 43098\ncpu: 16219.16794282818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13007.56291218412,
            "unit": "ns/iter",
            "extra": "iterations: 53829\ncpu: 13007.343625183554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13095.64912740477,
            "unit": "ns/iter",
            "extra": "iterations: 53404\ncpu: 13095.256909594846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13390.143610416257,
            "unit": "ns/iter",
            "extra": "iterations: 52343\ncpu: 13389.542059110156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28999.97119051577,
            "unit": "ns/iter",
            "extra": "iterations: 24124\ncpu: 28998.532581661337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99096.45377198873,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 99091.13726602434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85198.39892775111,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 85195.57694650893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84248.28116360585,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 84245.37805024684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85962.16507320596,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 85960.87377465708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55164.03736218236,
            "unit": "ns/iter",
            "extra": "iterations: 9796\ncpu: 55160.76970191885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84723.71138506466,
            "unit": "ns/iter",
            "extra": "iterations: 8274\ncpu: 84720.9572153736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3125.7522067303594,
            "unit": "ns/iter",
            "extra": "iterations: 223634\ncpu: 3125.6168561131194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15924.86252199093,
            "unit": "ns/iter",
            "extra": "iterations: 43767\ncpu: 15924.321977745834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12598.44401627889,
            "unit": "ns/iter",
            "extra": "iterations: 55534\ncpu: 12597.884179061408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12480.169912262445,
            "unit": "ns/iter",
            "extra": "iterations: 56076\ncpu: 12479.916541835903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12940.833706328334,
            "unit": "ns/iter",
            "extra": "iterations: 54067\ncpu: 12940.570033477192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28022.375400511177,
            "unit": "ns/iter",
            "extra": "iterations: 24968\ncpu: 28021.3192886893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97231.22371892627,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 97223.99666712889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83177.8654096881,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 83173.99501956457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82313.8433352959,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 82311.15678214905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82902.94410231982,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 82901.55139744151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55575.30756396717,
            "unit": "ns/iter",
            "extra": "iterations: 12586\ncpu: 55572.612426505235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83380.94166070042,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 83377.18921498446 ns\nthreads: 1"
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
        "date": 1705575643383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 709.1071762040998,
            "unit": "ns/iter",
            "extra": "iterations: 985312\ncpu: 709.0575371049983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10840.571859112848,
            "unit": "ns/iter",
            "extra": "iterations: 76316\ncpu: 10840.275957859425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24145.497346365806,
            "unit": "ns/iter",
            "extra": "iterations: 34481\ncpu: 24144.47086801427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37741.83548462753,
            "unit": "ns/iter",
            "extra": "iterations: 21305\ncpu: 37741.15465853086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47819.49643178398,
            "unit": "ns/iter",
            "extra": "iterations: 16675\ncpu: 47816.923538230876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59655.41269284518,
            "unit": "ns/iter",
            "extra": "iterations: 14260\ncpu: 59654.172510518954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59855.937399993316,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59854.05000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68798.41266933014,
            "unit": "ns/iter",
            "extra": "iterations: 12550\ncpu: 68796.12749003986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78875.03295321179,
            "unit": "ns/iter",
            "extra": "iterations: 11137\ncpu: 78870.34210290031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.6327355128326,
            "unit": "ns/iter",
            "extra": "iterations: 1207386\ncpu: 579.6121538596597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 482.17149810853647,
            "unit": "ns/iter",
            "extra": "iterations: 1452051\ncpu: 482.15007599595356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 477.5569822446812,
            "unit": "ns/iter",
            "extra": "iterations: 1462438\ncpu: 477.5417487784104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 488.26696711365526,
            "unit": "ns/iter",
            "extra": "iterations: 1440964\ncpu: 488.26389833472484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 987.6018402041518,
            "unit": "ns/iter",
            "extra": "iterations: 710682\ncpu: 987.5812247953372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4321.128135904811,
            "unit": "ns/iter",
            "extra": "iterations: 184835\ncpu: 4321.102064003032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19188.87777198629,
            "unit": "ns/iter",
            "extra": "iterations: 42208\ncpu: 19188.296057619402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15284.810200668815,
            "unit": "ns/iter",
            "extra": "iterations: 53820\ncpu: 15284.548494983326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14968.59462957669,
            "unit": "ns/iter",
            "extra": "iterations: 54856\ncpu: 14968.149336444487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15495.95573952233,
            "unit": "ns/iter",
            "extra": "iterations: 52304\ncpu: 15495.746023248685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47452.784436546164,
            "unit": "ns/iter",
            "extra": "iterations: 17721\ncpu: 47450.0479656903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 451392.1425662045,
            "unit": "ns/iter",
            "extra": "iterations: 1964\ncpu: 451365.1731160907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 363825.7828643101,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 363804.66190676176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369165.5531010892,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 369146.983857264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364013.692210032,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 363998.85690093116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222634.10210365432,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 222632.83735248822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363657.1587102103,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 363641.7922948064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1868301.1272728299,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1868111.5151515107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 727897.1424100145,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 727856.8857589967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2537428.263736444,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2537254.395604391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4379.292012250323,
            "unit": "ns/iter",
            "extra": "iterations: 181215\ncpu: 4379.0668542891135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19365.910056742174,
            "unit": "ns/iter",
            "extra": "iterations: 42827\ncpu: 19364.445326546367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15525.759320060663,
            "unit": "ns/iter",
            "extra": "iterations: 53299\ncpu: 15525.066136325335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15139.44820787003,
            "unit": "ns/iter",
            "extra": "iterations: 54265\ncpu: 15138.514696397318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15424.655734935446,
            "unit": "ns/iter",
            "extra": "iterations: 53270\ncpu: 15424.054815092966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47893.53854077089,
            "unit": "ns/iter",
            "extra": "iterations: 17475\ncpu: 47890.46065808283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 462121.3198293987,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 462106.4498933879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384390.4051418661,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 384374.33510638255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377736.5070298862,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 377698.94551845477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 375713.6213093349,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 375693.96662387904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223228.3975187179,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 223215.79219436686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378288.65002169326,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 378282.67477203824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1873195.0924024433,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1873070.6365503047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 746168.2282958316,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 746155.0643086779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4385.019186976102,
            "unit": "ns/iter",
            "extra": "iterations: 182676\ncpu: 4384.852416299908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19315.689586600256,
            "unit": "ns/iter",
            "extra": "iterations: 42743\ncpu: 19314.21285356678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15506.60043443286,
            "unit": "ns/iter",
            "extra": "iterations: 53403\ncpu: 15505.956594198915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15190.75663733054,
            "unit": "ns/iter",
            "extra": "iterations: 54766\ncpu: 15190.072307636101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15752.820860555594,
            "unit": "ns/iter",
            "extra": "iterations: 52501\ncpu: 15751.972343383986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48113.51881323484,
            "unit": "ns/iter",
            "extra": "iterations: 17594\ncpu: 48109.4122996477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 447479.19875130296,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 447461.18626430974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370760.6391397896,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 370742.3655913972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369989.0459819642,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 369983.02535453124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370526.0277777687,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 370510.98290598154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226201.80468950904,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 226185.957227518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 378750.7488292662,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 378739.03788846196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 310.631303313494,
            "unit": "ns/iter",
            "extra": "iterations: 2229502\ncpu: 310.60609050810535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1635.806788072857,
            "unit": "ns/iter",
            "extra": "iterations: 428369\ncpu: 1635.7122013964529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1224.7591727316906,
            "unit": "ns/iter",
            "extra": "iterations: 571858\ncpu: 1224.6723837036523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1262.6235636929096,
            "unit": "ns/iter",
            "extra": "iterations: 551153\ncpu: 1262.5630269634664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1049.6889067619584,
            "unit": "ns/iter",
            "extra": "iterations: 668912\ncpu: 1049.6706592197327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8102.7074415417255,
            "unit": "ns/iter",
            "extra": "iterations: 85829\ncpu: 8102.038937888068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18261.91920196892,
            "unit": "ns/iter",
            "extra": "iterations: 38194\ncpu: 18261.166675394124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4530.925756573873,
            "unit": "ns/iter",
            "extra": "iterations: 154182\ncpu: 4530.80450376823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4533.475101892783,
            "unit": "ns/iter",
            "extra": "iterations: 154329\ncpu: 4533.370267415794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4543.267788427411,
            "unit": "ns/iter",
            "extra": "iterations: 154103\ncpu: 4543.047182728447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9067.622022193009,
            "unit": "ns/iter",
            "extra": "iterations: 77322\ncpu: 9067.574558340388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8553.049385733524,
            "unit": "ns/iter",
            "extra": "iterations: 81805\ncpu: 8552.839068516545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3260.563708671649,
            "unit": "ns/iter",
            "extra": "iterations: 212475\ncpu: 3260.4532297917694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17192.923397919632,
            "unit": "ns/iter",
            "extra": "iterations: 40978\ncpu: 17191.951779003357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12999.175910780577,
            "unit": "ns/iter",
            "extra": "iterations: 53800\ncpu: 12998.923791821477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13207.257644310153,
            "unit": "ns/iter",
            "extra": "iterations: 53046\ncpu: 13206.714926667555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13494.007358323737,
            "unit": "ns/iter",
            "extra": "iterations: 51914\ncpu: 13493.916862503493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28927.442971588822,
            "unit": "ns/iter",
            "extra": "iterations: 24216\ncpu: 28925.582259662762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100171.67757610699,
            "unit": "ns/iter",
            "extra": "iterations: 6997\ncpu: 100171.10190081464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86448.84962962598,
            "unit": "ns/iter",
            "extra": "iterations: 8100\ncpu: 86447.3580246915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85787.58474368967,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 85784.10596026412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85870.96034589566,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 85869.11673872742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56145.44440871512,
            "unit": "ns/iter",
            "extra": "iterations: 12439\ncpu: 56140.381059570784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85662.52415902668,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 85662.03058104112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3195.3602811385776,
            "unit": "ns/iter",
            "extra": "iterations: 219251\ncpu: 3195.3405001573196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15776.413748931715,
            "unit": "ns/iter",
            "extra": "iterations: 44498\ncpu: 15776.086565688634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12592.189643334934,
            "unit": "ns/iter",
            "extra": "iterations: 55346\ncpu: 12591.802478950682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12560.24387045824,
            "unit": "ns/iter",
            "extra": "iterations: 55673\ncpu: 12559.380669265036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13024.385554310184,
            "unit": "ns/iter",
            "extra": "iterations: 53580\ncpu: 13024.08361328829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27855.176290706593,
            "unit": "ns/iter",
            "extra": "iterations: 25180\ncpu: 27853.828435266132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98894.46020321602,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 98894.03048264029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84542.46324952132,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84540.35299806611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83531.28549345475,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83528.8228299651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84054.74318972236,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 84053.15012600485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56430.313823360404,
            "unit": "ns/iter",
            "extra": "iterations: 12421\ncpu: 56427.059012961654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84548.19753979376,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84547.73275446202 ns\nthreads: 1"
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
        "date": 1705773444509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 706.2849097845972,
            "unit": "ns/iter",
            "extra": "iterations: 988190\ncpu: 706.2470779910745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10956.66172474708,
            "unit": "ns/iter",
            "extra": "iterations: 75814\ncpu: 10956.440762919776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24178.604188359866,
            "unit": "ns/iter",
            "extra": "iterations: 34572\ncpu: 24177.07682517644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37982.48920167007,
            "unit": "ns/iter",
            "extra": "iterations: 22735\ncpu: 37980.72575324389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47727.81362248054,
            "unit": "ns/iter",
            "extra": "iterations: 16370\ncpu: 47726.06597434332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59202.39628029549,
            "unit": "ns/iter",
            "extra": "iterations: 14356\ncpu: 59199.37308442464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59148.56069999814,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59148.87999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68430.87025789951,
            "unit": "ns/iter",
            "extra": "iterations: 12679\ncpu: 68429.0480321792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78373.17672413727,
            "unit": "ns/iter",
            "extra": "iterations: 11136\ncpu: 78370.3304597702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 577.7828494169199,
            "unit": "ns/iter",
            "extra": "iterations: 1207061\ncpu: 577.7485147809422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 485.0752084675303,
            "unit": "ns/iter",
            "extra": "iterations: 1429839\ncpu: 485.0546110436211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 480.00684561810976,
            "unit": "ns/iter",
            "extra": "iterations: 1459912\ncpu: 480.00221931184893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 486.1816207574661,
            "unit": "ns/iter",
            "extra": "iterations: 1432540\ncpu: 486.16122411939756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 970.6981973113704,
            "unit": "ns/iter",
            "extra": "iterations: 721256\ncpu: 970.694039287021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3999.244163972531,
            "unit": "ns/iter",
            "extra": "iterations: 202278\ncpu: 3999.1620443152433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18370.71239094674,
            "unit": "ns/iter",
            "extra": "iterations: 45162\ncpu: 18370.01682830703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15363.802428174622,
            "unit": "ns/iter",
            "extra": "iterations: 53950\ncpu: 15363.278962001865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15064.412586520608,
            "unit": "ns/iter",
            "extra": "iterations: 54900\ncpu: 15063.870673952633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15239.512189217005,
            "unit": "ns/iter",
            "extra": "iterations: 53695\ncpu: 15239.61076450323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47971.64498507634,
            "unit": "ns/iter",
            "extra": "iterations: 17757\ncpu: 47970.26524750793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 464023.87282945425,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 464002.6046986708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360000.1053294574,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 359982.7108686543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364454.7321724722,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 364456.5505804312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368342.4497041333,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 368328.2333051562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222254.9535603742,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 222247.18782249736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373619.93409381155,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 373607.90029573336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1860433.030241981,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1860292.9435483809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 747428.8084261249,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 747393.402225755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2513829.9562842203,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2513499.1803278634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4198.296532948152,
            "unit": "ns/iter",
            "extra": "iterations: 188431\ncpu: 4198.161661297769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19186.222363435867,
            "unit": "ns/iter",
            "extra": "iterations: 43276\ncpu: 19185.324429244865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15430.471579728895,
            "unit": "ns/iter",
            "extra": "iterations: 53870\ncpu: 15429.94802301837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15125.054940726824,
            "unit": "ns/iter",
            "extra": "iterations: 53312\ncpu: 15124.574204681747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15355.78812255551,
            "unit": "ns/iter",
            "extra": "iterations: 53951\ncpu: 15355.524457377962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47658.00249164714,
            "unit": "ns/iter",
            "extra": "iterations: 17659\ncpu: 47657.82886913183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 463373.264721723,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 463359.9675850897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381080.638082701,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 381073.1310466122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381272.4093490444,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 381251.6382699887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374727.46919433,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 374715.12279189983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222619.39264742404,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 222615.31784528977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373939.2780656149,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 373928.41105354024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1872173.127049208,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1872096.926229521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 727208.7242188086,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 727186.2499999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4385.636732071546,
            "unit": "ns/iter",
            "extra": "iterations: 182097\ncpu: 4385.553304008289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19300.767814532264,
            "unit": "ns/iter",
            "extra": "iterations: 42746\ncpu: 19300.676086651267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15362.877271028194,
            "unit": "ns/iter",
            "extra": "iterations: 53500\ncpu: 15362.114018691678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15008.39444939235,
            "unit": "ns/iter",
            "extra": "iterations: 55021\ncpu: 15008.265934824816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15668.120147095944,
            "unit": "ns/iter",
            "extra": "iterations: 52211\ncpu: 15667.707954262594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47278.70933122008,
            "unit": "ns/iter",
            "extra": "iterations: 17704\ncpu: 47277.28761861714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 457232.1135531365,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 457217.634746208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370596.73627784225,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 370585.63464837027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370328.9753924321,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 370321.4679677531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370795.6788290383,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 370773.3559609671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224469.6441198934,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 224463.43838073197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369451.5401366477,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 369444.1929974387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.154566155794,
            "unit": "ns/iter",
            "extra": "iterations: 2290592\ncpu: 305.14203315125275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1625.523109352727,
            "unit": "ns/iter",
            "extra": "iterations: 442613\ncpu: 1625.4877285574532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1290.1735463367577,
            "unit": "ns/iter",
            "extra": "iterations: 541838\ncpu: 1290.1335823622571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1256.3946360564275,
            "unit": "ns/iter",
            "extra": "iterations: 557985\ncpu: 1256.343450092748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1047.08498844861,
            "unit": "ns/iter",
            "extra": "iterations: 674374\ncpu: 1046.2623114176965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7882.385673563639,
            "unit": "ns/iter",
            "extra": "iterations: 86651\ncpu: 7882.280643039345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19062.140107124276,
            "unit": "ns/iter",
            "extra": "iterations: 36779\ncpu: 19061.382854346124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4473.777081949171,
            "unit": "ns/iter",
            "extra": "iterations: 156488\ncpu: 4473.805020193224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4463.766369806728,
            "unit": "ns/iter",
            "extra": "iterations: 156752\ncpu: 4463.573670511445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4497.5059931997885,
            "unit": "ns/iter",
            "extra": "iterations: 155593\ncpu: 4497.274298972319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9369.344564492154,
            "unit": "ns/iter",
            "extra": "iterations: 74970\ncpu: 9368.863545418148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8460.298349085593,
            "unit": "ns/iter",
            "extra": "iterations: 82742\ncpu: 8460.359913949382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3248.6182485602735,
            "unit": "ns/iter",
            "extra": "iterations: 216028\ncpu: 3248.5974040402525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16504.97204067519,
            "unit": "ns/iter",
            "extra": "iterations: 42383\ncpu: 16504.81325059571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13075.220093639366,
            "unit": "ns/iter",
            "extra": "iterations: 53609\ncpu: 13075.091868902435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13172.24909638003,
            "unit": "ns/iter",
            "extra": "iterations: 52843\ncpu: 13171.332059118467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13435.784727160655,
            "unit": "ns/iter",
            "extra": "iterations: 52027\ncpu: 13435.471966479045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28799.691801932466,
            "unit": "ns/iter",
            "extra": "iterations: 24335\ncpu: 28798.159030203817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99741.45415656189,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 99737.0312277193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85462.97863769314,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85460.82763671859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84877.74708454625,
            "unit": "ns/iter",
            "extra": "iterations: 8232\ncpu: 84877.52672497547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85071.5395343196,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 85069.5124909045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55457.20660436377,
            "unit": "ns/iter",
            "extra": "iterations: 12628\ncpu: 55453.943617357356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85025.7591737666,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 85022.8311057111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3136.611310224712,
            "unit": "ns/iter",
            "extra": "iterations: 224328\ncpu: 3136.441728183749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15847.398642840557,
            "unit": "ns/iter",
            "extra": "iterations: 44210\ncpu: 15847.048179144977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12533.59701974226,
            "unit": "ns/iter",
            "extra": "iterations: 55767\ncpu: 12533.674036616487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12494.160408644833,
            "unit": "ns/iter",
            "extra": "iterations: 56088\ncpu: 12493.934531450579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12940.511476014135,
            "unit": "ns/iter",
            "extra": "iterations: 54200\ncpu: 12939.996309963242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27645.769477941547,
            "unit": "ns/iter",
            "extra": "iterations: 25208\ncpu: 27643.974135195607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98131.19477968298,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 98129.03452147135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83821.59684738313,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83817.74540243654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82715.82658483007,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82711.21473261801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83098.19111162995,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 83097.06898606037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56243.21895294105,
            "unit": "ns/iter",
            "extra": "iterations: 12473\ncpu: 56241.34530586044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84165.84531381738,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 84163.99855994235 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}