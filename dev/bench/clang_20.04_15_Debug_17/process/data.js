window.BENCHMARK_DATA = {
  "lastUpdate": 1705772781517,
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
      }
    ]
  }
}