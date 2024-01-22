window.BENCHMARK_DATA = {
  "lastUpdate": 1705959974328,
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
        "date": 1702492948338,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 567.4370835043775,
            "unit": "ns/iter",
            "extra": "iterations: 1223002\ncpu: 567.4187777289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5118.224880000071,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5117.873999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10009.57987599089,
            "unit": "ns/iter",
            "extra": "iterations: 83542\ncpu: 10008.82789495104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15469.075554835166,
            "unit": "ns/iter",
            "extra": "iterations: 55602\ncpu: 15468.051508938523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20602.571087673106,
            "unit": "ns/iter",
            "extra": "iterations: 41906\ncpu: 20601.77540209039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24969.447303227655,
            "unit": "ns/iter",
            "extra": "iterations: 33503\ncpu: 24968.187923469544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30090.734192540356,
            "unit": "ns/iter",
            "extra": "iterations: 28088\ncpu: 30088.778125890076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34700.39492889394,
            "unit": "ns/iter",
            "extra": "iterations: 23979\ncpu: 34698.86150381583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38982.335168611986,
            "unit": "ns/iter",
            "extra": "iterations: 21795\ncpu: 38981.72516632258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.2217382420629,
            "unit": "ns/iter",
            "extra": "iterations: 1301936\ncpu: 538.1987286625451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 438.49516408221547,
            "unit": "ns/iter",
            "extra": "iterations: 1634333\ncpu: 438.4871993651234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.38514604363104,
            "unit": "ns/iter",
            "extra": "iterations: 1629034\ncpu: 430.37339920468145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.328747607405,
            "unit": "ns/iter",
            "extra": "iterations: 1653028\ncpu: 427.30933777286236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 852.7046774058858,
            "unit": "ns/iter",
            "extra": "iterations: 819172\ncpu: 852.7010200543953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2075.3369089763073,
            "unit": "ns/iter",
            "extra": "iterations: 386131\ncpu: 2075.3068259217716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10607.814242007069,
            "unit": "ns/iter",
            "extra": "iterations: 77138\ncpu: 10607.550105006609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8163.263424035364,
            "unit": "ns/iter",
            "extra": "iterations: 100659\ncpu: 8163.1468621782415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8100.5157390968625,
            "unit": "ns/iter",
            "extra": "iterations: 101340\ncpu: 8100.249654627999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7923.0171264541505,
            "unit": "ns/iter",
            "extra": "iterations: 102765\ncpu: 7922.892035225992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34902.86184016236,
            "unit": "ns/iter",
            "extra": "iterations: 23661\ncpu: 34900.769198258866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247432.7495559816,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 247429.24807578378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199957.77356349502,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 199950.80626845322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198860.47276888028,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 198854.53089244867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190376.52919873656,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 190368.809416026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98790.25141929957,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 98788.47178774192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189507.7166123828,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 189499.370249728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5416.515865933087,
            "unit": "ns/iter",
            "extra": "iterations: 152402\ncpu: 5416.271440007348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25357.274784415396,
            "unit": "ns/iter",
            "extra": "iterations: 32702\ncpu: 25356.861965628923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19516.220369979786,
            "unit": "ns/iter",
            "extra": "iterations: 42651\ncpu: 19515.214180206774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19613.12747263336,
            "unit": "ns/iter",
            "extra": "iterations: 42111\ncpu: 19612.8018807438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19381.74492231323,
            "unit": "ns/iter",
            "extra": "iterations: 42736\ncpu: 19379.90219019101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50024.93375376023,
            "unit": "ns/iter",
            "extra": "iterations: 16650\ncpu: 50022.93093093088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271392.9150448212,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 271384.46092060657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206929.9096558161,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 206924.11567877713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 209444.99544692232,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 209426.40786005228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205409.046478538,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 205405.5726820017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110951.52786593558,
            "unit": "ns/iter",
            "extra": "iterations: 7877\ncpu: 110946.9595023485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197267.77529594235,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 197252.64686173777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 808921.8371501402,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 808877.0144189977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457523.0365979402,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 457489.7938144332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1996.4877333827076,
            "unit": "ns/iter",
            "extra": "iterations: 403575\ncpu: 1996.478473641837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10498.32869737617,
            "unit": "ns/iter",
            "extra": "iterations: 74634\ncpu: 10497.548034407886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7784.635277295711,
            "unit": "ns/iter",
            "extra": "iterations: 105609\ncpu: 7784.088477307818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7828.098501049828,
            "unit": "ns/iter",
            "extra": "iterations: 105207\ncpu: 7827.6122311253475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7657.849887788354,
            "unit": "ns/iter",
            "extra": "iterations: 106940\ncpu: 7657.481765475985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34554.26434896572,
            "unit": "ns/iter",
            "extra": "iterations: 24392\ncpu: 34552.23023942255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260741.2748898475,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 260727.95888399365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 195942.95374449977,
            "unit": "ns/iter",
            "extra": "iterations: 4540\ncpu: 195931.93832599232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197374.2033176496,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 197371.77762833508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194230.26890758413,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 194215.1702786368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100107.17350514651,
            "unit": "ns/iter",
            "extra": "iterations: 8847\ncpu: 100102.84842319414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 187780.57464126084,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 187769.88648532875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.84514122552557,
            "unit": "ns/iter",
            "extra": "iterations: 3870688\ncpu: 180.84436151919138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1408.6008945517162,
            "unit": "ns/iter",
            "extra": "iterations: 499021\ncpu: 1408.5527462772204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1088.9257938006533,
            "unit": "ns/iter",
            "extra": "iterations: 682854\ncpu: 1088.8473963687677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1045.9199183326891,
            "unit": "ns/iter",
            "extra": "iterations: 671015\ncpu: 1045.8599286156002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 834.7618886597251,
            "unit": "ns/iter",
            "extra": "iterations: 839876\ncpu: 834.7033371592938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9551.749186558403,
            "unit": "ns/iter",
            "extra": "iterations: 73146\ncpu: 9551.42591529268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12639.824199634417,
            "unit": "ns/iter",
            "extra": "iterations: 55381\ncpu: 12639.16144526102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2629.555607580462,
            "unit": "ns/iter",
            "extra": "iterations: 252016\ncpu: 2629.5005079042594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2563.433343625526,
            "unit": "ns/iter",
            "extra": "iterations: 259090\ncpu: 2561.6430583967067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2703.4827359888345,
            "unit": "ns/iter",
            "extra": "iterations: 260542\ncpu: 2703.4370658089774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5179.9985737814595,
            "unit": "ns/iter",
            "extra": "iterations: 136024\ncpu: 5179.91677939184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5087.73847849404,
            "unit": "ns/iter",
            "extra": "iterations: 137916\ncpu: 5087.365497839251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1884.3717520309199,
            "unit": "ns/iter",
            "extra": "iterations: 372579\ncpu: 1884.3646582335673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9969.417692121311,
            "unit": "ns/iter",
            "extra": "iterations: 70619\ncpu: 9968.913465214682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7832.383243067606,
            "unit": "ns/iter",
            "extra": "iterations: 89181\ncpu: 7832.355546585031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7899.7491914911625,
            "unit": "ns/iter",
            "extra": "iterations: 87816\ncpu: 7899.615104308984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7961.37697768128,
            "unit": "ns/iter",
            "extra": "iterations: 88045\ncpu: 7960.846158214588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17476.570632342962,
            "unit": "ns/iter",
            "extra": "iterations: 40010\ncpu: 17476.513371657034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52489.792254885026,
            "unit": "ns/iter",
            "extra": "iterations: 12963\ncpu: 52485.89061174169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44287.134528021845,
            "unit": "ns/iter",
            "extra": "iterations: 15848\ncpu: 44286.963654720355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44377.42974522254,
            "unit": "ns/iter",
            "extra": "iterations: 15700\ncpu: 44374.24203821695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43844.304385855314,
            "unit": "ns/iter",
            "extra": "iterations: 16006\ncpu: 43843.45245532891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25892.339714853137,
            "unit": "ns/iter",
            "extra": "iterations: 27214\ncpu: 25891.06709781732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43321.289023781865,
            "unit": "ns/iter",
            "extra": "iterations: 16144\ncpu: 43320.37289395421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1902.6539756752188,
            "unit": "ns/iter",
            "extra": "iterations: 367032\ncpu: 1902.5790666753974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10251.089040692992,
            "unit": "ns/iter",
            "extra": "iterations: 68216\ncpu: 10251.056936788946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8505.243626138494,
            "unit": "ns/iter",
            "extra": "iterations: 75739\ncpu: 8504.93404982902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8260.479297681146,
            "unit": "ns/iter",
            "extra": "iterations: 83324\ncpu: 8259.965916182706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7724.651124466686,
            "unit": "ns/iter",
            "extra": "iterations: 91021\ncpu: 7724.5163204095525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17861.022989982004,
            "unit": "ns/iter",
            "extra": "iterations: 38930\ncpu: 17860.485486771082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52550.98956905839,
            "unit": "ns/iter",
            "extra": "iterations: 13134\ncpu: 52550.837520938054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41863.12162564586,
            "unit": "ns/iter",
            "extra": "iterations: 16781\ncpu: 41861.390858709514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42137.5871130251,
            "unit": "ns/iter",
            "extra": "iterations: 16668\ncpu: 42136.7710583157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41580.23530456856,
            "unit": "ns/iter",
            "extra": "iterations: 16893\ncpu: 41577.677144379355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25417.366675191046,
            "unit": "ns/iter",
            "extra": "iterations: 27373\ncpu: 25416.698936908837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42276.45954769368,
            "unit": "ns/iter",
            "extra": "iterations: 16847\ncpu: 42276.29251498766 ns\nthreads: 1"
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
        "date": 1702504001942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 554.0398161587576,
            "unit": "ns/iter",
            "extra": "iterations: 1240853\ncpu: 554.0397613577112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5223.303410000426,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5223.348999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10102.984690828041,
            "unit": "ns/iter",
            "extra": "iterations: 81977\ncpu: 10103.0057211169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15249.44075605773,
            "unit": "ns/iter",
            "extra": "iterations: 55128\ncpu: 15249.570091423597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20355.026074103924,
            "unit": "ns/iter",
            "extra": "iterations: 41267\ncpu: 20354.91554995516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25507.05523890313,
            "unit": "ns/iter",
            "extra": "iterations: 32984\ncpu: 25506.666868784865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30760.93905404905,
            "unit": "ns/iter",
            "extra": "iterations: 27549\ncpu: 30760.274420124148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35632.213254899434,
            "unit": "ns/iter",
            "extra": "iterations: 23629\ncpu: 35631.50366075585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39912.66934536635,
            "unit": "ns/iter",
            "extra": "iterations: 21279\ncpu: 39911.875558061955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 523.3683031552438,
            "unit": "ns/iter",
            "extra": "iterations: 1319614\ncpu: 523.3680455042144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 414.28629737643195,
            "unit": "ns/iter",
            "extra": "iterations: 1684619\ncpu: 414.2843574719265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 416.74580136792645,
            "unit": "ns/iter",
            "extra": "iterations: 1731040\ncpu: 416.734795267585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.9033094583438,
            "unit": "ns/iter",
            "extra": "iterations: 1691727\ncpu: 412.8913234818616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 840.2734953483258,
            "unit": "ns/iter",
            "extra": "iterations: 833133\ncpu: 840.2576779457801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1961.4727243041928,
            "unit": "ns/iter",
            "extra": "iterations: 410347\ncpu: 1961.4487251033875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10731.17536580355,
            "unit": "ns/iter",
            "extra": "iterations: 77364\ncpu: 10730.926529134995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8332.774687334686,
            "unit": "ns/iter",
            "extra": "iterations: 98188\ncpu: 8332.517211879245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8403.281513770911,
            "unit": "ns/iter",
            "extra": "iterations: 97267\ncpu: 8403.041113635656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8022.849928806229,
            "unit": "ns/iter",
            "extra": "iterations: 101132\ncpu: 8022.566546691468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35047.312685848745,
            "unit": "ns/iter",
            "extra": "iterations: 23877\ncpu: 35046.58876743301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245800.4994346914,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 245793.10344827603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196088.5884632942,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 196084.88372093017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196690.74210406851,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 196688.47989093364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196571.27606264604,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 196569.8434004472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100329.92716602633,
            "unit": "ns/iter",
            "extra": "iterations: 8691\ncpu: 100328.56978483486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188314.24713514294,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 188312.19459459468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5418.094658512855,
            "unit": "ns/iter",
            "extra": "iterations: 150108\ncpu: 5418.111626295728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24528.994152571482,
            "unit": "ns/iter",
            "extra": "iterations: 33348\ncpu: 24528.625404821832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19206.302206497374,
            "unit": "ns/iter",
            "extra": "iterations: 42964\ncpu: 19206.46820593985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19014.885069008662,
            "unit": "ns/iter",
            "extra": "iterations: 43835\ncpu: 19014.654956085367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19080.883994395997,
            "unit": "ns/iter",
            "extra": "iterations: 43541\ncpu: 19081.04774809949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50462.28312852141,
            "unit": "ns/iter",
            "extra": "iterations: 16519\ncpu: 50461.11144742416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271318.37858685973,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 271318.54365936544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207329.41204472567,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 207325.27969531185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200645.7062634963,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 200645.7643388517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 207443.4134158039,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 207437.7259752619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111621.56036013672,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 111621.73471975642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 198075.12656784602,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 198071.35689851796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 799993.5033500353,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 799986.18090452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440518.6829511335,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 440514.8554336986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1984.0615328212834,
            "unit": "ns/iter",
            "extra": "iterations: 400973\ncpu: 1984.069500938974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10958.444706100634,
            "unit": "ns/iter",
            "extra": "iterations: 75162\ncpu: 10958.427130730965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8270.757390100634,
            "unit": "ns/iter",
            "extra": "iterations: 99728\ncpu: 8270.72737846947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8239.774637637389,
            "unit": "ns/iter",
            "extra": "iterations: 100314\ncpu: 8239.594672727651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7840.952281764658,
            "unit": "ns/iter",
            "extra": "iterations: 105620\ncpu: 7840.968566559408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34164.82476696898,
            "unit": "ns/iter",
            "extra": "iterations: 22958\ncpu: 34164.496036240096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261450.78853463882,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 261447.2945305646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 196654.1657105098,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 196646.66813768775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186054.28298956194,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 186052.0514526513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194553.7228755355,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 194551.3867317511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99500.61499263276,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 99499.2186615336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186419.37880068523,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 186417.31418918996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.60847941896617,
            "unit": "ns/iter",
            "extra": "iterations: 3830003\ncpu: 182.60912589363488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1556.9250333333507,
            "unit": "ns/iter",
            "extra": "iterations: 450000\ncpu: 1556.9048888888897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1109.6477017295979,
            "unit": "ns/iter",
            "extra": "iterations: 629952\ncpu: 1109.6467667377779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1090.901856510365,
            "unit": "ns/iter",
            "extra": "iterations: 638402\ncpu: 1090.872365688082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 841.5960136336546,
            "unit": "ns/iter",
            "extra": "iterations: 830882\ncpu: 841.5965203241815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9435.315694729676,
            "unit": "ns/iter",
            "extra": "iterations: 74439\ncpu: 9435.398111205097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12254.23478489396,
            "unit": "ns/iter",
            "extra": "iterations: 57065\ncpu: 12254.054148777623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2696.2252247044125,
            "unit": "ns/iter",
            "extra": "iterations: 259452\ncpu: 2696.198911552049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2720.2565624841222,
            "unit": "ns/iter",
            "extra": "iterations: 255353\ncpu: 2720.248832009027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2759.311315094617,
            "unit": "ns/iter",
            "extra": "iterations: 255031\ncpu: 2759.307299896884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5060.351608328084,
            "unit": "ns/iter",
            "extra": "iterations: 135358\ncpu: 5060.233602742396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4397.601944957024,
            "unit": "ns/iter",
            "extra": "iterations: 151263\ncpu: 4397.485835928143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1887.488037185417,
            "unit": "ns/iter",
            "extra": "iterations: 372404\ncpu: 1887.4499199793565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9795.277215136823,
            "unit": "ns/iter",
            "extra": "iterations: 71587\ncpu: 9795.050777375802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7787.690950401755,
            "unit": "ns/iter",
            "extra": "iterations: 90225\ncpu: 7787.514546965952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7709.323998466127,
            "unit": "ns/iter",
            "extra": "iterations: 91235\ncpu: 7709.39551707134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7829.368479095844,
            "unit": "ns/iter",
            "extra": "iterations: 89769\ncpu: 7829.288507168442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17476.76916741611,
            "unit": "ns/iter",
            "extra": "iterations: 40068\ncpu: 17476.320255565734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54108.430703463666,
            "unit": "ns/iter",
            "extra": "iterations: 12865\ncpu: 54108.36377769247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42827.916283059676,
            "unit": "ns/iter",
            "extra": "iterations: 16293\ncpu: 42827.65604860953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42740.125176067726,
            "unit": "ns/iter",
            "extra": "iterations: 16329\ncpu: 42739.05934227479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42231.755408874466,
            "unit": "ns/iter",
            "extra": "iterations: 16362\ncpu: 42230.803080308084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24827.406100603384,
            "unit": "ns/iter",
            "extra": "iterations: 28030\ncpu: 24826.435961469997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42060.86635376973,
            "unit": "ns/iter",
            "extra": "iterations: 17045\ncpu: 42059.57758873629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1868.2862140417394,
            "unit": "ns/iter",
            "extra": "iterations: 371610\ncpu: 1868.212373186936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9938.94327381377,
            "unit": "ns/iter",
            "extra": "iterations: 70285\ncpu: 9938.673970263893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7931.715600385983,
            "unit": "ns/iter",
            "extra": "iterations: 88235\ncpu: 7931.47503825012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7879.637674623115,
            "unit": "ns/iter",
            "extra": "iterations: 88691\ncpu: 7879.471423255993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7819.013081314939,
            "unit": "ns/iter",
            "extra": "iterations: 89517\ncpu: 7818.653440128682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17489.11491965989,
            "unit": "ns/iter",
            "extra": "iterations: 39706\ncpu: 17488.331738276254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49567.558084262375,
            "unit": "ns/iter",
            "extra": "iterations: 13885\ncpu: 49565.9488656821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41217.020417583844,
            "unit": "ns/iter",
            "extra": "iterations: 17338\ncpu: 41215.06517476101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 39857.17417382725,
            "unit": "ns/iter",
            "extra": "iterations: 17339\ncpu: 39785.5470327005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41554.028018517114,
            "unit": "ns/iter",
            "extra": "iterations: 16846\ncpu: 41553.67446278053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25318.48200996954,
            "unit": "ns/iter",
            "extra": "iterations: 27682\ncpu: 25318.474098692466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42049.93860942754,
            "unit": "ns/iter",
            "extra": "iterations: 16957\ncpu: 42049.554756148136 ns\nthreads: 1"
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
        "date": 1705575682915,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 568.3814666403111,
            "unit": "ns/iter",
            "extra": "iterations: 1224322\ncpu: 568.3499928940263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5218.632170000319,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5218.348999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10235.026003805651,
            "unit": "ns/iter",
            "extra": "iterations: 81988\ncpu: 10234.192808703716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14791.565854884022,
            "unit": "ns/iter",
            "extra": "iterations: 55721\ncpu: 14790.454227311066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20027.619712230065,
            "unit": "ns/iter",
            "extra": "iterations: 41700\ncpu: 20026.64508393286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24766.024795121397,
            "unit": "ns/iter",
            "extra": "iterations: 33434\ncpu: 24764.186157803444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30263.423207095522,
            "unit": "ns/iter",
            "extra": "iterations: 28069\ncpu: 30262.321422209545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35436.87200229803,
            "unit": "ns/iter",
            "extra": "iterations: 24352\ncpu: 35434.20663600526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42577.67191086333,
            "unit": "ns/iter",
            "extra": "iterations: 20912\ncpu: 42574.52180566182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.8453247230111,
            "unit": "ns/iter",
            "extra": "iterations: 1296736\ncpu: 530.8289428225946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 413.8547749061504,
            "unit": "ns/iter",
            "extra": "iterations: 1660085\ncpu: 413.84200206615986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.09508011688587,
            "unit": "ns/iter",
            "extra": "iterations: 1720549\ncpu: 413.08611379274885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.26586620829175,
            "unit": "ns/iter",
            "extra": "iterations: 1703857\ncpu: 412.2379988461472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 840.2076680931356,
            "unit": "ns/iter",
            "extra": "iterations: 830715\ncpu: 840.1621494736474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1955.2027222593408,
            "unit": "ns/iter",
            "extra": "iterations: 409072\ncpu: 1955.0536335901766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10608.30558012404,
            "unit": "ns/iter",
            "extra": "iterations: 78009\ncpu: 10607.95421041164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8468.288701374893,
            "unit": "ns/iter",
            "extra": "iterations: 94215\ncpu: 8467.988112296342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8606.22108523316,
            "unit": "ns/iter",
            "extra": "iterations: 95574\ncpu: 8605.956640927456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8069.680270455545,
            "unit": "ns/iter",
            "extra": "iterations: 98796\ncpu: 8069.491679825102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34721.5473232158,
            "unit": "ns/iter",
            "extra": "iterations: 23984\ncpu: 34720.19679786521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240610.44117647404,
            "unit": "ns/iter",
            "extra": "iterations: 3536\ncpu: 240589.366515837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197095.97874263898,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 197090.56987788313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187421.48921189073,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 187412.74131274156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190404.64237058442,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 190395.32243415096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101197.46231214519,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 101192.97109826589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184244.69930374692,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 184238.27241079198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5378.227679076209,
            "unit": "ns/iter",
            "extra": "iterations: 150453\ncpu: 5378.074880527461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25352.722982256975,
            "unit": "ns/iter",
            "extra": "iterations: 33478\ncpu: 25351.893780990526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19153.551025229754,
            "unit": "ns/iter",
            "extra": "iterations: 42332\ncpu: 19153.14419351792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19190.534403083446,
            "unit": "ns/iter",
            "extra": "iterations: 43063\ncpu: 19190.140027401674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18682.915066486028,
            "unit": "ns/iter",
            "extra": "iterations: 45047\ncpu: 18682.49161986367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50306.10979282621,
            "unit": "ns/iter",
            "extra": "iterations: 16267\ncpu: 50303.879018872525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269712.3433066142,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 269710.7032695859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206670.92993476646,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 206665.93380043568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 208623.80067405204,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 208613.11988444882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201529.89544045922,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 201518.71568393317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110200.72845590414,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 110194.08642911295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187900.56488202506,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 187887.20508166894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 798040.7414511429,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 797978.5654712272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438464.7522567695,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 438424.4734202626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1986.9475881203336,
            "unit": "ns/iter",
            "extra": "iterations: 400787\ncpu: 1986.8997746932932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10725.279952335137,
            "unit": "ns/iter",
            "extra": "iterations: 77206\ncpu: 10725.065409424158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7881.77918659624,
            "unit": "ns/iter",
            "extra": "iterations: 101819\ncpu: 7881.310953751217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7457.607157548161,
            "unit": "ns/iter",
            "extra": "iterations: 104533\ncpu: 7457.4067519347955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7384.060821682203,
            "unit": "ns/iter",
            "extra": "iterations: 111868\ncpu: 7384.0141953016355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34912.46697681991,
            "unit": "ns/iter",
            "extra": "iterations: 24074\ncpu: 34911.32341945671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265273.6714285629,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 265261.0204081614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190533.272028936,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 190528.37776773723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198007.96723163748,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 197998.41807909583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195616.6685968817,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 195603.6080178189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98884.9748715004,
            "unit": "ns/iter",
            "extra": "iterations: 8755\ncpu: 98879.09765848116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177369.2977456403,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 177361.27179923534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.26020565061654,
            "unit": "ns/iter",
            "extra": "iterations: 3869670\ncpu: 181.25695472740662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1439.6984239724034,
            "unit": "ns/iter",
            "extra": "iterations: 489966\ncpu: 1439.666017642039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1208.449425430418,
            "unit": "ns/iter",
            "extra": "iterations: 610544\ncpu: 1208.4339539820164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1142.0961744581248,
            "unit": "ns/iter",
            "extra": "iterations: 617638\ncpu: 1142.0377308391062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 836.7690526860004,
            "unit": "ns/iter",
            "extra": "iterations: 839711\ncpu: 836.7513346853835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9386.606053715494,
            "unit": "ns/iter",
            "extra": "iterations: 74764\ncpu: 9386.370445669067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12285.334449907621,
            "unit": "ns/iter",
            "extra": "iterations: 55527\ncpu: 12285.07212707335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2788.9483915119176,
            "unit": "ns/iter",
            "extra": "iterations: 249862\ncpu: 2788.82903362657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2817.950839159936,
            "unit": "ns/iter",
            "extra": "iterations: 248999\ncpu: 2817.860312692016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2827.582624780422,
            "unit": "ns/iter",
            "extra": "iterations: 249217\ncpu: 2827.4844813957307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5232.352132502433,
            "unit": "ns/iter",
            "extra": "iterations: 133552\ncpu: 5232.233137654247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5390.073097470269,
            "unit": "ns/iter",
            "extra": "iterations: 130839\ncpu: 5389.863878507169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1884.5680792247472,
            "unit": "ns/iter",
            "extra": "iterations: 371501\ncpu: 1884.4942543896418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9998.447805270302,
            "unit": "ns/iter",
            "extra": "iterations: 69758\ncpu: 9998.27116603113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7901.908220887146,
            "unit": "ns/iter",
            "extra": "iterations: 88190\ncpu: 7901.674793060481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8020.5056142398025,
            "unit": "ns/iter",
            "extra": "iterations: 87189\ncpu: 8020.309901478466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7919.162778110562,
            "unit": "ns/iter",
            "extra": "iterations: 88679\ncpu: 7919.020286651876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17548.906678384785,
            "unit": "ns/iter",
            "extra": "iterations: 39830\ncpu: 17548.277680140425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54900.783669311764,
            "unit": "ns/iter",
            "extra": "iterations: 12749\ncpu: 54899.32543728912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44605.977051582784,
            "unit": "ns/iter",
            "extra": "iterations: 16341\ncpu: 44604.57744324098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44398.73495728912,
            "unit": "ns/iter",
            "extra": "iterations: 15805\ncpu: 44398.01961404661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41154.96771331983,
            "unit": "ns/iter",
            "extra": "iterations: 16911\ncpu: 41153.07787830386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25320.68770609657,
            "unit": "ns/iter",
            "extra": "iterations: 27900\ncpu: 25319.655913978128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42394.26030473665,
            "unit": "ns/iter",
            "extra": "iterations: 16473\ncpu: 42393.09779639397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1957.0304062101247,
            "unit": "ns/iter",
            "extra": "iterations: 344206\ncpu: 1956.9937769823857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10048.91862942631,
            "unit": "ns/iter",
            "extra": "iterations: 68993\ncpu: 10048.642615917564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7870.842013673354,
            "unit": "ns/iter",
            "extra": "iterations: 88495\ncpu: 7870.660489293199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7957.466029930197,
            "unit": "ns/iter",
            "extra": "iterations: 87739\ncpu: 7957.298350790338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7783.946853099324,
            "unit": "ns/iter",
            "extra": "iterations: 90184\ncpu: 7783.799787101871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17963.3781757818,
            "unit": "ns/iter",
            "extra": "iterations: 39754\ncpu: 17962.92700105673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54245.74484809794,
            "unit": "ns/iter",
            "extra": "iterations: 9414\ncpu: 54245.974081156695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42942.459316617715,
            "unit": "ns/iter",
            "extra": "iterations: 16272\ncpu: 42941.4945919365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42190.86151436337,
            "unit": "ns/iter",
            "extra": "iterations: 16601\ncpu: 42188.57900126465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42249.39461585322,
            "unit": "ns/iter",
            "extra": "iterations: 16530\ncpu: 42247.33817301842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25495.225126385023,
            "unit": "ns/iter",
            "extra": "iterations: 27891\ncpu: 25494.973288874764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41926.19204366445,
            "unit": "ns/iter",
            "extra": "iterations: 17772\ncpu: 41923.64956110736 ns\nthreads: 1"
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
        "date": 1705773474782,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 563.7456452587255,
            "unit": "ns/iter",
            "extra": "iterations: 1247089\ncpu: 563.7025104062341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5245.344149999482,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5245.1889999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10234.125400069639,
            "unit": "ns/iter",
            "extra": "iterations: 81236\ncpu: 10233.72027180068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15268.699511134691,
            "unit": "ns/iter",
            "extra": "iterations: 55230\ncpu: 15267.888828535219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20290.13055204578,
            "unit": "ns/iter",
            "extra": "iterations: 41156\ncpu: 20289.277383613568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25138.703704818527,
            "unit": "ns/iter",
            "extra": "iterations: 33146\ncpu: 25137.03614312436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30166.625495992084,
            "unit": "ns/iter",
            "extra": "iterations: 27722\ncpu: 30166.207344347426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35541.62339211591,
            "unit": "ns/iter",
            "extra": "iterations: 23478\ncpu: 35539.59451401312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39673.7283546735,
            "unit": "ns/iter",
            "extra": "iterations: 21090\ncpu: 39670.04741583694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 557.8386666635697,
            "unit": "ns/iter",
            "extra": "iterations: 1263657\ncpu: 557.823918990675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 436.58176172771874,
            "unit": "ns/iter",
            "extra": "iterations: 1617083\ncpu: 436.5577400788957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 426.74269413665917,
            "unit": "ns/iter",
            "extra": "iterations: 1639026\ncpu: 426.72922821236506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 423.09223588765565,
            "unit": "ns/iter",
            "extra": "iterations: 1654703\ncpu: 423.07435231579336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 856.5476026508023,
            "unit": "ns/iter",
            "extra": "iterations: 816068\ncpu: 856.5065656293364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2067.5273233588914,
            "unit": "ns/iter",
            "extra": "iterations: 389264\ncpu: 2067.409778453697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 11286.56773534462,
            "unit": "ns/iter",
            "extra": "iterations: 76356\ncpu: 11286.09015663473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8324.837114712374,
            "unit": "ns/iter",
            "extra": "iterations: 99082\ncpu: 8324.42118649201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8427.490614715214,
            "unit": "ns/iter",
            "extra": "iterations: 98452\ncpu: 8427.052776987763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8154.438582888517,
            "unit": "ns/iter",
            "extra": "iterations: 100599\ncpu: 8154.404119325235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34848.55235370827,
            "unit": "ns/iter",
            "extra": "iterations: 23771\ncpu: 34846.666105759046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 253490.58352668028,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 253479.32134570746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200704.16520332094,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 200696.90388170094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188565.56950159164,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 188558.161865569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201054.7531474863,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 201047.16726618668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102187.34398782995,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 102183.36260391085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192275.62941047325,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 192266.1626123165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5453.023986623507,
            "unit": "ns/iter",
            "extra": "iterations: 150709\ncpu: 5452.768580509468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25229.554751300624,
            "unit": "ns/iter",
            "extra": "iterations: 32328\ncpu: 25228.81403118034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18962.15117168435,
            "unit": "ns/iter",
            "extra": "iterations: 43143\ncpu: 18960.978606031073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19906.73698494397,
            "unit": "ns/iter",
            "extra": "iterations: 42374\ncpu: 19906.13583801389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18953.948043645712,
            "unit": "ns/iter",
            "extra": "iterations: 43806\ncpu: 18953.068072866772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50912.65509628498,
            "unit": "ns/iter",
            "extra": "iterations: 16306\ncpu: 50911.31485342808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 275425.82575992914,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 275414.7289251026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208678.51137197207,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 208671.14208852977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212314.49415203842,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 212305.23879142277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 209913.82811361403,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 209905.5838795811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112016.81722798066,
            "unit": "ns/iter",
            "extra": "iterations: 7720\ncpu: 112010.75129533744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 200673.3695552597,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 200664.92434663008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 801741.2960135648,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 801703.7319762527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444532.1558375377,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 444514.61928934033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1978.3876520233136,
            "unit": "ns/iter",
            "extra": "iterations: 401912\ncpu: 1978.3581978144523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10599.465843547865,
            "unit": "ns/iter",
            "extra": "iterations: 77672\ncpu: 10599.08074981968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7854.08245454801,
            "unit": "ns/iter",
            "extra": "iterations: 105828\ncpu: 7853.787277469109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7807.987660131267,
            "unit": "ns/iter",
            "extra": "iterations: 106241\ncpu: 7807.56864110842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7582.837639957285,
            "unit": "ns/iter",
            "extra": "iterations: 109676\ncpu: 7582.483861555879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34219.16297436549,
            "unit": "ns/iter",
            "extra": "iterations: 24691\ncpu: 34217.32615122936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 266224.7772808621,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 266210.7632677395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200691.32504521293,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 200675.67811934906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197185.22514753244,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 197179.41443486122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196972.0551802016,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 196958.96396396405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100169.79782041222,
            "unit": "ns/iter",
            "extra": "iterations: 8809\ncpu: 100166.0120331477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 188754.89444204804,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 188738.36708315348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.78181182145894,
            "unit": "ns/iter",
            "extra": "iterations: 3847697\ncpu: 181.7753580908263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1454.012478464059,
            "unit": "ns/iter",
            "extra": "iterations: 485236\ncpu: 1453.9374654807102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1093.3367488324925,
            "unit": "ns/iter",
            "extra": "iterations: 635827\ncpu: 1093.2708110854126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1113.9654827365111,
            "unit": "ns/iter",
            "extra": "iterations: 629598\ncpu: 1113.9104635021129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 852.1302430700484,
            "unit": "ns/iter",
            "extra": "iterations: 821656\ncpu: 852.0711830741761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9779.505247732946,
            "unit": "ns/iter",
            "extra": "iterations: 71650\ncpu: 9779.110956036264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12625.191109990965,
            "unit": "ns/iter",
            "extra": "iterations: 55523\ncpu: 12624.321452371052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2709.642715419919,
            "unit": "ns/iter",
            "extra": "iterations: 251497\ncpu: 2706.301864435754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2696.2215587294318,
            "unit": "ns/iter",
            "extra": "iterations: 259904\ncpu: 2696.1343419108607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2705.0303647325263,
            "unit": "ns/iter",
            "extra": "iterations: 258820\ncpu: 2704.9891816706477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5241.707701418681,
            "unit": "ns/iter",
            "extra": "iterations: 133391\ncpu: 5241.616001079533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5211.525105769668,
            "unit": "ns/iter",
            "extra": "iterations: 134491\ncpu: 5211.3256649143705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1871.1120238117446,
            "unit": "ns/iter",
            "extra": "iterations: 370573\ncpu: 1871.0818111411472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9867.340666149736,
            "unit": "ns/iter",
            "extra": "iterations: 71005\ncpu: 9866.955848179552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7872.253268434025,
            "unit": "ns/iter",
            "extra": "iterations: 88957\ncpu: 7872.15396202661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7753.957837323895,
            "unit": "ns/iter",
            "extra": "iterations: 90388\ncpu: 7753.7571359029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7802.59177334978,
            "unit": "ns/iter",
            "extra": "iterations: 89830\ncpu: 7802.391183346335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17440.12947384168,
            "unit": "ns/iter",
            "extra": "iterations: 40178\ncpu: 17440.04430285243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51681.79439981376,
            "unit": "ns/iter",
            "extra": "iterations: 12821\ncpu: 51678.03603463048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43073.23117781043,
            "unit": "ns/iter",
            "extra": "iterations: 16191\ncpu: 43072.5094188133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43210.39640287961,
            "unit": "ns/iter",
            "extra": "iterations: 16680\ncpu: 43207.47601918434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42962.302727103306,
            "unit": "ns/iter",
            "extra": "iterations: 16391\ncpu: 42959.69129400219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25275.510150455942,
            "unit": "ns/iter",
            "extra": "iterations: 27782\ncpu: 25274.080339788172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41836.420001204,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 41834.49064323964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.2761996698323,
            "unit": "ns/iter",
            "extra": "iterations: 371894\ncpu: 1885.2030417269334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10009.34874299722,
            "unit": "ns/iter",
            "extra": "iterations: 69610\ncpu: 10008.876598189858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7935.186615215934,
            "unit": "ns/iter",
            "extra": "iterations: 88369\ncpu: 7934.766716835031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7945.50968087337,
            "unit": "ns/iter",
            "extra": "iterations: 87802\ncpu: 7945.091227990396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7850.172472368264,
            "unit": "ns/iter",
            "extra": "iterations: 89481\ncpu: 7849.6921134095355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17630.936256281228,
            "unit": "ns/iter",
            "extra": "iterations: 39800\ncpu: 17630.3693467338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53021.69658995659,
            "unit": "ns/iter",
            "extra": "iterations: 13167\ncpu: 53018.667881825924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41554.904616856686,
            "unit": "ns/iter",
            "extra": "iterations: 16743\ncpu: 41552.98930896537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41786.39710283601,
            "unit": "ns/iter",
            "extra": "iterations: 16706\ncpu: 41784.60433377281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41430.940164230335,
            "unit": "ns/iter",
            "extra": "iterations: 16562\ncpu: 41429.10276536638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25132.964463905566,
            "unit": "ns/iter",
            "extra": "iterations: 27859\ncpu: 25131.56251121694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41509.91661790767,
            "unit": "ns/iter",
            "extra": "iterations: 17090\ncpu: 41509.35634874234 ns\nthreads: 1"
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
        "date": 1705774908266,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 570.344495053772,
            "unit": "ns/iter",
            "extra": "iterations: 1225289\ncpu: 570.3138606483859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5242.280530000016,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5242.261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10321.341862073854,
            "unit": "ns/iter",
            "extra": "iterations: 80942\ncpu: 10321.35726816733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15286.102485328516,
            "unit": "ns/iter",
            "extra": "iterations: 54359\ncpu: 15285.306940892957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20184.20292861688,
            "unit": "ns/iter",
            "extra": "iterations: 41453\ncpu: 20183.612766265418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25114.56511256333,
            "unit": "ns/iter",
            "extra": "iterations: 33181\ncpu: 25114.44501371267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30354.33690963588,
            "unit": "ns/iter",
            "extra": "iterations: 27589\ncpu: 30352.67316684187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34848.8927049533,
            "unit": "ns/iter",
            "extra": "iterations: 23701\ncpu: 34847.30602084302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39188.86292404038,
            "unit": "ns/iter",
            "extra": "iterations: 21696\ncpu: 39187.12205014745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.6826110112353,
            "unit": "ns/iter",
            "extra": "iterations: 1261764\ncpu: 542.6571847033209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 427.20887141778036,
            "unit": "ns/iter",
            "extra": "iterations: 1639535\ncpu: 427.19197821333495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 416.28738423222154,
            "unit": "ns/iter",
            "extra": "iterations: 1681491\ncpu: 416.2751391473406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.4104798513177,
            "unit": "ns/iter",
            "extra": "iterations: 1674623\ncpu: 412.40428442700204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 838.8588671099088,
            "unit": "ns/iter",
            "extra": "iterations: 831996\ncpu: 838.8284318674606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1958.9742385493885,
            "unit": "ns/iter",
            "extra": "iterations: 408595\ncpu: 1958.9094335466652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10370.48380056496,
            "unit": "ns/iter",
            "extra": "iterations: 79725\ncpu: 10370.217623079334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8263.742260597846,
            "unit": "ns/iter",
            "extra": "iterations: 98328\ncpu: 8263.4986982345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8153.12996602258,
            "unit": "ns/iter",
            "extra": "iterations: 98595\ncpu: 8152.968203255727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7872.039508763732,
            "unit": "ns/iter",
            "extra": "iterations: 103901\ncpu: 7871.748106370484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35198.762668488096,
            "unit": "ns/iter",
            "extra": "iterations: 23444\ncpu: 35197.98669169086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241572.33228928753,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 241559.36788154935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185141.2717738251,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 185139.17008663967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183339.97079466053,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 183330.69956984432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 193121.3217962733,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 193115.2245345011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100751.52909258277,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 100748.0835834682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187284.93257461672,
            "unit": "ns/iter",
            "extra": "iterations: 4657\ncpu: 187281.83379858287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5385.370144875186,
            "unit": "ns/iter",
            "extra": "iterations: 149301\ncpu: 5385.172235952868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24959.238420970993,
            "unit": "ns/iter",
            "extra": "iterations: 33185\ncpu: 24958.204007834833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19592.04931289299,
            "unit": "ns/iter",
            "extra": "iterations: 42788\ncpu: 19587.346919697145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19563.27048731021,
            "unit": "ns/iter",
            "extra": "iterations: 41965\ncpu: 19561.877755272268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18831.32887944736,
            "unit": "ns/iter",
            "extra": "iterations: 43782\ncpu: 18830.727239504777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51182.580609817145,
            "unit": "ns/iter",
            "extra": "iterations: 16431\ncpu: 51182.31391881186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269847.3209345348,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 269839.77866584837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208099.4738617222,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 208090.0987713805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206511.05527638682,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 206501.579325197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204623.614474931,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 204613.83632923494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107081.13258255355,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 107077.65549014584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188912.13458921708,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 188900.6354970499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 790429.1042016766,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 790391.1764705867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 437523.8763039824,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 437507.20317933406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1990.0132459499573,
            "unit": "ns/iter",
            "extra": "iterations: 404501\ncpu: 1989.9090484325259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10701.971492251056,
            "unit": "ns/iter",
            "extra": "iterations: 77172\ncpu: 10701.478515523837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8132.557418306937,
            "unit": "ns/iter",
            "extra": "iterations: 100926\ncpu: 8132.224600202151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8070.413597400803,
            "unit": "ns/iter",
            "extra": "iterations: 102196\ncpu: 8070.0624290579035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7835.654620903724,
            "unit": "ns/iter",
            "extra": "iterations: 105791\ncpu: 7835.725156204184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34321.86184831455,
            "unit": "ns/iter",
            "extra": "iterations: 24379\ncpu: 34319.99671848723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261310.9637214879,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 261301.3165593924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194322.72547715617,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 194315.57922769763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197507.858991521,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 197500.80321285196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182883.30317741306,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 182873.54368932045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99382.69873330383,
            "unit": "ns/iter",
            "extra": "iterations: 8763\ncpu: 99377.8386397355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181611.8218770044,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 181605.74590338397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.78283493200385,
            "unit": "ns/iter",
            "extra": "iterations: 3763667\ncpu: 180.77484006954018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1424.5490381485674,
            "unit": "ns/iter",
            "extra": "iterations: 488589\ncpu: 1424.447951140949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1144.1133837479144,
            "unit": "ns/iter",
            "extra": "iterations: 611331\ncpu: 1144.1047484914122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1089.4068768622074,
            "unit": "ns/iter",
            "extra": "iterations: 640990\ncpu: 1089.3461676469174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 839.6900584586178,
            "unit": "ns/iter",
            "extra": "iterations: 836832\ncpu: 839.6645921762012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9569.65957853584,
            "unit": "ns/iter",
            "extra": "iterations: 73221\ncpu: 9569.277939388952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12646.84898854512,
            "unit": "ns/iter",
            "extra": "iterations: 55168\ncpu: 12645.984991299241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2802.585487568778,
            "unit": "ns/iter",
            "extra": "iterations: 249083\ncpu: 2802.468253554027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2779.2536145486456,
            "unit": "ns/iter",
            "extra": "iterations: 251622\ncpu: 2779.127023869133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2791.6924407185297,
            "unit": "ns/iter",
            "extra": "iterations: 250963\ncpu: 2791.6047385471147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5333.348307396431,
            "unit": "ns/iter",
            "extra": "iterations: 130893\ncpu: 5333.280618520449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5350.41982792163,
            "unit": "ns/iter",
            "extra": "iterations: 130987\ncpu: 5350.1393268034235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1905.3825953104042,
            "unit": "ns/iter",
            "extra": "iterations: 367694\ncpu: 1905.2731347261833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9978.74966272483,
            "unit": "ns/iter",
            "extra": "iterations: 70417\ncpu: 9978.437025150117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7892.732581827751,
            "unit": "ns/iter",
            "extra": "iterations: 88356\ncpu: 7892.481551903655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7937.950359834216,
            "unit": "ns/iter",
            "extra": "iterations: 88235\ncpu: 7937.856859522785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7910.0373573272345,
            "unit": "ns/iter",
            "extra": "iterations: 88577\ncpu: 7909.884055680272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17480.561227047885,
            "unit": "ns/iter",
            "extra": "iterations: 39868\ncpu: 17478.90538777968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54989.04705882523,
            "unit": "ns/iter",
            "extra": "iterations: 12750\ncpu: 54987.19999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43961.90522957724,
            "unit": "ns/iter",
            "extra": "iterations: 15986\ncpu: 43958.645064431235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42922.44673021946,
            "unit": "ns/iter",
            "extra": "iterations: 16576\ncpu: 42922.351592664825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41339.189862595376,
            "unit": "ns/iter",
            "extra": "iterations: 16375\ncpu: 41336.201526718025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25452.4030634447,
            "unit": "ns/iter",
            "extra": "iterations: 27616\ncpu: 25451.767091541256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42809.03743381321,
            "unit": "ns/iter",
            "extra": "iterations: 16429\ncpu: 42806.963296609516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1901.6114663830492,
            "unit": "ns/iter",
            "extra": "iterations: 369044\ncpu: 1901.5954737104405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10207.978704939203,
            "unit": "ns/iter",
            "extra": "iterations: 69124\ncpu: 10207.691973844085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7849.687938502618,
            "unit": "ns/iter",
            "extra": "iterations: 87941\ncpu: 7849.653745124541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7972.487244197319,
            "unit": "ns/iter",
            "extra": "iterations: 87568\ncpu: 7972.354056276307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7834.770797040258,
            "unit": "ns/iter",
            "extra": "iterations: 88402\ncpu: 7834.370263116305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17499.767493220108,
            "unit": "ns/iter",
            "extra": "iterations: 39844\ncpu: 17499.08392731643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51566.126656728076,
            "unit": "ns/iter",
            "extra": "iterations: 12751\ncpu: 51565.40663477381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40974.36883163036,
            "unit": "ns/iter",
            "extra": "iterations: 16921\ncpu: 40974.77690443883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40396.74124546778,
            "unit": "ns/iter",
            "extra": "iterations: 17391\ncpu: 40394.019895348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40387.99879220373,
            "unit": "ns/iter",
            "extra": "iterations: 17387\ncpu: 40385.93776959787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25609.753967674853,
            "unit": "ns/iter",
            "extra": "iterations: 27346\ncpu: 25608.706940685955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42925.90350664471,
            "unit": "ns/iter",
            "extra": "iterations: 16540\ncpu: 42924.61305925025 ns\nthreads: 1"
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
        "date": 1705778474207,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 551.3545407328959,
            "unit": "ns/iter",
            "extra": "iterations: 1289990\ncpu: 551.3231110318685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5123.258979999719,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5122.723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10064.218474758161,
            "unit": "ns/iter",
            "extra": "iterations: 83790\ncpu: 10063.7641723356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15109.659302660193,
            "unit": "ns/iter",
            "extra": "iterations: 55812\ncpu: 15109.268616068233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19870.575504589586,
            "unit": "ns/iter",
            "extra": "iterations: 42163\ncpu: 19870.106491473576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24841.58055212237,
            "unit": "ns/iter",
            "extra": "iterations: 33978\ncpu: 24841.0648066396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29846.7017949186,
            "unit": "ns/iter",
            "extra": "iterations: 28135\ncpu: 29845.242580415845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34994.379362103005,
            "unit": "ns/iter",
            "extra": "iterations: 23985\ncpu: 34992.4619553888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39566.37471626408,
            "unit": "ns/iter",
            "extra": "iterations: 21587\ncpu: 39565.15958678839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 547.2257818018455,
            "unit": "ns/iter",
            "extra": "iterations: 1279864\ncpu: 547.1965771363207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 424.00464556175416,
            "unit": "ns/iter",
            "extra": "iterations: 1651684\ncpu: 423.9896977872286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 420.0256377243546,
            "unit": "ns/iter",
            "extra": "iterations: 1677684\ncpu: 420.0227217998143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 419.3426586961226,
            "unit": "ns/iter",
            "extra": "iterations: 1648229\ncpu: 419.34336794219786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 857.6069320673857,
            "unit": "ns/iter",
            "extra": "iterations: 832075\ncpu: 857.6008172340237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2067.6470051017973,
            "unit": "ns/iter",
            "extra": "iterations: 386524\ncpu: 2067.5748465813263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10946.738297074371,
            "unit": "ns/iter",
            "extra": "iterations: 74554\ncpu: 10946.126297717074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8115.671798412022,
            "unit": "ns/iter",
            "extra": "iterations: 101395\ncpu: 8115.402140144963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8220.329986184443,
            "unit": "ns/iter",
            "extra": "iterations: 99886\ncpu: 8220.007808902148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7802.878193101459,
            "unit": "ns/iter",
            "extra": "iterations: 103935\ncpu: 7802.59970173666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34731.16786874149,
            "unit": "ns/iter",
            "extra": "iterations: 23709\ncpu: 34729.84098865411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245742.94621514523,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 245739.84063745078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 178542.8087232929,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 178534.82507950877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187941.35090910335,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 187933.7727272726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 181854.57316016435,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 181845.41125541108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98644.7603048187,
            "unit": "ns/iter",
            "extra": "iterations: 8661\ncpu: 98641.51945502832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 190502.58169227518,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 190490.82449686193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5421.922461750415,
            "unit": "ns/iter",
            "extra": "iterations: 151177\ncpu: 5421.883619862814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24745.047964679005,
            "unit": "ns/iter",
            "extra": "iterations: 33066\ncpu: 24744.889009859067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19612.26288479821,
            "unit": "ns/iter",
            "extra": "iterations: 42977\ncpu: 19612.257719245186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19423.88499350782,
            "unit": "ns/iter",
            "extra": "iterations: 43128\ncpu: 19423.7780560193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18954.923623938295,
            "unit": "ns/iter",
            "extra": "iterations: 43312\ncpu: 18954.901643886238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50268.535694554055,
            "unit": "ns/iter",
            "extra": "iterations: 16291\ncpu: 50267.58332821805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 266853.7342767306,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 266842.0125786162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 210984.05811137642,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 210979.6610169498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203049.69471671848,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 203041.97944059354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 209429.62013064753,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 209416.4045487543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110357.36628205319,
            "unit": "ns/iter",
            "extra": "iterations: 7800\ncpu: 110352.78205128135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 200495.71009471692,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 200491.40679140636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797349.5156646952,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 797327.8577476767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440440.258751863,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 440431.7605276508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2021.2685217451312,
            "unit": "ns/iter",
            "extra": "iterations: 401744\ncpu: 2021.0405133617332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10461.216503081017,
            "unit": "ns/iter",
            "extra": "iterations: 78858\ncpu: 10460.601334043506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7780.9545644336295,
            "unit": "ns/iter",
            "extra": "iterations: 105380\ncpu: 7780.438413361159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7769.728978056938,
            "unit": "ns/iter",
            "extra": "iterations: 105818\ncpu: 7769.399346046947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7354.432132643873,
            "unit": "ns/iter",
            "extra": "iterations: 112602\ncpu: 7353.9475320154315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34221.15797012607,
            "unit": "ns/iter",
            "extra": "iterations: 24435\ncpu: 34218.77225291589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260320.83567662555,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 260303.04628002184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 196630.34267910421,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 196623.8985313766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186476.28338344788,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 186457.29927007362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183175.49570390076,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 183168.6054196961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98644.25465766642,
            "unit": "ns/iter",
            "extra": "iterations: 8749\ncpu: 98640.35889816006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176697.4987266686,
            "unit": "ns/iter",
            "extra": "iterations: 4712\ncpu: 176693.61205432864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.5141447026925,
            "unit": "ns/iter",
            "extra": "iterations: 3871414\ncpu: 180.50905948059176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1427.8347644544483,
            "unit": "ns/iter",
            "extra": "iterations: 487613\ncpu: 1427.8196028407795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1145.4641232746824,
            "unit": "ns/iter",
            "extra": "iterations: 612096\ncpu: 1145.4345396800466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1029.899544629403,
            "unit": "ns/iter",
            "extra": "iterations: 679227\ncpu: 1029.9095883997522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 835.9474348427024,
            "unit": "ns/iter",
            "extra": "iterations: 824082\ncpu: 835.924701668038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9500.185532268957,
            "unit": "ns/iter",
            "extra": "iterations: 74483\ncpu: 9499.367640938251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12356.206009344869,
            "unit": "ns/iter",
            "extra": "iterations: 56279\ncpu: 12355.551804403063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2615.1171395982137,
            "unit": "ns/iter",
            "extra": "iterations: 256873\ncpu: 2614.938510470151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2672.7197788695016,
            "unit": "ns/iter",
            "extra": "iterations: 264459\ncpu: 2672.66532808489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2594.506210224037,
            "unit": "ns/iter",
            "extra": "iterations: 259894\ncpu: 2594.4331150391945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5274.348750631919,
            "unit": "ns/iter",
            "extra": "iterations: 128665\ncpu: 5274.36832083318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5168.456716285082,
            "unit": "ns/iter",
            "extra": "iterations: 135097\ncpu: 5168.280568776486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1923.6538477612671,
            "unit": "ns/iter",
            "extra": "iterations: 358975\ncpu: 1923.592450727777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9978.487658181675,
            "unit": "ns/iter",
            "extra": "iterations: 70330\ncpu: 9978.32077349629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7841.158903248907,
            "unit": "ns/iter",
            "extra": "iterations: 89136\ncpu: 7840.936322024789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7746.3605583409135,
            "unit": "ns/iter",
            "extra": "iterations: 90554\ncpu: 7746.300549948109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7937.090787017941,
            "unit": "ns/iter",
            "extra": "iterations: 87876\ncpu: 7936.685784514458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17681.147255859287,
            "unit": "ns/iter",
            "extra": "iterations: 39557\ncpu: 17680.78469044663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54367.985332177734,
            "unit": "ns/iter",
            "extra": "iterations: 12749\ncpu: 54366.06792689597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40334.487602784786,
            "unit": "ns/iter",
            "extra": "iterations: 15931\ncpu: 40333.99661038179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43620.450095438035,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 43618.360938365506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41180.5328820675,
            "unit": "ns/iter",
            "extra": "iterations: 17137\ncpu: 41180.65589076319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25173.852860647778,
            "unit": "ns/iter",
            "extra": "iterations: 28123\ncpu: 25173.000746719914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40203.2619079271,
            "unit": "ns/iter",
            "extra": "iterations: 15032\ncpu: 40202.534592868826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1896.1346190987435,
            "unit": "ns/iter",
            "extra": "iterations: 367615\ncpu: 1896.076873903378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9878.090749488272,
            "unit": "ns/iter",
            "extra": "iterations: 71769\ncpu: 9877.840014490968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7748.926784665621,
            "unit": "ns/iter",
            "extra": "iterations: 90227\ncpu: 7748.947654249911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7809.31880762025,
            "unit": "ns/iter",
            "extra": "iterations: 89703\ncpu: 7808.848087577901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7680.177716573421,
            "unit": "ns/iter",
            "extra": "iterations: 90408\ncpu: 7679.947571011412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18021.78574373711,
            "unit": "ns/iter",
            "extra": "iterations: 38804\ncpu: 18021.366353984115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53143.86929998753,
            "unit": "ns/iter",
            "extra": "iterations: 13114\ncpu: 53143.381119414145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41989.88928201495,
            "unit": "ns/iter",
            "extra": "iterations: 16393\ncpu: 41988.49508936756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42545.98949040449,
            "unit": "ns/iter",
            "extra": "iterations: 16366\ncpu: 42545.26457289511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40593.46386595438,
            "unit": "ns/iter",
            "extra": "iterations: 16591\ncpu: 40591.76662045666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25749.025667427326,
            "unit": "ns/iter",
            "extra": "iterations: 27194\ncpu: 25748.52908729903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43295.51092828904,
            "unit": "ns/iter",
            "extra": "iterations: 16288\ncpu: 43293.32637524589 ns\nthreads: 1"
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
        "date": 1705953639425,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 561.1211974910319,
            "unit": "ns/iter",
            "extra": "iterations: 1246907\ncpu: 561.1161056919241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5356.779500000357,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5356.697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10282.704599284432,
            "unit": "ns/iter",
            "extra": "iterations: 80643\ncpu: 10282.743697531094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15586.884847247104,
            "unit": "ns/iter",
            "extra": "iterations: 53911\ncpu: 15586.7485299846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20618.52371517337,
            "unit": "ns/iter",
            "extra": "iterations: 40881\ncpu: 20618.54406692595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25854.364744084935,
            "unit": "ns/iter",
            "extra": "iterations: 32335\ncpu: 25853.05396629038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30733.263044822932,
            "unit": "ns/iter",
            "extra": "iterations: 27463\ncpu: 30732.63299712343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35953.77926621434,
            "unit": "ns/iter",
            "extra": "iterations: 23440\ncpu: 35953.75000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40735.69340807925,
            "unit": "ns/iter",
            "extra": "iterations: 20692\ncpu: 40734.80572201824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 565.7424504340066,
            "unit": "ns/iter",
            "extra": "iterations: 1235071\ncpu: 565.7343585915298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 442.34409685463703,
            "unit": "ns/iter",
            "extra": "iterations: 1579192\ncpu: 442.3291784659496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 431.66191792975775,
            "unit": "ns/iter",
            "extra": "iterations: 1619027\ncpu: 431.6670444655961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 436.3799862294229,
            "unit": "ns/iter",
            "extra": "iterations: 1606324\ncpu: 436.3729857737287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 895.3643401041545,
            "unit": "ns/iter",
            "extra": "iterations: 782313\ncpu: 895.3574847918943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2063.3883455426003,
            "unit": "ns/iter",
            "extra": "iterations: 388641\ncpu: 2063.35229684979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 11002.500187955595,
            "unit": "ns/iter",
            "extra": "iterations: 74486\ncpu: 11002.483688209859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8249.322989613132,
            "unit": "ns/iter",
            "extra": "iterations: 98675\ncpu: 8249.204965796811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8431.595055413638,
            "unit": "ns/iter",
            "extra": "iterations: 99705\ncpu: 8431.22411112784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7998.0523276541235,
            "unit": "ns/iter",
            "extra": "iterations: 100960\ncpu: 7997.9199683043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35173.495621940674,
            "unit": "ns/iter",
            "extra": "iterations: 23298\ncpu: 35173.482702377834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 229128.84564290996,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 229120.51009564372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184042.62678774373,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 184040.15891032916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188455.42776397598,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 188452.09134071885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188671.64736367704,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 188672.3749436682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101689.3276022217,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 101687.04693308572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 178461.33218291227,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 178456.14754098357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5405.061287107129,
            "unit": "ns/iter",
            "extra": "iterations: 153507\ncpu: 5404.906616636377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24414.044706438108,
            "unit": "ns/iter",
            "extra": "iterations: 33843\ncpu: 24414.398841710237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19837.669147976278,
            "unit": "ns/iter",
            "extra": "iterations: 42182\ncpu: 19836.743160589747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19248.71422248166,
            "unit": "ns/iter",
            "extra": "iterations: 42925\ncpu: 19248.61968549801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19018.205589735473,
            "unit": "ns/iter",
            "extra": "iterations: 43723\ncpu: 19017.455343869377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50946.05365559381,
            "unit": "ns/iter",
            "extra": "iterations: 16550\ncpu: 50946.70694864061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 252100.81453097955,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 252092.9797670134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206899.06039627787,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 206894.4855574122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199344.25982286318,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 199343.49307290494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197497.63855990808,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 197494.78919943213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108366.46318556619,
            "unit": "ns/iter",
            "extra": "iterations: 7986\ncpu: 108363.23566240986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196579.2850647876,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 196574.4942032283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789271.059966191,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 789258.9527026989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434607.2954990098,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 434591.3405088058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1990.2045235298854,
            "unit": "ns/iter",
            "extra": "iterations: 402208\ncpu: 1990.1986037075317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10723.203203190948,
            "unit": "ns/iter",
            "extra": "iterations: 77735\ncpu: 10723.128577860656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7998.874531018431,
            "unit": "ns/iter",
            "extra": "iterations: 103149\ncpu: 7998.8870468932855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7911.675419149837,
            "unit": "ns/iter",
            "extra": "iterations: 104199\ncpu: 7911.612395512443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7517.031468436761,
            "unit": "ns/iter",
            "extra": "iterations: 109729\ncpu: 7516.671982793933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34292.941395997244,
            "unit": "ns/iter",
            "extra": "iterations: 24384\ncpu: 34292.03986220474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247677.3109197091,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 247669.7971658789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 193273.08226385375,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 193269.13528297943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189718.53714041857,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 189709.3387720065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193717.5025992834,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 193705.63526720728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99686.20022779857,
            "unit": "ns/iter",
            "extra": "iterations: 8780\ncpu: 99682.8587699312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177185.70014405428,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 177180.59271455006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.99040505736087,
            "unit": "ns/iter",
            "extra": "iterations: 3844838\ncpu: 181.98917613694013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1450.5530202277237,
            "unit": "ns/iter",
            "extra": "iterations: 487993\ncpu: 1450.5257247542506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1128.9720457237543,
            "unit": "ns/iter",
            "extra": "iterations: 646842\ncpu: 1128.9098419706795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1044.654447352623,
            "unit": "ns/iter",
            "extra": "iterations: 671287\ncpu: 1044.6154923304098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 870.9377909240969,
            "unit": "ns/iter",
            "extra": "iterations: 796170\ncpu: 870.8515769245224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9708.23212653397,
            "unit": "ns/iter",
            "extra": "iterations: 72202\ncpu: 9708.06625855233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12107.89777716308,
            "unit": "ns/iter",
            "extra": "iterations: 57854\ncpu: 12107.665848515318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2679.9569083813726,
            "unit": "ns/iter",
            "extra": "iterations: 260886\ncpu: 2679.9950936424225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2765.3155752867874,
            "unit": "ns/iter",
            "extra": "iterations: 267597\ncpu: 2765.2342888746703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2789.094390121728,
            "unit": "ns/iter",
            "extra": "iterations: 252198\ncpu: 2789.103006368026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5111.392584349601,
            "unit": "ns/iter",
            "extra": "iterations: 132099\ncpu: 5111.152998887235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5096.588070673593,
            "unit": "ns/iter",
            "extra": "iterations: 132212\ncpu: 5096.307445617671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1899.794091949531,
            "unit": "ns/iter",
            "extra": "iterations: 367397\ncpu: 1899.7240042787616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9913.5946256058,
            "unit": "ns/iter",
            "extra": "iterations: 70594\ncpu: 9912.950109074316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7801.697258694935,
            "unit": "ns/iter",
            "extra": "iterations: 89337\ncpu: 7801.616351567658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7969.417777576265,
            "unit": "ns/iter",
            "extra": "iterations: 88066\ncpu: 7969.060704471746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.274016618293,
            "unit": "ns/iter",
            "extra": "iterations: 88699\ncpu: 7902.791463263416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17593.30824767928,
            "unit": "ns/iter",
            "extra": "iterations: 39890\ncpu: 17592.642266232015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53458.53693638337,
            "unit": "ns/iter",
            "extra": "iterations: 13063\ncpu: 53456.12799509968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43041.005929091996,
            "unit": "ns/iter",
            "extra": "iterations: 16360\ncpu: 43038.1112469439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42655.61710733146,
            "unit": "ns/iter",
            "extra": "iterations: 16566\ncpu: 42653.5313292288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41710.912167460236,
            "unit": "ns/iter",
            "extra": "iterations: 16577\ncpu: 41709.22362309177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25472.788054163277,
            "unit": "ns/iter",
            "extra": "iterations: 27474\ncpu: 25470.797845235833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41989.90833034288,
            "unit": "ns/iter",
            "extra": "iterations: 16734\ncpu: 41989.0402772806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1883.474036941621,
            "unit": "ns/iter",
            "extra": "iterations: 369448\ncpu: 1883.387648600102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10142.769294150201,
            "unit": "ns/iter",
            "extra": "iterations: 69179\ncpu: 10142.294626982122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7855.7243460321415,
            "unit": "ns/iter",
            "extra": "iterations: 89148\ncpu: 7855.04105532373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7900.181360937698,
            "unit": "ns/iter",
            "extra": "iterations: 89071\ncpu: 7899.976423302754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7905.257448941314,
            "unit": "ns/iter",
            "extra": "iterations: 88771\ncpu: 7903.694900361602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17661.718073935208,
            "unit": "ns/iter",
            "extra": "iterations: 39521\ncpu: 17661.946813086775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52008.75293589642,
            "unit": "ns/iter",
            "extra": "iterations: 13369\ncpu: 52009.42478869103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41454.12074840346,
            "unit": "ns/iter",
            "extra": "iterations: 16729\ncpu: 41454.23516050021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41710.91232521322,
            "unit": "ns/iter",
            "extra": "iterations: 16949\ncpu: 41709.84718862501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41136.62332076576,
            "unit": "ns/iter",
            "extra": "iterations: 16972\ncpu: 41137.14353052104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25286.261789381068,
            "unit": "ns/iter",
            "extra": "iterations: 27652\ncpu: 25285.18732822261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40771.987205466234,
            "unit": "ns/iter",
            "extra": "iterations: 17273\ncpu: 40772.072019915526 ns\nthreads: 1"
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
        "date": 1705955064446,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.176580384721,
            "unit": "ns/iter",
            "extra": "iterations: 1234905\ncpu: 564.161939582397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5271.337980000226,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5271.311999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10269.878101656022,
            "unit": "ns/iter",
            "extra": "iterations: 80723\ncpu: 10269.622040806216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15307.222951479187,
            "unit": "ns/iter",
            "extra": "iterations: 54698\ncpu: 15307.263519689941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19762.298062979902,
            "unit": "ns/iter",
            "extra": "iterations: 38616\ncpu: 19761.69463434846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24535.381227584698,
            "unit": "ns/iter",
            "extra": "iterations: 33741\ncpu: 24535.18271539075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29739.719414702507,
            "unit": "ns/iter",
            "extra": "iterations: 28020\ncpu: 29739.27194860813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34491.1992287964,
            "unit": "ns/iter",
            "extra": "iterations: 24118\ncpu: 34490.45526163032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39559.384856731835,
            "unit": "ns/iter",
            "extra": "iterations: 21673\ncpu: 39558.61671203796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 541.3940881294949,
            "unit": "ns/iter",
            "extra": "iterations: 1294345\ncpu: 541.3949140298754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 421.9627129609965,
            "unit": "ns/iter",
            "extra": "iterations: 1659987\ncpu: 421.9624009103684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.3746344196667,
            "unit": "ns/iter",
            "extra": "iterations: 1677470\ncpu: 417.37026593620175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 392.02804414465487,
            "unit": "ns/iter",
            "extra": "iterations: 1679388\ncpu: 392.0219151262242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 835.1819001982144,
            "unit": "ns/iter",
            "extra": "iterations: 840186\ncpu: 835.1923264610446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2059.6490643313473,
            "unit": "ns/iter",
            "extra": "iterations: 388225\ncpu: 2059.525790456564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10822.281443612637,
            "unit": "ns/iter",
            "extra": "iterations: 75699\ncpu: 10821.959338960882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8195.857227399745,
            "unit": "ns/iter",
            "extra": "iterations: 99697\ncpu: 8195.665867578766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8355.998571810125,
            "unit": "ns/iter",
            "extra": "iterations: 97326\ncpu: 8355.813451698423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8112.276045221388,
            "unit": "ns/iter",
            "extra": "iterations: 101103\ncpu: 8112.180647458514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34930.51608669884,
            "unit": "ns/iter",
            "extra": "iterations: 23622\ncpu: 34930.03556007107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236390.5262125179,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 236381.69329969233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188885.47797457513,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 188879.1553133512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196300.20865428698,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 196296.21658359768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 193279.74612227464,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 193273.3576642339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100677.6056971474,
            "unit": "ns/iter",
            "extra": "iterations: 8671\ncpu: 100674.30515511462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189143.46308431972,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 189136.30406290968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5364.12359055316,
            "unit": "ns/iter",
            "extra": "iterations: 152010\ncpu: 5363.964870732192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25425.040378666643,
            "unit": "ns/iter",
            "extra": "iterations: 32641\ncpu: 25424.190435342076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19695.797043360024,
            "unit": "ns/iter",
            "extra": "iterations: 42413\ncpu: 19695.286822436527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19489.605347519242,
            "unit": "ns/iter",
            "extra": "iterations: 42113\ncpu: 19489.183862465314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19322.50038967496,
            "unit": "ns/iter",
            "extra": "iterations: 42343\ncpu: 19322.23508017857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50209.12054977182,
            "unit": "ns/iter",
            "extra": "iterations: 16516\ncpu: 50208.69459917634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269785.60206636245,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 269778.9918597376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204724.3221606128,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 204719.82155775136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 211342.32555925526,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 211327.55830556893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 209733.5364848429,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 209725.09090909103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110914.68062093819,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 110910.68838274643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197132.81264941322,
            "unit": "ns/iter",
            "extra": "iterations: 4601\ncpu: 197129.12410345557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 806328.3288135601,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 806147.3728813538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453342.4629155719,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 453336.2659846562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1992.9803071593897,
            "unit": "ns/iter",
            "extra": "iterations: 400704\ncpu: 1992.9381788052913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10663.037966687782,
            "unit": "ns/iter",
            "extra": "iterations: 77568\ncpu: 10662.90867367987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8141.476622859462,
            "unit": "ns/iter",
            "extra": "iterations: 100440\ncpu: 8141.090203106379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7481.62972521955,
            "unit": "ns/iter",
            "extra": "iterations: 109651\ncpu: 7481.599803011384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7024.768683984967,
            "unit": "ns/iter",
            "extra": "iterations: 120143\ncpu: 7024.449198038995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34103.80782860229,
            "unit": "ns/iter",
            "extra": "iterations: 24551\ncpu: 34102.47240438251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 253571.52094769813,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 253567.55273042416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 195536.0054848753,
            "unit": "ns/iter",
            "extra": "iterations: 4558\ncpu: 195534.02808249267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194624.12797685407,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 194623.90385043487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193883.5178845698,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 193880.14044327426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98170.91733691042,
            "unit": "ns/iter",
            "extra": "iterations: 8952\ncpu: 98167.90661304758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186506.1927149345,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 186502.18127911942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.3545907773665,
            "unit": "ns/iter",
            "extra": "iterations: 3869813\ncpu: 181.35695445748854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1441.413273408807,
            "unit": "ns/iter",
            "extra": "iterations: 488616\ncpu: 1441.4165725232108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1100.380160239707,
            "unit": "ns/iter",
            "extra": "iterations: 636671\ncpu: 1100.3761754501188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1025.7053746508745,
            "unit": "ns/iter",
            "extra": "iterations: 678258\ncpu: 1025.6891920183718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 843.2234682744013,
            "unit": "ns/iter",
            "extra": "iterations: 829375\ncpu: 843.2236322532033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9516.699404558847,
            "unit": "ns/iter",
            "extra": "iterations: 73727\ncpu: 9516.82829899499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12032.816644612403,
            "unit": "ns/iter",
            "extra": "iterations: 58193\ncpu: 12032.833845995254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2507.154471609381,
            "unit": "ns/iter",
            "extra": "iterations: 251140\ncpu: 2507.016405192306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2686.9479820732527,
            "unit": "ns/iter",
            "extra": "iterations: 260391\ncpu: 2686.8682097307574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2703.1542822519705,
            "unit": "ns/iter",
            "extra": "iterations: 259116\ncpu: 2703.0889640161063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5016.907457765185,
            "unit": "ns/iter",
            "extra": "iterations: 140109\ncpu: 5016.839746197613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5205.9008014309065,
            "unit": "ns/iter",
            "extra": "iterations: 134135\ncpu: 5205.504156260446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.1129741211337,
            "unit": "ns/iter",
            "extra": "iterations: 374245\ncpu: 1874.0683242261334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9888.459037657216,
            "unit": "ns/iter",
            "extra": "iterations: 70931\ncpu: 9887.854393706519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7835.769880676439,
            "unit": "ns/iter",
            "extra": "iterations: 88415\ncpu: 7835.88078945882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7759.646837905168,
            "unit": "ns/iter",
            "extra": "iterations: 89466\ncpu: 7759.354391612509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7960.427776132597,
            "unit": "ns/iter",
            "extra": "iterations: 87838\ncpu: 7959.885243288815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17570.692951553243,
            "unit": "ns/iter",
            "extra": "iterations: 40023\ncpu: 17570.38203033278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53225.957819093266,
            "unit": "ns/iter",
            "extra": "iterations: 12802\ncpu: 53224.847680049446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45236.8622386994,
            "unit": "ns/iter",
            "extra": "iterations: 15643\ncpu: 45236.073643163436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44876.161464356155,
            "unit": "ns/iter",
            "extra": "iterations: 15570\ncpu: 44873.545279383536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44422.82840348714,
            "unit": "ns/iter",
            "extra": "iterations: 15822\ncpu: 44419.71305776802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25856.105749336748,
            "unit": "ns/iter",
            "extra": "iterations: 27064\ncpu: 25855.62370676916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43883.45995251603,
            "unit": "ns/iter",
            "extra": "iterations: 16006\ncpu: 43883.318755466564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1913.8823775316828,
            "unit": "ns/iter",
            "extra": "iterations: 365993\ncpu: 1913.864746047051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10088.243244801874,
            "unit": "ns/iter",
            "extra": "iterations: 69354\ncpu: 10087.993482712065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7951.020533833923,
            "unit": "ns/iter",
            "extra": "iterations: 87368\ncpu: 7950.884763299997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8058.4349212928255,
            "unit": "ns/iter",
            "extra": "iterations: 86841\ncpu: 8058.31577250366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7960.1345683812715,
            "unit": "ns/iter",
            "extra": "iterations: 87554\ncpu: 7960.127464193635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17506.22128216855,
            "unit": "ns/iter",
            "extra": "iterations: 39714\ncpu: 17506.0331369292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53987.11593414798,
            "unit": "ns/iter",
            "extra": "iterations: 12878\ncpu: 53986.25562975591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42731.05769348197,
            "unit": "ns/iter",
            "extra": "iterations: 16449\ncpu: 42731.63718159199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42245.4464877921,
            "unit": "ns/iter",
            "extra": "iterations: 16585\ncpu: 42245.5592402779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43251.983002316054,
            "unit": "ns/iter",
            "extra": "iterations: 16414\ncpu: 43251.21847203589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25509.014215218373,
            "unit": "ns/iter",
            "extra": "iterations: 27154\ncpu: 25508.20505266252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42719.06832408958,
            "unit": "ns/iter",
            "extra": "iterations: 16773\ncpu: 42717.90377392223 ns\nthreads: 1"
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
        "date": 1705956936539,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 546.5731554238722,
            "unit": "ns/iter",
            "extra": "iterations: 1281026\ncpu: 546.5451130578145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5254.093319999811,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5254.153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10261.554166514137,
            "unit": "ns/iter",
            "extra": "iterations: 82071\ncpu: 10261.655152246225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15273.76199319045,
            "unit": "ns/iter",
            "extra": "iterations: 54927\ncpu: 15273.381033007447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20119.020054651573,
            "unit": "ns/iter",
            "extra": "iterations: 42085\ncpu: 20118.9164785553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24844.799601225877,
            "unit": "ns/iter",
            "extra": "iterations: 33603\ncpu: 24844.153795792063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30244.761650520617,
            "unit": "ns/iter",
            "extra": "iterations: 28282\ncpu: 30243.72392334347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35125.66969314689,
            "unit": "ns/iter",
            "extra": "iterations: 23790\ncpu: 35124.581757040774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39961.654830408115,
            "unit": "ns/iter",
            "extra": "iterations: 21375\ncpu: 39960.42573099414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 537.2455180813388,
            "unit": "ns/iter",
            "extra": "iterations: 1269434\ncpu: 537.225487894605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 442.7937092904864,
            "unit": "ns/iter",
            "extra": "iterations: 1579790\ncpu: 442.776634869192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 400.24785006133203,
            "unit": "ns/iter",
            "extra": "iterations: 1623651\ncpu: 400.2286205594679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 408.12215015222677,
            "unit": "ns/iter",
            "extra": "iterations: 1757550\ncpu: 408.1050894711381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 832.6843181621915,
            "unit": "ns/iter",
            "extra": "iterations: 841043\ncpu: 832.6504114533977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2011.224011508894,
            "unit": "ns/iter",
            "extra": "iterations: 408729\ncpu: 2011.1660782572342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10373.048493552062,
            "unit": "ns/iter",
            "extra": "iterations: 79392\ncpu: 10372.640820233788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7910.737267944765,
            "unit": "ns/iter",
            "extra": "iterations: 102831\ncpu: 7910.317900244093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8029.841636205679,
            "unit": "ns/iter",
            "extra": "iterations: 101772\ncpu: 8029.474708171207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7538.893992052672,
            "unit": "ns/iter",
            "extra": "iterations: 108473\ncpu: 7538.488840540951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34936.5625314131,
            "unit": "ns/iter",
            "extra": "iterations: 23876\ncpu: 34934.193332216455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240073.36294630766,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 240062.07478212024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188260.80076539793,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 188251.59837910868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187403.66289979228,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 187396.48187633255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 179647.6667424333,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 179638.4632871107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100524.86396594295,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 100519.4959143744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181852.03741350217,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 181842.14965397905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5345.147602181519,
            "unit": "ns/iter",
            "extra": "iterations: 151617\ncpu: 5344.865021732406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24930.470950621817,
            "unit": "ns/iter",
            "extra": "iterations: 32789\ncpu: 24928.787093232477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19459.614446550564,
            "unit": "ns/iter",
            "extra": "iterations: 42723\ncpu: 19459.691501064997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18986.25374551339,
            "unit": "ns/iter",
            "extra": "iterations: 43185\ncpu: 18985.793678360547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19026.932574531045,
            "unit": "ns/iter",
            "extra": "iterations: 43841\ncpu: 19026.003056499652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49900.76002390181,
            "unit": "ns/iter",
            "extra": "iterations: 16735\ncpu: 49900.59157454446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270325.2265964132,
            "unit": "ns/iter",
            "extra": "iterations: 3226\ncpu: 270322.38065716205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208401.44134615787,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 208401.70673076957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 208817.10135136003,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 208816.26281453844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 208329.99665630978,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 208331.02459995187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110664.34067045306,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 110665.85705249882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197850.02663933687,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 197851.79872495375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786844.5444630758,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 786834.3959731527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 443163.88722555316,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 443150.2994011981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1996.8815047145488,
            "unit": "ns/iter",
            "extra": "iterations: 402362\ncpu: 1996.856562001397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10242.604819517832,
            "unit": "ns/iter",
            "extra": "iterations: 79842\ncpu: 10238.667618546666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7788.919811633087,
            "unit": "ns/iter",
            "extra": "iterations: 105751\ncpu: 7788.6951423627415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8068.305460069112,
            "unit": "ns/iter",
            "extra": "iterations: 102691\ncpu: 8068.051727999502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7617.036941382682,
            "unit": "ns/iter",
            "extra": "iterations: 108415\ncpu: 7616.702485818334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34556.35316989031,
            "unit": "ns/iter",
            "extra": "iterations: 24433\ncpu: 34554.18900667127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243888.61204112403,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 243877.23935389327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189691.38992161857,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 189679.70884658367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188922.37437868252,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 188915.79304111932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198331.6993464119,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 198321.8165427099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96859.97703968192,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 96854.7815425768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178700.43161029354,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 178690.5339289502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.51125174114347,
            "unit": "ns/iter",
            "extra": "iterations: 3902596\ncpu: 180.50141495558267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1423.7941218444346,
            "unit": "ns/iter",
            "extra": "iterations: 490494\ncpu: 1423.7095662740014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1127.9807626931622,
            "unit": "ns/iter",
            "extra": "iterations: 614795\ncpu: 1127.9410209907358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1136.4297467068595,
            "unit": "ns/iter",
            "extra": "iterations: 615295\ncpu: 1136.4389439212084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 836.0094300679161,
            "unit": "ns/iter",
            "extra": "iterations: 838170\ncpu: 835.9617977259953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9446.480870377478,
            "unit": "ns/iter",
            "extra": "iterations: 74910\ncpu: 9445.992524362544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12313.664288475811,
            "unit": "ns/iter",
            "extra": "iterations: 56906\ncpu: 12312.970512775442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2786.5426343314466,
            "unit": "ns/iter",
            "extra": "iterations: 251077\ncpu: 2786.3296916881804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2783.0089432350906,
            "unit": "ns/iter",
            "extra": "iterations: 251475\ncpu: 2782.8643006263237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2806.311726779009,
            "unit": "ns/iter",
            "extra": "iterations: 250171\ncpu: 2806.165782604692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5219.583853996159,
            "unit": "ns/iter",
            "extra": "iterations: 131723\ncpu: 5219.405115279836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4932.45522848458,
            "unit": "ns/iter",
            "extra": "iterations: 136158\ncpu: 4932.4233610952215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1872.4866858646053,
            "unit": "ns/iter",
            "extra": "iterations: 374001\ncpu: 1872.4522126946404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9722.952970680733,
            "unit": "ns/iter",
            "extra": "iterations: 70977\ncpu: 9722.663679783522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8018.418728937568,
            "unit": "ns/iter",
            "extra": "iterations: 88131\ncpu: 8018.589372638472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7859.044081289596,
            "unit": "ns/iter",
            "extra": "iterations: 88178\ncpu: 7859.051010456134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7922.483772082701,
            "unit": "ns/iter",
            "extra": "iterations: 89383\ncpu: 7922.526654956657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17482.89998755269,
            "unit": "ns/iter",
            "extra": "iterations: 40165\ncpu: 17482.372712560682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51229.52942046772,
            "unit": "ns/iter",
            "extra": "iterations: 13511\ncpu: 51226.47472429918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42614.09647195234,
            "unit": "ns/iter",
            "extra": "iterations: 17290\ncpu: 42613.296703297056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42739.24862280263,
            "unit": "ns/iter",
            "extra": "iterations: 16519\ncpu: 42738.13790180966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42254.97409606351,
            "unit": "ns/iter",
            "extra": "iterations: 16677\ncpu: 42254.008514720954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25448.222451944028,
            "unit": "ns/iter",
            "extra": "iterations: 27570\ncpu: 25447.9035183172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41127.225717708985,
            "unit": "ns/iter",
            "extra": "iterations: 16720\ncpu: 41125.532296650956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1890.8892080273326,
            "unit": "ns/iter",
            "extra": "iterations: 370442\ncpu: 1890.89412107698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9958.774672502226,
            "unit": "ns/iter",
            "extra": "iterations: 70382\ncpu: 9958.803387229622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7928.333654459362,
            "unit": "ns/iter",
            "extra": "iterations: 89269\ncpu: 7928.191197392148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7862.4195077665045,
            "unit": "ns/iter",
            "extra": "iterations: 89226\ncpu: 7862.466097325834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7768.011072171088,
            "unit": "ns/iter",
            "extra": "iterations: 89594\ncpu: 7768.167511217332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17635.332878892925,
            "unit": "ns/iter",
            "extra": "iterations: 39609\ncpu: 17635.70148198639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50343.42737579662,
            "unit": "ns/iter",
            "extra": "iterations: 13143\ncpu: 50343.878870882625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42757.9098480026,
            "unit": "ns/iter",
            "extra": "iterations: 17171\ncpu: 42758.32508298853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42715.68381901231,
            "unit": "ns/iter",
            "extra": "iterations: 16266\ncpu: 42716.150252059284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42651.22525221779,
            "unit": "ns/iter",
            "extra": "iterations: 16355\ncpu: 42651.75175787258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25634.65557264257,
            "unit": "ns/iter",
            "extra": "iterations: 27312\ncpu: 25635.006590509427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42293.898849474506,
            "unit": "ns/iter",
            "extra": "iterations: 16688\ncpu: 42294.35522531116 ns\nthreads: 1"
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
        "date": 1705958484219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 562.9673161274073,
            "unit": "ns/iter",
            "extra": "iterations: 1211056\ncpu: 562.9244229829175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5196.801209999649,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5196.379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10028.320608749547,
            "unit": "ns/iter",
            "extra": "iterations: 82727\ncpu: 10027.873608374533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14938.28574001653,
            "unit": "ns/iter",
            "extra": "iterations: 55519\ncpu: 14938.345431293794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19590.44544687588,
            "unit": "ns/iter",
            "extra": "iterations: 42674\ncpu: 19590.523503772794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24515.918034224873,
            "unit": "ns/iter",
            "extra": "iterations: 34185\ncpu: 24515.012432353382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29622.21712687923,
            "unit": "ns/iter",
            "extra": "iterations: 28610\ncpu: 29621.104508912977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35426.82783760062,
            "unit": "ns/iter",
            "extra": "iterations: 23867\ncpu: 35426.13650647336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39330.16602138395,
            "unit": "ns/iter",
            "extra": "iterations: 21696\ncpu: 39328.525995575204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 541.0037845410765,
            "unit": "ns/iter",
            "extra": "iterations: 1281265\ncpu: 540.9823884988659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 394.52561834283796,
            "unit": "ns/iter",
            "extra": "iterations: 1643061\ncpu: 394.50732504757883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.7321954349345,
            "unit": "ns/iter",
            "extra": "iterations: 1684919\ncpu: 410.7295365533889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.57440709194043,
            "unit": "ns/iter",
            "extra": "iterations: 1698830\ncpu: 412.56211628002814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 842.1541138133742,
            "unit": "ns/iter",
            "extra": "iterations: 832573\ncpu: 842.1504180414215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1960.1716631930424,
            "unit": "ns/iter",
            "extra": "iterations: 408317\ncpu: 1960.0611779573223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10229.723602132375,
            "unit": "ns/iter",
            "extra": "iterations: 79675\ncpu: 10229.398180106691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7893.76251661138,
            "unit": "ns/iter",
            "extra": "iterations: 106858\ncpu: 7893.280802560398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8072.013409700349,
            "unit": "ns/iter",
            "extra": "iterations: 102314\ncpu: 8071.827902339854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7849.948791130231,
            "unit": "ns/iter",
            "extra": "iterations: 103361\ncpu: 7849.725718597935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35084.85389403985,
            "unit": "ns/iter",
            "extra": "iterations: 23613\ncpu: 35084.16550205396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241060.27341772566,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 241051.11111111072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 178778.31934783998,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 178772.1304347826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 195982.2867180254,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 195975.9292837719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188798.46111990898,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 188794.94445703906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98427.78783706404,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 98423.55708548479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189744.32150631756,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 189735.89464518926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5455.818200805057,
            "unit": "ns/iter",
            "extra": "iterations: 148422\ncpu: 5455.662233361641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24296.54786156717,
            "unit": "ns/iter",
            "extra": "iterations: 34067\ncpu: 24296.48633575021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19369.930488371505,
            "unit": "ns/iter",
            "extra": "iterations: 43000\ncpu: 19369.286046511672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19384.156076408333,
            "unit": "ns/iter",
            "extra": "iterations: 42665\ncpu: 19384.118129614395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19178.29327208885,
            "unit": "ns/iter",
            "extra": "iterations: 43758\ncpu: 19177.83719548427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51402.67341538185,
            "unit": "ns/iter",
            "extra": "iterations: 16250\ncpu: 51402.061538461705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 252562.79135227384,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 252557.02263493897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207736.75322812595,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 207729.72262075535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200886.2935955815,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 200867.4262413051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 207286.57444286582,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 207276.48174490262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111128.03582772637,
            "unit": "ns/iter",
            "extra": "iterations: 7871\ncpu: 111124.29170372222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197299.19890510928,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 197292.54105839413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 791147.1042893343,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 791112.9520605566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 436711.28423137683,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 436695.60059317894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1979.9925275602407,
            "unit": "ns/iter",
            "extra": "iterations: 400940\ncpu: 1979.9037262433246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10387.635804258676,
            "unit": "ns/iter",
            "extra": "iterations: 79309\ncpu: 10387.205739575582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7987.350020926549,
            "unit": "ns/iter",
            "extra": "iterations: 105128\ncpu: 7987.090023590322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8245.098264446393,
            "unit": "ns/iter",
            "extra": "iterations: 99680\ncpu: 8244.797351524847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7803.179099113193,
            "unit": "ns/iter",
            "extra": "iterations: 105718\ncpu: 7802.819765792045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34204.97962350529,
            "unit": "ns/iter",
            "extra": "iterations: 24489\ncpu: 34203.744538364095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 252458.5891381258,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 252454.69303423658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185074.56113725426,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 185067.05857203846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193244.37859064684,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 193238.80161579762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187732.3820249876,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 187723.5057983947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100272.7162934179,
            "unit": "ns/iter",
            "extra": "iterations: 8752\ncpu: 100268.73857404038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 188680.5954165718,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 188672.60655386586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.46301241484863,
            "unit": "ns/iter",
            "extra": "iterations: 3792313\ncpu: 181.45358782357923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1431.6644851422366,
            "unit": "ns/iter",
            "extra": "iterations: 500109\ncpu: 1431.6059099116353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1131.9726959804116,
            "unit": "ns/iter",
            "extra": "iterations: 617638\ncpu: 1131.9220967621807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1080.1707520689185,
            "unit": "ns/iter",
            "extra": "iterations: 634862\ncpu: 1080.1350529721415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 841.2542517495791,
            "unit": "ns/iter",
            "extra": "iterations: 834480\ncpu: 841.2271114945809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9565.362035386293,
            "unit": "ns/iter",
            "extra": "iterations: 72910\ncpu: 9565.224249074208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12335.85029190261,
            "unit": "ns/iter",
            "extra": "iterations: 59095\ncpu: 12335.343091632038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2725.8682959549915,
            "unit": "ns/iter",
            "extra": "iterations: 256431\ncpu: 2725.7995328177954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2731.820899668595,
            "unit": "ns/iter",
            "extra": "iterations: 255583\ncpu: 2731.718463278086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2534.7396759921694,
            "unit": "ns/iter",
            "extra": "iterations: 254068\ncpu: 2534.6096320670126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5201.399425587787,
            "unit": "ns/iter",
            "extra": "iterations: 134050\ncpu: 5201.228646027599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5154.247845901789,
            "unit": "ns/iter",
            "extra": "iterations: 136484\ncpu: 5154.161659974793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1898.4390218145234,
            "unit": "ns/iter",
            "extra": "iterations: 369296\ncpu: 1898.4332351284586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9772.296741960026,
            "unit": "ns/iter",
            "extra": "iterations: 71055\ncpu: 9771.90345507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7800.630388780168,
            "unit": "ns/iter",
            "extra": "iterations: 88842\ncpu: 7800.278021656426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7795.141505760388,
            "unit": "ns/iter",
            "extra": "iterations: 89855\ncpu: 7794.781592565755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7755.398495059673,
            "unit": "ns/iter",
            "extra": "iterations: 89173\ncpu: 7755.289157031942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17498.046947647876,
            "unit": "ns/iter",
            "extra": "iterations: 39789\ncpu: 17497.996933825998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52663.21376417922,
            "unit": "ns/iter",
            "extra": "iterations: 12874\ncpu: 52660.99114494323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43785.82635513552,
            "unit": "ns/iter",
            "extra": "iterations: 16050\ncpu: 43785.55763239908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40630.44357584492,
            "unit": "ns/iter",
            "extra": "iterations: 15862\ncpu: 40630.14121800506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42466.52056132032,
            "unit": "ns/iter",
            "extra": "iterations: 16390\ncpu: 42464.69798657709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25427.412330707193,
            "unit": "ns/iter",
            "extra": "iterations: 27541\ncpu: 25426.012127373837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41734.13012971809,
            "unit": "ns/iter",
            "extra": "iterations: 16960\ncpu: 41732.747641509486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1891.1709277197886,
            "unit": "ns/iter",
            "extra": "iterations: 372052\ncpu: 1891.0886112693688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9927.407971055181,
            "unit": "ns/iter",
            "extra": "iterations: 71032\ncpu: 9927.451007996488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7925.39560076572,
            "unit": "ns/iter",
            "extra": "iterations: 87788\ncpu: 7924.8086298811095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7994.5764279698415,
            "unit": "ns/iter",
            "extra": "iterations: 87782\ncpu: 7994.220910892847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7934.861501628048,
            "unit": "ns/iter",
            "extra": "iterations: 88131\ncpu: 7934.47254654992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17592.12960814769,
            "unit": "ns/iter",
            "extra": "iterations: 39658\ncpu: 17591.393917998736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52891.875692915775,
            "unit": "ns/iter",
            "extra": "iterations: 13169\ncpu: 52892.10266535067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40393.91290679103,
            "unit": "ns/iter",
            "extra": "iterations: 17177\ncpu: 40392.03586190855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41999.59886972012,
            "unit": "ns/iter",
            "extra": "iterations: 16810\ncpu: 41998.14396192743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41795.71911729453,
            "unit": "ns/iter",
            "extra": "iterations: 16676\ncpu: 41794.02134804545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25226.139002421332,
            "unit": "ns/iter",
            "extra": "iterations: 27647\ncpu: 25225.06601077874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42393.40309361363,
            "unit": "ns/iter",
            "extra": "iterations: 17326\ncpu: 42391.596444649425 ns\nthreads: 1"
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
        "date": 1705959973691,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 561.4200082715024,
            "unit": "ns/iter",
            "extra": "iterations: 1247654\ncpu: 561.4161458224796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5179.861249999931,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5179.661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10133.647998543742,
            "unit": "ns/iter",
            "extra": "iterations: 82440\ncpu: 10133.476467734108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15366.580292763547,
            "unit": "ns/iter",
            "extra": "iterations: 55198\ncpu: 15366.321243523314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20133.14000194137,
            "unit": "ns/iter",
            "extra": "iterations: 41228\ncpu: 20133.023673231783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25148.886063315596,
            "unit": "ns/iter",
            "extra": "iterations: 33071\ncpu: 25148.13280517675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30258.705260490944,
            "unit": "ns/iter",
            "extra": "iterations: 27621\ncpu: 30257.35491111833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34863.12212522759,
            "unit": "ns/iter",
            "extra": "iterations: 23828\ncpu: 34861.61658552964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39634.084939395056,
            "unit": "ns/iter",
            "extra": "iterations: 21533\ncpu: 39631.84879022896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.1119245726592,
            "unit": "ns/iter",
            "extra": "iterations: 1298839\ncpu: 538.0799313848755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 423.66265937408525,
            "unit": "ns/iter",
            "extra": "iterations: 1640010\ncpu: 423.638941225968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.0182708618353,
            "unit": "ns/iter",
            "extra": "iterations: 1769101\ncpu: 417.99902888529226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 416.86168792164085,
            "unit": "ns/iter",
            "extra": "iterations: 1679687\ncpu: 416.84712687542356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 841.9849372445176,
            "unit": "ns/iter",
            "extra": "iterations: 832517\ncpu: 841.936921408213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2066.798275933414,
            "unit": "ns/iter",
            "extra": "iterations: 387108\ncpu: 2066.624301228598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10682.335691897795,
            "unit": "ns/iter",
            "extra": "iterations: 75611\ncpu: 10681.63494729604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8110.643583354741,
            "unit": "ns/iter",
            "extra": "iterations: 99538\ncpu: 8110.117743977174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8012.087593906281,
            "unit": "ns/iter",
            "extra": "iterations: 101297\ncpu: 8011.664708727805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7880.157255429543,
            "unit": "ns/iter",
            "extra": "iterations: 104060\ncpu: 7879.72419757832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34692.879824892836,
            "unit": "ns/iter",
            "extra": "iterations: 23757\ncpu: 34690.928989350476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 228169.53139840552,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 228154.32717678088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187786.45255971595,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 187776.95108077428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186997.1687339504,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 186981.47989734815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 179022.2171760465,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 179010.46061127787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98746.57414229555,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 98738.61386138607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179527.66695558466,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 179513.347778982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5317.254161365213,
            "unit": "ns/iter",
            "extra": "iterations: 152474\ncpu: 5316.897962931385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25061.746944994997,
            "unit": "ns/iter",
            "extra": "iterations: 32815\ncpu: 25060.636903854916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19413.664971540216,
            "unit": "ns/iter",
            "extra": "iterations: 42868\ncpu: 19412.52682653726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18845.179165315236,
            "unit": "ns/iter",
            "extra": "iterations: 43178\ncpu: 18844.029366807215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18803.74209360049,
            "unit": "ns/iter",
            "extra": "iterations: 44679\ncpu: 18803.78701403344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50406.00329629485,
            "unit": "ns/iter",
            "extra": "iterations: 16382\ncpu: 50405.16420461468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262093.46429605223,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 261595.0274645837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 197810.78737842024,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 197803.59647138615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200772.96356087987,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 200763.53782287915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 195557.24756938723,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 195551.03153900738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108762.94898990278,
            "unit": "ns/iter",
            "extra": "iterations: 7920\ncpu: 108760.97222222215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192781.66468977396,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 192772.05748175216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789160.3840947808,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 789113.1979695425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 428932.79677578923,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 428925.64728871785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1998.4446741250676,
            "unit": "ns/iter",
            "extra": "iterations: 404910\ncpu: 1998.390012595376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10899.658493258048,
            "unit": "ns/iter",
            "extra": "iterations: 74306\ncpu: 10899.36075148709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8256.928192192107,
            "unit": "ns/iter",
            "extra": "iterations: 98318\ncpu: 8256.646799161896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8286.443135308102,
            "unit": "ns/iter",
            "extra": "iterations: 98708\ncpu: 8286.231105888051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7876.658033944493,
            "unit": "ns/iter",
            "extra": "iterations: 103405\ncpu: 7876.3686475509485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34276.061408862755,
            "unit": "ns/iter",
            "extra": "iterations: 24573\ncpu: 34275.13531111363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 239732.80145350975,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 239727.6162790701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185558.67012583857,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 185552.94767056723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188075.89202400477,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 188071.73961342045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183497.00084963176,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 183483.94222599742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97183.54181695693,
            "unit": "ns/iter",
            "extra": "iterations: 8872\ncpu: 97178.89990982854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 187494.27014319468,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 187482.28253900402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.9225514302264,
            "unit": "ns/iter",
            "extra": "iterations: 3840058\ncpu: 180.91195497568012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1441.1373385894258,
            "unit": "ns/iter",
            "extra": "iterations: 487809\ncpu: 1441.1083026348388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1018.3148974803206,
            "unit": "ns/iter",
            "extra": "iterations: 676309\ncpu: 1018.2573350347277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1144.046000807196,
            "unit": "ns/iter",
            "extra": "iterations: 612011\ncpu: 1143.958360225548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 840.022823464636,
            "unit": "ns/iter",
            "extra": "iterations: 831907\ncpu: 839.9724969257402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9484.991080903348,
            "unit": "ns/iter",
            "extra": "iterations: 74447\ncpu: 9484.547396134112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12337.593944291155,
            "unit": "ns/iter",
            "extra": "iterations: 56938\ncpu: 12337.122835364864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2668.496955335995,
            "unit": "ns/iter",
            "extra": "iterations: 257007\ncpu: 2668.356503908441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2737.751298914108,
            "unit": "ns/iter",
            "extra": "iterations: 256368\ncpu: 2737.682160019965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2753.5710566820408,
            "unit": "ns/iter",
            "extra": "iterations: 254684\ncpu: 2753.471753231462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5257.2669568911215,
            "unit": "ns/iter",
            "extra": "iterations: 134149\ncpu: 5257.152867334107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5231.303714743529,
            "unit": "ns/iter",
            "extra": "iterations: 134195\ncpu: 5230.840195238261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.4690950533754,
            "unit": "ns/iter",
            "extra": "iterations: 372044\ncpu: 1874.3694294223374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9687.679134215425,
            "unit": "ns/iter",
            "extra": "iterations: 71519\ncpu: 9686.913966917895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7879.804457782411,
            "unit": "ns/iter",
            "extra": "iterations: 88968\ncpu: 7879.411698588222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7824.968707921715,
            "unit": "ns/iter",
            "extra": "iterations: 89863\ncpu: 7824.773265971504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7779.1597919613305,
            "unit": "ns/iter",
            "extra": "iterations: 89022\ncpu: 7778.581698905939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17625.888341955804,
            "unit": "ns/iter",
            "extra": "iterations: 39818\ncpu: 17625.1820784568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51454.33602421796,
            "unit": "ns/iter",
            "extra": "iterations: 12883\ncpu: 51450.554994955295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 40600.04689399734,
            "unit": "ns/iter",
            "extra": "iterations: 17273\ncpu: 40597.834771029244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42799.35085082118,
            "unit": "ns/iter",
            "extra": "iterations: 16631\ncpu: 42796.41633094852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40569.262332494094,
            "unit": "ns/iter",
            "extra": "iterations: 17089\ncpu: 40568.89812159883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25098.210457135192,
            "unit": "ns/iter",
            "extra": "iterations: 27388\ncpu: 25097.26157441215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42713.63398109845,
            "unit": "ns/iter",
            "extra": "iterations: 16827\ncpu: 42712.61068520832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1902.04657740725,
            "unit": "ns/iter",
            "extra": "iterations: 364855\ncpu: 1901.954749146939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10152.278768727989,
            "unit": "ns/iter",
            "extra": "iterations: 68677\ncpu: 10151.884910523066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7991.111314035925,
            "unit": "ns/iter",
            "extra": "iterations: 87060\ncpu: 7990.586951527711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8038.960126654951,
            "unit": "ns/iter",
            "extra": "iterations: 86850\ncpu: 8038.61370178466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7932.992373494832,
            "unit": "ns/iter",
            "extra": "iterations: 88376\ncpu: 7932.689870553153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17450.49612753857,
            "unit": "ns/iter",
            "extra": "iterations: 39768\ncpu: 17449.426674713206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51347.35501106548,
            "unit": "ns/iter",
            "extra": "iterations: 13101\ncpu: 51344.81337302544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40482.64582848174,
            "unit": "ns/iter",
            "extra": "iterations: 17164\ncpu: 40481.09415054761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41987.514881132985,
            "unit": "ns/iter",
            "extra": "iterations: 16699\ncpu: 41986.38241810881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41115.19933534933,
            "unit": "ns/iter",
            "extra": "iterations: 16851\ncpu: 41112.49777461273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24784.29713204077,
            "unit": "ns/iter",
            "extra": "iterations: 27476\ncpu: 24783.545639830827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40960.10938334836,
            "unit": "ns/iter",
            "extra": "iterations: 16849\ncpu: 40958.37735177154 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}