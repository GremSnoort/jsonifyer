window.BENCHMARK_DATA = {
  "lastUpdate": 1705771656889,
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
        "date": 1702422468387,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8125.952997740998,
            "unit": "ns/iter",
            "extra": "iterations: 86315\ncpu: 8125.600417076986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73938.87211921846,
            "unit": "ns/iter",
            "extra": "iterations: 11542\ncpu: 73937.18592964826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141810.46008097063,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 141805.84615384613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209500.64953159582,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 209493.44222916156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 276992.31080649106,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 276976.3468281799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 341929.657842728,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 341925.80007902015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 408884.6393982322,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 408867.1368124118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 475050.16312058293,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 475027.9323513362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 544712.9058603381,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 544701.1845386537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6240.606253175215,
            "unit": "ns/iter",
            "extra": "iterations: 112199\ncpu: 6240.398755782136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5165.1932872669995,
            "unit": "ns/iter",
            "extra": "iterations: 135891\ncpu: 5165.250090145785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5217.349872602735,
            "unit": "ns/iter",
            "extra": "iterations: 134226\ncpu: 5217.273106551634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5231.578850096547,
            "unit": "ns/iter",
            "extra": "iterations: 133646\ncpu: 5231.391137781906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8589.249556439128,
            "unit": "ns/iter",
            "extra": "iterations: 81725\ncpu: 8589.244417252972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35299.70714683374,
            "unit": "ns/iter",
            "extra": "iterations: 23353\ncpu: 35298.76675373611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 148708.66695442155,
            "unit": "ns/iter",
            "extra": "iterations: 5792\ncpu: 148703.78107734816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117911.68196180744,
            "unit": "ns/iter",
            "extra": "iterations: 7279\ncpu: 117907.21252919348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116500.61820890986,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 116497.7780788509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117536.98793032407,
            "unit": "ns/iter",
            "extra": "iterations: 7291\ncpu: 117533.4659168838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 285104.7782113769,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 285090.66666666657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2204908.3491687714,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2204806.175771972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1821777.7534247166,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1821726.810176127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1815380.0645793087,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1815311.7416829776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1837041.4308300526,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1836955.731225296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1091706.8945497589,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1091675.8293838836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1775009.938697226,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1774961.4942528706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7261322.6599997915,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7261296.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3980653.0000001295,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3980475.6410256405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8906836.349593703,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8906443.089430885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34622.683725605566,
            "unit": "ns/iter",
            "extra": "iterations: 23878\ncpu: 34621.35438478942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144994.15912557257,
            "unit": "ns/iter",
            "extra": "iterations: 5901\ncpu: 144987.79867819007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118764.90004147173,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 118760.16867136743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117128.27142271215,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 117125.62525625294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118241.33899006662,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 118237.21026490012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 292797.0237220162,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 292786.9361844319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2235936.8966345,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2235826.201923086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1850863.711729538,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1850824.0556660076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1844905.9802370903,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1844856.7193675917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1853223.6111110162,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1853145.436507929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1092751.5623529202,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1092698.352941175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1789670.7269230206,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1789674.615384621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7340016.279999873,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7339466.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4032531.7878787974,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4032471.4285714426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33997.07931730842,
            "unit": "ns/iter",
            "extra": "iterations: 24257\ncpu: 33995.82800840996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145311.71515871774,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 145307.04464437335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116768.33529814337,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 116764.50993831376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 118162.0957652946,
            "unit": "ns/iter",
            "extra": "iterations: 7226\ncpu: 118157.37614171098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119421.99500208505,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 119420.7552408715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 284419.91780821554,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 284412.06784083304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2232352.5638553454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2232276.1445783176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1842999.626482176,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1842946.6403162142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1881440.7909270816,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1881330.7692307583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1830241.164705905,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1830194.9019607825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1090874.0222482155,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1090848.126463697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1775443.1526717485,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1775407.4427480993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3022.1753746683094,
            "unit": "ns/iter",
            "extra": "iterations: 231071\ncpu: 3022.1576917916923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16154.64668711423,
            "unit": "ns/iter",
            "extra": "iterations: 43361\ncpu: 16154.500588086088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12249.906745997587,
            "unit": "ns/iter",
            "extra": "iterations: 57145\ncpu: 12249.740134744841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12908.904419321168,
            "unit": "ns/iter",
            "extra": "iterations: 57407\ncpu: 12908.770707405074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10352.727064896151,
            "unit": "ns/iter",
            "extra": "iterations: 67800\ncpu: 10352.343657817111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64649.462667282,
            "unit": "ns/iter",
            "extra": "iterations: 10835\ncpu: 64650.19843101055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144689.31736526542,
            "unit": "ns/iter",
            "extra": "iterations: 4843\ncpu: 144684.08011563067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37009.013622684375,
            "unit": "ns/iter",
            "extra": "iterations: 18939\ncpu: 37009.01314747352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37044.97029284399,
            "unit": "ns/iter",
            "extra": "iterations: 18918\ncpu: 37044.10085632717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37123.61193317291,
            "unit": "ns/iter",
            "extra": "iterations: 18855\ncpu: 37123.92468841145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75634.599503567,
            "unit": "ns/iter",
            "extra": "iterations: 9266\ncpu: 75634.39456075952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66723.3018580241,
            "unit": "ns/iter",
            "extra": "iterations: 10495\ncpu: 66721.56264888024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20085.71091825667,
            "unit": "ns/iter",
            "extra": "iterations: 34914\ncpu: 20085.467147849256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97044.23104946333,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 97042.49684741505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77698.05660377369,
            "unit": "ns/iter",
            "extra": "iterations: 9010\ncpu: 77698.01331853544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77618.22113893225,
            "unit": "ns/iter",
            "extra": "iterations: 9026\ncpu: 77617.26124529252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77980.06871247782,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 77978.08539026087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 143841.30707692468,
            "unit": "ns/iter",
            "extra": "iterations: 4875\ncpu: 143838.4615384638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 628731.0332136315,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 628694.0754039435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 527535.0241145161,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 527516.729464967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 531368.5572403037,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 531363.457164522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 530988.194992446,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 530965.6297420298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340877.2027290497,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 340862.2319688098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 516903.19852397434,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 516879.0405904045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19950.39041701211,
            "unit": "ns/iter",
            "extra": "iterations: 35083\ncpu: 19949.536812701474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96802.37986744128,
            "unit": "ns/iter",
            "extra": "iterations: 7242\ncpu: 96799.71002485573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77353.32010610883,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 77352.03935006147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77733.12225183289,
            "unit": "ns/iter",
            "extra": "iterations: 9006\ncpu: 77730.81279147336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78011.08845510267,
            "unit": "ns/iter",
            "extra": "iterations: 8965\ncpu: 78009.2693809254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142362.04706836626,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 142357.90221140176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 628467.3156474716,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 628447.9316546755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 527593.6634035959,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 527576.2048192775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532374.7640364177,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 532349.0136570621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 531210.5345481903,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 531194.0774487467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341112.96721312415,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 341105.96125185915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 515958.6355555517,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 515942.22222222347 ns\nthreads: 1"
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
        "date": 1702453366316,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8083.828647661945,
            "unit": "ns/iter",
            "extra": "iterations: 86576\ncpu: 8083.796895213454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72417.43216508896,
            "unit": "ns/iter",
            "extra": "iterations: 11727\ncpu: 72415.51121343907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138197.74786324697,
            "unit": "ns/iter",
            "extra": "iterations: 6318\ncpu: 138191.26305792973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204299.63424124717,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 204295.3550583658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 271239.8418749906,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 271226.37499999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333500.3573909671,
            "unit": "ns/iter",
            "extra": "iterations: 2591\ncpu: 333479.46738710953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398533.9202566504,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 398515.3987167735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 463345.39787233947,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 463314.14893616975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 527895.2518159719,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 527881.6585956416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6125.701170509715,
            "unit": "ns/iter",
            "extra": "iterations: 114480\ncpu: 6125.435883997213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5114.354636417593,
            "unit": "ns/iter",
            "extra": "iterations: 136819\ncpu: 5114.139118104941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5128.779908160571,
            "unit": "ns/iter",
            "extra": "iterations: 136543\ncpu: 5128.455504859277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5151.926165927417,
            "unit": "ns/iter",
            "extra": "iterations: 135493\ncpu: 5151.856553475083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8654.085749929385,
            "unit": "ns/iter",
            "extra": "iterations: 81761\ncpu: 8653.388534876054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34545.75804090512,
            "unit": "ns/iter",
            "extra": "iterations: 23909\ncpu: 34544.80739470489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 147066.5508503389,
            "unit": "ns/iter",
            "extra": "iterations: 5880\ncpu: 147064.42176870743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118138.88332872148,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 118136.50815593044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117097.65937670764,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 117093.24767632603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 118360.50034592848,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 118353.49384253484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 288913.1347354524,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 288901.41307919833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2161290.6550116865,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2161191.3752913745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1784163.8160919168,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1784130.6513409917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1779740.3435113975,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779662.0229007592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1810455.8856589922,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1810312.9844961239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1067751.4059976982,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1067708.996539792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1731282.9514925645,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1731174.8134328371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7140905.250000174,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7140644.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3992062.5319147822,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3991835.7446808424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8799869.750000028,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8799554.838709695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34169.78135248446,
            "unit": "ns/iter",
            "extra": "iterations: 24089\ncpu: 34169.78288845536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145517.78896435152,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 145514.8726655351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118579.09171515457,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118579.05236907749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 118002.47642679937,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 118001.07526881722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118255.51466924975,
            "unit": "ns/iter",
            "extra": "iterations: 7226\ncpu: 118255.12039856089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 293395.70618034905,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 293382.97872340446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2186385.7694117595,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2186247.764705894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1804353.9013539243,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1804287.620889742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1802937.212765932,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1802838.8781431287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1806285.454368923,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806192.8155339847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1075002.3083140892,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1074950.6928406481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1747748.9962616176,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1747706.16822431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7216382.730000533,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7216251.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3987420.1353713404,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 3987245.414847186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33697.156558185656,
            "unit": "ns/iter",
            "extra": "iterations: 24336\ncpu: 33695.496383957754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144131.5532599472,
            "unit": "ns/iter",
            "extra": "iterations: 5905\ncpu: 144122.62489415798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116579.9269754836,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 116575.64032697509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 117234.3308270679,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 117229.22761449129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 118528.7987560472,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 118527.09053213523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 287978.136002641,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 287963.33553937793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2169388.93224295,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2169295.5607476584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1781728.9310344798,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1781630.6513410015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1778559.7366411842,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1778497.137404584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1794367.8326923,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1794268.6538461454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1073899.814302171,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1073845.4440599696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1739110.894934319,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1739018.011257034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3018.9306984882332,
            "unit": "ns/iter",
            "extra": "iterations: 232044\ncpu: 3018.820568512881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16618.96576350019,
            "unit": "ns/iter",
            "extra": "iterations: 42148\ncpu: 16618.005599316708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12613.543697191513,
            "unit": "ns/iter",
            "extra": "iterations: 55507\ncpu: 12612.83081413149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12946.974945453598,
            "unit": "ns/iter",
            "extra": "iterations: 54082\ncpu: 12946.096668022687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10256.733124826244,
            "unit": "ns/iter",
            "extra": "iterations: 68103\ncpu: 10256.539359499497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65592.1833628993,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65592.04556063848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140512.77920772106,
            "unit": "ns/iter",
            "extra": "iterations: 4973\ncpu: 140507.3396340238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36032.08228694741,
            "unit": "ns/iter",
            "extra": "iterations: 19432\ncpu: 36030.614450391105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36281.6083488703,
            "unit": "ns/iter",
            "extra": "iterations: 19308\ncpu: 36281.85208203857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36365.249454998215,
            "unit": "ns/iter",
            "extra": "iterations: 19266\ncpu: 36365.4936156961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74886.78663815724,
            "unit": "ns/iter",
            "extra": "iterations: 9355\ncpu: 74884.40406199926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65491.24569771401,
            "unit": "ns/iter",
            "extra": "iterations: 10692\ncpu: 65487.40179573515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19710.132959972474,
            "unit": "ns/iter",
            "extra": "iterations: 35176\ncpu: 19709.375710711884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91197.97688389786,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 91194.74990204912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74431.50631567497,
            "unit": "ns/iter",
            "extra": "iterations: 9421\ncpu: 74432.07727417507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74739.58939409649,
            "unit": "ns/iter",
            "extra": "iterations: 9391\ncpu: 74740.11287402804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75543.40296438185,
            "unit": "ns/iter",
            "extra": "iterations: 9378\ncpu: 75540.28577521806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140107.99680383457,
            "unit": "ns/iter",
            "extra": "iterations: 5006\ncpu: 140103.355972831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 609128.5100261685,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609106.1028770729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 510696.1257267214,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 510693.0959302354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 514056.2433823411,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 514021.5441176507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 519746.1967334742,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 519725.9094283532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336304.5389049056,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 336292.6993275691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 501822.83956836164,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 501806.6187050316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19222.44765491773,
            "unit": "ns/iter",
            "extra": "iterations: 36374\ncpu: 19221.8315280142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90636.4188698775,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 90637.14359771862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74459.90092190339,
            "unit": "ns/iter",
            "extra": "iterations: 9437\ncpu: 74459.69057963238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74384.70929613226,
            "unit": "ns/iter",
            "extra": "iterations: 9391\ncpu: 74382.09988286739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74226.73288250073,
            "unit": "ns/iter",
            "extra": "iterations: 9464\ncpu: 74224.3026204567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137988.24990146238,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 137983.54355538142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 607973.5932350298,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 607977.7970511613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 507282.7461928687,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 507263.016678747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515023.85819246835,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 515001.02865539823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 517957.68888887827,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 517939.9259259193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 333770.0338256287,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 333759.1233920917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 501356.6179211523,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 501339.0681003531 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479537605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7934.697021408256,
            "unit": "ns/iter",
            "extra": "iterations: 83798\ncpu: 7934.482923220125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71351.44366966376,
            "unit": "ns/iter",
            "extra": "iterations: 11903\ncpu: 71348.43316810887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136778.46454844612,
            "unit": "ns/iter",
            "extra": "iterations: 6389\ncpu: 136771.57614650176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201467.80598053164,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 201465.1367640241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267825.3182397808,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 267820.9502551022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 328643.02680966916,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 328578.70547682873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 392796.7432310266,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 392792.9151624549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455443.3591623003,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 455422.5654450261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 520625.7755223794,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 520602.507462686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6052.413715973359,
            "unit": "ns/iter",
            "extra": "iterations: 115792\ncpu: 6052.464764405143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5041.5687466204445,
            "unit": "ns/iter",
            "extra": "iterations: 138705\ncpu: 5041.423164269495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5051.74523014354,
            "unit": "ns/iter",
            "extra": "iterations: 138631\ncpu: 5051.740952600786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5083.163996495998,
            "unit": "ns/iter",
            "extra": "iterations: 138131\ncpu: 5083.079830016435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8297.628752667795,
            "unit": "ns/iter",
            "extra": "iterations: 84340\ncpu: 8297.321555608256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34795.21652662187,
            "unit": "ns/iter",
            "extra": "iterations: 23683\ncpu: 34795.52421568216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146053.70251017401,
            "unit": "ns/iter",
            "extra": "iterations: 5896\ncpu: 146051.2381275442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116860.61599453268,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 116861.57211209829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116922.51001771419,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 116918.23633637726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116646.17830201189,
            "unit": "ns/iter",
            "extra": "iterations: 7291\ncpu: 116643.79371828295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 285828.4814936171,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 285820.63544055115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2124192.231651376,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2124161.6972477064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1764403.1245283114,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1764352.8301886765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1746543.9155722426,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1746534.8968105102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1757640.4366729937,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1757616.446124759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1058004.6939704404,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1057981.2286689437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1703014.639705876,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1703015.8088235282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7046113.150000224,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7046060.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3887617.7925310675,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3887445.2282157806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8596766.809523797,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8596352.380952392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34327.71479574691,
            "unit": "ns/iter",
            "extra": "iterations: 24088\ncpu: 34326.90136167387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144067.35167785434,
            "unit": "ns/iter",
            "extra": "iterations: 5960\ncpu: 144062.6342281876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117580.35814144358,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 117576.72697368432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 118126.57567010557,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 118122.94158075667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118567.88572998723,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 118564.30435379811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 288006.49818423233,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 287999.96698580333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2166633.2604651903,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2166567.674418606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1774847.3568701684,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1774771.7557251872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1764641.6596958805,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1764601.7110266224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1759337.467043308,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1759262.3352165786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1059042.9393592677,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1059012.700228839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1714707.948434674,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1714641.0681399636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7075185.350000197,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7075245.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3864504.7219918626,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3864344.813278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33480.69859680506,
            "unit": "ns/iter",
            "extra": "iterations: 24658\ncpu: 33480.103820261436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145190.9119443508,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 145187.970817781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116166.08943200587,
            "unit": "ns/iter",
            "extra": "iterations: 7324\ncpu: 116167.06717640675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 117212.35781828234,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 117210.45635192526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 118072.96843556636,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 118071.01309441822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 284559.3642880563,
            "unit": "ns/iter",
            "extra": "iterations: 3069\ncpu: 284553.9915281847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2153883.067285331,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2153863.3410672997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1770098.1231061476,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1770078.5984848475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1766636.344106468,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1766576.6159695813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1764823.2159090478,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1764823.8636363607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1062906.276255706,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1062879.5662100401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1721409.4750462442,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1721370.609981512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2959.642383544166,
            "unit": "ns/iter",
            "extra": "iterations: 235733\ncpu: 2959.529637343941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16430.371836848422,
            "unit": "ns/iter",
            "extra": "iterations: 42758\ncpu: 16430.34052107207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12542.409593963695,
            "unit": "ns/iter",
            "extra": "iterations: 55931\ncpu: 12541.987448820897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12449.739742086449,
            "unit": "ns/iter",
            "extra": "iterations: 56298\ncpu: 12449.714021812464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10174.972076306489,
            "unit": "ns/iter",
            "extra": "iterations: 68723\ncpu: 10174.85412452892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64559.20515891144,
            "unit": "ns/iter",
            "extra": "iterations: 10855\ncpu: 64557.1257485029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140367.80676811835,
            "unit": "ns/iter",
            "extra": "iterations: 4994\ncpu: 140367.54104925864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35832.34667623477,
            "unit": "ns/iter",
            "extra": "iterations: 19511\ncpu: 35831.44892624687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35837.77171509508,
            "unit": "ns/iter",
            "extra": "iterations: 19445\ncpu: 35837.42864489555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35828.995595618,
            "unit": "ns/iter",
            "extra": "iterations: 19526\ncpu: 35828.19829970293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73223.46235653172,
            "unit": "ns/iter",
            "extra": "iterations: 9497\ncpu: 73224.03917026446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64675.35544453845,
            "unit": "ns/iter",
            "extra": "iterations: 10809\ncpu: 64674.3176982152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19436.062380490475,
            "unit": "ns/iter",
            "extra": "iterations: 36085\ncpu: 19435.413606761755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93478.98878654474,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93477.09251101418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74601.88651877068,
            "unit": "ns/iter",
            "extra": "iterations: 9376\ncpu: 74598.9547781578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74374.2604755316,
            "unit": "ns/iter",
            "extra": "iterations: 9379\ncpu: 74372.80093826605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74623.38266610376,
            "unit": "ns/iter",
            "extra": "iterations: 9392\ncpu: 74621.177597956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138291.65751530812,
            "unit": "ns/iter",
            "extra": "iterations: 5063\ncpu: 138287.22101520858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 604457.8501292006,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 604432.9026701057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 506172.44428362686,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 506159.33429811936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 507921.8705454464,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 507911.5636363708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 512486.5566106706,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 512469.02848794585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 331997.16058740224,
            "unit": "ns/iter",
            "extra": "iterations: 2111\ncpu: 331983.5149218394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 496262.49681075267,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 496248.5471296919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19300.682171825778,
            "unit": "ns/iter",
            "extra": "iterations: 36246\ncpu: 19300.871820338925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92735.80971928232,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 92732.83898305091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74992.8491374712,
            "unit": "ns/iter",
            "extra": "iterations: 9333\ncpu: 74991.471123969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74459.59963825412,
            "unit": "ns/iter",
            "extra": "iterations: 9399\ncpu: 74458.21895946332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74979.29277688729,
            "unit": "ns/iter",
            "extra": "iterations: 9345\ncpu: 74977.53879079667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 136672.60906236732,
            "unit": "ns/iter",
            "extra": "iterations: 5098\ncpu: 136667.85013730841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 601636.6827171128,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 601607.566637999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 505390.3744588705,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 505372.2222222261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 510169.0699199057,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 510164.02039329446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 509068.979636347,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 509041.5272727259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 328629.3533834521,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 328621.56954886933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 495008.97949083446,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 495003.32390381896 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488601697,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7996.738354670125,
            "unit": "ns/iter",
            "extra": "iterations: 87095\ncpu: 7996.572707962571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72830.48174684458,
            "unit": "ns/iter",
            "extra": "iterations: 11724\ncpu: 72827.35414534289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139133.43380595645,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 139129.7116456906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204289.91384180397,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 204277.8719397364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269698.83338514843,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 269683.5250233137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333149.5823029539,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 333118.74034003075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398811.049015104,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 398787.17361429194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 463310.30789754336,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 463275.98719316977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 528205.8891580707,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 528163.7189582068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6105.2101183977165,
            "unit": "ns/iter",
            "extra": "iterations: 114445\ncpu: 6104.659880291842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5141.0969904299,
            "unit": "ns/iter",
            "extra": "iterations: 137096\ncpu: 5140.742253603316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5153.989311303814,
            "unit": "ns/iter",
            "extra": "iterations: 135938\ncpu: 5153.801733143055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5148.167368931166,
            "unit": "ns/iter",
            "extra": "iterations: 136226\ncpu: 5147.93871948086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8401.856373020179,
            "unit": "ns/iter",
            "extra": "iterations: 83320\ncpu: 8401.567450792125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34211.508850108265,
            "unit": "ns/iter",
            "extra": "iterations: 24011\ncpu: 34211.21569280751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 143955.89301164562,
            "unit": "ns/iter",
            "extra": "iterations: 6010\ncpu: 143949.36772046585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 115853.41717294388,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 115848.61617388956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117520.7064207717,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 117515.23224043693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117446.96230811681,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 117444.18859649093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 283266.90369649866,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 283253.7613488982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2166213.478971902,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2166099.065420563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1777097.315487587,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777039.3881453134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1772883.6998088092,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1772839.9617590844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1789186.0849421301,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1789169.8841698782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1064303.054919868,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1064262.471395881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1726494.705009295,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1726430.4267161402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7171170.800000369,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7171006.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4017581.2575106816,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4017279.3991416283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8725934.919999871,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8725259.200000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34123.20095435697,
            "unit": "ns/iter",
            "extra": "iterations: 24100\ncpu: 34122.62655601652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144846.59594937103,
            "unit": "ns/iter",
            "extra": "iterations: 5925\ncpu: 144837.7046413506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117617.0071418738,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 117617.20917456417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117779.98212567014,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 117775.49841880941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118526.56127959806,
            "unit": "ns/iter",
            "extra": "iterations: 7221\ncpu: 118524.06868854706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 287483.72121412,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 287469.6139887832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2195722.646919479,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2195680.0947867343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1834117.004184045,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1834041.2133891273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1806759.3527131637,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1806727.3255813883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1797304.4980695813,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1797255.019305014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1061579.5348571087,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1061570.857142856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1737909.6654205618,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1737859.6261682224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7201704.739999855,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7201265.999999933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4017249.549356175,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4016999.5708154407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33046.91932246839,
            "unit": "ns/iter",
            "extra": "iterations: 24914\ncpu: 33045.54065986991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 142593.26319294138,
            "unit": "ns/iter",
            "extra": "iterations: 6007\ncpu: 142580.03995338758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115418.66909483532,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 115411.46634291133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 115995.98931421441,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 115988.00216420947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 117266.95840744169,
            "unit": "ns/iter",
            "extra": "iterations: 7309\ncpu: 117259.8713914353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283550.25413825625,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 283528.1402142151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2191800.1826697914,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2187687.822014057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1800078.0662767543,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1799979.5321637406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1779718.0076336935,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779660.877862598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1793628.3834296816,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1793501.734104043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1076240.841435226,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1076170.7175925921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1738822.2271880792,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1738729.6089385427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2951.308051420601,
            "unit": "ns/iter",
            "extra": "iterations: 237337\ncpu: 2950.9954200145794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15923.54456776984,
            "unit": "ns/iter",
            "extra": "iterations: 43877\ncpu: 15922.312373225182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12526.008403210857,
            "unit": "ns/iter",
            "extra": "iterations: 55931\ncpu: 12526.03565107005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12182.479212367767,
            "unit": "ns/iter",
            "extra": "iterations: 57438\ncpu: 12181.849994777076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10242.159795625286,
            "unit": "ns/iter",
            "extra": "iterations: 68306\ncpu: 10241.439990630424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64477.630600789555,
            "unit": "ns/iter",
            "extra": "iterations: 10869\ncpu: 64473.04259821526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135769.1281207611,
            "unit": "ns/iter",
            "extra": "iterations: 5167\ncpu: 135756.80278691705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36303.784483654235,
            "unit": "ns/iter",
            "extra": "iterations: 19270\ncpu: 36301.19875454062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36300.23475420028,
            "unit": "ns/iter",
            "extra": "iterations: 19284\ncpu: 36296.567102261186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36462.5744025875,
            "unit": "ns/iter",
            "extra": "iterations: 19166\ncpu: 36460.05948032942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68294.46944146467,
            "unit": "ns/iter",
            "extra": "iterations: 10259\ncpu: 68287.55239302125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68486.0403233421,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 68480.62787855942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19632.9397607322,
            "unit": "ns/iter",
            "extra": "iterations: 35525\ncpu: 19632.391273750916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92544.32271705863,
            "unit": "ns/iter",
            "extra": "iterations: 7567\ncpu: 92543.63684419199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74652.85145351868,
            "unit": "ns/iter",
            "extra": "iterations: 9391\ncpu: 74646.0973272286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74574.59450537736,
            "unit": "ns/iter",
            "extra": "iterations: 9391\ncpu: 74569.04483015537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74822.65724042642,
            "unit": "ns/iter",
            "extra": "iterations: 9371\ncpu: 74815.74004908741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139953.22920000035,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 139947.9200000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 612410.6733800697,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 612396.9352014033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 511295.0745069577,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 511247.8451424404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 515143.7484662288,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 515103.6042944738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518378.21263940004,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 518352.11895910965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 334272.85755257576,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 334270.02868068987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 509082.7888970091,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 509065.81446311786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19276.40571175816,
            "unit": "ns/iter",
            "extra": "iterations: 36171\ncpu: 19275.742998534733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92428.22857142934,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 92425.95238095279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74190.25460902553,
            "unit": "ns/iter",
            "extra": "iterations: 9438\ncpu: 74186.97817334182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74886.80699689775,
            "unit": "ns/iter",
            "extra": "iterations: 9347\ncpu: 74887.00117684902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74890.07077943029,
            "unit": "ns/iter",
            "extra": "iterations: 9353\ncpu: 74888.92334010526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139544.9126271688,
            "unit": "ns/iter",
            "extra": "iterations: 5013\ncpu: 139542.32994214946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 608029.2031386524,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 608021.7959895373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 509818.65574959724,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 509801.45560406946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513402.96698462236,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 513404.40205428394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 517510.50628234795,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 517480.19216556463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 332269.2494073205,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 332264.62778568204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 500764.2303290609,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 500766.0228898426 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490746328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8141.936283617755,
            "unit": "ns/iter",
            "extra": "iterations: 86116\ncpu: 8141.513772121325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74886.68585787082,
            "unit": "ns/iter",
            "extra": "iterations: 11342\ncpu: 74883.23047081644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144231.9328296944,
            "unit": "ns/iter",
            "extra": "iterations: 6089\ncpu: 143938.29857119397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212602.67285155843,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 212595.48339843747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 280285.7379019092,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 280271.0945112048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 347521.14760001405,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 347497.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 413682.2812351523,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 413676.7695961992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 480583.96306503634,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 480570.6725468578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 547853.5258186486,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 547836.1460957184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6308.246088077887,
            "unit": "ns/iter",
            "extra": "iterations: 110879\ncpu: 6308.181891972327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5248.411182211419,
            "unit": "ns/iter",
            "extra": "iterations: 133301\ncpu: 5248.2734563131535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5266.203766608622,
            "unit": "ns/iter",
            "extra": "iterations: 133064\ncpu: 5266.202729513618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5295.566632641441,
            "unit": "ns/iter",
            "extra": "iterations: 132255\ncpu: 5295.560848361119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8520.427964912848,
            "unit": "ns/iter",
            "extra": "iterations: 81967\ncpu: 8520.302072785385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34775.35559406583,
            "unit": "ns/iter",
            "extra": "iterations: 23659\ncpu: 34774.18741282385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144854.82525747083,
            "unit": "ns/iter",
            "extra": "iterations: 5923\ncpu: 144852.6253587709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116919.46295287121,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 116919.36801961332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116349.32542050978,
            "unit": "ns/iter",
            "extra": "iterations: 7372\ncpu: 116348.08735756914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116653.47238094847,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 116652.58503401362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281206.8566343016,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 281203.8187702267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2258957.1167883268,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2258920.194647204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1855761.2928286816,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1855728.4860557765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1848499.8446214932,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1848496.4143426293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1864162.4008015364,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1864141.4829659283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1096553.820543111,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1096551.8299881932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1797379.6189555922,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1797348.1624758209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7258372.500000405,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7258360.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4102776.232455977,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4102704.8245613924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9021439.958333608,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 9021099.16666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35010.20194512789,
            "unit": "ns/iter",
            "extra": "iterations: 23546\ncpu: 35009.62371528068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144576.96947723947,
            "unit": "ns/iter",
            "extra": "iterations: 5930\ncpu: 144573.7942664418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117875.75895675838,
            "unit": "ns/iter",
            "extra": "iterations: 7285\ncpu: 117875.56623198352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 118203.45509642243,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 118201.95592286505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117870.09149608045,
            "unit": "ns/iter",
            "extra": "iterations: 7279\ncpu: 117869.10289874974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 286865.36339697964,
            "unit": "ns/iter",
            "extra": "iterations: 3038\ncpu: 286861.8499012511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2262902.9682926703,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2262897.804878033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1865697.9236947834,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1865661.6465863443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1867348.044176727,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1867314.65863455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1872729.3775100405,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1872707.429718872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1097861.8900709378,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1097861.7021276557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1806679.7170543522,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1806660.6589147279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7317330.689999721,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7317092.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4153508.830275182,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4153169.72477065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33655.7132115572,
            "unit": "ns/iter",
            "extra": "iterations: 24471\ncpu: 33655.33488619196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144070.72902683914,
            "unit": "ns/iter",
            "extra": "iterations: 5960\ncpu: 144067.95302013351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115863.98805646025,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 115862.90716612391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 116871.89987757227,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 116868.83417222177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 117186.13859625522,
            "unit": "ns/iter",
            "extra": "iterations: 7309\ncpu: 117184.82692570801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 282231.6020175629,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 282225.77286039654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2266082.9902677,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2266081.0218978026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1862216.318000037,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1862215.1999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1851330.0059524567,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1851292.2619047526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1862887.6220000165,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1862870.7999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1092758.0659599367,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1092734.5111896363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1799017.7969051828,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1799015.667311409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3020.944280348856,
            "unit": "ns/iter",
            "extra": "iterations: 231911\ncpu: 3020.9019839507387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16385.711355174546,
            "unit": "ns/iter",
            "extra": "iterations: 42703\ncpu: 16385.567758705514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12929.843960351653,
            "unit": "ns/iter",
            "extra": "iterations: 54076\ncpu: 12929.669354242265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12893.241538859142,
            "unit": "ns/iter",
            "extra": "iterations: 54248\ncpu: 12893.026471021969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10297.808639613817,
            "unit": "ns/iter",
            "extra": "iterations: 67966\ncpu: 10297.476679516256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64320.75465639382,
            "unit": "ns/iter",
            "extra": "iterations: 10899\ncpu: 64319.57977796094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 147073.091804651,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 147071.72500524018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37306.3810229026,
            "unit": "ns/iter",
            "extra": "iterations: 18907\ncpu: 37305.76506055925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37058.868574456064,
            "unit": "ns/iter",
            "extra": "iterations: 18870\ncpu: 37055.74986751523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37223.09051335307,
            "unit": "ns/iter",
            "extra": "iterations: 18837\ncpu: 37221.14455592777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72175.98238203174,
            "unit": "ns/iter",
            "extra": "iterations: 9706\ncpu: 72173.62456212581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67284.90732551778,
            "unit": "ns/iter",
            "extra": "iterations: 10402\ncpu: 67284.91636223745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20397.01474538518,
            "unit": "ns/iter",
            "extra": "iterations: 34248\ncpu: 20396.402709647406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96462.27138724527,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 96457.79032924559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77488.60261379549,
            "unit": "ns/iter",
            "extra": "iterations: 9029\ncpu: 77485.10355521092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77958.29397403028,
            "unit": "ns/iter",
            "extra": "iterations: 9011\ncpu: 77953.50127621775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78375.22618514975,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78374.09436493718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144927.39654813785,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 144922.76980661138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 643832.6873291043,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 643795.1686417476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 537652.9608895802,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 537620.7055214696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 536771.9132770302,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 536764.46661551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 543015.2585403651,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 543008.6180124143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 348853.2528678475,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 348852.91770573915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 523331.11119400937,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 523308.5820895528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20231.155221642402,
            "unit": "ns/iter",
            "extra": "iterations: 34673\ncpu: 20230.046433824755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96510.98234482936,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 96506.1103448271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77480.89542844401,
            "unit": "ns/iter",
            "extra": "iterations: 9056\ncpu: 77477.38515901042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79086.28201710511,
            "unit": "ns/iter",
            "extra": "iterations: 9003\ncpu: 79086.22681328394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78048.19306435356,
            "unit": "ns/iter",
            "extra": "iterations: 8997\ncpu: 78045.77081249318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142009.69078415266,
            "unit": "ns/iter",
            "extra": "iterations: 4948\ncpu: 142004.02182700165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 636346.0527272867,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 636318.7272727347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 534417.3264683371,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 534390.0076277653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 537900.1930769023,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 537900.3846153825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 539926.3906009048,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 539901.1556240341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 348172.6912785059,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 348158.57284440123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 523547.38914024946,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 523531.37254901737 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573966671,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8009.0406677445935,
            "unit": "ns/iter",
            "extra": "iterations: 87219\ncpu: 8008.87077356998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75337.67778270335,
            "unit": "ns/iter",
            "extra": "iterations: 11275\ncpu: 75336.39911308204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 142940.01843317854,
            "unit": "ns/iter",
            "extra": "iterations: 6076\ncpu: 142936.58657011195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 208435.84422473513,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 208432.0954907162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275680.9654516674,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 275670.52297939773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 339044.71400549344,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 339037.62259709695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 405101.27141525195,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 405080.1675977655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 470621.48160174384,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 470602.27272727253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 537868.5354282139,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 537836.475662354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6191.052762259255,
            "unit": "ns/iter",
            "extra": "iterations: 112770\ncpu: 6190.743105435845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5162.717594772962,
            "unit": "ns/iter",
            "extra": "iterations: 135904\ncpu: 5162.407287497063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5150.539248770394,
            "unit": "ns/iter",
            "extra": "iterations: 136017\ncpu: 5150.275333230397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5181.965621025268,
            "unit": "ns/iter",
            "extra": "iterations: 135228\ncpu: 5181.719022687602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8753.135524784375,
            "unit": "ns/iter",
            "extra": "iterations: 82472\ncpu: 8752.677272286355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35015.38766145307,
            "unit": "ns/iter",
            "extra": "iterations: 23536\ncpu: 35013.689666893246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146885.85487451282,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 146879.37510671004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118150.90554640024,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 118145.0302031853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 119047.15398425858,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 119039.80113244009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117813.91605890161,
            "unit": "ns/iter",
            "extra": "iterations: 7267\ncpu: 117808.42163203513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 284967.06878306053,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 284952.71164021146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2210486.5980861685,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2210408.6124401917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1803731.7751938023,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1803622.868217053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1802534.1533980414,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1802436.1165048522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1810404.9078431216,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1810316.6666666644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1091273.2485276936,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1091233.3333333337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1756539.7026515293,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1756439.7727272746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7238998.839999909,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7238135.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3996235.1623932947,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3996135.0427350444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9488256.297520986,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 9488081.818181828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34403.10498458001,
            "unit": "ns/iter",
            "extra": "iterations: 23994\ncpu: 34401.93381678755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145716.01961118708,
            "unit": "ns/iter",
            "extra": "iterations: 5864\ncpu: 145715.1432469308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118172.55224500733,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 118170.59312638588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117860.04481716377,
            "unit": "ns/iter",
            "extra": "iterations: 7274\ncpu: 117858.15232334404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118644.47472924365,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 118640.43321299674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 291055.6249584088,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 291049.75041597226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2242330.087167,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2242263.6803874015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1832846.781065104,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1832780.8678500978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1827161.7929687123,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1827112.4999999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1829392.0998042547,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1829384.9315068522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1092348.69058823,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1092327.7647058803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1770281.390891853,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1770230.5502846357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7284896.400000207,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7284571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4088044.1101321974,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4087872.2466960493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33387.622974069025,
            "unit": "ns/iter",
            "extra": "iterations: 24680\ncpu: 33386.0818476499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145108.34998318128,
            "unit": "ns/iter",
            "extra": "iterations: 5946\ncpu: 145100.63908509928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116633.73944527605,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 116630.83754611356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 118227.5199337823,
            "unit": "ns/iter",
            "extra": "iterations: 7249\ncpu: 118223.78259070199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 118714.81934585897,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 118712.17814892041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 284362.0814332334,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 284359.28338762146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2214396.007159904,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2214346.5393794766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1810034.0582523616,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1810005.6310679582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1806520.160852716,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1806442.0542635578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1818391.922179,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1818286.1867704415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1091090.8729412018,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1091047.5294117648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1760595.3795066464,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1760529.4117647063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2997.8711312789483,
            "unit": "ns/iter",
            "extra": "iterations: 233152\ncpu: 2997.7109353554742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16192.94783414438,
            "unit": "ns/iter",
            "extra": "iterations: 43170\ncpu: 16191.59601575172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12293.35924462047,
            "unit": "ns/iter",
            "extra": "iterations: 56925\ncpu: 12292.637681159427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11963.621925581518,
            "unit": "ns/iter",
            "extra": "iterations: 58507\ncpu: 11962.980498060024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10394.269693338121,
            "unit": "ns/iter",
            "extra": "iterations: 67599\ncpu: 10393.810559327798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64615.80009234018,
            "unit": "ns/iter",
            "extra": "iterations: 10830\ncpu: 64612.336103416994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145174.76994818312,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 145166.92227979313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36543.1052878827,
            "unit": "ns/iter",
            "extra": "iterations: 19157\ncpu: 36541.61403142453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36832.93461477737,
            "unit": "ns/iter",
            "extra": "iterations: 19041\ncpu: 36831.8313113807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36890.689018923564,
            "unit": "ns/iter",
            "extra": "iterations: 18969\ncpu: 36889.69898255041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74952.99914401479,
            "unit": "ns/iter",
            "extra": "iterations: 9346\ncpu: 74948.79092659938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66627.61768344806,
            "unit": "ns/iter",
            "extra": "iterations: 10507\ncpu: 66623.53668982556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20249.35573042222,
            "unit": "ns/iter",
            "extra": "iterations: 34439\ncpu: 20247.864339847358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96580.19886990245,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 96574.11797133448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77783.16130106349,
            "unit": "ns/iter",
            "extra": "iterations: 9008\ncpu: 77780.08436944931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77893.42866689173,
            "unit": "ns/iter",
            "extra": "iterations: 8979\ncpu: 77888.50651520079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77956.40630570876,
            "unit": "ns/iter",
            "extra": "iterations: 8976\ncpu: 77953.46479500966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141234.04785944978,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 141227.6857835218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 624530.335409261,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 624493.5053380706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 521696.3586875396,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 521684.93661446584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 527484.1660377446,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 527444.9056603768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 529244.6611195428,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 529214.7503782231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 341514.43344712193,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 341498.9273525137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 514245.7878120408,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 514211.8942731324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20023.326989321813,
            "unit": "ns/iter",
            "extra": "iterations: 34836\ncpu: 20022.023194396534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96297.5797938114,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 96294.03436426121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77029.50412859532,
            "unit": "ns/iter",
            "extra": "iterations: 9083\ncpu: 77028.9662005949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77228.43819728335,
            "unit": "ns/iter",
            "extra": "iterations: 9053\ncpu: 77224.80945542823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77811.92791684975,
            "unit": "ns/iter",
            "extra": "iterations: 8948\ncpu: 77807.82297720063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139919.16364361762,
            "unit": "ns/iter",
            "extra": "iterations: 5017\ncpu: 139909.02930037884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 622885.9431616633,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 622870.2486678561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 521467.7363703885,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 521442.34503360494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 527912.4144687206,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 527886.0587792046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 528217.4194277129,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 528178.6144578303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342582.6651982321,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 342557.366617719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 513319.6627566656,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 513293.54838709754 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771652346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7990.204198408003,
            "unit": "ns/iter",
            "extra": "iterations: 87557\ncpu: 7989.968820311341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72155.59279401864,
            "unit": "ns/iter",
            "extra": "iterations: 11768\ncpu: 72152.47280761387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137864.17167245413,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 137860.8757508694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204076.28324375767,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 204068.42720261743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 271027.46161108685,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 271016.1736941471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333779.5703215824,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 333753.7776055793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 396720.83985441487,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 396694.76797088265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 460709.68061440554,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 460689.6186440677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 525545.1685731579,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 525500.3612281757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6097.25119583965,
            "unit": "ns/iter",
            "extra": "iterations: 114982\ncpu: 6097.150858395229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5048.4523678814085,
            "unit": "ns/iter",
            "extra": "iterations: 138436\ncpu: 5048.247565662106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5111.69441242986,
            "unit": "ns/iter",
            "extra": "iterations: 137090\ncpu: 5111.428258808079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5132.073869707122,
            "unit": "ns/iter",
            "extra": "iterations: 136646\ncpu: 5131.870673126171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8381.019958624007,
            "unit": "ns/iter",
            "extra": "iterations: 83623\ncpu: 8380.581897324886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34563.82868592462,
            "unit": "ns/iter",
            "extra": "iterations: 23956\ncpu: 34562.88612456169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146007.90519877867,
            "unit": "ns/iter",
            "extra": "iterations: 5886\ncpu: 146001.630988787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 115898.28345070464,
            "unit": "ns/iter",
            "extra": "iterations: 7384\ncpu: 115897.27789815814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115694.70604099697,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 115688.12028047464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116652.86491989705,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 116650.04072766755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282390.1500810361,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 282381.0048622365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2168102.545454606,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2168028.2051282097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1770200.2148288887,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1770089.353612165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1771951.3676190346,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1771883.4285714247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1780050.697318002,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1779941.1877394628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1060381.8981693052,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1060325.8581235684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1724667.8129629977,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1724574.4444444447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7055380.300000139,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7054960.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3888368.6473028865,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3888159.7510373485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9623954.63709655,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 9623497.580645168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35282.51923570058,
            "unit": "ns/iter",
            "extra": "iterations: 23394\ncpu: 35281.88851842346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144393.43615229017,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 144391.54312668505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118109.74379481483,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 118109.25261996653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117004.35286901474,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 117002.20798691543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118125.42703596788,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 118123.0398236185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 286462.82999672176,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 286448.7036429271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2194871.797169801,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2194859.4339622525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1785982.5517241175,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1785938.6973180065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1783131.507662779,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1783095.019157082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1788340.5684007613,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1788290.7514450832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1077974.019517804,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1077968.541905855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1737768.6523365097,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1737528.7850467255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7114003.620000062,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7113771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4017041.9741379498,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4016915.5172413783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33515.64221969922,
            "unit": "ns/iter",
            "extra": "iterations: 24652\ncpu: 33512.78598085337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144764.47735368472,
            "unit": "ns/iter",
            "extra": "iterations: 5895\ncpu: 144762.90076335848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115814.11106602101,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 115812.55411255444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 116568.85409924337,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 116567.48921251402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 117673.48054076733,
            "unit": "ns/iter",
            "extra": "iterations: 7323\ncpu: 117673.03017888853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 282801.6286455027,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 282798.41218405793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2180489.067915677,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2180449.6487119463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1780448.833333322,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1780428.9272030608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1774084.7385496208,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1774048.6641221314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1789594.1532566461,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1789543.486590034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1063909.9130435016,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1063890.1601830649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1728390.2881040224,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1728382.7137546467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2920.4411924253004,
            "unit": "ns/iter",
            "extra": "iterations: 239646\ncpu: 2920.367124842469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15915.911739912848,
            "unit": "ns/iter",
            "extra": "iterations: 43893\ncpu: 15915.649420180922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12447.349992886919,
            "unit": "ns/iter",
            "extra": "iterations: 56244\ncpu: 12446.829884076431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12074.116867886654,
            "unit": "ns/iter",
            "extra": "iterations: 57980\ncpu: 12073.57709555021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10175.647461120328,
            "unit": "ns/iter",
            "extra": "iterations: 68869\ncpu: 10175.167346701692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64481.15127520658,
            "unit": "ns/iter",
            "extra": "iterations: 10861\ncpu: 64477.819721941065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141183.8545491141,
            "unit": "ns/iter",
            "extra": "iterations: 4957\ncpu: 141182.9735727252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36000.45691475511,
            "unit": "ns/iter",
            "extra": "iterations: 19415\ncpu: 35998.768993046884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35902.465911417916,
            "unit": "ns/iter",
            "extra": "iterations: 19508\ncpu: 35902.598933770525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36263.22322353085,
            "unit": "ns/iter",
            "extra": "iterations: 19308\ncpu: 36262.39900559366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73532.90825881004,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73531.32035770666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65199.430684775514,
            "unit": "ns/iter",
            "extra": "iterations: 10748\ncpu: 65197.971715668216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19883.351731570096,
            "unit": "ns/iter",
            "extra": "iterations: 35257\ncpu: 19883.22035340488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93381.47763387507,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 93377.76739217534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75393.26725246351,
            "unit": "ns/iter",
            "extra": "iterations: 9332\ncpu: 75390.47363909126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75198.2877535688,
            "unit": "ns/iter",
            "extra": "iterations: 9317\ncpu: 75196.898143179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75370.54204802802,
            "unit": "ns/iter",
            "extra": "iterations: 9287\ncpu: 75369.430386561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140231.15812649325,
            "unit": "ns/iter",
            "extra": "iterations: 4996\ncpu: 140230.3242594088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 618617.4280701419,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 618606.7543859583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 516901.8365243417,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 516883.2842415291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 514568.4621722691,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 514551.76029963046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 517375.52067950123,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517366.1742983722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335758.59562042885,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 335756.4963503654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 503011.2053123032,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 502995.62096195313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19756.445344355758,
            "unit": "ns/iter",
            "extra": "iterations: 35559\ncpu: 19755.954891870126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92790.64039736004,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 92788.9933774828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75187.51443908071,
            "unit": "ns/iter",
            "extra": "iterations: 9315\ncpu: 75184.88459473923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74932.45020857808,
            "unit": "ns/iter",
            "extra": "iterations: 9349\ncpu: 74932.6238100331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75574.99535536961,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 75573.40678332323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139260.31540147745,
            "unit": "ns/iter",
            "extra": "iterations: 5019\ncpu: 139256.8838414028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 610415.955574962,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 610406.3588850244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 513757.87702508125,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 513739.8379970478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 514478.8376193907,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 514470.3894195434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 514247.2026431086,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 514234.58149780106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 335148.35601341334,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 335133.82846190897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 501862.30940417957,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 501839.12419239327 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}