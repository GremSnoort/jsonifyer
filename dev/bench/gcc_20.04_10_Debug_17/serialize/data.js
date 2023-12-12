window.BENCHMARK_DATA = {
  "lastUpdate": 1702381130810,
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
      }
    ]
  }
}