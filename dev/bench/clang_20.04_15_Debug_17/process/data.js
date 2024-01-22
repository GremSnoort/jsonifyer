window.BENCHMARK_DATA = {
  "lastUpdate": 1705963183498,
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
        "date": 1702503250499,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14567.602780577017,
            "unit": "ns/iter",
            "extra": "iterations: 48623\ncpu: 14566.682434238941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 115381.45505618415,
            "unit": "ns/iter",
            "extra": "iterations: 7298\ncpu: 115373.80104138122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 217697.28163367245,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 217685.1165121524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 317292.23378527956,
            "unit": "ns/iter",
            "extra": "iterations: 2729\ncpu: 317278.8200806154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 417957.02640422015,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 417920.78732597234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517297.6408576314,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 517265.99166170356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 617877.3076922871,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 617839.6723646724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 581640.9939999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581609.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 659902.5579999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659857.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11349.389995939197,
            "unit": "ns/iter",
            "extra": "iterations: 61575\ncpu: 11348.894843686565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9546.480763726904,
            "unit": "ns/iter",
            "extra": "iterations: 73377\ncpu: 9546.24473608897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9530.366896288713,
            "unit": "ns/iter",
            "extra": "iterations: 73454\ncpu: 9530.169902251751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9591.175560743637,
            "unit": "ns/iter",
            "extra": "iterations: 73251\ncpu: 9591.141417864594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15839.371367377284,
            "unit": "ns/iter",
            "extra": "iterations: 44355\ncpu: 15839.310111599567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50240.25657325983,
            "unit": "ns/iter",
            "extra": "iterations: 16202\ncpu: 50238.859400074136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 236021.73342542187,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 236015.0552486189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 182814.87296137284,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 182810.42918454972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 180789.45726405917,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 180787.61399787953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 180158.99472907392,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 180155.02846299825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 444183.7728205218,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 444175.4358974365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3624953.9031006787,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3624864.728682173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2909307.0376175763,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2909216.614420053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2881005.5155278905,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2880923.6024844754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2879594.521739145,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2879517.080745348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1720274.078212353,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1720192.3649906921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2823942.6890243846,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2823751.524390246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11090766.969072409,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11089884.536082482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6537966.380281505,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6537653.52112676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14344232.013513647,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14343043.243243197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55480.45458833174,
            "unit": "ns/iter",
            "extra": "iterations: 14842\ncpu: 55476.49238647106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 273141.6615776083,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 273129.9618320605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 212996.5368657827,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 212980.05498625274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 212743.7791853066,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 212741.15747640308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 213610.43580155371,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 213605.41012216362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 467500.2603036876,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 467494.360086769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3643044.6980393394,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3642872.549019615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2956193.1015872946,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2956159.3650793754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2922023.9088050914,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2921963.8364780038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2908528.1374999993,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2908447.5000000107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1736538.9250936673,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1736497.7528089962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2849249.443425035,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2849197.8593272315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11144026.312499851,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11143537.499999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5092503.719999968,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5092406.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49542.90273757885,
            "unit": "ns/iter",
            "extra": "iterations: 16584\ncpu: 49542.360106126296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 235401.99201981665,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 235399.55971381298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 188750.7080388688,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 188747.70318021244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 190258.70795276493,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 190254.44419692538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 183508.50847093744,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 183505.25412824386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 429188.35206365876,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 429180.2088513171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3594567.0153845064,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3594521.153846158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2910541.7632399336,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2910495.638629289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2879690.05246908,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2879653.703703699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2883197.947530761,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2883184.5679012197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1715906.632841402,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1715842.2509225062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2820994.3021147,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2820936.55589123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5738.442530384671,
            "unit": "ns/iter",
            "extra": "iterations: 122021\ncpu: 5738.421255357645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32200.644816319524,
            "unit": "ns/iter",
            "extra": "iterations: 22349\ncpu: 32199.968678688077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25905.626604057798,
            "unit": "ns/iter",
            "extra": "iterations: 27898\ncpu: 25904.925084235485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25644.152706549252,
            "unit": "ns/iter",
            "extra": "iterations: 28080\ncpu: 25643.81766381761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20311.601878425536,
            "unit": "ns/iter",
            "extra": "iterations: 34497\ncpu: 20311.522741107845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125526.66893708233,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 125526.25918623396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 241257.17355369782,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 241250.99862258593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61621.924995248926,
            "unit": "ns/iter",
            "extra": "iterations: 10506\ncpu: 61620.39786788581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61582.790248225385,
            "unit": "ns/iter",
            "extra": "iterations: 11280\ncpu: 61581.3741134755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61214.470217239475,
            "unit": "ns/iter",
            "extra": "iterations: 11416\ncpu: 61214.313244569006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 127472.72032046363,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 127469.75600874062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 114849.53595413479,
            "unit": "ns/iter",
            "extra": "iterations: 6105\ncpu: 114845.47092547036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38713.38289859849,
            "unit": "ns/iter",
            "extra": "iterations: 18057\ncpu: 38712.95342526412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 185627.8721207192,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 185623.96081546074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151916.74098219693,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 151911.5384615386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151034.26911445268,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 151029.6976241911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151555.21413043476,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 151551.8043478274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 271787.8337864146,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 271779.84466019116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1040022.3794643385,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1040004.6130952431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 864937.5495048498,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 864933.910891092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 861027.2634803542,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 860992.4019607746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 861740.7953144899,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 861719.728729961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 580685.8712624579,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 580672.4252491746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 856925.3691930755,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 856896.454767722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39281.337167549806,
            "unit": "ns/iter",
            "extra": "iterations: 17822\ncpu: 39279.906856693924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 194401.50333148893,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 194395.9189339286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 155396.66451755984,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 155394.4197421071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153842.19463971024,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 153837.50000000105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156296.5749440794,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 156295.45861297508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 273188.04249511124,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 273178.98635477974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1053301.5009487022,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1053248.387096771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 869697.1683291751,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 869666.2094763108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 862340.0542539724,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 862325.6473489514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 869834.1990050006,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 869832.338308453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 587852.8841309295,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 587831.9059613752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 864469.0950616699,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 864375.5555555518 ns\nthreads: 1"
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
        "date": 1705574911560,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15130.55396349135,
            "unit": "ns/iter",
            "extra": "iterations: 48644\ncpu: 15129.376695995397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114967.06820966708,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 114960.59904697072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 218634.23697979332,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 218624.22128083732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 315055.7071038547,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 315029.90892531857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 415571.0023866345,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 415519.95226730313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 513997.30059172714,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 513956.33136094635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 616019.4217976076,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 615962.7742392068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 573348.7609999201,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573328.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 660169.7179999064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660128.5000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11135.460416666967,
            "unit": "ns/iter",
            "extra": "iterations: 62880\ncpu: 11134.575381679375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9401.147440382923,
            "unit": "ns/iter",
            "extra": "iterations: 74308\ncpu: 9400.471012542397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9433.657959779955,
            "unit": "ns/iter",
            "extra": "iterations: 74041\ncpu: 9433.467943436764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9376.553957027,
            "unit": "ns/iter",
            "extra": "iterations: 74652\ncpu: 9376.37035846327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15749.642731019716,
            "unit": "ns/iter",
            "extra": "iterations: 44174\ncpu: 15748.614569656362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51423.58716061532,
            "unit": "ns/iter",
            "extra": "iterations: 15764\ncpu: 51421.96777467637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 241690.52827510334,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 241675.67490764384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 190113.73034958384,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 190103.80761523073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 186579.53168706136,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 186565.4720279725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 187250.16227490277,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 187233.02591128633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 431997.33566435165,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 431973.8761238764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3503812.5757576167,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3503554.1666666567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2845642.5351684606,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2845400.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2811257.8483871636,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2811073.225806451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2805658.3504531826,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2805467.069486409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1673538.104882468,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1673415.0090415913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2756115.9345236234,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2755829.1666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10692388.479999408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10691860.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6430444.59310392,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6429905.517241375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14028304.171052683,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14027367.105263136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55399.53259772843,
            "unit": "ns/iter",
            "extra": "iterations: 14863\ncpu: 55396.61575724953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 281202.48475909693,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 281185.21796132345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 220098.18333762317,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 220089.7402931335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 218568.90431473256,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 218551.3959390858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 213380.70490171685,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 213367.47947250478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 468362.0167115977,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 468323.23450134654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3571320.7038462805,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3571035.3846153654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2897035.7975078025,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2896888.785046721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2873929.9351852345,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2873705.8641975387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2832871.6951217917,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2832683.5365853654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1697764.145719396,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1697654.8269581038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2791275.595808463,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2791049.4011975946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10912678.897959583,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10911996.93877553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5003321.7800000785,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5003177.999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50360.76012728294,
            "unit": "ns/iter",
            "extra": "iterations: 16342\ncpu: 50357.434830498256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 236106.9933591726,
            "unit": "ns/iter",
            "extra": "iterations: 3614\ncpu: 236097.03929164383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194339.98268793896,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 194334.60136674295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193043.5323236692,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 193032.59493670845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 186322.9077159221,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 186316.92240245457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 426831.05471425137,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 426803.9570102617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3519244.0603773403,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3519049.4339622576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2860212.9082569974,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2859944.036697249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2831142.4589664387,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2831027.0516717215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2820988.4878788902,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2820766.3636363787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1671658.1971324582,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1671528.1362007228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2763776.6059702267,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2763561.791044758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5737.553404577741,
            "unit": "ns/iter",
            "extra": "iterations: 122115\ncpu: 5737.214101461739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32439.536184206616,
            "unit": "ns/iter",
            "extra": "iterations: 21584\ncpu: 32438.23202372122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26015.032886678946,
            "unit": "ns/iter",
            "extra": "iterations: 27762\ncpu: 26013.961530148987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25940.861839741618,
            "unit": "ns/iter",
            "extra": "iterations: 27830\ncpu: 25939.874236435433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20255.102349915473,
            "unit": "ns/iter",
            "extra": "iterations: 34597\ncpu: 20253.542214642905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122708.24078280345,
            "unit": "ns/iter",
            "extra": "iterations: 5723\ncpu: 122698.02551109558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 237255.2672092236,
            "unit": "ns/iter",
            "extra": "iterations: 2949\ncpu: 237242.52288911233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60494.66201069265,
            "unit": "ns/iter",
            "extra": "iterations: 11598\ncpu: 60490.12760820861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60315.80864251105,
            "unit": "ns/iter",
            "extra": "iterations: 11617\ncpu: 60311.38848239693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 60049.66156886727,
            "unit": "ns/iter",
            "extra": "iterations: 11639\ncpu: 60044.11891055919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 123094.72426535039,
            "unit": "ns/iter",
            "extra": "iterations: 5683\ncpu: 123090.39239838163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 112336.93633441033,
            "unit": "ns/iter",
            "extra": "iterations: 6220\ncpu: 112329.08360128592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39023.77177243878,
            "unit": "ns/iter",
            "extra": "iterations: 17947\ncpu: 39022.33799520754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184385.9939394028,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 184381.97628458813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151746.6343946319,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 151737.55685509864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 150972.02307029325,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 150958.62440707153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 149917.4952626936,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 149902.41171403832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 266937.3306635754,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 266923.4935164002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1027231.0102638713,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1027136.217008788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 861348.2751842766,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 861301.2285012304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 856760.9902081043,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 856721.1750305971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 851305.9076548739,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 851226.974483606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 569016.0275303482,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 568999.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 846752.2934782776,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 846677.7777777776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39791.78422220727,
            "unit": "ns/iter",
            "extra": "iterations: 17569\ncpu: 39789.231031931035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200951.86823854878,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 200435.3675450779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 155750.44486354548,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155744.73041934852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 155271.56354700847,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 155260.77730623283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156175.19670305276,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 156164.66919135544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 276567.4725404611,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 276548.2022915801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1024499.3627018578,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1024422.7606461155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 870500.293167735,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 870442.6086956613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 858298.9045287658,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 858244.5532435797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 850658.9247573833,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 850615.8980582518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 569416.3003246383,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 569396.8344155805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 853925.7899877693,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 853859.2185592336 ns\nthreads: 1"
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
        "date": 1705772778079,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14213.139717850396,
            "unit": "ns/iter",
            "extra": "iterations: 47918\ncpu: 14212.366960223719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116526.55465027053,
            "unit": "ns/iter",
            "extra": "iterations: 6505\ncpu: 116519.72328977709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 220091.1511099837,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 220084.1826437941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 314286.4563106942,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 314274.794622853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 424036.60260115645,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 424027.07129094395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 524293.2073619482,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 524271.28834355786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 507557.7079999789,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507555.20000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 588945.4730000239,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588908.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 662850.0830000235,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 662835.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11138.623416638102,
            "unit": "ns/iter",
            "extra": "iterations: 61341\ncpu: 11138.688642180603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9640.671141296507,
            "unit": "ns/iter",
            "extra": "iterations: 75090\ncpu: 9640.113197496337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9378.505287801483,
            "unit": "ns/iter",
            "extra": "iterations: 73471\ncpu: 9378.352002831069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9567.417413186633,
            "unit": "ns/iter",
            "extra": "iterations: 73117\ncpu: 9567.212823283222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15894.474980530642,
            "unit": "ns/iter",
            "extra": "iterations: 44945\ncpu: 15894.428746245405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51303.66147196618,
            "unit": "ns/iter",
            "extra": "iterations: 16427\ncpu: 51303.2568332623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 227073.15790898088,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 227069.63705308802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 176439.6658259748,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 176437.2005044136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 179234.54170194085,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 179230.8425063507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 176955.02905621435,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 176951.09225874866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 440441.4891139454,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 440433.21518987394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3703248.534615201,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3703218.8461538428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2879127.6118012294,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2879105.9006211185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2923129.6851849263,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2923106.4814814846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2888235.690851593,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2888193.3753943206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1698512.6222627421,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1698500.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2808804.948011933,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2808758.103975543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11034168.602040553,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 11033830.61224491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6540280.280822191,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6540271.917808214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14163869.243243365,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14163640.540540557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54844.637061258865,
            "unit": "ns/iter",
            "extra": "iterations: 14986\ncpu: 54844.508207660525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 267605.76923074934,
            "unit": "ns/iter",
            "extra": "iterations: 3211\ncpu: 267599.09685456136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 209491.8180238376,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 209485.47666335574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 210080.31701348463,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 210073.3170134647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 209398.83484440146,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 209390.81107571593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 460183.2047159681,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 460168.5423365484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3728040.670588438,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3727938.823529393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2966970.3846151987,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2966888.782051291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2926961.5186334457,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2926922.6708074436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2948752.7638037866,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2948679.4478527615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1709668.4514389161,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1709604.136690652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2876993.985206925,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2876854.1420118287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11230258.4947369,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11229933.684210524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6580998.645390472,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6580709.929078035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49776.31918009006,
            "unit": "ns/iter",
            "extra": "iterations: 16392\ncpu: 49774.46925329428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 220639.50400412997,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 220632.60139498845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 181271.4434417831,
            "unit": "ns/iter",
            "extra": "iterations: 4765\ncpu: 181263.21091290627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 184934.43120627405,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 184928.15348738668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 172602.43387471203,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 172594.49483231324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 435832.2284289394,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 435818.40399002685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3688832.0277779396,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3688746.825396803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2935385.193038051,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2935258.2278480944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2919895.8432599916,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2919780.564263322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2875867.8683386613,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2875715.987460803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1711249.9892280872,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1711226.032315977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2861495.994029746,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2861491.34328358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5616.689312435049,
            "unit": "ns/iter",
            "extra": "iterations: 128177\ncpu: 5616.663676010514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31049.97386821892,
            "unit": "ns/iter",
            "extra": "iterations: 22310\ncpu: 31049.32317346462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25633.396788488946,
            "unit": "ns/iter",
            "extra": "iterations: 27526\ncpu: 25632.80898060018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24577.01197948412,
            "unit": "ns/iter",
            "extra": "iterations: 27881\ncpu: 24576.758365912196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20177.602158315385,
            "unit": "ns/iter",
            "extra": "iterations: 34564\ncpu: 20177.161208193465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126883.09092491098,
            "unit": "ns/iter",
            "extra": "iterations: 5752\ncpu: 126881.9367176629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 239063.0115263959,
            "unit": "ns/iter",
            "extra": "iterations: 2863\ncpu: 239059.93712888221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62447.82871776913,
            "unit": "ns/iter",
            "extra": "iterations: 11519\ncpu: 62446.75753103467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60945.77667966961,
            "unit": "ns/iter",
            "extra": "iterations: 11535\ncpu: 60945.63502384073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62394.97863889597,
            "unit": "ns/iter",
            "extra": "iterations: 11329\ncpu: 62393.67993644602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125785.28469877769,
            "unit": "ns/iter",
            "extra": "iterations: 5627\ncpu: 125782.72614181745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115615.34215783831,
            "unit": "ns/iter",
            "extra": "iterations: 6006\ncpu: 115612.5707625689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38639.795817677965,
            "unit": "ns/iter",
            "extra": "iterations: 17837\ncpu: 38639.434882547925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184010.2684334814,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 184004.670690109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158833.39247786143,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 158831.54867256735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151529.07361293395,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 151528.59327217206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151776.58640226262,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 151776.11680104447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276523.3191888732,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 276520.24033045623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1058206.8783783661,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1058195.645645659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 888240.8012904043,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 888217.806451621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 851074.3707440115,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 851070.8701134914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 874415.942168761,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 874398.3132530095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 587160.3073047526,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 587158.4382871507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 883398.5956906375,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 883381.6223067157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39416.806125270145,
            "unit": "ns/iter",
            "extra": "iterations: 18089\ncpu: 39416.24191497587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200303.6551043237,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 200302.90468133293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 156101.09252014456,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 156100.8285385486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 149685.65307456156,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 149680.35324901866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156509.7446153801,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 156503.47252747222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 276759.8347305237,
            "unit": "ns/iter",
            "extra": "iterations: 2505\ncpu: 276752.57485029905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1053667.1377244901,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1053625.1497005953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 883648.9339975271,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 883617.8082191778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 872599.164572952,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 872604.396984932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 874919.3507653081,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 874883.1632653092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 563125.8078530022,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 563108.2706766899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 865235.9831933304,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 865229.2917166724 ns\nthreads: 1"
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
        "date": 1705774722242,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14446.071601414345,
            "unit": "ns/iter",
            "extra": "iterations: 48351\ncpu: 14444.756054683461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116584.66944976903,
            "unit": "ns/iter",
            "extra": "iterations: 7306\ncpu: 116583.58883109772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 219362.4601613759,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 219350.32778618252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 318657.46681496,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 318626.43678160926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 420384.4023267086,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 420362.0940378088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 523520.28999399405,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 523483.7028160577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 502644.3769999673,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502611.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 581886.8669999802,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581863.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 678912.4946081917,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 678872.1782890011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11512.884735863334,
            "unit": "ns/iter",
            "extra": "iterations: 61294\ncpu: 11512.895226286422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9655.160192767107,
            "unit": "ns/iter",
            "extra": "iterations: 72419\ncpu: 9654.456703351323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9578.416998581257,
            "unit": "ns/iter",
            "extra": "iterations: 73312\ncpu: 9578.062254474042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9660.642552957022,
            "unit": "ns/iter",
            "extra": "iterations: 72559\ncpu: 9660.11246020478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15976.90051806382,
            "unit": "ns/iter",
            "extra": "iterations: 43817\ncpu: 15976.262637788965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50025.56139483275,
            "unit": "ns/iter",
            "extra": "iterations: 16174\ncpu: 50023.15444540618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 229214.2288503123,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 229208.43275488075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 183164.5305900257,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 183150.72937078148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 180678.46669485513,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 180674.07485726356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 178711.56753355736,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 178700.5872483215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 436342.5383084476,
            "unit": "ns/iter",
            "extra": "iterations: 2010\ncpu: 436313.78109452577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3599247.868217129,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3599109.302325579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2921345.8203390334,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 2921245.423728819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2879033.585139424,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2878887.3065015497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2870341.87037038,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2870176.5432098694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1719671.6275605143,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1719619.1806331472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2825156.1524390783,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2824939.3292682893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11057164.843749708,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11056731.249999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6645546.170212915,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6645287.234042569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14566692.849315,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14565804.109589024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57144.04277851144,
            "unit": "ns/iter",
            "extra": "iterations: 14353\ncpu: 57142.0608931929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 269775.4962335087,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 269764.03013182624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 207900.4091792042,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 207900.50995628966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 209846.0383675391,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 209840.24926686115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 209651.4640058709,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 209644.3437806083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 462241.2152034422,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 462225.85653104977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3649746.054902028,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3649579.215686274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2964197.0830673347,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2964087.5399361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2921307.481132025,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2921133.6477987543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2891530.600619127,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2891531.888544886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1740391.144761859,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1740266.6666666684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2849528.6400000346,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2849384.307692315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11214546.670212839,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11213992.553191483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6646927.735714924,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6646539.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50039.46431189883,
            "unit": "ns/iter",
            "extra": "iterations: 16364\ncpu: 50037.47250061116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 229137.89938452875,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 229125.74257425687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 186491.3771490922,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 186485.8106637653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 187016.34711287514,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 187007.10848643887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 177858.0446985443,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 177850.74844074927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 420370.8102862698,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 420347.06453178206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3595939.7230770336,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3595808.4615384787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2919136.8401254527,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2918962.0689655286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2884696.484567903,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2884554.320987659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2860695.6257669167,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2860672.3926380347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1719874.9387754782,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1719795.5473098366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2812632.9727273737,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2812537.2727272604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5771.302329982874,
            "unit": "ns/iter",
            "extra": "iterations: 121503\ncpu: 5771.137338172678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31771.2329246097,
            "unit": "ns/iter",
            "extra": "iterations: 22020\ncpu: 31771.280653950776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26035.206847840633,
            "unit": "ns/iter",
            "extra": "iterations: 26899\ncpu: 26033.99382876706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24947.17852036849,
            "unit": "ns/iter",
            "extra": "iterations: 27980\ncpu: 24946.418870621965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20344.344578456534,
            "unit": "ns/iter",
            "extra": "iterations: 34326\ncpu: 20343.20340266848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125322.83517856513,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 125320.42857142806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 241494.58261173585,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 241485.97159681327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61829.56693747192,
            "unit": "ns/iter",
            "extra": "iterations: 11324\ncpu: 61829.60967855887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61799.267764372475,
            "unit": "ns/iter",
            "extra": "iterations: 11357\ncpu: 61796.74209738544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61515.9581464829,
            "unit": "ns/iter",
            "extra": "iterations: 11373\ncpu: 61513.0572408328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126792.44900179967,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 126787.27767695281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 114269.60048980359,
            "unit": "ns/iter",
            "extra": "iterations: 6125\ncpu: 114263.62448979693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39591.88530708808,
            "unit": "ns/iter",
            "extra": "iterations: 17682\ncpu: 39589.64483655737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 189982.58071505884,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 189967.74106175444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 155989.62033520528,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 155987.79888268115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 155589.1131573232,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155582.38295984044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 155339.57568350015,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 155334.38541898204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 271116.70410535316,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 271108.17195971985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1054460.1626505763,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1054440.060240944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 882770.8343869802,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 882772.0606826851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 881346.1706701033,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 881309.9873577704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 875633.2525126366,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 875597.4874371882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 591012.6672283093,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 590983.740522317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 871357.990012485,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 871324.8439450677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40103.38701508366,
            "unit": "ns/iter",
            "extra": "iterations: 17374\ncpu: 40102.089328882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 196551.14706707626,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 196544.1762559626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 158827.30235721887,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 158822.6427923854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157881.34620597554,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 157876.67118337986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159949.26525018076,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 159942.42631939723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 274730.9315230299,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 274711.37347501394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1053837.1428570566,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1053811.578947368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 891111.508905872,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 891076.4631043113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 883445.0591194988,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 883417.6100628851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 883221.0732323071,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 883209.2171717338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 591984.9144568439,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 591950.7271171894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 874893.780000008,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 874872.7500000086 ns\nthreads: 1"
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
        "date": 1705777727704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15390.16504563829,
            "unit": "ns/iter",
            "extra": "iterations: 46781\ncpu: 15389.277698210815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119802.75102793546,
            "unit": "ns/iter",
            "extra": "iterations: 7053\ncpu: 119797.0367219623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 223756.9605568517,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 223752.69399329723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 333469.7896734907,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 333435.7630979501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 432260.37680439756,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 432235.8387257341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 537826.449722388,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 537818.3220234426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 515558.9180000106,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515533.39999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 596610.0289999758,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596583.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 682164.4930198503,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 682119.4709772227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11903.824782072152,
            "unit": "ns/iter",
            "extra": "iterations: 59309\ncpu: 11902.869716231939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9950.150851301949,
            "unit": "ns/iter",
            "extra": "iterations: 69658\ncpu: 9949.430072640625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9842.861963362988,
            "unit": "ns/iter",
            "extra": "iterations: 71184\ncpu: 9842.145706900441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9843.469780102396,
            "unit": "ns/iter",
            "extra": "iterations: 69805\ncpu: 9843.283432418879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16300.340996882042,
            "unit": "ns/iter",
            "extra": "iterations: 42974\ncpu: 16300.025596872552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50250.73631043888,
            "unit": "ns/iter",
            "extra": "iterations: 16235\ncpu: 50248.37080381893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 232119.46982055818,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 232112.01740076157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 185797.4115601738,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 185784.7457627118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 183605.8824289216,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 183593.94918174032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 180460.69552301787,
            "unit": "ns/iter",
            "extra": "iterations: 4713\ncpu: 180450.71079991537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 459108.3532522635,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 459073.2945531456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3708903.564000138,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3708568.800000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2991733.0194175253,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2991637.864077665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2974060.5641024606,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2973944.8717948636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2956234.6166135822,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2956002.2364217304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1770503.496183269,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1770347.3282442777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2910157.622641336,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2910016.9811320743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11210168.568420973,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11209599.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5043523.460000188,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5042915.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14645055.874999635,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14643904.166666634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56193.345270635895,
            "unit": "ns/iter",
            "extra": "iterations: 14632\ncpu: 56191.01968288679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 269016.5360275744,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 268995.05012531404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 212528.22305955453,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 212516.60386837577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 212960.98135719242,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 212960.7755406418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 213693.52832080427,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 213696.29072681814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 486335.38700564945,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 486295.1977401133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3768355.1097559324,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3768169.1056910553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3047100.604575153,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3047034.9673202652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3029838.654722966,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3029703.9087947845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2998777.2548386073,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2998771.290322569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1800714.9903100908,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1800537.4031007672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2949612.6126985704,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2949434.603174615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11563686.677419279,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11563373.118279561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5168701.779999765,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5168710.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51812.12826169006,
            "unit": "ns/iter",
            "extra": "iterations: 15866\ncpu: 51813.30518088966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 238434.25788752575,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 238437.58573388137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 188830.85817940978,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 188829.00175901485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 187687.72478069738,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 187677.67543859506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 182267.812206572,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 182257.4050362777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 446567.14655617037,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 446555.3599171415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3698207.039682591,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3698268.650793668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3009954.8135044975,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3009987.781350497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2975391.853503097,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2975296.4968152745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2980659.5942491996,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2980515.974440894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1762423.402277235,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1762323.14990512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2903242.556250163,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2903190.3124999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5801.474148484731,
            "unit": "ns/iter",
            "extra": "iterations: 119258\ncpu: 5801.240168374446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32358.502108335782,
            "unit": "ns/iter",
            "extra": "iterations: 21581\ncpu: 32355.928826282554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25546.036164322366,
            "unit": "ns/iter",
            "extra": "iterations: 27458\ncpu: 25545.00691965919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25192.726663783174,
            "unit": "ns/iter",
            "extra": "iterations: 27768\ncpu: 25191.302938634642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20469.025874659153,
            "unit": "ns/iter",
            "extra": "iterations: 34242\ncpu: 20466.818526955187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127007.07718728526,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 126996.7642805494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247919.22344193267,
            "unit": "ns/iter",
            "extra": "iterations: 2824\ncpu: 247909.98583569718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 63173.66485507383,
            "unit": "ns/iter",
            "extra": "iterations: 11040\ncpu: 63173.297101449825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63354.90909913869,
            "unit": "ns/iter",
            "extra": "iterations: 11034\ncpu: 63356.17183251777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63599.241181815494,
            "unit": "ns/iter",
            "extra": "iterations: 11000\ncpu: 63592.81818181857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 129815.01370624115,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 129806.11224300836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117970.0941931108,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 117965.20931802882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40279.136945071725,
            "unit": "ns/iter",
            "extra": "iterations: 17277\ncpu: 40276.02593042782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192531.98020348256,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 192518.7242232607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157696.04434937972,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 157687.01035569634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 155379.99933626835,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 155379.9778761045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 154711.2311258314,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 154700.8609271535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 275731.96607496764,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 275737.43589743733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1095474.5187499172,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1095364.2187500056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 914416.7244094779,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 914336.8766404255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 905740.3803362267,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 905666.1060802144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 910690.5104437696,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 910633.4203655266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 600179.3561643444,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 600180.1369863024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 901142.738738707,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 901049.2921493015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40219.367383302204,
            "unit": "ns/iter",
            "extra": "iterations: 17396\ncpu: 40219.22280984081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200324.1886899821,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 200314.606422279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161701.6684393072,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 161694.3815028894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159035.8448942628,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159016.19285876592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160029.23984481153,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 160017.00136923773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 281267.5421348087,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 281234.0690208645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1097899.6640501586,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1097828.2574568337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 919812.7135347816,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919786.3337713566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 904791.2435566861,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 904745.3608247538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 913691.3955612477,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 913634.0731070527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 598131.3222506273,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 598074.7655584032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 902678.3024452904,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 902616.0875160808 ns\nthreads: 1"
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
        "date": 1705952875521,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14597.54777528069,
            "unit": "ns/iter",
            "extra": "iterations: 44500\ncpu: 14597.382022471913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117568.7486831139,
            "unit": "ns/iter",
            "extra": "iterations: 7214\ncpu: 117566.9115608539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 221585.41821418688,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 221582.09107097436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 322599.7232610447,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 322599.28945400147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 425628.50146915263,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 425607.05190989206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527668.669702481,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 527656.1020036432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 509238.7579999809,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509243.6000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 587846.5850000225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587839.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 671080.5133767263,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 671066.0882140284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11299.677730936322,
            "unit": "ns/iter",
            "extra": "iterations: 61911\ncpu: 11299.5445074381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9449.212123669342,
            "unit": "ns/iter",
            "extra": "iterations: 73971\ncpu: 9448.990820727055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9456.111334917881,
            "unit": "ns/iter",
            "extra": "iterations: 74469\ncpu: 9456.195195316164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9519.597005172582,
            "unit": "ns/iter",
            "extra": "iterations: 73460\ncpu: 9519.541246937124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15673.911460654617,
            "unit": "ns/iter",
            "extra": "iterations: 44884\ncpu: 15673.587469922464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50730.43792760255,
            "unit": "ns/iter",
            "extra": "iterations: 16078\ncpu: 50730.47020773724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 233158.90841987706,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 233160.71623838137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 185376.75714905447,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 185374.26343154276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 184188.4059662754,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 184188.0890618245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 182244.30842536734,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 182240.22092267647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 446973.8321428654,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 446973.6224489796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3610769.2274509096,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3610665.882352943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2926839.577777707,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2926789.52380953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2911767.7899686475,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2911668.3385579907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2924676.2358492413,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2924617.2955974843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1738095.209737721,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1738060.2996254666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2861405.3827160755,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2861316.358024698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11065488.17525675,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11065367.010309258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5045568.220000405,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5045479.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14352637.040540354,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14352297.297297325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56342.92873688286,
            "unit": "ns/iter",
            "extra": "iterations: 14678\ncpu: 56342.06976427305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 277520.96604137943,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 277518.3376455373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 214127.07659682288,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 214119.76047904076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 213576.16334660267,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 213571.91235059773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 213040.47151663367,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 213042.19482120711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 472872.64231191936,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 472853.3805888772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3669002.814960754,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3668881.8897637865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2970616.0064102085,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2970535.256410246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2972033.4249201715,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2971944.728434497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2964183.8407640792,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2964077.388535046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1779480.6216215875,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1779380.5019304964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2888878.8850930277,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2888822.9813664714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11321532.64210573,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11321063.157894764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5164553.7499996405,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5164417.999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50087.46142125415,
            "unit": "ns/iter",
            "extra": "iterations: 16408\ncpu: 50084.70867869325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 231544.75148569775,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 231539.8433279306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 189559.12076225443,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 189549.90028805684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 187346.0125192217,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 187339.31473753677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 182887.80591893292,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 182877.80398884712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 433243.72613691434,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 433227.6361819099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3605452.6395350313,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3605248.4496123865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2930758.9999999614,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2930646.226415087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2934250.984276475,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2934171.069182394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2921647.626959202,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2921490.5956112877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1726128.6356877794,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1726044.2379182135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2851510.5368095217,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2851382.8220858932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5781.344469154049,
            "unit": "ns/iter",
            "extra": "iterations: 121410\ncpu: 5781.214068033915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32181.985697257805,
            "unit": "ns/iter",
            "extra": "iterations: 21814\ncpu: 32179.68277253155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25376.254421569207,
            "unit": "ns/iter",
            "extra": "iterations: 27592\ncpu: 25374.91301826622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25258.23028903225,
            "unit": "ns/iter",
            "extra": "iterations: 27713\ncpu: 25256.857792371593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20427.605442176264,
            "unit": "ns/iter",
            "extra": "iterations: 34251\ncpu: 20426.875127733456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126009.0277327418,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 126003.15144966633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 230424.7096242689,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 230414.43638760483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61804.53942164669,
            "unit": "ns/iter",
            "extra": "iterations: 11377\ncpu: 61803.71802759901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61800.12478000626,
            "unit": "ns/iter",
            "extra": "iterations: 11364\ncpu: 61796.8848996826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61400.98245460224,
            "unit": "ns/iter",
            "extra": "iterations: 11399\ncpu: 61399.008684972396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 127417.36822972624,
            "unit": "ns/iter",
            "extra": "iterations: 5502\ncpu: 127411.08687750045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115094.94169143509,
            "unit": "ns/iter",
            "extra": "iterations: 6054\ncpu: 115090.23785926728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38277.81985234017,
            "unit": "ns/iter",
            "extra": "iterations: 18285\ncpu: 38276.33579436683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 188082.47922811832,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 188075.2077191111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152786.12480908225,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 152777.9620336036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 150963.57229046104,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 150961.77547942186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151852.12882237483,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 151849.85903274923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 271480.79061655793,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 271480.6514152739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1040355.9732142957,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1040335.1190476271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 883621.7037974511,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 883570.0000000129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 880752.4499999885,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 880705.1249999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 886839.4123580045,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 886827.3644388338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 582912.3063438887,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 582911.4357262065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 867679.3933002314,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 867652.109181146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39624.10283211483,
            "unit": "ns/iter",
            "extra": "iterations: 17125\ncpu: 39621.95620437903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 196467.97614369757,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 196458.29357283184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 157730.92051630333,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 157720.19927536158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 155984.99510130493,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 155977.57737697617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156726.69885727705,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 156718.88863992743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 275196.7556951869,
            "unit": "ns/iter",
            "extra": "iterations: 2546\ncpu: 275183.3464257682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1048847.4107945962,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1048772.4137931182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 877012.284461142,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 877004.6365914805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 878483.5940223683,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 878442.4657534161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 880529.7782002136,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 880494.5500633752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 583824.1944908602,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 583828.7979966543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 873274.043804768,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 873279.224030047 ns\nthreads: 1"
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
        "date": 1705954897818,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14450.513396074764,
            "unit": "ns/iter",
            "extra": "iterations: 48559\ncpu: 14450.178133816595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117007.51955000969,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 117002.01673754973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 216977.36429826985,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 216967.00979161434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 315870.90446561284,
            "unit": "ns/iter",
            "extra": "iterations: 2732\ncpu: 315870.75402635423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 416168.515093442,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 416144.51365596545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 516305.40474778484,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 516291.4540059346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 615874.9489723463,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 615867.3281360733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 574979.7910000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574970.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 656976.9420000283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656962.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11327.00798596116,
            "unit": "ns/iter",
            "extra": "iterations: 62109\ncpu: 11327.105572461289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9441.155553758736,
            "unit": "ns/iter",
            "extra": "iterations: 74193\ncpu: 9440.963433207995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9331.758747674066,
            "unit": "ns/iter",
            "extra": "iterations: 75220\ncpu: 9331.741558096253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9460.410450479154,
            "unit": "ns/iter",
            "extra": "iterations: 74121\ncpu: 9460.298700773053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15586.464001969267,
            "unit": "ns/iter",
            "extra": "iterations: 44683\ncpu: 15586.307991853733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49649.81193136809,
            "unit": "ns/iter",
            "extra": "iterations: 16377\ncpu: 49648.98943640472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 234980.66464257363,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 234978.8573005796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 183782.97065170362,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 183780.64307293936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 181661.00896478762,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 181657.22518676674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 178454.12974816267,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 178449.31711480996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 435017.278165556,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 435016.65004984924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3576103.972973109,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3575991.5057914993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2893736.8629282257,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2893716.8224299075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2871416.737654283,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2871384.2592592645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2861155.74074077,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2861114.197530866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1688075.2906765265,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1688056.4899451511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2805511.4212120865,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2805426.969696967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10780215.111111315,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10780169.696969695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5024561.120000044,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5024429.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14474463.106666917,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14474165.333333295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56787.18412698818,
            "unit": "ns/iter",
            "extra": "iterations: 14490\ncpu: 56785.79710144938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 271061.1405115162,
            "unit": "ns/iter",
            "extra": "iterations: 3167\ncpu: 271060.87780233624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 211102.30073892628,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 211096.08374384113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 211414.31575053433,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 211415.60266206507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 208923.30786187426,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 208917.1687484687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 470068.04223064333,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 470060.7471575522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3625636.276264238,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3625599.6108949417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2920936.7805641163,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2920859.874608155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2900501.579439375,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2900520.8722741464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2883653.4551083185,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2883567.801857585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1721255.2226346848,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1721206.122448976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2822811.0942246728,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2822737.3860182366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11012759.938144535,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11012449.484536093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5077590.570000439,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5077351.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49520.80757859661,
            "unit": "ns/iter",
            "extra": "iterations: 16573\ncpu: 49519.59210764492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 230818.70101713526,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 230810.49250535297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 186636.74409448323,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 186624.03762029795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 187802.52166262484,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 187794.61183197694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 179734.7154643525,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 179720.71081023954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 428106.1882411086,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 428089.52569170075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3601307.6756755686,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3601212.741312735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2896114.383900809,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2896075.851393181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2879514.7469137236,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2879413.2716049314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2883393.4228392383,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2883330.246913579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1676204.7346570245,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1676148.0144404382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2808919.265861131,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2808815.1057401774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5661.133260266798,
            "unit": "ns/iter",
            "extra": "iterations: 124088\ncpu: 5661.060698858889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31824.430616789767,
            "unit": "ns/iter",
            "extra": "iterations: 22001\ncpu: 31824.01254488423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24442.228337113007,
            "unit": "ns/iter",
            "extra": "iterations: 28655\ncpu: 24442.11481416852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25230.28008358594,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 25229.496325118715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20250.388757017852,
            "unit": "ns/iter",
            "extra": "iterations: 34546\ncpu: 20249.808950384813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122797.92155142564,
            "unit": "ns/iter",
            "extra": "iterations: 5698\ncpu: 122797.75359775439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 239465.1716137815,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 239462.1972023214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62119.27792552605,
            "unit": "ns/iter",
            "extra": "iterations: 11280\ncpu: 62118.501773050426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61776.06057133087,
            "unit": "ns/iter",
            "extra": "iterations: 11342\ncpu: 61774.73990477805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61636.97474925534,
            "unit": "ns/iter",
            "extra": "iterations: 11366\ncpu: 61636.44202005926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126409.86845931008,
            "unit": "ns/iter",
            "extra": "iterations: 5504\ncpu: 126410.62863372188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 114201.59349991303,
            "unit": "ns/iter",
            "extra": "iterations: 6123\ncpu: 114198.54646415116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38255.91078554348,
            "unit": "ns/iter",
            "extra": "iterations: 18293\ncpu: 38255.47477177048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 187786.4381029067,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 187784.21757770772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 156606.03687150765,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 156603.28491620213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 152602.65474374048,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 152596.70665212878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 152512.63258646356,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 152511.768544703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 264044.77970575687,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 264033.34590720513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1043269.6761194532,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1043266.4179104458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 876406.5814535344,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 876384.711779445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 868048.5278810258,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 868015.6133828994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 865481.864427953,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 865434.3283582082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 579129.136476424,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 579105.624483041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 860877.2432097917,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 860859.6296296183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39031.39445807598,
            "unit": "ns/iter",
            "extra": "iterations: 17936\ncpu: 39030.16837644943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 196671.33136426573,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 196667.17299577937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159255.66491548956,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 159245.72864321416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156940.96426163567,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 156934.77185884563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157598.4496176207,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 157593.94961763275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 268071.9164110339,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 268059.9309815942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1043607.4165413526,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1043570.225563909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 877115.281210492,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 877085.4981084376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 865937.1211372282,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 865921.1372064312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 867757.0835411054,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 867721.9451371449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 573944.3199343462,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 573927.6456111555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 863419.7335812339,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 863398.5130111518 ns\nthreads: 1"
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
        "date": 1705956442890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14608.612895852932,
            "unit": "ns/iter",
            "extra": "iterations: 48124\ncpu: 14607.545091846066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118548.25482995037,
            "unit": "ns/iter",
            "extra": "iterations: 6263\ncpu: 118542.58342647292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222784.3669230768,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 222776.5128205128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 328926.6779916935,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 328911.47602868994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 433856.8023656897,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 433839.5761458844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 533177.143119252,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 533167.8899082568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 510871.6489999665,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510868.49999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 595038.2209999816,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595009.2000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 678153.4485025288,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 678122.2790357927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11697.33541378111,
            "unit": "ns/iter",
            "extra": "iterations: 59923\ncpu: 11696.924386295741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9784.37840972619,
            "unit": "ns/iter",
            "extra": "iterations: 71560\ncpu: 9784.188093907214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9675.013559836914,
            "unit": "ns/iter",
            "extra": "iterations: 72346\ncpu: 9674.751886766384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9671.743569951524,
            "unit": "ns/iter",
            "extra": "iterations: 72550\ncpu: 9671.4927636113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15811.627592587854,
            "unit": "ns/iter",
            "extra": "iterations: 44309\ncpu: 15811.512333837374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50526.062717120476,
            "unit": "ns/iter",
            "extra": "iterations: 16120\ncpu: 50525.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 239465.42724719405,
            "unit": "ns/iter",
            "extra": "iterations: 3560\ncpu: 239464.1011235956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195569.86899863667,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 195568.3813443075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 186258.52183453977,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 186253.89510642915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 184497.7244521665,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 184492.99197222822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 454005.4060860371,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 453998.373557188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3629740.078124888,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3629631.250000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2927526.3639240987,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2927461.075949376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2957455.2961782287,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2957399.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2923301.993690875,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2923252.0504731904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1762919.535372912,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1762898.2791586954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2869548.3881987208,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2869443.1677018697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11315115.936170327,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11314941.489361705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5043424.689999938,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5043306.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14676418.291666474,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14676063.88888888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56577.37589383845,
            "unit": "ns/iter",
            "extra": "iterations: 14544\ncpu: 56576.148239823815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 274363.92121210904,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 274362.1371610845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 221239.77089782813,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 221236.91950464353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 217001.94485201978,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 217000.25297242767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 217234.32403651465,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 217230.1724137918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 480482.50362924364,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 480477.9452819633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3683886.059523697,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3683828.571428566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2970195.7515923786,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2970094.2675159215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2996125.493589866,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2996073.0769230756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2944327.3186119674,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2944237.2239747527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1784117.028846201,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1784095.3846153968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2904085.8629284124,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2903964.48598129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11433224.204301462,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11432750.537634455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5113937.849999957,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5113859.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50153.56605397542,
            "unit": "ns/iter",
            "extra": "iterations: 16267\ncpu: 50153.16284502352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241651.84845915055,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 241650.43822448424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 191319.34169840586,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 191317.79072372895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 190128.886220828,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 190125.02244165225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 184353.57198697195,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 184350.66232356182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 440373.74268106115,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 440370.92963533784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3631226.5136186914,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3631055.2529182876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2950393.9936707965,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2950307.2784810113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2955875.133333364,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2955803.1746031726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2928134.477987436,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2928135.5345911854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1764731.5643940105,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1764670.0757575654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2876069.4369230596,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2875955.6923076976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5791.805874174669,
            "unit": "ns/iter",
            "extra": "iterations: 120834\ncpu: 5791.696873396515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32885.61946860905,
            "unit": "ns/iter",
            "extra": "iterations: 21265\ncpu: 32884.749588525614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25914.017231177946,
            "unit": "ns/iter",
            "extra": "iterations: 27044\ncpu: 25913.592663807125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24516.146248381072,
            "unit": "ns/iter",
            "extra": "iterations: 28561\ncpu: 24515.118518259253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20592.78657067037,
            "unit": "ns/iter",
            "extra": "iterations: 34030\ncpu: 20592.57713781962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130249.26290383101,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 130248.6817675459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 245246.64095370474,
            "unit": "ns/iter",
            "extra": "iterations: 2852\ncpu: 245236.60589060292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62846.440981543026,
            "unit": "ns/iter",
            "extra": "iterations: 11166\ncpu: 62845.7191474114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62989.0233836426,
            "unit": "ns/iter",
            "extra": "iterations: 10734\ncpu: 62987.52561952612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62760.72955239088,
            "unit": "ns/iter",
            "extra": "iterations: 11126\ncpu: 62760.16537839324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130501.15092231489,
            "unit": "ns/iter",
            "extra": "iterations: 5367\ncpu: 130498.08086454342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116977.22464010984,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 116975.34315366516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39645.298411797885,
            "unit": "ns/iter",
            "extra": "iterations: 17630\ncpu: 39644.180374362084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 188100.91321979364,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 188094.7283049491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 153595.60264318384,
            "unit": "ns/iter",
            "extra": "iterations: 4540\ncpu: 153592.73127753285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 153981.03383870792,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 153976.88420127434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153406.50940096888,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 153403.4105815485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 275216.1199059625,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 275206.2304075218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1066083.3770991636,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1066062.9007633706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 894365.1024328143,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 894346.6069142055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 888558.6666667185,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 888541.4758269757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 887361.6424010727,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 887345.3384418898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 598888.0990606244,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 598861.9982920511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 884606.4924242544,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 884594.3181818188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39675.52457155354,
            "unit": "ns/iter",
            "extra": "iterations: 17622\ncpu: 39674.56020883043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 198966.45100825766,
            "unit": "ns/iter",
            "extra": "iterations: 3521\ncpu: 198961.88582789066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159111.38718472738,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 159107.8164053615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156280.07877705534,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 156275.47422450525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158231.56518771703,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 158229.41979522185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 272865.52902220003,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 272860.2259446804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1066729.7990868026,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1066709.2846270949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 898509.8485237126,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 898490.5006418355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 886919.851898745,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 886910.6329113825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 884960.458808624,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 884930.4182509469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 587797.5062972031,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 587785.2225020886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 883859.3062261312,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 883855.7814485369 ns\nthreads: 1"
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
        "date": 1705957958825,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14397.153143703088,
            "unit": "ns/iter",
            "extra": "iterations: 48621\ncpu: 14396.411015816213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 115268.84618517503,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 115260.22264458322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 217335.94620965247,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 217331.8488866651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 315669.8335162897,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 315658.8730332968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 416704.4846301508,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 416677.47358309344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517570.27817317756,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 517549.4661921707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 502458.81900002586,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502431.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 576049.3990000554,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575990.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 654886.8180000227,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654877.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11410.916451446446,
            "unit": "ns/iter",
            "extra": "iterations: 61952\ncpu: 11410.185304752065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9576.504298972835,
            "unit": "ns/iter",
            "extra": "iterations: 73157\ncpu: 9575.88064026682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9417.236939547798,
            "unit": "ns/iter",
            "extra": "iterations: 74538\ncpu: 9416.91083742522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9503.549445620938,
            "unit": "ns/iter",
            "extra": "iterations: 73596\ncpu: 9502.873797488995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15777.621669461747,
            "unit": "ns/iter",
            "extra": "iterations: 43499\ncpu: 15776.712108324335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50824.1018969184,
            "unit": "ns/iter",
            "extra": "iterations: 16026\ncpu: 50819.855235242736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 234491.91223256767,
            "unit": "ns/iter",
            "extra": "iterations: 3646\ncpu: 234483.68074602316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 183740.84681584334,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 183724.8924268504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 184394.52509151652,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 184385.63428817547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 182153.94874545807,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 182147.4801629848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 441466.9276315643,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 441455.21255060687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3579449.3513513245,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3579308.1081081093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2886768.28348886,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2886625.545171345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2852284.224615267,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2852158.4615384657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2851165.4846629067,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2851068.4049079665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1685364.9452554882,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1685281.0218978105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2797382.4048339394,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2797315.105740179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10828091.806122674,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10827605.102040794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6429927.576389123,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6429689.583333317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14004326.600000544,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14003657.333333356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54793.05157115274,
            "unit": "ns/iter",
            "extra": "iterations: 14989\ncpu: 54791.09346854356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 271868.3559429674,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 271860.19017432595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 213159.04759531867,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 213148.3428856212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 214187.21489255503,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 214182.45877061484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 214634.46460843677,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 214626.0291164656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 470929.66884888307,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 470912.4386252049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3629663.894531454,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3629520.3124999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2946175.9303798536,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2946031.645569616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2913947.4124999507,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2913838.125000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2874207.2345680976,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2874141.9753086367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1713341.708487043,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1713342.6199261933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2829236.814024539,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2829075.60975609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10963264.833333615,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 10962936.458333313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525658.307691787,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6525480.419580435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52579.95670911658,
            "unit": "ns/iter",
            "extra": "iterations: 15546\ncpu: 52575.60787340789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 233791.150628754,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 233780.80918534813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 189133.95369962326,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 189120.75764288855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 192299.909759359,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 192287.4108734399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 181535.88279249112,
            "unit": "ns/iter",
            "extra": "iterations: 4684\ncpu: 181523.71904355258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 436046.5269192132,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 436024.82552343095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3596011.347490293,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3595756.756756748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2915691.649999985,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2915498.7499999898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2865231.8984614583,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2865152.3076922996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2863953.519999996,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2863748.9230769123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1684966.3611614176,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1684912.5226860354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2800734.150150128,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2800469.969969961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5775.468749742553,
            "unit": "ns/iter",
            "extra": "iterations: 121391\ncpu: 5775.277409363119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32338.79714760278,
            "unit": "ns/iter",
            "extra": "iterations: 21666\ncpu: 32336.430351703133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26102.68240215047,
            "unit": "ns/iter",
            "extra": "iterations: 26776\ncpu: 26102.061547654546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24925.05498146881,
            "unit": "ns/iter",
            "extra": "iterations: 28064\ncpu: 24922.790763968125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20208.74912620348,
            "unit": "ns/iter",
            "extra": "iterations: 34619\ncpu: 20208.226696322785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126705.19883360012,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 126701.0023692361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 241387.02073253176,
            "unit": "ns/iter",
            "extra": "iterations: 2894\ncpu: 241387.18037318328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61874.39066490896,
            "unit": "ns/iter",
            "extra": "iterations: 11355\ncpu: 61872.92822545099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61536.937285601845,
            "unit": "ns/iter",
            "extra": "iterations: 11369\ncpu: 61534.65564253608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61790.59332574331,
            "unit": "ns/iter",
            "extra": "iterations: 11417\ncpu: 61785.4164841911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125649.77465040787,
            "unit": "ns/iter",
            "extra": "iterations: 5578\ncpu: 125642.2732162062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 114763.41308287693,
            "unit": "ns/iter",
            "extra": "iterations: 6069\ncpu: 114763.48657109831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39614.18817846077,
            "unit": "ns/iter",
            "extra": "iterations: 17595\ncpu: 39612.56606990687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192610.26198345143,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 192607.35537190398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 156321.52749944222,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 156320.0623469171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 154045.40527472587,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 154042.52747252892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153413.37352038373,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 153404.27444103512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 283024.8617546364,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 283009.2290163318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1058410.3101361718,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1058370.4992435854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 885302.2083333614,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 885248.6111111142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 864240.7407406877,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 864196.6666666688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 869729.0868486724,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 869705.9553349798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 573450.5049181056,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 573421.5573770449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 867214.1670823427,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 867169.7007481225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39484.5937306574,
            "unit": "ns/iter",
            "extra": "iterations: 17769\ncpu: 39482.54263042369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 202154.86787488687,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 202149.78076585825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159931.34778639296,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 159921.06344135184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156834.27708146605,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 156826.2309758297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157784.27496611653,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 157772.79710799563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 271937.73361769563,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 271929.507561072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1061497.3712122403,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1061468.7878787972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 881297.7651516439,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 881297.2222222253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 865568.3333333601,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 865521.7283950659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 881496.4987561441,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 881396.268656722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 575647.3607230864,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 575647.7403451217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 873134.9699624121,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 873094.1176470482 ns\nthreads: 1"
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
        "date": 1705959718117,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14488.648708943017,
            "unit": "ns/iter",
            "extra": "iterations: 48410\ncpu: 14487.994216071062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 115172.64207242503,
            "unit": "ns/iter",
            "extra": "iterations: 7373\ncpu: 115168.03200868034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 218664.2462462331,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218660.66066066068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 316922.30755065347,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 316912.2283609575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 416911.8589990845,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 416901.92492781515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517564.77949946065,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 517542.6102502983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 623907.9410092374,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 623885.9985785363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 577769.0740000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577732.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 658973.0370000098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658960.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11502.712162362755,
            "unit": "ns/iter",
            "extra": "iterations: 60753\ncpu: 11502.780109624216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9669.22404106184,
            "unit": "ns/iter",
            "extra": "iterations: 72085\ncpu: 9668.777138100859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9557.835964001117,
            "unit": "ns/iter",
            "extra": "iterations: 73112\ncpu: 9557.420122551699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9549.01038194592,
            "unit": "ns/iter",
            "extra": "iterations: 73204\ncpu: 9548.561554013448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15838.981122251813,
            "unit": "ns/iter",
            "extra": "iterations: 44179\ncpu: 15838.866882455466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49782.17946362506,
            "unit": "ns/iter",
            "extra": "iterations: 16332\ncpu: 49781.20867009552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 237840.88056792758,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 237839.58797327415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 185561.3042333823,
            "unit": "ns/iter",
            "extra": "iterations: 4559\ncpu: 185551.91928054378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 184502.58552914736,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184501.6198704107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 179980.55107242646,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 179977.59609258847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 428048.9578017317,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 428039.4013738951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3527371.62737644,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3527307.604562736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2870150.9969136855,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2870103.7037037113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2872112.913312694,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2872080.8049535556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2844272.428134569,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2844156.8807339473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1713504.0962963793,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1713457.0370370357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2797688.9665651997,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2797601.5197568396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11007870.587628325,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11007631.958762892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6565886.971830897,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6565856.338028172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14285819.810810596,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14285574.324324297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55648.88758956356,
            "unit": "ns/iter",
            "extra": "iterations: 14794\ncpu: 55647.86399891831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 273699.97511165554,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 273694.001276324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 216055.02265862742,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 216054.4058408863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 213739.56612704042,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 213739.80074719703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 211419.4704141916,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 211412.9684418136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 463658.53544576763,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 463647.85177229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3597094.961389801,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3597061.0038610105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2923148.232704571,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2923100.6289308015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2916496.499999925,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2916378.616352215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2881672.6543209227,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2876204.32098767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1747433.4962262562,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1747412.4528301856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2828640.3262195257,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2828496.646341449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11199056.126315553,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11198981.052631639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6586293.253521272,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6586088.732394352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49754.46039875339,
            "unit": "ns/iter",
            "extra": "iterations: 16401\ncpu: 49752.83824157075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 233739.95175795612,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 233736.08612701014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 190276.01374418038,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 190273.5535358005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 188629.23102310544,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 188626.5566556655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 182347.73555129147,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 182340.30710172624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 419283.3880814101,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 419275.9205426367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3544798.198473153,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3544757.251908378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2880550.533950484,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2880533.024691366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2873692.6492305985,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2873650.769230774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2833772.480243388,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2833757.75075988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1724873.9777365879,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1724853.4322820036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2799414.116766511,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2799337.1257485054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5775.80447944788,
            "unit": "ns/iter",
            "extra": "iterations: 121890\ncpu: 5775.738780867995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31952.047924919523,
            "unit": "ns/iter",
            "extra": "iterations: 21951\ncpu: 31950.858730809574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24136.744633938433,
            "unit": "ns/iter",
            "extra": "iterations: 29025\ncpu: 24136.223944874957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 23906.110455999624,
            "unit": "ns/iter",
            "extra": "iterations: 29342\ncpu: 23905.07463703888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20224.246753247888,
            "unit": "ns/iter",
            "extra": "iterations: 34650\ncpu: 20224.025974025863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 124857.95077580308,
            "unit": "ns/iter",
            "extra": "iterations: 5607\ncpu: 124853.16568575051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 239946.91338582232,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 239940.73947278614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60922.555401185455,
            "unit": "ns/iter",
            "extra": "iterations: 11516\ncpu: 60922.09100382139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61348.992709266546,
            "unit": "ns/iter",
            "extra": "iterations: 11110\ncpu: 61346.318631863636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61332.297933815054,
            "unit": "ns/iter",
            "extra": "iterations: 11422\ncpu: 61331.56189809115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 120997.83722135084,
            "unit": "ns/iter",
            "extra": "iterations: 5787\ncpu: 120995.97373423241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113858.30294643216,
            "unit": "ns/iter",
            "extra": "iterations: 6143\ncpu: 113858.81491128074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38874.16678728519,
            "unit": "ns/iter",
            "extra": "iterations: 17963\ncpu: 38872.80521071041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184460.70547944424,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 184456.87565859087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 153408.7851366261,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153406.71038251446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 152113.81508940068,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 152114.54426515443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153209.04448826617,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 153204.4049967137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 269180.76837246335,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 269168.0646402451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1030215.2914202597,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1030205.177514807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 862405.2009988046,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 862384.6441947499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 861528.5062034987,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 861518.6104218354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 859942.8488943486,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 859936.6093366209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 582658.327910983,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 582630.7363013771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 855296.6544566938,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 855277.899877897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39941.72102710674,
            "unit": "ns/iter",
            "extra": "iterations: 17525\ncpu: 39940.228245364284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195265.34502922,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 195259.2314118657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 157328.98182224185,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 157321.85816876148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 155005.45337478656,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 155000.7326820617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157452.58761499167,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 157445.99506394254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 275551.3427561688,
            "unit": "ns/iter",
            "extra": "iterations: 2547\ncpu: 275540.9501374205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1045615.8980509397,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1045608.3958021039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 874933.623588422,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 874902.007528228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 860523.1904176195,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 860495.2088452101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 867773.039555031,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 867759.2088998767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 589681.5155332016,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 589668.5138539118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 864133.2768850985,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 864126.0815822004 ns\nthreads: 1"
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
        "date": 1705961441103,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14552.013459007478,
            "unit": "ns/iter",
            "extra": "iterations: 47849\ncpu: 14551.564296014545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118283.31724329987,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 118280.32924107145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222289.2689849194,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 222280.43978522118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 324083.4649155713,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 324063.03939962486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 426623.5687622516,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 426606.28683693527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527588.2414841407,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 527578.5888077859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 513158.9260000737,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513130.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 589164.4989999349,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589148.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 670530.2716050039,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 670502.7596223677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11494.266694092432,
            "unit": "ns/iter",
            "extra": "iterations: 60770\ncpu: 11494.1270363666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9627.29775435081,
            "unit": "ns/iter",
            "extra": "iterations: 72852\ncpu: 9627.058968868394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9503.653301822345,
            "unit": "ns/iter",
            "extra": "iterations: 73626\ncpu: 9503.410479993492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9570.703052553143,
            "unit": "ns/iter",
            "extra": "iterations: 73545\ncpu: 9570.201917193532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15903.340177088849,
            "unit": "ns/iter",
            "extra": "iterations: 43933\ncpu: 15902.556165069562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49930.80784096901,
            "unit": "ns/iter",
            "extra": "iterations: 16299\ncpu: 49929.89140438067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 234535.91854705368,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 234520.30820033012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 192326.9339293657,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 192321.0859136498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 184789.27560922212,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 184783.52383006213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 180053.3822597764,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 180050.43294614527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 437471.7362086169,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 437459.0772316952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3739133.3895584466,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3738933.333333345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2978275.8806453375,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2978214.193548387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2954622.9265173324,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2954518.2108626147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2947579.9238096243,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2947461.9047619053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1746172.861163277,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1746107.8799249523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2910070.6050158152,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2910022.8840125413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11136649.302083394,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11136197.916666646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5174918.779999871,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5174786.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14423711.315069104,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14423047.945205467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56328.16489143494,
            "unit": "ns/iter",
            "extra": "iterations: 14646\ncpu: 56327.12686057617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 271834.6483238678,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 271827.19797596463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 213006.16268063115,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 212991.87842550955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 212907.136206039,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 212897.62258543939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 211362.65926473262,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 211355.3910683436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 469566.79317810177,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 469534.7590687603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3789408.369918763,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789241.463414652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3052534.750819535,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3052434.426229515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3008169.8129034494,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3007972.903225805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3079942.0607027146,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 3079839.2971245977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1770841.1870229028,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1770721.183206119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2930847.369085078,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2930663.722397495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11310968.776595406,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11310018.085106336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5021678.919999885,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5021322.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50113.64295676275,
            "unit": "ns/iter",
            "extra": "iterations: 16491\ncpu: 50111.26068764779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 232884.2281659596,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 232869.5960698698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 188520.52978817868,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 188505.56045895873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 188736.3529151925,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 188725.72879858754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 178679.66316230161,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 178671.08915054664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 429231.9175715667,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 429212.68509378063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3737775.244000204,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3737530.8000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3008261.035483883,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3008018.709677403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2958006.241269975,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2957866.0317460233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2971053.1719745914,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2970834.07643312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1744165.7448404701,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1744075.2345215774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2987375.8785045273,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2987340.809968866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5640.425522351311,
            "unit": "ns/iter",
            "extra": "iterations: 124581\ncpu: 5640.423499570556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32006.48575465758,
            "unit": "ns/iter",
            "extra": "iterations: 21937\ncpu: 32005.720928112267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25324.338787922294,
            "unit": "ns/iter",
            "extra": "iterations: 27622\ncpu: 25324.332054159822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24116.28606862343,
            "unit": "ns/iter",
            "extra": "iterations: 29028\ncpu: 24116.277387350194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20310.88858270239,
            "unit": "ns/iter",
            "extra": "iterations: 34474\ncpu: 20310.23379938509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 124654.38045031246,
            "unit": "ns/iter",
            "extra": "iterations: 5596\ncpu: 124643.19156540277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 248858.0572342722,
            "unit": "ns/iter",
            "extra": "iterations: 2813\ncpu: 248843.54781372278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62329.73587092145,
            "unit": "ns/iter",
            "extra": "iterations: 11218\ncpu: 62325.824567659205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62092.772715163504,
            "unit": "ns/iter",
            "extra": "iterations: 11259\ncpu: 62088.46256328304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62215.9219373726,
            "unit": "ns/iter",
            "extra": "iterations: 11273\ncpu: 62215.23108311864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 127737.8372516808,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127731.20102059624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116387.93175025006,
            "unit": "ns/iter",
            "extra": "iterations: 6022\ncpu: 116382.64696114216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38943.55556789433,
            "unit": "ns/iter",
            "extra": "iterations: 18005\ncpu: 38942.35490141645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 189977.47649745145,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 189965.7802847168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 153309.87785587073,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 153293.1458699478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151887.16529461037,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 151874.80502599815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 152076.34290687012,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 152062.7502175821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 274383.12602418254,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 274362.03667576984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1085380.3608088596,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1085366.7185069926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 907256.1380644989,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 907222.8387096784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 890078.0551989374,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 890018.2284980643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 885961.8481013265,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 885906.7088607551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 589903.7030201537,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 589867.7013422851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 882472.5469544134,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 882444.1624365392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39354.865962585965,
            "unit": "ns/iter",
            "extra": "iterations: 17801\ncpu: 39352.23863827869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195670.65958043415,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 195670.76923076904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 157103.85842694857,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 157100.67415730163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156848.01869574527,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 156848.0747829936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157152.69694223825,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 157141.9479048671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 275900.2514851162,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 275888.0396039603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1134426.5381026664,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1134353.4992224078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 904524.5062762348,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 904456.206415628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 886849.2746836338,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 886797.4683544291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 890427.9244557652,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 890393.0857874517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 597855.6003415865,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 597829.0350128063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 888150.1078680137,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 888109.7715736097 ns\nthreads: 1"
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
        "date": 1705963179173,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14475.06915734378,
            "unit": "ns/iter",
            "extra": "iterations: 48715\ncpu: 14475.083649799857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 121893.92494481069,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 121891.68046357617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 215742.21709870722,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 215736.14157527426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 317302.43618977646,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 317280.80176535493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 419068.3256373463,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 419054.0163540164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 518211.2046678681,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 518182.0466786354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 617088.8834399472,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 617058.7775408678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 578502.9959999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578500.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 659968.0636168778,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 659941.6726233023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11437.18163819617,
            "unit": "ns/iter",
            "extra": "iterations: 61116\ncpu: 11436.676156816528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9607.387128537312,
            "unit": "ns/iter",
            "extra": "iterations: 73123\ncpu: 9607.010106259315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9476.435396264058,
            "unit": "ns/iter",
            "extra": "iterations: 73827\ncpu: 9475.9586601108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9583.43349996557,
            "unit": "ns/iter",
            "extra": "iterations: 73015\ncpu: 9583.00212285147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16177.108601356616,
            "unit": "ns/iter",
            "extra": "iterations: 43342\ncpu: 16176.75464907017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49761.00042803003,
            "unit": "ns/iter",
            "extra": "iterations: 16354\ncpu: 49759.184297419626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 239112.2951233174,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 239097.19730941745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 187112.99322403697,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 187107.4098360651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 184781.77611617162,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 184770.3511053322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 184073.03021147923,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 184068.17004747517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 472679.9907508449,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 472646.68117519055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3553471.4656488155,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3553343.8931297795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2858420.12615376,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2858259.69230769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2879746.4440993746,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2879563.3540372625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2847012.9141104794,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2846900.920245402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1685532.5364964346,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1685407.8467153327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2799167.909365555,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2799014.5015105745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10822507.898990467,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10822038.38383836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6576405.7375883935,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6576216.31205673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14397120.432431005,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14396582.432432437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56474.774191320634,
            "unit": "ns/iter",
            "extra": "iterations: 14499\ncpu: 56471.21870473816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 283241.1638585768,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 283225.76808721374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 217379.01447067884,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 217367.1490225951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 215166.23996990826,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 215153.0591775336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 214714.96163489987,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 214705.5667000994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 502782.36095016263,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 502753.88180764933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3609110.4902725206,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3609033.852140077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2910525.8307209997,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2910378.9968651906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2926295.4056602893,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2926251.8867924395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2888057.618012472,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2887884.7826087107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1720859.1521336657,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1720785.1576994373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2826578.158054676,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2826514.893617021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11050151.484535482,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11049509.27835047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6576472.71830997,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6576259.154929582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51582.48435049602,
            "unit": "ns/iter",
            "extra": "iterations: 15943\ncpu: 51581.070062096005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 237704.45469431122,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 237179.50327510963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 190416.49545758392,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 190412.18701528807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 192737.76183000195,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 192723.36846826744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 185139.30060554532,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 185134.79671280328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 463998.4255776378,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 463966.1472326715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3580711.1038458026,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3580611.538461544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2877925.5339506203,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2877752.4691358176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2881476.3622291707,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2881409.5975232087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2874551.604938101,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2874480.24691358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1687647.6884059424,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1687548.5507246384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2801434.951952164,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2801345.6456456487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5693.478038689575,
            "unit": "ns/iter",
            "extra": "iterations: 122306\ncpu: 5693.086193645436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31982.0729203834,
            "unit": "ns/iter",
            "extra": "iterations: 22408\ncpu: 31980.716708318225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25298.874449027775,
            "unit": "ns/iter",
            "extra": "iterations: 28586\ncpu: 25297.09997901092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25749.51490758336,
            "unit": "ns/iter",
            "extra": "iterations: 28945\ncpu: 25748.17757816519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20402.882708088055,
            "unit": "ns/iter",
            "extra": "iterations: 34120\ncpu: 20401.682297772786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 133292.95503905538,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 133287.00704896197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 240874.19821058994,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 240860.4611149384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61238.76466479619,
            "unit": "ns/iter",
            "extra": "iterations: 11456\ncpu: 61236.88896648071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62009.86569019144,
            "unit": "ns/iter",
            "extra": "iterations: 11265\ncpu: 62007.723035951654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61469.559933313656,
            "unit": "ns/iter",
            "extra": "iterations: 11396\ncpu: 61466.55844155792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124355.97727272258,
            "unit": "ns/iter",
            "extra": "iterations: 5632\ncpu: 124351.54474431765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 102887.11667155799,
            "unit": "ns/iter",
            "extra": "iterations: 6814\ncpu: 102880.98033460528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39210.174332509756,
            "unit": "ns/iter",
            "extra": "iterations: 17828\ncpu: 39208.677361454276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 189995.3415760822,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189982.09239130295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 156744.99015439366,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 156742.7836204977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156915.42672893728,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 156911.05181231655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 154376.16817279236,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154369.16464623995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 281028.6341463391,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 281018.192722911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1050522.687687685,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1050454.2042042005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 873313.6937500774,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 873281.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 866241.6902106919,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 866188.1040892055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 875189.9925280573,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 875175.0933997413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 583270.1076794862,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 583248.9148580926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 863907.501854153,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 863849.6909765166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40188.60862527493,
            "unit": "ns/iter",
            "extra": "iterations: 17298\ncpu: 40186.62851196668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 198270.56296085822,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 198257.288712419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160723.4412640189,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 160714.35768261953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158820.9549059505,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 158810.42374801743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160354.6650641132,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 160349.33608058767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 284741.7728937822,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 284723.2397232425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1052070.2932329809,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1052016.8421052636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 876673.7703045268,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 876670.1776649647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 867207.0173696836,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 867166.8734491341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 871439.9465173503,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 871409.7014925306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 581794.1948589993,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 581783.9966832426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 867616.3779431287,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 867597.6456009934 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}