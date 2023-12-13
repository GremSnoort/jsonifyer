window.BENCHMARK_DATA = {
  "lastUpdate": 1702489572391,
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
      }
    ]
  }
}