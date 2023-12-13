window.BENCHMARK_DATA = {
  "lastUpdate": 1702492920001,
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
      }
    ]
  }
}