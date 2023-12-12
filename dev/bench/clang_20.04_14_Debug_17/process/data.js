window.BENCHMARK_DATA = {
  "lastUpdate": 1702394233051,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 20.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394226291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15728.349934529258,
            "unit": "ns/iter",
            "extra": "iterations: 44294\ncpu: 15727.40777531946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149425.93715990536,
            "unit": "ns/iter",
            "extra": "iterations: 5697\ncpu: 149416.97384588383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285170.20078738435,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 285154.2979002625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417521.2565091734,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 417481.0511089684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 555425.443880848,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 555354.6607482561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555771.4630000419,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555734.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 661649.9992830987,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 661637.4193548388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768395.4962531546,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 768364.1965029148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 882007.6043642453,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 881965.7495256168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12884.411272189196,
            "unit": "ns/iter",
            "extra": "iterations: 54701\ncpu: 12884.199557594942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10557.944948469927,
            "unit": "ns/iter",
            "extra": "iterations: 66465\ncpu: 10557.028511246523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10575.46828671181,
            "unit": "ns/iter",
            "extra": "iterations: 66171\ncpu: 10574.58100980793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10586.330771790885,
            "unit": "ns/iter",
            "extra": "iterations: 66106\ncpu: 10585.184400810813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17137.135295697608,
            "unit": "ns/iter",
            "extra": "iterations: 40903\ncpu: 17135.430164046644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60602.92380610708,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 60596.91921005393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 306085.5215208066,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 306068.00573888107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 246260.59849144815,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 246234.23266608702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 249168.30380119025,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 249147.69005847952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 248286.8859571998,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 248259.42538844908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 547032.9203262308,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 546990.8406524471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4708205.1161617,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4707944.444444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3861451.576763404,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3860989.626556012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3840702.0905354186,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840468.7242798405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3856037.9173553665,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3855613.636363627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2207609.0238663564,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2207412.4105011877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3742028.749999712,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3741808.870967741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14705944.472222794,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14704445.833333364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6757372.700000132,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6756752.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18425477.775861446,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18424015.51724142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65543.57377681693,
            "unit": "ns/iter",
            "extra": "iterations: 12958\ncpu: 65539.70520142019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 344578.9987917953,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 344561.0954490528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277203.89853658434,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 277198.37398373923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 283098.51537189446,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 283087.7685950419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278124.4920117164,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 278108.020867297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584331.9885212324,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584311.6137744787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4743369.637754787,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4743221.428571448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3891464.504166701,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3891318.7500000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897514.916318024,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897067.3640167075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3892759.216666756,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3892324.166666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2251112.2203389127,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2250955.6900726496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3772392.9796744245,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772023.9837398543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15092298.183098663,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15091221.126760537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6733405.190000212,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6732377.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56547.00280000497,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56542.290000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 320724.2128060425,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 320694.2372881377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 253944.22960546226,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 253926.2533372891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 251086.65530413797,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 251081.0461357628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 249774.38686988194,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 249768.4642438451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530545.0901287616,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 530510.4230533415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4721654.606060663,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4721519.6969696805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856241.111110997,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3856154.7325102785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3851082.9341564877,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3850909.4650205867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3846069.8181816307,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3845844.2148760287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2225732.9952153624,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2225610.0478468826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3736347.3679997697,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3736061.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5892.443269499272,
            "unit": "ns/iter",
            "extra": "iterations: 118587\ncpu: 5892.2917351817805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39333.45720873006,
            "unit": "ns/iter",
            "extra": "iterations: 17784\ncpu: 39330.218173639434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31517.224320545738,
            "unit": "ns/iter",
            "extra": "iterations: 22187\ncpu: 31515.567674764407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30529.84530410982,
            "unit": "ns/iter",
            "extra": "iterations: 22903\ncpu: 30527.092520630846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22794.76015013163,
            "unit": "ns/iter",
            "extra": "iterations: 30640\ncpu: 22793.087467362544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150316.37131801352,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 150313.78198236885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 312075.0929816673,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 312056.59365221654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78189.95577587529,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78186.58794697563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78047.43135075277,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 78040.66703724288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78052.87871342269,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 78050.0670091571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160772.25930180622,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160767.24850712068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149684.85576923352,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 149681.0256410265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46897.26168349625,
            "unit": "ns/iter",
            "extra": "iterations: 14957\ncpu: 46893.08684896651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226989.0871396361,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 226978.0693229671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186166.9733971824,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 186157.5951050815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186356.50892141613,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 186351.13182423392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187558.5375100698,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187550.04033342376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 316175.30501580547,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 316152.0560325373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1341458.3918918117,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1341413.8996138761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127113.3392282114,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1127107.7170417937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1126316.2774192155,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1126296.9354838734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119709.8862179809,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119664.1025640985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718478.0678314456,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718444.5015416327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1108711.0015948298,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1108667.4641148467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46854.16965360648,
            "unit": "ns/iter",
            "extra": "iterations: 14954\ncpu: 46851.18362979802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231436.93868079662,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 231409.01557838876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188595.3273119159,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 188576.97492585646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 188892.83391940288,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 188879.06410603243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189227.30197350637,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189220.60016220665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323745.269159768,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 323736.98060942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1430609.4819046068,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1430543.2380952185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1118606.1433121066,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1118599.2038216637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1114396.7484075045,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114314.3312101914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1117238.1230031727,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117170.4472843248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 713221.5504587166,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 713144.7502548442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1107765.7781300328,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1107736.2916006278 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394226291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15728.349934529258,
            "unit": "ns/iter",
            "extra": "iterations: 44294\ncpu: 15727.40777531946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149425.93715990536,
            "unit": "ns/iter",
            "extra": "iterations: 5697\ncpu: 149416.97384588383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285170.20078738435,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 285154.2979002625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417521.2565091734,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 417481.0511089684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 555425.443880848,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 555354.6607482561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555771.4630000419,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555734.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 661649.9992830987,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 661637.4193548388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768395.4962531546,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 768364.1965029148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 882007.6043642453,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 881965.7495256168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12884.411272189196,
            "unit": "ns/iter",
            "extra": "iterations: 54701\ncpu: 12884.199557594942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10557.944948469927,
            "unit": "ns/iter",
            "extra": "iterations: 66465\ncpu: 10557.028511246523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10575.46828671181,
            "unit": "ns/iter",
            "extra": "iterations: 66171\ncpu: 10574.58100980793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10586.330771790885,
            "unit": "ns/iter",
            "extra": "iterations: 66106\ncpu: 10585.184400810813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17137.135295697608,
            "unit": "ns/iter",
            "extra": "iterations: 40903\ncpu: 17135.430164046644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60602.92380610708,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 60596.91921005393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 306085.5215208066,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 306068.00573888107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 246260.59849144815,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 246234.23266608702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 249168.30380119025,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 249147.69005847952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 248286.8859571998,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 248259.42538844908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 547032.9203262308,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 546990.8406524471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4708205.1161617,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4707944.444444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3861451.576763404,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3860989.626556012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3840702.0905354186,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840468.7242798405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3856037.9173553665,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3855613.636363627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2207609.0238663564,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2207412.4105011877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3742028.749999712,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3741808.870967741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14705944.472222794,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14704445.833333364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6757372.700000132,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6756752.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18425477.775861446,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18424015.51724142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65543.57377681693,
            "unit": "ns/iter",
            "extra": "iterations: 12958\ncpu: 65539.70520142019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 344578.9987917953,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 344561.0954490528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277203.89853658434,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 277198.37398373923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 283098.51537189446,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 283087.7685950419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278124.4920117164,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 278108.020867297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584331.9885212324,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584311.6137744787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4743369.637754787,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4743221.428571448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3891464.504166701,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3891318.7500000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897514.916318024,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897067.3640167075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3892759.216666756,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3892324.166666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2251112.2203389127,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2250955.6900726496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3772392.9796744245,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772023.9837398543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15092298.183098663,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15091221.126760537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6733405.190000212,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6732377.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56547.00280000497,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56542.290000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 320724.2128060425,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 320694.2372881377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 253944.22960546226,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 253926.2533372891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 251086.65530413797,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 251081.0461357628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 249774.38686988194,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 249768.4642438451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530545.0901287616,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 530510.4230533415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4721654.606060663,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4721519.6969696805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856241.111110997,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3856154.7325102785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3851082.9341564877,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3850909.4650205867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3846069.8181816307,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3845844.2148760287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2225732.9952153624,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2225610.0478468826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3736347.3679997697,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3736061.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5892.443269499272,
            "unit": "ns/iter",
            "extra": "iterations: 118587\ncpu: 5892.2917351817805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39333.45720873006,
            "unit": "ns/iter",
            "extra": "iterations: 17784\ncpu: 39330.218173639434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31517.224320545738,
            "unit": "ns/iter",
            "extra": "iterations: 22187\ncpu: 31515.567674764407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30529.84530410982,
            "unit": "ns/iter",
            "extra": "iterations: 22903\ncpu: 30527.092520630846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22794.76015013163,
            "unit": "ns/iter",
            "extra": "iterations: 30640\ncpu: 22793.087467362544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150316.37131801352,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 150313.78198236885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 312075.0929816673,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 312056.59365221654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78189.95577587529,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78186.58794697563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78047.43135075277,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 78040.66703724288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78052.87871342269,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 78050.0670091571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160772.25930180622,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160767.24850712068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149684.85576923352,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 149681.0256410265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46897.26168349625,
            "unit": "ns/iter",
            "extra": "iterations: 14957\ncpu: 46893.08684896651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226989.0871396361,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 226978.0693229671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186166.9733971824,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 186157.5951050815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186356.50892141613,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 186351.13182423392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187558.5375100698,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187550.04033342376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 316175.30501580547,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 316152.0560325373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1341458.3918918117,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1341413.8996138761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127113.3392282114,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1127107.7170417937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1126316.2774192155,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1126296.9354838734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119709.8862179809,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119664.1025640985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718478.0678314456,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718444.5015416327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1108711.0015948298,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1108667.4641148467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46854.16965360648,
            "unit": "ns/iter",
            "extra": "iterations: 14954\ncpu: 46851.18362979802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231436.93868079662,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 231409.01557838876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188595.3273119159,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 188576.97492585646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 188892.83391940288,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 188879.06410603243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189227.30197350637,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189220.60016220665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323745.269159768,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 323736.98060942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1430609.4819046068,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1430543.2380952185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1118606.1433121066,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1118599.2038216637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1114396.7484075045,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114314.3312101914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1117238.1230031727,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117170.4472843248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 713221.5504587166,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 713144.7502548442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1107765.7781300328,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1107736.2916006278 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394226291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15728.349934529258,
            "unit": "ns/iter",
            "extra": "iterations: 44294\ncpu: 15727.40777531946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149425.93715990536,
            "unit": "ns/iter",
            "extra": "iterations: 5697\ncpu: 149416.97384588383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285170.20078738435,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 285154.2979002625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417521.2565091734,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 417481.0511089684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 555425.443880848,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 555354.6607482561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555771.4630000419,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555734.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 661649.9992830987,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 661637.4193548388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768395.4962531546,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 768364.1965029148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 882007.6043642453,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 881965.7495256168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12884.411272189196,
            "unit": "ns/iter",
            "extra": "iterations: 54701\ncpu: 12884.199557594942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10557.944948469927,
            "unit": "ns/iter",
            "extra": "iterations: 66465\ncpu: 10557.028511246523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10575.46828671181,
            "unit": "ns/iter",
            "extra": "iterations: 66171\ncpu: 10574.58100980793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10586.330771790885,
            "unit": "ns/iter",
            "extra": "iterations: 66106\ncpu: 10585.184400810813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17137.135295697608,
            "unit": "ns/iter",
            "extra": "iterations: 40903\ncpu: 17135.430164046644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60602.92380610708,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 60596.91921005393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 306085.5215208066,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 306068.00573888107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 246260.59849144815,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 246234.23266608702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 249168.30380119025,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 249147.69005847952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 248286.8859571998,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 248259.42538844908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 547032.9203262308,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 546990.8406524471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4708205.1161617,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4707944.444444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3861451.576763404,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3860989.626556012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3840702.0905354186,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840468.7242798405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3856037.9173553665,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3855613.636363627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2207609.0238663564,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2207412.4105011877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3742028.749999712,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3741808.870967741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14705944.472222794,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14704445.833333364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6757372.700000132,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6756752.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18425477.775861446,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18424015.51724142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65543.57377681693,
            "unit": "ns/iter",
            "extra": "iterations: 12958\ncpu: 65539.70520142019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 344578.9987917953,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 344561.0954490528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277203.89853658434,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 277198.37398373923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 283098.51537189446,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 283087.7685950419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278124.4920117164,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 278108.020867297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584331.9885212324,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584311.6137744787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4743369.637754787,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4743221.428571448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3891464.504166701,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3891318.7500000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897514.916318024,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897067.3640167075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3892759.216666756,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3892324.166666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2251112.2203389127,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2250955.6900726496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3772392.9796744245,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772023.9837398543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15092298.183098663,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15091221.126760537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6733405.190000212,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6732377.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56547.00280000497,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56542.290000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 320724.2128060425,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 320694.2372881377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 253944.22960546226,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 253926.2533372891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 251086.65530413797,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 251081.0461357628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 249774.38686988194,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 249768.4642438451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530545.0901287616,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 530510.4230533415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4721654.606060663,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4721519.6969696805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856241.111110997,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3856154.7325102785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3851082.9341564877,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3850909.4650205867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3846069.8181816307,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3845844.2148760287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2225732.9952153624,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2225610.0478468826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3736347.3679997697,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3736061.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5892.443269499272,
            "unit": "ns/iter",
            "extra": "iterations: 118587\ncpu: 5892.2917351817805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39333.45720873006,
            "unit": "ns/iter",
            "extra": "iterations: 17784\ncpu: 39330.218173639434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31517.224320545738,
            "unit": "ns/iter",
            "extra": "iterations: 22187\ncpu: 31515.567674764407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30529.84530410982,
            "unit": "ns/iter",
            "extra": "iterations: 22903\ncpu: 30527.092520630846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22794.76015013163,
            "unit": "ns/iter",
            "extra": "iterations: 30640\ncpu: 22793.087467362544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150316.37131801352,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 150313.78198236885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 312075.0929816673,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 312056.59365221654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78189.95577587529,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78186.58794697563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78047.43135075277,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 78040.66703724288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78052.87871342269,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 78050.0670091571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160772.25930180622,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160767.24850712068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149684.85576923352,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 149681.0256410265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46897.26168349625,
            "unit": "ns/iter",
            "extra": "iterations: 14957\ncpu: 46893.08684896651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226989.0871396361,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 226978.0693229671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186166.9733971824,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 186157.5951050815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186356.50892141613,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 186351.13182423392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187558.5375100698,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187550.04033342376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 316175.30501580547,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 316152.0560325373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1341458.3918918117,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1341413.8996138761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127113.3392282114,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1127107.7170417937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1126316.2774192155,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1126296.9354838734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119709.8862179809,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119664.1025640985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718478.0678314456,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718444.5015416327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1108711.0015948298,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1108667.4641148467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46854.16965360648,
            "unit": "ns/iter",
            "extra": "iterations: 14954\ncpu: 46851.18362979802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231436.93868079662,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 231409.01557838876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188595.3273119159,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 188576.97492585646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 188892.83391940288,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 188879.06410603243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189227.30197350637,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189220.60016220665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323745.269159768,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 323736.98060942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1430609.4819046068,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1430543.2380952185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1118606.1433121066,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1118599.2038216637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1114396.7484075045,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114314.3312101914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1117238.1230031727,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117170.4472843248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 713221.5504587166,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 713144.7502548442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1107765.7781300328,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1107736.2916006278 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394226291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15728.349934529258,
            "unit": "ns/iter",
            "extra": "iterations: 44294\ncpu: 15727.40777531946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149425.93715990536,
            "unit": "ns/iter",
            "extra": "iterations: 5697\ncpu: 149416.97384588383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285170.20078738435,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 285154.2979002625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417521.2565091734,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 417481.0511089684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 555425.443880848,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 555354.6607482561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555771.4630000419,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555734.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 661649.9992830987,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 661637.4193548388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768395.4962531546,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 768364.1965029148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 882007.6043642453,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 881965.7495256168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12884.411272189196,
            "unit": "ns/iter",
            "extra": "iterations: 54701\ncpu: 12884.199557594942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10557.944948469927,
            "unit": "ns/iter",
            "extra": "iterations: 66465\ncpu: 10557.028511246523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10575.46828671181,
            "unit": "ns/iter",
            "extra": "iterations: 66171\ncpu: 10574.58100980793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10586.330771790885,
            "unit": "ns/iter",
            "extra": "iterations: 66106\ncpu: 10585.184400810813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17137.135295697608,
            "unit": "ns/iter",
            "extra": "iterations: 40903\ncpu: 17135.430164046644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60602.92380610708,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 60596.91921005393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 306085.5215208066,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 306068.00573888107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 246260.59849144815,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 246234.23266608702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 249168.30380119025,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 249147.69005847952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 248286.8859571998,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 248259.42538844908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 547032.9203262308,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 546990.8406524471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4708205.1161617,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4707944.444444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3861451.576763404,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3860989.626556012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3840702.0905354186,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840468.7242798405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3856037.9173553665,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3855613.636363627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2207609.0238663564,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2207412.4105011877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3742028.749999712,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3741808.870967741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14705944.472222794,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14704445.833333364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6757372.700000132,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6756752.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18425477.775861446,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18424015.51724142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65543.57377681693,
            "unit": "ns/iter",
            "extra": "iterations: 12958\ncpu: 65539.70520142019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 344578.9987917953,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 344561.0954490528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277203.89853658434,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 277198.37398373923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 283098.51537189446,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 283087.7685950419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278124.4920117164,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 278108.020867297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584331.9885212324,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584311.6137744787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4743369.637754787,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4743221.428571448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3891464.504166701,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3891318.7500000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897514.916318024,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897067.3640167075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3892759.216666756,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3892324.166666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2251112.2203389127,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2250955.6900726496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3772392.9796744245,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772023.9837398543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15092298.183098663,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15091221.126760537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6733405.190000212,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6732377.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56547.00280000497,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56542.290000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 320724.2128060425,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 320694.2372881377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 253944.22960546226,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 253926.2533372891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 251086.65530413797,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 251081.0461357628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 249774.38686988194,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 249768.4642438451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530545.0901287616,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 530510.4230533415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4721654.606060663,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4721519.6969696805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856241.111110997,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3856154.7325102785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3851082.9341564877,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3850909.4650205867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3846069.8181816307,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3845844.2148760287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2225732.9952153624,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2225610.0478468826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3736347.3679997697,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3736061.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5892.443269499272,
            "unit": "ns/iter",
            "extra": "iterations: 118587\ncpu: 5892.2917351817805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39333.45720873006,
            "unit": "ns/iter",
            "extra": "iterations: 17784\ncpu: 39330.218173639434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31517.224320545738,
            "unit": "ns/iter",
            "extra": "iterations: 22187\ncpu: 31515.567674764407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30529.84530410982,
            "unit": "ns/iter",
            "extra": "iterations: 22903\ncpu: 30527.092520630846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22794.76015013163,
            "unit": "ns/iter",
            "extra": "iterations: 30640\ncpu: 22793.087467362544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150316.37131801352,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 150313.78198236885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 312075.0929816673,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 312056.59365221654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78189.95577587529,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78186.58794697563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78047.43135075277,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 78040.66703724288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78052.87871342269,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 78050.0670091571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160772.25930180622,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160767.24850712068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149684.85576923352,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 149681.0256410265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46897.26168349625,
            "unit": "ns/iter",
            "extra": "iterations: 14957\ncpu: 46893.08684896651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226989.0871396361,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 226978.0693229671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186166.9733971824,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 186157.5951050815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186356.50892141613,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 186351.13182423392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187558.5375100698,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187550.04033342376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 316175.30501580547,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 316152.0560325373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1341458.3918918117,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1341413.8996138761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127113.3392282114,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1127107.7170417937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1126316.2774192155,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1126296.9354838734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119709.8862179809,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119664.1025640985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718478.0678314456,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718444.5015416327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1108711.0015948298,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1108667.4641148467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46854.16965360648,
            "unit": "ns/iter",
            "extra": "iterations: 14954\ncpu: 46851.18362979802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231436.93868079662,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 231409.01557838876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188595.3273119159,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 188576.97492585646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 188892.83391940288,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 188879.06410603243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189227.30197350637,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189220.60016220665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323745.269159768,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 323736.98060942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1430609.4819046068,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1430543.2380952185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1118606.1433121066,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1118599.2038216637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1114396.7484075045,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114314.3312101914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1117238.1230031727,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117170.4472843248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 713221.5504587166,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 713144.7502548442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1107765.7781300328,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1107736.2916006278 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394226291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15728.349934529258,
            "unit": "ns/iter",
            "extra": "iterations: 44294\ncpu: 15727.40777531946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149425.93715990536,
            "unit": "ns/iter",
            "extra": "iterations: 5697\ncpu: 149416.97384588383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285170.20078738435,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 285154.2979002625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417521.2565091734,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 417481.0511089684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 555425.443880848,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 555354.6607482561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555771.4630000419,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555734.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 661649.9992830987,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 661637.4193548388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768395.4962531546,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 768364.1965029148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 882007.6043642453,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 881965.7495256168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12884.411272189196,
            "unit": "ns/iter",
            "extra": "iterations: 54701\ncpu: 12884.199557594942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10557.944948469927,
            "unit": "ns/iter",
            "extra": "iterations: 66465\ncpu: 10557.028511246523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10575.46828671181,
            "unit": "ns/iter",
            "extra": "iterations: 66171\ncpu: 10574.58100980793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10586.330771790885,
            "unit": "ns/iter",
            "extra": "iterations: 66106\ncpu: 10585.184400810813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17137.135295697608,
            "unit": "ns/iter",
            "extra": "iterations: 40903\ncpu: 17135.430164046644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60602.92380610708,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 60596.91921005393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 306085.5215208066,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 306068.00573888107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 246260.59849144815,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 246234.23266608702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 249168.30380119025,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 249147.69005847952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 248286.8859571998,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 248259.42538844908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 547032.9203262308,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 546990.8406524471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4708205.1161617,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4707944.444444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3861451.576763404,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3860989.626556012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3840702.0905354186,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840468.7242798405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3856037.9173553665,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3855613.636363627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2207609.0238663564,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2207412.4105011877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3742028.749999712,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3741808.870967741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14705944.472222794,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14704445.833333364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6757372.700000132,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6756752.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18425477.775861446,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18424015.51724142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65543.57377681693,
            "unit": "ns/iter",
            "extra": "iterations: 12958\ncpu: 65539.70520142019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 344578.9987917953,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 344561.0954490528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277203.89853658434,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 277198.37398373923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 283098.51537189446,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 283087.7685950419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278124.4920117164,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 278108.020867297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584331.9885212324,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584311.6137744787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4743369.637754787,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4743221.428571448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3891464.504166701,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3891318.7500000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897514.916318024,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897067.3640167075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3892759.216666756,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3892324.166666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2251112.2203389127,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2250955.6900726496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3772392.9796744245,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772023.9837398543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15092298.183098663,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15091221.126760537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6733405.190000212,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6732377.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56547.00280000497,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56542.290000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 320724.2128060425,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 320694.2372881377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 253944.22960546226,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 253926.2533372891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 251086.65530413797,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 251081.0461357628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 249774.38686988194,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 249768.4642438451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530545.0901287616,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 530510.4230533415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4721654.606060663,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4721519.6969696805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856241.111110997,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3856154.7325102785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3851082.9341564877,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3850909.4650205867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3846069.8181816307,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3845844.2148760287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2225732.9952153624,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2225610.0478468826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3736347.3679997697,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3736061.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5892.443269499272,
            "unit": "ns/iter",
            "extra": "iterations: 118587\ncpu: 5892.2917351817805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39333.45720873006,
            "unit": "ns/iter",
            "extra": "iterations: 17784\ncpu: 39330.218173639434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31517.224320545738,
            "unit": "ns/iter",
            "extra": "iterations: 22187\ncpu: 31515.567674764407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30529.84530410982,
            "unit": "ns/iter",
            "extra": "iterations: 22903\ncpu: 30527.092520630846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22794.76015013163,
            "unit": "ns/iter",
            "extra": "iterations: 30640\ncpu: 22793.087467362544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150316.37131801352,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 150313.78198236885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 312075.0929816673,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 312056.59365221654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78189.95577587529,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78186.58794697563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78047.43135075277,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 78040.66703724288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78052.87871342269,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 78050.0670091571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160772.25930180622,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160767.24850712068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149684.85576923352,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 149681.0256410265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46897.26168349625,
            "unit": "ns/iter",
            "extra": "iterations: 14957\ncpu: 46893.08684896651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 226989.0871396361,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 226978.0693229671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186166.9733971824,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 186157.5951050815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186356.50892141613,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 186351.13182423392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187558.5375100698,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187550.04033342376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 316175.30501580547,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 316152.0560325373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1341458.3918918117,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1341413.8996138761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127113.3392282114,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1127107.7170417937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1126316.2774192155,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1126296.9354838734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119709.8862179809,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119664.1025640985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718478.0678314456,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718444.5015416327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1108711.0015948298,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1108667.4641148467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46854.16965360648,
            "unit": "ns/iter",
            "extra": "iterations: 14954\ncpu: 46851.18362979802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231436.93868079662,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 231409.01557838876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188595.3273119159,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 188576.97492585646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 188892.83391940288,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 188879.06410603243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189227.30197350637,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189220.60016220665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 323745.269159768,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 323736.98060942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1430609.4819046068,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1430543.2380952185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1118606.1433121066,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1118599.2038216637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1114396.7484075045,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114314.3312101914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1117238.1230031727,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117170.4472843248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 713221.5504587166,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 713144.7502548442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1107765.7781300328,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1107736.2916006278 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}