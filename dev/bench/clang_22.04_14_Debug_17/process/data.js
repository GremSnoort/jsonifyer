window.BENCHMARK_DATA = {
  "lastUpdate": 1705959829256,
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
        "date": 1702492836216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15151.657566892143,
            "unit": "ns/iter",
            "extra": "iterations: 46155\ncpu: 15150.666233344167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122113.98768651315,
            "unit": "ns/iter",
            "extra": "iterations: 6903\ncpu: 122106.99695784441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 228662.90913893763,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 228647.7812995246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 333502.64044946985,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 333496.74544750096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 442301.2101265561,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 442285.46835443017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 545490.8599368861,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 545466.9400630916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 523776.96799999283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523723.90000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 608181.7589999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608127.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 695562.9895052485,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 695497.9010494753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11770.202988435167,
            "unit": "ns/iter",
            "extra": "iterations: 59496\ncpu: 11769.391219577783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9846.935478432686,
            "unit": "ns/iter",
            "extra": "iterations: 71170\ncpu: 9846.783757201058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9932.798667348281,
            "unit": "ns/iter",
            "extra": "iterations: 70386\ncpu: 9932.033358906614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9939.363963300717,
            "unit": "ns/iter",
            "extra": "iterations: 70628\ncpu: 9939.007192614828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16525.18414594091,
            "unit": "ns/iter",
            "extra": "iterations: 42374\ncpu: 16524.109123519123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50422.00999999978,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50421.850000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254362.5946992561,
            "unit": "ns/iter",
            "extra": "iterations: 3358\ncpu: 254339.1006551517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199480.5691018916,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 199458.0502559332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199458.95670489225,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 199443.15469225385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194308.1380255783,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 194295.22394881118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 468835.9207284545,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 468804.0707016605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3778515.07317096,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3778269.512195121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3023640.013029407,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3023459.283387618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3028942.6470586457,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3028817.647058822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3003944.0194174144,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3003754.368932037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1780876.3702289388,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1780709.541984732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2949624.372611617,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2949454.458598736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11316105.531914266,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11315368.085106382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5148849.209999752,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5148275.000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14680446.722222326,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14679351.38888886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53712.89070000102,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53711.39000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 298537.46724434895,
            "unit": "ns/iter",
            "extra": "iterations: 2885\ncpu: 298529.42807625636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232393.0827921904,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 232382.54870129886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230615.65975774542,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 230597.65814266613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229200.57467877548,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 229187.04496787925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 489851.2696884225,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 489814.56090651266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3833045.8765432267,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3832855.1440329175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3088741.3621262554,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3088555.1495016543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3068661.716171768,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3068505.28052804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3055394.496710568,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3055273.026315796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1790467.324324333,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1790383.5907335847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2997530.1612903276,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2997455.48387096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11640431.500000125,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11639652.17391302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5152615.980000519,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5152397.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55539.45766279831,
            "unit": "ns/iter",
            "extra": "iterations: 14727\ncpu: 55536.606233448685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 264449.3089230589,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 264442.6769230786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 204333.44545673014,
            "unit": "ns/iter",
            "extra": "iterations: 4171\ncpu: 204325.77319587607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 201910.21384833904,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 201898.70466321186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 197824.7734665307,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 197818.0994423787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 447652.5694372662,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 447646.2054723792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3801162.726530752,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3800998.3673469364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3053751.3901640894,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3053499.3442623066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3043844.770491723,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3043765.2459016303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3044952.6852460057,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3044853.770491795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1773602.8492365433,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1773540.8396946553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2973581.98722054,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2973553.354632582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6048.053079710221,
            "unit": "ns/iter",
            "extra": "iterations: 115920\ncpu: 6047.920979986223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33818.185853117866,
            "unit": "ns/iter",
            "extra": "iterations: 20683\ncpu: 33817.69085722573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27424.133929619857,
            "unit": "ns/iter",
            "extra": "iterations: 25491\ncpu: 27423.435722411632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27296.415620369873,
            "unit": "ns/iter",
            "extra": "iterations: 25646\ncpu: 27296.018872338995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21535.280403428937,
            "unit": "ns/iter",
            "extra": "iterations: 32521\ncpu: 21534.79290304728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130762.70900952701,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130757.78772617147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 257003.17941173393,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 256994.88970588142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65149.924672184585,
            "unit": "ns/iter",
            "extra": "iterations: 10753\ncpu: 65147.31702780725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65377.545996276174,
            "unit": "ns/iter",
            "extra": "iterations: 10740\ncpu: 65375.88454376234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64851.49476899894,
            "unit": "ns/iter",
            "extra": "iterations: 10801\ncpu: 64850.68049254575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125444.30180905432,
            "unit": "ns/iter",
            "extra": "iterations: 5583\ncpu: 125439.62027583756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121202.43956424521,
            "unit": "ns/iter",
            "extra": "iterations: 5783\ncpu: 121196.24762234044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39887.809209025465,
            "unit": "ns/iter",
            "extra": "iterations: 17548\ncpu: 39887.33758832942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 189654.01520910097,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 189649.34818033522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158068.69002938305,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 158062.60456703775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157323.23784877933,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157312.71377137938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156809.62351623338,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156802.01567749385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 271087.85913854325,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 271073.69033760176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1099394.6630094163,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1099317.0846394899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 917307.470511244,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917286.3695937059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 920777.4501312881,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 920743.8320209886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 911218.623207318,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 911179.40026077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 598360.2689003915,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 598333.5051546427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 906913.6085826084,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 906882.3146944168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39477.34081046617,
            "unit": "ns/iter",
            "extra": "iterations: 17743\ncpu: 39476.097615961386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 191227.4276333777,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 191219.80848153424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 156956.68264276933,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156951.93729003417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157305.23458174383,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 157297.62278538055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 155791.8136687332,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 155787.86731968098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 270692.1857860497,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 270682.1938972573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1083281.5767441015,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1083221.7054263582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 909290.7675324852,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 909265.3246753273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 911363.4824446749,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 911315.8647594303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 905178.6744186854,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 905170.2842377276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 591174.0582278762,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 591152.8270042207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 900029.8582473652,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 899993.9432989709 ns\nthreads: 1"
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
        "date": 1702503891880,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15084.702576009668,
            "unit": "ns/iter",
            "extra": "iterations: 46079\ncpu: 15084.643763970575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123229.2807630771,
            "unit": "ns/iter",
            "extra": "iterations: 6867\ncpu: 123225.20751419832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 230298.876160186,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 230290.95730575448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 335169.86697783764,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 335168.41695838206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 441561.9585889742,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 441544.58077709615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 552342.0822263976,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 552329.6015180267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 535153.164999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535119.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 612256.9310000472,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612255.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 696437.5497738137,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 696389.2911010562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11894.978596969215,
            "unit": "ns/iter",
            "extra": "iterations: 58730\ncpu: 11894.319768431802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9986.410659242163,
            "unit": "ns/iter",
            "extra": "iterations: 70399\ncpu: 9986.167417150818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9803.684615384622,
            "unit": "ns/iter",
            "extra": "iterations: 71370\ncpu: 9803.407594227252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9883.957418590973,
            "unit": "ns/iter",
            "extra": "iterations: 70876\ncpu: 9883.93250183419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16663.51028727926,
            "unit": "ns/iter",
            "extra": "iterations: 41945\ncpu: 16663.454523781133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57076.861809228685,
            "unit": "ns/iter",
            "extra": "iterations: 14205\ncpu: 57075.43118620205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250777.20345941075,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 250764.37994722943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197337.6669739755,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 197336.94399631242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195289.53377606644,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 195281.2915044652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 187965.01083831428,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 187947.24618447234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 457520.9524058703,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 457493.04393305443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3833145.2107434617,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3832992.975206624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3104331.7251655576,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3104193.0463576172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2992920.693548278,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2992678.387096775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3005383.779220783,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3005270.1298701316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1740368.3308269845,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1740248.8721804542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2965262.1751589687,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2965078.3439490455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11224964.70212751,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11224273.404255344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6631466.042857223,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6631091.428571421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14469924.986301148,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14469639.726027418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53658.889700000145,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53655.16000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 295472.68099002546,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 295471.36473014706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 227631.8728431183,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 227620.97159543412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 225478.45783131674,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 225471.03195390303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 222018.6018614255,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 222002.79214064122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 480040.62257888354,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 480032.8168234652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3918038.620253152,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3917694.0928270123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3114612.748322085,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3114462.0805369136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3059884.999999733,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3059827.9605263313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3062711.788779044,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3062601.9801980117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1776993.1453154904,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1776882.600382402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3012839.6051781187,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3012610.032362446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11455105.817204366,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11454575.268817188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5182835.850000629,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5182226.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55241.70950549858,
            "unit": "ns/iter",
            "extra": "iterations: 14823\ncpu: 55238.65614248162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 264618.3657407655,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 264605.58641975233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 204324.7416131228,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 204232.04853676038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 195955.87225686718,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 195945.87664587586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192890.94163070334,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 192887.57665228355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 442400.88735280925,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 442373.2206861255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3869342.676348726,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3869101.244813278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3060330.0721313497,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3060124.2622950985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3030120.71521017,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3029879.2880258835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3036141.9511401295,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3036014.9837133638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1744696.4764594375,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1744623.5404896433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2965895.4598067454,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2965692.282958195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6021.2620558430945,
            "unit": "ns/iter",
            "extra": "iterations: 116147\ncpu: 6021.1662806616105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33670.96401040771,
            "unit": "ns/iter",
            "extra": "iterations: 20756\ncpu: 33670.39410290997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27347.066352005444,
            "unit": "ns/iter",
            "extra": "iterations: 25636\ncpu: 27345.752067405152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27240.1990024928,
            "unit": "ns/iter",
            "extra": "iterations: 26065\ncpu: 27238.189142528277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21516.143173897006,
            "unit": "ns/iter",
            "extra": "iterations: 31570\ncpu: 21515.555907507136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126593.93448587677,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 126592.08371246523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 260419.53562102155,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 260410.51846326314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65755.85609824942,
            "unit": "ns/iter",
            "extra": "iterations: 10667\ncpu: 65751.37339458171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64971.40779318132,
            "unit": "ns/iter",
            "extra": "iterations: 10753\ncpu: 64966.68836603749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65000.69309226088,
            "unit": "ns/iter",
            "extra": "iterations: 10785\ncpu: 64995.308298562144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131191.042195662,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 131190.57132188306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120835.91339130537,
            "unit": "ns/iter",
            "extra": "iterations: 5750\ncpu: 120831.77391304182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39829.7334667022,
            "unit": "ns/iter",
            "extra": "iterations: 17495\ncpu: 39828.665332951685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192656.20827586803,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 192652.1379310339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158876.2060633706,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 158868.58901299268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 154497.28785541293,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154483.51333480264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156443.5244256069,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 156429.3999553871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 277753.73441841156,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 277718.8963874514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1115467.9999999313,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1115378.0604133673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 923511.0407894055,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 923433.8157894901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 901047.2509653202,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 901015.5727155721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 912538.6862745003,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 912478.8235294137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 585918.5780202026,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 585856.2919463111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 904480.7477360198,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 904413.1953428105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39279.086576201706,
            "unit": "ns/iter",
            "extra": "iterations: 17834\ncpu: 39275.283166984605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 193402.9914388256,
            "unit": "ns/iter",
            "extra": "iterations: 3621\ncpu: 193381.8282242472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 157584.86036036132,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 157569.68468468465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 152994.73353685753,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 152983.95115569158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154694.88837310066,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 154691.46772767347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 274666.6551186958,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 274653.71739976795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1105758.3280506716,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1105737.8763866825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 919268.4685863312,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 919185.7329843016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 896743.7097187467,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 896663.299232734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 898899.8035943421,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 898786.0077021748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 576510.051937378,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 576479.6372629812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 898678.2721437822,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 898661.3607188746 ns\nthreads: 1"
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
        "date": 1705575515337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15709.014767031389,
            "unit": "ns/iter",
            "extra": "iterations: 44491\ncpu: 15708.185925243308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126870.39432412444,
            "unit": "ns/iter",
            "extra": "iterations: 6695\ncpu: 126865.98954443615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 237920.02574636484,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 237909.28512736244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 346796.7613499459,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 346789.1924467657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 455887.08403361414,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 455859.7689075633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 567838.0580560941,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 567808.4148727984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 543520.1710000115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543512.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 629734.6989999823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629684.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 721758.2268842262,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 721714.8407148401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12235.551073906392,
            "unit": "ns/iter",
            "extra": "iterations: 57221\ncpu: 12234.707537442559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10198.024353253537,
            "unit": "ns/iter",
            "extra": "iterations: 68574\ncpu: 10197.608423017471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10137.662721722287,
            "unit": "ns/iter",
            "extra": "iterations: 68949\ncpu: 10137.529188240584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10242.285209674617,
            "unit": "ns/iter",
            "extra": "iterations: 68511\ncpu: 10241.622513173072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16684.337300358715,
            "unit": "ns/iter",
            "extra": "iterations: 42013\ncpu: 16683.457501249606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57483.7189089898,
            "unit": "ns/iter",
            "extra": "iterations: 14152\ncpu: 57481.25353306956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 253305.584123222,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 253297.6303317535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199845.54684197428,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 199839.63371683503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195608.85057207986,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 195603.5240274598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 192795.3502377156,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 192785.66900611293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 472293.5034965083,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 472271.27487896744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3974287.0512821116,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3974067.52136753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3163518.674576199,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3163318.9830508484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3145665.550675666,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3145557.7702702726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3135864.260135262,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3135668.243243247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1782740.239382244,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1782651.7374517375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3074044.920529729,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3073905.6291390746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11385084.861702349,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11384446.808510639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5385954.50999992,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5385580.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14769845.986110555,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14769073.611111091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54031.79449999697,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54029.59999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 297922.49826988205,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 297913.9100346014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228470.44189766125,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 228454.61087420015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230132.45081747498,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 230115.1969981224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223794.3951168294,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 223777.2118666313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 499506.2247972342,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 499477.57821552694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4018018.259740309,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4017796.1038961043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3229026.588235347,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3228845.674740492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3187260.9793813857,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3187103.780068715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3197839.4517240897,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3197662.068965506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1825398.758823475,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1825248.4313725468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3108219.2214766443,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3108087.919463087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11675165.296703828,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11674330.76923073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5242829.37999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5242452.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55090.50779151098,
            "unit": "ns/iter",
            "extra": "iterations: 14888\ncpu: 55087.4328318109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 259519.96584037793,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 259507.61789601107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202981.74228762044,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 202968.77076411803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199429.53933892836,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 199417.50465549272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 194395.46041856453,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 194388.35304822653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 456073.6866840566,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 456067.6240208891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3985649.3974357517,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3985484.615384637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3181155.8384878687,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3181060.1374570434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3163409.325423738,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3163337.966101689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3165264.9829931348,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3165120.068027206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1779672.3275530627,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1779651.0597302509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3076076.088815795,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3075818.092105273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6099.746266180208,
            "unit": "ns/iter",
            "extra": "iterations: 114494\ncpu: 6099.674218736329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33940.61122953206,
            "unit": "ns/iter",
            "extra": "iterations: 20642\ncpu: 33937.65139036921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27646.624141469772,
            "unit": "ns/iter",
            "extra": "iterations: 25334\ncpu: 27643.93305439315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27394.74720577307,
            "unit": "ns/iter",
            "extra": "iterations: 25499\ncpu: 27391.678105023522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21282.927909308815,
            "unit": "ns/iter",
            "extra": "iterations: 32903\ncpu: 21282.36027109997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128543.51353342363,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 128533.3271957284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 268610.4113583972,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 268603.37682271725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67236.88146304082,
            "unit": "ns/iter",
            "extra": "iterations: 10444\ncpu: 67229.33741861305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66352.09085730386,
            "unit": "ns/iter",
            "extra": "iterations: 10533\ncpu: 66347.46036267035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66485.89671227621,
            "unit": "ns/iter",
            "extra": "iterations: 10524\ncpu: 66480.52071455718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133536.38858230802,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133530.63748810533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124817.34887030434,
            "unit": "ns/iter",
            "extra": "iterations: 5621\ncpu: 124813.30724070418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41309.52349785006,
            "unit": "ns/iter",
            "extra": "iterations: 16959\ncpu: 41306.893095112384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196162.98538915653,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 196160.71930317653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160947.20386562514,
            "unit": "ns/iter",
            "extra": "iterations: 4346\ncpu: 160939.66866083693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160261.99084458596,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 160248.50080109888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160401.21539871756,
            "unit": "ns/iter",
            "extra": "iterations: 4364\ncpu: 160384.60128322672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 272457.5742612783,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 272437.16951788345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1146398.3147540952,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1146304.5901639343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 948482.9051490705,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 948410.4336043281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 932202.8931909213,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 932173.1642189511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 946239.6490514949,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 946196.8834688389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 602718.6316695134,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 602673.4079173808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 931466.6136363413,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 931456.1497326299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39969.58235495421,
            "unit": "ns/iter",
            "extra": "iterations: 17546\ncpu: 39968.6481249291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197503.63886549638,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 197495.53496208842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160795.86580585554,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 160783.85981092925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156759.48316120575,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 156753.68208351976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157808.36908517717,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 157798.71563767208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 274413.21159875474,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 274397.5705329162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1136711.1691056122,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1136639.5121951161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 940041.225503317,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 939972.8859060459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 933385.7289718918,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 933294.1255006492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 935863.1417111146,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 935787.5668449254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 594105.1127241546,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 594065.8411613938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 926898.929801218,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 926841.1920529902 ns\nthreads: 1"
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
        "date": 1705773341639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15616.403617787848,
            "unit": "ns/iter",
            "extra": "iterations: 45221\ncpu: 15615.539240618296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126947.78619554905,
            "unit": "ns/iter",
            "extra": "iterations: 6679\ncpu: 126938.01467285522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239193.99478022393,
            "unit": "ns/iter",
            "extra": "iterations: 3640\ncpu: 239176.92307692312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 347347.87394279643,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 347332.7426500203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470046.79324894975,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 469991.1392405063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 569781.8024933867,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 569785.6299212597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 548169.1180000325,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548129.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 633659.4360000163,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633624.499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 721988.5690866817,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 721974.4730679156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12432.427357451294,
            "unit": "ns/iter",
            "extra": "iterations: 57191\ncpu: 12430.80554632722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10070.883395574858,
            "unit": "ns/iter",
            "extra": "iterations: 69620\ncpu: 10070.948003447269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9973.014923037386,
            "unit": "ns/iter",
            "extra": "iterations: 70294\ncpu: 9972.495518820946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10058.611023306174,
            "unit": "ns/iter",
            "extra": "iterations: 69598\ncpu: 10058.26747895054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16739.25322484116,
            "unit": "ns/iter",
            "extra": "iterations: 41785\ncpu: 16738.822543975108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57817.36715385231,
            "unit": "ns/iter",
            "extra": "iterations: 14163\ncpu: 57815.801736920024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 244418.64467297087,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 244404.22736361035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 192777.27675945527,
            "unit": "ns/iter",
            "extra": "iterations: 4419\ncpu: 192772.91242362573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 192989.29592760978,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 192984.16289592723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 189375.0299800214,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 189370.35309793454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 466714.8258098474,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 466687.4668082847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3984818.320513265,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3984572.6495726416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3196257.248275899,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3196048.9655172452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3088275.209302385,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3088099.3355481746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3133765.4324324923,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3133737.1621621633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1752662.5180952188,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1752548.1904761924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3055502.9144733823,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3055427.9605263215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11354388.361702207,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11353849.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5126149.610000539,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5126115.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14763056.478871886,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14762332.39436618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54804.77010000868,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54805.179999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 285100.4145611493,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 285087.0013297868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224615.3699528004,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 224607.472469848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 224040.30049648497,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 224037.47060360527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223872.55112153498,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 223874.28273343932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 489214.55580736126,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 489184.41926345235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4053925.5196503745,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4053951.9650655165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3260095.6947370623,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3260092.982456124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3145773.6666669482,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3145728.6195286065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3197345.742268135,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3197295.1890034378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1795088.7007721325,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1795057.5289575218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3118534.449664373,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3118498.993288581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11617094.01086875,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11616470.652173845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5181785.920000266,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5181536.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55599.17813793216,
            "unit": "ns/iter",
            "extra": "iterations: 14747\ncpu: 55595.18546144998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 252256.3817378548,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 252242.35640647993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 197714.14647167482,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 197703.5515320326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194874.24823018274,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 194862.70838090868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192283.4663646674,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 192274.56398641036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 452843.14293114125,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 452819.5235629213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4003834.685344851,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4003658.189655186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3218463.4999997923,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3218261.379310332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3127007.5999998427,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3126836.6666666716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3148572.665540658,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3148387.500000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1762447.2504932077,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1762383.4319526646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3080095.914191117,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3079985.8085808493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6209.410305749991,
            "unit": "ns/iter",
            "extra": "iterations: 112772\ncpu: 6209.11485120419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34402.54615158019,
            "unit": "ns/iter",
            "extra": "iterations: 20346\ncpu: 34402.08394770492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27856.82161307899,
            "unit": "ns/iter",
            "extra": "iterations: 25938\ncpu: 27856.4384301025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27652.221179870212,
            "unit": "ns/iter",
            "extra": "iterations: 26969\ncpu: 27652.13022358995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21693.15646152984,
            "unit": "ns/iter",
            "extra": "iterations: 32206\ncpu: 21692.61007265723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127896.71932712768,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 127896.37959407699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 270441.84015446185,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 270439.03474903555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67900.09731314403,
            "unit": "ns/iter",
            "extra": "iterations: 10235\ncpu: 67897.07865168562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66869.72758521962,
            "unit": "ns/iter",
            "extra": "iterations: 10473\ncpu: 66870.20910913707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67112.68518341758,
            "unit": "ns/iter",
            "extra": "iterations: 10441\ncpu: 67111.33990997051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133220.68529468545,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 133220.1220675188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125083.640000004,
            "unit": "ns/iter",
            "extra": "iterations: 5575\ncpu: 125080.57399103086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40537.42300556919,
            "unit": "ns/iter",
            "extra": "iterations: 17248\ncpu: 40537.70292207804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201771.38563599464,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201769.6567637733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164432.86248238667,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 164427.73859896557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 159144.02710087987,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 159143.63470735805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161558.51747928737,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 161553.38086476328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 280962.71234518645,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 280957.9304834209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1165745.1400001643,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1165725.8333333211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 961923.5582989353,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 961919.6159121969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 936712.0200534404,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936718.3155080175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 948459.1368563417,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 948457.3170731715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 602742.4735494208,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 602738.8225256068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 938241.0577181445,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 938208.9932885936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39504.348673860375,
            "unit": "ns/iter",
            "extra": "iterations: 17796\ncpu: 39503.37716340786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199201.09591779768,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 199194.00513845202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163592.7319010061,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 163591.84960298965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158012.15120739528,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 158011.35183931282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159981.30902854816,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 159978.62857142798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 278831.97956731974,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 278829.0865384605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1152269.0856672088,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1152242.5041186162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 954426.2272109236,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 954420.408163263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 930860.1007957433,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 930839.2572944264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 938884.7962466402,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 938870.3753351285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 593539.287648049,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 593535.279187811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 932645.2333333085,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 932614.7999999914 ns\nthreads: 1"
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
        "date": 1705774763060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15802.284295873247,
            "unit": "ns/iter",
            "extra": "iterations: 46128\ncpu: 15801.370100589666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123647.85514550532,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 123642.44838237687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236977.11521972236,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 236972.293676313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341301.1814229291,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 341284.6245059287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 447811.87176835444,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 447790.4343329886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555239.8982074109,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 555205.1856594109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 534013.3920000199,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533969.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621843.5640000165,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621836.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 705800.089244814,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 705753.0892448504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11843.439664344784,
            "unit": "ns/iter",
            "extra": "iterations: 58274\ncpu: 11842.78237292788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9960.882326105017,
            "unit": "ns/iter",
            "extra": "iterations: 70143\ncpu: 9960.201303052338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9831.476129032222,
            "unit": "ns/iter",
            "extra": "iterations: 71300\ncpu: 9830.830294530173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9984.382249210897,
            "unit": "ns/iter",
            "extra": "iterations: 70318\ncpu: 9984.338291760308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16851.49084231896,
            "unit": "ns/iter",
            "extra": "iterations: 42478\ncpu: 16851.334808606818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57162.56374178049,
            "unit": "ns/iter",
            "extra": "iterations: 14143\ncpu: 57159.07516085692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252716.68360412493,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 252704.13589364832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202324.39193357222,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202316.39383155384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200590.76941176018,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 200578.564705882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194980.62719999976,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 194969.21142857187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 458865.4387434729,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 458839.37172774837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3829534.6611571233,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3829353.305785133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3060221.2006578767,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3060006.2499999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3049183.973684191,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3049031.2500000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3035487.9379085544,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3035305.882352936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1753577.5274101647,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1753464.4612476344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2968556.9324758644,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2968311.897106115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11353688.17021289,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11353053.19148933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5259904.19999971,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5259613.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14598477.000000512,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14597684.931506846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53761.16969999884,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53756.449999999844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 297699.79330572067,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 297681.7805383013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 231546.29219551553,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 231536.4839319475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231219.83868357798,
            "unit": "ns/iter",
            "extra": "iterations: 3707\ncpu: 231204.90963042868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226826.68412699059,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 226812.64550264456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 490330.2458923677,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 490311.27478753607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3909248.705882255,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3909092.016806736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3137601.0505050393,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3137326.262626243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3096431.3399999808,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3096221.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3071844.559602612,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3071729.801324512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1802637.156976656,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1802514.5348837252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3032958.695081986,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3032783.2786885197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11608726.48351632,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11608086.81318682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5123729.560000356,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5123762.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54803.61054603831,
            "unit": "ns/iter",
            "extra": "iterations: 14944\ncpu: 54801.65283725902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263122.2418020244,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 263117.31535396894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206690.41640455203,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 206685.19235422212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 204019.64098906156,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 204015.6205420829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195878.3910833896,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 195866.06606606656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 442828.02351738006,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 442815.9509202431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3875372.9294605996,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3875263.070539429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3065193.259868543,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3065164.8026315784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3052822.17377084,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3052772.4590164134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3036388.0977197825,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3036346.254071653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1756657.0831758496,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1756626.6540642655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2987114.340835959,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2987004.823151126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6098.333336236258,
            "unit": "ns/iter",
            "extra": "iterations: 114797\ncpu: 6098.171555005768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33605.63273635082,
            "unit": "ns/iter",
            "extra": "iterations: 20827\ncpu: 33604.993518029296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27291.910634147185,
            "unit": "ns/iter",
            "extra": "iterations: 25625\ncpu: 27291.617560975494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25813.348282724783,
            "unit": "ns/iter",
            "extra": "iterations: 27136\ncpu: 25812.046727594334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21424.740914243066,
            "unit": "ns/iter",
            "extra": "iterations: 32661\ncpu: 21424.377698172222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128137.02927721833,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128135.51692589204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263260.92727270053,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 263250.1136363627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66357.09353741868,
            "unit": "ns/iter",
            "extra": "iterations: 10584\ncpu: 66357.54913076387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66234.67826168759,
            "unit": "ns/iter",
            "extra": "iterations: 10608\ncpu: 66229.48717948765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65549.09995325028,
            "unit": "ns/iter",
            "extra": "iterations: 10695\ncpu: 65544.58158017826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132006.46139358365,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131997.08097928306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122640.6618730268,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 122636.39074009273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40186.145614335015,
            "unit": "ns/iter",
            "extra": "iterations: 17409\ncpu: 40182.79051065519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 193460.49475715822,
            "unit": "ns/iter",
            "extra": "iterations: 3624\ncpu: 193446.05408388487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158932.43142597543,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 158930.9264305181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158226.70348574087,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158222.97419646994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158874.76012891374,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 158865.60773480698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 275434.74626275524,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 275422.6199842639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117202.333333397,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117129.824561389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 923019.4092105804,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 923009.0789473765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 920406.156373188,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920378.8436267969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 916718.5169713816,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 916678.981723241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 590198.2607595639,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 590195.611814344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 913035.1822917623,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 913014.71354166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39441.02295487558,
            "unit": "ns/iter",
            "extra": "iterations: 17774\ncpu: 39441.3075278497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 194006.96938775983,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 193994.40154440206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159064.62593687174,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 159042.33477174593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157067.79892159838,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 157053.2015277462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157267.61434977394,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 157255.8744394637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 275154.09729306423,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 275130.56100431905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1102092.767295727,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102019.811320769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 916622.0104850575,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 916603.538663179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 916205.4070679499,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 916157.984293198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 913505.3302871087,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 913424.9347258565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 587936.9153395083,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 587896.479463543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 906769.0621762014,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 906718.3937823683 ns\nthreads: 1"
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
        "date": 1705778346352,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15446.97413793066,
            "unit": "ns/iter",
            "extra": "iterations: 45472\ncpu: 15446.173469387757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124552.69503546508,
            "unit": "ns/iter",
            "extra": "iterations: 6768\ncpu: 124547.03014184395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233114.14741682,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 233106.05896672988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 337811.9045186849,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 337792.8094302554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 442523.71289162873,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 442500.6163328198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 545444.5206611501,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 545414.4945963126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537424.5190000124,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537384.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 623996.390000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623988.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 699981.7888293816,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 699946.1361897469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11983.63650251509,
            "unit": "ns/iter",
            "extra": "iterations: 58259\ncpu: 11983.276403645783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9949.931187183784,
            "unit": "ns/iter",
            "extra": "iterations: 72036\ncpu: 9949.537731134422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9978.964001662416,
            "unit": "ns/iter",
            "extra": "iterations: 69781\ncpu: 9978.102921998827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10066.447870544967,
            "unit": "ns/iter",
            "extra": "iterations: 69337\ncpu: 10065.947473931657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16603.72965904268,
            "unit": "ns/iter",
            "extra": "iterations: 42058\ncpu: 16601.892624470962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56176.971730965226,
            "unit": "ns/iter",
            "extra": "iterations: 14645\ncpu: 56173.54728576306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 251949.928381969,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 251929.00088417344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198209.7295906535,
            "unit": "ns/iter",
            "extra": "iterations: 4275\ncpu: 198199.1111111108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 193513.09768812504,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 193494.24297370872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 189530.3002896025,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 189522.47716640707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 459069.2021773036,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 459057.1280456192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4018645.865546143,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 4018332.35294118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3094429.2441471205,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3094282.60869565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3096965.700000093,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3096719.3333333284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3102804.2933333684,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3102672.3333333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1759078.2175573437,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1758997.1374045806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3030636.330065241,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3030441.5032679667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11361000.430107411,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11360574.193548419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5208101.910000096,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5208042.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14845924.999999432,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14845147.887323977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53459.15000000332,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53458.5400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291138.8037351449,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 291130.05093378626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230756.09352324076,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 230749.52969631937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232496.79918919626,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 232485.24324324378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229120.88251000392,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 229110.6008010665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 477315.1051762132,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 477294.16299559514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3968813.365957508,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3968674.0425531995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3193069.9591837265,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3192951.70068028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3149967.9220338925,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149789.830508462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3143993.435810982,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3143843.243243241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1810119.1802325647,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1810073.6434108575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3066680.679867932,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3066494.3894389523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11650702.824176159,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11650173.626373626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5191643.789999602,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5191449.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54422.70019933514,
            "unit": "ns/iter",
            "extra": "iterations: 15050\ncpu: 54419.19601328904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 260236.49058322958,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 260207.6852976916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201488.2859496377,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 201473.57025182375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 200078.04442367036,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 200059.0367079724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198928.96080219012,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 198915.9298085698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 439739.85388126614,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 439707.5596144102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3895850.1924687247,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3895679.4979079342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3131487.913333331,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3131350.3333333395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3124705.464883131,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3124520.7357859462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3098185.156146093,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3098067.774086376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1763718.260456365,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1763592.205323196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3028086.4545455617,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3027930.1948051997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5974.884955373003,
            "unit": "ns/iter",
            "extra": "iterations: 116859\ncpu: 5974.33916086905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34359.78080306789,
            "unit": "ns/iter",
            "extra": "iterations: 20347\ncpu: 34357.11898559966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27426.677921570732,
            "unit": "ns/iter",
            "extra": "iterations: 25500\ncpu: 27423.799999999854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26776.762989867064,
            "unit": "ns/iter",
            "extra": "iterations: 26155\ncpu: 26775.132861785707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21498.73861151424,
            "unit": "ns/iter",
            "extra": "iterations: 32928\ncpu: 21496.729227405183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126674.49315562139,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 126667.20100864547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 254212.2435665096,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 254184.41464298638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72137.77701307644,
            "unit": "ns/iter",
            "extra": "iterations: 10171\ncpu: 72131.4914954286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66212.40605200946,
            "unit": "ns/iter",
            "extra": "iterations: 10575\ncpu: 66209.64539007029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66390.99962185921,
            "unit": "ns/iter",
            "extra": "iterations: 10578\ncpu: 66387.28493098964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133002.83494775768,
            "unit": "ns/iter",
            "extra": "iterations: 5265\ncpu: 132992.51661918132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 118258.4129294264,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 118248.7730580482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40663.2027748772,
            "unit": "ns/iter",
            "extra": "iterations: 17226\ncpu: 40661.94125159656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197730.68661051293,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 197712.48910833756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162502.74257196527,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 162492.96657381582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160129.04713960356,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 160118.4668192205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 159592.72600867655,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 159584.63642580228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276075.06892479147,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 276063.9621898386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1132992.2718447275,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1132966.990291261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 938003.5604839082,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937976.612903225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 949575.0997304966,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 949542.7223719701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 948220.9028339895,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 948180.2968960785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 605243.5683391369,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 605238.5813148808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 937081.2526595544,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 937044.5478723542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39781.817711588315,
            "unit": "ns/iter",
            "extra": "iterations: 17593\ncpu: 39780.907178990914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199045.861971034,
            "unit": "ns/iter",
            "extra": "iterations: 3521\ncpu: 199035.81368929186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161252.2929525432,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 161250.8291110086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159902.98947851436,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 159901.37236962453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159293.17214433258,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 159287.47414387506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 273887.2186645939,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 273868.6060132731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1127177.105769233,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1127117.4679487161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 936200.813422855,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 936142.4161073843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 940523.1126006413,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 940497.0509383534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 934448.4973404575,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 934438.6968085158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 594828.0322581073,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 594814.0067911696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 930230.9007936432,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 930194.8412698342 ns\nthreads: 1"
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
        "date": 1705952879061,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15493.067057451175,
            "unit": "ns/iter",
            "extra": "iterations: 45379\ncpu: 15491.75830229842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126335.40404942457,
            "unit": "ns/iter",
            "extra": "iterations: 6717\ncpu: 126328.6586273634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235963.21395601414,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 235943.06272060826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 344345.2928802874,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 344292.5161812296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 459631.71160855,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 459553.25351379503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560405.5728155335,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 560383.2362459548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 538617.3809999945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538612.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624690.9760000107,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624653.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 715065.3200000516,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 715038.7692307694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12089.271839130144,
            "unit": "ns/iter",
            "extra": "iterations: 57935\ncpu: 12088.966945715025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10124.3883295426,
            "unit": "ns/iter",
            "extra": "iterations: 69029\ncpu: 10123.836358631883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10078.591502140789,
            "unit": "ns/iter",
            "extra": "iterations: 69594\ncpu: 10077.772509124357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10094.288340688698,
            "unit": "ns/iter",
            "extra": "iterations: 68426\ncpu: 10093.664688860947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16753.935845336764,
            "unit": "ns/iter",
            "extra": "iterations: 41587\ncpu: 16753.20412628946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56694.789872188136,
            "unit": "ns/iter",
            "extra": "iterations: 14396\ncpu: 56691.91442067246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 258794.21216706175,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 258780.81113801445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204019.88779903666,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 204011.38755980905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201429.10099339098,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 201412.6064333017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196688.02511520675,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 196672.32718893973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 454719.5067079292,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 454700.51599587296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3898801.970588259,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3898596.218487382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3123118.468013623,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3122875.420875419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3084504.4119602437,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3084265.448504974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3095993.810631514,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3095763.4551495053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1762513.8133332387,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1762367.2380952372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3016510.07189514,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3016365.0326797483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11336855.446807796,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11336186.170212762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5240105.049999784,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5239808.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14738553.323943859,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14737373.2394366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53590.19109999963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53587.4500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294366.47532557754,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 294346.4359150092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 231382.35716220457,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 231367.7227186563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 233212.0942166651,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 233194.16236763564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 230466.858760113,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 230453.0727762806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 481886.2035397894,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 481877.3230088515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3977044.316239411,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3976835.897435904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3193143.343642968,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3192944.673539516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3137232.976431157,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3137203.03030303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3176329.6484642453,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3176057.6791808857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1807234.6400778897,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1807147.2762645853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3074281.7649005526,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3074130.1324503454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11734823.489130912,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11733783.695652153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5320236.879999811,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5319810.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54952.83930008335,
            "unit": "ns/iter",
            "extra": "iterations: 14916\ncpu: 54949.503888442065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261364.7370021182,
            "unit": "ns/iter",
            "extra": "iterations: 3289\ncpu: 261354.4238370311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206680.73235008476,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 206668.25435203192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205611.863614575,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 205599.0651965479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201217.88844432848,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 201203.671452106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 453549.6515151376,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 453120.1515151493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3930375.9113923116,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3930129.5358649623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3133979.704697924,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3133485.2348993174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3088852.6821189052,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3088795.3642384266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3125554.5785951465,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3125354.8494983255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1771526.419047621,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1771508.3809523792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3026181.967426923,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3026043.6482084626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6022.674342076706,
            "unit": "ns/iter",
            "extra": "iterations: 116389\ncpu: 6022.477210045623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34690.65802429011,
            "unit": "ns/iter",
            "extra": "iterations: 21329\ncpu: 34688.39608045368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27909.595059880958,
            "unit": "ns/iter",
            "extra": "iterations: 26720\ncpu: 27908.91092814367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27782.679135886858,
            "unit": "ns/iter",
            "extra": "iterations: 25182\ncpu: 27781.54237153522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21689.054896001035,
            "unit": "ns/iter",
            "extra": "iterations: 32261\ncpu: 21688.376057778834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127318.14392558917,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 127309.90514410773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266258.93909400946,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 266251.96041111206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67041.41886574547,
            "unit": "ns/iter",
            "extra": "iterations: 10421\ncpu: 67033.26935994538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66471.88645418875,
            "unit": "ns/iter",
            "extra": "iterations: 10542\ncpu: 66463.94422310869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66552.57655774754,
            "unit": "ns/iter",
            "extra": "iterations: 10528\ncpu: 66548.92667173305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133706.96198663715,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 133692.1298949396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124156.60918927118,
            "unit": "ns/iter",
            "extra": "iterations: 5637\ncpu: 124141.60014191792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41388.473115723216,
            "unit": "ns/iter",
            "extra": "iterations: 16850\ncpu: 41384.801186943005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 204179.5943505847,
            "unit": "ns/iter",
            "extra": "iterations: 3434\ncpu: 204158.24111822876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165087.2865221518,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 165069.91046182677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 164229.67305893073,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 164204.70065481734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 163045.7945971138,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 163020.0279459704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276669.80648988666,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 276628.53185595287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1144812.0588236002,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1144676.7973856225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 948979.4002714783,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 948903.527815459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 933391.1080000992,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 933308.2666666617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 943743.5472972464,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 943639.3243243254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 602664.4779601684,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 602589.196197069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 930967.4040000573,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 930827.0666666658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40427.6423425506,
            "unit": "ns/iter",
            "extra": "iterations: 17212\ncpu: 40423.13502207759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199930.46059394424,
            "unit": "ns/iter",
            "extra": "iterations: 3502\ncpu: 199899.85722444416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 162738.19265629616,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 162717.0113874027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159885.7818057407,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 159873.7574099397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160337.46206738666,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 160322.36992894937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 274936.29048742336,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 274915.2515723269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1138937.9561687482,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1138837.987012978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 945242.8513513397,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 945146.8918918815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 937112.6648865708,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 937000.534045402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 939659.56510058,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 939543.4899328806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 591325.7586498039,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 591278.3122362975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 929161.9880795772,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 929062.7814569412 ns\nthreads: 1"
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
        "date": 1705954925544,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15308.9177606262,
            "unit": "ns/iter",
            "extra": "iterations: 45477\ncpu: 15308.347076544187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126822.67872371039,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 126812.23349507424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232901.86487935568,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 232884.3163538874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 337657.4499803935,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 337640.4864652806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 453117.516940467,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 453094.81519507174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 552800.2818877554,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 552776.9770408164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 531104.7120000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531092.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 615422.5610000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615390.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 700720.9453303181,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 700711.6932422167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11805.212230215899,
            "unit": "ns/iter",
            "extra": "iterations: 58380\ncpu: 11804.808153477235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9932.256177537485,
            "unit": "ns/iter",
            "extra": "iterations: 70295\ncpu: 9931.9595988335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9904.700631365007,
            "unit": "ns/iter",
            "extra": "iterations: 70799\ncpu: 9904.683681972918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9883.576488032812,
            "unit": "ns/iter",
            "extra": "iterations: 70815\ncpu: 9883.5430346678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16495.189655578855,
            "unit": "ns/iter",
            "extra": "iterations: 42477\ncpu: 16494.775996421617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50190.786899997875,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50188.38999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 248686.95611740838,
            "unit": "ns/iter",
            "extra": "iterations: 3441\ncpu: 248674.5422842195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196811.78243834944,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 196805.57732196353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 192183.13055241865,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 192180.31567080022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 189989.34754463902,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 189984.91071428513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 455815.96181630704,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 455804.6955624362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3751740.4032259504,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3751630.2419354953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2995765.0128616337,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2995703.2154340884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3020160.337662226,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3020062.0129870134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2977762.082802473,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2977625.7961783414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1719384.0205606571,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1719287.102803737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2922774.5425867736,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2922645.425867506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11224804.863157762,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11224091.57894738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5041716.149999616,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5041142.999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14603005.152778003,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14599872.22222223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54743.76880000022,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54742.15999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 297366.34784110595,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 297357.65112262534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 236475.14104683764,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 236468.87052341568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 223411.7128351872,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 223409.42462900231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221486.85695809385,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 221482.17796171858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 479124.54620916676,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 479107.2495849455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3831332.323651381,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3831248.5477178562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3063868.174341952,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063803.9473684346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3056693.0328945983,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3056446.0526315738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3019717.490259795,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3019584.0909091006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1761187.9695816946,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1761089.3536121666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2974940.3546326235,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2974832.90734823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11426102.096774356,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11425140.860215029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5059205.649999967,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5058898.000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.70871380888,
            "unit": "ns/iter",
            "extra": "iterations: 14127\ncpu: 57530.523111771465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261054.1173065249,
            "unit": "ns/iter",
            "extra": "iterations: 3282\ncpu: 261041.95612431402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 200817.03446660325,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 200803.16529894495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 201090.9944649402,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 201077.214022141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 190534.17685249375,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 190524.28923214573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 434599.16992481827,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 434562.4561403503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3780287.461538656,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3780063.1578947403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3027424.828478851,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3027245.6310679675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3047301.272131037,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3047137.7049180404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2982031.8530352805,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2981864.217252397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1746379.3691147764,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1746354.6139359681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2939472.515822888,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2939334.1772151906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6125.032197630004,
            "unit": "ns/iter",
            "extra": "iterations: 114760\ncpu: 6124.889334262764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33947.30503099653,
            "unit": "ns/iter",
            "extra": "iterations: 20811\ncpu: 33946.88385949742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27880.493108329607,
            "unit": "ns/iter",
            "extra": "iterations: 26844\ncpu: 27878.714051557246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26629.7739825018,
            "unit": "ns/iter",
            "extra": "iterations: 26290\ncpu: 26628.254089007176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21461.488280174588,
            "unit": "ns/iter",
            "extra": "iterations: 32637\ncpu: 21461.14532585701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129126.13337022782,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 129124.23907028174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258653.7534145582,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 258650.16611295735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66007.72319154303,
            "unit": "ns/iter",
            "extra": "iterations: 10603\ncpu: 66002.6596246349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65479.4629008164,
            "unit": "ns/iter",
            "extra": "iterations: 10728\ncpu: 65475.671140940554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65037.95848811883,
            "unit": "ns/iter",
            "extra": "iterations: 10768\ncpu: 65032.95876671588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125808.49695013024,
            "unit": "ns/iter",
            "extra": "iterations: 5574\ncpu: 125804.485109437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122171.89512322035,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122170.45970984148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41361.00230373918,
            "unit": "ns/iter",
            "extra": "iterations: 16929\ncpu: 41360.48792013733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196023.2513339186,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 196022.97107553904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159789.05117660077,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 159783.7331505595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157621.50630915287,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 157614.73636773086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157898.65613006338,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 157885.61752088615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 272366.0687913139,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 272354.60551885003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1117222.4792331986,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117101.437699694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 921780.2625330166,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 921721.6358839121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 920595.3758213088,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920591.8528252348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 909281.5929779891,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 909270.0910273163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 594964.7046809138,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 594922.1276595735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 911303.6923077812,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 911203.2594524174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40076.85322099862,
            "unit": "ns/iter",
            "extra": "iterations: 17448\ncpu: 40075.13182026613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 194243.1060140073,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 194229.95804195674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159569.46854266067,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 159560.5811027223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 158555.7201081016,
            "unit": "ns/iter",
            "extra": "iterations: 4441\ncpu: 158536.99617203392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156665.4195492155,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 156661.0131667046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 269730.37730766257,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 269717.42307692417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1104239.5952755236,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104236.5354330696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 911283.281616668,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 911260.8865710493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 912431.4641460675,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 912390.7431551551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 901951.6800519018,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 901918.5233160532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 585834.254180637,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585826.0869565227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 904946.9083871489,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 904928.7741935579 ns\nthreads: 1"
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
        "date": 1705956766233,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15196.210773033852,
            "unit": "ns/iter",
            "extra": "iterations: 46078\ncpu: 15195.242849081995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122744.57916062104,
            "unit": "ns/iter",
            "extra": "iterations: 6910\ncpu: 122736.96092619392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232782.63465155583,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 232765.85956416462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 336666.89925813687,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 336646.3100351425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 445197.1792114896,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 445159.60061443946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 550389.3502217239,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 550351.8049398354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 529185.2039999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529150.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 615277.1520000896,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615256.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 704223.3553530867,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 704209.7949886101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11726.562560604578,
            "unit": "ns/iter",
            "extra": "iterations: 59814\ncpu: 11726.217942287763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9772.300441887677,
            "unit": "ns/iter",
            "extra": "iterations: 71964\ncpu: 9772.126340948254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9717.504657330199,
            "unit": "ns/iter",
            "extra": "iterations: 72037\ncpu: 9716.565098491057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9883.539583894359,
            "unit": "ns/iter",
            "extra": "iterations: 70799\ncpu: 9882.931962315857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16285.149086184145,
            "unit": "ns/iter",
            "extra": "iterations: 43116\ncpu: 16283.855181371186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57503.52410531983,
            "unit": "ns/iter",
            "extra": "iterations: 14167\ncpu: 57500.4870473636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252210.82299319812,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 252186.3863569538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198075.89990729964,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 198065.38461538492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197784.6362385537,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 197766.83486238527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 188085.17934541716,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 188072.66696152196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 474685.3527507838,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 474654.9083063632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3780770.199187177,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3780493.9024390224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3014989.4495115723,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3014793.811074919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3015974.1363641466,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3015619.805194812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2958997.7866244284,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2958844.2675159145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1742750.6843101678,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1742601.134215499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2929971.7310123076,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2929903.7974683526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11228372.926315818,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11227795.789473679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5093953.539999347,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5093916.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14394046.027024234,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14393470.270270297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55854.23349998563,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55852.17999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291356.9665540425,
            "unit": "ns/iter",
            "extra": "iterations: 2960\ncpu: 291344.0540540543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 227127.27619050167,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 227119.41798941736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 226739.8591437809,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 226730.4175475685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223183.73345540234,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 223176.8506408571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 494763.3393285548,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 494726.43884892267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3835756.63636387,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3835520.247933879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3086450.627906924,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3086292.026578082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3036055.019543882,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3035810.749185674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3003012.2225804417,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3002880.6451612823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1784621.2101166476,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1784452.334630352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2969580.59744428,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2969384.6645367364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11508339.54348044,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11507105.434782617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5055583.38000128,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5055545.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54497.89366229943,
            "unit": "ns/iter",
            "extra": "iterations: 15037\ncpu: 54494.087916473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 260428.02272727247,
            "unit": "ns/iter",
            "extra": "iterations: 3300\ncpu: 260409.1818181826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201305.08786806028,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201294.58186101264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 197609.90957325857,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 197593.03344867323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 190417.5356265393,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 190405.6511056515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 454226.7996862012,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 454187.60460250743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3783852.1255056006,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3783667.6113360142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3030253.156351904,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3030039.7394136903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3011113.5677418956,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3011082.2580645215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2969872.8853503736,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2969792.0382165792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1743890.0543073725,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1743842.696629204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2928382.675079126,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2928304.1009463863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6075.170845664233,
            "unit": "ns/iter",
            "extra": "iterations: 115578\ncpu: 6074.945923964751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32897.49266642017,
            "unit": "ns/iter",
            "extra": "iterations: 21272\ncpu: 32896.84561865342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27547.679189615,
            "unit": "ns/iter",
            "extra": "iterations: 25420\ncpu: 27546.490952006192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26766.901552822463,
            "unit": "ns/iter",
            "extra": "iterations: 26146\ncpu: 26766.113363420667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21806.20430744482,
            "unit": "ns/iter",
            "extra": "iterations: 32084\ncpu: 21804.82483480874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129032.74756030012,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 129030.23384275405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258475.75073748617,
            "unit": "ns/iter",
            "extra": "iterations: 2712\ncpu: 258465.92920354145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65346.072834099126,
            "unit": "ns/iter",
            "extra": "iterations: 10723\ncpu: 65342.08710248941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64771.06976097108,
            "unit": "ns/iter",
            "extra": "iterations: 10794\ncpu: 64769.8350935707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64398.00009183109,
            "unit": "ns/iter",
            "extra": "iterations: 10889\ncpu: 64394.58168794185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130855.4092353774,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 130850.40194428978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121470.52941176781,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 121467.39545375635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40061.25205293124,
            "unit": "ns/iter",
            "extra": "iterations: 17536\ncpu: 40059.93385036467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192925.12393275154,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 192918.7551638687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 156288.83121799774,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 156281.18459140425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157560.9220545339,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157556.09371480162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 155516.11429841776,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 155507.7162552798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 271156.0368074683,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 271144.7888415373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1095830.6056783542,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1095741.1671924342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 901524.1069590435,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 901461.7268041372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 905919.2726099778,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 905855.0387597069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 902030.4245161477,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 901973.5483870899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 583893.8085283138,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 583881.0200668846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 895490.8687258816,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 895388.2882882771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38776.39110913378,
            "unit": "ns/iter",
            "extra": "iterations: 18041\ncpu: 38776.04899950177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 193112.18974073007,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 193101.15830115895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 157496.99639963012,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157486.85868587054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 155239.16178430466,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 155223.56857523162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154752.88977423756,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 154739.42009738836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 269309.57676029066,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 269279.83839938533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1086774.867806944,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1086679.0046656434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 899417.796914983,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 899379.691516706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 902308.9120308834,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 902240.2328589854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 895266.9119897026,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 895220.9183673316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 579743.1836228161,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 579698.5111662438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 893031.4630101075,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 892932.015306122 ns\nthreads: 1"
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
        "date": 1705958371951,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15398.611020997812,
            "unit": "ns/iter",
            "extra": "iterations: 45005\ncpu: 15398.242417509166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124683.99221732648,
            "unit": "ns/iter",
            "extra": "iterations: 6810\ncpu: 124682.77533039647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232754.7911409361,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 232742.33557046982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 338194.3150039253,
            "unit": "ns/iter",
            "extra": "iterations: 2546\ncpu: 338163.8648860958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446528.9833679876,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 446499.948024948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553845.0625000024,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 553778.5714285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 531261.5700000265,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531200.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 616863.5340000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616842.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 704194.2953682422,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 704146.8488990127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12194.819662736058,
            "unit": "ns/iter",
            "extra": "iterations: 57581\ncpu: 12194.590229415937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10081.659417262717,
            "unit": "ns/iter",
            "extra": "iterations: 69431\ncpu: 10081.263412596682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10068.357292835688,
            "unit": "ns/iter",
            "extra": "iterations: 69534\ncpu: 10068.135013087116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10009.166704848441,
            "unit": "ns/iter",
            "extra": "iterations: 69842\ncpu: 10009.0332464706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16791.404350853078,
            "unit": "ns/iter",
            "extra": "iterations: 41647\ncpu: 16791.39193699424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55564.26762580134,
            "unit": "ns/iter",
            "extra": "iterations: 14666\ncpu: 55560.59593617893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 251135.11912504566,
            "unit": "ns/iter",
            "extra": "iterations: 3383\ncpu: 251132.13124445744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200961.7201035745,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 200952.80131826724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197059.00998142894,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 197055.7103064065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 190767.81466578157,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 190760.83165660634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 468823.1019210105,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 468811.3127001069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3823061.934156392,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3822925.51440329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3005913.948220054,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3005830.0970873744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3056905.091803394,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3056755.4098360613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2983483.329032219,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2983349.354838702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1717408.040816236,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1717385.7142857146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2953397.6698717675,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2953224.038461538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11214371.357894642,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11214053.684210548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5149275.609999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5148992.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14662199.680555452,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14661968.055555578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53386.28420000191,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53384.12999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 298692.0776429763,
            "unit": "ns/iter",
            "extra": "iterations: 2885\ncpu: 298684.9913344889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232775.00950311846,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 232766.0874287262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232685.48375744052,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 232685.13806172088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228018.75033235952,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 228007.12576442523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505683.57019066147,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 505677.2385904073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3933360.305084715,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3933315.677966112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3083237.914191282,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3083129.042904291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3080952.4735101024,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3080851.6556291417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3073960.5610559536,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3073895.3795379666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1773382.1145038086,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1773379.0076335936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3014928.734627718,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3014781.877022657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11467814.913979504,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11467045.16129033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5222419.570000056,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5222351.000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54744.655045502586,
            "unit": "ns/iter",
            "extra": "iterations: 14944\ncpu: 54741.970021413734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 262336.324954021,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 262306.9282648675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199898.80299836915,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 199887.3740922936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199145.3606710034,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 199129.0540540549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195366.7642071469,
            "unit": "ns/iter",
            "extra": "iterations: 4364\ncpu: 195357.44729605783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 447601.115067037,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 447570.1754385954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3898042.5983261126,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897779.9163179947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3064063.809836357,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3063993.4426229643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3088138.681063465,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3087886.046511639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3043122.3366011423,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3042985.6209150385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1741772.7715355402,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1741673.9700374613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2993084.0128620286,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2992894.5337620485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6156.284353513774,
            "unit": "ns/iter",
            "extra": "iterations: 113591\ncpu: 6155.762340326267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33670.29567978465,
            "unit": "ns/iter",
            "extra": "iterations: 20786\ncpu: 33668.31040123159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27732.427167927788,
            "unit": "ns/iter",
            "extra": "iterations: 25243\ncpu: 27730.808540981903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27545.783140379324,
            "unit": "ns/iter",
            "extra": "iterations: 26086\ncpu: 27544.29579084554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21514.465557976717,
            "unit": "ns/iter",
            "extra": "iterations: 32591\ncpu: 21512.61084348425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130605.467237519,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130597.61727475825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263744.3505465464,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 263728.34526950296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65787.66989195891,
            "unit": "ns/iter",
            "extra": "iterations: 10645\ncpu: 65786.82010333486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66192.29038970904,
            "unit": "ns/iter",
            "extra": "iterations: 10572\ncpu: 66190.70185395384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65601.91872129371,
            "unit": "ns/iter",
            "extra": "iterations: 10667\ncpu: 65596.73760195031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132030.7833543867,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 132023.90323163077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123102.94328356697,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 123095.61018437298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41243.25534175244,
            "unit": "ns/iter",
            "extra": "iterations: 16942\ncpu: 41240.88065163468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 204641.98189253686,
            "unit": "ns/iter",
            "extra": "iterations: 3424\ncpu: 204621.58294392558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 163436.22248133706,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 163426.4692164183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161488.39629629473,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 161476.2037037065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160646.66074313875,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 160641.14931917883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 281854.9907630428,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 281841.44578313385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1133400.1607141995,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1133368.9935064875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 923813.9221634681,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 923757.7836411529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 932473.1009295874,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 932416.0690571096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 920548.5519053579,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 920496.3206307485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 594833.3110169087,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 594817.6271186458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 915243.893979055,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 915229.973821993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40366.744064081206,
            "unit": "ns/iter",
            "extra": "iterations: 17352\ncpu: 40365.95205163654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199496.98147620988,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 199496.77970932022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160540.16984165326,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 160534.243745695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160267.7576588921,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 160261.36259716417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 158675.45689655954,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158666.37931034467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 281034.35765839997,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 281031.475541297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1122585.9422151726,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1122566.4526484637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 921587.7154149849,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 921559.1567852425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 930692.0134229086,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 930671.6778523489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 920459.1488800929,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 920436.6271409806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 587751.5251677857,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 587744.0436241685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 914239.0640522386,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 914238.4313725407 ns\nthreads: 1"
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
        "date": 1705959825853,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15406.164692461854,
            "unit": "ns/iter",
            "extra": "iterations: 45588\ncpu: 15405.279898218832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123503.30076291121,
            "unit": "ns/iter",
            "extra": "iterations: 6816\ncpu: 123496.62558685445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232512.76657752498,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 232500.64171123004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 337432.32576351793,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 337409.4753328112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 444549.389683349,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 444509.9591419815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 551515.6923077204,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 551490.9615384612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 529218.490000062,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529205.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 614348.1020000081,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614318.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 699759.9757759273,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 699734.5950037854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12037.222118864478,
            "unit": "ns/iter",
            "extra": "iterations: 58050\ncpu: 12037.093884582255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10132.679536175798,
            "unit": "ns/iter",
            "extra": "iterations: 69078\ncpu: 10132.351834158499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10107.471876441195,
            "unit": "ns/iter",
            "extra": "iterations: 69408\ncpu: 10107.161998616884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10092.914162966383,
            "unit": "ns/iter",
            "extra": "iterations: 69364\ncpu: 10092.8103915576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16861.813851979547,
            "unit": "ns/iter",
            "extra": "iterations: 41467\ncpu: 16861.328285142416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50547.88679999547,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50546.60000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 244789.3622024541,
            "unit": "ns/iter",
            "extra": "iterations: 3487\ncpu: 244776.31201605938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 194448.82330143233,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 194443.5476516186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 192990.4639873679,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 192982.68232106577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 190011.41649898927,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 190006.23742454773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 486030.0806184579,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 486009.3870789617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3813000.8395061735,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3812904.115226347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3031311.87254902,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3031183.986928101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3067819.224422309,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3067686.79867987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3033813.9276314504,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3033723.355263155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1737074.9324576054,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1736989.6810506545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2966280.9262819025,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2966177.8846153864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11255267.819148656,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11254765.957446804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5133358.839999573,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5133200.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14489065.52054754,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14486039.72602742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54806.08589999747,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54804.70000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291320.05625211436,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 291300.60996272514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224958.07931488662,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 224952.99077733842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 228472.52832711925,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 228459.0326028866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220923.0103279081,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 220920.60418280272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 500460.0127241084,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 500436.4372469636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3880051.2677825587,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3879912.1338912044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3092462.1893687844,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092352.4916943423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3113746.0436243233,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3113635.2348993234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3089656.216666678,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3089564.9999999837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1779522.2437619953,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1779413.43570058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3011737.2815535376,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3011635.2750809067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11498292.73913136,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11497615.217391314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5159575.4400000265,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5159517.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56225.404351707046,
            "unit": "ns/iter",
            "extra": "iterations: 14569\ncpu: 56222.163497837864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 254664.4039145891,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 254657.97746144905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198788.2987677397,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 198778.30737037887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 195437.80658435603,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 195432.51028806664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199100.03828304945,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 199089.7215777274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 462303.00213337614,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 462277.49333333276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3818173.889344433,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3818096.721311478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3040708.2899024663,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3040571.6612377646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3121293.4407895734,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3121235.526315795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3039166.64379068,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3039051.3071895246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1729171.6126629247,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1729136.4990689026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2964286.1687899563,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2964204.14012739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6067.931423122281,
            "unit": "ns/iter",
            "extra": "iterations: 115345\ncpu: 6067.762798560843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33576.35633782448,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 33575.27696513352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27693.474267181642,
            "unit": "ns/iter",
            "extra": "iterations: 25279\ncpu: 27692.250484591863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27667.109816397286,
            "unit": "ns/iter",
            "extra": "iterations: 26089\ncpu: 27666.299973168603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21482.486994441235,
            "unit": "ns/iter",
            "extra": "iterations: 32563\ncpu: 21481.97340539895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131310.50739837647,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 131304.1018917396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 259235.31999999928,
            "unit": "ns/iter",
            "extra": "iterations: 2700\ncpu: 259229.81481481125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65940.60226309259,
            "unit": "ns/iter",
            "extra": "iterations: 10605\ncpu: 65936.25648279213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66425.45515737198,
            "unit": "ns/iter",
            "extra": "iterations: 10548\ncpu: 66423.36935912131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65730.40645524047,
            "unit": "ns/iter",
            "extra": "iterations: 10658\ncpu: 65728.05404391029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132948.52394527805,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 132944.92588369508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122302.04795954506,
            "unit": "ns/iter",
            "extra": "iterations: 5734\ncpu: 122296.82595047116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40150.514953217986,
            "unit": "ns/iter",
            "extra": "iterations: 17421\ncpu: 40149.417369841125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 193967.78535774027,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 193963.44980588017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157378.90375533595,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 157369.35012367863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156860.74417564523,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 156857.54928315448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156002.00066979657,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 155993.21277070744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 274287.26998433983,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 274281.81818181387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1107797.9572784475,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1107730.0632911264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 912314.9388020242,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 912294.5312500056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 913994.9267973802,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 913956.0784313711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 912310.7627118803,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 912264.9282920547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 589442.7382155057,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 589431.0606060658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 902773.7671411461,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 902724.0620957356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38779.95818815176,
            "unit": "ns/iter",
            "extra": "iterations: 18081\ncpu: 38778.424865881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 191330.52365329047,
            "unit": "ns/iter",
            "extra": "iterations: 3657\ncpu: 191317.91085589302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 156104.62126616848,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 156098.4618814076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 154582.83208296608,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 154578.9717563975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154785.1762749579,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 154778.55875831237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 273841.4089844099,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 273835.15625000186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1096870.5258217154,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1096788.1064162578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 905428.7733161503,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 905404.0155440277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 913465.3916447855,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 913411.3577023662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 912937.1966145606,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 912914.5833333315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 589903.4361344574,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 589889.7478991622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 901534.3612903844,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 901466.7096774122 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}