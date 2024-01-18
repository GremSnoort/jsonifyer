window.BENCHMARK_DATA = {
  "lastUpdate": 1705575684333,
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
      }
    ]
  }
}