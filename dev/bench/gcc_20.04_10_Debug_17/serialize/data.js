window.BENCHMARK_DATA = {
  "lastUpdate": 1702396470122,
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387067795,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7523.49474092197,
            "unit": "ns/iter",
            "extra": "iterations: 92887\ncpu: 7523.385403770172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94367.56583590606,
            "unit": "ns/iter",
            "extra": "iterations: 9068\ncpu: 94363.40979267754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182233.50416666525,
            "unit": "ns/iter",
            "extra": "iterations: 4800\ncpu: 182228.20833333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 276286.1760629855,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 276275.11811023625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354579.68982629216,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 354575.1861042186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 442286.6857577244,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 442270.2483527622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 528734.1231048993,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 528702.85021225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 614623.8743825202,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 614608.4685956241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 561817.5719999954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561816.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5887.956682336851,
            "unit": "ns/iter",
            "extra": "iterations: 119120\ncpu: 5887.511752854251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4791.155872471685,
            "unit": "ns/iter",
            "extra": "iterations: 145850\ncpu: 4790.939321220433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4825.942705508363,
            "unit": "ns/iter",
            "extra": "iterations: 145651\ncpu: 4825.922925348951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4914.628512309534,
            "unit": "ns/iter",
            "extra": "iterations: 142570\ncpu: 4914.423791821559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8415.77011521885,
            "unit": "ns/iter",
            "extra": "iterations: 83146\ncpu: 8415.732566810188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48759.26370266108,
            "unit": "ns/iter",
            "extra": "iterations: 17004\ncpu: 48757.474711832474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 198450.99582850686,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 198445.2838933951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 162098.3309366128,
            "unit": "ns/iter",
            "extra": "iterations: 5285\ncpu: 162091.59886471147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 162028.9907337432,
            "unit": "ns/iter",
            "extra": "iterations: 5288\ncpu: 162022.23903177012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 164350.89237582134,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 164338.62148633046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353146.01495725935,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 353116.8803418812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2919533.645962706,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2919256.2111801244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2374221.194936667,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2374053.417721519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2369829.7157360865,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2369645.9390862924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2405997.3608248783,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2405875.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1417527.360730607,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1417447.792998478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2311877.2531017475,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2311686.8486352367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9926496.514019003,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9926172.897196257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5654561.855421944,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5654353.012048185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11534559.793478549,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11533771.739130432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50569.22132294953,
            "unit": "ns/iter",
            "extra": "iterations: 16433\ncpu: 50566.45773747918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 201585.03121332434,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 201570.52335132536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167498.59133489404,
            "unit": "ns/iter",
            "extra": "iterations: 5124\ncpu: 167488.68071818925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 167228.0620019381,
            "unit": "ns/iter",
            "extra": "iterations: 5145\ncpu: 167213.25558795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 167208.73682155763,
            "unit": "ns/iter",
            "extra": "iterations: 5122\ncpu: 167197.14955095729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 357198.9641975394,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 357168.0658436216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2903218.723602575,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2902934.4720497066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2392431.889743508,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2392142.0512820464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2389411.7468030998,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2389227.365728913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2417908.1424870454,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2417656.9948186446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1430213.8335901361,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1430106.7796610137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2330514.932668309,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2330440.897755614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10181188.990653932,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 10180415.887850441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5548743.44970409,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 5548518.934911261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 48542.22773782359,
            "unit": "ns/iter",
            "extra": "iterations: 17103\ncpu: 48541.641817225194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 207016.52689987415,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 207003.49819059126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 165990.05332556917,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 165982.39286406807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 163894.13441682624,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 163886.73040152932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 166463.01167088773,
            "unit": "ns/iter",
            "extra": "iterations: 5141\ncpu: 166456.2341956811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 358394.98228265764,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 358377.9975278133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2904505.7950310246,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2904436.956521749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2365595.022900821,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2365427.989821879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2393228.617948714,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2393080.5128205256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2411798.018087956,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2411695.090439279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1425654.97243493,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1425587.9019908095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2324062.082294277,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2323822.6932668393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2681.2752050583663,
            "unit": "ns/iter",
            "extra": "iterations: 261267\ncpu: 2681.1836167598835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20062.885179667224,
            "unit": "ns/iter",
            "extra": "iterations: 34898\ncpu: 20062.204137772842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15575.20581467827,
            "unit": "ns/iter",
            "extra": "iterations: 46503\ncpu: 15574.552179429244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15500.232156671918,
            "unit": "ns/iter",
            "extra": "iterations: 45241\ncpu: 15499.42530005978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11120.617132672533,
            "unit": "ns/iter",
            "extra": "iterations: 62839\ncpu: 11120.315409220448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81744.22740525316,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 81737.65597667577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185917.20281391166,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 185908.44173081825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45523.25722091951,
            "unit": "ns/iter",
            "extra": "iterations: 15372\ncpu: 45519.12568306006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45450.32359054266,
            "unit": "ns/iter",
            "extra": "iterations: 15396\ncpu: 45448.91530267593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46117.680553726444,
            "unit": "ns/iter",
            "extra": "iterations: 15170\ncpu: 46113.71127224789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97758.96202177809,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 97753.57442055304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87046.40200942673,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 87037.89382287144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21991.027301827537,
            "unit": "ns/iter",
            "extra": "iterations: 31866\ncpu: 21989.452708215835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 108150.79610750767,
            "unit": "ns/iter",
            "extra": "iterations: 6474\ncpu: 108144.31572443745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86490.0484210549,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 86486.57585139279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 86156.2061143978,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 86150.04930966445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 86938.87330934132,
            "unit": "ns/iter",
            "extra": "iterations: 8059\ncpu: 86930.18984985776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 160970.59095085083,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160964.01010564753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 771744.347682108,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 771707.0640176579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 649140.912801521,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 649129.8701298633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 648646.7488414715,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 648615.7553290097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 656246.2279549887,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 656153.5647279469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 414242.5985705778,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 414222.3347230509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 638564.1028207015,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 638519.2902638835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21879.689241039247,
            "unit": "ns/iter",
            "extra": "iterations: 32057\ncpu: 21878.940636990108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 108887.15964558322,
            "unit": "ns/iter",
            "extra": "iterations: 6433\ncpu: 108881.68817036966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 86846.8057142916,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 86841.31677018557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 87030.18255149663,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 87028.5058327124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 88450.51231838467,
            "unit": "ns/iter",
            "extra": "iterations: 7915\ncpu: 88440.12634238816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162800.42055206798,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 162784.4119693822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 776354.1843267162,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 776286.9757174404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 647606.691380867,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 647557.5532900856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 649920.6994434085,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 649864.285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 656746.6591549389,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 656628.9201877884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 413920.21800946695,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 413872.9857819939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 639262.1209090521,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 639178.1818181837 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388118696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7557.902500270962,
            "unit": "ns/iter",
            "extra": "iterations: 92390\ncpu: 7557.643684381426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94816.98279307234,
            "unit": "ns/iter",
            "extra": "iterations: 9008\ncpu: 94812.8108348135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182673.16162668943,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 182666.67361835248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272604.54779873526,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 272599.8113207547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 357158.7372353591,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 357151.3075965132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 457994.89882473036,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 457353.55135411327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 531577.1824324183,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 531562.9606879603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 623729.5375886298,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 623716.7375886516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573369.7499999835,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573341.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5864.539382038746,
            "unit": "ns/iter",
            "extra": "iterations: 119166\ncpu: 5864.229729956542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4825.956673205857,
            "unit": "ns/iter",
            "extra": "iterations: 143237\ncpu: 4825.892751174619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4805.8923361921625,
            "unit": "ns/iter",
            "extra": "iterations: 145750\ncpu: 4805.903945111493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4873.596494886673,
            "unit": "ns/iter",
            "extra": "iterations: 143847\ncpu: 4873.54619839135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8593.349352687625,
            "unit": "ns/iter",
            "extra": "iterations: 81568\ncpu: 8593.3662710867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47187.62563724754,
            "unit": "ns/iter",
            "extra": "iterations: 17654\ncpu: 47187.79879913915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 196640.97166550823,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 196639.59917069814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 161245.43397291453,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 161242.96463506404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160624.48242990702,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 160623.738317757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162662.95880789342,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 162659.51025056947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 358922.50968273205,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 358918.8710341982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2944282.6292833337,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2944237.6947040497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2392731.7877238225,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2392723.0179028064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2389439.6564102382,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2389433.0769230793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2403823.2435232983,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2403777.4611399006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1413935.741641264,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1413945.1367781123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2321518.9027431384,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2321531.670822941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9928611.364485864,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9928462.616822423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5682434.469512131,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5682367.073170723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11558864.956521243,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11558776.086956512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49120.474039029104,
            "unit": "ns/iter",
            "extra": "iterations: 16910\ncpu: 49120.277942046494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 200454.8238729236,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 200450.85260453256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163880.3007260147,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 163881.48643484878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 165606.01465201136,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 165607.30672835885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 165159.57998075668,
            "unit": "ns/iter",
            "extra": "iterations: 5195\ncpu: 165160.9624639076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 361580.6662515588,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 361579.452054792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2923651.1163520725,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2923626.415094323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2412404.981912113,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2412343.1524547916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2405179.984496232,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2405131.782945749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2431461.7597910874,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2431475.4569190633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1436903.7619783576,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1436911.7465224087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2344553.6155778808,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2344568.090452263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10169877.226415012,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10169719.811320718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5651565.891566341,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5651545.180722922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47429.1818814913,
            "unit": "ns/iter",
            "extra": "iterations: 17231\ncpu: 47428.9652370726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 198840.6496756252,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 198833.01668211332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161860.99811284654,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 161860.14342328752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 161035.26890598368,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 161035.99174329016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 163173.36446642276,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 163173.88244245772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 358575.8060008389,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 358568.2285244557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2919544.753893976,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2919538.006230531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2402282.05820114,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2402293.6507936576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2413427.033591715,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2413384.496124039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2418605.529870198,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2418587.5324675236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1433685.9506933517,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1433677.3497688742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2347822.165413498,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2347809.77443608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2674.7670781260144,
            "unit": "ns/iter",
            "extra": "iterations: 259645\ncpu: 2674.714706618672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19859.63601543445,
            "unit": "ns/iter",
            "extra": "iterations: 35246\ncpu: 19859.73160074904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15098.311066562805,
            "unit": "ns/iter",
            "extra": "iterations: 46392\ncpu: 15098.407052940127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14713.584313643243,
            "unit": "ns/iter",
            "extra": "iterations: 47519\ncpu: 14713.69136555898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11702.607031953774,
            "unit": "ns/iter",
            "extra": "iterations: 59898\ncpu: 11702.54432535306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82329.00470533244,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 82327.12622044625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 188658.52708165147,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 188659.49878738922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46257.33834039384,
            "unit": "ns/iter",
            "extra": "iterations: 15112\ncpu: 46257.55690841735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46230.72463480964,
            "unit": "ns/iter",
            "extra": "iterations: 15129\ncpu: 46229.493026637334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46338.719101868264,
            "unit": "ns/iter",
            "extra": "iterations: 15098\ncpu: 46338.28321631998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98268.22748948018,
            "unit": "ns/iter",
            "extra": "iterations: 7130\ncpu: 98268.65357643706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87115.0139424887,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 87115.22469812013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22312.225518718486,
            "unit": "ns/iter",
            "extra": "iterations: 31279\ncpu: 22312.32775983878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 110611.41122674472,
            "unit": "ns/iter",
            "extra": "iterations: 6342\ncpu: 110609.98107852356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88587.3602978313,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88587.77132761285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 87131.85426009263,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 87132.33682112556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 88670.10610281167,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 88670.68878196967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 165884.1542489837,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 165882.50416567572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 781306.8327758716,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 781282.497212926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 659737.4432989337,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 659740.1124648537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 657298.5864661931,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 657293.0451127784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 660500.8492890464,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 660496.0189573512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 416270.38598574937,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 416262.8266033298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 641946.98811701,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 641942.2303473501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22248.788854806393,
            "unit": "ns/iter",
            "extra": "iterations: 31296\ncpu: 22248.900817995855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 109857.48814570843,
            "unit": "ns/iter",
            "extra": "iterations: 6369\ncpu: 109857.88977861423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 88289.92984003216,
            "unit": "ns/iter",
            "extra": "iterations: 7939\ncpu: 88290.22546920353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 88573.57837427134,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 88572.32210686138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 89934.9821657669,
            "unit": "ns/iter",
            "extra": "iterations: 7794\ncpu: 89934.34693353774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 165623.5659171625,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 165624.33136094722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 779042.2619843915,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 779046.7112597536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 657214.5784037514,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 657217.5586854413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 656420.6375586969,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 656403.0046948326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 659841.578699315,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 659828.5579641837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 415550.1156583395,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 415553.2028469816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 641287.9301470674,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 641292.0955882359 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390800858,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7546.7857605736535,
            "unit": "ns/iter",
            "extra": "iterations: 92588\ncpu: 7546.744718538041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94333.3979501916,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 94333.62353978399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 183352.87206645784,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 183351.3811007269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 275276.9080062775,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 275276.98587127164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 352974.99256812944,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 352956.234516928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 438583.71378089493,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 438585.3104492679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 529609.8268983349,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 529581.3384813385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 611690.5398601302,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 611678.3916083917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559946.2170000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559924.800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5851.424661772152,
            "unit": "ns/iter",
            "extra": "iterations: 119594\ncpu: 5851.429001454925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4813.007973408547,
            "unit": "ns/iter",
            "extra": "iterations: 145609\ncpu: 4812.911289824126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4758.673119420165,
            "unit": "ns/iter",
            "extra": "iterations: 147069\ncpu: 4758.435156287188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4817.858626984652,
            "unit": "ns/iter",
            "extra": "iterations: 145155\ncpu: 4817.745168957319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8382.812461922293,
            "unit": "ns/iter",
            "extra": "iterations: 83711\ncpu: 8382.347600673756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47391.629222078365,
            "unit": "ns/iter",
            "extra": "iterations: 16994\ncpu: 47388.68424149686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201307.001642027,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 201296.57518179677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 161499.12632174845,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 161498.60271903305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 161812.9784661955,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 161812.240272006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 164644.55123266357,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 164640.2157164867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 358420.8091097279,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 358407.9503105587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2943632.657320981,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2943509.3457943923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2392153.6989795254,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2392033.163265308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2385681.8651399175,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2385642.493638678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2398250.3933161213,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2397994.858611824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1407274.6807866828,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1407246.5960665653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2328039.7010050155,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2327862.060301502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9932003.485981656,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9931405.607476655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5712490.109756318,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5712320.121951218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11539223.510869488,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11538877.17391308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48034.18847712724,
            "unit": "ns/iter",
            "extra": "iterations: 17270\ncpu: 48032.333526346134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 201065.2908137811,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 201065.77633549698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163901.4379072442,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 163903.58374856255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 164460.41775557125,
            "unit": "ns/iter",
            "extra": "iterations: 5204\ncpu: 164454.40046118415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 168587.18982850533,
            "unit": "ns/iter",
            "extra": "iterations: 5073\ncpu: 168586.93081017115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 359825.579230461,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 359825.65163425717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2913339.7912773252,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2913266.0436137035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2411832.0594316325,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2411844.7028423655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2394201.2884096173,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2394201.886792455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2419723.953488338,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2419752.454780372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1418117.6468797375,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418054.4901065459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2338891.9924998675,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2338881.25 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10146130.429906849,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 10145440.186915928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5780945.660493894,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5780735.802469141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47495.42437070808,
            "unit": "ns/iter",
            "extra": "iterations: 17480\ncpu: 47496.01258581217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 202709.21545003238,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 202704.51216631374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 160669.804960541,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 160671.7963171744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 160737.74742364432,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 160731.6095184562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 162891.77256248027,
            "unit": "ns/iter",
            "extra": "iterations: 5241\ncpu: 162893.76073268536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 356857.1671469733,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 356844.7920955132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2931097.180645052,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2931010.322580661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2397639.8817480714,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2397620.8226221013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2405278.2319588237,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2405223.453608244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2409486.505181384,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2409483.1606217516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1419747.3048781196,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1419631.7073170787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2345409.5789473965,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2345308.771929828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2760.4670349574576,
            "unit": "ns/iter",
            "extra": "iterations: 253966\ncpu: 2760.4238362615624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20267.73009310235,
            "unit": "ns/iter",
            "extra": "iterations: 34586\ncpu: 20267.998612155203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15699.062806585198,
            "unit": "ns/iter",
            "extra": "iterations: 44645\ncpu: 15697.87210213909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15322.01144929751,
            "unit": "ns/iter",
            "extra": "iterations: 45767\ncpu: 15321.939388642391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11929.848883897774,
            "unit": "ns/iter",
            "extra": "iterations: 58776\ncpu: 11929.656662583368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82620.10490913592,
            "unit": "ns/iter",
            "extra": "iterations: 8474\ncpu: 82617.87821571891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187678.65210728167,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 187677.2158365264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46102.63730979313,
            "unit": "ns/iter",
            "extra": "iterations: 15181\ncpu: 46101.90369540852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45606.78608230651,
            "unit": "ns/iter",
            "extra": "iterations: 15333\ncpu: 45605.641426987044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46014.71948017981,
            "unit": "ns/iter",
            "extra": "iterations: 15236\ncpu: 46015.3649251764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97960.05663543682,
            "unit": "ns/iter",
            "extra": "iterations: 7151\ncpu: 97955.43280660018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87136.41281632037,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 87134.83570439312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22483.38682995787,
            "unit": "ns/iter",
            "extra": "iterations: 31192\ncpu: 22483.684919209994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 108899.21693698525,
            "unit": "ns/iter",
            "extra": "iterations: 6412\ncpu: 108894.97816593984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86824.0028532467,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 86825.10854732605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 86183.18743082591,
            "unit": "ns/iter",
            "extra": "iterations: 8131\ncpu: 86176.87861271726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 88117.85705313073,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 88117.23401582765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 161851.20523511127,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 161853.27773916777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 773772.6868797925,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 773760.3087100314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 651355.6713221705,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 651364.990689017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 656633.2954971744,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 656567.9174484068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 651965.4216417909,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 651930.6902985102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 413556.0756054349,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 413535.1447135243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 637085.0045662184,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 637065.5707762523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22207.982270291097,
            "unit": "ns/iter",
            "extra": "iterations: 31529\ncpu: 22208.25906308483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 110224.02283824609,
            "unit": "ns/iter",
            "extra": "iterations: 6349\ncpu: 110220.9796818396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 87337.05077979201,
            "unit": "ns/iter",
            "extra": "iterations: 8015\ncpu: 87338.24079850166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 87433.70197105783,
            "unit": "ns/iter",
            "extra": "iterations: 8016\ncpu: 87426.16017963935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 88644.4896123616,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 88636.72409424807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 163580.21822430167,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 163573.45794392467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 776641.6886689224,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 776629.5929592925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 651282.9675023524,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 651290.900649955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 650624.6580166708,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 650602.7803521806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 651869.3845437765,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 651869.0875232711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 411757.4840989143,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 411740.22379269975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 636773.7732240525,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 636773.0418943566 ns\nthreads: 1"
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
        "date": 1702391767618,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7549.437871034098,
            "unit": "ns/iter",
            "extra": "iterations: 92815\ncpu: 7549.329310994991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95180.91899999743,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 95178.45555555553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184503.2886923501,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 184504.2114129291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 286272.4645243451,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 286259.2427616927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 360033.5846994484,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 360024.96847414866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 446321.54228599375,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 446313.6852895953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 535051.7949662188,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 535027.1945979125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 500472.9369999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500457.6999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 571386.9049999971,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571314.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5928.828849987982,
            "unit": "ns/iter",
            "extra": "iterations: 118364\ncpu: 5928.496840255481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4841.052075268006,
            "unit": "ns/iter",
            "extra": "iterations: 144656\ncpu: 4840.528564318106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4775.275426332206,
            "unit": "ns/iter",
            "extra": "iterations: 146482\ncpu: 4774.990783850582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4795.5189267185915,
            "unit": "ns/iter",
            "extra": "iterations: 145535\ncpu: 4795.175730923833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8408.145407795148,
            "unit": "ns/iter",
            "extra": "iterations: 83228\ncpu: 8408.04056327196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48789.76802305182,
            "unit": "ns/iter",
            "extra": "iterations: 17006\ncpu: 48786.82817829004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 203072.81322588222,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 203062.36074899233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166684.15702640786,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 166679.2313664596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 166185.2006980786,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 166180.9579212721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168557.3676153089,
            "unit": "ns/iter",
            "extra": "iterations: 5095\ncpu: 168548.4789008832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 366000.2631797362,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 365990.16189290147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2977278.6297467984,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2977085.759493674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2413092.1421188344,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2412966.1498708036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2396115.4097937956,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2395906.1855670135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2408372.536082379,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2408350.773195876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1431402.457055207,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1431357.5153374241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2347486.385390392,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2347349.370277079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10048529.43809521,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10031084.761904739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5385753.333333317,
            "unit": "ns/iter",
            "extra": "iterations: 174\ncpu: 5385598.850574696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11703353.999999953,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11702738.461538432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49249.758661392836,
            "unit": "ns/iter",
            "extra": "iterations: 16943\ncpu: 49248.45658974213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 207922.75182127187,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 207907.96503156977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 168452.3209146446,
            "unit": "ns/iter",
            "extra": "iterations: 5073\ncpu: 168450.60122215693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 168867.19450440738,
            "unit": "ns/iter",
            "extra": "iterations: 5095\ncpu: 168860.11776251212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 168809.09506001996,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 168808.541625664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 360208.26043819624,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 360178.62753203756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2957990.8057324835,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2957826.751592348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2434164.4401040995,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2433976.822916665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2418142.020671929,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2417992.248062001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2425152.4818653148,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2425024.09326424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1446584.3183229861,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1446445.3416149039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2358352.627204046,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2358229.4710327466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10233665.336538313,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10233080.769230727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5559918.065476124,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5559815.476190486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49012.552594254674,
            "unit": "ns/iter",
            "extra": "iterations: 16922\ncpu: 49011.27526297113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 207925.33099103265,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 207919.6026169131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166116.12110056248,
            "unit": "ns/iter",
            "extra": "iterations: 5161\ncpu: 166113.00135632552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165021.12012300637,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 165011.72400538155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 166934.66803039075,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 166930.0603935327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 364619.4254074504,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 364616.29753447376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2953338.306962065,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2953193.0379746994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2416144.1347150165,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2416022.5388601026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2423656.669270802,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2423567.4479166637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2426324.6025973535,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2426275.8441558396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1434274.4107692013,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1434212.0000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2365134.5969773745,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2365009.5717884135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2693.6567026228945,
            "unit": "ns/iter",
            "extra": "iterations: 259667\ncpu: 2693.554437028973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20223.268793301417,
            "unit": "ns/iter",
            "extra": "iterations: 34640\ncpu: 20222.863741339417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15116.140669814702,
            "unit": "ns/iter",
            "extra": "iterations: 46371\ncpu: 15114.970563498664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15638.71132685995,
            "unit": "ns/iter",
            "extra": "iterations: 44805\ncpu: 15638.314920209808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11806.870581874291,
            "unit": "ns/iter",
            "extra": "iterations: 59188\ncpu: 11806.521592214642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81695.66367032606,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81695.00350221847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 192250.2747014136,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 192246.1183496215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46466.81146886433,
            "unit": "ns/iter",
            "extra": "iterations: 15032\ncpu: 46464.77514635451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46193.84676617025,
            "unit": "ns/iter",
            "extra": "iterations: 15075\ncpu: 46192.00663349979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46493.56947214391,
            "unit": "ns/iter",
            "extra": "iterations: 15042\ncpu: 46492.05557771631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98232.57138854051,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 98227.85484097051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87815.66750377062,
            "unit": "ns/iter",
            "extra": "iterations: 7964\ncpu: 87811.82822702166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22147.748624722215,
            "unit": "ns/iter",
            "extra": "iterations: 31630\ncpu: 22146.48435030051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 109172.72388993729,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 109171.96685428402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 87641.50688360029,
            "unit": "ns/iter",
            "extra": "iterations: 7990\ncpu: 87640.12515644617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 87424.9540229898,
            "unit": "ns/iter",
            "extra": "iterations: 8004\ncpu: 87409.87006496712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 88033.84900678377,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 88028.13678652208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 164092.64108563823,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 164084.11324286394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 789307.8862612373,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 789270.6081081085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 662403.1676136116,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 662406.3446969755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 655865.1647940573,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 655792.5093632952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 660231.8283018537,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 660189.5283018864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 423321.2453620409,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 423281.20885697304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 647413.3707451511,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 647377.5528978887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22663.795263856435,
            "unit": "ns/iter",
            "extra": "iterations: 30869\ncpu: 22662.21127992494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 111798.0448901607,
            "unit": "ns/iter",
            "extra": "iterations: 6282\ncpu: 111783.55619229504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 90725.0254550115,
            "unit": "ns/iter",
            "extra": "iterations: 7857\ncpu: 90724.61499300125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89248.44515143783,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 89238.53397811136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 89906.81996916508,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 89902.82703675119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 163982.20730850348,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 163977.18435230898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 784139.1758737164,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 784067.3055242491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 658798.7429643525,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 658783.5834896796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 677294.6370439511,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 676229.1861552807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 661567.438862568,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 661541.2322274838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 424358.31591450016,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 424310.03562945285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 643350.1334586651,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 643306.6729323261 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396469196,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7623.737577369014,
            "unit": "ns/iter",
            "extra": "iterations: 91768\ncpu: 7623.472234330051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93993.39396267927,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 93986.81668496158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181510.37888198203,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 181508.198757764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 271425.289555972,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 271405.84740462794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354726.01113401045,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 354725.60824742273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 439912.1460333664,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 439908.23648307245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 525435.7276570251,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 525434.8429951692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 618046.5708275051,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 618029.1023842919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 568787.7649999677,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568777.8999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5846.8079731662365,
            "unit": "ns/iter",
            "extra": "iterations: 119551\ncpu: 5846.7256651972775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4773.178299448919,
            "unit": "ns/iter",
            "extra": "iterations: 146282\ncpu: 4773.187405148953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4745.058164686081,
            "unit": "ns/iter",
            "extra": "iterations: 147942\ncpu: 4744.863527598654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4796.90330677125,
            "unit": "ns/iter",
            "extra": "iterations: 145822\ncpu: 4796.920903567361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8371.18781665468,
            "unit": "ns/iter",
            "extra": "iterations: 84082\ncpu: 8371.304203039881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47220.75923072632,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 47221.34908406097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195811.01444290433,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 195805.47913801027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159188.35926475705,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 159186.5763089492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159628.44732937732,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 159304.02448071213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 163350.70882689947,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 163353.0951471147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 351411.58286174986,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 351405.61843169056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2907915.636923148,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2907906.769230762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2370366.015228392,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2370320.304568526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2362758.106329106,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2362687.848101264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2391480.9335037787,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2391446.8030690523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1398604.4012066037,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1398608.7481146306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2301671.350617226,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2301669.876543214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9846407.481481483,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 9846168.518518519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5631255.626505925,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5631212.048192769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11486205.989130652,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11486177.17391304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47633.823049522485,
            "unit": "ns/iter",
            "extra": "iterations: 17406\ncpu: 47632.322187751415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 197345.75028768336,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 197339.76985040226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 160947.34825122138,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 160947.21699887206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 164090.85393904478,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 164090.53095648895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163417.59541108264,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 163415.12428298304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 357252.13557929714,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 357243.6318816771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2898205.09627336,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2898193.4782608696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2393423.23785164,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2393409.974424541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2383199.1023017736,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2383123.0179028166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2412799.0335917873,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2412763.565891477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1417269.2511556624,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1417235.13097072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2319736.1985112466,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2319710.1736972784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10055556.898148278,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10055325.925925925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5640376.197604524,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5640358.682634738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47687.75361821406,
            "unit": "ns/iter",
            "extra": "iterations: 17481\ncpu: 47682.87283336192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 203147.16537649464,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 203143.8892798497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 160567.3076199443,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 160566.20884289686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 158077.4259088402,
            "unit": "ns/iter",
            "extra": "iterations: 5419\ncpu: 158075.12456172725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160291.49315325677,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 160288.5950103167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 351305.00121065084,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 351298.54721549706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2898100.080495383,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2898089.473684196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2375571.576142037,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2375516.75126903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2387029.7007671553,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2386975.4475703244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2386614.8894601213,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2386575.578406154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1416463.844984781,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1416379.787234042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2322117.330024827,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2322111.414392059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2628.0092102242083,
            "unit": "ns/iter",
            "extra": "iterations: 265683\ncpu: 2627.8508598593157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19867.206134864893,
            "unit": "ns/iter",
            "extra": "iterations: 35176\ncpu: 19866.9177848534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15038.588044782977,
            "unit": "ns/iter",
            "extra": "iterations: 46624\ncpu: 15037.768102264916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15540.106255963086,
            "unit": "ns/iter",
            "extra": "iterations: 45061\ncpu: 15539.883713188876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11628.610086570165,
            "unit": "ns/iter",
            "extra": "iterations: 60298\ncpu: 11628.53328468602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 79806.99510752132,
            "unit": "ns/iter",
            "extra": "iterations: 8789\ncpu: 79801.60427807564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185743.63597770818,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 185740.83311223224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45584.252895250334,
            "unit": "ns/iter",
            "extra": "iterations: 15370\ncpu: 45583.8126219906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45455.5443975298,
            "unit": "ns/iter",
            "extra": "iterations: 15395\ncpu: 45453.85514777531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45608.60267014038,
            "unit": "ns/iter",
            "extra": "iterations: 15355\ncpu: 45607.90621947214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96921.199115048,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 96919.8838495566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87888.97867094183,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 87888.55874738065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21955.291599785556,
            "unit": "ns/iter",
            "extra": "iterations: 31773\ncpu: 21955.131715607804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 108783.12206863832,
            "unit": "ns/iter",
            "extra": "iterations: 6439\ncpu: 108774.85634415438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86717.18400495297,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 86714.95350278841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 85469.18594739393,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 85464.52752070216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 87105.63820784182,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 87106.89483509587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 161761.89184192262,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 161761.243355674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 772562.4072847539,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 772515.7836644575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 657543.9868544502,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 655850.4225352156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 651787.0176744086,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 651782.6046511577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 652614.526119395,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 652617.0708955129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 411514.0223529365,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 411512.5882353004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 636342.380692149,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 636344.8998178398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21930.593423767157,
            "unit": "ns/iter",
            "extra": "iterations: 31994\ncpu: 21930.899543664425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 108676.93712250497,
            "unit": "ns/iter",
            "extra": "iterations: 6457\ncpu: 108678.59687161149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 86925.35567970204,
            "unit": "ns/iter",
            "extra": "iterations: 8055\ncpu: 86925.17690875164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 87337.47424356213,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87335.28382095516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 88314.4692074686,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88313.31398283673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162929.38763652963,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 162926.46990471843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 773594.9834437472,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 773567.549668874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 649540.5413953492,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 649523.534883722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 649445.3250000403,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 649414.3269230735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 652216.3330223524,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 652199.0671641699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 410358.70450556173,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 410345.2896430692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 634706.0018115833,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 634708.876811596 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}