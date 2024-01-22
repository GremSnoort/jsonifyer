window.BENCHMARK_DATA = {
  "lastUpdate": 1705956159906,
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
        "date": 1705772688551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8703.91025274105,
            "unit": "ns/iter",
            "extra": "iterations: 80359\ncpu: 8703.581428340325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78117.7811481384,
            "unit": "ns/iter",
            "extra": "iterations: 11044\ncpu: 78111.45418326695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148030.09272758552,
            "unit": "ns/iter",
            "extra": "iterations: 5899\ncpu: 148022.1732497033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 234516.53660982268,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 234508.12437311927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 287079.30853538105,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 287064.8953835936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 354138.75082372257,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 354124.5469522242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 422370.00729215035,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 422347.0102090421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 492136.8836158573,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 492114.57627118623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559595.4688903351,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 559562.1552277091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6397.3325750934155,
            "unit": "ns/iter",
            "extra": "iterations: 109464\ncpu: 6397.020938390712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5434.001991768421,
            "unit": "ns/iter",
            "extra": "iterations: 128529\ncpu: 5433.551961036027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5445.436740634579,
            "unit": "ns/iter",
            "extra": "iterations: 128479\ncpu: 5445.027592057845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5427.460143071798,
            "unit": "ns/iter",
            "extra": "iterations: 128886\ncpu: 5427.148022283259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9409.322514286887,
            "unit": "ns/iter",
            "extra": "iterations: 74375\ncpu: 9409.001680672285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 39439.02622044576,
            "unit": "ns/iter",
            "extra": "iterations: 20976\ncpu: 39436.86117467584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141361.7659398767,
            "unit": "ns/iter",
            "extra": "iterations: 6054\ncpu: 141350.29732408313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112181.12044082428,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 112172.43505641552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113988.45424270749,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 113982.2965232449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112117.78745735616,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 112114.34006822367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 292275.8576237095,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 292258.83540895284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2260174.459854265,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2260021.6545012193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1862978.9657947281,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1862862.1730382328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1825093.5933202242,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1825018.4675834957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1844498.474103586,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1844408.1673306793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1107096.4059880173,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1107028.6227544923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1799293.2485437177,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1799200.5825242766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7459990.569999491,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7459558.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4243130.707207226,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4243040.5405405415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9185379.237287711,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9185031.355932198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34551.34398157606,
            "unit": "ns/iter",
            "extra": "iterations: 23885\ncpu: 34550.01465354822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143254.38464105708,
            "unit": "ns/iter",
            "extra": "iterations: 5990\ncpu: 143250.48414023357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113724.3605987642,
            "unit": "ns/iter",
            "extra": "iterations: 7482\ncpu: 113721.02379043015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113208.2178689574,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 113205.91661151533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116226.80967961514,
            "unit": "ns/iter",
            "extra": "iterations: 7335\ncpu: 116223.77641445046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 294657.1115646237,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 294650.7482993204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2277404.9242053973,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2277336.1858190824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1885874.2520325268,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1885847.7642276525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1838763.8011812505,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1838628.34645669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1857391.7887324863,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1857277.0623742447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1111505.015568811,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1111466.5868263498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1812221.4054580596,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1812094.5419103245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7502725.519999558,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7502378.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4225041.045454893,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4224759.545454533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34043.93791362955,
            "unit": "ns/iter",
            "extra": "iterations: 24176\ncpu: 34041.79351422894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139187.96978557628,
            "unit": "ns/iter",
            "extra": "iterations: 6156\ncpu: 139181.53021442547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112292.43238270134,
            "unit": "ns/iter",
            "extra": "iterations: 7609\ncpu: 112286.64739124705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112427.28547097127,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 112422.20620987797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112040.08133720489,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 112034.32482232197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 295130.7194955463,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 295116.01908657077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2253590.9225180326,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2253456.9007263845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1869811.2937626624,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1869723.9436619729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1822087.9430254044,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1822002.161100201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1849911.1660000836,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1849818.4000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1134014.108776336,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1133934.363411616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1808717.0794573883,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1808680.813953493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3317.562850279843,
            "unit": "ns/iter",
            "extra": "iterations: 211081\ncpu: 3317.3677403461265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17374.27375784543,
            "unit": "ns/iter",
            "extra": "iterations: 40313\ncpu: 17373.857068439567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12998.595289438921,
            "unit": "ns/iter",
            "extra": "iterations: 53794\ncpu: 12998.235862735652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13901.812960265457,
            "unit": "ns/iter",
            "extra": "iterations: 50107\ncpu: 13901.231364879106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11004.137103992694,
            "unit": "ns/iter",
            "extra": "iterations: 63667\ncpu: 11003.488463411179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68896.25192498248,
            "unit": "ns/iter",
            "extra": "iterations: 10130\ncpu: 68892.01382033584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148954.45423656574,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 148945.74219579544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38903.23771773018,
            "unit": "ns/iter",
            "extra": "iterations: 17912\ncpu: 38900.48570790555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38503.32417310814,
            "unit": "ns/iter",
            "extra": "iterations: 18231\ncpu: 38501.67297460399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38778.09784659693,
            "unit": "ns/iter",
            "extra": "iterations: 18018\ncpu: 38776.27372627352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79430.48081494591,
            "unit": "ns/iter",
            "extra": "iterations: 8835\ncpu: 79425.76117713646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69675.17371827624,
            "unit": "ns/iter",
            "extra": "iterations: 10045\ncpu: 69669.11896465883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20091.80234856087,
            "unit": "ns/iter",
            "extra": "iterations: 34915\ncpu: 20091.55950164648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95588.88059089781,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 95586.34933661518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76957.48851913642,
            "unit": "ns/iter",
            "extra": "iterations: 9015\ncpu: 76955.8402662226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77243.0861249268,
            "unit": "ns/iter",
            "extra": "iterations: 9045\ncpu: 77240.53067993416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77799.15657295413,
            "unit": "ns/iter",
            "extra": "iterations: 8999\ncpu: 77796.77741971305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154018.10219298353,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 154013.24561403476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 638364.1030081947,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 638356.3354603517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 545420.5937499346,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 545402.5781249983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 538860.561875476,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 538843.1206763998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 543170.3429237647,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 543153.4992223941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 355946.5005076181,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 355931.31979695376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 529975.6296296463,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 529963.1897203351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20040.015326441728,
            "unit": "ns/iter",
            "extra": "iterations: 34907\ncpu: 20039.350273584183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94462.71517277771,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 94460.1781857445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77026.4830461933,
            "unit": "ns/iter",
            "extra": "iterations: 9113\ncpu: 77024.97530999695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77930.4242660941,
            "unit": "ns/iter",
            "extra": "iterations: 8959\ncpu: 77928.1393012607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78263.17946716397,
            "unit": "ns/iter",
            "extra": "iterations: 8971\ncpu: 78261.52045479805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154202.49615636477,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 154197.25455743715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 636931.5809090701,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 636919.0909090864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 537968.5787855873,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 537956.7255956893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 538099.9408148235,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 538081.7063797093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 568039.3624318222,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 568027.0459859645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 353887.97827185545,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 353875.1389590698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 525413.4004491753,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 525399.8502993986 ns\nthreads: 1"
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
        "date": 1705774121952,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8578.713461514148,
            "unit": "ns/iter",
            "extra": "iterations: 81291\ncpu: 8578.342005880111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76195.4116590332,
            "unit": "ns/iter",
            "extra": "iterations: 11133\ncpu: 76192.27521782089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145097.33660239083,
            "unit": "ns/iter",
            "extra": "iterations: 6016\ncpu: 145092.96874999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 213432.57202352062,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 213429.98530132286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 281584.11621093116,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 281576.3346354167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 345879.7469879317,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 345875.9437751005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 429905.99238096585,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 429894.28571428556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 479857.92983419576,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 479826.9060773476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 547814.9647355407,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 547792.8841309829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6339.335977424801,
            "unit": "ns/iter",
            "extra": "iterations: 110561\ncpu: 6338.956774992989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5404.614404653923,
            "unit": "ns/iter",
            "extra": "iterations: 129597\ncpu: 5404.401336450688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5485.84922789583,
            "unit": "ns/iter",
            "extra": "iterations: 127444\ncpu: 5485.777282571171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5355.703838829114,
            "unit": "ns/iter",
            "extra": "iterations: 130743\ncpu: 5355.375048759771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9175.922064326167,
            "unit": "ns/iter",
            "extra": "iterations: 76422\ncpu: 9175.490042134468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37991.595508707534,
            "unit": "ns/iter",
            "extra": "iterations: 21820\ncpu: 37990.10999083412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141393.9753045696,
            "unit": "ns/iter",
            "extra": "iterations: 6074\ncpu: 141387.3724069806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111534.85875557814,
            "unit": "ns/iter",
            "extra": "iterations: 7618\ncpu: 111532.38382777646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110182.97048882065,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 110180.92823712926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112699.3648577417,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 112696.4567966284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 291249.60333106597,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 291238.91910265107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2212096.805225555,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2211977.67220902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1838843.6155377969,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1838750.199203191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1829439.4990139613,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1829357.1992110473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1786085.339113593,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1785991.9075144506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1122709.5767386875,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1122637.050359711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1771187.7881680278,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1771153.8167938965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7374377.079999021,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7374343.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4174078.789237846,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4173810.3139013425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9161383.630252196,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9160712.605042001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34671.226668902484,
            "unit": "ns/iter",
            "extra": "iterations: 23863\ncpu: 34669.52185391612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140777.1169494354,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 140769.8072805138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111816.68963717434,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 111805.7034716784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113607.67825738952,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 113601.95843325314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112585.55379374558,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 112580.29091862145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 291024.48601279286,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 291014.69497809134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2207470.3404760906,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2207317.8571428712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1833923.000000049,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1833858.1027667997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1805866.4677104524,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1805794.7162426524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1804739.2645916021,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1804649.2217898944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1105983.991636794,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1105921.9832736016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1767450.4980986917,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1767345.2471482877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7414074.76000063,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7413622.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4058981.85589516,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4058711.3537117904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33902.594302234196,
            "unit": "ns/iter",
            "extra": "iterations: 24220\ncpu: 33902.138728323494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138103.57228138467,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 138102.03291384265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109627.84459025983,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 109623.74887430841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110349.6008788966,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 110342.0705699891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111208.32965155326,
            "unit": "ns/iter",
            "extra": "iterations: 7605\ncpu: 111199.75016436509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 300168.6895613766,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 300165.1479088743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2190375.2251185398,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2190329.620853076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1838343.960784249,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1838273.7254901994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1818108.4199218045,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1818071.6796875051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1805684.6406249162,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1805646.8749999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1096154.0870588953,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1096141.8823529393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1772663.6102662259,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1772584.9809885903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3323.390828245234,
            "unit": "ns/iter",
            "extra": "iterations: 210952\ncpu: 3323.3484394554303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16858.818361492304,
            "unit": "ns/iter",
            "extra": "iterations: 41489\ncpu: 16858.6083058161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13166.955519868921,
            "unit": "ns/iter",
            "extra": "iterations: 53552\ncpu: 13166.804227666638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13237.76218129278,
            "unit": "ns/iter",
            "extra": "iterations: 51144\ncpu: 13237.484357891497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10938.975950808705,
            "unit": "ns/iter",
            "extra": "iterations: 64077\ncpu: 10938.561418293659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68916.44068133805,
            "unit": "ns/iter",
            "extra": "iterations: 10039\ncpu: 68913.46747684087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146206.49208664603,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 146202.24906289147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38284.892660302154,
            "unit": "ns/iter",
            "extra": "iterations: 18325\ncpu: 38284.01637107784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38004.41519608006,
            "unit": "ns/iter",
            "extra": "iterations: 18360\ncpu: 38002.98474945491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38116.25979538346,
            "unit": "ns/iter",
            "extra": "iterations: 18376\ncpu: 38115.808663474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77994.35555060589,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 77993.3348194378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68260.67006901793,
            "unit": "ns/iter",
            "extra": "iterations: 10287\ncpu: 68259.76475162776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20710.686109385457,
            "unit": "ns/iter",
            "extra": "iterations: 33843\ncpu: 20709.464290990734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97574.55420847233,
            "unit": "ns/iter",
            "extra": "iterations: 7176\ncpu: 97573.38350055869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78299.65309319296,
            "unit": "ns/iter",
            "extra": "iterations: 8939\ncpu: 78298.81418503067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79906.4934618035,
            "unit": "ns/iter",
            "extra": "iterations: 8718\ncpu: 79905.21908694658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79516.22482462447,
            "unit": "ns/iter",
            "extra": "iterations: 8838\ncpu: 79514.33582258468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154944.07860938294,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 154937.57750221257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 631487.2556870509,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 631470.7916287534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 529578.7450831829,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 529571.2556732207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 542291.9362518621,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 542284.6390168983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 532138.5802752246,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 532130.8103975496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 352523.2444444256,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 352511.81818181573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 521178.15715346165,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 521170.27427724225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20845.73299162513,
            "unit": "ns/iter",
            "extra": "iterations: 33557\ncpu: 20845.495723693864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96206.68985865309,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 96206.29888843051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77771.28596822431,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 77767.62581935343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81638.11924784284,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 81634.980144825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81074.02332832255,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 81071.37082803922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157717.65406257124,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157712.22147197678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 631062.0818926009,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 631056.5969062742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 529293.6671754911,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 529281.0687022945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 541529.6140758318,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 541507.4245939758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 527239.2283346616,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 527228.9374528931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 354966.4659898516,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 354958.3248731013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 522106.1297257833,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 522073.53595256264 ns\nthreads: 1"
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
        "date": 1705777703767,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8580.774749047006,
            "unit": "ns/iter",
            "extra": "iterations: 81589\ncpu: 8580.12354606626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75638.20338224444,
            "unit": "ns/iter",
            "extra": "iterations: 11176\ncpu: 75632.15819613458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144719.64572656964,
            "unit": "ns/iter",
            "extra": "iterations: 6049\ncpu: 144709.42304513147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 213617.46755160973,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 213600.5162241888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 283761.36798952986,
            "unit": "ns/iter",
            "extra": "iterations: 3049\ncpu: 283744.40800262376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 347986.2020202001,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 347950.10101010103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 415818.53221957054,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 415782.6252983291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 483414.24833706603,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 483379.54545454524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 550905.2985658088,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 550893.4810951757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6340.973552926618,
            "unit": "ns/iter",
            "extra": "iterations: 110447\ncpu: 6340.811429916619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5495.832958502533,
            "unit": "ns/iter",
            "extra": "iterations: 128058\ncpu: 5495.726155335856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5447.165463700663,
            "unit": "ns/iter",
            "extra": "iterations: 128294\ncpu: 5447.0419505199025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5415.776859504283,
            "unit": "ns/iter",
            "extra": "iterations: 129228\ncpu: 5415.588726901298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9193.464648316747,
            "unit": "ns/iter",
            "extra": "iterations: 76333\ncpu: 9190.22179136153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37078.779428263995,
            "unit": "ns/iter",
            "extra": "iterations: 22283\ncpu: 37077.42225014585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 136235.08256442627,
            "unit": "ns/iter",
            "extra": "iterations: 6286\ncpu: 136227.06013363024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107996.83757116618,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 107983.9848197344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108778.07939339706,
            "unit": "ns/iter",
            "extra": "iterations: 7847\ncpu: 108775.83789983462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110150.28974391715,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 110148.00467957876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 285843.23459636135,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 285836.2438220766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2197289.497630297,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2197201.1848341227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1836881.2761340472,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1836829.1913215008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1833801.6889763046,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1833763.582677163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1803208.972815695,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1803157.4757281533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1100828.8766310667,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1100798.932384342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1776456.9771428623,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1776416.3809523769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7383985.129999928,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7383829.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4174113.637167973,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4173911.5044247843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9128456.252101233,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9128038.655462181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34074.10751146761,
            "unit": "ns/iter",
            "extra": "iterations: 24416\ncpu: 34073.369921363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137679.1589931504,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 137673.76135096405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110349.55509730705,
            "unit": "ns/iter",
            "extra": "iterations: 7759\ncpu: 110347.1710271941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112871.12523166815,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 112867.7521842735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111755.54716735633,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 111753.85319900601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 285692.9414666231,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 285684.84051298857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2232071.68973766,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2232010.7398568154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1873453.1709740362,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1872086.0834990158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1836257.5494070605,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1836172.3320158105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1825759.384615429,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1825635.5029585771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1104482.8109392987,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1104399.7621878688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1786263.5220729015,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786106.7178502826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7373360.029999958,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7372821.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4114844.6283186665,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4114525.6637168205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33303.81460947041,
            "unit": "ns/iter",
            "extra": "iterations: 24710\ncpu: 33301.76042088235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 134400.85923015236,
            "unit": "ns/iter",
            "extra": "iterations: 6365\ncpu: 134393.32285938686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107910.92226149102,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 107905.45179202418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110677.62955309251,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 110668.17359855377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110571.47200936069,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 110564.12521106582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 284949.97532892274,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 284934.04605263175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2217322.7344499617,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2217158.133971277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1853775.7529881685,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1853652.9880478214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1848442.4574256595,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1848306.5346534555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1832320.3306930969,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1832247.7227722844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1109787.953349283,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 1109731.1004784699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1785705.4568138702,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1785668.9059500888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3276.3721608191845,
            "unit": "ns/iter",
            "extra": "iterations: 213706\ncpu: 3276.0741392380296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16520.175246311042,
            "unit": "ns/iter",
            "extra": "iterations: 42426\ncpu: 16519.893461556458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12311.30042072367,
            "unit": "ns/iter",
            "extra": "iterations: 56807\ncpu: 12310.979280722451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13477.616841329123,
            "unit": "ns/iter",
            "extra": "iterations: 51433\ncpu: 13476.51313359125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10712.12138604517,
            "unit": "ns/iter",
            "extra": "iterations: 65337\ncpu: 10711.420787608875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67783.63211579676,
            "unit": "ns/iter",
            "extra": "iterations: 10294\ncpu: 67778.11346415433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146096.04622463253,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 146087.5967370852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38145.24174026649,
            "unit": "ns/iter",
            "extra": "iterations: 18342\ncpu: 38142.225493403224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37920.35380528684,
            "unit": "ns/iter",
            "extra": "iterations: 18448\ncpu: 37917.503252385286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38119.23286405376,
            "unit": "ns/iter",
            "extra": "iterations: 18397\ncpu: 38116.687503397596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77303.91267823726,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 77299.34785011753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64735.23347241754,
            "unit": "ns/iter",
            "extra": "iterations: 10785\ncpu: 64732.74918868849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19845.202024786555,
            "unit": "ns/iter",
            "extra": "iterations: 35263\ncpu: 19844.87990244753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95704.14260345954,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95696.02513317828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78215.35995989337,
            "unit": "ns/iter",
            "extra": "iterations: 8976\ncpu: 78210.12700534755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78534.72934795156,
            "unit": "ns/iter",
            "extra": "iterations: 8849\ncpu: 78529.0654311219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79351.2516354706,
            "unit": "ns/iter",
            "extra": "iterations: 8866\ncpu: 79345.01466275755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150881.26659483399,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 150880.71120689603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 620112.3523132151,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 620060.231316722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 530208.2816048778,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 530169.3414080195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 544600.3502735882,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 544562.5488662998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 534626.9138867474,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 534609.4647013108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 350031.0444444425,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 350009.3434343403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 523856.14296346466,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 523835.44303797913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20201.825384817315,
            "unit": "ns/iter",
            "extra": "iterations: 34367\ncpu: 20201.574184537767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94823.01069446783,
            "unit": "ns/iter",
            "extra": "iterations: 7387\ncpu: 94817.43603627922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77344.24256495395,
            "unit": "ns/iter",
            "extra": "iterations: 9045\ncpu: 77336.27418463155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80029.06295703595,
            "unit": "ns/iter",
            "extra": "iterations: 8752\ncpu: 80022.70338208356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83903.16129396379,
            "unit": "ns/iter",
            "extra": "iterations: 8841\ncpu: 83900.61079063585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147833.07946177674,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 147830.7692307681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 624055.3223508975,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 624017.8094390032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 527680.5954887416,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 527629.849624059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 542979.5449611997,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 542946.8992248047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 535004.6126331111,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 534982.1917808191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 353504.7831813428,
            "unit": "ns/iter",
            "extra": "iterations: 1974\ncpu: 353498.58156028483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 525082.7501892213,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 525051.7032551124 ns\nthreads: 1"
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
        "date": 1705952878983,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8744.025021840002,
            "unit": "ns/iter",
            "extra": "iterations: 80130\ncpu: 8743.859977536504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75828.2515818502,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 75825.06906692809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145352.82232913136,
            "unit": "ns/iter",
            "extra": "iterations: 6028\ncpu: 145352.00729927007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 213560.2199753338,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 213556.15289765722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 283325.3782991231,
            "unit": "ns/iter",
            "extra": "iterations: 3069\ncpu: 283318.5728250245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 347557.014985861,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 347541.8793033617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 415708.2801146905,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 415688.19311663497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 483109.3895381121,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 483083.97328881425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 550631.8547062807,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 550606.2539481999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6563.205850943868,
            "unit": "ns/iter",
            "extra": "iterations: 106752\ncpu: 6562.951513788981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5497.66945629692,
            "unit": "ns/iter",
            "extra": "iterations: 127496\ncpu: 5497.465018510385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5508.721522481465,
            "unit": "ns/iter",
            "extra": "iterations: 126793\ncpu: 5508.43343086764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5391.229470476182,
            "unit": "ns/iter",
            "extra": "iterations: 129947\ncpu: 5390.825490392238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9347.163334535062,
            "unit": "ns/iter",
            "extra": "iterations: 74877\ncpu: 9346.736648102904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34339.57294230253,
            "unit": "ns/iter",
            "extra": "iterations: 23971\ncpu: 34338.46731467192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134105.27677308195,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 134099.76411385438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106823.0385194505,
            "unit": "ns/iter",
            "extra": "iterations: 7970\ncpu: 106815.00627352567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107961.31953935503,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 107954.6570488485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108236.44851171479,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 108232.93223559222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 292673.58113078825,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 292658.61492137884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2259167.55231147,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2258998.5401459867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1879472.7987928295,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1879382.8973843032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1796815.0154438717,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1796743.0501930495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1781196.034416799,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1781126.1950286762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1080667.6283392005,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1080610.4529616728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1768745.1028571862,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1768685.3333333374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7326775.939999379,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7326327.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4164462.2579186372,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4164245.7013574773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9006554.553718522,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 9006039.669421472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33304.36950799911,
            "unit": "ns/iter",
            "extra": "iterations: 24695\ncpu: 33304.085847337454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136999.17855999956,
            "unit": "ns/iter",
            "extra": "iterations: 6250\ncpu: 136996.60800000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109919.7181268528,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 109915.03923838909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110803.94522144768,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 110797.90209790188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 110533.26401657626,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 110529.87181147179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 292370.1868243173,
            "unit": "ns/iter",
            "extra": "iterations: 2960\ncpu: 292358.2770270272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2280754.268472914,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2280716.0098522184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1903403.0020366062,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1903299.3890020493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1792684.2153846459,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1792629.6153846101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1809175.7669902646,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1809089.3203883446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1082511.6109813184,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1082444.5093457932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1785067.0711538896,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1784963.0769230765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7353055.390000236,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7352674.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4059085.5676854155,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4058918.77729258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33289.5022159,
            "unit": "ns/iter",
            "extra": "iterations: 24595\ncpu: 33287.65196178087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133796.42466396585,
            "unit": "ns/iter",
            "extra": "iterations: 6398\ncpu: 133790.9346670835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110778.24026141745,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110773.7186058431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109829.3599027535,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 109822.0445240529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109237.80217391359,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 109229.83375959033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 291903.3904569985,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 291890.8266129043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2266748.0975611596,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2266633.170731706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1891705.2348177384,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1891600.607287448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1793185.379576133,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1793096.9171483514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1809287.4580896653,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1809244.444444442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1079894.0303030228,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1079885.314685315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1783938.6312740003,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1783906.1776061803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3315.877248220576,
            "unit": "ns/iter",
            "extra": "iterations: 210889\ncpu: 3315.799306744325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17816.28550583634,
            "unit": "ns/iter",
            "extra": "iterations: 41120\ncpu: 17816.138132295728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13317.1825605295,
            "unit": "ns/iter",
            "extra": "iterations: 52536\ncpu: 13317.075909852174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12953.889782159331,
            "unit": "ns/iter",
            "extra": "iterations: 53984\ncpu: 12953.638114997084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11173.263278818253,
            "unit": "ns/iter",
            "extra": "iterations: 62675\ncpu: 11172.820103709642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68639.7638752657,
            "unit": "ns/iter",
            "extra": "iterations: 10198\ncpu: 68638.05648166344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149487.1396588337,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 149483.45415778155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38947.39475150293,
            "unit": "ns/iter",
            "extra": "iterations: 17948\ncpu: 38946.43971473118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37752.588073547035,
            "unit": "ns/iter",
            "extra": "iterations: 18547\ncpu: 37751.15652127034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37943.506815228895,
            "unit": "ns/iter",
            "extra": "iterations: 18488\ncpu: 37942.77369104299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77178.33311272468,
            "unit": "ns/iter",
            "extra": "iterations: 9066\ncpu: 77177.59761747267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68686.40141606671,
            "unit": "ns/iter",
            "extra": "iterations: 10169\ncpu: 68685.75081128956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20361.502890172535,
            "unit": "ns/iter",
            "extra": "iterations: 34427\ncpu: 20361.117727365425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99369.46669507731,
            "unit": "ns/iter",
            "extra": "iterations: 7041\ncpu: 99366.59565402707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80869.30003459929,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 80866.38597300608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79365.9614147925,
            "unit": "ns/iter",
            "extra": "iterations: 9019\ncpu: 79364.49717263645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79005.44637616328,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 79003.72544592469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154936.3543463843,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 154933.39969033387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 630920.2606721278,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 630901.4532243491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 543006.5239566735,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 542988.021638326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 530319.6996974761,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 530310.5143721635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 531205.8769931926,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 531201.2148823049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344770.9740323279,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 344761.1954924055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 522525.32289337314,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 522515.3616703917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20176.770860428987,
            "unit": "ns/iter",
            "extra": "iterations: 34599\ncpu: 20176.600479782534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96419.68986384496,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 96418.92449456848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78240.02546631792,
            "unit": "ns/iter",
            "extra": "iterations: 8953\ncpu: 78238.5457388584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78580.16851914412,
            "unit": "ns/iter",
            "extra": "iterations: 8907\ncpu: 78577.17525541659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79195.92220842451,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 79195.26927853626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152476.1379912672,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 152474.84716157158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 634407.7486388874,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 634401.9963702378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 540401.6015384409,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 540391.5384615323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 529949.2170952919,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 529938.8048411489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 528523.8377358459,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 528513.358490562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 343686.63538086304,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 343683.4889434884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 519954.81381387106,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 519950.3003002936 ns\nthreads: 1"
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
        "date": 1705954321669,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8657.588621525056,
            "unit": "ns/iter",
            "extra": "iterations: 80872\ncpu: 8657.056830547037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76196.56548259406,
            "unit": "ns/iter",
            "extra": "iterations: 11148\ncpu: 76194.49228561178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146718.38873192604,
            "unit": "ns/iter",
            "extra": "iterations: 6017\ncpu: 146708.85823500087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212976.0876806353,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212964.87876561357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 282485.58287204127,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 282477.88993813086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 347432.21509279904,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 347406.98143664224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 414943.23296812945,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 414908.3849452119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 487576.9721577884,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 487528.42227378156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 552142.1185372229,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 552115.0693568735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6375.183412549473,
            "unit": "ns/iter",
            "extra": "iterations: 108564\ncpu: 6374.8876238900575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5469.8265966106765,
            "unit": "ns/iter",
            "extra": "iterations: 127708\ncpu: 5469.451404767133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5491.332193987039,
            "unit": "ns/iter",
            "extra": "iterations: 127266\ncpu: 5490.981094715009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5467.551462588241,
            "unit": "ns/iter",
            "extra": "iterations: 127753\ncpu: 5467.059873349351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9207.336659732588,
            "unit": "ns/iter",
            "extra": "iterations: 75958\ncpu: 9207.205297664503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38624.090471438954,
            "unit": "ns/iter",
            "extra": "iterations: 23057\ncpu: 38620.6618380535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142250.07339300617,
            "unit": "ns/iter",
            "extra": "iterations: 6145\ncpu: 142239.80471928418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112174.77838899195,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 112166.64047151271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113382.80533192685,
            "unit": "ns/iter",
            "extra": "iterations: 7577\ncpu: 113381.24587567619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112417.57319316734,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 112411.39290407389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 300563.0333449297,
            "unit": "ns/iter",
            "extra": "iterations: 2879\ncpu: 300544.7724904486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2206832.151658886,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2206653.791469187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1885699.368951662,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1885559.0725806465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1869355.560000031,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1869162.7999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1862724.8090350835,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1862590.9650924029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1096942.949292345,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1096891.5094339596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1776664.9003830599,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1776540.2298850596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7364074.900000333,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7363184.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4032004.4008621317,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4031937.0689655063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9066812.109243745,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9066481.512605025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34589.65449272929,
            "unit": "ns/iter",
            "extra": "iterations: 23794\ncpu: 34588.67781793729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143753.99138076563,
            "unit": "ns/iter",
            "extra": "iterations: 5917\ncpu: 143748.53811052884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 114365.79510498862,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 114363.87588605093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113266.49819880431,
            "unit": "ns/iter",
            "extra": "iterations: 7495\ncpu: 113264.85657104748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113693.10560660937,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 113689.85217738782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 304101.5422437794,
            "unit": "ns/iter",
            "extra": "iterations: 2888\ncpu: 304088.53878116247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2272627.8734791554,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2272596.5936739803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1880488.696356261,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1880490.890688268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1830262.9803148143,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1830141.1417322806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1845168.9163347206,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1845151.992031876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1100635.447743562,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1100603.4441805214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1794364.7888676547,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1794331.861804216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7429896.379999263,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7429455.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4007699.5541129415,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4007645.8874458796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33646.738266036555,
            "unit": "ns/iter",
            "extra": "iterations: 24395\ncpu: 33646.30866980955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139010.50317022926,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 139008.99040806422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110395.69737691412,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 110389.36555110454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113441.97016107512,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 113435.37100607394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112577.47933123467,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 112572.5381779881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 298443.4765678808,
            "unit": "ns/iter",
            "extra": "iterations: 2902\ncpu: 298438.7663680219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2215422.55369915,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2215292.3627684945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1888049.0921845536,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1887969.3386773556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1823958.621145164,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 1823927.092511011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1833880.5207100753,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1833833.92504931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1093060.4416960457,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1093001.4134275608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1783902.9731285616,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1783853.7428023044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3306.2165876268136,
            "unit": "ns/iter",
            "extra": "iterations: 212339\ncpu: 3306.216474599592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17015.68160429179,
            "unit": "ns/iter",
            "extra": "iterations: 41015\ncpu: 17015.457759356246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13259.268393528095,
            "unit": "ns/iter",
            "extra": "iterations: 52967\ncpu: 13258.640285460686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12970.721976906734,
            "unit": "ns/iter",
            "extra": "iterations: 54125\ncpu: 12970.52748267895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11034.648965507473,
            "unit": "ns/iter",
            "extra": "iterations: 63461\ncpu: 11034.332897370065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 69768.45251618697,
            "unit": "ns/iter",
            "extra": "iterations: 10035\ncpu: 69768.56003985985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145167.65983438081,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 145157.63975155176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38185.71524260604,
            "unit": "ns/iter",
            "extra": "iterations: 18363\ncpu: 38184.833632848444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38105.63386877077,
            "unit": "ns/iter",
            "extra": "iterations: 18365\ncpu: 38104.432344133085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38329.19873438422,
            "unit": "ns/iter",
            "extra": "iterations: 18331\ncpu: 38328.58545633146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74187.9260201329,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 74184.27133015441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68204.21808613822,
            "unit": "ns/iter",
            "extra": "iterations: 10262\ncpu: 68202.99161956695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20212.96892573489,
            "unit": "ns/iter",
            "extra": "iterations: 34498\ncpu: 20212.673198446395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98427.31969057405,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 98424.90857946582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79851.75591090677,
            "unit": "ns/iter",
            "extra": "iterations: 8755\ncpu: 79850.30268418108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80076.40077732298,
            "unit": "ns/iter",
            "extra": "iterations: 8748\ncpu: 80068.735711019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80695.60821411702,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 80693.14720812254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145814.59798783693,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 145810.10270383646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 625275.5987489537,
            "unit": "ns/iter",
            "extra": "iterations: 1119\ncpu: 625210.4557640674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 534545.4721586813,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 534514.4164759687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 543685.9595959017,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 543604.5843045895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 535379.0427480672,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 535370.9923664213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 346786.51730960933,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 346773.0959446065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 523020.166793,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 522987.7937831697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20506.800216424035,
            "unit": "ns/iter",
            "extra": "iterations: 34192\ncpu: 20505.38430042107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98687.76219941193,
            "unit": "ns/iter",
            "extra": "iterations: 7111\ncpu: 98678.68091688941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79754.58905201088,
            "unit": "ns/iter",
            "extra": "iterations: 8787\ncpu: 79750.8478434058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81041.04794441647,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 81036.72264041664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81489.59652801936,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 81489.75882558491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147594.21574835895,
            "unit": "ns/iter",
            "extra": "iterations: 4737\ncpu: 147580.5573147581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 627919.2430492871,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 627865.560538121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 531021.5962121371,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 530994.8484848503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 540339.4502698844,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 540317.1935235158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 534194.2237548168,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 534162.7586206892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 348870.86846038,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 348855.8046836039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 522716.38955225266,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 522655.74626865325 ns\nthreads: 1"
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
        "date": 1705956159245,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8752.417558351317,
            "unit": "ns/iter",
            "extra": "iterations: 79905\ncpu: 8752.16694825105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77788.58596394319,
            "unit": "ns/iter",
            "extra": "iterations: 10929\ncpu: 77787.36389422636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148700.44208198556,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 148696.98928389183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220906.09864117546,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 220903.79969803724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 289412.45988064795,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 289411.14058355434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 355243.39040527627,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 355236.14557485556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 424281.8168945228,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 424273.68164062523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 492601.05113637046,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 492593.57954545435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 562520.5545513717,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 562514.0090380901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6484.024356188155,
            "unit": "ns/iter",
            "extra": "iterations: 108145\ncpu: 6483.606269360581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5490.444040942914,
            "unit": "ns/iter",
            "extra": "iterations: 127495\ncpu: 5490.239617239899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5601.071775356849,
            "unit": "ns/iter",
            "extra": "iterations: 124820\ncpu: 5600.991027078995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5470.7205382730235,
            "unit": "ns/iter",
            "extra": "iterations: 128039\ncpu: 5470.478526074096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9563.878215960203,
            "unit": "ns/iter",
            "extra": "iterations: 73384\ncpu: 9563.541098877138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36166.502236061126,
            "unit": "ns/iter",
            "extra": "iterations: 22808\ncpu: 36164.740441950154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135683.10185332043,
            "unit": "ns/iter",
            "extra": "iterations: 6313\ncpu: 135678.04530334225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108047.79911504842,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 108043.72945638413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109460.01855882455,
            "unit": "ns/iter",
            "extra": "iterations: 7813\ncpu: 109455.6508383465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110659.01692945024,
            "unit": "ns/iter",
            "extra": "iterations: 7738\ncpu: 110651.77048332916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 295297.57517900516,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 295286.49846573547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2246870.026698996,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2246785.4368931996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1864509.7730925218,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1864441.1646586317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1856040.6467064628,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1855948.303393214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1840242.0594060062,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1840168.3168316835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1124191.0096969425,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1124177.090909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1816374.9455253126,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1816273.3463035005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7457334.179999862,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7457098.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4199000.734234248,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4198767.117117118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9124170.974789822,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9123717.647058807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33358.12825104589,
            "unit": "ns/iter",
            "extra": "iterations: 24569\ncpu: 33356.58756970172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 138479.0805043623,
            "unit": "ns/iter",
            "extra": "iterations: 6186\ncpu: 138472.17911412902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110278.78763232661,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 110272.59230570613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111629.56928104654,
            "unit": "ns/iter",
            "extra": "iterations: 7650\ncpu: 111625.29411764661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112777.35060653575,
            "unit": "ns/iter",
            "extra": "iterations: 7584\ncpu: 112770.33227848106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 301877.45293502795,
            "unit": "ns/iter",
            "extra": "iterations: 2879\ncpu: 301867.83605418407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2279919.5577396727,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2279853.3169533107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1888012.7914978405,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1887925.1012145847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1869665.3360000255,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1869567.1999999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1862287.5551102082,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1862196.3927855631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1114917.6272401137,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1114865.471923538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1814258.4795321394,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1814152.6315789465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7455845.160000081,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7455288.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4102255.5110134915,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4102059.9118942507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33479.32362872391,
            "unit": "ns/iter",
            "extra": "iterations: 24284\ncpu: 33478.936748476204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139337.62577084248,
            "unit": "ns/iter",
            "extra": "iterations: 6162\ncpu: 139332.4732229791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110241.319643538,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 110237.33694950359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111216.13191545366,
            "unit": "ns/iter",
            "extra": "iterations: 7664\ncpu: 111212.95668058391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110825.4487444976,
            "unit": "ns/iter",
            "extra": "iterations: 7726\ncpu: 110822.17188713442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 297224.3893653497,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 297211.5608919389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2258518.6861312925,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2258386.861313862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1874710.6713709445,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1874617.9435483913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1853786.9241517475,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1853720.5588822344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1844662.081027638,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1844546.245059286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1118789.0943168446,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 1118746.795646912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1805261.6887159208,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1805187.7431906622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3301.233998450924,
            "unit": "ns/iter",
            "extra": "iterations: 211792\ncpu: 3301.046309586767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16831.923642723927,
            "unit": "ns/iter",
            "extra": "iterations: 41738\ncpu: 16830.88791988111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13084.836582718714,
            "unit": "ns/iter",
            "extra": "iterations: 53446\ncpu: 13084.257007072572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12838.721908822907,
            "unit": "ns/iter",
            "extra": "iterations: 54421\ncpu: 12837.86957240779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10989.512195505253,
            "unit": "ns/iter",
            "extra": "iterations: 63712\ncpu: 10989.461953792012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 69564.29125634165,
            "unit": "ns/iter",
            "extra": "iterations: 10053\ncpu: 69559.74336019097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149045.02489363292,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 149035.0425531925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38255.18167905849,
            "unit": "ns/iter",
            "extra": "iterations: 18296\ncpu: 38252.880411018545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38245.820575864884,
            "unit": "ns/iter",
            "extra": "iterations: 18303\ncpu: 38245.659181555064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38283.913518233494,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 38282.45796025356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77726.51819698613,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 77722.103505843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69105.49230921088,
            "unit": "ns/iter",
            "extra": "iterations: 10142\ncpu: 69101.61703805898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20612.710198932673,
            "unit": "ns/iter",
            "extra": "iterations: 34082\ncpu: 20611.93591925346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95244.27850517989,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95239.7845062742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76634.70430401697,
            "unit": "ns/iter",
            "extra": "iterations: 9131\ncpu: 76631.88040740356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78688.83614106206,
            "unit": "ns/iter",
            "extra": "iterations: 8904\ncpu: 78686.69137466264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77915.67157732598,
            "unit": "ns/iter",
            "extra": "iterations: 9028\ncpu: 77912.25077536616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153037.2976815283,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 153036.5923009632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 627084.5663082731,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 627065.0537634473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 530717.5409090846,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 530703.6363636369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 548739.7007069263,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 548726.1586802833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 533515.4147641315,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 533499.3150684922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 352869.02935224166,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 352867.81376517925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 522406.8257632087,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 522387.0439314947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20306.761624535167,
            "unit": "ns/iter",
            "extra": "iterations: 34496\ncpu: 20305.557166048395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93379.51596389167,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 93367.29085275425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75724.36341041201,
            "unit": "ns/iter",
            "extra": "iterations: 9254\ncpu: 75719.94813053819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79219.44093686731,
            "unit": "ns/iter",
            "extra": "iterations: 8838\ncpu: 79215.27494908385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77443.37891706983,
            "unit": "ns/iter",
            "extra": "iterations: 9031\ncpu: 77439.02114937463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151073.96910779845,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 151065.73774033372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 626039.6756756604,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 626010.8108108141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 529259.7879698625,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 529239.3233082728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 542798.3759689546,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 542777.674418603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 533059.7281035897,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 533024.2955064771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 354045.4350912928,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 354033.62068965455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 525007.170658696,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 524980.5389221567 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}