window.BENCHMARK_DATA = {
  "lastUpdate": 1702394245172,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 22.04 Debug c++-17": [
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
        "date": 1702394237833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8379.448274205482,
            "unit": "ns/iter",
            "extra": "iterations: 83266\ncpu: 8379.152355102924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99162.82132930738,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 99161.81102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192619.67766606578,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 192614.6853146854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287798.0663790345,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 287794.55692001333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372194.23928257724,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 372185.38932633435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 463855.5607028785,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 463855.69755058555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553809.840330828,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553797.2010178119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 518240.71199996525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518232.10000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590996.5490000104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590958.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6654.018049490578,
            "unit": "ns/iter",
            "extra": "iterations: 106485\ncpu: 6653.773770953668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5478.865812721456,
            "unit": "ns/iter",
            "extra": "iterations: 127799\ncpu: 5478.873856602944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5443.494227350304,
            "unit": "ns/iter",
            "extra": "iterations: 128797\ncpu: 5443.254113061631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5431.0379581150355,
            "unit": "ns/iter",
            "extra": "iterations: 128352\ncpu: 5430.872911992016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9981.641889772984,
            "unit": "ns/iter",
            "extra": "iterations: 70146\ncpu: 9981.357454452156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47815.501188062466,
            "unit": "ns/iter",
            "extra": "iterations: 17255\ncpu: 47814.47696319906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201663.0499411194,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201657.87985865722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163281.71798261136,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 163280.10955799022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 178837.97397178912,
            "unit": "ns/iter",
            "extra": "iterations: 5033\ncpu: 178833.55851380856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168178.00814138885,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 168178.1175536136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 387107.44310574856,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 387093.70816599776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3128951.3866666616,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3128830.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2525355.191374665,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2525354.9865229055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2549904.2370571923,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2549811.1716621215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2524827.032345145,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524651.2129380107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1474631.0316456354,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1474563.1329113941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465163.7941952134,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465018.2058047494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10221001.295237675,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10220658.095238106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5815444.724999708,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5815312.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12041370.550561849,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12040750.56179776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47839.37392010252,
            "unit": "ns/iter",
            "extra": "iterations: 17247\ncpu: 47836.85858410157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216227.49533182793,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 216215.26621246524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 169293.08128469886,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 169284.81363996878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174018.11963563628,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 174004.51417004038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 171901.83187816784,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 171889.13705583708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 390295.18325079343,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 390272.98514182674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3121166.5050166654,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121043.812709028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2534855.7956403,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2534855.040871932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2554225.5163933807,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2554127.049180321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2529344.8459457387,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529150.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1459401.8880125622,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1459319.242902212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2472018.3430081857,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2471851.1873350865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10386085.915095095,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10385457.54716982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5790397.648148107,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5790336.4197530905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50120.50057551944,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 50116.720179317796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 210148.35220588185,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 210134.75490196116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166488.98558347393,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 166477.63491135798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170985.84249451535,
            "unit": "ns/iter",
            "extra": "iterations: 5003\ncpu: 170972.5164901047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 168959.25347085533,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 168945.8548195157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 381604.94042930723,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381584.18747262383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3112172.0500001023,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111992.6666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2534561.4429345857,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2534361.1413043467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2546609.0953676137,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2546531.6076294235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510076.54032268,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2509896.774193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1486192.8333332452,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1486102.3809523708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2469183.2857142584,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2469002.3809523857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2969.603117723945,
            "unit": "ns/iter",
            "extra": "iterations: 236647\ncpu: 2969.4114017925676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22408.33046659309,
            "unit": "ns/iter",
            "extra": "iterations: 31162\ncpu: 22406.42449136762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17380.141666466057,
            "unit": "ns/iter",
            "extra": "iterations: 41633\ncpu: 17379.177575480986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17247.55937552274,
            "unit": "ns/iter",
            "extra": "iterations: 41827\ncpu: 17246.08267387099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12756.815308516974,
            "unit": "ns/iter",
            "extra": "iterations: 54989\ncpu: 12756.684064085553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 90757.11194609765,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90754.39232961908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 198997.7047591762,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 198984.72499287446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48783.56232126455,
            "unit": "ns/iter",
            "extra": "iterations: 14337\ncpu: 48781.802329636324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49237.38139403766,
            "unit": "ns/iter",
            "extra": "iterations: 14232\ncpu: 49235.848791455945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48537.24024526094,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48535.66053511699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102308.19976738338,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 102307.16778133097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92257.91428193767,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 92253.06606883869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24063.89722815732,
            "unit": "ns/iter",
            "extra": "iterations: 29006\ncpu: 24063.900572295373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115571.44294194657,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115569.17875989452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94101.49428840801,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 94098.44106974882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97015.20091386592,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 97013.23733038125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98584.54295775913,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98581.69014084435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182047.8212710738,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 182043.19066147704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 841308.5832335345,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841298.0838323234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 737036.1968191069,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 737026.6401590463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 700605.9028055884,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700606.3126252509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 694412.1530000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 694391.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 437184.4341036822,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 437178.4509681461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683803.2095984366,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 683784.6229187145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24446.8063727143,
            "unit": "ns/iter",
            "extra": "iterations: 29438\ncpu: 24446.840817990276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 119486.81992139798,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 119484.69161113999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96015.58448678386,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 96014.10168562492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96157.34994509371,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 96156.15046677705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98236.87303370537,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 98234.49438202276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184008.74283460464,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 184008.8614251924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 834075.0059523945,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 834064.4047618996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700687.8504487039,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 700688.1355932158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 699657.6576846803,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 699657.5848303369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 698634.5688622481,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698612.0758482941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432641.3960273457,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 432641.2787088715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 684000.1728515289,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 683978.3203125005 ns\nthreads: 1"
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
        "date": 1702394237833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8379.448274205482,
            "unit": "ns/iter",
            "extra": "iterations: 83266\ncpu: 8379.152355102924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99162.82132930738,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 99161.81102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192619.67766606578,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 192614.6853146854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287798.0663790345,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 287794.55692001333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372194.23928257724,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 372185.38932633435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 463855.5607028785,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 463855.69755058555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553809.840330828,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553797.2010178119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 518240.71199996525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518232.10000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590996.5490000104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590958.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6654.018049490578,
            "unit": "ns/iter",
            "extra": "iterations: 106485\ncpu: 6653.773770953668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5478.865812721456,
            "unit": "ns/iter",
            "extra": "iterations: 127799\ncpu: 5478.873856602944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5443.494227350304,
            "unit": "ns/iter",
            "extra": "iterations: 128797\ncpu: 5443.254113061631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5431.0379581150355,
            "unit": "ns/iter",
            "extra": "iterations: 128352\ncpu: 5430.872911992016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9981.641889772984,
            "unit": "ns/iter",
            "extra": "iterations: 70146\ncpu: 9981.357454452156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47815.501188062466,
            "unit": "ns/iter",
            "extra": "iterations: 17255\ncpu: 47814.47696319906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201663.0499411194,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201657.87985865722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163281.71798261136,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 163280.10955799022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 178837.97397178912,
            "unit": "ns/iter",
            "extra": "iterations: 5033\ncpu: 178833.55851380856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168178.00814138885,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 168178.1175536136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 387107.44310574856,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 387093.70816599776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3128951.3866666616,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3128830.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2525355.191374665,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2525354.9865229055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2549904.2370571923,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2549811.1716621215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2524827.032345145,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524651.2129380107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1474631.0316456354,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1474563.1329113941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465163.7941952134,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465018.2058047494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10221001.295237675,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10220658.095238106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5815444.724999708,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5815312.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12041370.550561849,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12040750.56179776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47839.37392010252,
            "unit": "ns/iter",
            "extra": "iterations: 17247\ncpu: 47836.85858410157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216227.49533182793,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 216215.26621246524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 169293.08128469886,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 169284.81363996878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174018.11963563628,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 174004.51417004038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 171901.83187816784,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 171889.13705583708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 390295.18325079343,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 390272.98514182674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3121166.5050166654,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121043.812709028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2534855.7956403,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2534855.040871932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2554225.5163933807,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2554127.049180321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2529344.8459457387,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529150.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1459401.8880125622,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1459319.242902212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2472018.3430081857,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2471851.1873350865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10386085.915095095,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10385457.54716982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5790397.648148107,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5790336.4197530905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50120.50057551944,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 50116.720179317796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 210148.35220588185,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 210134.75490196116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166488.98558347393,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 166477.63491135798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170985.84249451535,
            "unit": "ns/iter",
            "extra": "iterations: 5003\ncpu: 170972.5164901047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 168959.25347085533,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 168945.8548195157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 381604.94042930723,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381584.18747262383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3112172.0500001023,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111992.6666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2534561.4429345857,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2534361.1413043467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2546609.0953676137,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2546531.6076294235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510076.54032268,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2509896.774193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1486192.8333332452,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1486102.3809523708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2469183.2857142584,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2469002.3809523857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2969.603117723945,
            "unit": "ns/iter",
            "extra": "iterations: 236647\ncpu: 2969.4114017925676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22408.33046659309,
            "unit": "ns/iter",
            "extra": "iterations: 31162\ncpu: 22406.42449136762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17380.141666466057,
            "unit": "ns/iter",
            "extra": "iterations: 41633\ncpu: 17379.177575480986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17247.55937552274,
            "unit": "ns/iter",
            "extra": "iterations: 41827\ncpu: 17246.08267387099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12756.815308516974,
            "unit": "ns/iter",
            "extra": "iterations: 54989\ncpu: 12756.684064085553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 90757.11194609765,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90754.39232961908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 198997.7047591762,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 198984.72499287446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48783.56232126455,
            "unit": "ns/iter",
            "extra": "iterations: 14337\ncpu: 48781.802329636324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49237.38139403766,
            "unit": "ns/iter",
            "extra": "iterations: 14232\ncpu: 49235.848791455945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48537.24024526094,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48535.66053511699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102308.19976738338,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 102307.16778133097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92257.91428193767,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 92253.06606883869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24063.89722815732,
            "unit": "ns/iter",
            "extra": "iterations: 29006\ncpu: 24063.900572295373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115571.44294194657,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115569.17875989452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94101.49428840801,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 94098.44106974882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97015.20091386592,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 97013.23733038125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98584.54295775913,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98581.69014084435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182047.8212710738,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 182043.19066147704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 841308.5832335345,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841298.0838323234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 737036.1968191069,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 737026.6401590463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 700605.9028055884,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700606.3126252509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 694412.1530000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 694391.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 437184.4341036822,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 437178.4509681461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683803.2095984366,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 683784.6229187145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24446.8063727143,
            "unit": "ns/iter",
            "extra": "iterations: 29438\ncpu: 24446.840817990276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 119486.81992139798,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 119484.69161113999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96015.58448678386,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 96014.10168562492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96157.34994509371,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 96156.15046677705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98236.87303370537,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 98234.49438202276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184008.74283460464,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 184008.8614251924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 834075.0059523945,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 834064.4047618996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700687.8504487039,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 700688.1355932158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 699657.6576846803,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 699657.5848303369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 698634.5688622481,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698612.0758482941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432641.3960273457,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 432641.2787088715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 684000.1728515289,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 683978.3203125005 ns\nthreads: 1"
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
        "date": 1702394237833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8379.448274205482,
            "unit": "ns/iter",
            "extra": "iterations: 83266\ncpu: 8379.152355102924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99162.82132930738,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 99161.81102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192619.67766606578,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 192614.6853146854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287798.0663790345,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 287794.55692001333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372194.23928257724,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 372185.38932633435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 463855.5607028785,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 463855.69755058555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553809.840330828,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553797.2010178119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 518240.71199996525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518232.10000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590996.5490000104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590958.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6654.018049490578,
            "unit": "ns/iter",
            "extra": "iterations: 106485\ncpu: 6653.773770953668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5478.865812721456,
            "unit": "ns/iter",
            "extra": "iterations: 127799\ncpu: 5478.873856602944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5443.494227350304,
            "unit": "ns/iter",
            "extra": "iterations: 128797\ncpu: 5443.254113061631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5431.0379581150355,
            "unit": "ns/iter",
            "extra": "iterations: 128352\ncpu: 5430.872911992016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9981.641889772984,
            "unit": "ns/iter",
            "extra": "iterations: 70146\ncpu: 9981.357454452156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47815.501188062466,
            "unit": "ns/iter",
            "extra": "iterations: 17255\ncpu: 47814.47696319906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201663.0499411194,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201657.87985865722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163281.71798261136,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 163280.10955799022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 178837.97397178912,
            "unit": "ns/iter",
            "extra": "iterations: 5033\ncpu: 178833.55851380856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168178.00814138885,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 168178.1175536136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 387107.44310574856,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 387093.70816599776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3128951.3866666616,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3128830.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2525355.191374665,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2525354.9865229055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2549904.2370571923,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2549811.1716621215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2524827.032345145,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524651.2129380107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1474631.0316456354,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1474563.1329113941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465163.7941952134,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465018.2058047494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10221001.295237675,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10220658.095238106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5815444.724999708,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5815312.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12041370.550561849,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12040750.56179776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47839.37392010252,
            "unit": "ns/iter",
            "extra": "iterations: 17247\ncpu: 47836.85858410157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216227.49533182793,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 216215.26621246524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 169293.08128469886,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 169284.81363996878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174018.11963563628,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 174004.51417004038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 171901.83187816784,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 171889.13705583708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 390295.18325079343,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 390272.98514182674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3121166.5050166654,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121043.812709028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2534855.7956403,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2534855.040871932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2554225.5163933807,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2554127.049180321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2529344.8459457387,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529150.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1459401.8880125622,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1459319.242902212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2472018.3430081857,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2471851.1873350865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10386085.915095095,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10385457.54716982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5790397.648148107,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5790336.4197530905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50120.50057551944,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 50116.720179317796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 210148.35220588185,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 210134.75490196116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166488.98558347393,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 166477.63491135798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170985.84249451535,
            "unit": "ns/iter",
            "extra": "iterations: 5003\ncpu: 170972.5164901047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 168959.25347085533,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 168945.8548195157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 381604.94042930723,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381584.18747262383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3112172.0500001023,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111992.6666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2534561.4429345857,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2534361.1413043467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2546609.0953676137,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2546531.6076294235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510076.54032268,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2509896.774193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1486192.8333332452,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1486102.3809523708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2469183.2857142584,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2469002.3809523857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2969.603117723945,
            "unit": "ns/iter",
            "extra": "iterations: 236647\ncpu: 2969.4114017925676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22408.33046659309,
            "unit": "ns/iter",
            "extra": "iterations: 31162\ncpu: 22406.42449136762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17380.141666466057,
            "unit": "ns/iter",
            "extra": "iterations: 41633\ncpu: 17379.177575480986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17247.55937552274,
            "unit": "ns/iter",
            "extra": "iterations: 41827\ncpu: 17246.08267387099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12756.815308516974,
            "unit": "ns/iter",
            "extra": "iterations: 54989\ncpu: 12756.684064085553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 90757.11194609765,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90754.39232961908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 198997.7047591762,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 198984.72499287446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48783.56232126455,
            "unit": "ns/iter",
            "extra": "iterations: 14337\ncpu: 48781.802329636324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49237.38139403766,
            "unit": "ns/iter",
            "extra": "iterations: 14232\ncpu: 49235.848791455945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48537.24024526094,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48535.66053511699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102308.19976738338,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 102307.16778133097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92257.91428193767,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 92253.06606883869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24063.89722815732,
            "unit": "ns/iter",
            "extra": "iterations: 29006\ncpu: 24063.900572295373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115571.44294194657,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115569.17875989452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94101.49428840801,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 94098.44106974882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97015.20091386592,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 97013.23733038125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98584.54295775913,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98581.69014084435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182047.8212710738,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 182043.19066147704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 841308.5832335345,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841298.0838323234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 737036.1968191069,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 737026.6401590463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 700605.9028055884,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700606.3126252509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 694412.1530000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 694391.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 437184.4341036822,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 437178.4509681461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683803.2095984366,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 683784.6229187145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24446.8063727143,
            "unit": "ns/iter",
            "extra": "iterations: 29438\ncpu: 24446.840817990276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 119486.81992139798,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 119484.69161113999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96015.58448678386,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 96014.10168562492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96157.34994509371,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 96156.15046677705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98236.87303370537,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 98234.49438202276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184008.74283460464,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 184008.8614251924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 834075.0059523945,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 834064.4047618996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700687.8504487039,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 700688.1355932158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 699657.6576846803,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 699657.5848303369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 698634.5688622481,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698612.0758482941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432641.3960273457,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 432641.2787088715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 684000.1728515289,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 683978.3203125005 ns\nthreads: 1"
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
        "date": 1702394237833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8379.448274205482,
            "unit": "ns/iter",
            "extra": "iterations: 83266\ncpu: 8379.152355102924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99162.82132930738,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 99161.81102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192619.67766606578,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 192614.6853146854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287798.0663790345,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 287794.55692001333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372194.23928257724,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 372185.38932633435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 463855.5607028785,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 463855.69755058555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553809.840330828,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553797.2010178119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 518240.71199996525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518232.10000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590996.5490000104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590958.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6654.018049490578,
            "unit": "ns/iter",
            "extra": "iterations: 106485\ncpu: 6653.773770953668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5478.865812721456,
            "unit": "ns/iter",
            "extra": "iterations: 127799\ncpu: 5478.873856602944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5443.494227350304,
            "unit": "ns/iter",
            "extra": "iterations: 128797\ncpu: 5443.254113061631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5431.0379581150355,
            "unit": "ns/iter",
            "extra": "iterations: 128352\ncpu: 5430.872911992016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9981.641889772984,
            "unit": "ns/iter",
            "extra": "iterations: 70146\ncpu: 9981.357454452156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47815.501188062466,
            "unit": "ns/iter",
            "extra": "iterations: 17255\ncpu: 47814.47696319906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201663.0499411194,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201657.87985865722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163281.71798261136,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 163280.10955799022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 178837.97397178912,
            "unit": "ns/iter",
            "extra": "iterations: 5033\ncpu: 178833.55851380856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168178.00814138885,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 168178.1175536136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 387107.44310574856,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 387093.70816599776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3128951.3866666616,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3128830.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2525355.191374665,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2525354.9865229055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2549904.2370571923,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2549811.1716621215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2524827.032345145,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524651.2129380107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1474631.0316456354,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1474563.1329113941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465163.7941952134,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465018.2058047494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10221001.295237675,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10220658.095238106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5815444.724999708,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5815312.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12041370.550561849,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12040750.56179776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47839.37392010252,
            "unit": "ns/iter",
            "extra": "iterations: 17247\ncpu: 47836.85858410157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216227.49533182793,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 216215.26621246524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 169293.08128469886,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 169284.81363996878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174018.11963563628,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 174004.51417004038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 171901.83187816784,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 171889.13705583708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 390295.18325079343,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 390272.98514182674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3121166.5050166654,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121043.812709028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2534855.7956403,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2534855.040871932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2554225.5163933807,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2554127.049180321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2529344.8459457387,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529150.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1459401.8880125622,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1459319.242902212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2472018.3430081857,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2471851.1873350865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10386085.915095095,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10385457.54716982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5790397.648148107,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5790336.4197530905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50120.50057551944,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 50116.720179317796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 210148.35220588185,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 210134.75490196116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166488.98558347393,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 166477.63491135798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170985.84249451535,
            "unit": "ns/iter",
            "extra": "iterations: 5003\ncpu: 170972.5164901047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 168959.25347085533,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 168945.8548195157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 381604.94042930723,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381584.18747262383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3112172.0500001023,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111992.6666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2534561.4429345857,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2534361.1413043467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2546609.0953676137,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2546531.6076294235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510076.54032268,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2509896.774193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1486192.8333332452,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1486102.3809523708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2469183.2857142584,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2469002.3809523857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2969.603117723945,
            "unit": "ns/iter",
            "extra": "iterations: 236647\ncpu: 2969.4114017925676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22408.33046659309,
            "unit": "ns/iter",
            "extra": "iterations: 31162\ncpu: 22406.42449136762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17380.141666466057,
            "unit": "ns/iter",
            "extra": "iterations: 41633\ncpu: 17379.177575480986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17247.55937552274,
            "unit": "ns/iter",
            "extra": "iterations: 41827\ncpu: 17246.08267387099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12756.815308516974,
            "unit": "ns/iter",
            "extra": "iterations: 54989\ncpu: 12756.684064085553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 90757.11194609765,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90754.39232961908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 198997.7047591762,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 198984.72499287446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48783.56232126455,
            "unit": "ns/iter",
            "extra": "iterations: 14337\ncpu: 48781.802329636324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49237.38139403766,
            "unit": "ns/iter",
            "extra": "iterations: 14232\ncpu: 49235.848791455945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48537.24024526094,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48535.66053511699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102308.19976738338,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 102307.16778133097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92257.91428193767,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 92253.06606883869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24063.89722815732,
            "unit": "ns/iter",
            "extra": "iterations: 29006\ncpu: 24063.900572295373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115571.44294194657,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115569.17875989452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94101.49428840801,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 94098.44106974882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97015.20091386592,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 97013.23733038125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98584.54295775913,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98581.69014084435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182047.8212710738,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 182043.19066147704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 841308.5832335345,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841298.0838323234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 737036.1968191069,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 737026.6401590463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 700605.9028055884,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700606.3126252509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 694412.1530000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 694391.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 437184.4341036822,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 437178.4509681461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683803.2095984366,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 683784.6229187145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24446.8063727143,
            "unit": "ns/iter",
            "extra": "iterations: 29438\ncpu: 24446.840817990276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 119486.81992139798,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 119484.69161113999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96015.58448678386,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 96014.10168562492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96157.34994509371,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 96156.15046677705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98236.87303370537,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 98234.49438202276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184008.74283460464,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 184008.8614251924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 834075.0059523945,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 834064.4047618996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700687.8504487039,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 700688.1355932158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 699657.6576846803,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 699657.5848303369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 698634.5688622481,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698612.0758482941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432641.3960273457,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 432641.2787088715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 684000.1728515289,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 683978.3203125005 ns\nthreads: 1"
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
        "date": 1702394237833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8379.448274205482,
            "unit": "ns/iter",
            "extra": "iterations: 83266\ncpu: 8379.152355102924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99162.82132930738,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 99161.81102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192619.67766606578,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 192614.6853146854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287798.0663790345,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 287794.55692001333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372194.23928257724,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 372185.38932633435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 463855.5607028785,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 463855.69755058555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553809.840330828,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553797.2010178119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 518240.71199996525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518232.10000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590996.5490000104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590958.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6654.018049490578,
            "unit": "ns/iter",
            "extra": "iterations: 106485\ncpu: 6653.773770953668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5478.865812721456,
            "unit": "ns/iter",
            "extra": "iterations: 127799\ncpu: 5478.873856602944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5443.494227350304,
            "unit": "ns/iter",
            "extra": "iterations: 128797\ncpu: 5443.254113061631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5431.0379581150355,
            "unit": "ns/iter",
            "extra": "iterations: 128352\ncpu: 5430.872911992016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9981.641889772984,
            "unit": "ns/iter",
            "extra": "iterations: 70146\ncpu: 9981.357454452156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47815.501188062466,
            "unit": "ns/iter",
            "extra": "iterations: 17255\ncpu: 47814.47696319906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201663.0499411194,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201657.87985865722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163281.71798261136,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 163280.10955799022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 178837.97397178912,
            "unit": "ns/iter",
            "extra": "iterations: 5033\ncpu: 178833.55851380856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168178.00814138885,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 168178.1175536136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 387107.44310574856,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 387093.70816599776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3128951.3866666616,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3128830.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2525355.191374665,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2525354.9865229055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2549904.2370571923,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2549811.1716621215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2524827.032345145,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524651.2129380107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1474631.0316456354,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1474563.1329113941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465163.7941952134,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465018.2058047494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10221001.295237675,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10220658.095238106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5815444.724999708,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5815312.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12041370.550561849,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12040750.56179776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47839.37392010252,
            "unit": "ns/iter",
            "extra": "iterations: 17247\ncpu: 47836.85858410157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216227.49533182793,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 216215.26621246524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 169293.08128469886,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 169284.81363996878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174018.11963563628,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 174004.51417004038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 171901.83187816784,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 171889.13705583708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 390295.18325079343,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 390272.98514182674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3121166.5050166654,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121043.812709028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2534855.7956403,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2534855.040871932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2554225.5163933807,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2554127.049180321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2529344.8459457387,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529150.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1459401.8880125622,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1459319.242902212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2472018.3430081857,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2471851.1873350865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10386085.915095095,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10385457.54716982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5790397.648148107,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5790336.4197530905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50120.50057551944,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 50116.720179317796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 210148.35220588185,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 210134.75490196116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166488.98558347393,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 166477.63491135798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170985.84249451535,
            "unit": "ns/iter",
            "extra": "iterations: 5003\ncpu: 170972.5164901047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 168959.25347085533,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 168945.8548195157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 381604.94042930723,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381584.18747262383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3112172.0500001023,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111992.6666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2534561.4429345857,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2534361.1413043467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2546609.0953676137,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2546531.6076294235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510076.54032268,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2509896.774193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1486192.8333332452,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1486102.3809523708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2469183.2857142584,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2469002.3809523857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2969.603117723945,
            "unit": "ns/iter",
            "extra": "iterations: 236647\ncpu: 2969.4114017925676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22408.33046659309,
            "unit": "ns/iter",
            "extra": "iterations: 31162\ncpu: 22406.42449136762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17380.141666466057,
            "unit": "ns/iter",
            "extra": "iterations: 41633\ncpu: 17379.177575480986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17247.55937552274,
            "unit": "ns/iter",
            "extra": "iterations: 41827\ncpu: 17246.08267387099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12756.815308516974,
            "unit": "ns/iter",
            "extra": "iterations: 54989\ncpu: 12756.684064085553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 90757.11194609765,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90754.39232961908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 198997.7047591762,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 198984.72499287446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48783.56232126455,
            "unit": "ns/iter",
            "extra": "iterations: 14337\ncpu: 48781.802329636324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49237.38139403766,
            "unit": "ns/iter",
            "extra": "iterations: 14232\ncpu: 49235.848791455945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48537.24024526094,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48535.66053511699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102308.19976738338,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 102307.16778133097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92257.91428193767,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 92253.06606883869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24063.89722815732,
            "unit": "ns/iter",
            "extra": "iterations: 29006\ncpu: 24063.900572295373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115571.44294194657,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115569.17875989452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94101.49428840801,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 94098.44106974882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97015.20091386592,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 97013.23733038125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98584.54295775913,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98581.69014084435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182047.8212710738,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 182043.19066147704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 841308.5832335345,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841298.0838323234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 737036.1968191069,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 737026.6401590463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 700605.9028055884,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700606.3126252509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 694412.1530000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 694391.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 437184.4341036822,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 437178.4509681461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683803.2095984366,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 683784.6229187145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24446.8063727143,
            "unit": "ns/iter",
            "extra": "iterations: 29438\ncpu: 24446.840817990276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 119486.81992139798,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 119484.69161113999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96015.58448678386,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 96014.10168562492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96157.34994509371,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 96156.15046677705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98236.87303370537,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 98234.49438202276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184008.74283460464,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 184008.8614251924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 834075.0059523945,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 834064.4047618996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700687.8504487039,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 700688.1355932158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 699657.6576846803,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 699657.5848303369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 698634.5688622481,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698612.0758482941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432641.3960273457,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 432641.2787088715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 684000.1728515289,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 683978.3203125005 ns\nthreads: 1"
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
        "date": 1702394237833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8379.448274205482,
            "unit": "ns/iter",
            "extra": "iterations: 83266\ncpu: 8379.152355102924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99162.82132930738,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 99161.81102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192619.67766606578,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 192614.6853146854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287798.0663790345,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 287794.55692001333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372194.23928257724,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 372185.38932633435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 463855.5607028785,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 463855.69755058555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553809.840330828,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553797.2010178119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 518240.71199996525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518232.10000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590996.5490000104,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590958.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6654.018049490578,
            "unit": "ns/iter",
            "extra": "iterations: 106485\ncpu: 6653.773770953668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5478.865812721456,
            "unit": "ns/iter",
            "extra": "iterations: 127799\ncpu: 5478.873856602944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5443.494227350304,
            "unit": "ns/iter",
            "extra": "iterations: 128797\ncpu: 5443.254113061631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5431.0379581150355,
            "unit": "ns/iter",
            "extra": "iterations: 128352\ncpu: 5430.872911992016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9981.641889772984,
            "unit": "ns/iter",
            "extra": "iterations: 70146\ncpu: 9981.357454452156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47815.501188062466,
            "unit": "ns/iter",
            "extra": "iterations: 17255\ncpu: 47814.47696319906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201663.0499411194,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201657.87985865722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163281.71798261136,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 163280.10955799022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 178837.97397178912,
            "unit": "ns/iter",
            "extra": "iterations: 5033\ncpu: 178833.55851380856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168178.00814138885,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 168178.1175536136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 387107.44310574856,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 387093.70816599776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3128951.3866666616,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3128830.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2525355.191374665,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2525354.9865229055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2549904.2370571923,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2549811.1716621215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2524827.032345145,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524651.2129380107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1474631.0316456354,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1474563.1329113941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465163.7941952134,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465018.2058047494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10221001.295237675,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10220658.095238106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5815444.724999708,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5815312.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12041370.550561849,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12040750.56179776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47839.37392010252,
            "unit": "ns/iter",
            "extra": "iterations: 17247\ncpu: 47836.85858410157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216227.49533182793,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 216215.26621246524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 169293.08128469886,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 169284.81363996878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174018.11963563628,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 174004.51417004038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 171901.83187816784,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 171889.13705583708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 390295.18325079343,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 390272.98514182674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3121166.5050166654,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121043.812709028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2534855.7956403,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2534855.040871932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2554225.5163933807,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2554127.049180321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2529344.8459457387,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529150.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1459401.8880125622,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1459319.242902212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2472018.3430081857,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2471851.1873350865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10386085.915095095,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10385457.54716982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5790397.648148107,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5790336.4197530905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50120.50057551944,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 50116.720179317796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 210148.35220588185,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 210134.75490196116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166488.98558347393,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 166477.63491135798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170985.84249451535,
            "unit": "ns/iter",
            "extra": "iterations: 5003\ncpu: 170972.5164901047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 168959.25347085533,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 168945.8548195157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 381604.94042930723,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381584.18747262383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3112172.0500001023,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111992.6666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2534561.4429345857,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2534361.1413043467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2546609.0953676137,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2546531.6076294235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510076.54032268,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2509896.774193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1486192.8333332452,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1486102.3809523708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2469183.2857142584,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2469002.3809523857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2969.603117723945,
            "unit": "ns/iter",
            "extra": "iterations: 236647\ncpu: 2969.4114017925676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22408.33046659309,
            "unit": "ns/iter",
            "extra": "iterations: 31162\ncpu: 22406.42449136762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17380.141666466057,
            "unit": "ns/iter",
            "extra": "iterations: 41633\ncpu: 17379.177575480986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17247.55937552274,
            "unit": "ns/iter",
            "extra": "iterations: 41827\ncpu: 17246.08267387099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12756.815308516974,
            "unit": "ns/iter",
            "extra": "iterations: 54989\ncpu: 12756.684064085553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 90757.11194609765,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90754.39232961908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 198997.7047591762,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 198984.72499287446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48783.56232126455,
            "unit": "ns/iter",
            "extra": "iterations: 14337\ncpu: 48781.802329636324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49237.38139403766,
            "unit": "ns/iter",
            "extra": "iterations: 14232\ncpu: 49235.848791455945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48537.24024526094,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48535.66053511699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102308.19976738338,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 102307.16778133097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92257.91428193767,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 92253.06606883869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24063.89722815732,
            "unit": "ns/iter",
            "extra": "iterations: 29006\ncpu: 24063.900572295373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115571.44294194657,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115569.17875989452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94101.49428840801,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 94098.44106974882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97015.20091386592,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 97013.23733038125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98584.54295775913,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98581.69014084435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182047.8212710738,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 182043.19066147704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 841308.5832335345,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 841298.0838323234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 737036.1968191069,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 737026.6401590463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 700605.9028055884,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700606.3126252509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 694412.1530000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 694391.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 437184.4341036822,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 437178.4509681461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683803.2095984366,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 683784.6229187145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24446.8063727143,
            "unit": "ns/iter",
            "extra": "iterations: 29438\ncpu: 24446.840817990276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 119486.81992139798,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 119484.69161113999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96015.58448678386,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 96014.10168562492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96157.34994509371,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 96156.15046677705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98236.87303370537,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 98234.49438202276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184008.74283460464,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 184008.8614251924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 834075.0059523945,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 834064.4047618996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700687.8504487039,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 700688.1355932158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 699657.6576846803,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 699657.5848303369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 698634.5688622481,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698612.0758482941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432641.3960273457,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 432641.2787088715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 684000.1728515289,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 683978.3203125005 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}