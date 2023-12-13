window.BENCHMARK_DATA = {
  "lastUpdate": 1702492239274,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-15 20.04 Debug c++-17": [
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
        "date": 1702489587240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14655.290179319454,
            "unit": "ns/iter",
            "extra": "iterations: 47736\ncpu: 14654.85168426345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116695.8005792336,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 116692.31830092399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 219391.3066228391,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 219387.1334681496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 318480.46435170225,
            "unit": "ns/iter",
            "extra": "iterations: 2707\ncpu: 318471.29663834505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 422370.1419573202,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 422351.30813953455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517775.9207390111,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 517666.03098927264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 500315.9110000297,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500295.29999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 580415.1099999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580399.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 659421.98712445,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 659385.6938483549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11740.672112174654,
            "unit": "ns/iter",
            "extra": "iterations: 59621\ncpu: 11740.43541705104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9810.207099187643,
            "unit": "ns/iter",
            "extra": "iterations: 71642\ncpu: 9809.828033834918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9833.408001910047,
            "unit": "ns/iter",
            "extra": "iterations: 71208\ncpu: 9833.124087181222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9895.691497724787,
            "unit": "ns/iter",
            "extra": "iterations: 71228\ncpu: 9895.16201493795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16171.646383969906,
            "unit": "ns/iter",
            "extra": "iterations: 43321\ncpu: 16171.443410816928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49577.60960410078,
            "unit": "ns/iter",
            "extra": "iterations: 16368\ncpu: 49575.89809384164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 233050.72983981582,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 233046.29378224246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 182578.68366909318,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 182567.93827689684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 182261.53897075975,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 182254.47362801663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 178356.4342353647,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 178349.19236416987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452731.68055558583,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 452708.3333333325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3630756.4023436713,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3630591.4062499944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2920218.9433962125,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2920103.773584915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2922224.883647841,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2922092.452830189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2892679.2367603034,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2892565.1090342677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1684280.1675775,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1684215.6648451707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2840817.880368282,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2840680.0613496876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10770026.363635648,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10769508.080808083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6501070.370629693,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6500755.244755233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14099671.533334306,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14098943.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55880.08362748034,
            "unit": "ns/iter",
            "extra": "iterations: 14732\ncpu: 55877.43687211518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 272132.97625079914,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 272117.98606713244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 212220.59237246134,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 212216.29519564103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 211274.4976560646,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 211266.4939550949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 207591.11833171145,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 207585.54801163988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 480238.2288088744,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 480228.9750692504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3694494.6190472487,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3694348.4126984365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2947089.101265687,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2946970.886075949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2964815.605095583,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2964656.3694267427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2921977.044025328,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2921899.0566037702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1716646.230055654,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1716611.6883116863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2870279.3888887726,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2870143.827160499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10985940.278350633,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 10985606.185566992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6541986.7062930055,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6541677.622377607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49314.93295819265,
            "unit": "ns/iter",
            "extra": "iterations: 16527\ncpu: 49312.36764083008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 228602.5575433793,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 228597.5166889184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 185281.02217874056,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 185273.1463361595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 186988.13880401573,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 186984.32998690498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 180351.06713256,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 180341.59254553044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 440471.58341806347,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 440457.22278738726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3621323.4357976727,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3621168.0933852107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2911271.790624781,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2911195.0000000107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2923251.6050157775,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2923159.2476488934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2891693.0993785355,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2891571.1180124204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1677701.258122668,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1677654.6931407969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2832187.8079267656,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2832021.951219514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5818.170875734361,
            "unit": "ns/iter",
            "extra": "iterations: 120573\ncpu: 5818.0994086569835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32351.543224134264,
            "unit": "ns/iter",
            "extra": "iterations: 21643\ncpu: 32349.900660721803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25322.797695820518,
            "unit": "ns/iter",
            "extra": "iterations: 27602\ncpu: 25322.088979059627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25128.453761896566,
            "unit": "ns/iter",
            "extra": "iterations: 27845\ncpu: 25126.805530615773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20597.16492871393,
            "unit": "ns/iter",
            "extra": "iterations: 33948\ncpu: 20596.60362908016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125309.01054889883,
            "unit": "ns/iter",
            "extra": "iterations: 5593\ncpu: 125305.36384766577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 243125.09062498732,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 243119.79166666832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62055.442743366686,
            "unit": "ns/iter",
            "extra": "iterations: 11300\ncpu: 62053.61946902699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61740.36993556283,
            "unit": "ns/iter",
            "extra": "iterations: 11329\ncpu: 61735.64303998569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61817.1791519432,
            "unit": "ns/iter",
            "extra": "iterations: 11320\ncpu: 61814.71731448704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124637.89344992228,
            "unit": "ns/iter",
            "extra": "iterations: 5603\ncpu: 124633.12511154532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115100.75390689631,
            "unit": "ns/iter",
            "extra": "iterations: 6079\ncpu: 115097.96019082078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38845.41918491839,
            "unit": "ns/iter",
            "extra": "iterations: 18035\ncpu: 38843.96451344586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184203.28902955508,
            "unit": "ns/iter",
            "extra": "iterations: 3792\ncpu: 184196.2816455712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152023.28683013486,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 152021.39292688333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 150168.78479379768,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 150164.34707903693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151691.60934459025,
            "unit": "ns/iter",
            "extra": "iterations: 4623\ncpu: 151685.5072463772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 272628.5313351534,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 272614.9085247213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1054312.2481202313,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1054253.9849624042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 881395.4219142826,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 881355.2896725446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 871410.312189041,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 871375.9950248727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 872522.9613466418,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 872504.4887780631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 577161.6641914117,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 577127.4752475229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 867481.1064355875,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 867442.9455445508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39336.96070847791,
            "unit": "ns/iter",
            "extra": "iterations: 17841\ncpu: 39335.25026624078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 196520.56418162666,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 196512.72421524653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 157229.62643033074,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 157218.8691945238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157615.2720572009,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 157609.04623632118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157040.97909171975,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157036.30845323787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 278170.16341948113,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 278166.6401590446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1061048.8512899235,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1061017.1471927227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 884139.1189873861,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 884075.0632911362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 876398.8913856922,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 876380.1498127223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 874933.3449999596,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 874887.8749999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 585148.4794979776,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 585141.087866111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 875405.2849999995,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 875377.6250000022 ns\nthreads: 1"
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
        "date": 1702492233292,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14616.669036369398,
            "unit": "ns/iter",
            "extra": "iterations: 47404\ncpu: 14616.433212387143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118091.65681881075,
            "unit": "ns/iter",
            "extra": "iterations: 7142\ncpu: 118089.49873984879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222659.33881749975,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 222648.68894601546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 323463.2423900703,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 323439.3836903419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 426477.20284873527,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 426472.2986247544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 529507.1542683333,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 529499.2073170731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 507798.20899992954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507762.00000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 587978.3000000316,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587946.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 673391.5329471264,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 673376.3215061551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11540.871801192301,
            "unit": "ns/iter",
            "extra": "iterations: 60843\ncpu: 11540.699833998999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9783.830052392732,
            "unit": "ns/iter",
            "extra": "iterations: 71575\ncpu: 9783.69402724415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9563.496097481406,
            "unit": "ns/iter",
            "extra": "iterations: 73286\ncpu: 9563.372267554507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9659.038863668666,
            "unit": "ns/iter",
            "extra": "iterations: 72690\ncpu: 9658.763241161078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15838.168724280245,
            "unit": "ns/iter",
            "extra": "iterations: 44226\ncpu: 15837.767376656284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49821.527436225064,
            "unit": "ns/iter",
            "extra": "iterations: 16347\ncpu: 49819.91802777271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 230769.3241192433,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 230754.6070460704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 183162.37062486535,
            "unit": "ns/iter",
            "extra": "iterations: 4657\ncpu: 183152.4586643761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 183173.82552641342,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 183163.62269015893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 182363.74098429814,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 182350.93338990217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 430551.3967310464,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 430503.61565131147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3589842.4689923394,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3589605.4263565936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2913597.613207526,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2913379.2452830174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2899075.4330215454,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2898907.788161995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2873751.0928792483,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2873465.944272448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1713420.5250464887,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1713309.461966605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2829734.192073097,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2829461.8902438926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10933863.887755381,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10932275.510204062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6513258.7847224325,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6512904.861111125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14209770.773333427,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14208527.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57206.08445804772,
            "unit": "ns/iter",
            "extra": "iterations: 14374\ncpu: 57199.82607485756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 268105.96445276693,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 268088.99282818945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 212988.45571818217,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 212968.2212850403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 212565.2002981846,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 212545.22862823124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 210734.3004186197,
            "unit": "ns/iter",
            "extra": "iterations: 4061\ncpu: 210711.0563900515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 470340.62978955643,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 470326.4436049617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3785728.2117650304,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3785166.666666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2957932.33968248,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2957633.6507936562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2940858.129337552,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2940649.5268138815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2892635.364486172,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2892448.598130852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1743496.4552238828,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1743328.7313432877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2854008.693251521,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2853821.472392653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11168123.263158984,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11167178.947368415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5025141.8599998485,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5024906.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49920.36774509202,
            "unit": "ns/iter",
            "extra": "iterations: 16351\ncpu: 49918.494281695195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 230834.81632103922,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 230811.63479666007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 186913.0607251982,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 186901.39799038766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 189382.7712144679,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 189363.21357725366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 182195.80852879665,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 182182.622601279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 421661.8721439486,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 421620.1750121541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3603094.3783784527,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3602800.3861003877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2906615.267912709,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2906384.7352024904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2931406.2118380214,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2931141.121495323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2884057.7263842775,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 2883927.3615635224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1700941.1243143203,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1700921.2065813558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2814131.2242424153,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2814001.818181825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5747.135941143673,
            "unit": "ns/iter",
            "extra": "iterations: 121788\ncpu: 5746.93647978454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32092.159046092507,
            "unit": "ns/iter",
            "extra": "iterations: 21805\ncpu: 32091.506535198332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 23896.407923425057,
            "unit": "ns/iter",
            "extra": "iterations: 29356\ncpu: 23894.444065949145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25679.66609212125,
            "unit": "ns/iter",
            "extra": "iterations: 27268\ncpu: 25678.329910517798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20347.34700864669,
            "unit": "ns/iter",
            "extra": "iterations: 34466\ncpu: 20346.12081471621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122198.99947587999,
            "unit": "ns/iter",
            "extra": "iterations: 5724\ncpu: 122192.24318658319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 242588.56375608777,
            "unit": "ns/iter",
            "extra": "iterations: 2886\ncpu: 242584.9618849648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61965.113382893986,
            "unit": "ns/iter",
            "extra": "iterations: 11298\ncpu: 61960.701009027536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62271.60227272927,
            "unit": "ns/iter",
            "extra": "iterations: 11264\ncpu: 62265.092329545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61977.734405372714,
            "unit": "ns/iter",
            "extra": "iterations: 11318\ncpu: 61971.487895388454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 127213.3338791856,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 127210.3711790386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 104460.31699296916,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104458.5413241658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39812.982511923634,
            "unit": "ns/iter",
            "extra": "iterations: 17612\ncpu: 39810.44174426478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 188075.18712976933,
            "unit": "ns/iter",
            "extra": "iterations: 3714\ncpu: 188066.77436725618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 154622.03162318154,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 154611.30030959944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 155532.02827246874,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 155528.94033838104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 155283.41526177857,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 155280.96716947533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276005.4463232652,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 275991.1915060946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1055887.0316741627,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1055869.3815987986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 887000.3265821617,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 886956.5822784774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 870688.7484511071,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 870638.4138785546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 874945.5018727538,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 874922.5967540531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 575638.0463959896,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 575625.517812766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 869359.9789081129,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 869270.8436724682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40754.45557369343,
            "unit": "ns/iter",
            "extra": "iterations: 17152\ncpu: 40752.47784514947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200279.73283751137,
            "unit": "ns/iter",
            "extra": "iterations: 3496\ncpu: 200261.38443935837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160065.0719506652,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 160055.98446779343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159585.87659379595,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 159567.07650273017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160791.73695054738,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 160785.76007326203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 276763.77698694123,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 276745.90747331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1048785.7432433355,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1048767.4174174175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 884815.6819337545,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 884794.1475826988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 870408.4788557036,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 870396.8905472548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 875337.1624999318,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 875321.0000000068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 582461.2187240935,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 582452.4440762248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 869050.8921933769,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 869020.9417595974 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}