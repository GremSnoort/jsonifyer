window.BENCHMARK_DATA = {
  "lastUpdate": 1702490222286,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 22.04 Debug c++-17": [
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
        "date": 1702490220347,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15686.536601791966,
            "unit": "ns/iter",
            "extra": "iterations: 44547\ncpu: 15685.675803084385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127196.26224601564,
            "unit": "ns/iter",
            "extra": "iterations: 6349\ncpu: 127182.13891951491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239653.1691115457,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 239638.80431774148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 348816.3168357133,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 348796.91683569987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 458603.82399578026,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 458574.3657505286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 583012.6241744033,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 582957.9920739762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 552199.0660000142,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552185.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 637290.3590000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637288.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 727378.3591772105,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 727358.386075949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12230.931068267093,
            "unit": "ns/iter",
            "extra": "iterations: 57158\ncpu: 12230.581895797623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10134.519068316567,
            "unit": "ns/iter",
            "extra": "iterations: 69251\ncpu: 10134.104922672594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10097.100452997265,
            "unit": "ns/iter",
            "extra": "iterations: 69316\ncpu: 10096.745340181202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10092.486692945178,
            "unit": "ns/iter",
            "extra": "iterations: 69512\ncpu: 10091.897801818397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16724.949080825834,
            "unit": "ns/iter",
            "extra": "iterations: 41831\ncpu: 16724.77827448541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56768.88715494595,
            "unit": "ns/iter",
            "extra": "iterations: 14418\ncpu: 56766.500208073245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 243537.48373286973,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 243527.5684931507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 192058.10636825208,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 192050.11536686638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 190808.39286515422,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 190795.0415077406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 186741.5260611396,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 186730.96547173974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 467721.45948827884,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 467689.0724946697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3982963.2231760714,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3982788.841201727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3165026.7201366164,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3164810.58020478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3178444.5119454055,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3178299.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3133689.195286243,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3133523.2323232326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1772132.531548727,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1772030.9751434072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3070619.4337748354,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3070511.9205298005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11411631.322580947,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11410712.903225794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5303827.719999958,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5303497.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14999768.098591695,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14998674.647887316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52812.58499999808,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52811.34999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 279632.51712888415,
            "unit": "ns/iter",
            "extra": "iterations: 3065\ncpu: 279627.60195758514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 221981.2029023091,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 221971.72842705416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 222344.55737706294,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 222332.18839448335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220727.69083870883,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 220710.73548387183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 483728.23353968846,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 483699.2684299375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4037591.630434858,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4037479.1304348023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3250446.8641114547,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3250375.26132404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3226117.74740493,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3225946.0207612473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3179062.1262799185,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3178958.3617747375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1811778.7212475478,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1811641.3255360501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3123205.9899328356,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3123185.570469811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11679108.208790699,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11678736.26373625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5331760.819999545,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5331808.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54214.29462922184,
            "unit": "ns/iter",
            "extra": "iterations: 15063\ncpu: 54211.82367390301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 251191.80421421106,
            "unit": "ns/iter",
            "extra": "iterations: 3417\ncpu: 251188.3816213064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194581.67166552928,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 194574.86934787565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194503.62949476021,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 194492.7173418303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 190041.06582567623,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 190025.8944954128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 453092.7140625233,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 453083.3333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3998065.0474140295,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 3997914.2241379237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3168970.6711866595,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3168749.491525407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3180119.2089039264,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3179994.863013703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3136489.0637583327,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3136274.496644309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1779908.6137666611,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1779812.619502865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3078971.6079734443,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3078755.4817275847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6018.2253510212195,
            "unit": "ns/iter",
            "extra": "iterations: 116161\ncpu: 6017.841616377273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34399.611012872105,
            "unit": "ns/iter",
            "extra": "iterations: 20358\ncpu: 34396.9496021219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27654.21612431355,
            "unit": "ns/iter",
            "extra": "iterations: 25291\ncpu: 27652.239927246836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27454.776527330778,
            "unit": "ns/iter",
            "extra": "iterations: 25502\ncpu: 27452.654693749486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21660.66124292455,
            "unit": "ns/iter",
            "extra": "iterations: 32327\ncpu: 21659.12395211442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129343.40761270639,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129333.27790095947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 271574.1264055946,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 271553.16013959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67900.44180177608,
            "unit": "ns/iter",
            "extra": "iterations: 10301\ncpu: 67898.31084360764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68293.71663264303,
            "unit": "ns/iter",
            "extra": "iterations: 10287\ncpu: 68292.1065422374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67345.25319988745,
            "unit": "ns/iter",
            "extra": "iterations: 10391\ncpu: 67340.88153209392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134764.63708737586,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 134755.47572815543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 126692.99855203394,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 126688.03619909305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41683.69545806144,
            "unit": "ns/iter",
            "extra": "iterations: 16799\ncpu: 41682.6775403303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 203004.84414832288,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 202999.85515643095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165494.3692162597,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 165487.79508970465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166488.30354171363,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 166484.85856905027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 164663.56865991512,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 164658.04774285154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 283344.1983805988,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 283335.4655870473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1167698.2333333779,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1167642.0000000102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 956148.9604904304,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 956141.6893732967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 955578.1816939238,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 955526.3661202098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 954351.9468664579,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 954324.1144414247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 613193.2913043507,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 613178.1739130404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 945537.890392347,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 945528.1461434547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40778.77506412032,
            "unit": "ns/iter",
            "extra": "iterations: 17156\ncpu: 40779.17346700857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 202674.78097731687,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 202668.44095404274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166247.1213488352,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 166248.68202327372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164221.81740166713,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 164201.19189511586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163567.4536539916,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 163556.45575531165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 278281.2392957194,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 278265.18607443187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1155397.6710744363,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1155372.3966942292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 955996.1010928194,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 955990.4371584776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 955388.8479452837,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 955398.767123296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 945541.1422763136,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 945514.4986449882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 595143.3381479031,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 595115.2931180887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 942488.0161074401,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 942496.9127516705 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}