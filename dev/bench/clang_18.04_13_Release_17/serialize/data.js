window.BENCHMARK_DATA = {
  "lastUpdate": 1705960054319,
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
        "date": 1705774899476,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 725.9723294830824,
            "unit": "ns/iter",
            "extra": "iterations: 962866\ncpu: 725.947743507404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10871.563291968023,
            "unit": "ns/iter",
            "extra": "iterations: 76392\ncpu: 10871.004817258352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24275.003174419955,
            "unit": "ns/iter",
            "extra": "iterations: 34652\ncpu: 24274.093847396973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37695.082634072896,
            "unit": "ns/iter",
            "extra": "iterations: 21928\ncpu: 37692.72163443998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47727.803342749656,
            "unit": "ns/iter",
            "extra": "iterations: 16633\ncpu: 47725.569650694415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58247.22909962345,
            "unit": "ns/iter",
            "extra": "iterations: 14605\ncpu: 58243.76583361866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58354.82440000987,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58351.68 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67596.89999221556,
            "unit": "ns/iter",
            "extra": "iterations: 12839\ncpu: 67592.85769919775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77373.15906069652,
            "unit": "ns/iter",
            "extra": "iterations: 11285\ncpu: 77369.30438635363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 573.4308399853395,
            "unit": "ns/iter",
            "extra": "iterations: 1222426\ncpu: 573.3881641915343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 515.1923769999485,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 515.1664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 481.47213885485735,
            "unit": "ns/iter",
            "extra": "iterations: 1369775\ncpu: 481.4635250314833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 486.3858745459455,
            "unit": "ns/iter",
            "extra": "iterations: 1440336\ncpu: 486.3612379333701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 971.8441814650345,
            "unit": "ns/iter",
            "extra": "iterations: 720293\ncpu: 971.7725980954973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4329.557409898094,
            "unit": "ns/iter",
            "extra": "iterations: 185151\ncpu: 4329.398707001312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18665.603257894716,
            "unit": "ns/iter",
            "extra": "iterations: 43832\ncpu: 18664.765468151152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15241.438540392752,
            "unit": "ns/iter",
            "extra": "iterations: 54727\ncpu: 15240.813492426023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15572.823056402718,
            "unit": "ns/iter",
            "extra": "iterations: 52480\ncpu: 15572.195121951263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15831.697481431913,
            "unit": "ns/iter",
            "extra": "iterations: 51696\ncpu: 15831.015939337653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46253.12124248536,
            "unit": "ns/iter",
            "extra": "iterations: 17964\ncpu: 46249.69383210867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 442079.54732509505,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 442045.9876543198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360262.46198587056,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 360219.7341088493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367448.7906289592,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 367435.54242296366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 367637.1141649009,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 367623.3826638479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225546.53824435524,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 225539.52772073937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366414.1096583711,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 366384.39477013855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1857746.7424547668,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1857601.6096579442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 731749.7566510199,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 731687.0892018772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2503598.563685551,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2503436.0433604373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4350.5286588419085,
            "unit": "ns/iter",
            "extra": "iterations: 177973\ncpu: 4350.295269507164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19447.841824988154,
            "unit": "ns/iter",
            "extra": "iterations: 43003\ncpu: 19446.3339766994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15700.488380761384,
            "unit": "ns/iter",
            "extra": "iterations: 53661\ncpu: 15699.701831870469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15405.322861551998,
            "unit": "ns/iter",
            "extra": "iterations: 54432\ncpu: 15404.174015285073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15819.49885993254,
            "unit": "ns/iter",
            "extra": "iterations: 53067\ncpu: 15818.487949196295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47915.70533669063,
            "unit": "ns/iter",
            "extra": "iterations: 17464\ncpu: 47914.05176362797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460768.50530786486,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 460737.6857749443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 377532.20530667604,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 377503.8277511964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378387.75778549624,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378371.3667820075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373366.55254091596,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 373359.732988803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222331.08650876026,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 222312.28115345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372563.5318606501,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 372548.9804587934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1865437.9284251742,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1865308.9979550058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 731078.3171114991,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 731057.9277865022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4400.2125510367205,
            "unit": "ns/iter",
            "extra": "iterations: 183937\ncpu: 4399.916275681356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19333.15936708697,
            "unit": "ns/iter",
            "extra": "iterations: 43039\ncpu: 19331.60389414241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15471.529939111953,
            "unit": "ns/iter",
            "extra": "iterations: 53542\ncpu: 15470.417616077091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15195.51324745738,
            "unit": "ns/iter",
            "extra": "iterations: 54652\ncpu: 15194.827270731195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15727.212201541955,
            "unit": "ns/iter",
            "extra": "iterations: 52436\ncpu: 15726.6343733312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48937.91455912705,
            "unit": "ns/iter",
            "extra": "iterations: 17556\ncpu: 48936.20414673054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 440909.96784077527,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 440902.4502297094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 367541.27758914564,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 367513.83701188443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 362586.939279742,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 362563.2328308227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 362672.03109241754,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 362645.63025210326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223748.7906565681,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 223741.31313131322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366457.63458264165,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 366450.97955706995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 311.4100486692805,
            "unit": "ns/iter",
            "extra": "iterations: 2246387\ncpu: 311.40088506566417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1654.3110277158048,
            "unit": "ns/iter",
            "extra": "iterations: 423152\ncpu: 1654.275295874763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1313.601368064921,
            "unit": "ns/iter",
            "extra": "iterations: 534039\ncpu: 1313.5649269060875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1266.3461420477556,
            "unit": "ns/iter",
            "extra": "iterations: 554180\ncpu: 1266.3057129452545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1058.1774913731963,
            "unit": "ns/iter",
            "extra": "iterations: 662466\ncpu: 1058.1257000359212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8225.618475485302,
            "unit": "ns/iter",
            "extra": "iterations: 83397\ncpu: 8225.2059426599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19456.458581821673,
            "unit": "ns/iter",
            "extra": "iterations: 35045\ncpu: 19455.96233414174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4529.07300725933,
            "unit": "ns/iter",
            "extra": "iterations: 154423\ncpu: 4528.901135193569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4461.670206485685,
            "unit": "ns/iter",
            "extra": "iterations: 155846\ncpu: 4461.478639169453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4499.272205364202,
            "unit": "ns/iter",
            "extra": "iterations: 155548\ncpu: 4499.11538560436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9442.81074072618,
            "unit": "ns/iter",
            "extra": "iterations: 74427\ncpu: 9442.473833420703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8474.65362707887,
            "unit": "ns/iter",
            "extra": "iterations: 82339\ncpu: 8474.046320698562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3244.4800657261144,
            "unit": "ns/iter",
            "extra": "iterations: 212398\ncpu: 3244.3346924171115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16143.134313521252,
            "unit": "ns/iter",
            "extra": "iterations: 43257\ncpu: 16142.16196222579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12889.556225930943,
            "unit": "ns/iter",
            "extra": "iterations: 54530\ncpu: 12889.310471300132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13100.260453778152,
            "unit": "ns/iter",
            "extra": "iterations: 53330\ncpu: 13099.750609413195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13459.702260416294,
            "unit": "ns/iter",
            "extra": "iterations: 52247\ncpu: 13459.18808735443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29194.41451424999,
            "unit": "ns/iter",
            "extra": "iterations: 24004\ncpu: 29192.517913680716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99347.86751896887,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 99336.04945209408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85282.13376339294,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85278.687925998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85041.22195387242,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 85036.420722135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84639.70188220956,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 84635.32483303077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55071.10432248987,
            "unit": "ns/iter",
            "extra": "iterations: 12701\ncpu: 55066.69553578461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83545.99383314022,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 83536.04594921343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3144.4468689165924,
            "unit": "ns/iter",
            "extra": "iterations: 221904\ncpu: 3144.1150227125568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15710.541378848093,
            "unit": "ns/iter",
            "extra": "iterations: 44588\ncpu: 15709.383690679188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12500.225616253756,
            "unit": "ns/iter",
            "extra": "iterations: 56308\ncpu: 12499.584428500379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12585.297379571943,
            "unit": "ns/iter",
            "extra": "iterations: 56174\ncpu: 12584.065581941722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12883.404205956065,
            "unit": "ns/iter",
            "extra": "iterations: 53876\ncpu: 12882.448585641168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27841.73251372485,
            "unit": "ns/iter",
            "extra": "iterations: 25134\ncpu: 27839.54006525033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97625.79674458655,
            "unit": "ns/iter",
            "extra": "iterations: 7188\ncpu: 97616.95882025515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83083.72785485475,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 83074.5049211418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82268.2747135919,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 82262.98570922329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82827.88355115478,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82821.81796773868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55741.835437985224,
            "unit": "ns/iter",
            "extra": "iterations: 12512\ncpu: 55738.8666879801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84305.98206115591,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 84304.49072959373 ns\nthreads: 1"
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
        "date": 1705778461642,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 726.4179591820459,
            "unit": "ns/iter",
            "extra": "iterations: 965946\ncpu: 726.3994053497814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10944.459668758258,
            "unit": "ns/iter",
            "extra": "iterations: 75413\ncpu: 10943.75638152573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24388.320517322867,
            "unit": "ns/iter",
            "extra": "iterations: 34176\ncpu: 24387.71945224719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37823.51040691557,
            "unit": "ns/iter",
            "extra": "iterations: 22437\ncpu: 37820.88960199671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48097.591777334594,
            "unit": "ns/iter",
            "extra": "iterations: 16491\ncpu: 48094.70620338366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60013.91863832318,
            "unit": "ns/iter",
            "extra": "iterations: 14159\ncpu: 60010.89766226431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60045.06379999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60040.609999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69024.40258393386,
            "unit": "ns/iter",
            "extra": "iterations: 12539\ncpu: 69020.71935561046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83957.10440160043,
            "unit": "ns/iter",
            "extra": "iterations: 10996\ncpu: 83951.8370316479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 584.2933971416699,
            "unit": "ns/iter",
            "extra": "iterations: 947211\ncpu: 584.2676024666106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 492.0857271013784,
            "unit": "ns/iter",
            "extra": "iterations: 1424602\ncpu: 492.072382321519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 485.29149669145517,
            "unit": "ns/iter",
            "extra": "iterations: 1443838\ncpu: 485.2697463288826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 491.84282150239136,
            "unit": "ns/iter",
            "extra": "iterations: 1420137\ncpu: 491.82726736927526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 988.6317343496302,
            "unit": "ns/iter",
            "extra": "iterations: 708179\ncpu: 988.6042935472537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4328.502899340729,
            "unit": "ns/iter",
            "extra": "iterations: 185387\ncpu: 4328.286773074698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19458.604728043294,
            "unit": "ns/iter",
            "extra": "iterations: 42047\ncpu: 19457.713986729177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15309.301923220157,
            "unit": "ns/iter",
            "extra": "iterations: 53868\ncpu: 15308.869829954738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15005.40334830509,
            "unit": "ns/iter",
            "extra": "iterations: 54774\ncpu: 15005.166684923555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15552.646295976867,
            "unit": "ns/iter",
            "extra": "iterations: 52281\ncpu: 15552.030374323345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47836.014012227584,
            "unit": "ns/iter",
            "extra": "iterations: 17342\ncpu: 47831.85330411714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 436111.57947684,
            "unit": "ns/iter",
            "extra": "iterations: 1988\ncpu: 436081.43863179017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362266.96647111786,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 362252.0536462698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364782.02798662096,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 364765.70593149494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365035.7591424741,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 365018.99957965565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224370.73873873765,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 224359.2792792793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 361104.5494966371,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 361066.0234899331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1862530.4101009753,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1862381.2121212133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 746412.9600319735,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 746354.6762589917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2510359.489130379,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2509943.2065217346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4351.859832624677,
            "unit": "ns/iter",
            "extra": "iterations: 178401\ncpu: 4351.486258485078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19314.45800257558,
            "unit": "ns/iter",
            "extra": "iterations: 42705\ncpu: 19313.103852007913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15443.574535679283,
            "unit": "ns/iter",
            "extra": "iterations: 53196\ncpu: 15442.662982179132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15081.352056483205,
            "unit": "ns/iter",
            "extra": "iterations: 54389\ncpu: 15077.101987534234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15583.40480870206,
            "unit": "ns/iter",
            "extra": "iterations: 52405\ncpu: 15581.976910600075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47903.63852652244,
            "unit": "ns/iter",
            "extra": "iterations: 17401\ncpu: 47899.701166599436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460934.7203614991,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 460911.37692716776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381193.01959080173,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 381159.8171528079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376499.3062554703,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 376474.4569939166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373674.7597788879,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 373654.46428571374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223617.4569570875,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 223603.25097529287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374107.49095608044,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 374091.47286821564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1873450.514344339,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1873370.081967209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 738957.2312600298,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 738938.8357256793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4381.124486915169,
            "unit": "ns/iter",
            "extra": "iterations: 183449\ncpu: 4380.797932940513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19312.640904078937,
            "unit": "ns/iter",
            "extra": "iterations: 42607\ncpu: 19311.63423850539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15360.334638621349,
            "unit": "ns/iter",
            "extra": "iterations: 53628\ncpu: 15359.457745953527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15057.017355720232,
            "unit": "ns/iter",
            "extra": "iterations: 54737\ncpu: 15055.951184756215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15558.785728037938,
            "unit": "ns/iter",
            "extra": "iterations: 51934\ncpu: 15557.345862055727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47668.71187988952,
            "unit": "ns/iter",
            "extra": "iterations: 17517\ncpu: 47665.70759833331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 459724.859399671,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 459700.0526592942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376703.3955709912,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 376675.7707338228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373045.1309215874,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 373031.2661498699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373638.57565367414,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 373620.4886412351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223580.55538420813,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 223568.8768953994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369410.3644859469,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 369380.288870009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.77142965962815,
            "unit": "ns/iter",
            "extra": "iterations: 2284229\ncpu: 305.7525755955278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1651.9294007794526,
            "unit": "ns/iter",
            "extra": "iterations: 433730\ncpu: 1651.824637447268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1266.6429237800362,
            "unit": "ns/iter",
            "extra": "iterations: 554173\ncpu: 1266.579930815822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1299.5006653011699,
            "unit": "ns/iter",
            "extra": "iterations: 535096\ncpu: 1299.4189827619757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1059.6176704297604,
            "unit": "ns/iter",
            "extra": "iterations: 660697\ncpu: 1059.592672586667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8302.215759984112,
            "unit": "ns/iter",
            "extra": "iterations: 84061\ncpu: 8301.620251959805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18854.82994753359,
            "unit": "ns/iter",
            "extra": "iterations: 37165\ncpu: 18853.655320866455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4484.201773522335,
            "unit": "ns/iter",
            "extra": "iterations: 155848\ncpu: 4484.033160515382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4541.103867561957,
            "unit": "ns/iter",
            "extra": "iterations: 153792\ncpu: 4541.033343737049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4492.258776696675,
            "unit": "ns/iter",
            "extra": "iterations: 155497\ncpu: 4491.992128465505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9015.127904116642,
            "unit": "ns/iter",
            "extra": "iterations: 77261\ncpu: 9014.804364426907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8452.22922733106,
            "unit": "ns/iter",
            "extra": "iterations: 82765\ncpu: 8451.800882015254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3323.0998081776356,
            "unit": "ns/iter",
            "extra": "iterations: 214782\ncpu: 3323.0149640100703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16339.61718074874,
            "unit": "ns/iter",
            "extra": "iterations: 42827\ncpu: 16339.022112218658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13074.08598899419,
            "unit": "ns/iter",
            "extra": "iterations: 53251\ncpu: 13073.724437099692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13144.015908408564,
            "unit": "ns/iter",
            "extra": "iterations: 53368\ncpu: 13143.408034777454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13470.273583277942,
            "unit": "ns/iter",
            "extra": "iterations: 52145\ncpu: 13469.116885607387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28972.32786207523,
            "unit": "ns/iter",
            "extra": "iterations: 24187\ncpu: 28970.972009757614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99293.40382166246,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 99286.87898089028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85630.6366076801,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 85626.638194021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84706.81071945833,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84700.56735876451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84965.86662606889,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 84959.56151035351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55615.763797608684,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 55610.325441444154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84932.27948027491,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 84926.99190978124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3171.5244716582088,
            "unit": "ns/iter",
            "extra": "iterations: 220643\ncpu: 3171.326531999655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15668.38813623985,
            "unit": "ns/iter",
            "extra": "iterations: 44657\ncpu: 15667.772129789288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12535.059226084551,
            "unit": "ns/iter",
            "extra": "iterations: 55820\ncpu: 12534.579003941295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12482.626306434862,
            "unit": "ns/iter",
            "extra": "iterations: 56260\ncpu: 12481.690366156927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12898.179656686587,
            "unit": "ns/iter",
            "extra": "iterations: 54003\ncpu: 12897.45569690562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27850.946211911578,
            "unit": "ns/iter",
            "extra": "iterations: 25303\ncpu: 27848.559459352808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97674.99708009703,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 97665.14182424845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83001.14426152696,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 82996.3638517112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82651.09108024607,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 82647.12873617338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83220.18471035683,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 83215.27777777702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55782.921482318256,
            "unit": "ns/iter",
            "extra": "iterations: 12494\ncpu: 55778.32559628662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83555.59528933297,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83547.93161166857 ns\nthreads: 1"
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
        "date": 1705953621807,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 709.8904758711163,
            "unit": "ns/iter",
            "extra": "iterations: 984258\ncpu: 709.8217134125402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10869.540974011152,
            "unit": "ns/iter",
            "extra": "iterations: 76878\ncpu: 10868.812924373682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24077.46225514216,
            "unit": "ns/iter",
            "extra": "iterations: 34561\ncpu: 24076.027892711438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37948.6218903257,
            "unit": "ns/iter",
            "extra": "iterations: 22430\ncpu: 37947.31163620151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47676.92121652236,
            "unit": "ns/iter",
            "extra": "iterations: 16539\ncpu: 47675.50033254732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59333.842972901264,
            "unit": "ns/iter",
            "extra": "iterations: 14316\ncpu: 59330.71388656045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59395.626299999545,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59394.20999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68541.68555039856,
            "unit": "ns/iter",
            "extra": "iterations: 12727\ncpu: 68538.50868232884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78593.84868182731,
            "unit": "ns/iter",
            "extra": "iterations: 11076\ncpu: 78587.50451426502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 582.5317276759149,
            "unit": "ns/iter",
            "extra": "iterations: 1203287\ncpu: 582.5046726175883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 492.9602074336374,
            "unit": "ns/iter",
            "extra": "iterations: 1431976\ncpu: 492.94590132795565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 481.4877973400346,
            "unit": "ns/iter",
            "extra": "iterations: 1452798\ncpu: 481.4604645656171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.97294059641933,
            "unit": "ns/iter",
            "extra": "iterations: 1425789\ncpu: 479.9529944472852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 960.0145605966896,
            "unit": "ns/iter",
            "extra": "iterations: 729091\ncpu: 960.0195311696331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4252.528977583037,
            "unit": "ns/iter",
            "extra": "iterations: 186558\ncpu: 4252.363340087263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19597.13433260082,
            "unit": "ns/iter",
            "extra": "iterations: 42231\ncpu: 19596.526248490467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15692.595125845864,
            "unit": "ns/iter",
            "extra": "iterations: 52604\ncpu: 15691.715458900473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15345.441185223188,
            "unit": "ns/iter",
            "extra": "iterations: 53762\ncpu: 15345.028086752727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15984.670240302818,
            "unit": "ns/iter",
            "extra": "iterations: 51768\ncpu: 15983.669448307792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47440.808780986,
            "unit": "ns/iter",
            "extra": "iterations: 17629\ncpu: 47437.13767088308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458322.32939968014,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 458294.56131349417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 363705.34055854037,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 363697.70737807447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366274.44995760435,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 366256.7430025435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375804.3489344062,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 375783.20100292517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224646.28432375356,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 224625.64036885282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363680.36005034315,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 363657.86823331885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1857126.8145162978,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1856962.2983870977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 746637.0802861806,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 746608.8235294129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2516158.8888889235,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2515771.2737127324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4353.074774575424,
            "unit": "ns/iter",
            "extra": "iterations: 180770\ncpu: 4353.066327377336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19262.769513462306,
            "unit": "ns/iter",
            "extra": "iterations: 43265\ncpu: 19261.869871720748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15497.007283886409,
            "unit": "ns/iter",
            "extra": "iterations: 54092\ncpu: 15497.097537528596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15067.23573093318,
            "unit": "ns/iter",
            "extra": "iterations: 55347\ncpu: 15066.735324407786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15493.323664496847,
            "unit": "ns/iter",
            "extra": "iterations: 53126\ncpu: 15493.270714904205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47433.61357791667,
            "unit": "ns/iter",
            "extra": "iterations: 17499\ncpu: 47432.29327390131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 468659.1253361631,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 468652.77030661714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382898.37984150887,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 382896.7869718292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378565.8997821685,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 378550.1525054465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377476.3086526073,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 377478.77744296246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221584.66759425274,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 221578.24437136395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373758.00985857483,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 373749.8928418337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1870823.9100203186,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1870681.595092033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 736693.9841017049,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 736662.0031796488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4363.576286053476,
            "unit": "ns/iter",
            "extra": "iterations: 183546\ncpu: 4363.318732088957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19258.037589790354,
            "unit": "ns/iter",
            "extra": "iterations: 43017\ncpu: 19256.861240904742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15316.174012669027,
            "unit": "ns/iter",
            "extra": "iterations: 53680\ncpu: 15315.521609538007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15009.908065302036,
            "unit": "ns/iter",
            "extra": "iterations: 55311\ncpu: 15009.191661694775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15542.040473037741,
            "unit": "ns/iter",
            "extra": "iterations: 52850\ncpu: 15541.337748344411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47384.29010219936,
            "unit": "ns/iter",
            "extra": "iterations: 17711\ncpu: 47380.26085483576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 450784.5682056662,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 450771.4585519431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370762.63066954445,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 370732.57019438443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369744.8722127103,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 369715.1801029141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370215.08828599326,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 370200.4737295438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227672.48246071473,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 227661.88481675254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367350.6005154384,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 367340.29209622054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.93540098600613,
            "unit": "ns/iter",
            "extra": "iterations: 2285329\ncpu: 306.9274489581138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1623.7130336418036,
            "unit": "ns/iter",
            "extra": "iterations: 431399\ncpu: 1623.722586283235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1261.3594057866178,
            "unit": "ns/iter",
            "extra": "iterations: 559799\ncpu: 1261.271099090915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1238.9469281850777,
            "unit": "ns/iter",
            "extra": "iterations: 565008\ncpu: 1238.8780335853644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1030.5694939100015,
            "unit": "ns/iter",
            "extra": "iterations: 680887\ncpu: 1030.5068241866902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8150.969771499932,
            "unit": "ns/iter",
            "extra": "iterations: 85383\ncpu: 8150.374196268648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17994.224698429647,
            "unit": "ns/iter",
            "extra": "iterations: 38051\ncpu: 17994.354944679544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4468.904795648526,
            "unit": "ns/iter",
            "extra": "iterations: 156642\ncpu: 4468.65272404593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4458.438757181716,
            "unit": "ns/iter",
            "extra": "iterations: 156998\ncpu: 4458.069529548106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4458.695390807305,
            "unit": "ns/iter",
            "extra": "iterations: 156036\ncpu: 4458.575585121406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9367.498508101377,
            "unit": "ns/iter",
            "extra": "iterations: 74737\ncpu: 9367.555561502315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8487.030913342704,
            "unit": "ns/iter",
            "extra": "iterations: 82521\ncpu: 8486.82153633614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3264.8613863699115,
            "unit": "ns/iter",
            "extra": "iterations: 214445\ncpu: 3264.8152206859627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16146.959270995585,
            "unit": "ns/iter",
            "extra": "iterations: 43237\ncpu: 16145.92363022422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12883.686621015304,
            "unit": "ns/iter",
            "extra": "iterations: 54324\ncpu: 12883.646270524929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13145.024475458114,
            "unit": "ns/iter",
            "extra": "iterations: 53237\ncpu: 13144.82408850996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13167.354360797737,
            "unit": "ns/iter",
            "extra": "iterations: 53121\ncpu: 13166.745731443187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28923.958056122072,
            "unit": "ns/iter",
            "extra": "iterations: 24199\ncpu: 28921.76122980296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100299.96028269103,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 100297.48409893991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86550.90176914733,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 86551.41655325948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85433.3286867203,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 85429.17583761425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85955.02800294614,
            "unit": "ns/iter",
            "extra": "iterations: 8142\ncpu: 85954.72856791841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56298.410628013866,
            "unit": "ns/iter",
            "extra": "iterations: 12420\ncpu: 56296.97262479898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86163.11422943833,
            "unit": "ns/iter",
            "extra": "iterations: 8124\ncpu: 86160.56129985268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3200.0751261677406,
            "unit": "ns/iter",
            "extra": "iterations: 219351\ncpu: 3200.0382947877815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15777.953497283015,
            "unit": "ns/iter",
            "extra": "iterations: 44363\ncpu: 15777.49250501538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12609.938256484764,
            "unit": "ns/iter",
            "extra": "iterations: 55520\ncpu: 12609.65237752161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12533.822312709037,
            "unit": "ns/iter",
            "extra": "iterations: 55502\ncpu: 12532.849266693205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12880.177615347648,
            "unit": "ns/iter",
            "extra": "iterations: 54314\ncpu: 12879.946238539003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27694.34963238073,
            "unit": "ns/iter",
            "extra": "iterations: 25298\ncpu: 27693.133844572916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98449.72641906136,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98448.15697267094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83560.96821222885,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83558.40105162619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82455.65745855469,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 82453.73222052402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82875.29574468394,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82875.86288415955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55836.1427441655,
            "unit": "ns/iter",
            "extra": "iterations: 12645\ncpu: 55833.87109529412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84568.06581331206,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84565.58386668397 ns\nthreads: 1"
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
        "date": 1705955069177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 697.2888844925897,
            "unit": "ns/iter",
            "extra": "iterations: 995789\ncpu: 697.2798454291021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10569.46485010152,
            "unit": "ns/iter",
            "extra": "iterations: 78720\ncpu: 10569.415650406505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23644.023130912887,
            "unit": "ns/iter",
            "extra": "iterations: 35191\ncpu: 23643.428717569837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37201.93370545253,
            "unit": "ns/iter",
            "extra": "iterations: 23290\ncpu: 37200.96178617432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47451.558319548414,
            "unit": "ns/iter",
            "extra": "iterations: 16924\ncpu: 47451.27038525172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59040.4457781187,
            "unit": "ns/iter",
            "extra": "iterations: 14413\ncpu: 59040.040241448725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58633.469200003674,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58630.18000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67625.3956112875,
            "unit": "ns/iter",
            "extra": "iterations: 12760\ncpu: 67623.80877742953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77473.18614142324,
            "unit": "ns/iter",
            "extra": "iterations: 11271\ncpu: 77472.6998491703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 578.4678240228557,
            "unit": "ns/iter",
            "extra": "iterations: 1210748\ncpu: 578.4606705937163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.0133592725386,
            "unit": "ns/iter",
            "extra": "iterations: 1437204\ncpu: 482.99051491646287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.2583000072721,
            "unit": "ns/iter",
            "extra": "iterations: 1469818\ncpu: 475.2514256867181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 487.3085702607387,
            "unit": "ns/iter",
            "extra": "iterations: 1438486\ncpu: 487.30373462098356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 979.7946241753334,
            "unit": "ns/iter",
            "extra": "iterations: 718327\ncpu: 979.7873391923183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4427.16244068489,
            "unit": "ns/iter",
            "extra": "iterations: 180392\ncpu: 4427.063284402856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19615.100127323625,
            "unit": "ns/iter",
            "extra": "iterations: 41627\ncpu: 19614.94702957214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15600.59169993324,
            "unit": "ns/iter",
            "extra": "iterations: 53108\ncpu: 15600.491451382113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15086.898896652603,
            "unit": "ns/iter",
            "extra": "iterations: 54380\ncpu: 15086.85362265544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15524.066436732115,
            "unit": "ns/iter",
            "extra": "iterations: 51899\ncpu: 15523.511050309218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47812.37498574963,
            "unit": "ns/iter",
            "extra": "iterations: 17542\ncpu: 47812.170790103795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 444121.76243658765,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 444103.45177664934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 363878.43089768785,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 363865.1356993735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364808.50483800477,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 364798.4013462348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365520.26039476704,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 365507.2238555233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223960.96018493606,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 223951.862316979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 367336.3295502636,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 367313.82934005745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1866000.2152918198,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1865793.1589537228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 736458.7948316704,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 736440.015661706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2507159.8365123933,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2507042.2343324292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4364.277343857289,
            "unit": "ns/iter",
            "extra": "iterations: 182701\ncpu: 4364.071351552545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19278.774569980324,
            "unit": "ns/iter",
            "extra": "iterations: 42847\ncpu: 19277.814082666286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15432.200679696469,
            "unit": "ns/iter",
            "extra": "iterations: 53259\ncpu: 15431.405020747681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15099.605684358145,
            "unit": "ns/iter",
            "extra": "iterations: 54606\ncpu: 15098.707101783708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15446.439757675222,
            "unit": "ns/iter",
            "extra": "iterations: 53152\ncpu: 15445.731110776618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47429.08932050211,
            "unit": "ns/iter",
            "extra": "iterations: 17454\ncpu: 47426.37790764319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 467286.15252418123,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 467257.51879699144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383174.9802631784,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 383136.18421052647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381369.4305738119,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381353.3508541402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379517.5503035302,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 379500.0867302695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226746.21593237662,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 226728.27868852427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376220.75217393064,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 376197.86956521997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1883064.8946279855,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1882913.4297520677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 743372.0803857899,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 743346.4630225082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4373.840868033478,
            "unit": "ns/iter",
            "extra": "iterations: 178242\ncpu: 4373.711583128552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19717.712959514116,
            "unit": "ns/iter",
            "extra": "iterations: 42980\ncpu: 19717.594229874252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15845.649275307545,
            "unit": "ns/iter",
            "extra": "iterations: 53609\ncpu: 15845.300229439057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15505.734199150174,
            "unit": "ns/iter",
            "extra": "iterations: 54823\ncpu: 15505.463035587161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15753.747096333651,
            "unit": "ns/iter",
            "extra": "iterations: 52692\ncpu: 15753.209215820207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47744.40231457708,
            "unit": "ns/iter",
            "extra": "iterations: 17541\ncpu: 47744.53565931257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 450948.0682056302,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 450935.99160545744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374158.7542116602,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 374138.01295896305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371333.33190024755,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 371325.2364574356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370547.914802094,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 370542.5989672993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230496.72674570695,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 230494.57180500627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371617.27882150706,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 371607.2587532022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.3066966027329,
            "unit": "ns/iter",
            "extra": "iterations: 2286204\ncpu: 305.3039011391799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1587.6876821329079,
            "unit": "ns/iter",
            "extra": "iterations: 440612\ncpu: 1587.6560329723097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1223.3359086211497,
            "unit": "ns/iter",
            "extra": "iterations: 573787\ncpu: 1223.3252060433513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1278.127637663218,
            "unit": "ns/iter",
            "extra": "iterations: 546696\ncpu: 1278.0715425025926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1051.7325233951149,
            "unit": "ns/iter",
            "extra": "iterations: 664989\ncpu: 1051.7167953153992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8004.564682223036,
            "unit": "ns/iter",
            "extra": "iterations: 86523\ncpu: 8004.295967546199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19078.512632304442,
            "unit": "ns/iter",
            "extra": "iterations: 36375\ncpu: 19078.114089346906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4499.647422255922,
            "unit": "ns/iter",
            "extra": "iterations: 155543\ncpu: 4499.433597140275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4480.030828614927,
            "unit": "ns/iter",
            "extra": "iterations: 156478\ncpu: 4479.999105305498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4497.696566150736,
            "unit": "ns/iter",
            "extra": "iterations: 155365\ncpu: 4497.6056383355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9062.085253307489,
            "unit": "ns/iter",
            "extra": "iterations: 77475\ncpu: 9061.946434333742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8474.703561444176,
            "unit": "ns/iter",
            "extra": "iterations: 82270\ncpu: 8474.304120578588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3251.47262187651,
            "unit": "ns/iter",
            "extra": "iterations: 215464\ncpu: 3251.398377455142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16380.057080132945,
            "unit": "ns/iter",
            "extra": "iterations: 42817\ncpu: 16379.69731648644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13043.846216920529,
            "unit": "ns/iter",
            "extra": "iterations: 53660\ncpu: 13043.451360417312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13132.925546077144,
            "unit": "ns/iter",
            "extra": "iterations: 53335\ncpu: 13132.832098996825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13426.904111949258,
            "unit": "ns/iter",
            "extra": "iterations: 52238\ncpu: 13425.94854320596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28858.715569477074,
            "unit": "ns/iter",
            "extra": "iterations: 24259\ncpu: 28858.811162867587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100443.98939068636,
            "unit": "ns/iter",
            "extra": "iterations: 6975\ncpu: 100441.27598566293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86471.34418719706,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 86469.50600470496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86821.9796767936,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 86817.61753183082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86342.68903113915,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 86341.03163855696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55785.71003658374,
            "unit": "ns/iter",
            "extra": "iterations: 12574\ncpu: 55785.86766343171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85690.74591363313,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85688.99731641739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3145.5852523384174,
            "unit": "ns/iter",
            "extra": "iterations: 222598\ncpu: 3145.519726143123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15851.406915375112,
            "unit": "ns/iter",
            "extra": "iterations: 44336\ncpu: 15850.746571634558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12695.312024602285,
            "unit": "ns/iter",
            "extra": "iterations: 54954\ncpu: 12694.666448302154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12508.641989880862,
            "unit": "ns/iter",
            "extra": "iterations: 55923\ncpu: 12508.400836865112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13012.695008555696,
            "unit": "ns/iter",
            "extra": "iterations: 53772\ncpu: 13012.31495945846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27632.118223102254,
            "unit": "ns/iter",
            "extra": "iterations: 25325\ncpu: 27631.3998025667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98801.14291755055,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 98799.06976744306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84581.08646753387,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 84580.26363526429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83245.49112778585,
            "unit": "ns/iter",
            "extra": "iterations: 8397\ncpu: 83242.80100035809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83442.98889817618,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 83440.44407305702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55983.44431118627,
            "unit": "ns/iter",
            "extra": "iterations: 12507\ncpu: 55982.04205644823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83986.67946256667,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 83981.25000000063 ns\nthreads: 1"
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
        "date": 1705957126783,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 706.6656240781433,
            "unit": "ns/iter",
            "extra": "iterations: 989844\ncpu: 706.6523613821977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10767.356450167548,
            "unit": "ns/iter",
            "extra": "iterations: 77029\ncpu: 10767.262978878085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24221.308210624382,
            "unit": "ns/iter",
            "extra": "iterations: 34431\ncpu: 24220.37117713688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37548.34723455753,
            "unit": "ns/iter",
            "extra": "iterations: 21389\ncpu: 37548.136892795366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47872.52814696127,
            "unit": "ns/iter",
            "extra": "iterations: 16929\ncpu: 47871.929824561405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60342.26072560111,
            "unit": "ns/iter",
            "extra": "iterations: 14195\ncpu: 60341.190560056355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59872.0202000095,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59871.49 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69170.00111031243,
            "unit": "ns/iter",
            "extra": "iterations: 12609\ncpu: 69168.4828297248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79408.72108842882,
            "unit": "ns/iter",
            "extra": "iterations: 11025\ncpu: 79407.73696145124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 580.4931707178868,
            "unit": "ns/iter",
            "extra": "iterations: 1203494\ncpu: 580.4831598661897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 491.0556377431556,
            "unit": "ns/iter",
            "extra": "iterations: 1424249\ncpu: 491.05282854332313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 487.1759595198345,
            "unit": "ns/iter",
            "extra": "iterations: 1435171\ncpu: 487.16703445094714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 485.5477063107567,
            "unit": "ns/iter",
            "extra": "iterations: 1426719\ncpu: 485.5491515848611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 969.5801604300685,
            "unit": "ns/iter",
            "extra": "iterations: 723181\ncpu: 969.5643276026332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4301.45402190016,
            "unit": "ns/iter",
            "extra": "iterations: 184751\ncpu: 4301.3315218862135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19208.01734172848,
            "unit": "ns/iter",
            "extra": "iterations: 41922\ncpu: 19207.917084108634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15322.216646812425,
            "unit": "ns/iter",
            "extra": "iterations: 53728\ncpu: 15322.252829064908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14352.42838879268,
            "unit": "ns/iter",
            "extra": "iterations: 57100\ncpu: 14352.306479859915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15260.916478682177,
            "unit": "ns/iter",
            "extra": "iterations: 53196\ncpu: 15260.818482592687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47822.506975419135,
            "unit": "ns/iter",
            "extra": "iterations: 17490\ncpu: 47820.548885077216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 446828.345463831,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 446810.9174782156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361717.8740585864,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 361707.19665271934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366196.7460117565,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 366186.6498740554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 361255.4505448319,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 361256.28667225444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219974.74189429884,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 219967.88358437625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360671.0536159529,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 360657.98004987615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1864653.1856286523,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1864582.8343313404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 715008.3641927727,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 714981.1782708479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2493735.0840107114,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2493677.506775066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4358.54241683129,
            "unit": "ns/iter",
            "extra": "iterations: 183182\ncpu: 4358.336517780143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19279.990210439326,
            "unit": "ns/iter",
            "extra": "iterations: 43005\ncpu: 19279.581444018106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15316.957865946477,
            "unit": "ns/iter",
            "extra": "iterations: 54113\ncpu: 15316.360209191942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15002.97634420278,
            "unit": "ns/iter",
            "extra": "iterations: 55293\ncpu: 15002.640478903277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15406.72785026239,
            "unit": "ns/iter",
            "extra": "iterations: 52732\ncpu: 15406.100659940763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47537.927407827025,
            "unit": "ns/iter",
            "extra": "iterations: 17495\ncpu: 47536.47899399813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 462021.7909333708,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 462007.9999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 379122.93067592557,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 379111.56845753815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 374490.1753246807,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 374481.3852813847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 369822.3030945264,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 369809.96184824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220042.26639959967,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 220037.15573359944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 369351.24957625766,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 369345.9745762713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1857901.4329268245,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1857747.1544715487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 729448.4064465795,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 729437.3427672986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4292.31353657186,
            "unit": "ns/iter",
            "extra": "iterations: 184020\ncpu: 4292.145418976187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19294.456567077614,
            "unit": "ns/iter",
            "extra": "iterations: 41236\ncpu: 19293.879134736635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15333.621951680414,
            "unit": "ns/iter",
            "extra": "iterations: 53062\ncpu: 15333.270513738667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15024.669227093167,
            "unit": "ns/iter",
            "extra": "iterations: 54418\ncpu: 15024.311808592787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15942.803548699689,
            "unit": "ns/iter",
            "extra": "iterations: 53428\ncpu: 15942.447780190212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47229.08086807696,
            "unit": "ns/iter",
            "extra": "iterations: 17510\ncpu: 47226.51056539113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 442311.69242583774,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 442288.43398157816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 365696.18926910986,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 365685.29784537514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365059.8708861084,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 365055.82278481044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 362548.413089682,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 362540.3739906526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221816.7645415271,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 221810.21082042065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 365015.4150063815,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 365004.6206019502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.3903878436857,
            "unit": "ns/iter",
            "extra": "iterations: 2298194\ncpu: 304.38017852278693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1612.009248122147,
            "unit": "ns/iter",
            "extra": "iterations: 435656\ncpu: 1611.9491066346025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1203.4682676257219,
            "unit": "ns/iter",
            "extra": "iterations: 581693\ncpu: 1203.4268935675755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1290.203613597619,
            "unit": "ns/iter",
            "extra": "iterations: 543392\ncpu: 1290.1809375184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1022.6909198760563,
            "unit": "ns/iter",
            "extra": "iterations: 682755\ncpu: 1022.6646454438303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7918.210546622665,
            "unit": "ns/iter",
            "extra": "iterations: 88123\ncpu: 7918.014593238917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18403.368727542293,
            "unit": "ns/iter",
            "extra": "iterations: 38123\ncpu: 18402.825066233174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4377.9127000017525,
            "unit": "ns/iter",
            "extra": "iterations: 159874\ncpu: 4377.883833518898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4361.783585902727,
            "unit": "ns/iter",
            "extra": "iterations: 160484\ncpu: 4361.685900151988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4381.89552723875,
            "unit": "ns/iter",
            "extra": "iterations: 160013\ncpu: 4381.903345353176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9184.904444910664,
            "unit": "ns/iter",
            "extra": "iterations: 76312\ncpu: 9184.698343641896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8309.94941685334,
            "unit": "ns/iter",
            "extra": "iterations: 83941\ncpu: 8309.859305941081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3208.7576203642593,
            "unit": "ns/iter",
            "extra": "iterations: 218067\ncpu: 3208.7092499094756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16285.98148277021,
            "unit": "ns/iter",
            "extra": "iterations: 43095\ncpu: 16285.85218702876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12981.593688069815,
            "unit": "ns/iter",
            "extra": "iterations: 53993\ncpu: 12981.4661159779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13067.82704178859,
            "unit": "ns/iter",
            "extra": "iterations: 53458\ncpu: 13067.69426465625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13422.046457251874,
            "unit": "ns/iter",
            "extra": "iterations: 52177\ncpu: 13421.925369415614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28678.460083858663,
            "unit": "ns/iter",
            "extra": "iterations: 24326\ncpu: 28677.87141330253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98313.14341792649,
            "unit": "ns/iter",
            "extra": "iterations: 7133\ncpu: 98312.11271554764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84583.15570600075,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84581.26208897568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83842.58097286243,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83841.75929245846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84226.40466738907,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 84225.55034283742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55279.40298270652,
            "unit": "ns/iter",
            "extra": "iterations: 12606\ncpu: 55278.13739489076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85868.1609264302,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 85867.56270250758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3087.538013427917,
            "unit": "ns/iter",
            "extra": "iterations: 226249\ncpu: 3087.5093370578397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15408.903927624608,
            "unit": "ns/iter",
            "extra": "iterations: 45320\ncpu: 15408.673874669046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12432.188600541042,
            "unit": "ns/iter",
            "extra": "iterations: 56336\ncpu: 12431.784294234787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12384.321423518199,
            "unit": "ns/iter",
            "extra": "iterations: 56536\ncpu: 12384.23305504449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12872.05990673265,
            "unit": "ns/iter",
            "extra": "iterations: 54468\ncpu: 12871.92847176337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27591.417204977824,
            "unit": "ns/iter",
            "extra": "iterations: 25388\ncpu: 27591.109973215673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98468.19647886867,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98465.35211267482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83840.63744160836,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 83839.2262546414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83475.5784407053,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83474.8752079866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83691.54402780136,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 83686.51012339751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55885.28953265458,
            "unit": "ns/iter",
            "extra": "iterations: 12496\ncpu: 55883.41069142061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84377.8886078949,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 84374.81936416183 ns\nthreads: 1"
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
        "date": 1705958580095,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 700.827835157724,
            "unit": "ns/iter",
            "extra": "iterations: 1000059\ncpu: 700.7817538765213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10731.262141807025,
            "unit": "ns/iter",
            "extra": "iterations: 77542\ncpu: 10730.874880709807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23808.07735044205,
            "unit": "ns/iter",
            "extra": "iterations: 34919\ncpu: 23807.69208740228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37220.059619524036,
            "unit": "ns/iter",
            "extra": "iterations: 22761\ncpu: 37219.142392689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47548.921740684345,
            "unit": "ns/iter",
            "extra": "iterations: 16752\ncpu: 47547.952483285604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59172.90516641273,
            "unit": "ns/iter",
            "extra": "iterations: 14362\ncpu: 59172.677900013936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59338.48079999962,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59336.51000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69732.16386720329,
            "unit": "ns/iter",
            "extra": "iterations: 12681\ncpu: 69730.45501143442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78296.59669004843,
            "unit": "ns/iter",
            "extra": "iterations: 11118\ncpu: 78296.18636445391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 575.8138939833688,
            "unit": "ns/iter",
            "extra": "iterations: 1214281\ncpu: 575.812929626668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 481.9893353248777,
            "unit": "ns/iter",
            "extra": "iterations: 1443457\ncpu: 481.98068941437026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 469.0977216036093,
            "unit": "ns/iter",
            "extra": "iterations: 1489732\ncpu: 469.09450827397177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 478.47510884110966,
            "unit": "ns/iter",
            "extra": "iterations: 1467047\ncpu: 478.4704239196155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 970.3720801159756,
            "unit": "ns/iter",
            "extra": "iterations: 720705\ncpu: 970.3676261438466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4206.572287802769,
            "unit": "ns/iter",
            "extra": "iterations: 186878\ncpu: 4206.242575370031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19285.43752520522,
            "unit": "ns/iter",
            "extra": "iterations: 42153\ncpu: 19285.19441083671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15389.81780379957,
            "unit": "ns/iter",
            "extra": "iterations: 53629\ncpu: 15389.73503141959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15056.079995596525,
            "unit": "ns/iter",
            "extra": "iterations: 54503\ncpu: 15056.024439021754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15646.352492488262,
            "unit": "ns/iter",
            "extra": "iterations: 51916\ncpu: 15646.082132675856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47770.88256025261,
            "unit": "ns/iter",
            "extra": "iterations: 17592\ncpu: 47770.27057753527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 445586.7518059691,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 445583.5397316823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 365185.3867056574,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 365181.22909699054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367518.47613013367,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 367513.47697507514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365671.96931480564,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 365669.8612862539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221861.4870942822,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 221860.72067467362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366342.54633533256,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 366321.4406065704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1865322.5887096284,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1865224.193548384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 746755.6363636677,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 746733.306516494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2502597.7277628877,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2502446.6307277656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4265.398154508729,
            "unit": "ns/iter",
            "extra": "iterations: 184883\ncpu: 4265.324556611491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19057.3939804403,
            "unit": "ns/iter",
            "extra": "iterations: 43558\ncpu: 19057.353413839108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15525.12042609746,
            "unit": "ns/iter",
            "extra": "iterations: 54166\ncpu: 15525.076616327475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15033.727178743431,
            "unit": "ns/iter",
            "extra": "iterations: 55135\ncpu: 15033.501405640665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15936.328833340276,
            "unit": "ns/iter",
            "extra": "iterations: 51926\ncpu: 15936.128336478849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47708.44839188477,
            "unit": "ns/iter",
            "extra": "iterations: 17536\ncpu: 47707.25364963519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 469727.1374459162,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 469705.681818181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380920.289114137,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 380902.20361392654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379605.0690704083,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 379588.0538662053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379472.5956616072,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 379470.802603037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224694.3920410724,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 224686.59820282372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379951.5321662975,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 379935.7111597377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1882059.0246405846,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1881962.2176591454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 749216.4578606925,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 749183.9546191234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4344.45027174901,
            "unit": "ns/iter",
            "extra": "iterations: 183809\ncpu: 4344.211110446169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19815.241520481442,
            "unit": "ns/iter",
            "extra": "iterations: 42013\ncpu: 19815.32382833892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15527.562566157525,
            "unit": "ns/iter",
            "extra": "iterations: 52904\ncpu: 15527.47618327543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15046.842653172165,
            "unit": "ns/iter",
            "extra": "iterations: 55330\ncpu: 15046.773902042283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15482.347526413068,
            "unit": "ns/iter",
            "extra": "iterations: 53101\ncpu: 15482.009754995148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47424.6003981828,
            "unit": "ns/iter",
            "extra": "iterations: 17580\ncpu: 47424.80091012518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 452667.91382032604,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 452666.0535995801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368406.61518663913,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 368398.15529815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369074.50876442617,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 369073.236425824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 368404.2211744558,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 368401.7573939129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225778.2091705186,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 225775.34775888728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370953.2362306238,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 370942.9001721187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.1659589181135,
            "unit": "ns/iter",
            "extra": "iterations: 2299310\ncpu: 304.1630315181486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1637.891955911777,
            "unit": "ns/iter",
            "extra": "iterations: 425965\ncpu: 1637.8970103177483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1272.9861700263918,
            "unit": "ns/iter",
            "extra": "iterations: 553291\ncpu: 1272.9916083941328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1300.9250207871107,
            "unit": "ns/iter",
            "extra": "iterations: 537589\ncpu: 1300.891573302283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1061.0077601789699,
            "unit": "ns/iter",
            "extra": "iterations: 662227\ncpu: 1061.0027981341764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8185.1751844298,
            "unit": "ns/iter",
            "extra": "iterations: 82416\ncpu: 8185.114540865857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18832.2628974694,
            "unit": "ns/iter",
            "extra": "iterations: 36984\ncpu: 18832.1625567814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4442.8986266405345,
            "unit": "ns/iter",
            "extra": "iterations: 157497\ncpu: 4442.790656329966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4428.142924865026,
            "unit": "ns/iter",
            "extra": "iterations: 158209\ncpu: 4428.089426012397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4457.3609619203335,
            "unit": "ns/iter",
            "extra": "iterations: 157144\ncpu: 4457.288856081038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9383.943796892634,
            "unit": "ns/iter",
            "extra": "iterations: 74640\ncpu: 9383.802250803838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8465.049549549485,
            "unit": "ns/iter",
            "extra": "iterations: 83028\ncpu: 8464.814279520057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3228.8116838520887,
            "unit": "ns/iter",
            "extra": "iterations: 216949\ncpu: 3228.795246809199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16235.746833387391,
            "unit": "ns/iter",
            "extra": "iterations: 43106\ncpu: 16235.612211757145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12911.131047083649,
            "unit": "ns/iter",
            "extra": "iterations: 54179\ncpu: 12911.026412447594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12931.162377813793,
            "unit": "ns/iter",
            "extra": "iterations: 54016\ncpu: 12931.053761848441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13261.832961802358,
            "unit": "ns/iter",
            "extra": "iterations: 52934\ncpu: 13261.123285600941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28865.056550814592,
            "unit": "ns/iter",
            "extra": "iterations: 24226\ncpu: 28862.676463303713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99716.83522562048,
            "unit": "ns/iter",
            "extra": "iterations: 6870\ncpu: 99714.51237263565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86107.12040464682,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 86105.97088576357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85811.67530394123,
            "unit": "ns/iter",
            "extra": "iterations: 8143\ncpu: 85810.25420606685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85974.63514509461,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 85973.9793408761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56004.48270048442,
            "unit": "ns/iter",
            "extra": "iterations: 12457\ncpu: 56004.75234807818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85671.17789757099,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 85670.46067140513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3089.01919963227,
            "unit": "ns/iter",
            "extra": "iterations: 226046\ncpu: 3088.9248206117745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15680.343515696131,
            "unit": "ns/iter",
            "extra": "iterations: 44947\ncpu: 15679.693861659152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12471.078312076874,
            "unit": "ns/iter",
            "extra": "iterations: 56377\ncpu: 12470.574879826952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12437.672857978205,
            "unit": "ns/iter",
            "extra": "iterations: 56477\ncpu: 12437.608229898826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12987.859660209413,
            "unit": "ns/iter",
            "extra": "iterations: 53798\ncpu: 12987.793226513968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27794.054381507052,
            "unit": "ns/iter",
            "extra": "iterations: 25174\ncpu: 27792.802097402262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98590.45966494229,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 98584.28832887516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83705.09511844828,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83699.28212491063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83729.48521553144,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 83723.5126469536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83136.55411820339,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83135.56847851907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55808.003922512304,
            "unit": "ns/iter",
            "extra": "iterations: 12492\ncpu: 55808.253282100035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84628.93805095198,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84626.30117135642 ns\nthreads: 1"
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
        "date": 1705960053578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 704.1253466830709,
            "unit": "ns/iter",
            "extra": "iterations: 991179\ncpu: 704.0929035017894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10797.244059688937,
            "unit": "ns/iter",
            "extra": "iterations: 76932\ncpu: 10796.546300629127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23919.349503384296,
            "unit": "ns/iter",
            "extra": "iterations: 34735\ncpu: 23918.25536202677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38454.90441895777,
            "unit": "ns/iter",
            "extra": "iterations: 22494\ncpu: 38453.09415844226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49734.46582475903,
            "unit": "ns/iter",
            "extra": "iterations: 16708\ncpu: 49733.50490782855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57921.60718677108,
            "unit": "ns/iter",
            "extra": "iterations: 14638\ncpu: 57921.01379969943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57909.5671999994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57906.28999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67405.63148148227,
            "unit": "ns/iter",
            "extra": "iterations: 12960\ncpu: 67404.72222222228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76862.3464691834,
            "unit": "ns/iter",
            "extra": "iterations: 11343\ncpu: 76860.30150753766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 599.8174448311613,
            "unit": "ns/iter",
            "extra": "iterations: 1202809\ncpu: 599.8168454010582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 494.33871802490074,
            "unit": "ns/iter",
            "extra": "iterations: 1414380\ncpu: 494.33066078423116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 493.0612857420739,
            "unit": "ns/iter",
            "extra": "iterations: 1418356\ncpu: 493.0451875269678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 498.85934841674043,
            "unit": "ns/iter",
            "extra": "iterations: 1401847\ncpu: 498.84923247686834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 975.0513812824369,
            "unit": "ns/iter",
            "extra": "iterations: 709558\ncpu: 974.9810445375858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4142.868101326921,
            "unit": "ns/iter",
            "extra": "iterations: 194657\ncpu: 4142.6334526885785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19605.024303651448,
            "unit": "ns/iter",
            "extra": "iterations: 41969\ncpu: 19604.15783077989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15666.887745983968,
            "unit": "ns/iter",
            "extra": "iterations: 52595\ncpu: 15665.719174826516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15229.588517909535,
            "unit": "ns/iter",
            "extra": "iterations: 53492\ncpu: 15228.748224033494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15625.946283751266,
            "unit": "ns/iter",
            "extra": "iterations: 52405\ncpu: 15625.2819387463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46112.42072011108,
            "unit": "ns/iter",
            "extra": "iterations: 17886\ncpu: 46110.05255507106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 444261.85334697936,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 444225.60040879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362133.39883188764,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 362117.7722152682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363798.72517805005,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 363780.6032677002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 366206.49517010443,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 366188.5342293158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223703.64271047738,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 223692.17145790532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 386160.81286796567,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 386131.9596299417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1871297.2145748597,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1871239.6761133648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 739675.5244478941,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 739632.1766561517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2507849.776566899,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2507708.4468664816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4513.084584209788,
            "unit": "ns/iter",
            "extra": "iterations: 181606\ncpu: 4512.834377718808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19987.76329395355,
            "unit": "ns/iter",
            "extra": "iterations: 42745\ncpu: 19987.009006901357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15493.883888285707,
            "unit": "ns/iter",
            "extra": "iterations: 52527\ncpu: 15493.102594855882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15253.037720173856,
            "unit": "ns/iter",
            "extra": "iterations: 54162\ncpu: 15252.50175399732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15939.919151895609,
            "unit": "ns/iter",
            "extra": "iterations: 51739\ncpu: 15938.991863004634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47433.486131637175,
            "unit": "ns/iter",
            "extra": "iterations: 17594\ncpu: 47431.7835625782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 464165.4804079367,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 464144.0150295199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382056.6158911086,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 382036.5671641791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378993.58907673124,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 378990.98396185425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378365.1381834013,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 378344.2531209669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 219651.65625000585,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 219644.7328629021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372638.7516059694,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 372622.99785867083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1853980.4918700112,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1853932.1138211272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 712309.1689707859,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 712298.3870967762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4375.684281879866,
            "unit": "ns/iter",
            "extra": "iterations: 183667\ncpu: 4375.549772141972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19322.831564398162,
            "unit": "ns/iter",
            "extra": "iterations: 42681\ncpu: 19322.700967643694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15351.353174082811,
            "unit": "ns/iter",
            "extra": "iterations: 53291\ncpu: 15351.318233848111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15115.057937513224,
            "unit": "ns/iter",
            "extra": "iterations: 54507\ncpu: 15114.924688572057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15731.681375171713,
            "unit": "ns/iter",
            "extra": "iterations: 52328\ncpu: 15731.25095551141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47401.4719780826,
            "unit": "ns/iter",
            "extra": "iterations: 17522\ncpu: 47400.17121333198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 451167.2649974157,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 451152.99947835354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372251.8252136796,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 372246.1965811983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371724.923044402,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 371718.30866807565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371778.0025423627,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 371771.1440677941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224317.71803360689,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 224314.62047885984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371125.3854166474,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 371114.4927536246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.0671731469059,
            "unit": "ns/iter",
            "extra": "iterations: 2322565\ncpu: 303.0544247416103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1553.3239920582728,
            "unit": "ns/iter",
            "extra": "iterations: 450795\ncpu: 1553.2792067347782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1250.3210577562363,
            "unit": "ns/iter",
            "extra": "iterations: 555629\ncpu: 1250.3091091357696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1248.7122932770437,
            "unit": "ns/iter",
            "extra": "iterations: 560835\ncpu: 1248.6242834345228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1026.222272759888,
            "unit": "ns/iter",
            "extra": "iterations: 681559\ncpu: 1026.1673604192747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8099.317096620887,
            "unit": "ns/iter",
            "extra": "iterations: 86327\ncpu: 8098.925017665317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18647.073892414195,
            "unit": "ns/iter",
            "extra": "iterations: 37514\ncpu: 18645.988164418308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4434.391431533601,
            "unit": "ns/iter",
            "extra": "iterations: 157251\ncpu: 4434.137779727984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4410.960692379266,
            "unit": "ns/iter",
            "extra": "iterations: 158468\ncpu: 4410.701214125236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4477.137916553116,
            "unit": "ns/iter",
            "extra": "iterations: 157153\ncpu: 4476.7958613579785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9242.662557414536,
            "unit": "ns/iter",
            "extra": "iterations: 75764\ncpu: 9242.03447547653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7538.415923409889,
            "unit": "ns/iter",
            "extra": "iterations: 93171\ncpu: 7538.039733393442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3236.2336650122447,
            "unit": "ns/iter",
            "extra": "iterations: 216575\ncpu: 3236.061410596803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16168.488709155268,
            "unit": "ns/iter",
            "extra": "iterations: 43398\ncpu: 16167.625236185988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12900.159827014264,
            "unit": "ns/iter",
            "extra": "iterations: 54340\ncpu: 12899.37983069557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13018.622252745954,
            "unit": "ns/iter",
            "extra": "iterations: 53872\ncpu: 13018.445574695617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13352.654443119187,
            "unit": "ns/iter",
            "extra": "iterations: 52767\ncpu: 13352.256144939158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28980.68679355225,
            "unit": "ns/iter",
            "extra": "iterations: 24064\ncpu: 28980.339926862034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99845.32663532476,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 99837.42340031362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85405.27360331436,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85399.75603805868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84573.77289378433,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 84568.00976800939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84900.44726301204,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84897.93664279686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55724.09706511079,
            "unit": "ns/iter",
            "extra": "iterations: 12641\ncpu: 55723.59781662857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85057.86384577451,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 85051.34578079548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3121.859827672408,
            "unit": "ns/iter",
            "extra": "iterations: 222947\ncpu: 3121.6930481235077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15590.039990209954,
            "unit": "ns/iter",
            "extra": "iterations: 44936\ncpu: 15588.839683104845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12470.805010952463,
            "unit": "ns/iter",
            "extra": "iterations: 56157\ncpu: 12470.112363552267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12454.402960175928,
            "unit": "ns/iter",
            "extra": "iterations: 56348\ncpu: 12453.872364591454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12912.86777574978,
            "unit": "ns/iter",
            "extra": "iterations: 54279\ncpu: 12912.494703292285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27792.773554967094,
            "unit": "ns/iter",
            "extra": "iterations: 25207\ncpu: 27792.506049906715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97836.8336851013,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 97832.91121429674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83782.41541038481,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83778.21249102523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82878.51444065597,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82872.62760815865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83166.23190299678,
            "unit": "ns/iter",
            "extra": "iterations: 8413\ncpu: 83161.51194579876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55823.74290044386,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55823.16528398222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83909.23063127945,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83902.64227642177 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}