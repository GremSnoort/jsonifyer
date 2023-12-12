window.BENCHMARK_DATA = {
  "lastUpdate": 1702390813621,
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
      }
    ]
  }
}