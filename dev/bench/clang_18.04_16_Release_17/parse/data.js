window.BENCHMARK_DATA = {
  "lastUpdate": 1702490344615,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-16 18.04 Release c++-17": [
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
        "date": 1702490341176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.7571154980826,
            "unit": "ns/iter",
            "extra": "iterations: 1252653\ncpu: 559.7261971192343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5340.850449999834,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5340.677000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10332.893865973456,
            "unit": "ns/iter",
            "extra": "iterations: 76149\ncpu: 10332.289327502658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15079.83595077198,
            "unit": "ns/iter",
            "extra": "iterations: 52978\ncpu: 15078.517497829293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20248.226444322063,
            "unit": "ns/iter",
            "extra": "iterations: 41317\ncpu: 20246.85722583924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25044.23283153876,
            "unit": "ns/iter",
            "extra": "iterations: 32749\ncpu: 25042.48068643315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29680.478531092376,
            "unit": "ns/iter",
            "extra": "iterations: 28157\ncpu: 29678.406790496138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34950.026066943676,
            "unit": "ns/iter",
            "extra": "iterations: 23900\ncpu: 34948.364016736385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38903.44123231537,
            "unit": "ns/iter",
            "extra": "iterations: 21066\ncpu: 38900.86869837655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.828024328925,
            "unit": "ns/iter",
            "extra": "iterations: 1302975\ncpu: 538.7900765555738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 429.5418218191159,
            "unit": "ns/iter",
            "extra": "iterations: 1640591\ncpu: 429.5148516601644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.79230321150453,
            "unit": "ns/iter",
            "extra": "iterations: 1660069\ncpu: 422.74140412235874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.7989221017197,
            "unit": "ns/iter",
            "extra": "iterations: 1656557\ncpu: 421.76514300443694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.9206715401709,
            "unit": "ns/iter",
            "extra": "iterations: 827471\ncpu: 846.856143598991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2072.63240627835,
            "unit": "ns/iter",
            "extra": "iterations: 386277\ncpu: 2072.5088472779894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10802.571185433488,
            "unit": "ns/iter",
            "extra": "iterations: 75795\ncpu: 10801.790355564366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8716.485934737397,
            "unit": "ns/iter",
            "extra": "iterations: 93315\ncpu: 8716.21818571506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8556.863499244995,
            "unit": "ns/iter",
            "extra": "iterations: 95472\ncpu: 8556.10231271994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8137.196355593209,
            "unit": "ns/iter",
            "extra": "iterations: 100812\ncpu: 8136.302225925461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34902.986911873195,
            "unit": "ns/iter",
            "extra": "iterations: 23762\ncpu: 34901.19518559044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259562.30127297266,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 259546.70438472443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197660.6656764197,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197645.38391224874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191001.97016627082,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 190987.9298565247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194834.17568487098,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 194815.259225719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98792.63356561211,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 98785.48199767733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189074.99956634376,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 189050.84562012163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5435.802550951787,
            "unit": "ns/iter",
            "extra": "iterations: 148180\ncpu: 5435.230125523004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25436.91020683578,
            "unit": "ns/iter",
            "extra": "iterations: 32586\ncpu: 25434.671331246547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18901.187448910325,
            "unit": "ns/iter",
            "extra": "iterations: 42817\ncpu: 18899.30167923953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19372.251845832307,
            "unit": "ns/iter",
            "extra": "iterations: 43070\ncpu: 19333.71720455067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18701.256278242487,
            "unit": "ns/iter",
            "extra": "iterations: 44479\ncpu: 18699.82688459719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51214.054281295976,
            "unit": "ns/iter",
            "extra": "iterations: 16175\ncpu: 51210.21329211736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269520.2926154077,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 269499.2923076908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201954.21646269795,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 201944.7084233268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207229.97129873035,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 207223.6546280782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206493.1268674331,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 206485.41617263542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110906.81800765933,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 110901.85185185171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197586.8474807077,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 197577.507943714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797803.4601176116,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 797779.3450881591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434071.63343257504,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 434047.51984126796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2006.4824990104694,
            "unit": "ns/iter",
            "extra": "iterations: 401663\ncpu: 2006.4108469039934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11578.237151522455,
            "unit": "ns/iter",
            "extra": "iterations: 72207\ncpu: 11577.2390488457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8169.342773594817,
            "unit": "ns/iter",
            "extra": "iterations: 98832\ncpu: 8168.464667314236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8102.889890694883,
            "unit": "ns/iter",
            "extra": "iterations: 100818\ncpu: 8102.5719613561105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7768.359258134345,
            "unit": "ns/iter",
            "extra": "iterations: 105356\ncpu: 7767.995178252756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34648.40328578673,
            "unit": "ns/iter",
            "extra": "iterations: 24469\ncpu: 34645.99288896163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259642.74978077394,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 259622.39111370812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192853.27647838616,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 192840.48984995615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196263.4881082213,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 196246.7815841142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194612.21148368545,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 194600.65746219523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96371.5366120208,
            "unit": "ns/iter",
            "extra": "iterations: 9150\ncpu: 96364.40437158447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173752.1687012331,
            "unit": "ns/iter",
            "extra": "iterations: 4997\ncpu: 173739.66379827834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.2752180579382,
            "unit": "ns/iter",
            "extra": "iterations: 3859754\ncpu: 181.26090419234072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1446.4279728692297,
            "unit": "ns/iter",
            "extra": "iterations: 487122\ncpu: 1446.3294616133037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1099.8414996894087,
            "unit": "ns/iter",
            "extra": "iterations: 637412\ncpu: 1099.8096992212206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1155.0776454561294,
            "unit": "ns/iter",
            "extra": "iterations: 634229\ncpu: 1154.9626396774668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 839.8446936351469,
            "unit": "ns/iter",
            "extra": "iterations: 833810\ncpu: 839.7573787793399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9420.805403077129,
            "unit": "ns/iter",
            "extra": "iterations: 74328\ncpu: 9420.000538155267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10728.269844171267,
            "unit": "ns/iter",
            "extra": "iterations: 60194\ncpu: 10727.50440243206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2683.9537389291622,
            "unit": "ns/iter",
            "extra": "iterations: 261278\ncpu: 2683.7808770734678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2715.172858387501,
            "unit": "ns/iter",
            "extra": "iterations: 258275\ncpu: 2714.9425999419213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2708.624472785774,
            "unit": "ns/iter",
            "extra": "iterations: 258434\ncpu: 2708.4060146884867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5006.0495299999275,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5005.9190000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5178.790285109048,
            "unit": "ns/iter",
            "extra": "iterations: 136018\ncpu: 5178.338896322561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1898.6870121557233,
            "unit": "ns/iter",
            "extra": "iterations: 368714\ncpu: 1898.5058880324545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9850.394507325558,
            "unit": "ns/iter",
            "extra": "iterations: 70858\ncpu: 9849.58790821078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7853.979469938585,
            "unit": "ns/iter",
            "extra": "iterations: 89235\ncpu: 7853.702022748955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7751.429396733017,
            "unit": "ns/iter",
            "extra": "iterations: 90010\ncpu: 7751.039884457371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7717.68586439686,
            "unit": "ns/iter",
            "extra": "iterations: 90219\ncpu: 7717.494097695678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17411.335030802285,
            "unit": "ns/iter",
            "extra": "iterations: 40256\ncpu: 17410.60463036581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54044.4676516308,
            "unit": "ns/iter",
            "extra": "iterations: 12860\ncpu: 54042.099533437264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41206.689440619906,
            "unit": "ns/iter",
            "extra": "iterations: 16554\ncpu: 41205.170955660215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43103.93584744996,
            "unit": "ns/iter",
            "extra": "iterations: 16414\ncpu: 43101.51699768504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42107.988584882056,
            "unit": "ns/iter",
            "extra": "iterations: 16557\ncpu: 42105.701515975285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25163.202450450037,
            "unit": "ns/iter",
            "extra": "iterations: 27750\ncpu: 25161.917117117384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40653.15558613929,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 40650.33810065249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1880.5301831359852,
            "unit": "ns/iter",
            "extra": "iterations: 373056\ncpu: 1880.4613784525654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10079.97423864257,
            "unit": "ns/iter",
            "extra": "iterations: 70105\ncpu: 10079.573496897623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7867.548550095026,
            "unit": "ns/iter",
            "extra": "iterations: 88661\ncpu: 7867.092633739653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7831.302224370974,
            "unit": "ns/iter",
            "extra": "iterations: 88924\ncpu: 7831.04898565077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7690.008529770705,
            "unit": "ns/iter",
            "extra": "iterations: 90741\ncpu: 7689.6265194344005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17453.24305954532,
            "unit": "ns/iter",
            "extra": "iterations: 40019\ncpu: 17452.610010245156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52972.78892866027,
            "unit": "ns/iter",
            "extra": "iterations: 13133\ncpu: 52970.57031904343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41648.807408292916,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 41646.617436874054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41836.255506078305,
            "unit": "ns/iter",
            "extra": "iterations: 16618\ncpu: 41834.09555903166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41894.45444279296,
            "unit": "ns/iter",
            "extra": "iterations: 16825\ncpu: 41893.622585438265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25522.773793603123,
            "unit": "ns/iter",
            "extra": "iterations: 27665\ncpu: 25521.460328935642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41714.487214238274,
            "unit": "ns/iter",
            "extra": "iterations: 16972\ncpu: 41713.24534527514 ns\nthreads: 1"
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
        "date": 1702490341176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.7571154980826,
            "unit": "ns/iter",
            "extra": "iterations: 1252653\ncpu: 559.7261971192343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5340.850449999834,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5340.677000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10332.893865973456,
            "unit": "ns/iter",
            "extra": "iterations: 76149\ncpu: 10332.289327502658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15079.83595077198,
            "unit": "ns/iter",
            "extra": "iterations: 52978\ncpu: 15078.517497829293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20248.226444322063,
            "unit": "ns/iter",
            "extra": "iterations: 41317\ncpu: 20246.85722583924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25044.23283153876,
            "unit": "ns/iter",
            "extra": "iterations: 32749\ncpu: 25042.48068643315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29680.478531092376,
            "unit": "ns/iter",
            "extra": "iterations: 28157\ncpu: 29678.406790496138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34950.026066943676,
            "unit": "ns/iter",
            "extra": "iterations: 23900\ncpu: 34948.364016736385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38903.44123231537,
            "unit": "ns/iter",
            "extra": "iterations: 21066\ncpu: 38900.86869837655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.828024328925,
            "unit": "ns/iter",
            "extra": "iterations: 1302975\ncpu: 538.7900765555738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 429.5418218191159,
            "unit": "ns/iter",
            "extra": "iterations: 1640591\ncpu: 429.5148516601644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.79230321150453,
            "unit": "ns/iter",
            "extra": "iterations: 1660069\ncpu: 422.74140412235874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.7989221017197,
            "unit": "ns/iter",
            "extra": "iterations: 1656557\ncpu: 421.76514300443694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.9206715401709,
            "unit": "ns/iter",
            "extra": "iterations: 827471\ncpu: 846.856143598991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2072.63240627835,
            "unit": "ns/iter",
            "extra": "iterations: 386277\ncpu: 2072.5088472779894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10802.571185433488,
            "unit": "ns/iter",
            "extra": "iterations: 75795\ncpu: 10801.790355564366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8716.485934737397,
            "unit": "ns/iter",
            "extra": "iterations: 93315\ncpu: 8716.21818571506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8556.863499244995,
            "unit": "ns/iter",
            "extra": "iterations: 95472\ncpu: 8556.10231271994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8137.196355593209,
            "unit": "ns/iter",
            "extra": "iterations: 100812\ncpu: 8136.302225925461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34902.986911873195,
            "unit": "ns/iter",
            "extra": "iterations: 23762\ncpu: 34901.19518559044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259562.30127297266,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 259546.70438472443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197660.6656764197,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197645.38391224874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191001.97016627082,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 190987.9298565247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194834.17568487098,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 194815.259225719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98792.63356561211,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 98785.48199767733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189074.99956634376,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 189050.84562012163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5435.802550951787,
            "unit": "ns/iter",
            "extra": "iterations: 148180\ncpu: 5435.230125523004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25436.91020683578,
            "unit": "ns/iter",
            "extra": "iterations: 32586\ncpu: 25434.671331246547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18901.187448910325,
            "unit": "ns/iter",
            "extra": "iterations: 42817\ncpu: 18899.30167923953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19372.251845832307,
            "unit": "ns/iter",
            "extra": "iterations: 43070\ncpu: 19333.71720455067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18701.256278242487,
            "unit": "ns/iter",
            "extra": "iterations: 44479\ncpu: 18699.82688459719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51214.054281295976,
            "unit": "ns/iter",
            "extra": "iterations: 16175\ncpu: 51210.21329211736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269520.2926154077,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 269499.2923076908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201954.21646269795,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 201944.7084233268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207229.97129873035,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 207223.6546280782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206493.1268674331,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 206485.41617263542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110906.81800765933,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 110901.85185185171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197586.8474807077,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 197577.507943714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797803.4601176116,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 797779.3450881591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434071.63343257504,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 434047.51984126796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2006.4824990104694,
            "unit": "ns/iter",
            "extra": "iterations: 401663\ncpu: 2006.4108469039934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11578.237151522455,
            "unit": "ns/iter",
            "extra": "iterations: 72207\ncpu: 11577.2390488457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8169.342773594817,
            "unit": "ns/iter",
            "extra": "iterations: 98832\ncpu: 8168.464667314236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8102.889890694883,
            "unit": "ns/iter",
            "extra": "iterations: 100818\ncpu: 8102.5719613561105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7768.359258134345,
            "unit": "ns/iter",
            "extra": "iterations: 105356\ncpu: 7767.995178252756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34648.40328578673,
            "unit": "ns/iter",
            "extra": "iterations: 24469\ncpu: 34645.99288896163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259642.74978077394,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 259622.39111370812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192853.27647838616,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 192840.48984995615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196263.4881082213,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 196246.7815841142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194612.21148368545,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 194600.65746219523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96371.5366120208,
            "unit": "ns/iter",
            "extra": "iterations: 9150\ncpu: 96364.40437158447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173752.1687012331,
            "unit": "ns/iter",
            "extra": "iterations: 4997\ncpu: 173739.66379827834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.2752180579382,
            "unit": "ns/iter",
            "extra": "iterations: 3859754\ncpu: 181.26090419234072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1446.4279728692297,
            "unit": "ns/iter",
            "extra": "iterations: 487122\ncpu: 1446.3294616133037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1099.8414996894087,
            "unit": "ns/iter",
            "extra": "iterations: 637412\ncpu: 1099.8096992212206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1155.0776454561294,
            "unit": "ns/iter",
            "extra": "iterations: 634229\ncpu: 1154.9626396774668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 839.8446936351469,
            "unit": "ns/iter",
            "extra": "iterations: 833810\ncpu: 839.7573787793399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9420.805403077129,
            "unit": "ns/iter",
            "extra": "iterations: 74328\ncpu: 9420.000538155267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10728.269844171267,
            "unit": "ns/iter",
            "extra": "iterations: 60194\ncpu: 10727.50440243206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2683.9537389291622,
            "unit": "ns/iter",
            "extra": "iterations: 261278\ncpu: 2683.7808770734678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2715.172858387501,
            "unit": "ns/iter",
            "extra": "iterations: 258275\ncpu: 2714.9425999419213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2708.624472785774,
            "unit": "ns/iter",
            "extra": "iterations: 258434\ncpu: 2708.4060146884867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5006.0495299999275,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5005.9190000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5178.790285109048,
            "unit": "ns/iter",
            "extra": "iterations: 136018\ncpu: 5178.338896322561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1898.6870121557233,
            "unit": "ns/iter",
            "extra": "iterations: 368714\ncpu: 1898.5058880324545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9850.394507325558,
            "unit": "ns/iter",
            "extra": "iterations: 70858\ncpu: 9849.58790821078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7853.979469938585,
            "unit": "ns/iter",
            "extra": "iterations: 89235\ncpu: 7853.702022748955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7751.429396733017,
            "unit": "ns/iter",
            "extra": "iterations: 90010\ncpu: 7751.039884457371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7717.68586439686,
            "unit": "ns/iter",
            "extra": "iterations: 90219\ncpu: 7717.494097695678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17411.335030802285,
            "unit": "ns/iter",
            "extra": "iterations: 40256\ncpu: 17410.60463036581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54044.4676516308,
            "unit": "ns/iter",
            "extra": "iterations: 12860\ncpu: 54042.099533437264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41206.689440619906,
            "unit": "ns/iter",
            "extra": "iterations: 16554\ncpu: 41205.170955660215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43103.93584744996,
            "unit": "ns/iter",
            "extra": "iterations: 16414\ncpu: 43101.51699768504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42107.988584882056,
            "unit": "ns/iter",
            "extra": "iterations: 16557\ncpu: 42105.701515975285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25163.202450450037,
            "unit": "ns/iter",
            "extra": "iterations: 27750\ncpu: 25161.917117117384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40653.15558613929,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 40650.33810065249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1880.5301831359852,
            "unit": "ns/iter",
            "extra": "iterations: 373056\ncpu: 1880.4613784525654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10079.97423864257,
            "unit": "ns/iter",
            "extra": "iterations: 70105\ncpu: 10079.573496897623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7867.548550095026,
            "unit": "ns/iter",
            "extra": "iterations: 88661\ncpu: 7867.092633739653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7831.302224370974,
            "unit": "ns/iter",
            "extra": "iterations: 88924\ncpu: 7831.04898565077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7690.008529770705,
            "unit": "ns/iter",
            "extra": "iterations: 90741\ncpu: 7689.6265194344005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17453.24305954532,
            "unit": "ns/iter",
            "extra": "iterations: 40019\ncpu: 17452.610010245156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52972.78892866027,
            "unit": "ns/iter",
            "extra": "iterations: 13133\ncpu: 52970.57031904343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41648.807408292916,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 41646.617436874054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41836.255506078305,
            "unit": "ns/iter",
            "extra": "iterations: 16618\ncpu: 41834.09555903166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41894.45444279296,
            "unit": "ns/iter",
            "extra": "iterations: 16825\ncpu: 41893.622585438265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25522.773793603123,
            "unit": "ns/iter",
            "extra": "iterations: 27665\ncpu: 25521.460328935642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41714.487214238274,
            "unit": "ns/iter",
            "extra": "iterations: 16972\ncpu: 41713.24534527514 ns\nthreads: 1"
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
        "date": 1702490341176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.7571154980826,
            "unit": "ns/iter",
            "extra": "iterations: 1252653\ncpu: 559.7261971192343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5340.850449999834,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5340.677000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10332.893865973456,
            "unit": "ns/iter",
            "extra": "iterations: 76149\ncpu: 10332.289327502658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15079.83595077198,
            "unit": "ns/iter",
            "extra": "iterations: 52978\ncpu: 15078.517497829293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20248.226444322063,
            "unit": "ns/iter",
            "extra": "iterations: 41317\ncpu: 20246.85722583924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25044.23283153876,
            "unit": "ns/iter",
            "extra": "iterations: 32749\ncpu: 25042.48068643315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29680.478531092376,
            "unit": "ns/iter",
            "extra": "iterations: 28157\ncpu: 29678.406790496138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34950.026066943676,
            "unit": "ns/iter",
            "extra": "iterations: 23900\ncpu: 34948.364016736385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38903.44123231537,
            "unit": "ns/iter",
            "extra": "iterations: 21066\ncpu: 38900.86869837655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.828024328925,
            "unit": "ns/iter",
            "extra": "iterations: 1302975\ncpu: 538.7900765555738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 429.5418218191159,
            "unit": "ns/iter",
            "extra": "iterations: 1640591\ncpu: 429.5148516601644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.79230321150453,
            "unit": "ns/iter",
            "extra": "iterations: 1660069\ncpu: 422.74140412235874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.7989221017197,
            "unit": "ns/iter",
            "extra": "iterations: 1656557\ncpu: 421.76514300443694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.9206715401709,
            "unit": "ns/iter",
            "extra": "iterations: 827471\ncpu: 846.856143598991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2072.63240627835,
            "unit": "ns/iter",
            "extra": "iterations: 386277\ncpu: 2072.5088472779894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10802.571185433488,
            "unit": "ns/iter",
            "extra": "iterations: 75795\ncpu: 10801.790355564366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8716.485934737397,
            "unit": "ns/iter",
            "extra": "iterations: 93315\ncpu: 8716.21818571506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8556.863499244995,
            "unit": "ns/iter",
            "extra": "iterations: 95472\ncpu: 8556.10231271994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8137.196355593209,
            "unit": "ns/iter",
            "extra": "iterations: 100812\ncpu: 8136.302225925461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34902.986911873195,
            "unit": "ns/iter",
            "extra": "iterations: 23762\ncpu: 34901.19518559044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259562.30127297266,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 259546.70438472443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197660.6656764197,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197645.38391224874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191001.97016627082,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 190987.9298565247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194834.17568487098,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 194815.259225719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98792.63356561211,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 98785.48199767733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189074.99956634376,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 189050.84562012163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5435.802550951787,
            "unit": "ns/iter",
            "extra": "iterations: 148180\ncpu: 5435.230125523004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25436.91020683578,
            "unit": "ns/iter",
            "extra": "iterations: 32586\ncpu: 25434.671331246547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18901.187448910325,
            "unit": "ns/iter",
            "extra": "iterations: 42817\ncpu: 18899.30167923953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19372.251845832307,
            "unit": "ns/iter",
            "extra": "iterations: 43070\ncpu: 19333.71720455067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18701.256278242487,
            "unit": "ns/iter",
            "extra": "iterations: 44479\ncpu: 18699.82688459719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51214.054281295976,
            "unit": "ns/iter",
            "extra": "iterations: 16175\ncpu: 51210.21329211736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269520.2926154077,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 269499.2923076908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201954.21646269795,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 201944.7084233268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207229.97129873035,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 207223.6546280782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206493.1268674331,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 206485.41617263542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110906.81800765933,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 110901.85185185171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197586.8474807077,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 197577.507943714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797803.4601176116,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 797779.3450881591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434071.63343257504,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 434047.51984126796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2006.4824990104694,
            "unit": "ns/iter",
            "extra": "iterations: 401663\ncpu: 2006.4108469039934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11578.237151522455,
            "unit": "ns/iter",
            "extra": "iterations: 72207\ncpu: 11577.2390488457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8169.342773594817,
            "unit": "ns/iter",
            "extra": "iterations: 98832\ncpu: 8168.464667314236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8102.889890694883,
            "unit": "ns/iter",
            "extra": "iterations: 100818\ncpu: 8102.5719613561105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7768.359258134345,
            "unit": "ns/iter",
            "extra": "iterations: 105356\ncpu: 7767.995178252756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34648.40328578673,
            "unit": "ns/iter",
            "extra": "iterations: 24469\ncpu: 34645.99288896163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259642.74978077394,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 259622.39111370812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192853.27647838616,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 192840.48984995615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196263.4881082213,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 196246.7815841142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194612.21148368545,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 194600.65746219523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96371.5366120208,
            "unit": "ns/iter",
            "extra": "iterations: 9150\ncpu: 96364.40437158447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173752.1687012331,
            "unit": "ns/iter",
            "extra": "iterations: 4997\ncpu: 173739.66379827834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.2752180579382,
            "unit": "ns/iter",
            "extra": "iterations: 3859754\ncpu: 181.26090419234072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1446.4279728692297,
            "unit": "ns/iter",
            "extra": "iterations: 487122\ncpu: 1446.3294616133037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1099.8414996894087,
            "unit": "ns/iter",
            "extra": "iterations: 637412\ncpu: 1099.8096992212206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1155.0776454561294,
            "unit": "ns/iter",
            "extra": "iterations: 634229\ncpu: 1154.9626396774668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 839.8446936351469,
            "unit": "ns/iter",
            "extra": "iterations: 833810\ncpu: 839.7573787793399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9420.805403077129,
            "unit": "ns/iter",
            "extra": "iterations: 74328\ncpu: 9420.000538155267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10728.269844171267,
            "unit": "ns/iter",
            "extra": "iterations: 60194\ncpu: 10727.50440243206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2683.9537389291622,
            "unit": "ns/iter",
            "extra": "iterations: 261278\ncpu: 2683.7808770734678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2715.172858387501,
            "unit": "ns/iter",
            "extra": "iterations: 258275\ncpu: 2714.9425999419213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2708.624472785774,
            "unit": "ns/iter",
            "extra": "iterations: 258434\ncpu: 2708.4060146884867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5006.0495299999275,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5005.9190000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5178.790285109048,
            "unit": "ns/iter",
            "extra": "iterations: 136018\ncpu: 5178.338896322561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1898.6870121557233,
            "unit": "ns/iter",
            "extra": "iterations: 368714\ncpu: 1898.5058880324545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9850.394507325558,
            "unit": "ns/iter",
            "extra": "iterations: 70858\ncpu: 9849.58790821078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7853.979469938585,
            "unit": "ns/iter",
            "extra": "iterations: 89235\ncpu: 7853.702022748955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7751.429396733017,
            "unit": "ns/iter",
            "extra": "iterations: 90010\ncpu: 7751.039884457371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7717.68586439686,
            "unit": "ns/iter",
            "extra": "iterations: 90219\ncpu: 7717.494097695678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17411.335030802285,
            "unit": "ns/iter",
            "extra": "iterations: 40256\ncpu: 17410.60463036581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54044.4676516308,
            "unit": "ns/iter",
            "extra": "iterations: 12860\ncpu: 54042.099533437264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41206.689440619906,
            "unit": "ns/iter",
            "extra": "iterations: 16554\ncpu: 41205.170955660215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43103.93584744996,
            "unit": "ns/iter",
            "extra": "iterations: 16414\ncpu: 43101.51699768504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42107.988584882056,
            "unit": "ns/iter",
            "extra": "iterations: 16557\ncpu: 42105.701515975285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25163.202450450037,
            "unit": "ns/iter",
            "extra": "iterations: 27750\ncpu: 25161.917117117384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40653.15558613929,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 40650.33810065249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1880.5301831359852,
            "unit": "ns/iter",
            "extra": "iterations: 373056\ncpu: 1880.4613784525654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10079.97423864257,
            "unit": "ns/iter",
            "extra": "iterations: 70105\ncpu: 10079.573496897623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7867.548550095026,
            "unit": "ns/iter",
            "extra": "iterations: 88661\ncpu: 7867.092633739653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7831.302224370974,
            "unit": "ns/iter",
            "extra": "iterations: 88924\ncpu: 7831.04898565077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7690.008529770705,
            "unit": "ns/iter",
            "extra": "iterations: 90741\ncpu: 7689.6265194344005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17453.24305954532,
            "unit": "ns/iter",
            "extra": "iterations: 40019\ncpu: 17452.610010245156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52972.78892866027,
            "unit": "ns/iter",
            "extra": "iterations: 13133\ncpu: 52970.57031904343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41648.807408292916,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 41646.617436874054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41836.255506078305,
            "unit": "ns/iter",
            "extra": "iterations: 16618\ncpu: 41834.09555903166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41894.45444279296,
            "unit": "ns/iter",
            "extra": "iterations: 16825\ncpu: 41893.622585438265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25522.773793603123,
            "unit": "ns/iter",
            "extra": "iterations: 27665\ncpu: 25521.460328935642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41714.487214238274,
            "unit": "ns/iter",
            "extra": "iterations: 16972\ncpu: 41713.24534527514 ns\nthreads: 1"
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
        "date": 1702490341176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.7571154980826,
            "unit": "ns/iter",
            "extra": "iterations: 1252653\ncpu: 559.7261971192343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5340.850449999834,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5340.677000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10332.893865973456,
            "unit": "ns/iter",
            "extra": "iterations: 76149\ncpu: 10332.289327502658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15079.83595077198,
            "unit": "ns/iter",
            "extra": "iterations: 52978\ncpu: 15078.517497829293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20248.226444322063,
            "unit": "ns/iter",
            "extra": "iterations: 41317\ncpu: 20246.85722583924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25044.23283153876,
            "unit": "ns/iter",
            "extra": "iterations: 32749\ncpu: 25042.48068643315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29680.478531092376,
            "unit": "ns/iter",
            "extra": "iterations: 28157\ncpu: 29678.406790496138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34950.026066943676,
            "unit": "ns/iter",
            "extra": "iterations: 23900\ncpu: 34948.364016736385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38903.44123231537,
            "unit": "ns/iter",
            "extra": "iterations: 21066\ncpu: 38900.86869837655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.828024328925,
            "unit": "ns/iter",
            "extra": "iterations: 1302975\ncpu: 538.7900765555738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 429.5418218191159,
            "unit": "ns/iter",
            "extra": "iterations: 1640591\ncpu: 429.5148516601644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.79230321150453,
            "unit": "ns/iter",
            "extra": "iterations: 1660069\ncpu: 422.74140412235874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.7989221017197,
            "unit": "ns/iter",
            "extra": "iterations: 1656557\ncpu: 421.76514300443694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.9206715401709,
            "unit": "ns/iter",
            "extra": "iterations: 827471\ncpu: 846.856143598991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2072.63240627835,
            "unit": "ns/iter",
            "extra": "iterations: 386277\ncpu: 2072.5088472779894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10802.571185433488,
            "unit": "ns/iter",
            "extra": "iterations: 75795\ncpu: 10801.790355564366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8716.485934737397,
            "unit": "ns/iter",
            "extra": "iterations: 93315\ncpu: 8716.21818571506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8556.863499244995,
            "unit": "ns/iter",
            "extra": "iterations: 95472\ncpu: 8556.10231271994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8137.196355593209,
            "unit": "ns/iter",
            "extra": "iterations: 100812\ncpu: 8136.302225925461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34902.986911873195,
            "unit": "ns/iter",
            "extra": "iterations: 23762\ncpu: 34901.19518559044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259562.30127297266,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 259546.70438472443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197660.6656764197,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197645.38391224874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191001.97016627082,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 190987.9298565247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194834.17568487098,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 194815.259225719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98792.63356561211,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 98785.48199767733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189074.99956634376,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 189050.84562012163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5435.802550951787,
            "unit": "ns/iter",
            "extra": "iterations: 148180\ncpu: 5435.230125523004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25436.91020683578,
            "unit": "ns/iter",
            "extra": "iterations: 32586\ncpu: 25434.671331246547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18901.187448910325,
            "unit": "ns/iter",
            "extra": "iterations: 42817\ncpu: 18899.30167923953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19372.251845832307,
            "unit": "ns/iter",
            "extra": "iterations: 43070\ncpu: 19333.71720455067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18701.256278242487,
            "unit": "ns/iter",
            "extra": "iterations: 44479\ncpu: 18699.82688459719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51214.054281295976,
            "unit": "ns/iter",
            "extra": "iterations: 16175\ncpu: 51210.21329211736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269520.2926154077,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 269499.2923076908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201954.21646269795,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 201944.7084233268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207229.97129873035,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 207223.6546280782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206493.1268674331,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 206485.41617263542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110906.81800765933,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 110901.85185185171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197586.8474807077,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 197577.507943714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797803.4601176116,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 797779.3450881591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434071.63343257504,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 434047.51984126796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2006.4824990104694,
            "unit": "ns/iter",
            "extra": "iterations: 401663\ncpu: 2006.4108469039934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11578.237151522455,
            "unit": "ns/iter",
            "extra": "iterations: 72207\ncpu: 11577.2390488457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8169.342773594817,
            "unit": "ns/iter",
            "extra": "iterations: 98832\ncpu: 8168.464667314236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8102.889890694883,
            "unit": "ns/iter",
            "extra": "iterations: 100818\ncpu: 8102.5719613561105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7768.359258134345,
            "unit": "ns/iter",
            "extra": "iterations: 105356\ncpu: 7767.995178252756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34648.40328578673,
            "unit": "ns/iter",
            "extra": "iterations: 24469\ncpu: 34645.99288896163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259642.74978077394,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 259622.39111370812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192853.27647838616,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 192840.48984995615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196263.4881082213,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 196246.7815841142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194612.21148368545,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 194600.65746219523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96371.5366120208,
            "unit": "ns/iter",
            "extra": "iterations: 9150\ncpu: 96364.40437158447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173752.1687012331,
            "unit": "ns/iter",
            "extra": "iterations: 4997\ncpu: 173739.66379827834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.2752180579382,
            "unit": "ns/iter",
            "extra": "iterations: 3859754\ncpu: 181.26090419234072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1446.4279728692297,
            "unit": "ns/iter",
            "extra": "iterations: 487122\ncpu: 1446.3294616133037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1099.8414996894087,
            "unit": "ns/iter",
            "extra": "iterations: 637412\ncpu: 1099.8096992212206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1155.0776454561294,
            "unit": "ns/iter",
            "extra": "iterations: 634229\ncpu: 1154.9626396774668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 839.8446936351469,
            "unit": "ns/iter",
            "extra": "iterations: 833810\ncpu: 839.7573787793399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9420.805403077129,
            "unit": "ns/iter",
            "extra": "iterations: 74328\ncpu: 9420.000538155267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10728.269844171267,
            "unit": "ns/iter",
            "extra": "iterations: 60194\ncpu: 10727.50440243206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2683.9537389291622,
            "unit": "ns/iter",
            "extra": "iterations: 261278\ncpu: 2683.7808770734678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2715.172858387501,
            "unit": "ns/iter",
            "extra": "iterations: 258275\ncpu: 2714.9425999419213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2708.624472785774,
            "unit": "ns/iter",
            "extra": "iterations: 258434\ncpu: 2708.4060146884867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5006.0495299999275,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5005.9190000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5178.790285109048,
            "unit": "ns/iter",
            "extra": "iterations: 136018\ncpu: 5178.338896322561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1898.6870121557233,
            "unit": "ns/iter",
            "extra": "iterations: 368714\ncpu: 1898.5058880324545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9850.394507325558,
            "unit": "ns/iter",
            "extra": "iterations: 70858\ncpu: 9849.58790821078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7853.979469938585,
            "unit": "ns/iter",
            "extra": "iterations: 89235\ncpu: 7853.702022748955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7751.429396733017,
            "unit": "ns/iter",
            "extra": "iterations: 90010\ncpu: 7751.039884457371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7717.68586439686,
            "unit": "ns/iter",
            "extra": "iterations: 90219\ncpu: 7717.494097695678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17411.335030802285,
            "unit": "ns/iter",
            "extra": "iterations: 40256\ncpu: 17410.60463036581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54044.4676516308,
            "unit": "ns/iter",
            "extra": "iterations: 12860\ncpu: 54042.099533437264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41206.689440619906,
            "unit": "ns/iter",
            "extra": "iterations: 16554\ncpu: 41205.170955660215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43103.93584744996,
            "unit": "ns/iter",
            "extra": "iterations: 16414\ncpu: 43101.51699768504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42107.988584882056,
            "unit": "ns/iter",
            "extra": "iterations: 16557\ncpu: 42105.701515975285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25163.202450450037,
            "unit": "ns/iter",
            "extra": "iterations: 27750\ncpu: 25161.917117117384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40653.15558613929,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 40650.33810065249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1880.5301831359852,
            "unit": "ns/iter",
            "extra": "iterations: 373056\ncpu: 1880.4613784525654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10079.97423864257,
            "unit": "ns/iter",
            "extra": "iterations: 70105\ncpu: 10079.573496897623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7867.548550095026,
            "unit": "ns/iter",
            "extra": "iterations: 88661\ncpu: 7867.092633739653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7831.302224370974,
            "unit": "ns/iter",
            "extra": "iterations: 88924\ncpu: 7831.04898565077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7690.008529770705,
            "unit": "ns/iter",
            "extra": "iterations: 90741\ncpu: 7689.6265194344005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17453.24305954532,
            "unit": "ns/iter",
            "extra": "iterations: 40019\ncpu: 17452.610010245156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52972.78892866027,
            "unit": "ns/iter",
            "extra": "iterations: 13133\ncpu: 52970.57031904343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41648.807408292916,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 41646.617436874054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41836.255506078305,
            "unit": "ns/iter",
            "extra": "iterations: 16618\ncpu: 41834.09555903166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41894.45444279296,
            "unit": "ns/iter",
            "extra": "iterations: 16825\ncpu: 41893.622585438265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25522.773793603123,
            "unit": "ns/iter",
            "extra": "iterations: 27665\ncpu: 25521.460328935642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41714.487214238274,
            "unit": "ns/iter",
            "extra": "iterations: 16972\ncpu: 41713.24534527514 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}