window.BENCHMARK_DATA = {
  "lastUpdate": 1702409107644,
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
      }
    ]
  }
}