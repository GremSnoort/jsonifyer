window.BENCHMARK_DATA = {
  "lastUpdate": 1705958538445,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-11 18.04 Release c++-17": [
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
        "date": 1702490292504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1324.7330055625564,
            "unit": "ns/iter",
            "extra": "iterations: 518655\ncpu: 1324.6362225371395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15657.918817778549,
            "unit": "ns/iter",
            "extra": "iterations: 52376\ncpu: 15638.819306552621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33272.47730665394,
            "unit": "ns/iter",
            "extra": "iterations: 24787\ncpu: 33271.13002783718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49867.85830552448,
            "unit": "ns/iter",
            "extra": "iterations: 17079\ncpu: 49867.26974647226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55052.03899999743,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55051.13000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69766.11495975498,
            "unit": "ns/iter",
            "extra": "iterations: 12674\ncpu: 69765.18068486666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 82610.45679961744,
            "unit": "ns/iter",
            "extra": "iterations: 10405\ncpu: 82608.26525708793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96149.08970063114,
            "unit": "ns/iter",
            "extra": "iterations: 8952\ncpu: 96148.03395889186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111669.64937949754,
            "unit": "ns/iter",
            "extra": "iterations: 7655\ncpu: 111666.54474199862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1166.0347739659392,
            "unit": "ns/iter",
            "extra": "iterations: 595618\ncpu: 1165.991961290624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 934.7794357870887,
            "unit": "ns/iter",
            "extra": "iterations: 748689\ncpu: 934.756487673786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 929.8103077023887,
            "unit": "ns/iter",
            "extra": "iterations: 750953\ncpu: 929.785352745112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 937.3615463693773,
            "unit": "ns/iter",
            "extra": "iterations: 747066\ncpu: 937.3592159193446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1846.457820601602,
            "unit": "ns/iter",
            "extra": "iterations: 379747\ncpu: 1846.4414465420416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5339.30045379557,
            "unit": "ns/iter",
            "extra": "iterations: 149627\ncpu: 5339.22487251633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24280.159392620488,
            "unit": "ns/iter",
            "extra": "iterations: 33521\ncpu: 24279.609796843797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19239.21488141035,
            "unit": "ns/iter",
            "extra": "iterations: 43047\ncpu: 19237.847004437026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18625.102883953532,
            "unit": "ns/iter",
            "extra": "iterations: 43690\ncpu: 18624.28015564203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18629.1022128574,
            "unit": "ns/iter",
            "extra": "iterations: 43654\ncpu: 18628.25857882439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65521.22833672683,
            "unit": "ns/iter",
            "extra": "iterations: 13756\ncpu: 65517.43966269271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 566728.7049999458,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566716.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551801.7611075587,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 551771.2813908575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562811.3373417583,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 562780.5696202546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 558764.7061430791,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 558735.7188093731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328090.90456740494,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 328072.18715187546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561151.3151898525,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 561115.506329114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2339170.232323278,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2339006.565656563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1077710.6456875848,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1077641.7249417251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3247809.569929925,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3247583.2167832246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7324.1766059442225,
            "unit": "ns/iter",
            "extra": "iterations: 114730\ncpu: 7323.6520526453405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40423.52855342167,
            "unit": "ns/iter",
            "extra": "iterations: 20628\ncpu: 40421.107232887465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31296.017752588905,
            "unit": "ns/iter",
            "extra": "iterations: 26644\ncpu: 31294.550367812706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30326.849841070245,
            "unit": "ns/iter",
            "extra": "iterations: 27371\ncpu: 30325.965437872273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30184.300464464042,
            "unit": "ns/iter",
            "extra": "iterations: 27128\ncpu: 30183.03966381611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76136.89273868973,
            "unit": "ns/iter",
            "extra": "iterations: 11458\ncpu: 76134.5871879908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602541.9599999395,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602502.7999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596725.8106995792,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 596720.0960219483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584319.0653061257,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 584302.0408163278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 582782.8173854619,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 582771.6307277618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337587.5028924102,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 337586.77207867114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 579866.6162558327,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 579823.4510326436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2475853.526595742,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2475688.829787229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1074401.307692296,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1074362.8205128212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5076.595752670805,
            "unit": "ns/iter",
            "extra": "iterations: 159771\ncpu: 5076.465065625187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 23842.26852708285,
            "unit": "ns/iter",
            "extra": "iterations: 33505\ncpu: 23842.21161020738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19100.88641378337,
            "unit": "ns/iter",
            "extra": "iterations: 42602\ncpu: 19100.46946152772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18422.875171961954,
            "unit": "ns/iter",
            "extra": "iterations: 44341\ncpu: 18422.547980424297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18350.605785515552,
            "unit": "ns/iter",
            "extra": "iterations: 44283\ncpu: 18349.81369825884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62989.27365084058,
            "unit": "ns/iter",
            "extra": "iterations: 13879\ncpu: 62985.020534620366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579872.5160000231,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579821.6999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573626.5216251222,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 573589.9082568828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 572198.9181937196,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 572177.8795811549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570050.1732641114,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 570017.1966255638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331266.5862584103,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 331244.2120985797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565590.8734588079,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 565568.5269305657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 492.4646258446087,
            "unit": "ns/iter",
            "extra": "iterations: 1421094\ncpu: 492.4450458590357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3047.438386878574,
            "unit": "ns/iter",
            "extra": "iterations: 230584\ncpu: 3040.787305277039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2360.7554097125517,
            "unit": "ns/iter",
            "extra": "iterations: 297428\ncpu: 2360.6563605309475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2364.9099876780824,
            "unit": "ns/iter",
            "extra": "iterations: 295404\ncpu: 2364.774681453184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1919.5504382956253,
            "unit": "ns/iter",
            "extra": "iterations: 364366\ncpu: 1919.4644944918061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17135.290261166563,
            "unit": "ns/iter",
            "extra": "iterations: 40970\ncpu: 17134.75469856004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31370.72581945273,
            "unit": "ns/iter",
            "extra": "iterations: 22332\ncpu: 31369.823571556335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7424.448995584685,
            "unit": "ns/iter",
            "extra": "iterations: 94433\ncpu: 7424.327300837706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7299.020483404167,
            "unit": "ns/iter",
            "extra": "iterations: 94662\ncpu: 7298.496756882452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7378.693244309842,
            "unit": "ns/iter",
            "extra": "iterations: 95105\ncpu: 7378.1346932337365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14619.715336420064,
            "unit": "ns/iter",
            "extra": "iterations: 47723\ncpu: 14618.83787691489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13949.440727723382,
            "unit": "ns/iter",
            "extra": "iterations: 50074\ncpu: 13948.634021647824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5160.046761340653,
            "unit": "ns/iter",
            "extra": "iterations: 135411\ncpu: 5159.975186653909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26610.156518448555,
            "unit": "ns/iter",
            "extra": "iterations: 26425\ncpu: 26609.782403027522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20795.889334136657,
            "unit": "ns/iter",
            "extra": "iterations: 33190\ncpu: 20795.408255498634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21294.738785970272,
            "unit": "ns/iter",
            "extra": "iterations: 33953\ncpu: 21294.713280122472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21106.732471826013,
            "unit": "ns/iter",
            "extra": "iterations: 33275\ncpu: 21106.461307287525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48857.24295602606,
            "unit": "ns/iter",
            "extra": "iterations: 14303\ncpu: 48857.197790672886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157170.29838345645,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 157166.56937584214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130864.44170616344,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 130858.55924170533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133209.0539831357,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 133204.5923149008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133048.45402628268,
            "unit": "ns/iter",
            "extra": "iterations: 5253\ncpu: 133045.19322292143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83790.70412927544,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83789.57510472873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132820.30531795512,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 132814.2989959087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4863.2135025320895,
            "unit": "ns/iter",
            "extra": "iterations: 143736\ncpu: 4862.996048310759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25554.812389506842,
            "unit": "ns/iter",
            "extra": "iterations: 27717\ncpu: 25553.562795396254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20593.503224855143,
            "unit": "ns/iter",
            "extra": "iterations: 33955\ncpu: 20592.50184067167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20756.834373058577,
            "unit": "ns/iter",
            "extra": "iterations: 33823\ncpu: 20755.61895751437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21038.882358258354,
            "unit": "ns/iter",
            "extra": "iterations: 33194\ncpu: 21038.220762788387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47646.91385640159,
            "unit": "ns/iter",
            "extra": "iterations: 14708\ncpu: 47643.17378297552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152806.76845782966,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 152798.0996068168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126444.30938012876,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 126438.65423294828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127625.12613926215,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 127623.00401020562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127628.05080116449,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 127620.15659140437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82177.80860289604,
            "unit": "ns/iter",
            "extra": "iterations: 8532\ncpu: 82171.51898734078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127032.74130435222,
            "unit": "ns/iter",
            "extra": "iterations: 5520\ncpu: 127025.57971014376 ns\nthreads: 1"
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
        "date": 1702492917927,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1339.814621831986,
            "unit": "ns/iter",
            "extra": "iterations: 531999\ncpu: 1339.7775183787942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16365.228831263357,
            "unit": "ns/iter",
            "extra": "iterations: 47393\ncpu: 16365.106661321292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33886.707433953285,
            "unit": "ns/iter",
            "extra": "iterations: 23998\ncpu: 33884.132011000926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50298.04663430354,
            "unit": "ns/iter",
            "extra": "iterations: 16683\ncpu: 50295.62428819756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55841.81509999553,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55841.56999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71029.05668243855,
            "unit": "ns/iter",
            "extra": "iterations: 12473\ncpu: 71029.34338170449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83931.47411947913,
            "unit": "ns/iter",
            "extra": "iterations: 10278\ncpu: 83929.208017124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97063.93321380857,
            "unit": "ns/iter",
            "extra": "iterations: 8924\ncpu: 97063.79426266244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113254.85143685421,
            "unit": "ns/iter",
            "extra": "iterations: 7586\ncpu: 113252.35960980754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1224.2282958312578,
            "unit": "ns/iter",
            "extra": "iterations: 572989\ncpu: 1224.223850719648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 943.6527388214863,
            "unit": "ns/iter",
            "extra": "iterations: 701999\ncpu: 943.6096062814917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 937.0552210017298,
            "unit": "ns/iter",
            "extra": "iterations: 747596\ncpu: 937.0523651811959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 950.6959490812651,
            "unit": "ns/iter",
            "extra": "iterations: 737018\ncpu: 950.6804447109819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1837.0017025139193,
            "unit": "ns/iter",
            "extra": "iterations: 381201\ncpu: 1836.9776049905427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5213.446576422408,
            "unit": "ns/iter",
            "extra": "iterations: 152180\ncpu: 5213.413063477462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25985.954800658303,
            "unit": "ns/iter",
            "extra": "iterations: 31704\ncpu: 25986.045924804406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20250.03168978714,
            "unit": "ns/iter",
            "extra": "iterations: 40076\ncpu: 20249.426090428213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19465.067097197374,
            "unit": "ns/iter",
            "extra": "iterations: 42893\ncpu: 19465.13417107683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18816.003723231457,
            "unit": "ns/iter",
            "extra": "iterations: 43242\ncpu: 18815.76939086998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65653.01899238577,
            "unit": "ns/iter",
            "extra": "iterations: 13795\ncpu: 65652.43928959766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565338.3180000446,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565313.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565831.6564102815,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 565829.6794871776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 551267.5161290761,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 551257.1612903235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563261.8720409542,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 563242.4184261038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329892.9589299252,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 329888.6209495101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563362.7922329695,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 563344.4012944979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2343791.4897960597,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2343768.367346934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1074537.4843205167,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1074500.5807200936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3234069.2342658755,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3234057.692307686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7430.460303443208,
            "unit": "ns/iter",
            "extra": "iterations: 112113\ncpu: 7430.311382266108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39422.03764211633,
            "unit": "ns/iter",
            "extra": "iterations: 20934\ncpu: 39421.099646507995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31885.072811593014,
            "unit": "ns/iter",
            "extra": "iterations: 25875\ncpu: 31884.69565217406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30229.811190901015,
            "unit": "ns/iter",
            "extra": "iterations: 26736\ncpu: 30229.634201077195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30391.3823303725,
            "unit": "ns/iter",
            "extra": "iterations: 27369\ncpu: 30391.50498739467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76723.05251386711,
            "unit": "ns/iter",
            "extra": "iterations: 11178\ncpu: 76721.3365539453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 605791.9139999512,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605767.3999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 586782.5670102665,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 586780.1374570474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 586697.6107382781,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 586694.6979865739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587728.0394021263,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 587717.9347826084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344624.26565539924,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 344625.7098405294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 570793.336399494,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 570786.2023653077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2456379.9894181294,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2456250.793650789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1080466.092074585,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1080469.9300699302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5181.637892133963,
            "unit": "ns/iter",
            "extra": "iterations: 156898\ncpu: 5181.563181175047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26050.76072155749,
            "unit": "ns/iter",
            "extra": "iterations: 31432\ncpu: 26050.181343853335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20359.92229419484,
            "unit": "ns/iter",
            "extra": "iterations: 40293\ncpu: 20359.422232149478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19170.602329333502,
            "unit": "ns/iter",
            "extra": "iterations: 42759\ncpu: 19170.38284337803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19017.39060389912,
            "unit": "ns/iter",
            "extra": "iterations: 42209\ncpu: 19017.005851832513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62697.43825594934,
            "unit": "ns/iter",
            "extra": "iterations: 13807\ncpu: 62694.43760411408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 587232.391999919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587222.0000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 582009.1615281727,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 581988.6729222533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 581521.8944923619,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 581501.6589250161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578550.5949867669,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 578531.3324538274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328865.9105322776,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 328857.07814269676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558377.2554278548,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 558356.3218390812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 518.3328033897069,
            "unit": "ns/iter",
            "extra": "iterations: 1354232\ncpu: 518.298858688911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2896.3938423340123,
            "unit": "ns/iter",
            "extra": "iterations: 241650\ncpu: 2896.234636871508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2345.996731441225,
            "unit": "ns/iter",
            "extra": "iterations: 296155\ncpu: 2345.874626462483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2241.6764261774324,
            "unit": "ns/iter",
            "extra": "iterations: 313916\ncpu: 2241.5569770256984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1916.901143292889,
            "unit": "ns/iter",
            "extra": "iterations: 365873\ncpu: 1916.8110245904986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17259.974928775286,
            "unit": "ns/iter",
            "extra": "iterations: 40365\ncpu: 17258.996655518607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31684.361917287108,
            "unit": "ns/iter",
            "extra": "iterations: 22052\ncpu: 31683.135316524793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7380.249862899071,
            "unit": "ns/iter",
            "extra": "iterations: 94820\ncpu: 7380.114954651043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7300.496457004836,
            "unit": "ns/iter",
            "extra": "iterations: 95964\ncpu: 7300.160476845575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7318.426942668888,
            "unit": "ns/iter",
            "extra": "iterations: 95603\ncpu: 7318.030814932719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13895.822075649565,
            "unit": "ns/iter",
            "extra": "iterations: 50336\ncpu: 13894.90623013359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14047.694551793566,
            "unit": "ns/iter",
            "extra": "iterations: 47612\ncpu: 14047.2212887508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5060.520360685063,
            "unit": "ns/iter",
            "extra": "iterations: 138625\ncpu: 5060.351307484269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26169.563522057175,
            "unit": "ns/iter",
            "extra": "iterations: 26723\ncpu: 26168.951839239962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21019.11889596594,
            "unit": "ns/iter",
            "extra": "iterations: 33441\ncpu: 21018.393588708397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20713.546885166914,
            "unit": "ns/iter",
            "extra": "iterations: 33806\ncpu: 20713.237295154806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20972.274703853618,
            "unit": "ns/iter",
            "extra": "iterations: 33345\ncpu: 20972.364672364838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48035.80390003343,
            "unit": "ns/iter",
            "extra": "iterations: 14564\ncpu: 48035.47789068885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153961.4664287361,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 153955.27548516807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 128355.65059360728,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 128356.18264840238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128262.4282314199,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128262.88905162942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130984.17308776025,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 130982.72881037414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83046.607163965,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 83044.83981558112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131484.24237890527,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 131480.8303721693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4996.178033074537,
            "unit": "ns/iter",
            "extra": "iterations: 136660\ncpu: 4996.200790282477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25037.803358787896,
            "unit": "ns/iter",
            "extra": "iterations: 27629\ncpu: 25037.45701979833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19907.672263876815,
            "unit": "ns/iter",
            "extra": "iterations: 35077\ncpu: 19907.73726373398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19639.48942504721,
            "unit": "ns/iter",
            "extra": "iterations: 35603\ncpu: 19638.943347470395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20105.585632335682,
            "unit": "ns/iter",
            "extra": "iterations: 34689\ncpu: 20104.237654588014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46430.53675009967,
            "unit": "ns/iter",
            "extra": "iterations: 15102\ncpu: 46429.19480863544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155138.39982328797,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 155130.57212281995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128666.68698214035,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 128656.9140121525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125756.86199342049,
            "unit": "ns/iter",
            "extra": "iterations: 5478\ncpu: 125750.98576122435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124569.11037921629,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 124568.71995727271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81479.68134221055,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 81478.22465492593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 125628.19647623156,
            "unit": "ns/iter",
            "extra": "iterations: 5619\ncpu: 125620.87560063975 ns\nthreads: 1"
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
        "date": 1702503973106,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1331.599043844572,
            "unit": "ns/iter",
            "extra": "iterations: 530876\ncpu: 1331.526571176697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15975.496023165268,
            "unit": "ns/iter",
            "extra": "iterations: 51800\ncpu: 15975.021235521237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34531.51292205139,
            "unit": "ns/iter",
            "extra": "iterations: 23990\ncpu: 34529.89162150897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52767.18704379638,
            "unit": "ns/iter",
            "extra": "iterations: 16440\ncpu: 52764.95133819952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56882.27990000314,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56882.17 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71342.14719173612,
            "unit": "ns/iter",
            "extra": "iterations: 12392\ncpu: 71338.08908973528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83544.3407761301,
            "unit": "ns/iter",
            "extra": "iterations: 10256\ncpu: 83539.06006240248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98378.6435377291,
            "unit": "ns/iter",
            "extra": "iterations: 8921\ncpu: 98373.9827373613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115443.22911948813,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 115434.28799786857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1169.5182980975212,
            "unit": "ns/iter",
            "extra": "iterations: 593477\ncpu: 1169.44666768889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 942.1515745269797,
            "unit": "ns/iter",
            "extra": "iterations: 741048\ncpu: 942.1011864278715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 900.8837806800367,
            "unit": "ns/iter",
            "extra": "iterations: 770655\ncpu: 900.8738021553095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 883.4140367736755,
            "unit": "ns/iter",
            "extra": "iterations: 792903\ncpu: 883.4096982859188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1780.5911702262913,
            "unit": "ns/iter",
            "extra": "iterations: 394257\ncpu: 1780.5921010914185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5166.409892578701,
            "unit": "ns/iter",
            "extra": "iterations: 154904\ncpu: 5166.28557041781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25330.526428058016,
            "unit": "ns/iter",
            "extra": "iterations: 31879\ncpu: 25330.515386304476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19986.045145952496,
            "unit": "ns/iter",
            "extra": "iterations: 40801\ncpu: 19986.311610009594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18312.726450658898,
            "unit": "ns/iter",
            "extra": "iterations: 44566\ncpu: 18312.54543822647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18624.159383806273,
            "unit": "ns/iter",
            "extra": "iterations: 43298\ncpu: 18623.998799020777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65481.46932153851,
            "unit": "ns/iter",
            "extra": "iterations: 13560\ncpu: 65481.03982300882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 554761.7119999586,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554727.6999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557272.923125814,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 557262.8335451077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560342.6891628698,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 560332.5113562617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 565898.6314791545,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 565892.8571428583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325205.69740742963,
            "unit": "ns/iter",
            "extra": "iterations: 2700\ncpu: 325200.0740740731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 553600.7612612859,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 553596.074646075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2321099.218045134,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2321070.175438601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1075789.4214202573,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1075788.5913853305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3245765.041958032,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3245675.874125878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7373.090008695725,
            "unit": "ns/iter",
            "extra": "iterations: 115000\ncpu: 7372.743478260848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39694.277305000105,
            "unit": "ns/iter",
            "extra": "iterations: 21269\ncpu: 39692.64657482714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31495.687521098116,
            "unit": "ns/iter",
            "extra": "iterations: 26661\ncpu: 31494.066239075997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30573.247439158324,
            "unit": "ns/iter",
            "extra": "iterations: 27530\ncpu: 30571.69633127491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32306.378231090282,
            "unit": "ns/iter",
            "extra": "iterations: 27158\ncpu: 32306.403269754737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76189.63205239865,
            "unit": "ns/iter",
            "extra": "iterations: 11450\ncpu: 76186.94323144105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 582678.063000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582619.7999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 584941.618501036,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584937.1370695478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 593204.5321477709,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 593181.326949383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 590032.8696537553,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 590004.3448744041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334776.45268445933,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 334760.3707995347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582986.0260520949,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 582961.055444223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2495517.101876806,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2495306.166219842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1126624.5759415466,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 1126564.5200485971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4947.314154970692,
            "unit": "ns/iter",
            "extra": "iterations: 159746\ncpu: 4947.070349179307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25366.649100899594,
            "unit": "ns/iter",
            "extra": "iterations: 32032\ncpu: 25365.48451548448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19721.962528706736,
            "unit": "ns/iter",
            "extra": "iterations: 41365\ncpu: 19721.090293726476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18252.76431475608,
            "unit": "ns/iter",
            "extra": "iterations: 44517\ncpu: 18251.29950356054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18531.63657983992,
            "unit": "ns/iter",
            "extra": "iterations: 44571\ncpu: 18530.477216127176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62931.41544434635,
            "unit": "ns/iter",
            "extra": "iterations: 13908\ncpu: 62928.65976416418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 570838.493999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570804.6999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570512.2706571115,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 570481.1320754713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574511.6809895793,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 574513.3463541663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 563820.5753424806,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 563821.2002609232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326976.003717462,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 326970.0371747219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 569785.0914359814,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 569778.6220218915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 511.01891214864054,
            "unit": "ns/iter",
            "extra": "iterations: 1365683\ncpu: 511.02576512997666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3053.726829757302,
            "unit": "ns/iter",
            "extra": "iterations: 229443\ncpu: 3053.640337687358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2270.6219400660643,
            "unit": "ns/iter",
            "extra": "iterations: 308340\ncpu: 2270.6541480184205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2261.938966423578,
            "unit": "ns/iter",
            "extra": "iterations: 309682\ncpu: 2261.8250334213976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1909.574871071758,
            "unit": "ns/iter",
            "extra": "iterations: 366677\ncpu: 1909.4950051407554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17490.047099628442,
            "unit": "ns/iter",
            "extra": "iterations: 39788\ncpu: 17488.785563486625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30204.998619977894,
            "unit": "ns/iter",
            "extra": "iterations: 23188\ncpu: 30202.859237536966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7459.733007225925,
            "unit": "ns/iter",
            "extra": "iterations: 93834\ncpu: 7459.176844214256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7371.448984552497,
            "unit": "ns/iter",
            "extra": "iterations: 94638\ncpu: 7371.551596610369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7424.198817793681,
            "unit": "ns/iter",
            "extra": "iterations: 94569\ncpu: 7424.17811333527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14743.111947675872,
            "unit": "ns/iter",
            "extra": "iterations: 47549\ncpu: 14742.219605038797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13963.772884129497,
            "unit": "ns/iter",
            "extra": "iterations: 50133\ncpu: 13963.02834460355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5361.910757701342,
            "unit": "ns/iter",
            "extra": "iterations: 129972\ncpu: 5361.6132705505515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27007.75572313518,
            "unit": "ns/iter",
            "extra": "iterations: 25991\ncpu: 27006.313723981097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21152.703898935408,
            "unit": "ns/iter",
            "extra": "iterations: 33009\ncpu: 21151.940379896656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20845.445114128215,
            "unit": "ns/iter",
            "extra": "iterations: 33515\ncpu: 20845.245412501987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21400.62155871856,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21400.48078395336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48676.41048246871,
            "unit": "ns/iter",
            "extra": "iterations: 14405\ncpu: 48676.16105518931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157879.19508347046,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 157881.12313937632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133062.9344978257,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 133062.90108221094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130788.37372785836,
            "unit": "ns/iter",
            "extra": "iterations: 5306\ncpu: 130788.20203543185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130677.03094128953,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 130677.11090400757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84109.04797224277,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 84107.30948678206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133599.06592564727,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 133598.92679187487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4953.231238171323,
            "unit": "ns/iter",
            "extra": "iterations: 141071\ncpu: 4953.302946743189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25621.234541185622,
            "unit": "ns/iter",
            "extra": "iterations: 27266\ncpu: 25621.048191887257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20448.9178759399,
            "unit": "ns/iter",
            "extra": "iterations: 34387\ncpu: 20448.593945386565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20255.020438974552,
            "unit": "ns/iter",
            "extra": "iterations: 34444\ncpu: 20254.598769016466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20750.83024920647,
            "unit": "ns/iter",
            "extra": "iterations: 33667\ncpu: 20750.89553568806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47176.40894978859,
            "unit": "ns/iter",
            "extra": "iterations: 14816\ncpu: 47176.61987041057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152240.7724512026,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 152241.0629067265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127417.03403477395,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 127417.09057639485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127043.45271845134,
            "unit": "ns/iter",
            "extra": "iterations: 5573\ncpu: 127043.87224116309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 124914.83567740899,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 124913.6727790646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82191.4919817421,
            "unit": "ns/iter",
            "extra": "iterations: 8543\ncpu: 82191.08041671565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126241.44739715164,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 126243.21077539124 ns\nthreads: 1"
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
        "date": 1705575623104,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1333.9596836538874,
            "unit": "ns/iter",
            "extra": "iterations: 529041\ncpu: 1333.886220538673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15890.094459194639,
            "unit": "ns/iter",
            "extra": "iterations: 51599\ncpu: 15890.094769278478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33891.613023524325,
            "unit": "ns/iter",
            "extra": "iterations: 24402\ncpu: 33890.16474059503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 49961.19372164999,
            "unit": "ns/iter",
            "extra": "iterations: 16756\ncpu: 49961.0527572213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55533.58209999715,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55532.06 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70573.28404075901,
            "unit": "ns/iter",
            "extra": "iterations: 12463\ncpu: 70573.33707775017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84368.13936712513,
            "unit": "ns/iter",
            "extra": "iterations: 10397\ncpu: 84363.38366836586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97237.82593051028,
            "unit": "ns/iter",
            "extra": "iterations: 8893\ncpu: 97238.65961992579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113581.94345632168,
            "unit": "ns/iter",
            "extra": "iterations: 7534\ncpu: 113579.93097955923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1179.7010270859705,
            "unit": "ns/iter",
            "extra": "iterations: 593037\ncpu: 1179.708685967317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 947.729339687227,
            "unit": "ns/iter",
            "extra": "iterations: 739074\ncpu: 947.7113252529506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 935.838392694694,
            "unit": "ns/iter",
            "extra": "iterations: 747064\ncpu: 935.8196888084553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 951.2265897366517,
            "unit": "ns/iter",
            "extra": "iterations: 735735\ncpu: 951.2336642948902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1838.6620260276889,
            "unit": "ns/iter",
            "extra": "iterations: 380982\ncpu: 1838.6154726470036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5254.0684877299245,
            "unit": "ns/iter",
            "extra": "iterations: 151633\ncpu: 5254.008032552278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 26178.33015513523,
            "unit": "ns/iter",
            "extra": "iterations: 31779\ncpu: 26177.91623399101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20657.554818191296,
            "unit": "ns/iter",
            "extra": "iterations: 39932\ncpu: 20657.477712110584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19625.983424215367,
            "unit": "ns/iter",
            "extra": "iterations: 41446\ncpu: 19624.974665830217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19976.76167638635,
            "unit": "ns/iter",
            "extra": "iterations: 41494\ncpu: 19976.23752831739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65254.04573126067,
            "unit": "ns/iter",
            "extra": "iterations: 13798\ncpu: 65251.45673285975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 560034.4690000156,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560015.7999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554786.0147341659,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 554760.4740550945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556484.722860767,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 556455.4916985951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 553198.6737452254,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 553191.7631917619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 314115.0288141733,
            "unit": "ns/iter",
            "extra": "iterations: 2707\ncpu: 314096.9708164023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 540002.1551939857,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 539976.720901125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2313297.2431077952,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2313114.786967414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1056611.3025113987,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1056554.3378995422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3231803.326388653,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3231561.4583333405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7312.718800830674,
            "unit": "ns/iter",
            "extra": "iterations: 115580\ncpu: 7312.237411316832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39845.667864158655,
            "unit": "ns/iter",
            "extra": "iterations: 20877\ncpu: 39845.57168175513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31153.68945312451,
            "unit": "ns/iter",
            "extra": "iterations: 26624\ncpu: 31152.63671875021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30325.56182252504,
            "unit": "ns/iter",
            "extra": "iterations: 27215\ncpu: 30323.905934227554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30058.775813681357,
            "unit": "ns/iter",
            "extra": "iterations: 27437\ncpu: 30057.010606115975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77035.51545753372,
            "unit": "ns/iter",
            "extra": "iterations: 11289\ncpu: 77031.5882717687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 584444.064999957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584430.0999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 586617.0773368992,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 586582.2461331518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584442.8735475317,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 584399.8632945989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581229.9495628718,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 581211.7014122403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 333091.8515833464,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 333071.5375810748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574053.9921207774,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 574012.6723571864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2468530.7845744016,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2468413.829787232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1088028.3192488633,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1087950.2347417818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4906.063260341136,
            "unit": "ns/iter",
            "extra": "iterations: 160701\ncpu: 4906.08459188183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24948.099759361343,
            "unit": "ns/iter",
            "extra": "iterations: 32829\ncpu: 24947.90276889326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19588.298971054424,
            "unit": "ns/iter",
            "extra": "iterations: 41596\ncpu: 19587.611789595037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18383.350848088277,
            "unit": "ns/iter",
            "extra": "iterations: 45809\ncpu: 18382.942216595024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18453.928317655413,
            "unit": "ns/iter",
            "extra": "iterations: 44753\ncpu: 18453.815386677947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 61721.748700006174,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61717.05999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579752.50100003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579719.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581144.9681697412,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 581105.4376657853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 578344.8053911675,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 578329.5200525968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576223.3909626987,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 576211.5913555989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329069.18638944015,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 329064.0453686211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566736.3629293093,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 566740.1166558642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 497.7292200167652,
            "unit": "ns/iter",
            "extra": "iterations: 1406197\ncpu: 497.7268476607485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3079.4041036842655,
            "unit": "ns/iter",
            "extra": "iterations: 226187\ncpu: 3079.362209145539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2384.3552016876956,
            "unit": "ns/iter",
            "extra": "iterations: 293895\ncpu: 2384.3427074295237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2432.559986652107,
            "unit": "ns/iter",
            "extra": "iterations: 287689\ncpu: 2432.5490373285143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1916.9592315903867,
            "unit": "ns/iter",
            "extra": "iterations: 365430\ncpu: 1916.9529047970811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17398.84795263958,
            "unit": "ns/iter",
            "extra": "iterations: 40540\ncpu: 17398.81598421314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31159.973449746263,
            "unit": "ns/iter",
            "extra": "iterations: 22448\ncpu: 31159.444048467605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7405.477305460328,
            "unit": "ns/iter",
            "extra": "iterations: 94428\ncpu: 7405.408353454618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7310.984858287576,
            "unit": "ns/iter",
            "extra": "iterations: 95828\ncpu: 7310.422840923305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7309.0029250758,
            "unit": "ns/iter",
            "extra": "iterations: 95724\ncpu: 7308.425264301525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14505.659921036671,
            "unit": "ns/iter",
            "extra": "iterations: 48377\ncpu: 14504.63443371851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13847.894091350487,
            "unit": "ns/iter",
            "extra": "iterations: 50553\ncpu: 13847.540205328845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5158.403673715987,
            "unit": "ns/iter",
            "extra": "iterations: 135612\ncpu: 5158.32669675245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26566.44588678534,
            "unit": "ns/iter",
            "extra": "iterations: 26269\ncpu: 26566.127374471816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20929.513239689164,
            "unit": "ns/iter",
            "extra": "iterations: 33460\ncpu: 20928.36521219369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20693.960034313855,
            "unit": "ns/iter",
            "extra": "iterations: 33804\ncpu: 20692.716838243672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21179.391548612595,
            "unit": "ns/iter",
            "extra": "iterations: 33107\ncpu: 21178.21306672305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48703.514363219896,
            "unit": "ns/iter",
            "extra": "iterations: 14377\ncpu: 48703.14391041282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158405.6366292326,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 158397.77528089745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133869.12990763356,
            "unit": "ns/iter",
            "extra": "iterations: 5196\ncpu: 133859.93071593385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133418.95284459277,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 133410.00381825046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129890.96655837924,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 129879.03688133117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83311.13512869486,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83309.9618684456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130310.79572713998,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 130307.75862069093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4920.825619369517,
            "unit": "ns/iter",
            "extra": "iterations: 142080\ncpu: 4920.862190315388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25225.50597724313,
            "unit": "ns/iter",
            "extra": "iterations: 27772\ncpu: 25225.684142301874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20249.92012964626,
            "unit": "ns/iter",
            "extra": "iterations: 34556\ncpu: 20250.063664775942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20007.45739026031,
            "unit": "ns/iter",
            "extra": "iterations: 34992\ncpu: 19992.964106081457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20459.87802669673,
            "unit": "ns/iter",
            "extra": "iterations: 34237\ncpu: 20459.49995618807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46489.47460885591,
            "unit": "ns/iter",
            "extra": "iterations: 15084\ncpu: 46489.35958631655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153222.477202983,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 153223.56422621413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127954.56375963199,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 127949.52363503275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128243.35359417406,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 128235.614194721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128284.77034456201,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 128275.23826979616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81336.97527767341,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 81330.53863609198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127665.49431304805,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 127659.41505686898 ns\nthreads: 1"
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
        "date": 1705773447036,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1341.030138013233,
            "unit": "ns/iter",
            "extra": "iterations: 522994\ncpu: 1340.9325919609023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16013.634959633491,
            "unit": "ns/iter",
            "extra": "iterations: 51282\ncpu: 16012.860262860262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34212.39763057332,
            "unit": "ns/iter",
            "extra": "iterations: 23972\ncpu: 34210.061738695156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50682.6409916926,
            "unit": "ns/iter",
            "extra": "iterations: 16618\ncpu: 50680.84005295465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56722.357399996785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56717.17000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72608.13044894938,
            "unit": "ns/iter",
            "extra": "iterations: 12273\ncpu: 72605.89098020043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84083.20938315161,
            "unit": "ns/iter",
            "extra": "iterations: 10359\ncpu: 84079.06168549084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96391.02929666263,
            "unit": "ns/iter",
            "extra": "iterations: 8943\ncpu: 96386.73823101867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112350.71751108719,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 112347.30546969475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1207.6434644005608,
            "unit": "ns/iter",
            "extra": "iterations: 579067\ncpu: 1207.6210524861535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 962.0896581259046,
            "unit": "ns/iter",
            "extra": "iterations: 726203\ncpu: 962.0610215050059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 960.9530243284817,
            "unit": "ns/iter",
            "extra": "iterations: 728079\ncpu: 960.8991606680049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 968.6730674632975,
            "unit": "ns/iter",
            "extra": "iterations: 721681\ncpu: 968.6391909999016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1833.7708361852401,
            "unit": "ns/iter",
            "extra": "iterations: 379868\ncpu: 1833.64800404351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 4974.894838133462,
            "unit": "ns/iter",
            "extra": "iterations: 160039\ncpu: 4974.748655015334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25957.94832556931,
            "unit": "ns/iter",
            "extra": "iterations: 31563\ncpu: 25956.78167474577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19440.369188451332,
            "unit": "ns/iter",
            "extra": "iterations: 41082\ncpu: 19439.983447738625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19557.15646919483,
            "unit": "ns/iter",
            "extra": "iterations: 42200\ncpu: 19556.213270142194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18840.395050882733,
            "unit": "ns/iter",
            "extra": "iterations: 40977\ncpu: 18839.795495033795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64505.81736788658,
            "unit": "ns/iter",
            "extra": "iterations: 13738\ncpu: 64502.83884117055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 552013.6929999352,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552002.9999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 552652.7905188835,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 552634.6572709787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 549239.3245838501,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 549218.6299615873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 547261.1146417612,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 547226.6666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 323139.4486525779,
            "unit": "ns/iter",
            "extra": "iterations: 2746\ncpu: 323122.79679533886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560007.5564102961,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 559999.6794871801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2329443.5025124913,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2329272.3618090423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1056683.5661680824,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1056636.018411966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3224428.000000125,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3224275.694444451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7122.326183875283,
            "unit": "ns/iter",
            "extra": "iterations: 115067\ncpu: 7122.030643016665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39657.14860576952,
            "unit": "ns/iter",
            "extra": "iterations: 20800\ncpu: 39656.16346153837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30439.469747927196,
            "unit": "ns/iter",
            "extra": "iterations: 26461\ncpu: 30438.071123540354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 29688.758951775195,
            "unit": "ns/iter",
            "extra": "iterations: 27704\ncpu: 29686.608431995486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30380.087185831002,
            "unit": "ns/iter",
            "extra": "iterations: 27493\ncpu: 30378.354490233894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76154.42892372522,
            "unit": "ns/iter",
            "extra": "iterations: 11354\ncpu: 76151.53249955944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602468.454000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602456.5999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587417.9810682773,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 587407.2346179871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 573943.8814569572,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 573926.2913907282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 574297.2398940049,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 574290.2584493058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 331688.04300235194,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 331670.36747459165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576370.5369393051,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 576345.6464379934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2463948.159574552,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2463796.0106383027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1107013.7367150034,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1106964.6135265664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5106.238790028512,
            "unit": "ns/iter",
            "extra": "iterations: 157293\ncpu: 5106.180821778439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25032.850754476498,
            "unit": "ns/iter",
            "extra": "iterations: 32738\ncpu: 25032.23165740124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19544.99466653868,
            "unit": "ns/iter",
            "extra": "iterations: 41999\ncpu: 19544.417724231604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19085.63437907496,
            "unit": "ns/iter",
            "extra": "iterations: 42968\ncpu: 19085.303016198148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18848.75452392435,
            "unit": "ns/iter",
            "extra": "iterations: 43491\ncpu: 18848.73422087318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 61861.70980000725,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61857.99000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 569360.993000032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569322.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 558498.9389851871,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 558473.3461785485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 555661.0715198128,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 555655.0446998718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 555622.4619321298,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 555593.3461292371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 323724.2681024912,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 323709.7289268456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 550403.2342171693,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 550379.7979798011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 491.20573264719695,
            "unit": "ns/iter",
            "extra": "iterations: 1421612\ncpu: 491.1834593405228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2980.500463459012,
            "unit": "ns/iter",
            "extra": "iterations: 235188\ncpu: 2980.3582665782205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2455.903799640033,
            "unit": "ns/iter",
            "extra": "iterations: 284448\ncpu: 2455.7915682304074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2340.877099530253,
            "unit": "ns/iter",
            "extra": "iterations: 299055\ncpu: 2340.8011904164773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1896.451681662277,
            "unit": "ns/iter",
            "extra": "iterations: 369218\ncpu: 1896.4037506297086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17061.793694580414,
            "unit": "ns/iter",
            "extra": "iterations: 40600\ncpu: 17061.43596059112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29158.755614819635,
            "unit": "ns/iter",
            "extra": "iterations: 23999\ncpu: 29157.910746281046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7201.128643879842,
            "unit": "ns/iter",
            "extra": "iterations: 97012\ncpu: 7200.722591019764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7170.50735858918,
            "unit": "ns/iter",
            "extra": "iterations: 97641\ncpu: 7170.095554121742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7156.942242355999,
            "unit": "ns/iter",
            "extra": "iterations: 98013\ncpu: 7156.473120912532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14354.49328886468,
            "unit": "ns/iter",
            "extra": "iterations: 48874\ncpu: 14353.382166387217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13646.120946434305,
            "unit": "ns/iter",
            "extra": "iterations: 51097\ncpu: 13645.910718828807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5264.275157127839,
            "unit": "ns/iter",
            "extra": "iterations: 135399\ncpu: 5264.038877687466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26164.6422203154,
            "unit": "ns/iter",
            "extra": "iterations: 26807\ncpu: 26163.147685306278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20940.36222575645,
            "unit": "ns/iter",
            "extra": "iterations: 33319\ncpu: 20938.86971397733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20739.77903020428,
            "unit": "ns/iter",
            "extra": "iterations: 33801\ncpu: 20738.80062720043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21370.771074781518,
            "unit": "ns/iter",
            "extra": "iterations: 32788\ncpu: 21369.644382090984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48401.76754114339,
            "unit": "ns/iter",
            "extra": "iterations: 14523\ncpu: 48399.09798251104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157451.4674060774,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 157445.04300588343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131391.34273359968,
            "unit": "ns/iter",
            "extra": "iterations: 5319\ncpu: 131384.43316412912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130582.57267983207,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130575.1397689155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130925.26625561094,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 130920.8146487298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82424.50470630325,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 82422.45919218272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130706.07220352709,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 130701.29068462295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4934.049427251073,
            "unit": "ns/iter",
            "extra": "iterations: 142209\ncpu: 4933.941593007505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25207.47592813007,
            "unit": "ns/iter",
            "extra": "iterations: 27771\ncpu: 25207.370998523937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19930.61777458636,
            "unit": "ns/iter",
            "extra": "iterations: 34825\ncpu: 19929.972720746628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19722.353291896423,
            "unit": "ns/iter",
            "extra": "iterations: 35557\ncpu: 19721.933796439287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20343.847232685817,
            "unit": "ns/iter",
            "extra": "iterations: 34510\ncpu: 20343.538104897136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46323.6742921591,
            "unit": "ns/iter",
            "extra": "iterations: 15081\ncpu: 46323.48650619998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152113.3889009274,
            "unit": "ns/iter",
            "extra": "iterations: 4613\ncpu: 152108.30262302223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127138.41704442518,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 127131.71350861438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127554.9131703708,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 127547.35497993261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127145.9156670351,
            "unit": "ns/iter",
            "extra": "iterations: 5502\ncpu: 127139.02217375519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81319.45540179065,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81316.68798697529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126564.67711542669,
            "unit": "ns/iter",
            "extra": "iterations: 5519\ncpu: 126564.21453161725 ns\nthreads: 1"
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
        "date": 1705774878557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1353.9197075479235,
            "unit": "ns/iter",
            "extra": "iterations: 439867\ncpu: 1353.8490043581355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16146.465626153946,
            "unit": "ns/iter",
            "extra": "iterations: 51449\ncpu: 16146.002837761667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33795.692039390706,
            "unit": "ns/iter",
            "extra": "iterations: 24370\ncpu: 33793.67254821502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50368.16071962078,
            "unit": "ns/iter",
            "extra": "iterations: 16731\ncpu: 50367.14482099096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56521.650999997066,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56518.539999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71427.69900375723,
            "unit": "ns/iter",
            "extra": "iterations: 12246\ncpu: 71424.96325330723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83731.13805534224,
            "unit": "ns/iter",
            "extra": "iterations: 10264\ncpu: 83727.76695245523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96815.12544964498,
            "unit": "ns/iter",
            "extra": "iterations: 8896\ncpu: 96811.02742805752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114107.9588688956,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 114104.64010282792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1263.1286985123913,
            "unit": "ns/iter",
            "extra": "iterations: 555764\ncpu: 1263.099625020693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 987.2682537241279,
            "unit": "ns/iter",
            "extra": "iterations: 708691\ncpu: 987.250578884168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 981.1838165783198,
            "unit": "ns/iter",
            "extra": "iterations: 714027\ncpu: 981.1606563897435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 996.2201766761699,
            "unit": "ns/iter",
            "extra": "iterations: 704566\ncpu: 996.1973754055695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1858.8503124246006,
            "unit": "ns/iter",
            "extra": "iterations: 376571\ncpu: 1858.7615615647521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5193.893203882964,
            "unit": "ns/iter",
            "extra": "iterations: 154088\ncpu: 5193.7237163179425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25378.614561699796,
            "unit": "ns/iter",
            "extra": "iterations: 31782\ncpu: 25376.79504121832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20075.767894507066,
            "unit": "ns/iter",
            "extra": "iterations: 41102\ncpu: 20075.098535351128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19276.568148199913,
            "unit": "ns/iter",
            "extra": "iterations: 42591\ncpu: 19276.03719095587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20068.653009972193,
            "unit": "ns/iter",
            "extra": "iterations: 41811\ncpu: 20068.077778575018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66156.65125642634,
            "unit": "ns/iter",
            "extra": "iterations: 13411\ncpu: 66154.8952352546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 573442.4160000344,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573409.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 575156.4365129354,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 575137.2710044219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558843.9631043389,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 558815.2035623407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 565975.4647435643,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 565978.8461538453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329154.07197254617,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 329146.64889565966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562077.2554557299,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 562068.9345314499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2340847.6801006244,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2340783.1234256965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1088755.069905202,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1088723.9336492901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3244745.968531375,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3244737.412587418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7349.924413170669,
            "unit": "ns/iter",
            "extra": "iterations: 115536\ncpu: 7349.781886165346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39886.635086043454,
            "unit": "ns/iter",
            "extra": "iterations: 20920\ncpu: 39886.90248565974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31736.65790579215,
            "unit": "ns/iter",
            "extra": "iterations: 26177\ncpu: 31735.848263743013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30368.380583659306,
            "unit": "ns/iter",
            "extra": "iterations: 27379\ncpu: 30368.585412177334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30730.28198482402,
            "unit": "ns/iter",
            "extra": "iterations: 26622\ncpu: 30729.700999173696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75977.10839964345,
            "unit": "ns/iter",
            "extra": "iterations: 11310\ncpu: 75974.61538461543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600433.1359999924,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600409.2000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593262.0901583327,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 593238.2656572631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588875.6542875943,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 588854.96286293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586964.5691057228,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 586942.4119241181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335995.4266975077,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 335984.9151234548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578809.9303415671,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 578793.4360348271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2476770.220159079,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2476648.0106100827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1096362.1923990683,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1096341.923990494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5011.501905757589,
            "unit": "ns/iter",
            "extra": "iterations: 159779\ncpu: 5011.363195413678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24724.19305358199,
            "unit": "ns/iter",
            "extra": "iterations: 33053\ncpu: 24724.60291047703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19193.30702743296,
            "unit": "ns/iter",
            "extra": "iterations: 42576\ncpu: 19192.390078917764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18588.145226902732,
            "unit": "ns/iter",
            "extra": "iterations: 44248\ncpu: 18588.103417103655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19308.3304964551,
            "unit": "ns/iter",
            "extra": "iterations: 42300\ncpu: 19307.704491725897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 61861.50289998977,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61861.71000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573065.6760000556,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573058.0999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 562706.7702703028,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 562711.0682110699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 568171.9686500271,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 568156.2380038393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 566566.5178687328,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 566562.0532813546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 325386.034431123,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 325387.72455089836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564054.8486030152,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 564035.0227420373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 496.1486170154222,
            "unit": "ns/iter",
            "extra": "iterations: 1416574\ncpu: 496.15741923824334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3054.9018960607245,
            "unit": "ns/iter",
            "extra": "iterations: 229634\ncpu: 3054.849020615439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2473.848917510299,
            "unit": "ns/iter",
            "extra": "iterations: 283236\ncpu: 2473.859961304353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2379.9178426244052,
            "unit": "ns/iter",
            "extra": "iterations: 295433\ncpu: 2379.8715783273974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1945.7355873716394,
            "unit": "ns/iter",
            "extra": "iterations: 359355\ncpu: 1945.7425108875605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17340.03767173402,
            "unit": "ns/iter",
            "extra": "iterations: 40906\ncpu: 17339.558988901503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31719.43727305426,
            "unit": "ns/iter",
            "extra": "iterations: 22032\ncpu: 31718.967864923394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7539.555798854454,
            "unit": "ns/iter",
            "extra": "iterations: 91337\ncpu: 7539.370682198796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7504.314180968627,
            "unit": "ns/iter",
            "extra": "iterations: 93287\ncpu: 7504.158135645974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7399.44666881194,
            "unit": "ns/iter",
            "extra": "iterations: 93210\ncpu: 7399.441047097982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14595.517593715467,
            "unit": "ns/iter",
            "extra": "iterations: 47858\ncpu: 14595.311128755806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13943.237498508692,
            "unit": "ns/iter",
            "extra": "iterations: 50354\ncpu: 13943.301425904574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5235.904262764062,
            "unit": "ns/iter",
            "extra": "iterations: 131464\ncpu: 5235.823495405554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26505.64275133643,
            "unit": "ns/iter",
            "extra": "iterations: 26329\ncpu: 26505.78449618253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21015.726024446587,
            "unit": "ns/iter",
            "extra": "iterations: 32481\ncpu: 21014.870231828012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20929.829487447547,
            "unit": "ns/iter",
            "extra": "iterations: 33499\ncpu: 20929.965073583997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21379.834696616403,
            "unit": "ns/iter",
            "extra": "iterations: 32764\ncpu: 21379.89561714093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 47836.64347527392,
            "unit": "ns/iter",
            "extra": "iterations: 14560\ncpu: 47836.820054944954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157410.72623059916,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 157409.10316925208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132187.3455299866,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 132187.75933609824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132383.26312807546,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132381.56403475656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132139.37667484456,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 132133.44027174855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82720.64419208733,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 82720.32174118767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132422.20588236334,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 132419.6455505274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5087.332599854524,
            "unit": "ns/iter",
            "extra": "iterations: 137700\ncpu: 5087.418300653668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25537.960455714216,
            "unit": "ns/iter",
            "extra": "iterations: 27210\ncpu: 25537.875780963113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20645.13974597047,
            "unit": "ns/iter",
            "extra": "iterations: 33933\ncpu: 20644.68511478525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20224.871953512175,
            "unit": "ns/iter",
            "extra": "iterations: 34589\ncpu: 20224.776663101024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20667.835675069877,
            "unit": "ns/iter",
            "extra": "iterations: 33878\ncpu: 20667.91428065389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46276.59010437735,
            "unit": "ns/iter",
            "extra": "iterations: 15138\ncpu: 46276.601928920885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152270.5031889109,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 152267.8909170875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128176.04616228883,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128175.30683275299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127053.28916318336,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127047.86712652017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127191.17120550812,
            "unit": "ns/iter",
            "extra": "iterations: 5508\ncpu: 127187.78140886045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81091.5832158026,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 81088.12881993385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126585.62621709117,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 126581.15759105426 ns\nthreads: 1"
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
        "date": 1705778449773,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1362.4528390307612,
            "unit": "ns/iter",
            "extra": "iterations: 518522\ncpu: 1362.416638059716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16230.922122658816,
            "unit": "ns/iter",
            "extra": "iterations: 50220\ncpu: 16230.999601752292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35285.89875237903,
            "unit": "ns/iter",
            "extra": "iterations: 23645\ncpu: 35284.96933812644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51510.60438756958,
            "unit": "ns/iter",
            "extra": "iterations: 16410\ncpu: 51510.03046922608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57202.59230000692,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57201.64999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72263.33542215999,
            "unit": "ns/iter",
            "extra": "iterations: 12128\ncpu: 72262.17018469653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84966.71095047297,
            "unit": "ns/iter",
            "extra": "iterations: 10237\ncpu: 84964.88228973332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99053.47367825688,
            "unit": "ns/iter",
            "extra": "iterations: 8833\ncpu: 99052.32650288685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115207.22398729925,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 115202.84617421225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1140.8489297170606,
            "unit": "ns/iter",
            "extra": "iterations: 593161\ncpu: 1140.789094360551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 912.7044803483419,
            "unit": "ns/iter",
            "extra": "iterations: 767976\ncpu: 912.664197839516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 903.1801169621526,
            "unit": "ns/iter",
            "extra": "iterations: 775807\ncpu: 903.1363470553894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 919.7574205410552,
            "unit": "ns/iter",
            "extra": "iterations: 760423\ncpu: 919.7245480475995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1831.063032028302,
            "unit": "ns/iter",
            "extra": "iterations: 381441\ncpu: 1831.0171166707307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5207.9355530149,
            "unit": "ns/iter",
            "extra": "iterations: 153956\ncpu: 5207.645690976642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25089.349761476675,
            "unit": "ns/iter",
            "extra": "iterations: 32911\ncpu: 25087.82473944882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20813.741530042324,
            "unit": "ns/iter",
            "extra": "iterations: 39463\ncpu: 20813.05273293971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18524.63996655824,
            "unit": "ns/iter",
            "extra": "iterations: 44257\ncpu: 18523.49006936754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19195.498490849815,
            "unit": "ns/iter",
            "extra": "iterations: 42408\ncpu: 19194.739200150878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65201.95258556757,
            "unit": "ns/iter",
            "extra": "iterations: 13498\ncpu: 65198.41457993784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 551229.2529999741,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551217.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 552177.8281349438,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 552149.0133672816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 557198.9391415152,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 557172.645739909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 558626.8247422341,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 558597.8092783515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324583.63376625226,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 324566.0111317254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556928.1746949257,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 556897.944765574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2355954.8379747453,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2355844.3037974685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1061286.9174311827,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1061235.2064220158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3253554.764084574,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3253385.915492952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7653.738991985896,
            "unit": "ns/iter",
            "extra": "iterations: 111169\ncpu: 7653.412372154105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40666.04491091192,
            "unit": "ns/iter",
            "extra": "iterations: 20485\ncpu: 40663.93946790337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31187.689457704262,
            "unit": "ns/iter",
            "extra": "iterations: 26019\ncpu: 31187.290057265844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 32126.07796254074,
            "unit": "ns/iter",
            "extra": "iterations: 26641\ncpu: 32123.752862129782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 32285.065946539682,
            "unit": "ns/iter",
            "extra": "iterations: 25551\ncpu: 32283.519236037668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77286.99211469246,
            "unit": "ns/iter",
            "extra": "iterations: 11160\ncpu: 77282.89426523293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600274.7200000158,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600264.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596928.4321158039,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 596888.8352860091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 586351.8129205853,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 586316.2180349963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 594150.1420727249,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 594140.837336994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338648.06262079295,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 338626.90374951786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580547.7574750418,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 580499.003322256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2476405.3663101727,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2476283.422459895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1099769.1348448968,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1099688.1861575171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5253.016893581748,
            "unit": "ns/iter",
            "extra": "iterations: 157989\ncpu: 5252.9492559608925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25119.721942791446,
            "unit": "ns/iter",
            "extra": "iterations: 32407\ncpu: 25119.538988490014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19008.197075832584,
            "unit": "ns/iter",
            "extra": "iterations: 42542\ncpu: 19007.952141413105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18456.870062744172,
            "unit": "ns/iter",
            "extra": "iterations: 44306\ncpu: 18456.0668983885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18103.186007936052,
            "unit": "ns/iter",
            "extra": "iterations: 44611\ncpu: 18103.135997847978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62753.1246416273,
            "unit": "ns/iter",
            "extra": "iterations: 13952\ncpu: 62750.731077981334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 587674.5330000405,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587634.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 567140.1791531185,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 567108.6644951158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575950.1215469533,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 575918.0248618793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 560931.2208388221,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 560897.1166448205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330854.50507708336,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 330834.8627303507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567842.9784594761,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 567824.0861618839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 512.6094597812187,
            "unit": "ns/iter",
            "extra": "iterations: 1373203\ncpu: 512.6055652368979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3028.1156307483075,
            "unit": "ns/iter",
            "extra": "iterations: 231582\ncpu: 3028.069970895853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2445.183070382717,
            "unit": "ns/iter",
            "extra": "iterations: 285098\ncpu: 2445.1378122610536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2345.1336448158017,
            "unit": "ns/iter",
            "extra": "iterations: 298358\ncpu: 2345.114929044981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1932.7540049306397,
            "unit": "ns/iter",
            "extra": "iterations: 361804\ncpu: 1932.725729953241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17289.96040404919,
            "unit": "ns/iter",
            "extra": "iterations: 40787\ncpu: 17289.003849265657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29682.774022335834,
            "unit": "ns/iter",
            "extra": "iterations: 23551\ncpu: 29681.232219438687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7285.686606780695,
            "unit": "ns/iter",
            "extra": "iterations: 96071\ncpu: 7285.173465457906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7216.252463816345,
            "unit": "ns/iter",
            "extra": "iterations: 97004\ncpu: 7215.926147375377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7329.439274767369,
            "unit": "ns/iter",
            "extra": "iterations: 96245\ncpu: 7311.893604862464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14448.868103705883,
            "unit": "ns/iter",
            "extra": "iterations: 50335\ncpu: 14448.68381841647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13742.003462045475,
            "unit": "ns/iter",
            "extra": "iterations: 50837\ncpu: 13741.544544327971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5117.955895689769,
            "unit": "ns/iter",
            "extra": "iterations: 135633\ncpu: 5117.694808785493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26593.206711106464,
            "unit": "ns/iter",
            "extra": "iterations: 26404\ncpu: 26591.44069080436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20996.28049802514,
            "unit": "ns/iter",
            "extra": "iterations: 33412\ncpu: 20994.54088351478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20725.714425327613,
            "unit": "ns/iter",
            "extra": "iterations: 33767\ncpu: 20724.25741108159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21170.64278909721,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 21169.871853968863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48521.921814401096,
            "unit": "ns/iter",
            "extra": "iterations: 14440\ncpu: 48520.581717451714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155985.0739750681,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 155983.97950089074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130613.72503268214,
            "unit": "ns/iter",
            "extra": "iterations: 5357\ncpu: 130611.48030614214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130056.44481482806,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 130053.98148147907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131431.72065154716,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 131429.095674968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82404.944509894,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 82401.92035815255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129870.80188678314,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 129866.24121346694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4964.099466927345,
            "unit": "ns/iter",
            "extra": "iterations: 142007\ncpu: 4963.958114740769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25349.93464952083,
            "unit": "ns/iter",
            "extra": "iterations: 27605\ncpu: 25349.577975004915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20077.468381689385,
            "unit": "ns/iter",
            "extra": "iterations: 34363\ncpu: 20076.951954136566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19607.71728294364,
            "unit": "ns/iter",
            "extra": "iterations: 35509\ncpu: 19607.581176603046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20122.23202699265,
            "unit": "ns/iter",
            "extra": "iterations: 34677\ncpu: 20121.867520258427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46507.93052043255,
            "unit": "ns/iter",
            "extra": "iterations: 15026\ncpu: 46507.267403167236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150102.60224622834,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 150099.72451790492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127628.58006921787,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 127627.63709236505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125354.95819762889,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 125351.12196887613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126914.8282773635,
            "unit": "ns/iter",
            "extra": "iterations: 5538\ncpu: 126915.52907186607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81211.42695449555,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81210.22170361645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128696.7527492523,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 128693.3651026394 ns\nthreads: 1"
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
        "date": 1705953609895,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1317.8730216278236,
            "unit": "ns/iter",
            "extra": "iterations: 535099\ncpu: 1317.8802427214403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15761.850517534724,
            "unit": "ns/iter",
            "extra": "iterations: 52267\ncpu: 15761.748330686662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33925.06357409686,
            "unit": "ns/iter",
            "extra": "iterations: 24381\ncpu: 33924.207374594975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50509.54631233229,
            "unit": "ns/iter",
            "extra": "iterations: 16745\ncpu: 50508.904150492686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55720.82730000148,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55721.11 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70131.77903637545,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 70129.0762603701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83601.09761032194,
            "unit": "ns/iter",
            "extra": "iterations: 10378\ncpu: 83592.8406243978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96015.15832686993,
            "unit": "ns/iter",
            "extra": "iterations: 9013\ncpu: 96011.6054587818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114928.74220593252,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 114925.8973015457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1170.8821394721592,
            "unit": "ns/iter",
            "extra": "iterations: 598241\ncpu: 1170.849707726485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 936.1807544142612,
            "unit": "ns/iter",
            "extra": "iterations: 746831\ncpu: 936.1732440137048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 933.7496922554606,
            "unit": "ns/iter",
            "extra": "iterations: 748998\ncpu: 933.7369392174634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 953.0812740976866,
            "unit": "ns/iter",
            "extra": "iterations: 735548\ncpu: 953.0744424565081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1848.3771909916534,
            "unit": "ns/iter",
            "extra": "iterations: 378938\ncpu: 1848.3672790799562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5188.286038510595,
            "unit": "ns/iter",
            "extra": "iterations: 152892\ncpu: 5188.205399890121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25691.644962260412,
            "unit": "ns/iter",
            "extra": "iterations: 31929\ncpu: 25690.976854896777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19584.78998403987,
            "unit": "ns/iter",
            "extra": "iterations: 41354\ncpu: 19584.231271461013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18791.154309075657,
            "unit": "ns/iter",
            "extra": "iterations: 43536\ncpu: 18790.57331863284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19775.909453674172,
            "unit": "ns/iter",
            "extra": "iterations: 41349\ncpu: 19775.653582916162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65030.83913608198,
            "unit": "ns/iter",
            "extra": "iterations: 13844\ncpu: 65028.568332851784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561151.0649999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561142.9999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561826.4930380024,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 561815.379746834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 555499.7618742106,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 555491.0783055188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551517.4191503241,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 551498.5415345591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 315706.80968099734,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 315705.13384671806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 547267.0492327916,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 547236.2531969321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2315923.805486079,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2315831.670822946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067294.7295742733,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1067269.1599539693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3201167.9263157994,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3201056.842105269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7480.153801221079,
            "unit": "ns/iter",
            "extra": "iterations: 114700\ncpu: 7479.972972972949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40082.298725220426,
            "unit": "ns/iter",
            "extra": "iterations: 20631\ncpu: 40081.440550627696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31292.84408396676,
            "unit": "ns/iter",
            "extra": "iterations: 26200\ncpu: 31292.2442748093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30449.96072836523,
            "unit": "ns/iter",
            "extra": "iterations: 26635\ncpu: 30448.868030786613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30830.822355742792,
            "unit": "ns/iter",
            "extra": "iterations: 26463\ncpu: 30830.06839738494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76855.65170054969,
            "unit": "ns/iter",
            "extra": "iterations: 11114\ncpu: 76851.71855317598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597256.4489999285,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597245.1000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 580856.6829105002,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 580855.3404539393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 587152.8187964709,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 587132.5219743078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586482.592043148,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 586471.0047201631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336525.90494588227,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 336515.0695517788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578238.8416500436,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 578216.1676646699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2478546.8689838075,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2478402.6737968037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1079782.712952065,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1079724.387397901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5100.58138443585,
            "unit": "ns/iter",
            "extra": "iterations: 157696\ncpu: 5100.409014813306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24957.372951436737,
            "unit": "ns/iter",
            "extra": "iterations: 33133\ncpu: 24956.659523737486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19574.95892111313,
            "unit": "ns/iter",
            "extra": "iterations: 41895\ncpu: 19574.409834109083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18957.362788662085,
            "unit": "ns/iter",
            "extra": "iterations: 43433\ncpu: 18956.618239587388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19424.724370378917,
            "unit": "ns/iter",
            "extra": "iterations: 42724\ncpu: 19424.478045126718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62265.0107926546,
            "unit": "ns/iter",
            "extra": "iterations: 13991\ncpu: 62262.36151811862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572903.2999998935,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572877.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 568506.0382868579,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 568478.4555483419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566413.9598185283,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 566387.3622812683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564450.0373711787,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 564419.2654639159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 322990.6597092588,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 322978.49422288395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 547647.2154522418,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 547632.8517587933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 512.1634304834633,
            "unit": "ns/iter",
            "extra": "iterations: 1365755\ncpu: 512.1441254104918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2986.358483547629,
            "unit": "ns/iter",
            "extra": "iterations: 233888\ncpu: 2986.228023669433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2331.8336899235046,
            "unit": "ns/iter",
            "extra": "iterations: 299597\ncpu: 2331.6762183866836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2312.2189397195193,
            "unit": "ns/iter",
            "extra": "iterations: 297808\ncpu: 2312.1390291731477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1891.753437035048,
            "unit": "ns/iter",
            "extra": "iterations: 369650\ncpu: 1891.6650885973309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17180.657254616497,
            "unit": "ns/iter",
            "extra": "iterations: 40905\ncpu: 17179.77753330903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30079.159022031345,
            "unit": "ns/iter",
            "extra": "iterations: 24418\ncpu: 30077.651732328464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7365.7036269540295,
            "unit": "ns/iter",
            "extra": "iterations: 95066\ncpu: 7365.312519723006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7305.44987650794,
            "unit": "ns/iter",
            "extra": "iterations: 96362\ncpu: 7305.254145825122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7309.364068640243,
            "unit": "ns/iter",
            "extra": "iterations: 95688\ncpu: 7309.1045899173105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14450.510133178963,
            "unit": "ns/iter",
            "extra": "iterations: 48356\ncpu: 14449.861444288345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13874.715843731141,
            "unit": "ns/iter",
            "extra": "iterations: 50247\ncpu: 13874.09795609676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5165.34480832124,
            "unit": "ns/iter",
            "extra": "iterations: 136035\ncpu: 5165.159701547471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26434.683011731115,
            "unit": "ns/iter",
            "extra": "iterations: 26430\ncpu: 26433.53386303439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21131.111451446435,
            "unit": "ns/iter",
            "extra": "iterations: 32974\ncpu: 21129.76587614486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20990.182109777514,
            "unit": "ns/iter",
            "extra": "iterations: 33359\ncpu: 20989.490092628304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21420.44266853948,
            "unit": "ns/iter",
            "extra": "iterations: 32722\ncpu: 21420.29215818081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48930.10853471274,
            "unit": "ns/iter",
            "extra": "iterations: 14318\ncpu: 48928.362899846514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155524.45239168862,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 155514.23736461974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129160.6154986891,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129157.21171671995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128335.22258830525,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128330.51436939351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129017.68327207673,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 129010.88235294168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83092.38595032526,
            "unit": "ns/iter",
            "extra": "iterations: 8413\ncpu: 83091.28729347356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131516.58908476244,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131514.02850712673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4911.9242933815585,
            "unit": "ns/iter",
            "extra": "iterations: 142722\ncpu: 4911.726993736024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25212.358930707003,
            "unit": "ns/iter",
            "extra": "iterations: 27607\ncpu: 25211.507950881998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20346.48456763083,
            "unit": "ns/iter",
            "extra": "iterations: 34311\ncpu: 20345.66757016679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19725.0473404577,
            "unit": "ns/iter",
            "extra": "iterations: 35382\ncpu: 19724.639647278273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20286.068780613616,
            "unit": "ns/iter",
            "extra": "iterations: 34501\ncpu: 20285.655488247023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46438.04772032872,
            "unit": "ns/iter",
            "extra": "iterations: 15046\ncpu: 46436.26877575464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 148701.22142855453,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 148691.62337662512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 123459.45135087546,
            "unit": "ns/iter",
            "extra": "iterations: 5663\ncpu: 123454.74130319619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 123663.59834185477,
            "unit": "ns/iter",
            "extra": "iterations: 5669\ncpu: 123661.38648791792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 123745.56009190062,
            "unit": "ns/iter",
            "extra": "iterations: 5658\ncpu: 123744.60940261597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 79929.36490187846,
            "unit": "ns/iter",
            "extra": "iterations: 8764\ncpu: 79926.59744408898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 123026.83118031226,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 123018.93470182404 ns\nthreads: 1"
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
        "date": 1705955043377,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1330.121311757004,
            "unit": "ns/iter",
            "extra": "iterations: 524030\ncpu: 1330.0269068564776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15992.772672380084,
            "unit": "ns/iter",
            "extra": "iterations: 51340\ncpu: 15991.840670042851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33762.67804697339,
            "unit": "ns/iter",
            "extra": "iterations: 24311\ncpu: 33761.922586483495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50216.964473371794,
            "unit": "ns/iter",
            "extra": "iterations: 16748\ncpu: 50216.74229758777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55562.365200000844,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55562.070000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70384.0649152481,
            "unit": "ns/iter",
            "extra": "iterations: 12447\ncpu: 70383.19273720578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84365.7979496479,
            "unit": "ns/iter",
            "extra": "iterations: 10047\ncpu: 84365.11396436751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96348.25675526002,
            "unit": "ns/iter",
            "extra": "iterations: 8993\ncpu: 96345.17958412101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112914.3072786944,
            "unit": "ns/iter",
            "extra": "iterations: 7625\ncpu: 112913.00983606544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1198.0673499443267,
            "unit": "ns/iter",
            "extra": "iterations: 588731\ncpu: 1198.0415503854929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 938.0294939535295,
            "unit": "ns/iter",
            "extra": "iterations: 731099\ncpu: 938.007985238661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 918.6038653297594,
            "unit": "ns/iter",
            "extra": "iterations: 762574\ncpu: 918.5909826456184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.5666140878396,
            "unit": "ns/iter",
            "extra": "iterations: 759494\ncpu: 923.5494947952191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1838.4994154094338,
            "unit": "ns/iter",
            "extra": "iterations: 377187\ncpu: 1838.4981454822107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5296.998114849707,
            "unit": "ns/iter",
            "extra": "iterations: 151712\ncpu: 5296.85258911622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25608.050829186886,
            "unit": "ns/iter",
            "extra": "iterations: 31537\ncpu: 25607.98744332052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20170.55822423585,
            "unit": "ns/iter",
            "extra": "iterations: 40636\ncpu: 20170.13485579288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19965.21142940353,
            "unit": "ns/iter",
            "extra": "iterations: 41262\ncpu: 19964.703601376623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19252.562299035395,
            "unit": "ns/iter",
            "extra": "iterations: 42296\ncpu: 19252.139682239456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65073.248543542024,
            "unit": "ns/iter",
            "extra": "iterations: 13732\ncpu: 65071.83949898064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 553952.2669999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553947.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 552449.113592855,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 552437.3962986609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 543309.1559748048,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 543285.8490566036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 547652.3952594876,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 547639.974375399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326304.50413222116,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 326301.46506386163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 553441.7221160638,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 553426.1950286805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2337689.05764408,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2337641.3533834615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1053233.781963525,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1053220.20547945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3231252.6888110777,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3231178.321678318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7370.632228639821,
            "unit": "ns/iter",
            "extra": "iterations: 113576\ncpu: 7370.336162569583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39471.60449609487,
            "unit": "ns/iter",
            "extra": "iterations: 20996\ncpu: 39470.47056582202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31723.073155095248,
            "unit": "ns/iter",
            "extra": "iterations: 26519\ncpu: 31722.681850748402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30576.499999998858,
            "unit": "ns/iter",
            "extra": "iterations: 27060\ncpu: 30575.617147080422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31395.55379250965,
            "unit": "ns/iter",
            "extra": "iterations: 25524\ncpu: 31395.380818053705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75935.41819477493,
            "unit": "ns/iter",
            "extra": "iterations: 11234\ncpu: 75933.83478725245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 583793.720000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583777.9999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590956.1443158103,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 590932.0626276406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588337.1256756489,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 588326.4189189185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584623.9215155718,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 584617.9296346414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337953.4211137112,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 337942.18870842806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576349.8997326188,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 576348.5962566844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2469277.4679143797,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2469113.10160427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1109171.398093059,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1109083.790226463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5182.084433043332,
            "unit": "ns/iter",
            "extra": "iterations: 162164\ncpu: 5181.789423053179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24014.166093249507,
            "unit": "ns/iter",
            "extra": "iterations: 33716\ncpu: 24011.825246173925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19180.281876816243,
            "unit": "ns/iter",
            "extra": "iterations: 42327\ncpu: 19179.044108961112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18571.874781996397,
            "unit": "ns/iter",
            "extra": "iterations: 45297\ncpu: 18570.77952182265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18275.82855047748,
            "unit": "ns/iter",
            "extra": "iterations: 40910\ncpu: 18274.439012466355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62239.82420000311,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62231.609999999906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579675.855000005,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579679.800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576418.8432146921,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 576371.607378126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576122.1131578509,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 576079.5394736845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573097.0210665134,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 573065.8327847249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 326190.07261948055,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 326179.10337161954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567251.8925566074,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 567205.6310679605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 495.41045809900186,
            "unit": "ns/iter",
            "extra": "iterations: 1413450\ncpu: 495.38285754713405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3021.2786571427914,
            "unit": "ns/iter",
            "extra": "iterations: 231417\ncpu: 3021.1194510342907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2367.766979724733,
            "unit": "ns/iter",
            "extra": "iterations: 294940\ncpu: 2367.603580389234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2434.9230576874047,
            "unit": "ns/iter",
            "extra": "iterations: 287930\ncpu: 2434.7560170874794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1919.209439479591,
            "unit": "ns/iter",
            "extra": "iterations: 364893\ncpu: 1919.1080672964592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17098.007135796513,
            "unit": "ns/iter",
            "extra": "iterations: 41481\ncpu: 17096.5212989079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31550.345467684165,
            "unit": "ns/iter",
            "extra": "iterations: 22141\ncpu: 31547.563344022565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7515.516336222115,
            "unit": "ns/iter",
            "extra": "iterations: 94973\ncpu: 7496.756973034457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7198.391510208465,
            "unit": "ns/iter",
            "extra": "iterations: 97364\ncpu: 7197.871903372947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7240.960459170842,
            "unit": "ns/iter",
            "extra": "iterations: 96609\ncpu: 7240.808827334925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13973.663041957918,
            "unit": "ns/iter",
            "extra": "iterations: 50027\ncpu: 13972.914626102127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14006.08275433952,
            "unit": "ns/iter",
            "extra": "iterations: 49943\ncpu: 14005.306048895996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5253.7708311349215,
            "unit": "ns/iter",
            "extra": "iterations: 132662\ncpu: 5253.195338529546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26547.265760480048,
            "unit": "ns/iter",
            "extra": "iterations: 26411\ncpu: 26545.238726288288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21124.44600539993,
            "unit": "ns/iter",
            "extra": "iterations: 32957\ncpu: 21121.807203325745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20831.988724157945,
            "unit": "ns/iter",
            "extra": "iterations: 33523\ncpu: 20830.15839871155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21353.21766195743,
            "unit": "ns/iter",
            "extra": "iterations: 32771\ncpu: 21350.691159866707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48892.23968442402,
            "unit": "ns/iter",
            "extra": "iterations: 14323\ncpu: 48886.85331285339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155956.56044691135,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 155950.36871508576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131699.51911545073,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131697.3575712131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131079.3445678891,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 131073.56430050745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130826.81551203562,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 130827.72966867624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82592.45878600948,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82586.14785073309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131686.4758245802,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131671.02698650537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4956.5503000934805,
            "unit": "ns/iter",
            "extra": "iterations: 141123\ncpu: 4956.1602290200735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25425.71276518555,
            "unit": "ns/iter",
            "extra": "iterations: 27528\ncpu: 25424.102731763847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20399.321418141328,
            "unit": "ns/iter",
            "extra": "iterations: 34242\ncpu: 20397.909000642518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20139.65620579119,
            "unit": "ns/iter",
            "extra": "iterations: 34637\ncpu: 20137.878569160053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20599.5438539577,
            "unit": "ns/iter",
            "extra": "iterations: 33908\ncpu: 20597.5109118793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46281.85374262173,
            "unit": "ns/iter",
            "extra": "iterations: 15083\ncpu: 46279.04926075729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153493.79767899838,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 153483.0742281596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127656.63081714322,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 127641.62696958639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127301.58436364614,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 127292.41818181756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127923.90416211732,
            "unit": "ns/iter",
            "extra": "iterations: 5478\ncpu: 127916.42935377973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81698.41454588753,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81697.98038757831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127412.85094408605,
            "unit": "ns/iter",
            "extra": "iterations: 5508\ncpu: 127404.66594045178 ns\nthreads: 1"
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
        "date": 1705957065909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1325.7233176935124,
            "unit": "ns/iter",
            "extra": "iterations: 492330\ncpu: 1325.6112769890115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15876.058696790456,
            "unit": "ns/iter",
            "extra": "iterations: 51519\ncpu: 15875.214969234652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34144.46411936793,
            "unit": "ns/iter",
            "extra": "iterations: 24261\ncpu: 34142.20765838177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50679.484965991294,
            "unit": "ns/iter",
            "extra": "iterations: 16762\ncpu: 50675.93365946784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56317.262100003514,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56310.65 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70787.70440507485,
            "unit": "ns/iter",
            "extra": "iterations: 12304\ncpu: 70784.9479843953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84656.48730421119,
            "unit": "ns/iter",
            "extra": "iterations: 10279\ncpu: 84649.71300710188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97918.10394511487,
            "unit": "ns/iter",
            "extra": "iterations: 8745\ncpu: 97913.1046312179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115507.09997351968,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 115498.00052966108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1172.6096763795936,
            "unit": "ns/iter",
            "extra": "iterations: 598757\ncpu: 1172.6079194063677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 946.1576890036147,
            "unit": "ns/iter",
            "extra": "iterations: 742658\ncpu: 946.1219026792934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 941.3571438376252,
            "unit": "ns/iter",
            "extra": "iterations: 728488\ncpu: 941.2923754406394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 949.0327317636394,
            "unit": "ns/iter",
            "extra": "iterations: 738457\ncpu: 948.9794260193897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1831.7452493019366,
            "unit": "ns/iter",
            "extra": "iterations: 381365\ncpu: 1831.619052613642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5213.839422353174,
            "unit": "ns/iter",
            "extra": "iterations: 155389\ncpu: 5213.565953831993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25613.008797013783,
            "unit": "ns/iter",
            "extra": "iterations: 32170\ncpu: 25610.979173142696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20194.984892813023,
            "unit": "ns/iter",
            "extra": "iterations: 39650\ncpu: 20193.833543505676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18427.91391966342,
            "unit": "ns/iter",
            "extra": "iterations: 44412\ncpu: 18426.438800324246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19464.349053678834,
            "unit": "ns/iter",
            "extra": "iterations: 41899\ncpu: 19463.244946180082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65549.78104119157,
            "unit": "ns/iter",
            "extra": "iterations: 13619\ncpu: 65544.62148469055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 557670.1119999825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557629.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 553557.9150159066,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 553518.3386581461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 550120.0148963489,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 550106.2176165811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554198.4322580021,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 554183.7419354827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327266.026492517,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 327259.17910447804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 551027.9685494166,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 551013.4146341473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2319212.230000005,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2319185.250000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1066300.7240978656,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1066252.2700814917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3239880.125435366,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3239847.3867595834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7645.984967839767,
            "unit": "ns/iter",
            "extra": "iterations: 109299\ncpu: 7645.858608038482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38897.94554600468,
            "unit": "ns/iter",
            "extra": "iterations: 20476\ncpu: 38897.88044539944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30861.412483695465,
            "unit": "ns/iter",
            "extra": "iterations: 26835\ncpu: 30861.360163964873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 31004.747335978547,
            "unit": "ns/iter",
            "extra": "iterations: 26933\ncpu: 31004.41465859727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31019.07964266835,
            "unit": "ns/iter",
            "extra": "iterations: 26418\ncpu: 31018.453327276875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76316.69102221269,
            "unit": "ns/iter",
            "extra": "iterations: 11250\ncpu: 76314.85333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 590922.6840000201,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590908.8000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592714.5611899293,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 592694.8613928301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 586094.8136393827,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 586087.1033085708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 579473.0516556487,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 579466.1589403972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 335446.03053730144,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 335439.38925396284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 574212.4119205531,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 574211.3245033105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2466120.174603244,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2466001.8518518494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1113886.2948254943,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1113812.0336943434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5013.971357118073,
            "unit": "ns/iter",
            "extra": "iterations: 157945\ncpu: 5013.680711640146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24423.062328556618,
            "unit": "ns/iter",
            "extra": "iterations: 32810\ncpu: 24421.871380676715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19106.393122741178,
            "unit": "ns/iter",
            "extra": "iterations: 42895\ncpu: 19104.958619885692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18384.48377218471,
            "unit": "ns/iter",
            "extra": "iterations: 44738\ncpu: 18383.5643077474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19141.425463881747,
            "unit": "ns/iter",
            "extra": "iterations: 42845\ncpu: 19140.298751312996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64060.21129984438,
            "unit": "ns/iter",
            "extra": "iterations: 13540\ncpu: 64059.490398818714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577246.20099998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577236.3999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581441.5289421768,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 581434.2648037248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566577.5646523238,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 566540.4808317091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 572719.1304917977,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 572684.1967213135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329187.3910928211,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 329177.24550898024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 571043.8080415354,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 570996.368352788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 507.88091177264835,
            "unit": "ns/iter",
            "extra": "iterations: 1379028\ncpu: 507.8612617002706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2977.51384322633,
            "unit": "ns/iter",
            "extra": "iterations: 235422\ncpu: 2977.325398645851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2385.9901337485485,
            "unit": "ns/iter",
            "extra": "iterations: 294134\ncpu: 2385.895204226627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2363.4718453085766,
            "unit": "ns/iter",
            "extra": "iterations: 296487\ncpu: 2363.397383359135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1955.3815201274138,
            "unit": "ns/iter",
            "extra": "iterations: 358812\ncpu: 1955.3596312275065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17638.298387498897,
            "unit": "ns/iter",
            "extra": "iterations: 40062\ncpu: 17638.036044131404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31786.76095147553,
            "unit": "ns/iter",
            "extra": "iterations: 22029\ncpu: 31786.331653728867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7507.857594733376,
            "unit": "ns/iter",
            "extra": "iterations: 93262\ncpu: 7507.549698698253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7452.767200723697,
            "unit": "ns/iter",
            "extra": "iterations: 93935\ncpu: 7452.173311332314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7461.404459446248,
            "unit": "ns/iter",
            "extra": "iterations: 93913\ncpu: 7461.017111582031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14862.461025066617,
            "unit": "ns/iter",
            "extra": "iterations: 47197\ncpu: 14861.37678242251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14149.796731998309,
            "unit": "ns/iter",
            "extra": "iterations: 49388\ncpu: 14149.352069328623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5282.1480137318495,
            "unit": "ns/iter",
            "extra": "iterations: 132535\ncpu: 5281.942883012087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27020.5198971015,
            "unit": "ns/iter",
            "extra": "iterations: 25657\ncpu: 27018.614802977725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21372.39809799289,
            "unit": "ns/iter",
            "extra": "iterations: 32492\ncpu: 21370.85436415124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21097.00407542595,
            "unit": "ns/iter",
            "extra": "iterations: 32880\ncpu: 21095.19464720172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21268.05897911545,
            "unit": "ns/iter",
            "extra": "iterations: 32893\ncpu: 21267.17538686039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48623.12161691985,
            "unit": "ns/iter",
            "extra": "iterations: 14373\ncpu: 48622.50747930155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156474.81483988103,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 156466.12539467655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132083.37633603363,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 132072.9983123945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131954.85600606672,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 131948.1621826455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132581.4021365803,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 132569.61083555996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83912.40493000537,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 83910.62582266245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130419.70445647031,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130417.75125862336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5005.780290132983,
            "unit": "ns/iter",
            "extra": "iterations: 139798\ncpu: 5005.397788237332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25729.003601089884,
            "unit": "ns/iter",
            "extra": "iterations: 27214\ncpu: 25727.974571911087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20737.393315820864,
            "unit": "ns/iter",
            "extra": "iterations: 34260\ncpu: 20735.49328663158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19643.046097405353,
            "unit": "ns/iter",
            "extra": "iterations: 35707\ncpu: 19642.49026801484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20095.58481486999,
            "unit": "ns/iter",
            "extra": "iterations: 34705\ncpu: 20094.95173606099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46775.752990713765,
            "unit": "ns/iter",
            "extra": "iterations: 14963\ncpu: 46774.0025395977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 148515.31873271993,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 148507.5271103562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127060.65314253651,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 127057.68882448903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127004.45430154448,
            "unit": "ns/iter",
            "extra": "iterations: 5591\ncpu: 126998.94473260363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126124.64660713435,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 126124.48214285723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81436.93595427637,
            "unit": "ns/iter",
            "extra": "iterations: 8572\ncpu: 81436.8642090522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 123900.45321842418,
            "unit": "ns/iter",
            "extra": "iterations: 5686\ncpu: 123894.89975378143 ns\nthreads: 1"
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
        "date": 1705958533931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1320.5764756166577,
            "unit": "ns/iter",
            "extra": "iterations: 533438\ncpu: 1320.5365946932916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15901.124913296597,
            "unit": "ns/iter",
            "extra": "iterations: 51900\ncpu: 15900.726396917149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33706.309944145825,
            "unit": "ns/iter",
            "extra": "iterations: 24527\ncpu: 33703.37587148857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50151.869382682016,
            "unit": "ns/iter",
            "extra": "iterations: 16912\ncpu: 50149.39687795651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56154.85969999554,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56150.82999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70507.06868817171,
            "unit": "ns/iter",
            "extra": "iterations: 12433\ncpu: 70502.62205421054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84220.53090271664,
            "unit": "ns/iter",
            "extra": "iterations: 10258\ncpu: 84217.51803470458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96064.9719314089,
            "unit": "ns/iter",
            "extra": "iterations: 8978\ncpu: 96062.68656716413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113413.46897810481,
            "unit": "ns/iter",
            "extra": "iterations: 7672\ncpu: 113410.59697601668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1189.3846787117113,
            "unit": "ns/iter",
            "extra": "iterations: 585486\ncpu: 1189.377713557624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 941.6306476591941,
            "unit": "ns/iter",
            "extra": "iterations: 743848\ncpu: 941.578521418354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 934.8602096363396,
            "unit": "ns/iter",
            "extra": "iterations: 750252\ncpu: 934.7852454908485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 945.5797051963666,
            "unit": "ns/iter",
            "extra": "iterations: 738051\ncpu: 945.5160957711588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1848.9593673157685,
            "unit": "ns/iter",
            "extra": "iterations: 379842\ncpu: 1848.8521543167967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5066.61612021051,
            "unit": "ns/iter",
            "extra": "iterations: 156859\ncpu: 5066.336646287426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24992.230764516687,
            "unit": "ns/iter",
            "extra": "iterations: 32622\ncpu: 24989.914781435873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20031.226013486717,
            "unit": "ns/iter",
            "extra": "iterations: 39887\ncpu: 20029.964650136608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19728.243814642283,
            "unit": "ns/iter",
            "extra": "iterations: 41671\ncpu: 19727.011590794515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19764.118055051676,
            "unit": "ns/iter",
            "extra": "iterations: 41379\ncpu: 19763.017472631014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64844.95866965536,
            "unit": "ns/iter",
            "extra": "iterations: 13380\ncpu: 64840.37369207775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565588.6970000665,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565585.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557263.6942839391,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 557241.8111753366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 549036.6715750053,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 549028.1049935976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 553746.1246005344,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 553716.4856230047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 319102.41513593873,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 319090.5216752389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 554434.1889813555,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 554424.7277386286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2322038.228855866,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2321902.985074628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1060196.0439304998,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1060168.0924855482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3203276.322807269,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3203118.947368429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7385.393110746353,
            "unit": "ns/iter",
            "extra": "iterations: 114352\ncpu: 7385.274415838838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39294.66351947671,
            "unit": "ns/iter",
            "extra": "iterations: 21077\ncpu: 39293.239075769925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31318.153155885004,
            "unit": "ns/iter",
            "extra": "iterations: 26411\ncpu: 31317.629018212214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30669.87664273865,
            "unit": "ns/iter",
            "extra": "iterations: 27165\ncpu: 30669.30241119093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30829.120586498593,
            "unit": "ns/iter",
            "extra": "iterations: 27076\ncpu: 30827.234451174438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76100.55469674806,
            "unit": "ns/iter",
            "extra": "iterations: 10997\ncpu: 76099.32708920633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 601803.6030000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601799.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593473.7328767083,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 593445.3424657558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589026.3209458815,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 588990.2702702692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 590256.941256846,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 590244.2622950821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336170.8392925331,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 336154.13302575774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 579190.6094987218,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 579148.6147757275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2474847.9148938037,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2474719.6808510716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1090625.6725558771,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1090565.8421672557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4912.627505596098,
            "unit": "ns/iter",
            "extra": "iterations: 160840\ncpu: 4912.598856005972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24681.88606554928,
            "unit": "ns/iter",
            "extra": "iterations: 32861\ncpu: 24681.1143909195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19205.688030580393,
            "unit": "ns/iter",
            "extra": "iterations: 42642\ncpu: 19204.903616153137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18714.742473007846,
            "unit": "ns/iter",
            "extra": "iterations: 43809\ncpu: 18713.992558606686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18557.202720339636,
            "unit": "ns/iter",
            "extra": "iterations: 43671\ncpu: 18556.6050697258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62363.9543161853,
            "unit": "ns/iter",
            "extra": "iterations: 13878\ncpu: 62359.20881971458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 580447.5709999223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580406.0999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580765.081170884,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 580727.7445109795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577398.6286836058,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 577354.3549443348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576548.2249675393,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 576512.0286085797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 328676.89767612034,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 328659.40779610333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567051.303479426,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 567015.4639175235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 505.2362362097159,
            "unit": "ns/iter",
            "extra": "iterations: 1391459\ncpu: 505.22983429623287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2954.9764132655055,
            "unit": "ns/iter",
            "extra": "iterations: 237252\ncpu: 2954.9234569149867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2415.3320364101555,
            "unit": "ns/iter",
            "extra": "iterations: 290688\ncpu: 2415.297845112287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2395.5588847048693,
            "unit": "ns/iter",
            "extra": "iterations: 291833\ncpu: 2395.5412855982677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1957.1823784707453,
            "unit": "ns/iter",
            "extra": "iterations: 357608\ncpu: 1957.1122569964957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16927.003133667553,
            "unit": "ns/iter",
            "extra": "iterations: 41485\ncpu: 16926.03109557652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31231.54601336078,
            "unit": "ns/iter",
            "extra": "iterations: 22450\ncpu: 31230.35189309537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7309.923102609247,
            "unit": "ns/iter",
            "extra": "iterations: 95829\ncpu: 7309.807052144948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7286.00185711682,
            "unit": "ns/iter",
            "extra": "iterations: 96386\ncpu: 7285.580893490662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7299.01842852849,
            "unit": "ns/iter",
            "extra": "iterations: 96101\ncpu: 7298.966712104932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14548.890669707842,
            "unit": "ns/iter",
            "extra": "iterations: 48230\ncpu: 14548.787061994699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13693.152090804728,
            "unit": "ns/iter",
            "extra": "iterations: 51009\ncpu: 13692.854202199838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5083.400998300484,
            "unit": "ns/iter",
            "extra": "iterations: 137033\ncpu: 5083.259506834184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26087.078636610633,
            "unit": "ns/iter",
            "extra": "iterations: 26845\ncpu: 26085.338051778857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20828.936650910608,
            "unit": "ns/iter",
            "extra": "iterations: 33639\ncpu: 20827.667290942107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20635.762941089502,
            "unit": "ns/iter",
            "extra": "iterations: 33865\ncpu: 20634.061715635733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21036.414717743133,
            "unit": "ns/iter",
            "extra": "iterations: 32967\ncpu: 21035.41116874449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48667.31353753908,
            "unit": "ns/iter",
            "extra": "iterations: 14397\ncpu: 48663.0131277347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156223.36083164866,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156213.83858707885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130371.02813730625,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 130363.74038641801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128356.54022989816,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 128348.57248795021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131266.44332210507,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 131260.77441077228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82122.12626263453,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 82118.61639652206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130638.7708486775,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 130631.19926199193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4923.138790534668,
            "unit": "ns/iter",
            "extra": "iterations: 142625\ncpu: 4923.104645048167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25272.678269425774,
            "unit": "ns/iter",
            "extra": "iterations: 27436\ncpu: 25272.211692666464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20171.738696671102,
            "unit": "ns/iter",
            "extra": "iterations: 34481\ncpu: 20170.688205098344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19695.698579164917,
            "unit": "ns/iter",
            "extra": "iterations: 35472\ncpu: 19694.584460983155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20316.65293111889,
            "unit": "ns/iter",
            "extra": "iterations: 34509\ncpu: 20315.56115795894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46527.893345730015,
            "unit": "ns/iter",
            "extra": "iterations: 15058\ncpu: 46527.566741931245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152556.8521587534,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 152544.91931966678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128011.55138992507,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 128004.20629114893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127386.6682482054,
            "unit": "ns/iter",
            "extra": "iterations: 5480\ncpu: 127377.88321167846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 125080.52832243578,
            "unit": "ns/iter",
            "extra": "iterations: 5508\ncpu: 125074.45533769083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81447.2227848319,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 81442.02531645543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 125856.89268996297,
            "unit": "ns/iter",
            "extra": "iterations: 5554\ncpu: 125851.98055455394 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}