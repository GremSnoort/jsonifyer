window.BENCHMARK_DATA = {
  "lastUpdate": 1702394243790,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 20.04 Debug c++-17": [
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
        "date": 1702392464023,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8429.613514057566,
            "unit": "ns/iter",
            "extra": "iterations: 84549\ncpu: 8423.207843972135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100054.9961668108,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 100053.01428737368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 194069.0152756316,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 194058.6229798539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 290427.90103991143,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 290421.4357598122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 382304.3867135812,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 382264.67223933124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469873.2129032035,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 469868.60215053736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 562526.6728911904,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 562490.9207984544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 525035.6510000529,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525036.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 599063.5299999667,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598990.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6266.951783750958,
            "unit": "ns/iter",
            "extra": "iterations: 111871\ncpu: 6266.518579435252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5206.546598505296,
            "unit": "ns/iter",
            "extra": "iterations: 134779\ncpu: 5206.137454647988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5242.328609295692,
            "unit": "ns/iter",
            "extra": "iterations: 133925\ncpu: 5242.25947358596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5208.2401046777095,
            "unit": "ns/iter",
            "extra": "iterations: 134508\ncpu: 5207.9363309245655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9126.188708540436,
            "unit": "ns/iter",
            "extra": "iterations: 76642\ncpu: 9125.328149056657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46841.419020661546,
            "unit": "ns/iter",
            "extra": "iterations: 17665\ncpu: 46838.69799037638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194461.5638273671,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 194452.95729618607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158519.30663189644,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 158512.4441132636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158234.98997215566,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 158227.81801299902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159686.60530710904,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 159675.93245500058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367455.02719933615,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 367437.7815554621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3072350.6710525104,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3072166.1184210526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2566090.6054794122,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565879.4520547944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2577954.673972571,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2577756.164383564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2556561.8296704646,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2556449.72527472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1524749.9095395175,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524681.0855263213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2484314.7653333894,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2484198.1333333366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10539187.415841721,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10538637.623762364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6121724.3006538795,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6121475.163398683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12372627.906976303,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12371858.139534907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47811.927903332944,
            "unit": "ns/iter",
            "extra": "iterations: 17213\ncpu: 47809.109394062594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198617.54685673816,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 198603.52886188374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 158241.23396720286,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 158229.5488441453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161465.3201737815,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 161456.3090290894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162773.13112255125,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 162766.01867734033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 372798.21937445266,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 372776.6724587331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3092489.0631231423,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092360.7973421854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2575693.870523309,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2575547.9338843008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2569383.8512395024,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2569246.5564738316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2577086.9944903445,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2576933.884297513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1521822.3754097798,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521730.4918032787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2489474.189839777,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2489287.9679144435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10703436.029702384,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10703068.316831661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6196919.721854716,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6196564.900662243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47402.15634861013,
            "unit": "ns/iter",
            "extra": "iterations: 17429\ncpu: 47399.627058350925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 188863.75283647908,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 188853.19243604006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158201.42927451732,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 158194.38570907744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159450.78743240476,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 159444.07980607965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 157228.1681531125,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 157217.27982162812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 372941.5768402893,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372919.71588463197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3101902.468647075,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3101727.392739256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2586906.8531858344,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2586844.598337939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2568419.758241751,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2568313.7362637413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2562653.087671008,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2562522.739726026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1527647.6534654198,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1527573.927392739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2488025.986702056,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2487880.5851063845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2769.54558702725,
            "unit": "ns/iter",
            "extra": "iterations: 253208\ncpu: 2769.3429907427762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21110.406652781207,
            "unit": "ns/iter",
            "extra": "iterations: 33129\ncpu: 21108.949862657966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16298.431305806249,
            "unit": "ns/iter",
            "extra": "iterations: 42893\ncpu: 16297.10209125027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16199.27211103829,
            "unit": "ns/iter",
            "extra": "iterations: 43372\ncpu: 16198.199299087053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12473.133665924026,
            "unit": "ns/iter",
            "extra": "iterations: 56125\ncpu: 12472.60222717139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 85491.13735056487,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85489.93656989564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 197555.0081759278,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 197552.8333803202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48774.417578593144,
            "unit": "ns/iter",
            "extra": "iterations: 14347\ncpu: 48772.635394159275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48458.63685448577,
            "unit": "ns/iter",
            "extra": "iterations: 14446\ncpu: 48455.64170012474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49101.096365291945,
            "unit": "ns/iter",
            "extra": "iterations: 14279\ncpu: 49098.277190279565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 104077.56754750054,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 104073.51543942945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91805.00419342282,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 91799.7510155934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25209.98544458989,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 25208.39818417644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 124433.97588425249,
            "unit": "ns/iter",
            "extra": "iterations: 5598\ncpu: 124427.84923186919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 102410.06508701418,
            "unit": "ns/iter",
            "extra": "iterations: 6837\ncpu: 102407.32777533875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 100350.87286798493,
            "unit": "ns/iter",
            "extra": "iterations: 6977\ncpu: 100343.8010606275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 101408.5344927546,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 101400.3913043485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182904.9434011489,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 182894.05320813772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 836440.4042806891,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 836378.121284189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721136.631469957,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 721107.5569358245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 710509.3853954558,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 710470.7910750546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711659.4235055475,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 711580.3444782179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 448718.1507376405,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 448686.9146889024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 693535.3410000289,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 693484.3000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25219.507925072467,
            "unit": "ns/iter",
            "extra": "iterations: 27760\ncpu: 25217.946685879208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 126736.6017378598,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126727.49818971712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 102197.3333820328,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102194.7699050404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 101229.45363517587,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 101227.7028007552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 102655.01203228284,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 102647.38077769623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 181475.81917100813,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 181465.5440414508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 841325.6502994492,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841261.7964071836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 721090.4279835493,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 721053.39506173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 711311.0770791321,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 711297.7687626745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 716117.4775051464,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 716056.339468302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 449220.91612900863,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 449205.99999999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 697093.2796020091,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697027.6616915407 ns\nthreads: 1"
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
        "date": 1702392464023,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8429.613514057566,
            "unit": "ns/iter",
            "extra": "iterations: 84549\ncpu: 8423.207843972135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100054.9961668108,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 100053.01428737368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 194069.0152756316,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 194058.6229798539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 290427.90103991143,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 290421.4357598122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 382304.3867135812,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 382264.67223933124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469873.2129032035,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 469868.60215053736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 562526.6728911904,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 562490.9207984544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 525035.6510000529,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525036.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 599063.5299999667,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598990.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6266.951783750958,
            "unit": "ns/iter",
            "extra": "iterations: 111871\ncpu: 6266.518579435252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5206.546598505296,
            "unit": "ns/iter",
            "extra": "iterations: 134779\ncpu: 5206.137454647988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5242.328609295692,
            "unit": "ns/iter",
            "extra": "iterations: 133925\ncpu: 5242.25947358596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5208.2401046777095,
            "unit": "ns/iter",
            "extra": "iterations: 134508\ncpu: 5207.9363309245655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9126.188708540436,
            "unit": "ns/iter",
            "extra": "iterations: 76642\ncpu: 9125.328149056657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46841.419020661546,
            "unit": "ns/iter",
            "extra": "iterations: 17665\ncpu: 46838.69799037638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194461.5638273671,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 194452.95729618607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158519.30663189644,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 158512.4441132636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158234.98997215566,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 158227.81801299902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159686.60530710904,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 159675.93245500058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367455.02719933615,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 367437.7815554621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3072350.6710525104,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3072166.1184210526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2566090.6054794122,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565879.4520547944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2577954.673972571,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2577756.164383564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2556561.8296704646,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2556449.72527472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1524749.9095395175,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524681.0855263213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2484314.7653333894,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2484198.1333333366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10539187.415841721,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10538637.623762364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6121724.3006538795,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6121475.163398683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12372627.906976303,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12371858.139534907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47811.927903332944,
            "unit": "ns/iter",
            "extra": "iterations: 17213\ncpu: 47809.109394062594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198617.54685673816,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 198603.52886188374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 158241.23396720286,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 158229.5488441453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161465.3201737815,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 161456.3090290894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162773.13112255125,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 162766.01867734033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 372798.21937445266,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 372776.6724587331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3092489.0631231423,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092360.7973421854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2575693.870523309,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2575547.9338843008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2569383.8512395024,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2569246.5564738316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2577086.9944903445,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2576933.884297513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1521822.3754097798,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521730.4918032787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2489474.189839777,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2489287.9679144435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10703436.029702384,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10703068.316831661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6196919.721854716,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6196564.900662243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47402.15634861013,
            "unit": "ns/iter",
            "extra": "iterations: 17429\ncpu: 47399.627058350925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 188863.75283647908,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 188853.19243604006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158201.42927451732,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 158194.38570907744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159450.78743240476,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 159444.07980607965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 157228.1681531125,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 157217.27982162812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 372941.5768402893,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372919.71588463197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3101902.468647075,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3101727.392739256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2586906.8531858344,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2586844.598337939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2568419.758241751,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2568313.7362637413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2562653.087671008,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2562522.739726026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1527647.6534654198,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1527573.927392739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2488025.986702056,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2487880.5851063845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2769.54558702725,
            "unit": "ns/iter",
            "extra": "iterations: 253208\ncpu: 2769.3429907427762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21110.406652781207,
            "unit": "ns/iter",
            "extra": "iterations: 33129\ncpu: 21108.949862657966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16298.431305806249,
            "unit": "ns/iter",
            "extra": "iterations: 42893\ncpu: 16297.10209125027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16199.27211103829,
            "unit": "ns/iter",
            "extra": "iterations: 43372\ncpu: 16198.199299087053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12473.133665924026,
            "unit": "ns/iter",
            "extra": "iterations: 56125\ncpu: 12472.60222717139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 85491.13735056487,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85489.93656989564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 197555.0081759278,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 197552.8333803202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48774.417578593144,
            "unit": "ns/iter",
            "extra": "iterations: 14347\ncpu: 48772.635394159275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48458.63685448577,
            "unit": "ns/iter",
            "extra": "iterations: 14446\ncpu: 48455.64170012474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49101.096365291945,
            "unit": "ns/iter",
            "extra": "iterations: 14279\ncpu: 49098.277190279565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 104077.56754750054,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 104073.51543942945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91805.00419342282,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 91799.7510155934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25209.98544458989,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 25208.39818417644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 124433.97588425249,
            "unit": "ns/iter",
            "extra": "iterations: 5598\ncpu: 124427.84923186919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 102410.06508701418,
            "unit": "ns/iter",
            "extra": "iterations: 6837\ncpu: 102407.32777533875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 100350.87286798493,
            "unit": "ns/iter",
            "extra": "iterations: 6977\ncpu: 100343.8010606275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 101408.5344927546,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 101400.3913043485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182904.9434011489,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 182894.05320813772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 836440.4042806891,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 836378.121284189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721136.631469957,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 721107.5569358245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 710509.3853954558,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 710470.7910750546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711659.4235055475,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 711580.3444782179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 448718.1507376405,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 448686.9146889024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 693535.3410000289,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 693484.3000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25219.507925072467,
            "unit": "ns/iter",
            "extra": "iterations: 27760\ncpu: 25217.946685879208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 126736.6017378598,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126727.49818971712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 102197.3333820328,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102194.7699050404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 101229.45363517587,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 101227.7028007552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 102655.01203228284,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 102647.38077769623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 181475.81917100813,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 181465.5440414508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 841325.6502994492,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841261.7964071836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 721090.4279835493,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 721053.39506173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 711311.0770791321,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 711297.7687626745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 716117.4775051464,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 716056.339468302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 449220.91612900863,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 449205.99999999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 697093.2796020091,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697027.6616915407 ns\nthreads: 1"
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
        "date": 1702392464023,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8429.613514057566,
            "unit": "ns/iter",
            "extra": "iterations: 84549\ncpu: 8423.207843972135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100054.9961668108,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 100053.01428737368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 194069.0152756316,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 194058.6229798539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 290427.90103991143,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 290421.4357598122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 382304.3867135812,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 382264.67223933124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469873.2129032035,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 469868.60215053736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 562526.6728911904,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 562490.9207984544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 525035.6510000529,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525036.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 599063.5299999667,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598990.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6266.951783750958,
            "unit": "ns/iter",
            "extra": "iterations: 111871\ncpu: 6266.518579435252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5206.546598505296,
            "unit": "ns/iter",
            "extra": "iterations: 134779\ncpu: 5206.137454647988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5242.328609295692,
            "unit": "ns/iter",
            "extra": "iterations: 133925\ncpu: 5242.25947358596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5208.2401046777095,
            "unit": "ns/iter",
            "extra": "iterations: 134508\ncpu: 5207.9363309245655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9126.188708540436,
            "unit": "ns/iter",
            "extra": "iterations: 76642\ncpu: 9125.328149056657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46841.419020661546,
            "unit": "ns/iter",
            "extra": "iterations: 17665\ncpu: 46838.69799037638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194461.5638273671,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 194452.95729618607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158519.30663189644,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 158512.4441132636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158234.98997215566,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 158227.81801299902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159686.60530710904,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 159675.93245500058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367455.02719933615,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 367437.7815554621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3072350.6710525104,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3072166.1184210526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2566090.6054794122,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565879.4520547944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2577954.673972571,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2577756.164383564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2556561.8296704646,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2556449.72527472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1524749.9095395175,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524681.0855263213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2484314.7653333894,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2484198.1333333366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10539187.415841721,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10538637.623762364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6121724.3006538795,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6121475.163398683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12372627.906976303,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12371858.139534907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47811.927903332944,
            "unit": "ns/iter",
            "extra": "iterations: 17213\ncpu: 47809.109394062594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198617.54685673816,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 198603.52886188374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 158241.23396720286,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 158229.5488441453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161465.3201737815,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 161456.3090290894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162773.13112255125,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 162766.01867734033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 372798.21937445266,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 372776.6724587331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3092489.0631231423,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092360.7973421854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2575693.870523309,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2575547.9338843008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2569383.8512395024,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2569246.5564738316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2577086.9944903445,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2576933.884297513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1521822.3754097798,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521730.4918032787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2489474.189839777,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2489287.9679144435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10703436.029702384,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10703068.316831661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6196919.721854716,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6196564.900662243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47402.15634861013,
            "unit": "ns/iter",
            "extra": "iterations: 17429\ncpu: 47399.627058350925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 188863.75283647908,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 188853.19243604006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158201.42927451732,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 158194.38570907744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159450.78743240476,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 159444.07980607965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 157228.1681531125,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 157217.27982162812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 372941.5768402893,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372919.71588463197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3101902.468647075,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3101727.392739256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2586906.8531858344,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2586844.598337939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2568419.758241751,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2568313.7362637413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2562653.087671008,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2562522.739726026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1527647.6534654198,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1527573.927392739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2488025.986702056,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2487880.5851063845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2769.54558702725,
            "unit": "ns/iter",
            "extra": "iterations: 253208\ncpu: 2769.3429907427762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21110.406652781207,
            "unit": "ns/iter",
            "extra": "iterations: 33129\ncpu: 21108.949862657966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16298.431305806249,
            "unit": "ns/iter",
            "extra": "iterations: 42893\ncpu: 16297.10209125027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16199.27211103829,
            "unit": "ns/iter",
            "extra": "iterations: 43372\ncpu: 16198.199299087053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12473.133665924026,
            "unit": "ns/iter",
            "extra": "iterations: 56125\ncpu: 12472.60222717139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 85491.13735056487,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85489.93656989564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 197555.0081759278,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 197552.8333803202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48774.417578593144,
            "unit": "ns/iter",
            "extra": "iterations: 14347\ncpu: 48772.635394159275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48458.63685448577,
            "unit": "ns/iter",
            "extra": "iterations: 14446\ncpu: 48455.64170012474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49101.096365291945,
            "unit": "ns/iter",
            "extra": "iterations: 14279\ncpu: 49098.277190279565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 104077.56754750054,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 104073.51543942945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91805.00419342282,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 91799.7510155934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25209.98544458989,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 25208.39818417644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 124433.97588425249,
            "unit": "ns/iter",
            "extra": "iterations: 5598\ncpu: 124427.84923186919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 102410.06508701418,
            "unit": "ns/iter",
            "extra": "iterations: 6837\ncpu: 102407.32777533875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 100350.87286798493,
            "unit": "ns/iter",
            "extra": "iterations: 6977\ncpu: 100343.8010606275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 101408.5344927546,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 101400.3913043485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182904.9434011489,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 182894.05320813772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 836440.4042806891,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 836378.121284189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721136.631469957,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 721107.5569358245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 710509.3853954558,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 710470.7910750546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711659.4235055475,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 711580.3444782179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 448718.1507376405,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 448686.9146889024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 693535.3410000289,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 693484.3000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25219.507925072467,
            "unit": "ns/iter",
            "extra": "iterations: 27760\ncpu: 25217.946685879208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 126736.6017378598,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126727.49818971712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 102197.3333820328,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102194.7699050404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 101229.45363517587,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 101227.7028007552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 102655.01203228284,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 102647.38077769623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 181475.81917100813,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 181465.5440414508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 841325.6502994492,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841261.7964071836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 721090.4279835493,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 721053.39506173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 711311.0770791321,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 711297.7687626745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 716117.4775051464,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 716056.339468302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 449220.91612900863,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 449205.99999999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 697093.2796020091,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697027.6616915407 ns\nthreads: 1"
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
        "date": 1702392464023,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8429.613514057566,
            "unit": "ns/iter",
            "extra": "iterations: 84549\ncpu: 8423.207843972135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100054.9961668108,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 100053.01428737368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 194069.0152756316,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 194058.6229798539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 290427.90103991143,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 290421.4357598122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 382304.3867135812,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 382264.67223933124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469873.2129032035,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 469868.60215053736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 562526.6728911904,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 562490.9207984544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 525035.6510000529,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525036.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 599063.5299999667,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598990.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6266.951783750958,
            "unit": "ns/iter",
            "extra": "iterations: 111871\ncpu: 6266.518579435252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5206.546598505296,
            "unit": "ns/iter",
            "extra": "iterations: 134779\ncpu: 5206.137454647988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5242.328609295692,
            "unit": "ns/iter",
            "extra": "iterations: 133925\ncpu: 5242.25947358596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5208.2401046777095,
            "unit": "ns/iter",
            "extra": "iterations: 134508\ncpu: 5207.9363309245655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9126.188708540436,
            "unit": "ns/iter",
            "extra": "iterations: 76642\ncpu: 9125.328149056657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46841.419020661546,
            "unit": "ns/iter",
            "extra": "iterations: 17665\ncpu: 46838.69799037638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194461.5638273671,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 194452.95729618607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158519.30663189644,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 158512.4441132636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158234.98997215566,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 158227.81801299902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159686.60530710904,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 159675.93245500058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367455.02719933615,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 367437.7815554621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3072350.6710525104,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3072166.1184210526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2566090.6054794122,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565879.4520547944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2577954.673972571,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2577756.164383564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2556561.8296704646,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2556449.72527472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1524749.9095395175,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524681.0855263213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2484314.7653333894,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2484198.1333333366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10539187.415841721,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10538637.623762364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6121724.3006538795,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6121475.163398683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12372627.906976303,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12371858.139534907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47811.927903332944,
            "unit": "ns/iter",
            "extra": "iterations: 17213\ncpu: 47809.109394062594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198617.54685673816,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 198603.52886188374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 158241.23396720286,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 158229.5488441453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161465.3201737815,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 161456.3090290894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162773.13112255125,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 162766.01867734033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 372798.21937445266,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 372776.6724587331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3092489.0631231423,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092360.7973421854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2575693.870523309,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2575547.9338843008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2569383.8512395024,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2569246.5564738316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2577086.9944903445,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2576933.884297513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1521822.3754097798,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521730.4918032787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2489474.189839777,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2489287.9679144435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10703436.029702384,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10703068.316831661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6196919.721854716,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6196564.900662243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47402.15634861013,
            "unit": "ns/iter",
            "extra": "iterations: 17429\ncpu: 47399.627058350925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 188863.75283647908,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 188853.19243604006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158201.42927451732,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 158194.38570907744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159450.78743240476,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 159444.07980607965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 157228.1681531125,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 157217.27982162812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 372941.5768402893,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372919.71588463197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3101902.468647075,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3101727.392739256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2586906.8531858344,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2586844.598337939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2568419.758241751,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2568313.7362637413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2562653.087671008,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2562522.739726026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1527647.6534654198,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1527573.927392739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2488025.986702056,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2487880.5851063845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2769.54558702725,
            "unit": "ns/iter",
            "extra": "iterations: 253208\ncpu: 2769.3429907427762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21110.406652781207,
            "unit": "ns/iter",
            "extra": "iterations: 33129\ncpu: 21108.949862657966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16298.431305806249,
            "unit": "ns/iter",
            "extra": "iterations: 42893\ncpu: 16297.10209125027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16199.27211103829,
            "unit": "ns/iter",
            "extra": "iterations: 43372\ncpu: 16198.199299087053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12473.133665924026,
            "unit": "ns/iter",
            "extra": "iterations: 56125\ncpu: 12472.60222717139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 85491.13735056487,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85489.93656989564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 197555.0081759278,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 197552.8333803202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48774.417578593144,
            "unit": "ns/iter",
            "extra": "iterations: 14347\ncpu: 48772.635394159275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48458.63685448577,
            "unit": "ns/iter",
            "extra": "iterations: 14446\ncpu: 48455.64170012474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49101.096365291945,
            "unit": "ns/iter",
            "extra": "iterations: 14279\ncpu: 49098.277190279565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 104077.56754750054,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 104073.51543942945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91805.00419342282,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 91799.7510155934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25209.98544458989,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 25208.39818417644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 124433.97588425249,
            "unit": "ns/iter",
            "extra": "iterations: 5598\ncpu: 124427.84923186919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 102410.06508701418,
            "unit": "ns/iter",
            "extra": "iterations: 6837\ncpu: 102407.32777533875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 100350.87286798493,
            "unit": "ns/iter",
            "extra": "iterations: 6977\ncpu: 100343.8010606275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 101408.5344927546,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 101400.3913043485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182904.9434011489,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 182894.05320813772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 836440.4042806891,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 836378.121284189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721136.631469957,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 721107.5569358245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 710509.3853954558,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 710470.7910750546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711659.4235055475,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 711580.3444782179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 448718.1507376405,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 448686.9146889024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 693535.3410000289,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 693484.3000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25219.507925072467,
            "unit": "ns/iter",
            "extra": "iterations: 27760\ncpu: 25217.946685879208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 126736.6017378598,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126727.49818971712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 102197.3333820328,
            "unit": "ns/iter",
            "extra": "iterations: 6845\ncpu: 102194.7699050404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 101229.45363517587,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 101227.7028007552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 102655.01203228284,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 102647.38077769623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 181475.81917100813,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 181465.5440414508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 841325.6502994492,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841261.7964071836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 721090.4279835493,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 721053.39506173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 711311.0770791321,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 711297.7687626745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 716117.4775051464,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 716056.339468302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 449220.91612900863,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 449205.99999999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 697093.2796020091,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697027.6616915407 ns\nthreads: 1"
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
        "date": 1702394242150,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8214.904435573586,
            "unit": "ns/iter",
            "extra": "iterations: 84927\ncpu: 8214.59135492835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100032.93566498204,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 100029.0443326705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 200566.28764692222,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 200200.70969172768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 289307.7734088383,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 289295.9013662112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 376715.85413006926,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 376710.9402460459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 468458.4623655683,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 468440.64516129054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 559944.4787917094,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 559925.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 523683.6230000108,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523666.10000000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 596484.1950000164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596473.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6308.075607049669,
            "unit": "ns/iter",
            "extra": "iterations: 110823\ncpu: 6307.842234915137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5170.6062039099015,
            "unit": "ns/iter",
            "extra": "iterations: 135334\ncpu: 5170.472312944267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5246.257005592855,
            "unit": "ns/iter",
            "extra": "iterations: 133215\ncpu: 5246.110423000411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5207.444561011901,
            "unit": "ns/iter",
            "extra": "iterations: 134400\ncpu: 5207.27380952382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9043.939871087034,
            "unit": "ns/iter",
            "extra": "iterations: 77417\ncpu: 9043.916710799964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48627.2766132361,
            "unit": "ns/iter",
            "extra": "iterations: 17031\ncpu: 48626.181668721736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193122.2120109058,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 193114.8089171972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157752.926612308,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 157748.79540400312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 157413.4533135438,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 157411.67625765738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 156939.82367059728,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 156935.5059084193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 372178.65341402247,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 372168.7986171139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3046428.3656956586,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3046353.7216828493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2489402.992042253,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2489345.092838194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2527079.9326145705,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2526980.053908361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2510454.080213865,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2510396.7914438494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1512258.6851548788,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1512221.5334420875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2433586.2526042955,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2433503.645833335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10692906.920000952,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10692000.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6312223.825503625,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6311765.771812075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12571976.52941132,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12570511.76470587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48262.55233840369,
            "unit": "ns/iter",
            "extra": "iterations: 17234\ncpu: 48256.777300684684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 194646.2454296067,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 194632.49542961616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 157878.7580283909,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 157862.62135922362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 160726.06899812436,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 160714.65028355396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164012.17226081336,
            "unit": "ns/iter",
            "extra": "iterations: 5184\ncpu: 163992.07175925936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 367109.8720682444,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 367086.9936034112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3034678.6058632378,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3034419.8697068403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2514063.235924919,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2514001.072386074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2540442.7173914774,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2540213.3152173897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2517434.280323285,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2517234.2318059136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1519823.214402595,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1519700.1636661266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2447857.259842754,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2447605.511811017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10832218.828283539,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10831349.494949475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6125658.300653692,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6125137.90849673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 48404.89801633192,
            "unit": "ns/iter",
            "extra": "iterations: 17140\ncpu: 48403.6814469079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 188301.24180691064,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 188298.1842338359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 153905.73120811768,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 153901.8474913962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 161127.87779037878,
            "unit": "ns/iter",
            "extra": "iterations: 5286\ncpu: 161122.53121452866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 163164.06282222996,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 163160.11075042974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 375286.13765892637,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 375280.4033318728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3030970.3104577013,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3030955.2287581866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2530906.648648606,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2530848.9189189197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2552012.0326974103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2551929.972752028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2524674.956756629,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2524640.540540542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1533502.344884657,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1533496.6996699676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2458774.3342106263,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2458661.5789473667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2818.54095646954,
            "unit": "ns/iter",
            "extra": "iterations: 248288\ncpu: 2818.447528676364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21062.65125419966,
            "unit": "ns/iter",
            "extra": "iterations: 33328\ncpu: 21062.364978396683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15176.198232926403,
            "unit": "ns/iter",
            "extra": "iterations: 46178\ncpu: 15176.140153319822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15622.386377294957,
            "unit": "ns/iter",
            "extra": "iterations: 44925\ncpu: 15622.123539232072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12549.14997674392,
            "unit": "ns/iter",
            "extra": "iterations: 55902\ncpu: 12549.096633394109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86604.32572486122,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 86602.94879703806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 195705.15098038636,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 195699.66386554317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48289.02891250571,
            "unit": "ns/iter",
            "extra": "iterations: 14492\ncpu: 48287.15843223821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48630.54782609137,
            "unit": "ns/iter",
            "extra": "iterations: 14375\ncpu: 48630.406956521176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48973.964482981624,
            "unit": "ns/iter",
            "extra": "iterations: 14303\ncpu: 48973.11053625158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 105194.63251202644,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 105194.27584134412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91654.81338396673,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 91652.00366684169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25620.491192163205,
            "unit": "ns/iter",
            "extra": "iterations: 27362\ncpu: 25620.39690081126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 122348.17714885558,
            "unit": "ns/iter",
            "extra": "iterations: 5724\ncpu: 122345.5101327745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 99939.0466742822,
            "unit": "ns/iter",
            "extra": "iterations: 7006\ncpu: 99936.58292891755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 99784.57042858022,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 99783.02857142905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 101057.28406131302,
            "unit": "ns/iter",
            "extra": "iterations: 6914\ncpu: 101046.90483077797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 187778.12657547262,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 187761.5446500367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 821516.7599532023,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821505.6206088962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 694285.2259662803,
            "unit": "ns/iter",
            "extra": "iterations: 1009\ncpu: 694216.0555004922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 696989.4699999486,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 696925.3000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 762804.2522522431,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 762729.7297297282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 452030.5087378324,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 451996.504854366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 680517.3236151028,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 680482.5072886399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26164.09798572234,
            "unit": "ns/iter",
            "extra": "iterations: 26759\ncpu: 26162.337905003576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 123295.79214373366,
            "unit": "ns/iter",
            "extra": "iterations: 5677\ncpu: 123285.6966707759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99971.49299600044,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 99964.16523727764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 102043.05268533851,
            "unit": "ns/iter",
            "extra": "iterations: 6852\ncpu: 102037.21541155787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 102610.49012436792,
            "unit": "ns/iter",
            "extra": "iterations: 6835\ncpu: 102600.74615947348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 187980.64433129,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 187966.33610292227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 819096.299065522,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 819026.7523364403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 696883.1093439157,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 696852.5844930382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 699566.582582591,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 699541.9419419457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 700164.9187562634,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 700074.5235707106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 454388.8986354739,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 454358.0246913599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 681959.770126191,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 681871.7749757554 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}