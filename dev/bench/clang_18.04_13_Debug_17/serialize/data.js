window.BENCHMARK_DATA = {
  "lastUpdate": 1705574911888,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 18.04 Debug c++-17": [
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
        "date": 1702489570856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9100.039758611909,
            "unit": "ns/iter",
            "extra": "iterations: 76889\ncpu: 9099.889451026806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78838.40787153637,
            "unit": "ns/iter",
            "extra": "iterations: 10773\ncpu: 78837.82604659798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149540.96391132986,
            "unit": "ns/iter",
            "extra": "iterations: 5819\ncpu: 149541.2957552844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220037.00720719964,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 220035.83011583018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290995.21293162275,
            "unit": "ns/iter",
            "extra": "iterations: 2954\ncpu: 290996.2085308058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358625.1359466425,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 358622.22685571306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 429052.2773399532,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 429049.3103448272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 498396.30737705907,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 498380.7962529274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 567790.6453715765,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 567770.9256844851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6763.053077742304,
            "unit": "ns/iter",
            "extra": "iterations: 104281\ncpu: 6763.016273338378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5709.648896803792,
            "unit": "ns/iter",
            "extra": "iterations: 122417\ncpu: 5709.5321728191375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5695.736070620372,
            "unit": "ns/iter",
            "extra": "iterations: 122798\ncpu: 5695.790648056156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5659.277889414666,
            "unit": "ns/iter",
            "extra": "iterations: 123416\ncpu: 5659.279185842997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9515.559353567549,
            "unit": "ns/iter",
            "extra": "iterations: 73635\ncpu: 9515.548312623074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37498.33686508422,
            "unit": "ns/iter",
            "extra": "iterations: 21991\ncpu: 37497.05788731759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141629.6917094303,
            "unit": "ns/iter",
            "extra": "iterations: 6043\ncpu: 141624.55733907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111793.54362591365,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 111789.60292580977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114631.07448515309,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 114626.00962824278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114443.15136008798,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 114437.86695394551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 302983.5921651083,
            "unit": "ns/iter",
            "extra": "iterations: 2859\ncpu: 302972.29800629657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2428419.274359,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2428281.025641027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1954166.7463003746,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1954135.7293868926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1900984.383196914,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1900907.1721311545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1884286.4462475874,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1884218.255578094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1152736.623296089,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1152679.9256505556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1874221.018145165,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1874129.6370967806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7602986.480000027,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7602635.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4153950.031249869,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153783.035714279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9264165.923077093,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9263996.581196588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35676.127501307725,
            "unit": "ns/iter",
            "extra": "iterations: 22988\ncpu: 35674.238733252176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140663.54783749208,
            "unit": "ns/iter",
            "extra": "iterations: 6104\ncpu: 140656.34010484922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115165.30617183843,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 115161.19402985035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115480.82555779752,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 115476.13252197439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116339.93735530712,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 116334.67247718979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 308627.37201852567,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 308611.85475258064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2398068.2558140173,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2398004.9095607144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1962075.6687898648,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1962001.061571118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1907501.9897328692,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1907448.665297742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1921059.1301651949,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1921032.6446280961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1150848.0161291214,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1150824.6898263087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1878358.097363154,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1878302.0283975664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7582768.029999442,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7582732.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4212696.71621635,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4212541.891891906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35376.152459580495,
            "unit": "ns/iter",
            "extra": "iterations: 23134\ncpu: 35375.74565574472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 147468.94505306103,
            "unit": "ns/iter",
            "extra": "iterations: 5842\ncpu: 147470.523793222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115093.55409923666,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 115091.86839641584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113761.41116217668,
            "unit": "ns/iter",
            "extra": "iterations: 7615\ncpu: 113760.6697307943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113253.29120085051,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 113250.17756148906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 303274.9700556827,
            "unit": "ns/iter",
            "extra": "iterations: 2872\ncpu: 303254.3175487469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2389582.766666839,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2389410.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1970452.6957445736,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1970380.4255319128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1902418.956967116,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1902306.9672131212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1902020.9141105432,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1901952.7607362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1145503.4227940827,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 1145451.7156862759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1872513.5887097067,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1872455.8467741872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3347.513889887337,
            "unit": "ns/iter",
            "extra": "iterations: 208749\ncpu: 3347.484778370184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17398.963438564144,
            "unit": "ns/iter",
            "extra": "iterations: 40261\ncpu: 17398.981644767784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13408.39736238517,
            "unit": "ns/iter",
            "extra": "iterations: 52320\ncpu: 13407.845948012224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12958.197238367095,
            "unit": "ns/iter",
            "extra": "iterations: 54026\ncpu: 12958.216414319028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11113.424894675067,
            "unit": "ns/iter",
            "extra": "iterations: 63138\ncpu: 11112.879723779644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 70312.27825212806,
            "unit": "ns/iter",
            "extra": "iterations: 9955\ncpu: 70311.60220994508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 155771.44516129143,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 155770.32258064506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39890.10305104145,
            "unit": "ns/iter",
            "extra": "iterations: 17535\ncpu: 39889.478186484404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39579.688456978656,
            "unit": "ns/iter",
            "extra": "iterations: 17699\ncpu: 39577.67105486202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39509.32776334942,
            "unit": "ns/iter",
            "extra": "iterations: 17714\ncpu: 39509.286440103664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80607.771734143,
            "unit": "ns/iter",
            "extra": "iterations: 8696\ncpu: 80605.94526219007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71888.66385950832,
            "unit": "ns/iter",
            "extra": "iterations: 9737\ncpu: 71889.37044264197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20713.68389066881,
            "unit": "ns/iter",
            "extra": "iterations: 33732\ncpu: 20713.716945333417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99087.44609507975,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 99084.87549518884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80172.78881134331,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 80172.64615032541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79922.37861303681,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 79920.55295327268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81612.71063978574,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81613.54154527464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156310.43477289518,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 156310.47214142038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 661795.0850661433,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661786.7674858267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 564002.0153101822,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 563981.6277195804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 568935.4089796622,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 568917.8775510207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 561240.7657004636,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 561241.3848631241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 360712.07771490264,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 360704.0144107048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 545190.0497667255,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 545187.7138413702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20876.07817948935,
            "unit": "ns/iter",
            "extra": "iterations: 33551\ncpu: 20876.045423385363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98337.70798200267,
            "unit": "ns/iter",
            "extra": "iterations: 7116\ncpu: 98335.70826306872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79145.15912688906,
            "unit": "ns/iter",
            "extra": "iterations: 8842\ncpu: 79145.306491744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80977.66504742725,
            "unit": "ns/iter",
            "extra": "iterations: 8646\ncpu: 80975.72287763156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81956.90219561105,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 81956.82752142716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156871.55379110415,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156873.45112950125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 664370.1467803085,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 664351.7992424221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 557768.1950439514,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 557762.5899280575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 562262.3055332091,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 562240.9783480375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 560347.5164131062,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 560347.3979183347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 360073.1023784562,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 360070.5791106513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 545726.8788820424,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 545724.8447204938 ns\nthreads: 1"
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
        "date": 1702489570856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9100.039758611909,
            "unit": "ns/iter",
            "extra": "iterations: 76889\ncpu: 9099.889451026806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78838.40787153637,
            "unit": "ns/iter",
            "extra": "iterations: 10773\ncpu: 78837.82604659798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149540.96391132986,
            "unit": "ns/iter",
            "extra": "iterations: 5819\ncpu: 149541.2957552844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220037.00720719964,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 220035.83011583018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290995.21293162275,
            "unit": "ns/iter",
            "extra": "iterations: 2954\ncpu: 290996.2085308058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358625.1359466425,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 358622.22685571306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 429052.2773399532,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 429049.3103448272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 498396.30737705907,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 498380.7962529274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 567790.6453715765,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 567770.9256844851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6763.053077742304,
            "unit": "ns/iter",
            "extra": "iterations: 104281\ncpu: 6763.016273338378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5709.648896803792,
            "unit": "ns/iter",
            "extra": "iterations: 122417\ncpu: 5709.5321728191375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5695.736070620372,
            "unit": "ns/iter",
            "extra": "iterations: 122798\ncpu: 5695.790648056156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5659.277889414666,
            "unit": "ns/iter",
            "extra": "iterations: 123416\ncpu: 5659.279185842997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9515.559353567549,
            "unit": "ns/iter",
            "extra": "iterations: 73635\ncpu: 9515.548312623074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37498.33686508422,
            "unit": "ns/iter",
            "extra": "iterations: 21991\ncpu: 37497.05788731759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141629.6917094303,
            "unit": "ns/iter",
            "extra": "iterations: 6043\ncpu: 141624.55733907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111793.54362591365,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 111789.60292580977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114631.07448515309,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 114626.00962824278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114443.15136008798,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 114437.86695394551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 302983.5921651083,
            "unit": "ns/iter",
            "extra": "iterations: 2859\ncpu: 302972.29800629657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2428419.274359,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2428281.025641027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1954166.7463003746,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1954135.7293868926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1900984.383196914,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1900907.1721311545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1884286.4462475874,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1884218.255578094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1152736.623296089,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1152679.9256505556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1874221.018145165,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1874129.6370967806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7602986.480000027,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7602635.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4153950.031249869,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153783.035714279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9264165.923077093,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9263996.581196588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35676.127501307725,
            "unit": "ns/iter",
            "extra": "iterations: 22988\ncpu: 35674.238733252176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140663.54783749208,
            "unit": "ns/iter",
            "extra": "iterations: 6104\ncpu: 140656.34010484922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115165.30617183843,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 115161.19402985035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115480.82555779752,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 115476.13252197439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116339.93735530712,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 116334.67247718979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 308627.37201852567,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 308611.85475258064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2398068.2558140173,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2398004.9095607144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1962075.6687898648,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1962001.061571118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1907501.9897328692,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1907448.665297742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1921059.1301651949,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1921032.6446280961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1150848.0161291214,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1150824.6898263087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1878358.097363154,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1878302.0283975664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7582768.029999442,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7582732.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4212696.71621635,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4212541.891891906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35376.152459580495,
            "unit": "ns/iter",
            "extra": "iterations: 23134\ncpu: 35375.74565574472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 147468.94505306103,
            "unit": "ns/iter",
            "extra": "iterations: 5842\ncpu: 147470.523793222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115093.55409923666,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 115091.86839641584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113761.41116217668,
            "unit": "ns/iter",
            "extra": "iterations: 7615\ncpu: 113760.6697307943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113253.29120085051,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 113250.17756148906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 303274.9700556827,
            "unit": "ns/iter",
            "extra": "iterations: 2872\ncpu: 303254.3175487469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2389582.766666839,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2389410.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1970452.6957445736,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1970380.4255319128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1902418.956967116,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1902306.9672131212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1902020.9141105432,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1901952.7607362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1145503.4227940827,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 1145451.7156862759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1872513.5887097067,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1872455.8467741872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3347.513889887337,
            "unit": "ns/iter",
            "extra": "iterations: 208749\ncpu: 3347.484778370184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17398.963438564144,
            "unit": "ns/iter",
            "extra": "iterations: 40261\ncpu: 17398.981644767784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13408.39736238517,
            "unit": "ns/iter",
            "extra": "iterations: 52320\ncpu: 13407.845948012224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12958.197238367095,
            "unit": "ns/iter",
            "extra": "iterations: 54026\ncpu: 12958.216414319028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11113.424894675067,
            "unit": "ns/iter",
            "extra": "iterations: 63138\ncpu: 11112.879723779644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 70312.27825212806,
            "unit": "ns/iter",
            "extra": "iterations: 9955\ncpu: 70311.60220994508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 155771.44516129143,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 155770.32258064506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39890.10305104145,
            "unit": "ns/iter",
            "extra": "iterations: 17535\ncpu: 39889.478186484404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39579.688456978656,
            "unit": "ns/iter",
            "extra": "iterations: 17699\ncpu: 39577.67105486202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39509.32776334942,
            "unit": "ns/iter",
            "extra": "iterations: 17714\ncpu: 39509.286440103664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80607.771734143,
            "unit": "ns/iter",
            "extra": "iterations: 8696\ncpu: 80605.94526219007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71888.66385950832,
            "unit": "ns/iter",
            "extra": "iterations: 9737\ncpu: 71889.37044264197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20713.68389066881,
            "unit": "ns/iter",
            "extra": "iterations: 33732\ncpu: 20713.716945333417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99087.44609507975,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 99084.87549518884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80172.78881134331,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 80172.64615032541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79922.37861303681,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 79920.55295327268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81612.71063978574,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81613.54154527464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156310.43477289518,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 156310.47214142038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 661795.0850661433,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661786.7674858267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 564002.0153101822,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 563981.6277195804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 568935.4089796622,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 568917.8775510207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 561240.7657004636,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 561241.3848631241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 360712.07771490264,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 360704.0144107048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 545190.0497667255,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 545187.7138413702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20876.07817948935,
            "unit": "ns/iter",
            "extra": "iterations: 33551\ncpu: 20876.045423385363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98337.70798200267,
            "unit": "ns/iter",
            "extra": "iterations: 7116\ncpu: 98335.70826306872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79145.15912688906,
            "unit": "ns/iter",
            "extra": "iterations: 8842\ncpu: 79145.306491744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80977.66504742725,
            "unit": "ns/iter",
            "extra": "iterations: 8646\ncpu: 80975.72287763156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81956.90219561105,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 81956.82752142716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156871.55379110415,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156873.45112950125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 664370.1467803085,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 664351.7992424221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 557768.1950439514,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 557762.5899280575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 562262.3055332091,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 562240.9783480375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 560347.5164131062,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 560347.3979183347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 360073.1023784562,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 360070.5791106513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 545726.8788820424,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 545724.8447204938 ns\nthreads: 1"
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
        "date": 1702503243141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9101.511285193337,
            "unit": "ns/iter",
            "extra": "iterations: 77358\ncpu: 9101.21771503917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 80461.82544042778,
            "unit": "ns/iter",
            "extra": "iterations: 10558\ncpu: 80458.39174086002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 152935.52379280873,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 152932.74802458298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 224389.11775363918,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 224382.86749482405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 297155.6909340439,
            "unit": "ns/iter",
            "extra": "iterations: 2912\ncpu: 297140.24725274736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 365892.88535029796,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 365865.5626326962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 439768.0040160667,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 439750.502008032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 507393.644613572,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 507371.9555035127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 578464.5527537952,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 578419.7743861972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6669.828834560495,
            "unit": "ns/iter",
            "extra": "iterations: 105325\ncpu: 6669.478281509623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5634.89144697179,
            "unit": "ns/iter",
            "extra": "iterations: 124529\ncpu: 5634.734881031724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5549.8899850663975,
            "unit": "ns/iter",
            "extra": "iterations: 125892\ncpu: 5549.455088488545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5562.259705605402,
            "unit": "ns/iter",
            "extra": "iterations: 126293\ncpu: 5561.927422739175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9458.18174558037,
            "unit": "ns/iter",
            "extra": "iterations: 73878\ncpu: 9457.532689027857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36291.361177861225,
            "unit": "ns/iter",
            "extra": "iterations: 22889\ncpu: 36289.38354668185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139537.53922688394,
            "unit": "ns/iter",
            "extra": "iterations: 6131\ncpu: 139525.41184146114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109826.92581143574,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 109826.01751674399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117499.83481210882,
            "unit": "ns/iter",
            "extra": "iterations: 7664\ncpu: 117497.4425887268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111934.71797899679,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 111933.42519685042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 304656.296064103,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 304647.405085337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2359578.164974528,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2359523.0964466967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1926074.0702477486,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1926005.1652892567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1865929.6953907316,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1865914.6292585162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1880830.396761085,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1880782.388663967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1132045.803398092,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1132029.247572816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1853057.0577688224,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1853041.832669327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7515064.890000076,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7514842.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4162163.1964286873,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4162102.2321428615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9292007.145299627,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9291745.29914531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34398.59771850238,
            "unit": "ns/iter",
            "extra": "iterations: 23844\ncpu: 34397.98272102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140686.18845837883,
            "unit": "ns/iter",
            "extra": "iterations: 6065\ncpu: 140682.55564715576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111802.50046034779,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 111800.1972905432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112758.85648085899,
            "unit": "ns/iter",
            "extra": "iterations: 7553\ncpu: 112755.32900834116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114510.75736779624,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 114508.61256896841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 309980.2889046188,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 309971.6058135422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2368674.1094146986,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2368625.699745541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1929308.247401296,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1929263.825363825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1863962.9338675255,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1863924.0480961823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1907913.1193414603,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1907868.3127572068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1122977.812048089,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1122960.9638554219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1855359.053784838,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1855304.9800796786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7548647.380000375,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7548566.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4306630.175926153,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4306442.129629627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34378.03612935917,
            "unit": "ns/iter",
            "extra": "iterations: 23748\ncpu: 34377.38756947974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138929.13988288143,
            "unit": "ns/iter",
            "extra": "iterations: 6148\ncpu: 138928.3344176968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113317.65305040508,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 113316.77718832866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112382.54950689779,
            "unit": "ns/iter",
            "extra": "iterations: 7605\ncpu: 112379.04010519465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112873.07235278458,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 112871.57380512325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 303472.3893713134,
            "unit": "ns/iter",
            "extra": "iterations: 2879\ncpu: 303470.44112539024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2364627.8091604025,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2364562.086513997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1932881.5227272704,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1932853.719008259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1860032.195608738,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1859986.6267465074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1900933.0348360138,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1900904.5081967188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1127709.2339393373,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1127695.03030303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1861855.6272545569,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1861822.2444889832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3332.154190305359,
            "unit": "ns/iter",
            "extra": "iterations: 210104\ncpu: 3332.0860145451625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17290.1482954535,
            "unit": "ns/iter",
            "extra": "iterations: 40480\ncpu: 17289.99011857707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13284.637833314702,
            "unit": "ns/iter",
            "extra": "iterations: 52578\ncpu: 13284.34896724866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13305.513241748133,
            "unit": "ns/iter",
            "extra": "iterations: 52410\ncpu: 13305.184125167007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11123.898794225666,
            "unit": "ns/iter",
            "extra": "iterations: 63030\ncpu: 11123.80295097576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 71950.35027783488,
            "unit": "ns/iter",
            "extra": "iterations: 9718\ncpu: 71948.25066886214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 157485.2210266719,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 157480.99080923627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40262.37053212446,
            "unit": "ns/iter",
            "extra": "iterations: 17402\ncpu: 40261.274566141874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38957.74211110848,
            "unit": "ns/iter",
            "extra": "iterations: 18000\ncpu: 38957.40000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39654.23727087621,
            "unit": "ns/iter",
            "extra": "iterations: 17676\ncpu: 39653.880968544436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80151.79922250008,
            "unit": "ns/iter",
            "extra": "iterations: 8746\ncpu: 80151.15481362939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71681.95291113968,
            "unit": "ns/iter",
            "extra": "iterations: 9790\ncpu: 71680.4800817151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20862.770414235183,
            "unit": "ns/iter",
            "extra": "iterations: 33604\ncpu: 20862.555052969772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101379.61823982623,
            "unit": "ns/iter",
            "extra": "iterations: 6897\ncpu: 101377.9034362769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82383.40365351092,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 82382.74602239302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80285.95648191254,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80285.2496564366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82774.52569402992,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82772.74660366168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157718.78207144554,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 157715.95147158005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 672095.4101825383,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 672062.9202689743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 564825.8221503727,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 564784.0743734911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 552220.7825058431,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 552215.2088258425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 558846.8810853924,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558799.7605746154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 370486.3095607498,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 370479.37984496314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 545860.7658079178,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 545844.4184231157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21039.098951922493,
            "unit": "ns/iter",
            "extra": "iterations: 33299\ncpu: 21038.896062944998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102502.26337449189,
            "unit": "ns/iter",
            "extra": "iterations: 6804\ncpu: 102500.14697236747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82720.32201986595,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 82718.86234626206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80542.41147389912,
            "unit": "ns/iter",
            "extra": "iterations: 8698\ncpu: 80541.71073810066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82508.0723374166,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 82506.37370405276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155353.5453342153,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 155344.12089124162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 673520.1121764067,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 673478.3317353851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 561211.6367999988,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 561188.8000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 552826.6561265194,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 552821.660079046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 557538.0199361368,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 557489.5534290264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 362323.41352606745,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 362297.10893134313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 542411.2773043795,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 542369.94577847 ns\nthreads: 1"
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
        "date": 1705574908839,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9065.911590616264,
            "unit": "ns/iter",
            "extra": "iterations: 77209\ncpu: 9064.988537605721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 84538.30354845074,
            "unit": "ns/iter",
            "extra": "iterations: 10878\ncpu: 84535.18109946682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149190.3932796069,
            "unit": "ns/iter",
            "extra": "iterations: 5833\ncpu: 149177.19869706838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219854.48912490896,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 219846.71219018716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290465.7177500993,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 290445.1330414281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 360622.2336253749,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 360612.1818940342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 427559.01769043517,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 427551.79361179384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 495754.4516866885,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 495720.4116638075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 566783.5436197569,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 566756.2500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6521.094601282818,
            "unit": "ns/iter",
            "extra": "iterations: 107081\ncpu: 6520.531186671762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5527.516277714343,
            "unit": "ns/iter",
            "extra": "iterations: 126922\ncpu: 5527.263201021093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5527.037433619456,
            "unit": "ns/iter",
            "extra": "iterations: 126731\ncpu: 5527.001286188856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5500.765425209704,
            "unit": "ns/iter",
            "extra": "iterations: 127243\ncpu: 5500.398450209449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9371.97823635138,
            "unit": "ns/iter",
            "extra": "iterations: 74482\ncpu: 9371.399801294277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37392.67833280624,
            "unit": "ns/iter",
            "extra": "iterations: 22001\ncpu: 37389.664106177035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140158.3809134035,
            "unit": "ns/iter",
            "extra": "iterations: 6109\ncpu: 140154.8371255526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113329.08224076057,
            "unit": "ns/iter",
            "extra": "iterations: 7551\ncpu: 113321.20248973623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117541.97675054855,
            "unit": "ns/iter",
            "extra": "iterations: 7312\ncpu: 117537.03501094069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117080.53093702251,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 117077.98051858965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 318956.7954545734,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 318956.89149560063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2260643.7591242525,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2260577.128953774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1879025.8161617303,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1879015.9595959617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1849442.0498008225,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1849417.5298804778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1859293.3585657566,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1859177.4900398413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1138295.9501216866,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1138270.0729927009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1818785.9980508878,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1818682.4561403552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7537636.209999618,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7537444.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4187128.013452845,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4187052.0179372346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9171210.398305593,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9170616.101694908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36183.26685430083,
            "unit": "ns/iter",
            "extra": "iterations: 22739\ncpu: 36182.3299177624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145434.5321100981,
            "unit": "ns/iter",
            "extra": "iterations: 5886\ncpu: 145427.89670404347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118362.1770315128,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 118353.88336097331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117945.20919001206,
            "unit": "ns/iter",
            "extra": "iterations: 7247\ncpu: 117941.32744584003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116559.97285500343,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 116548.16532533056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 320424.0107208884,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 320416.0073937149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2271988.2818625933,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2271820.5882352954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1893277.0265304758,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1893217.346938769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1845370.4000000588,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1845221.782178207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1867042.2999998664,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1866996.599999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1118835.6249999853,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1118753.245192309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1810245.94961244,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1810180.426356589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7513168.810000935,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7512710.000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4232497.212669594,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4232419.004524886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35298.847625614224,
            "unit": "ns/iter",
            "extra": "iterations: 23206\ncpu: 35297.30673101788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 142366.3130521852,
            "unit": "ns/iter",
            "extra": "iterations: 5999\ncpu: 142359.7766294379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118311.01882873276,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 118306.92233144128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 117826.69913448987,
            "unit": "ns/iter",
            "extra": "iterations: 7279\ncpu: 117824.04176397805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116747.65843677332,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 116745.77820215562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 319430.9197939411,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 319423.6938925673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2246689.636803962,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2246628.571428579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1876740.2439514794,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1876709.0725806474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1847514.3630952055,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1847396.8253968307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1859502.7524950188,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1859470.059880231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1123068.7673568476,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1123028.2582216877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1805583.844054559,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1805554.3859649047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3323.604638105994,
            "unit": "ns/iter",
            "extra": "iterations: 210172\ncpu: 3323.6020973298264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17081.92723635002,
            "unit": "ns/iter",
            "extra": "iterations: 40982\ncpu: 17081.74076423789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13750.203937038119,
            "unit": "ns/iter",
            "extra": "iterations: 50952\ncpu: 13750.168786308668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13632.936231489613,
            "unit": "ns/iter",
            "extra": "iterations: 51389\ncpu: 13632.656794255656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11162.452015918469,
            "unit": "ns/iter",
            "extra": "iterations: 63073\ncpu: 11162.072519144469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 74084.64718317678,
            "unit": "ns/iter",
            "extra": "iterations: 9461\ncpu: 74082.9404925487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148892.08712282425,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 148887.82405439852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38864.06725860347,
            "unit": "ns/iter",
            "extra": "iterations: 18020\ncpu: 38863.95671476125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38518.55210972644,
            "unit": "ns/iter",
            "extra": "iterations: 18154\ncpu: 38515.55580037434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38875.58644613438,
            "unit": "ns/iter",
            "extra": "iterations: 18017\ncpu: 38873.813620469555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79428.60369866421,
            "unit": "ns/iter",
            "extra": "iterations: 8814\ncpu: 79426.95711368295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69510.4034582156,
            "unit": "ns/iter",
            "extra": "iterations: 10063\ncpu: 69508.45672264746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20036.606261886714,
            "unit": "ns/iter",
            "extra": "iterations: 35229\ncpu: 20036.2513838032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94203.5643192397,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 94203.29979879224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77696.10337972404,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77693.17428760785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76755.10233018374,
            "unit": "ns/iter",
            "extra": "iterations: 9098\ncpu: 76753.61617937985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78330.40201118347,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 78329.75418994289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152717.466229526,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 152716.69945355286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 646156.5253456462,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 646155.9447004565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 543368.5108865147,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 543348.9113530334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 540481.7763157705,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 540468.1114551164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 545472.3239875094,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 545448.0529595001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 355622.82672765054,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 355608.2317073182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 533055.3168692966,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 533034.650455927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20267.28964279742,
            "unit": "ns/iter",
            "extra": "iterations: 34546\ncpu: 20265.28107450919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94007.21835994473,
            "unit": "ns/iter",
            "extra": "iterations: 7451\ncpu: 94004.68393504304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77589.32639733492,
            "unit": "ns/iter",
            "extra": "iterations: 9035\ncpu: 77583.88489208663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81117.53885491329,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 81116.39799888809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78252.49025069214,
            "unit": "ns/iter",
            "extra": "iterations: 8975\ncpu: 78249.4818941506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150957.03861920405,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 150944.4444444456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 648553.6419294635,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 648533.7662337669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 544087.4138198934,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 544019.3322981342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 538158.8924980782,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 538145.2436194931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 540241.7096524825,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 540221.6216216169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 355916.7493644892,
            "unit": "ns/iter",
            "extra": "iterations: 1967\ncpu: 355893.49262837274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 529739.5339366075,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 529722.9260935162 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}