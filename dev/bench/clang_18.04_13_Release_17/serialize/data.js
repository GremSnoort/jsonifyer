window.BENCHMARK_DATA = {
  "lastUpdate": 1702492939562,
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
      }
    ]
  }
}