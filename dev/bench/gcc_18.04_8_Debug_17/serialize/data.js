window.BENCHMARK_DATA = {
  "lastUpdate": 1702421386027,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-8 18.04 Debug c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702398843961,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8465.660493677162,
            "unit": "ns/iter",
            "extra": "iterations: 82402\ncpu: 8465.36370476445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98938.69906714419,
            "unit": "ns/iter",
            "extra": "iterations: 8683\ncpu: 98936.18565012093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 188883.91856183857,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 188875.98007364088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283502.3075416247,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 283488.3447600391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 366005.05535223754,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 365997.5297346751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 456471.25982188515,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 456455.5788370872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 547182.9029430244,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 547177.3324984348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 512509.7700000083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512467.29999999906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 581779.7699999688,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581763.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6454.173991693892,
            "unit": "ns/iter",
            "extra": "iterations: 108350\ncpu: 6454.021227503457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5321.740605781314,
            "unit": "ns/iter",
            "extra": "iterations: 130080\ncpu: 5321.411439114396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5439.988143518234,
            "unit": "ns/iter",
            "extra": "iterations: 128959\ncpu: 5439.830488759993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5356.304819488983,
            "unit": "ns/iter",
            "extra": "iterations: 130989\ncpu: 5356.240600355756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9384.191958495654,
            "unit": "ns/iter",
            "extra": "iterations: 74787\ncpu: 9383.740489657306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51632.26363013214,
            "unit": "ns/iter",
            "extra": "iterations: 16049\ncpu: 51630.71842482394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216618.58961303305,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 216616.29327902256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 176152.787903723,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 176147.25365151183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174998.27487178595,
            "unit": "ns/iter",
            "extra": "iterations: 4875\ncpu: 174990.31794871745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176381.92708548406,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 176377.4459320291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 394633.8301036505,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 394622.17214961804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2935156.2225705916,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2934988.7147335405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2425953.589147294,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2425892.5064599505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2444286.6141732833,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2444163.2545931786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2440166.28981714,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2440102.610966058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1482362.0749601314,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1482295.0558213717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2371096.938775461,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2371039.5408163224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10257508.40776665,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10257226.21359224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5820195.99378871,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5820024.844720502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12247666.620689923,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12247359.770114934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53141.8037958438,
            "unit": "ns/iter",
            "extra": "iterations: 15596\ncpu: 53141.638881764426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 220642.2624131729,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 220643.01517880114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 179471.5510887742,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 179470.41457286544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 178936.6090492119,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 178937.19766472094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 176568.03608991872,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 176568.5708393482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 394499.92698411917,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 394489.11564626003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2968698.3057324537,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2968654.1401273925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2436964.1766233523,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2436935.064935068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2471995.3957783384,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2471959.630606866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2488438.2670157272,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2485759.685863876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1479365.6677265544,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1479319.2368839518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2373351.0306122554,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2373271.4285714324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10414846.096153952,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10414308.6538462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5816083.838509562,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5815945.341614903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50356.507037962714,
            "unit": "ns/iter",
            "extra": "iterations: 16411\ncpu: 50355.304369020574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 217463.48603351566,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 217454.9009649571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 176625.33360927354,
            "unit": "ns/iter",
            "extra": "iterations: 4832\ncpu: 176620.03311258298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 173992.73835525644,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 173990.61733897877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 175743.56911916842,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 175739.04663212382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 395387.46812386677,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 395368.2149362486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2965961.257142868,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2965859.0476190383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2433743.142487024,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2433630.8290155525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2477335.2875988856,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2477272.5593667547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2452834.9999999697,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2452649.606299201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1480145.6502384723,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1480112.7186009502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2385079.629156015,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2384967.2634271127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2970.4031527902134,
            "unit": "ns/iter",
            "extra": "iterations: 235918\ncpu: 2970.3392704244575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21359.624091824746,
            "unit": "ns/iter",
            "extra": "iterations: 32758\ncpu: 21359.28933390308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15481.067755822352,
            "unit": "ns/iter",
            "extra": "iterations: 45295\ncpu: 15480.949332155835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16738.482222471383,
            "unit": "ns/iter",
            "extra": "iterations: 44635\ncpu: 16737.9253948695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12572.933224228516,
            "unit": "ns/iter",
            "extra": "iterations: 55604\ncpu: 12572.861664628379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 88628.84318928153,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 88626.75006317913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 191336.59321104965,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 191333.31508349307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46901.625561591645,
            "unit": "ns/iter",
            "extra": "iterations: 14913\ncpu: 46899.99329444101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47583.133279099144,
            "unit": "ns/iter",
            "extra": "iterations: 14751\ncpu: 47582.74015320984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47150.34635329011,
            "unit": "ns/iter",
            "extra": "iterations: 14849\ncpu: 47149.69358206002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97637.4660734203,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 97636.61012235796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 89081.52261434785,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 89078.30296853151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26764.86128182641,
            "unit": "ns/iter",
            "extra": "iterations: 26197\ncpu: 26764.7669580488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127958.38116100876,
            "unit": "ns/iter",
            "extra": "iterations: 5478\ncpu: 127954.4359255192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 102471.7952353124,
            "unit": "ns/iter",
            "extra": "iterations: 6842\ncpu: 102469.46799181539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 102459.53264052038,
            "unit": "ns/iter",
            "extra": "iterations: 6832\ncpu: 102458.72365339694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 102898.44625891144,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 102897.47624703171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 190312.65942612468,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 190310.91445427615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 804550.0057537234,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 804512.0828538446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 675731.6156824833,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 675716.6505324382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 691668.6145526125,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 691643.7561455267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 684526.5276679767,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 684514.6245059265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 451645.4504504775,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 451634.94208494556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 667056.7941747869,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 667042.0388349537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26812.19202148092,
            "unit": "ns/iter",
            "extra": "iterations: 26070\ncpu: 26811.933256616667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 127862.15794273128,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 127858.59930694896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 102924.93054738069,
            "unit": "ns/iter",
            "extra": "iterations: 6796\ncpu: 102924.32313125349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103144.51597702615,
            "unit": "ns/iter",
            "extra": "iterations: 6791\ncpu: 103140.93653364619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 102954.372185433,
            "unit": "ns/iter",
            "extra": "iterations: 6795\ncpu: 102952.58278145627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 187240.01970705358,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 187236.53794939854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 801132.554535049,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 801119.9770378779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 678122.9447138794,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 678119.1076624588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 689593.9665354616,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 689569.9803149557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 681943.2421875105,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 681928.8085937458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448196.250967737,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 448181.09677418845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 670649.2000000001,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 670636.2679425813 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409107337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8463.26455289475,
            "unit": "ns/iter",
            "extra": "iterations: 82475\ncpu: 8463.072446195818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99103.0275654374,
            "unit": "ns/iter",
            "extra": "iterations: 8634\ncpu: 99101.64466064396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 191067.48359580582,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 191065.92300962372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283861.49901511334,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 283856.5988181222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 371984.940440235,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 371974.7518342682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 463383.17162591126,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 463383.8469713071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 552881.4222222016,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 552872.634920635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 517699.3050000078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517691.7999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590294.991999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590276.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6492.675910987649,
            "unit": "ns/iter",
            "extra": "iterations: 107850\ncpu: 6492.6277236903115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5546.260839003874,
            "unit": "ns/iter",
            "extra": "iterations: 129463\ncpu: 5546.174582699311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5358.016575686698,
            "unit": "ns/iter",
            "extra": "iterations: 130432\ncpu: 5357.634629538767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5374.737864451405,
            "unit": "ns/iter",
            "extra": "iterations: 129990\ncpu: 5374.697284406489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9312.861308431355,
            "unit": "ns/iter",
            "extra": "iterations: 75174\ncpu: 9312.630696783463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50543.93099229183,
            "unit": "ns/iter",
            "extra": "iterations: 16346\ncpu: 50544.05970879718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 212834.2472745378,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 212823.31516352837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 169686.6825615844,
            "unit": "ns/iter",
            "extra": "iterations: 5075\ncpu: 169677.04433497522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 168740.00235202152,
            "unit": "ns/iter",
            "extra": "iterations: 5102\ncpu: 168733.41826734584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168195.12833072522,
            "unit": "ns/iter",
            "extra": "iterations: 5104\ncpu: 168188.08777429478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 396104.2329079404,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 396073.4275296261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2962094.2683706493,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2962007.0287539912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2466667.8297872758,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2466621.5425531925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2462519.203703701,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2462484.3915343937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2482544.34933339,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2482509.0666666655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1533482.7001648108,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1533444.4810543659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2510531.4481865503,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2510498.1865285006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10443821.108910609,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10443449.504950492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5901458.7278481275,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5901215.822784819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12175065.511363734,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12174473.863636399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50421.07198349357,
            "unit": "ns/iter",
            "extra": "iterations: 16476\ncpu: 50417.11580480705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 220806.0977602105,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 220794.07114624575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174707.5616977206,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 174699.89648033134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 169300.33484252892,
            "unit": "ns/iter",
            "extra": "iterations: 5080\ncpu: 169292.36220472367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 170214.8327257935,
            "unit": "ns/iter",
            "extra": "iterations: 4938\ncpu: 170206.3993519638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 400693.7098708363,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 400672.5553505524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3016099.5974025303,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3015961.038961042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2497650.3270776896,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2497568.6327077765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2494434.612903278,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2494394.354838716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2512683.669354854,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2512487.6344086044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1527786.3536184288,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527714.6381578995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2428297.4543081513,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2428172.584856391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10667404.872548912,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10666876.47058826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5986919.845161303,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 5986659.354838714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49917.00270270403,
            "unit": "ns/iter",
            "extra": "iterations: 16650\ncpu: 49914.89489489487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 209228.93579765566,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 209219.04182879312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 169668.6207237543,
            "unit": "ns/iter",
            "extra": "iterations: 5057\ncpu: 169659.75875024754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170345.74202497042,
            "unit": "ns/iter",
            "extra": "iterations: 5047\ncpu: 170338.06221517772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 169855.07086458642,
            "unit": "ns/iter",
            "extra": "iterations: 5066\ncpu: 169843.3280694829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 399357.30155821523,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 399332.5847845999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3028065.899350729,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3027946.1038961103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2529698.5486486517,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529582.1621621656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2519614.787061986,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2519476.819406999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2543085.5231607654,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2542936.512261577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1547922.425956779,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1547858.2362728808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2453605.321052596,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2453495.7894736733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3089.9815325272534,
            "unit": "ns/iter",
            "extra": "iterations: 227102\ncpu: 3089.8310010480036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20584.913777386595,
            "unit": "ns/iter",
            "extra": "iterations: 34005\ncpu: 20583.540655785946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16077.282547266668,
            "unit": "ns/iter",
            "extra": "iterations: 43529\ncpu: 16076.50991293165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16049.578766496339,
            "unit": "ns/iter",
            "extra": "iterations: 43648\ncpu: 16049.594483137915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12271.277283453612,
            "unit": "ns/iter",
            "extra": "iterations: 57205\ncpu: 12271.023511930698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 88416.18725502139,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 88411.55645467187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 195373.30524554974,
            "unit": "ns/iter",
            "extra": "iterations: 3584\ncpu: 195363.53236607186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48181.9347303349,
            "unit": "ns/iter",
            "extra": "iterations: 14555\ncpu: 48181.44280316046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47777.193184922224,
            "unit": "ns/iter",
            "extra": "iterations: 14644\ncpu: 47776.83692980103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48183.98450478222,
            "unit": "ns/iter",
            "extra": "iterations: 14327\ncpu: 48181.16842325642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103428.96247598965,
            "unit": "ns/iter",
            "extra": "iterations: 6769\ncpu: 103424.58265622861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91026.69105585798,
            "unit": "ns/iter",
            "extra": "iterations: 7681\ncpu: 91024.95768779951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23888.52595759348,
            "unit": "ns/iter",
            "extra": "iterations: 29240\ncpu: 23888.03693570468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115798.93036303725,
            "unit": "ns/iter",
            "extra": "iterations: 6060\ncpu: 115791.71617161801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 93042.74897228743,
            "unit": "ns/iter",
            "extra": "iterations: 7541\ncpu: 93037.8597003035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 92059.85447859006,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 92054.12398213794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 93023.68144784526,
            "unit": "ns/iter",
            "extra": "iterations: 7487\ncpu: 93018.53880058824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 173511.57910373615,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 173507.9227531579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 810413.6786542987,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 810358.8167053412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 686221.8068627445,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 686186.4705882263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 687696.0840751998,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 687652.720079135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 685348.9501952858,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 685315.3320312555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 444033.48411687533,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444010.60991105175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 669150.4038277282,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 669126.124401922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23902.557455959417,
            "unit": "ns/iter",
            "extra": "iterations: 29292\ncpu: 23902.34193636459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 117063.07575504885,
            "unit": "ns/iter",
            "extra": "iterations: 5993\ncpu: 117062.08910395432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 93866.76758204884,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 93861.13864701934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92298.61252137275,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92293.44995396463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 93152.6619643339,
            "unit": "ns/iter",
            "extra": "iterations: 7514\ncpu: 93147.40484429039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 172176.59429555188,
            "unit": "ns/iter",
            "extra": "iterations: 4067\ncpu: 172167.24858618187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 810439.8184079329,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 810431.0945273653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 687022.7858545874,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 686977.3084479419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 683316.4337232395,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 683281.7738791391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 687378.6712598492,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 687334.3503937119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 444459.79454662144,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 444436.5884591039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 669741.7160731478,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 669696.7276227161 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412561377,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7924.5912154912585,
            "unit": "ns/iter",
            "extra": "iterations: 88565\ncpu: 7924.068198498279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70940.477006688,
            "unit": "ns/iter",
            "extra": "iterations: 11960\ncpu: 70936.25418060202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135655.9157617111,
            "unit": "ns/iter",
            "extra": "iterations: 6446\ncpu: 135651.3186472231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199314.3215515364,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 199309.15767730094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264417.3350657298,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 264410.73066340585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325636.78814198764,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 325629.79607250734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 395691.9847670153,
            "unit": "ns/iter",
            "extra": "iterations: 2232\ncpu: 395688.2616487453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 453390.6666666652,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 453363.6411058944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 517422.3008902177,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 517409.6142433232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6054.059868648431,
            "unit": "ns/iter",
            "extra": "iterations: 115720\ncpu: 6053.857587279651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5036.487707068135,
            "unit": "ns/iter",
            "extra": "iterations: 139145\ncpu: 5036.45190269143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5072.81389437614,
            "unit": "ns/iter",
            "extra": "iterations: 137696\ncpu: 5072.588165233555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5054.213501713581,
            "unit": "ns/iter",
            "extra": "iterations: 138575\ncpu: 5054.1280894822285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8424.835744640544,
            "unit": "ns/iter",
            "extra": "iterations: 83772\ncpu: 8424.769612758451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34259.330173380615,
            "unit": "ns/iter",
            "extra": "iterations: 24051\ncpu: 34258.43831857303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144429.0469223067,
            "unit": "ns/iter",
            "extra": "iterations: 5946\ncpu: 144424.9915909858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116059.17931688814,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 116055.40796963955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116294.82987779754,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 116294.23314568204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116239.02642634371,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 116232.70090798219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280153.0115755688,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 280142.9903536984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2138274.6951501193,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2138175.288683603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1742256.410881826,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1742212.7579737327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1737971.4183864128,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1737931.3320825554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1740799.38909774,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1740735.150375936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1052485.9192264143,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1052471.4448236625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1701129.1596329578,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1701068.6238532106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7025033.539999868,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7024794.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3952083.4255318115,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3951788.9361702036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8582523.795275738,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 8582290.551181115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34957.78367191908,
            "unit": "ns/iter",
            "extra": "iterations: 23677\ncpu: 34955.965705114584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145090.2002694916,
            "unit": "ns/iter",
            "extra": "iterations: 5937\ncpu: 145089.10224018877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117212.19721577644,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 117207.04244574845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 118369.71668733582,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 118368.98167286692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118638.7727900562,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 118633.9088397794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 283485.9787581683,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 283483.5294117636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2168199.1282051136,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2168111.4219114217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1781084.6880907072,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1781069.3761814802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1760358.5901328442,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1760300.7590132807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1752140.3943395906,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1752097.1698113251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1052743.1831626955,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1052707.0534698481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1714433.5643381895,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1714400.1838235364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7076447.6400000835,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7076017.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3998422.4829061953,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3998279.05982905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33439.09971509831,
            "unit": "ns/iter",
            "extra": "iterations: 24570\ncpu: 33438.408628408746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 143599.3898531392,
            "unit": "ns/iter",
            "extra": "iterations: 5992\ncpu: 143596.64552736975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115840.92176138205,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 115836.85698895795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 117083.0550258786,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 117080.100789975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 117418.71110504486,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 117413.64567681999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 279842.0621578164,
            "unit": "ns/iter",
            "extra": "iterations: 3105\ncpu: 279836.0708534638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2153551.464037157,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2153502.08816705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1757577.9622641779,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1757513.7735849037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1752558.2264150921,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1752545.0943396196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1755838.2052730224,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1755766.4783427422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1056502.389772747,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1056493.4090909085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1712841.5082873164,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1712738.4898710854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2962.84798209313,
            "unit": "ns/iter",
            "extra": "iterations: 236334\ncpu: 2962.8254927348676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16240.177095412784,
            "unit": "ns/iter",
            "extra": "iterations: 43118\ncpu: 16239.190129412249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12804.36652054814,
            "unit": "ns/iter",
            "extra": "iterations: 54750\ncpu: 12804.2721461187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12146.59227937332,
            "unit": "ns/iter",
            "extra": "iterations: 57586\ncpu: 12146.249088320108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10276.917205748889,
            "unit": "ns/iter",
            "extra": "iterations: 68326\ncpu: 10276.492111348543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63750.23897426235,
            "unit": "ns/iter",
            "extra": "iterations: 10997\ncpu: 63749.80449213368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139494.22109249915,
            "unit": "ns/iter",
            "extra": "iterations: 5016\ncpu: 139486.4633173843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35794.745385755596,
            "unit": "ns/iter",
            "extra": "iterations: 19559\ncpu: 35794.48847078075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35668.615368947365,
            "unit": "ns/iter",
            "extra": "iterations: 19637\ncpu: 35667.301522636306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35844.11879768477,
            "unit": "ns/iter",
            "extra": "iterations: 19529\ncpu: 35843.95514363211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70369.1278731305,
            "unit": "ns/iter",
            "extra": "iterations: 9963\ncpu: 70365.75328716241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64382.301049530135,
            "unit": "ns/iter",
            "extra": "iterations: 10862\ncpu: 64381.96464739585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19752.902767200165,
            "unit": "ns/iter",
            "extra": "iterations: 35451\ncpu: 19752.001353981494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92371.44924292491,
            "unit": "ns/iter",
            "extra": "iterations: 7595\ncpu: 92369.99341672228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74493.45071922877,
            "unit": "ns/iter",
            "extra": "iterations: 9385\ncpu: 74492.09376664803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74986.15728530244,
            "unit": "ns/iter",
            "extra": "iterations: 9327\ncpu: 74982.86694542601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74772.04026917125,
            "unit": "ns/iter",
            "extra": "iterations: 9362\ncpu: 74771.48045289455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 137152.03446250933,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 137146.6614450746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 598151.5209580734,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 598141.8306244677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 508348.0783176153,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 508344.16243654786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 508786.290275767,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 508760.95791001694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 506781.9869565157,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 506778.6231884046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 329974.2562411592,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 329957.889778621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 495111.0991501304,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 495107.22379603423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19528.398227870235,
            "unit": "ns/iter",
            "extra": "iterations: 35889\ncpu: 19527.047284683395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92751.49715344515,
            "unit": "ns/iter",
            "extra": "iterations: 7553\ncpu: 92750.81424599391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74658.37368984242,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 74655.45454545373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75307.21771218113,
            "unit": "ns/iter",
            "extra": "iterations: 9214\ncpu: 75303.98306924257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75242.43915003593,
            "unit": "ns/iter",
            "extra": "iterations: 9318\ncpu: 75242.04764971056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 136435.1657587573,
            "unit": "ns/iter",
            "extra": "iterations: 5140\ncpu: 136428.7548638133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 598349.6774743875,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 598346.4163822525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 506718.3463485451,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 506704.4830079516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 510296.5445906702,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 510254.3128654968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 505905.6524257452,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 505874.2215785616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 327406.663236671,
            "unit": "ns/iter",
            "extra": "iterations: 2138\ncpu: 327387.2778297432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 493695.36511297454,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 493660.16949152155 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418368829,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8114.82516530357,
            "unit": "ns/iter",
            "extra": "iterations: 86659\ncpu: 8114.772845290162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72258.89994054064,
            "unit": "ns/iter",
            "extra": "iterations: 11773\ncpu: 72256.79945638323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138412.00712025206,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 138408.00632911394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203329.58125881004,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 203325.03522780648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 268246.3882499207,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 268245.69474665844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332921.8839969254,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 332912.1362940277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 399221.17096774065,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 399215.2995391705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 463242.86854712164,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 463214.5822245878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 529075.593086719,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 529036.9921164342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6154.145317923991,
            "unit": "ns/iter",
            "extra": "iterations: 113785\ncpu: 6153.800588829802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5376.755534692776,
            "unit": "ns/iter",
            "extra": "iterations: 137406\ncpu: 5376.473370886287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5120.240451522183,
            "unit": "ns/iter",
            "extra": "iterations: 136959\ncpu: 5120.220649975537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5136.267890515816,
            "unit": "ns/iter",
            "extra": "iterations: 135910\ncpu: 5136.143771613566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8533.480269255586,
            "unit": "ns/iter",
            "extra": "iterations: 82004\ncpu: 8532.8813228623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34818.75616171012,
            "unit": "ns/iter",
            "extra": "iterations: 23573\ncpu: 34816.76070080175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146706.83899607506,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 146697.6950657333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117582.16366882007,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 117577.79761087493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117024.42884483754,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 117019.24812030107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 118120.57162648915,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118116.3480188416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282857.6186412829,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 282839.3829996716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2158439.9767441694,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2158348.3720930284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1775988.2294454607,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1775915.4875716963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1760755.8428029832,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1760674.6212121162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1776751.8164435537,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1776722.3709369046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1062139.2022857044,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1062092.1142857145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1722040.6133828308,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1721984.572490709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7077418.819999934,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7077271.000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3967215.808510678,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3966935.7446808484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8681065.09600011,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8680357.59999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34753.28875238395,
            "unit": "ns/iter",
            "extra": "iterations: 23605\ncpu: 34750.218174115726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145959.33792049083,
            "unit": "ns/iter",
            "extra": "iterations: 5886\ncpu: 145951.8348623853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119534.23383500411,
            "unit": "ns/iter",
            "extra": "iterations: 7176\ncpu: 119527.4247491644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 118693.44730647084,
            "unit": "ns/iter",
            "extra": "iterations: 7221\ncpu: 118687.64714028573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119053.00612983995,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 119047.64558372776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 289803.6767270294,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 289785.6136820926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2187133.0705881948,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2187110.1176470667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1792564.1583011667,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1792512.5482625526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1782576.6281310206,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1782566.0886319883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1789912.1351351596,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1789827.4131274095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1064784.1676233916,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1064767.0493685396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1734687.0577280768,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1734582.4953445059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7154079.090000209,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7153583.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4001682.6510637617,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 4001387.659574468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33657.02550247493,
            "unit": "ns/iter",
            "extra": "iterations: 24429\ncpu: 33656.58029391289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 149629.46857043638,
            "unit": "ns/iter",
            "extra": "iterations: 5743\ncpu: 149629.04405363035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118818.42590802196,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 118816.68277862192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 117615.09535518932,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 117612.97814207604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119166.550429481,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 119165.98780825747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283807.2214285861,
            "unit": "ns/iter",
            "extra": "iterations: 3080\ncpu: 283803.86363636353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2175038.6955503165,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2174985.948477754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1782980.3346080466,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1782941.1089866126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1776159.195817473,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1776151.3307984795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1784060.819923388,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1784008.237547887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1062510.4240000057,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1062505.3714285775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1728449.5185873476,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1728412.8252788188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2991.9444166054964,
            "unit": "ns/iter",
            "extra": "iterations: 233487\ncpu: 2991.9614368251678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16541.88670509323,
            "unit": "ns/iter",
            "extra": "iterations: 42332\ncpu: 16541.83360105826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12248.549801920113,
            "unit": "ns/iter",
            "extra": "iterations: 56795\ncpu: 12248.347565806935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12166.82833446296,
            "unit": "ns/iter",
            "extra": "iterations: 57513\ncpu: 12166.42672091534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10232.0338241726,
            "unit": "ns/iter",
            "extra": "iterations: 68590\ncpu: 10231.949263740993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64287.5081801458,
            "unit": "ns/iter",
            "extra": "iterations: 10880\ncpu: 64287.80330882351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 142056.36258612847,
            "unit": "ns/iter",
            "extra": "iterations: 4934\ncpu: 142055.4722334811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36426.41974342986,
            "unit": "ns/iter",
            "extra": "iterations: 19176\ncpu: 36426.59052982903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36351.95487120868,
            "unit": "ns/iter",
            "extra": "iterations: 19256\ncpu: 36352.1188201082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36453.586818227144,
            "unit": "ns/iter",
            "extra": "iterations: 19178\ncpu: 36452.34122431962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70304.70403858113,
            "unit": "ns/iter",
            "extra": "iterations: 9954\ncpu: 70303.3152501508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65399.30275057846,
            "unit": "ns/iter",
            "extra": "iterations: 10725\ncpu: 65398.88111888104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19662.099501226978,
            "unit": "ns/iter",
            "extra": "iterations: 35487\ncpu: 19660.678558345346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93491.22897009786,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 93489.86046511738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75477.5404415709,
            "unit": "ns/iter",
            "extra": "iterations: 9285\ncpu: 75476.42434033527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75014.78125334933,
            "unit": "ns/iter",
            "extra": "iterations: 9335\ncpu: 75011.21585431263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76974.70834485674,
            "unit": "ns/iter",
            "extra": "iterations: 7238\ncpu: 76966.89693285282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140342.69304748467,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 140339.13043478245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 611844.2938596321,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 611847.5438596549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 512761.73274593713,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 512745.30102790357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 514951.7895125008,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 514922.96898079605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518762.12416351796,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 518754.1263940553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335872.9354992373,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 335850.5016722363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 504069.0660445745,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 504065.61378320423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19396.70788047159,
            "unit": "ns/iter",
            "extra": "iterations: 35975\ncpu: 19396.808895065715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92792.98544202959,
            "unit": "ns/iter",
            "extra": "iterations: 7556\ncpu: 92787.59925886677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75134.08997208337,
            "unit": "ns/iter",
            "extra": "iterations: 9314\ncpu: 75132.13442130029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75622.92564378469,
            "unit": "ns/iter",
            "extra": "iterations: 9320\ncpu: 75618.41201716811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75344.8961318731,
            "unit": "ns/iter",
            "extra": "iterations: 9281\ncpu: 75343.87458247959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139190.4635893312,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 139188.3207321906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 608582.0391304563,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 608567.7391304314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 509970.1093294012,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 509957.944606414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515948.05037034856,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 515913.70370370324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 516634.59837278724,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 516637.20414201025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 332085.951092124,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 332079.2022792017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 501574.28561203467,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 501553.6864710101 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421385586,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8075.885597513087,
            "unit": "ns/iter",
            "extra": "iterations: 86860\ncpu: 8075.695371862769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73696.78693582617,
            "unit": "ns/iter",
            "extra": "iterations: 11344\ncpu: 73695.19569816643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140659.85236634075,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 140655.66144403166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207099.1535714213,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 207093.23809523814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 274393.1295828172,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 274381.32111251587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 337560.0082288506,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 337548.31504702166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407181.39795916947,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 407156.67903525033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 468825.5239376213,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 468802.52824098954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 533405.2345376705,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 533390.2020820571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6072.8064218426125,
            "unit": "ns/iter",
            "extra": "iterations: 114858\ncpu: 6072.738511901653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5094.403321410698,
            "unit": "ns/iter",
            "extra": "iterations: 137833\ncpu: 5093.9121980948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5087.169522617284,
            "unit": "ns/iter",
            "extra": "iterations: 137374\ncpu: 5086.829385473229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5110.222142867468,
            "unit": "ns/iter",
            "extra": "iterations: 135818\ncpu: 5109.827121589188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8447.877272508564,
            "unit": "ns/iter",
            "extra": "iterations: 82948\ncpu: 8447.564739354782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34075.62431168046,
            "unit": "ns/iter",
            "extra": "iterations: 24153\ncpu: 34074.61598973211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144917.07581897583,
            "unit": "ns/iter",
            "extra": "iterations: 5922\ncpu: 144910.97602161413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 115426.26524554355,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 115424.91905018904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115711.38239675236,
            "unit": "ns/iter",
            "extra": "iterations: 7385\ncpu: 115705.86323628946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116073.97885032905,
            "unit": "ns/iter",
            "extra": "iterations: 7376\ncpu: 116069.00759219071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281735.96047941706,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 281724.9433106585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2207435.2928571203,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2207373.333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1799368.7079303977,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1799319.7292069679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1792112.8436293136,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1792078.3783783775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1800000.692456465,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1799958.2205029046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1075129.447429865,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1075100.9345794374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1749204.0869564847,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1748969.1871455612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7183846.000000358,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7183264.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3829943.6188524063,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3829714.754098358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8758348.814515946,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8757537.096774178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34348.631195998474,
            "unit": "ns/iter",
            "extra": "iterations: 24189\ncpu: 34346.89321592458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143746.22341136672,
            "unit": "ns/iter",
            "extra": "iterations: 5980\ncpu: 143733.24414715762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116877.33510348537,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 116871.65032679726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115894.06310810552,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 115885.72972972946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116579.45994550125,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 116572.58855585806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 285881.8790163927,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 285857.80327868875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2229442.0359712583,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2229350.5995203764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1819948.0409357357,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1819700.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1814535.4561403415,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1814514.6198830458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1816542.159844114,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1816442.4951267047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1081172.3806751845,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1081115.599534344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1759402.844990594,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1759283.1758033994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7213674.429999628,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7212596.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4122669.74449352,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4122452.4229074772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33476.5325898088,
            "unit": "ns/iter",
            "extra": "iterations: 24747\ncpu: 33474.12211581177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 142129.3999999988,
            "unit": "ns/iter",
            "extra": "iterations: 6010\ncpu: 142118.93510815376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115042.72708975758,
            "unit": "ns/iter",
            "extra": "iterations: 7453\ncpu: 115034.79135918386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 116228.05014788997,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 116218.94326431885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116565.61097494392,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 116557.40740740768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 281470.21795285196,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 281447.852760735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2216376.762470296,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2216212.589073633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1810923.2217897999,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1810822.1789883294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795703.6127167698,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1795583.429672456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1806172.273786416,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806069.5145631048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1077773.9965196752,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1077687.703016247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1750831.5762711177,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1750731.2617702459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2945.6115452612335,
            "unit": "ns/iter",
            "extra": "iterations: 238141\ncpu: 2945.3252484872523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16235.411097976019,
            "unit": "ns/iter",
            "extra": "iterations: 43143\ncpu: 16234.557170340595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12454.406996709458,
            "unit": "ns/iter",
            "extra": "iterations: 55912\ncpu: 12453.086993847512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12812.365765605695,
            "unit": "ns/iter",
            "extra": "iterations: 56230\ncpu: 12811.426284901361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10225.935413357154,
            "unit": "ns/iter",
            "extra": "iterations: 68621\ncpu: 10225.005464799433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64171.694049694226,
            "unit": "ns/iter",
            "extra": "iterations: 10907\ncpu: 64168.53396901023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148146.4618539791,
            "unit": "ns/iter",
            "extra": "iterations: 4876\ncpu: 148119.8728465964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36515.72870201281,
            "unit": "ns/iter",
            "extra": "iterations: 19145\ncpu: 36513.773831287595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36615.21145604545,
            "unit": "ns/iter",
            "extra": "iterations: 19134\ncpu: 36614.80087801849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36904.9801244197,
            "unit": "ns/iter",
            "extra": "iterations: 18968\ncpu: 36902.01919021491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71305.87738253125,
            "unit": "ns/iter",
            "extra": "iterations: 9811\ncpu: 71305.07593517548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66201.93323890957,
            "unit": "ns/iter",
            "extra": "iterations: 10590\ncpu: 66194.82530689352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20004.90854108829,
            "unit": "ns/iter",
            "extra": "iterations: 35218\ncpu: 20003.779317394732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94218.84194938332,
            "unit": "ns/iter",
            "extra": "iterations: 7428\ncpu: 94208.11793214874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76010.88703201289,
            "unit": "ns/iter",
            "extra": "iterations: 9215\ncpu: 76008.54042322302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75880.42232326358,
            "unit": "ns/iter",
            "extra": "iterations: 9237\ncpu: 75878.34794846685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76026.2343241473,
            "unit": "ns/iter",
            "extra": "iterations: 9218\ncpu: 76022.30418745987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141136.23095478382,
            "unit": "ns/iter",
            "extra": "iterations: 4975\ncpu: 141134.6733668345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 619623.8285968003,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 619610.3907637649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 522212.0909768861,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 522200.4474272919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 522473.94693571964,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 522461.0612854993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522971.81804624014,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 522938.1058911191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336996.9235209254,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 336993.3621933565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 508922.32799998805,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 508911.1999999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19716.531652011385,
            "unit": "ns/iter",
            "extra": "iterations: 35369\ncpu: 19716.31089372044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93728.911482934,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 93724.72001079489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75335.64418103088,
            "unit": "ns/iter",
            "extra": "iterations: 9280\ncpu: 75333.07112068984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75265.7035445724,
            "unit": "ns/iter",
            "extra": "iterations: 9310\ncpu: 75264.8549946307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75579.05523256208,
            "unit": "ns/iter",
            "extra": "iterations: 9288\ncpu: 75576.39965546898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138321.23670159664,
            "unit": "ns/iter",
            "extra": "iterations: 5057\ncpu: 138319.63614791253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 615369.8201948551,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 615355.0930026552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 520675.93819803494,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 520654.5048399149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 523245.51343283575,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 523239.8507462773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521089.3930163509,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 521062.2585438356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 335746.6218809911,
            "unit": "ns/iter",
            "extra": "iterations: 2084\ncpu: 335742.6583493342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 508909.12472804106,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 508886.65699782094 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}