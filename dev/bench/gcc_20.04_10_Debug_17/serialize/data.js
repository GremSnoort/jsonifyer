window.BENCHMARK_DATA = {
  "lastUpdate": 1702382297544,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-10 20.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381130497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7656.72487836881,
            "unit": "ns/iter",
            "extra": "iterations: 91465\ncpu: 7656.78128245777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93969.63427193831,
            "unit": "ns/iter",
            "extra": "iterations: 9127\ncpu: 93966.22110222417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181508.98659240257,
            "unit": "ns/iter",
            "extra": "iterations: 4848\ncpu: 181504.57920792073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 269644.266334776,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 269633.7896701929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 350600.31978652294,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 350589.16256157646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 435802.7288220543,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 435790.4761904767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 521842.38106650487,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 521844.2180946674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 607227.3530640712,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 607209.1922005581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 556525.2060000035,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556522.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5826.817823264755,
            "unit": "ns/iter",
            "extra": "iterations: 120180\ncpu: 5826.824762855707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4778.934639943419,
            "unit": "ns/iter",
            "extra": "iterations: 146588\ncpu: 4778.977815373704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4714.1343500606,
            "unit": "ns/iter",
            "extra": "iterations: 147860\ncpu: 4713.991613688631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4781.622429600136,
            "unit": "ns/iter",
            "extra": "iterations: 146378\ncpu: 4781.382448182112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8349.164413770086,
            "unit": "ns/iter",
            "extra": "iterations: 83892\ncpu: 8348.65779812138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47362.01793261218,
            "unit": "ns/iter",
            "extra": "iterations: 17510\ncpu: 47361.41633352374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 196090.780146722,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 196084.869325998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 160055.64573239195,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 160052.10585165853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159239.6839561162,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 159236.19631901826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 163748.99446141516,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 163744.95798319345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353247.5154975674,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 353235.8075040773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2884070.321100848,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2883937.3088685083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2359455.4860758623,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2359294.4303797446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2407335.555555603,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2407310.858585863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2383939.713555035,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2383895.9079283834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1379942.438518524,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1379936.8888888932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2293599.6945813117,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2293577.586206901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9729105.22935813,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 9728948.62385323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5507565.617647087,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 5507651.764705891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11316109.202127526,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11315863.829787245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47104.83059210464,
            "unit": "ns/iter",
            "extra": "iterations: 17632\ncpu: 47102.68829401053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198441.69762069735,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 198437.3989374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 162942.60497343008,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 162936.97798025885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161835.3842234381,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 161830.760520853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163634.83182080736,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 163631.08708244795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 354451.24040817824,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 354442.8979591856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2891324.5356038106,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2891271.2074303464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2381770.035714284,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2381742.857142854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2369542.7862595255,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2369541.730279912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2407586.7268041493,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2407526.2886598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1386267.7648809382,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386229.0178571371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2309764.6311881174,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2309730.69306932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9922587.110091886,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 9922332.110091744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5612788.855421993,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5612589.759036156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47222.339401892525,
            "unit": "ns/iter",
            "extra": "iterations: 17522\ncpu: 47222.531674466474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 201992.9759887006,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 201985.42843691094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 159935.2225130835,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 159935.97606581874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 160212.36641078632,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 160208.87474255852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 162472.80703422363,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 162475.68441064644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 352354.8846934518,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 352346.2038164827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2874596.626911354,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2874428.1345565687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2361923.0886076447,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2361900.253164552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2371260.3797467994,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2371190.126582294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2387834.8746801903,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2387769.820971856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1392411.674140525,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1392372.1973094174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2303800.288888941,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2303840.2469135793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2615.170871808829,
            "unit": "ns/iter",
            "extra": "iterations: 267054\ncpu: 2615.131396646376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19820.827212658223,
            "unit": "ns/iter",
            "extra": "iterations: 35263\ncpu: 19820.786660238715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15534.746592969192,
            "unit": "ns/iter",
            "extra": "iterations: 44687\ncpu: 15534.849061248215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14992.919880924397,
            "unit": "ns/iter",
            "extra": "iterations: 46693\ncpu: 14992.639153620421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11741.180650770915,
            "unit": "ns/iter",
            "extra": "iterations: 59806\ncpu: 11740.766812694563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81115.56737670992,
            "unit": "ns/iter",
            "extra": "iterations: 8638\ncpu: 81113.3595739765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 176005.81427494573,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 175998.8690625785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45474.45979327876,
            "unit": "ns/iter",
            "extra": "iterations: 15383\ncpu: 45473.46421374298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45464.130124547235,
            "unit": "ns/iter",
            "extra": "iterations: 15416\ncpu: 45462.69460300992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45833.14859437484,
            "unit": "ns/iter",
            "extra": "iterations: 15189\ncpu: 45833.135821975986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 95886.17940653341,
            "unit": "ns/iter",
            "extra": "iterations: 7313\ncpu: 95884.79420210588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86386.897372637,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86385.29665720974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22067.305227709083,
            "unit": "ns/iter",
            "extra": "iterations: 31773\ncpu: 22066.61001479207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 109848.44568072497,
            "unit": "ns/iter",
            "extra": "iterations: 6471\ncpu: 109844.49080513052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86492.06830533696,
            "unit": "ns/iter",
            "extra": "iterations: 8096\ncpu: 86490.5632411056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 85851.87272726711,
            "unit": "ns/iter",
            "extra": "iterations: 8140\ncpu: 85849.92628992721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 87701.01777666029,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 87698.29744616983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 162580.27004416255,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 162576.94631652482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 770746.7541163429,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 770776.180021954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 646587.0610545763,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 646619.6114708657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 646892.863382891,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 646897.6765799291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 654897.5440900464,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 654884.4277673593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 405203.57449276675,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 405185.9710144952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 634808.1095022663,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 634794.0271493142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22161.51955113015,
            "unit": "ns/iter",
            "extra": "iterations: 31635\ncpu: 22160.866129287206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 109931.42474130202,
            "unit": "ns/iter",
            "extra": "iterations: 6378\ncpu: 109928.64534336948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 88033.69691629903,
            "unit": "ns/iter",
            "extra": "iterations: 7945\ncpu: 88031.75582127197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 88277.09541853637,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 88277.59214605666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 89752.17414213752,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 89752.70530779984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162789.6363636346,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 162787.94871794977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 766648.4140196933,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 766624.5345016454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 646193.450600193,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 646206.8328716432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 646091.5709023583,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 646064.08839779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 654067.6209150229,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 654056.6760037416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 402936.2622761406,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 402929.05834777467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 633744.9184043687,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 633727.9238440735 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382296728,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7503.906277858713,
            "unit": "ns/iter",
            "extra": "iterations: 93105\ncpu: 7503.48423822566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93770.70872188635,
            "unit": "ns/iter",
            "extra": "iterations: 9115\ncpu: 93766.69226549644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 180799.546578732,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 180792.45671887882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 269138.3874492618,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 269133.5310646268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 371303.81505729485,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 371294.39443535166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 437988.6127895077,
            "unit": "ns/iter",
            "extra": "iterations: 1986\ncpu: 437976.082578046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 523584.55375375674,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 523554.7147147149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 608563.8792742416,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 608549.3370551288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 557230.216999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557199.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5896.165805336169,
            "unit": "ns/iter",
            "extra": "iterations: 118615\ncpu: 5896.05446191459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4798.279735622609,
            "unit": "ns/iter",
            "extra": "iterations: 145852\ncpu: 4798.120012067029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4803.087818385592,
            "unit": "ns/iter",
            "extra": "iterations: 145539\ncpu: 4802.907124550804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4797.104294478437,
            "unit": "ns/iter",
            "extra": "iterations: 144255\ncpu: 4796.97064226544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8448.88580005029,
            "unit": "ns/iter",
            "extra": "iterations: 82951\ncpu: 8448.515388602904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48065.420605848754,
            "unit": "ns/iter",
            "extra": "iterations: 17199\ncpu: 48064.56770742492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195048.9675354435,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 195039.2318244167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158226.44940915608,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 158222.00886262915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155661.03529197097,
            "unit": "ns/iter",
            "extra": "iterations: 5497\ncpu: 155655.8304529741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 158871.26840632936,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 158864.39888164063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 352183.08766233566,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 352176.74512986967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2879838.653374313,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2879792.638036809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2350545.161209023,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2350474.3073047847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2354200.5113349934,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2354124.685138546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2362611.753148705,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2362574.055415613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1403661.3736762216,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1403598.7897125601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2290873.602469163,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2290804.9382716087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9871799.583333153,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 9871490.740740763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5637884.186747129,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5637686.746987958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11399021.774193272,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11398797.849462356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47791.459451692266,
            "unit": "ns/iter",
            "extra": "iterations: 17399\ncpu: 47789.505143973656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 194599.71093926948,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 194594.473504662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 161547.4815655208,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 161541.53904329817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 162518.71952843084,
            "unit": "ns/iter",
            "extra": "iterations: 5259\ncpu: 162515.72542308443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162359.08987052762,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 162352.0563594813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 353074.08102604176,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 353062.3371335499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2871775.3630770366,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2871655.384615377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2373797.916243694,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2373796.1928934148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2371154.6870229044,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2371115.521628498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2384556.2122762348,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2384472.634271101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1408547.4274924544,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1408523.8670694926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2346060.3275862127,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2346005.6650246372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10002323.238532096,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 10002096.330275249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5565057.479290002,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 5564901.775147931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 48014.43791304495,
            "unit": "ns/iter",
            "extra": "iterations: 17250\ncpu: 48012.70724637678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 196735.6815476254,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 196732.2573260077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 157936.83413372203,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 157931.78795714784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157599.0449706356,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 157596.36563876615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159463.34354568034,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 159458.95759387178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 353538.251533745,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 353532.0654396707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2869583.0769230756,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2869470.1538461666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2353808.0406091567,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2353765.4822334996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2374330.611675112,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2374257.106598993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2373694.6649745824,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2373710.4060913734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1407419.396681786,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1407407.3906485639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2303825.3448275323,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2303752.4630541936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2658.9681243113228,
            "unit": "ns/iter",
            "extra": "iterations: 263210\ncpu: 2658.89441890505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19917.186404132004,
            "unit": "ns/iter",
            "extra": "iterations: 35246\ncpu: 19916.67990693985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15400.08432356368,
            "unit": "ns/iter",
            "extra": "iterations: 45444\ncpu: 15400.178241351936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15387.248048356265,
            "unit": "ns/iter",
            "extra": "iterations: 48805\ncpu: 15387.337362975124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11559.121923070257,
            "unit": "ns/iter",
            "extra": "iterations: 60653\ncpu: 11558.692892354778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80687.66670526472,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 80685.67458019621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 167266.89024682596,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 167256.33836568316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45503.13084172761,
            "unit": "ns/iter",
            "extra": "iterations: 15385\ncpu: 45502.02794930104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45402.2095392614,
            "unit": "ns/iter",
            "extra": "iterations: 15410\ncpu: 45402.13497728779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45628.554730255695,
            "unit": "ns/iter",
            "extra": "iterations: 15348\ncpu: 45628.857180088635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96476.07279483226,
            "unit": "ns/iter",
            "extra": "iterations: 7267\ncpu: 96474.96903811807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86331.64199358888,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 86329.54601529695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21794.274256345205,
            "unit": "ns/iter",
            "extra": "iterations: 32105\ncpu: 21793.50568447281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 108592.77114815294,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 108590.3567533902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86400.82670280055,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 86398.87917231114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 85147.08460976974,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 85144.05543398984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 87395.7757242799,
            "unit": "ns/iter",
            "extra": "iterations: 8008\ncpu: 87393.86863136939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 163841.90700398004,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 163836.94073553747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 768138.2702104219,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 768106.0908084178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 645271.6101382405,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 645244.5161290317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 644243.689052451,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 644216.3753449814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 645706.6025877675,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 645702.0332717153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 408973.2165791048,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 408957.67659077194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 629367.0763016465,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 629351.974865359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21705.98619855425,
            "unit": "ns/iter",
            "extra": "iterations: 32243\ncpu: 21705.23214341102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 107833.55646279233,
            "unit": "ns/iter",
            "extra": "iterations: 6491\ncpu: 107830.53458635032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 86669.98503586343,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 86668.14246846386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 86460.59285802883,
            "unit": "ns/iter",
            "extra": "iterations: 8093\ncpu: 86458.70505375098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 87880.40539523329,
            "unit": "ns/iter",
            "extra": "iterations: 7970\ncpu: 87786.51191969865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162692.15477572902,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 162682.38438298876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 763430.2769901843,
            "unit": "ns/iter",
            "extra": "iterations: 917\ncpu: 763396.8375136376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 642602.413443855,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 642579.0055248569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 651563.12534562,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 651549.7695852498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 646518.6552995162,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 646511.2442396337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 408590.6816326434,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 408589.795918361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 631062.848512199,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 631046.9792606054 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}