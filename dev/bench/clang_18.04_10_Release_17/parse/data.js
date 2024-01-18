window.BENCHMARK_DATA = {
  "lastUpdate": 1705575627705,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-10 18.04 Release c++-17": [
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
        "date": 1702490343849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.2435360883584,
            "unit": "ns/iter",
            "extra": "iterations: 1256360\ncpu: 557.2413957782801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5280.20553000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.973999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10190.385328774177,
            "unit": "ns/iter",
            "extra": "iterations: 82488\ncpu: 10190.123411890216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15301.46380308073,
            "unit": "ns/iter",
            "extra": "iterations: 55129\ncpu: 15300.988590397064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20145.31337057261,
            "unit": "ns/iter",
            "extra": "iterations: 41711\ncpu: 20143.798997866263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24047.171728536065,
            "unit": "ns/iter",
            "extra": "iterations: 34671\ncpu: 24045.103977387436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29318.646418257435,
            "unit": "ns/iter",
            "extra": "iterations: 28743\ncpu: 29316.727551055912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33607.93915248251,
            "unit": "ns/iter",
            "extra": "iterations: 24849\ncpu: 33606.55559579862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37988.656185731656,
            "unit": "ns/iter",
            "extra": "iterations: 21881\ncpu: 37988.02614140119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.7446225879247,
            "unit": "ns/iter",
            "extra": "iterations: 1313922\ncpu: 530.697636541591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.98888566489137,
            "unit": "ns/iter",
            "extra": "iterations: 1743874\ncpu: 417.9934444805074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.63546224958014,
            "unit": "ns/iter",
            "extra": "iterations: 1651294\ncpu: 424.6094880742019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.4266327365363,
            "unit": "ns/iter",
            "extra": "iterations: 1644555\ncpu: 396.39866103596387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.960899748288,
            "unit": "ns/iter",
            "extra": "iterations: 806670\ncpu: 865.944934111842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1646.3123850867025,
            "unit": "ns/iter",
            "extra": "iterations: 485148\ncpu: 1646.2986552557168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8880.370727296817,
            "unit": "ns/iter",
            "extra": "iterations: 90692\ncpu: 8879.863714550345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6886.16161616113,
            "unit": "ns/iter",
            "extra": "iterations: 117711\ncpu: 6885.749844959267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6834.696003426898,
            "unit": "ns/iter",
            "extra": "iterations: 116725\ncpu: 6834.142642964233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6344.761833765223,
            "unit": "ns/iter",
            "extra": "iterations: 125425\ncpu: 6344.416982260331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35064.68192811791,
            "unit": "ns/iter",
            "extra": "iterations: 23567\ncpu: 35062.825136843916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256226.15429202162,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 256210.3781396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182381.0024352404,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 182366.8806730131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185600.58094812208,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 185588.1261180675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 173846.11918475694,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 173833.73947718172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99227.90475652802,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99220.99197830768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186075.59363733872,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 186058.00636267266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4894.455135598352,
            "unit": "ns/iter",
            "extra": "iterations: 165599\ncpu: 4894.509024812955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23191.887969799795,
            "unit": "ns/iter",
            "extra": "iterations: 36026\ncpu: 23192.13345916838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17984.90946292775,
            "unit": "ns/iter",
            "extra": "iterations: 45208\ncpu: 17984.827906565195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17690.48809372674,
            "unit": "ns/iter",
            "extra": "iterations: 47286\ncpu: 17690.34175020093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17610.282968992047,
            "unit": "ns/iter",
            "extra": "iterations: 47666\ncpu: 17610.466579952226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49632.83814160258,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 49630.256040389235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257117.20276357868,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 257088.67527786028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201436.91805170698,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201434.18744228993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200726.1274555689,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 200719.76145930827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201970.09038505363,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201966.4053493194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109106.35141568418,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 109103.87121022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194727.27035468392,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 194722.95337943328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793795.1571072706,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 793781.7123857036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429779.3909001948,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 429764.5303326829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1558.00237271569,
            "unit": "ns/iter",
            "extra": "iterations: 511650\ncpu: 1557.9829961888029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8523.062397064734,
            "unit": "ns/iter",
            "extra": "iterations: 95934\ncpu: 8523.024162444974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6519.438310570845,
            "unit": "ns/iter",
            "extra": "iterations: 121982\ncpu: 6519.421717958379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6604.343975821811,
            "unit": "ns/iter",
            "extra": "iterations: 124407\ncpu: 6604.326123128156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6233.704479829944,
            "unit": "ns/iter",
            "extra": "iterations: 129179\ncpu: 6233.123030833193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33370.17036770271,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 33368.2351058296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254400.52642047495,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 254382.1590909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191729.2024749385,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 191715.40430979317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191140.9026625872,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 191121.80270624076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190288.66056606977,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 190273.05809746738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96914.24972340009,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96910.78778490803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182779.7423868186,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 182771.19341563858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.88406245635838,
            "unit": "ns/iter",
            "extra": "iterations: 3958157\ncpu: 176.87552565499493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.3566985837151,
            "unit": "ns/iter",
            "extra": "iterations: 511429\ncpu: 1368.2851383085533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.0051957324415,
            "unit": "ns/iter",
            "extra": "iterations: 677864\ncpu: 1030.9821734153147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1013.5286088120428,
            "unit": "ns/iter",
            "extra": "iterations: 690906\ncpu: 1013.5396132035328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.902290281786,
            "unit": "ns/iter",
            "extra": "iterations: 928925\ncpu: 818.8781656215455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9367.897418741868,
            "unit": "ns/iter",
            "extra": "iterations: 74731\ncpu: 9367.741633324786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11820.569477504621,
            "unit": "ns/iter",
            "extra": "iterations: 59235\ncpu: 11819.729889423537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2655.5109691722437,
            "unit": "ns/iter",
            "extra": "iterations: 266155\ncpu: 2655.436118051523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2688.539354760315,
            "unit": "ns/iter",
            "extra": "iterations: 263437\ncpu: 2688.3979850970154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2660.26275219713,
            "unit": "ns/iter",
            "extra": "iterations: 263484\ncpu: 2660.0628501161173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5020.277337318527,
            "unit": "ns/iter",
            "extra": "iterations: 137861\ncpu: 5020.079645439993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5071.199305800011,
            "unit": "ns/iter",
            "extra": "iterations: 139153\ncpu: 5070.891033610507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.0847926519034,
            "unit": "ns/iter",
            "extra": "iterations: 364725\ncpu: 1874.073617108774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9917.47466591192,
            "unit": "ns/iter",
            "extra": "iterations: 70715\ncpu: 9917.143463197375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7975.497947674308,
            "unit": "ns/iter",
            "extra": "iterations: 87949\ncpu: 7974.955940374496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7941.0918060664735,
            "unit": "ns/iter",
            "extra": "iterations: 88175\ncpu: 7940.8358378224875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.0991164818815,
            "unit": "ns/iter",
            "extra": "iterations: 88623\ncpu: 7902.764519368601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17649.561798892224,
            "unit": "ns/iter",
            "extra": "iterations: 39491\ncpu: 17649.527740497706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55369.69572108427,
            "unit": "ns/iter",
            "extra": "iterations: 12620\ncpu: 55367.163232963314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43604.96307845158,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 43604.50916801759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44048.25572751579,
            "unit": "ns/iter",
            "extra": "iterations: 16412\ncpu: 44047.23373141546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42936.07264401382,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 42934.47187673973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25269.79361144154,
            "unit": "ns/iter",
            "extra": "iterations: 27831\ncpu: 25267.805684309093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43043.497342862116,
            "unit": "ns/iter",
            "extra": "iterations: 16371\ncpu: 43040.42514201953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.0078194517118,
            "unit": "ns/iter",
            "extra": "iterations: 370870\ncpu: 1884.8947070402112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9890.932414431902,
            "unit": "ns/iter",
            "extra": "iterations: 71317\ncpu: 9890.55905324117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7769.335681487745,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7769.16116026437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7765.079733774876,
            "unit": "ns/iter",
            "extra": "iterations: 89849\ncpu: 7764.87440038287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8106.1013395326145,
            "unit": "ns/iter",
            "extra": "iterations: 86896\ncpu: 8105.834560854415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17331.594147614374,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 17330.556880066128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52228.52317929973,
            "unit": "ns/iter",
            "extra": "iterations: 13374\ncpu: 52226.401973979766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41503.64630225206,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 41499.000292312456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41736.94969886622,
            "unit": "ns/iter",
            "extra": "iterations: 17932\ncpu: 41733.95047958974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41323.39270980795,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 41320.04186934325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25120.301247199706,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 25119.116654230318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41101.436219279814,
            "unit": "ns/iter",
            "extra": "iterations: 17129\ncpu: 41100.25687430692 ns\nthreads: 1"
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
        "date": 1702490343849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.2435360883584,
            "unit": "ns/iter",
            "extra": "iterations: 1256360\ncpu: 557.2413957782801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5280.20553000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.973999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10190.385328774177,
            "unit": "ns/iter",
            "extra": "iterations: 82488\ncpu: 10190.123411890216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15301.46380308073,
            "unit": "ns/iter",
            "extra": "iterations: 55129\ncpu: 15300.988590397064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20145.31337057261,
            "unit": "ns/iter",
            "extra": "iterations: 41711\ncpu: 20143.798997866263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24047.171728536065,
            "unit": "ns/iter",
            "extra": "iterations: 34671\ncpu: 24045.103977387436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29318.646418257435,
            "unit": "ns/iter",
            "extra": "iterations: 28743\ncpu: 29316.727551055912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33607.93915248251,
            "unit": "ns/iter",
            "extra": "iterations: 24849\ncpu: 33606.55559579862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37988.656185731656,
            "unit": "ns/iter",
            "extra": "iterations: 21881\ncpu: 37988.02614140119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.7446225879247,
            "unit": "ns/iter",
            "extra": "iterations: 1313922\ncpu: 530.697636541591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.98888566489137,
            "unit": "ns/iter",
            "extra": "iterations: 1743874\ncpu: 417.9934444805074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.63546224958014,
            "unit": "ns/iter",
            "extra": "iterations: 1651294\ncpu: 424.6094880742019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.4266327365363,
            "unit": "ns/iter",
            "extra": "iterations: 1644555\ncpu: 396.39866103596387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.960899748288,
            "unit": "ns/iter",
            "extra": "iterations: 806670\ncpu: 865.944934111842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1646.3123850867025,
            "unit": "ns/iter",
            "extra": "iterations: 485148\ncpu: 1646.2986552557168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8880.370727296817,
            "unit": "ns/iter",
            "extra": "iterations: 90692\ncpu: 8879.863714550345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6886.16161616113,
            "unit": "ns/iter",
            "extra": "iterations: 117711\ncpu: 6885.749844959267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6834.696003426898,
            "unit": "ns/iter",
            "extra": "iterations: 116725\ncpu: 6834.142642964233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6344.761833765223,
            "unit": "ns/iter",
            "extra": "iterations: 125425\ncpu: 6344.416982260331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35064.68192811791,
            "unit": "ns/iter",
            "extra": "iterations: 23567\ncpu: 35062.825136843916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256226.15429202162,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 256210.3781396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182381.0024352404,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 182366.8806730131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185600.58094812208,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 185588.1261180675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 173846.11918475694,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 173833.73947718172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99227.90475652802,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99220.99197830768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186075.59363733872,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 186058.00636267266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4894.455135598352,
            "unit": "ns/iter",
            "extra": "iterations: 165599\ncpu: 4894.509024812955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23191.887969799795,
            "unit": "ns/iter",
            "extra": "iterations: 36026\ncpu: 23192.13345916838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17984.90946292775,
            "unit": "ns/iter",
            "extra": "iterations: 45208\ncpu: 17984.827906565195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17690.48809372674,
            "unit": "ns/iter",
            "extra": "iterations: 47286\ncpu: 17690.34175020093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17610.282968992047,
            "unit": "ns/iter",
            "extra": "iterations: 47666\ncpu: 17610.466579952226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49632.83814160258,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 49630.256040389235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257117.20276357868,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 257088.67527786028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201436.91805170698,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201434.18744228993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200726.1274555689,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 200719.76145930827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201970.09038505363,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201966.4053493194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109106.35141568418,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 109103.87121022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194727.27035468392,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 194722.95337943328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793795.1571072706,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 793781.7123857036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429779.3909001948,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 429764.5303326829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1558.00237271569,
            "unit": "ns/iter",
            "extra": "iterations: 511650\ncpu: 1557.9829961888029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8523.062397064734,
            "unit": "ns/iter",
            "extra": "iterations: 95934\ncpu: 8523.024162444974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6519.438310570845,
            "unit": "ns/iter",
            "extra": "iterations: 121982\ncpu: 6519.421717958379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6604.343975821811,
            "unit": "ns/iter",
            "extra": "iterations: 124407\ncpu: 6604.326123128156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6233.704479829944,
            "unit": "ns/iter",
            "extra": "iterations: 129179\ncpu: 6233.123030833193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33370.17036770271,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 33368.2351058296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254400.52642047495,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 254382.1590909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191729.2024749385,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 191715.40430979317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191140.9026625872,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 191121.80270624076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190288.66056606977,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 190273.05809746738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96914.24972340009,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96910.78778490803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182779.7423868186,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 182771.19341563858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.88406245635838,
            "unit": "ns/iter",
            "extra": "iterations: 3958157\ncpu: 176.87552565499493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.3566985837151,
            "unit": "ns/iter",
            "extra": "iterations: 511429\ncpu: 1368.2851383085533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.0051957324415,
            "unit": "ns/iter",
            "extra": "iterations: 677864\ncpu: 1030.9821734153147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1013.5286088120428,
            "unit": "ns/iter",
            "extra": "iterations: 690906\ncpu: 1013.5396132035328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.902290281786,
            "unit": "ns/iter",
            "extra": "iterations: 928925\ncpu: 818.8781656215455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9367.897418741868,
            "unit": "ns/iter",
            "extra": "iterations: 74731\ncpu: 9367.741633324786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11820.569477504621,
            "unit": "ns/iter",
            "extra": "iterations: 59235\ncpu: 11819.729889423537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2655.5109691722437,
            "unit": "ns/iter",
            "extra": "iterations: 266155\ncpu: 2655.436118051523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2688.539354760315,
            "unit": "ns/iter",
            "extra": "iterations: 263437\ncpu: 2688.3979850970154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2660.26275219713,
            "unit": "ns/iter",
            "extra": "iterations: 263484\ncpu: 2660.0628501161173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5020.277337318527,
            "unit": "ns/iter",
            "extra": "iterations: 137861\ncpu: 5020.079645439993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5071.199305800011,
            "unit": "ns/iter",
            "extra": "iterations: 139153\ncpu: 5070.891033610507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.0847926519034,
            "unit": "ns/iter",
            "extra": "iterations: 364725\ncpu: 1874.073617108774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9917.47466591192,
            "unit": "ns/iter",
            "extra": "iterations: 70715\ncpu: 9917.143463197375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7975.497947674308,
            "unit": "ns/iter",
            "extra": "iterations: 87949\ncpu: 7974.955940374496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7941.0918060664735,
            "unit": "ns/iter",
            "extra": "iterations: 88175\ncpu: 7940.8358378224875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.0991164818815,
            "unit": "ns/iter",
            "extra": "iterations: 88623\ncpu: 7902.764519368601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17649.561798892224,
            "unit": "ns/iter",
            "extra": "iterations: 39491\ncpu: 17649.527740497706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55369.69572108427,
            "unit": "ns/iter",
            "extra": "iterations: 12620\ncpu: 55367.163232963314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43604.96307845158,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 43604.50916801759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44048.25572751579,
            "unit": "ns/iter",
            "extra": "iterations: 16412\ncpu: 44047.23373141546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42936.07264401382,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 42934.47187673973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25269.79361144154,
            "unit": "ns/iter",
            "extra": "iterations: 27831\ncpu: 25267.805684309093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43043.497342862116,
            "unit": "ns/iter",
            "extra": "iterations: 16371\ncpu: 43040.42514201953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.0078194517118,
            "unit": "ns/iter",
            "extra": "iterations: 370870\ncpu: 1884.8947070402112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9890.932414431902,
            "unit": "ns/iter",
            "extra": "iterations: 71317\ncpu: 9890.55905324117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7769.335681487745,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7769.16116026437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7765.079733774876,
            "unit": "ns/iter",
            "extra": "iterations: 89849\ncpu: 7764.87440038287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8106.1013395326145,
            "unit": "ns/iter",
            "extra": "iterations: 86896\ncpu: 8105.834560854415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17331.594147614374,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 17330.556880066128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52228.52317929973,
            "unit": "ns/iter",
            "extra": "iterations: 13374\ncpu: 52226.401973979766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41503.64630225206,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 41499.000292312456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41736.94969886622,
            "unit": "ns/iter",
            "extra": "iterations: 17932\ncpu: 41733.95047958974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41323.39270980795,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 41320.04186934325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25120.301247199706,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 25119.116654230318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41101.436219279814,
            "unit": "ns/iter",
            "extra": "iterations: 17129\ncpu: 41100.25687430692 ns\nthreads: 1"
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
        "date": 1702490343849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.2435360883584,
            "unit": "ns/iter",
            "extra": "iterations: 1256360\ncpu: 557.2413957782801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5280.20553000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.973999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10190.385328774177,
            "unit": "ns/iter",
            "extra": "iterations: 82488\ncpu: 10190.123411890216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15301.46380308073,
            "unit": "ns/iter",
            "extra": "iterations: 55129\ncpu: 15300.988590397064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20145.31337057261,
            "unit": "ns/iter",
            "extra": "iterations: 41711\ncpu: 20143.798997866263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24047.171728536065,
            "unit": "ns/iter",
            "extra": "iterations: 34671\ncpu: 24045.103977387436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29318.646418257435,
            "unit": "ns/iter",
            "extra": "iterations: 28743\ncpu: 29316.727551055912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33607.93915248251,
            "unit": "ns/iter",
            "extra": "iterations: 24849\ncpu: 33606.55559579862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37988.656185731656,
            "unit": "ns/iter",
            "extra": "iterations: 21881\ncpu: 37988.02614140119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.7446225879247,
            "unit": "ns/iter",
            "extra": "iterations: 1313922\ncpu: 530.697636541591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.98888566489137,
            "unit": "ns/iter",
            "extra": "iterations: 1743874\ncpu: 417.9934444805074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.63546224958014,
            "unit": "ns/iter",
            "extra": "iterations: 1651294\ncpu: 424.6094880742019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.4266327365363,
            "unit": "ns/iter",
            "extra": "iterations: 1644555\ncpu: 396.39866103596387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.960899748288,
            "unit": "ns/iter",
            "extra": "iterations: 806670\ncpu: 865.944934111842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1646.3123850867025,
            "unit": "ns/iter",
            "extra": "iterations: 485148\ncpu: 1646.2986552557168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8880.370727296817,
            "unit": "ns/iter",
            "extra": "iterations: 90692\ncpu: 8879.863714550345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6886.16161616113,
            "unit": "ns/iter",
            "extra": "iterations: 117711\ncpu: 6885.749844959267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6834.696003426898,
            "unit": "ns/iter",
            "extra": "iterations: 116725\ncpu: 6834.142642964233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6344.761833765223,
            "unit": "ns/iter",
            "extra": "iterations: 125425\ncpu: 6344.416982260331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35064.68192811791,
            "unit": "ns/iter",
            "extra": "iterations: 23567\ncpu: 35062.825136843916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256226.15429202162,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 256210.3781396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182381.0024352404,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 182366.8806730131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185600.58094812208,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 185588.1261180675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 173846.11918475694,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 173833.73947718172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99227.90475652802,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99220.99197830768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186075.59363733872,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 186058.00636267266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4894.455135598352,
            "unit": "ns/iter",
            "extra": "iterations: 165599\ncpu: 4894.509024812955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23191.887969799795,
            "unit": "ns/iter",
            "extra": "iterations: 36026\ncpu: 23192.13345916838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17984.90946292775,
            "unit": "ns/iter",
            "extra": "iterations: 45208\ncpu: 17984.827906565195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17690.48809372674,
            "unit": "ns/iter",
            "extra": "iterations: 47286\ncpu: 17690.34175020093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17610.282968992047,
            "unit": "ns/iter",
            "extra": "iterations: 47666\ncpu: 17610.466579952226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49632.83814160258,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 49630.256040389235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257117.20276357868,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 257088.67527786028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201436.91805170698,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201434.18744228993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200726.1274555689,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 200719.76145930827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201970.09038505363,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201966.4053493194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109106.35141568418,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 109103.87121022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194727.27035468392,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 194722.95337943328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793795.1571072706,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 793781.7123857036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429779.3909001948,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 429764.5303326829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1558.00237271569,
            "unit": "ns/iter",
            "extra": "iterations: 511650\ncpu: 1557.9829961888029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8523.062397064734,
            "unit": "ns/iter",
            "extra": "iterations: 95934\ncpu: 8523.024162444974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6519.438310570845,
            "unit": "ns/iter",
            "extra": "iterations: 121982\ncpu: 6519.421717958379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6604.343975821811,
            "unit": "ns/iter",
            "extra": "iterations: 124407\ncpu: 6604.326123128156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6233.704479829944,
            "unit": "ns/iter",
            "extra": "iterations: 129179\ncpu: 6233.123030833193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33370.17036770271,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 33368.2351058296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254400.52642047495,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 254382.1590909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191729.2024749385,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 191715.40430979317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191140.9026625872,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 191121.80270624076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190288.66056606977,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 190273.05809746738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96914.24972340009,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96910.78778490803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182779.7423868186,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 182771.19341563858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.88406245635838,
            "unit": "ns/iter",
            "extra": "iterations: 3958157\ncpu: 176.87552565499493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.3566985837151,
            "unit": "ns/iter",
            "extra": "iterations: 511429\ncpu: 1368.2851383085533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.0051957324415,
            "unit": "ns/iter",
            "extra": "iterations: 677864\ncpu: 1030.9821734153147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1013.5286088120428,
            "unit": "ns/iter",
            "extra": "iterations: 690906\ncpu: 1013.5396132035328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.902290281786,
            "unit": "ns/iter",
            "extra": "iterations: 928925\ncpu: 818.8781656215455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9367.897418741868,
            "unit": "ns/iter",
            "extra": "iterations: 74731\ncpu: 9367.741633324786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11820.569477504621,
            "unit": "ns/iter",
            "extra": "iterations: 59235\ncpu: 11819.729889423537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2655.5109691722437,
            "unit": "ns/iter",
            "extra": "iterations: 266155\ncpu: 2655.436118051523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2688.539354760315,
            "unit": "ns/iter",
            "extra": "iterations: 263437\ncpu: 2688.3979850970154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2660.26275219713,
            "unit": "ns/iter",
            "extra": "iterations: 263484\ncpu: 2660.0628501161173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5020.277337318527,
            "unit": "ns/iter",
            "extra": "iterations: 137861\ncpu: 5020.079645439993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5071.199305800011,
            "unit": "ns/iter",
            "extra": "iterations: 139153\ncpu: 5070.891033610507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.0847926519034,
            "unit": "ns/iter",
            "extra": "iterations: 364725\ncpu: 1874.073617108774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9917.47466591192,
            "unit": "ns/iter",
            "extra": "iterations: 70715\ncpu: 9917.143463197375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7975.497947674308,
            "unit": "ns/iter",
            "extra": "iterations: 87949\ncpu: 7974.955940374496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7941.0918060664735,
            "unit": "ns/iter",
            "extra": "iterations: 88175\ncpu: 7940.8358378224875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.0991164818815,
            "unit": "ns/iter",
            "extra": "iterations: 88623\ncpu: 7902.764519368601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17649.561798892224,
            "unit": "ns/iter",
            "extra": "iterations: 39491\ncpu: 17649.527740497706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55369.69572108427,
            "unit": "ns/iter",
            "extra": "iterations: 12620\ncpu: 55367.163232963314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43604.96307845158,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 43604.50916801759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44048.25572751579,
            "unit": "ns/iter",
            "extra": "iterations: 16412\ncpu: 44047.23373141546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42936.07264401382,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 42934.47187673973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25269.79361144154,
            "unit": "ns/iter",
            "extra": "iterations: 27831\ncpu: 25267.805684309093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43043.497342862116,
            "unit": "ns/iter",
            "extra": "iterations: 16371\ncpu: 43040.42514201953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.0078194517118,
            "unit": "ns/iter",
            "extra": "iterations: 370870\ncpu: 1884.8947070402112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9890.932414431902,
            "unit": "ns/iter",
            "extra": "iterations: 71317\ncpu: 9890.55905324117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7769.335681487745,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7769.16116026437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7765.079733774876,
            "unit": "ns/iter",
            "extra": "iterations: 89849\ncpu: 7764.87440038287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8106.1013395326145,
            "unit": "ns/iter",
            "extra": "iterations: 86896\ncpu: 8105.834560854415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17331.594147614374,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 17330.556880066128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52228.52317929973,
            "unit": "ns/iter",
            "extra": "iterations: 13374\ncpu: 52226.401973979766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41503.64630225206,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 41499.000292312456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41736.94969886622,
            "unit": "ns/iter",
            "extra": "iterations: 17932\ncpu: 41733.95047958974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41323.39270980795,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 41320.04186934325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25120.301247199706,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 25119.116654230318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41101.436219279814,
            "unit": "ns/iter",
            "extra": "iterations: 17129\ncpu: 41100.25687430692 ns\nthreads: 1"
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
        "date": 1702490343849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.2435360883584,
            "unit": "ns/iter",
            "extra": "iterations: 1256360\ncpu: 557.2413957782801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5280.20553000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.973999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10190.385328774177,
            "unit": "ns/iter",
            "extra": "iterations: 82488\ncpu: 10190.123411890216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15301.46380308073,
            "unit": "ns/iter",
            "extra": "iterations: 55129\ncpu: 15300.988590397064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20145.31337057261,
            "unit": "ns/iter",
            "extra": "iterations: 41711\ncpu: 20143.798997866263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24047.171728536065,
            "unit": "ns/iter",
            "extra": "iterations: 34671\ncpu: 24045.103977387436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29318.646418257435,
            "unit": "ns/iter",
            "extra": "iterations: 28743\ncpu: 29316.727551055912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33607.93915248251,
            "unit": "ns/iter",
            "extra": "iterations: 24849\ncpu: 33606.55559579862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37988.656185731656,
            "unit": "ns/iter",
            "extra": "iterations: 21881\ncpu: 37988.02614140119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.7446225879247,
            "unit": "ns/iter",
            "extra": "iterations: 1313922\ncpu: 530.697636541591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.98888566489137,
            "unit": "ns/iter",
            "extra": "iterations: 1743874\ncpu: 417.9934444805074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.63546224958014,
            "unit": "ns/iter",
            "extra": "iterations: 1651294\ncpu: 424.6094880742019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.4266327365363,
            "unit": "ns/iter",
            "extra": "iterations: 1644555\ncpu: 396.39866103596387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.960899748288,
            "unit": "ns/iter",
            "extra": "iterations: 806670\ncpu: 865.944934111842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1646.3123850867025,
            "unit": "ns/iter",
            "extra": "iterations: 485148\ncpu: 1646.2986552557168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8880.370727296817,
            "unit": "ns/iter",
            "extra": "iterations: 90692\ncpu: 8879.863714550345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6886.16161616113,
            "unit": "ns/iter",
            "extra": "iterations: 117711\ncpu: 6885.749844959267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6834.696003426898,
            "unit": "ns/iter",
            "extra": "iterations: 116725\ncpu: 6834.142642964233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6344.761833765223,
            "unit": "ns/iter",
            "extra": "iterations: 125425\ncpu: 6344.416982260331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35064.68192811791,
            "unit": "ns/iter",
            "extra": "iterations: 23567\ncpu: 35062.825136843916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256226.15429202162,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 256210.3781396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182381.0024352404,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 182366.8806730131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185600.58094812208,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 185588.1261180675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 173846.11918475694,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 173833.73947718172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99227.90475652802,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99220.99197830768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186075.59363733872,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 186058.00636267266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4894.455135598352,
            "unit": "ns/iter",
            "extra": "iterations: 165599\ncpu: 4894.509024812955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23191.887969799795,
            "unit": "ns/iter",
            "extra": "iterations: 36026\ncpu: 23192.13345916838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17984.90946292775,
            "unit": "ns/iter",
            "extra": "iterations: 45208\ncpu: 17984.827906565195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17690.48809372674,
            "unit": "ns/iter",
            "extra": "iterations: 47286\ncpu: 17690.34175020093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17610.282968992047,
            "unit": "ns/iter",
            "extra": "iterations: 47666\ncpu: 17610.466579952226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49632.83814160258,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 49630.256040389235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257117.20276357868,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 257088.67527786028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201436.91805170698,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201434.18744228993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200726.1274555689,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 200719.76145930827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201970.09038505363,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201966.4053493194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109106.35141568418,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 109103.87121022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194727.27035468392,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 194722.95337943328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793795.1571072706,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 793781.7123857036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429779.3909001948,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 429764.5303326829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1558.00237271569,
            "unit": "ns/iter",
            "extra": "iterations: 511650\ncpu: 1557.9829961888029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8523.062397064734,
            "unit": "ns/iter",
            "extra": "iterations: 95934\ncpu: 8523.024162444974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6519.438310570845,
            "unit": "ns/iter",
            "extra": "iterations: 121982\ncpu: 6519.421717958379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6604.343975821811,
            "unit": "ns/iter",
            "extra": "iterations: 124407\ncpu: 6604.326123128156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6233.704479829944,
            "unit": "ns/iter",
            "extra": "iterations: 129179\ncpu: 6233.123030833193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33370.17036770271,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 33368.2351058296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254400.52642047495,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 254382.1590909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191729.2024749385,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 191715.40430979317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191140.9026625872,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 191121.80270624076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190288.66056606977,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 190273.05809746738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96914.24972340009,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96910.78778490803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182779.7423868186,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 182771.19341563858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.88406245635838,
            "unit": "ns/iter",
            "extra": "iterations: 3958157\ncpu: 176.87552565499493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.3566985837151,
            "unit": "ns/iter",
            "extra": "iterations: 511429\ncpu: 1368.2851383085533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.0051957324415,
            "unit": "ns/iter",
            "extra": "iterations: 677864\ncpu: 1030.9821734153147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1013.5286088120428,
            "unit": "ns/iter",
            "extra": "iterations: 690906\ncpu: 1013.5396132035328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.902290281786,
            "unit": "ns/iter",
            "extra": "iterations: 928925\ncpu: 818.8781656215455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9367.897418741868,
            "unit": "ns/iter",
            "extra": "iterations: 74731\ncpu: 9367.741633324786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11820.569477504621,
            "unit": "ns/iter",
            "extra": "iterations: 59235\ncpu: 11819.729889423537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2655.5109691722437,
            "unit": "ns/iter",
            "extra": "iterations: 266155\ncpu: 2655.436118051523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2688.539354760315,
            "unit": "ns/iter",
            "extra": "iterations: 263437\ncpu: 2688.3979850970154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2660.26275219713,
            "unit": "ns/iter",
            "extra": "iterations: 263484\ncpu: 2660.0628501161173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5020.277337318527,
            "unit": "ns/iter",
            "extra": "iterations: 137861\ncpu: 5020.079645439993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5071.199305800011,
            "unit": "ns/iter",
            "extra": "iterations: 139153\ncpu: 5070.891033610507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.0847926519034,
            "unit": "ns/iter",
            "extra": "iterations: 364725\ncpu: 1874.073617108774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9917.47466591192,
            "unit": "ns/iter",
            "extra": "iterations: 70715\ncpu: 9917.143463197375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7975.497947674308,
            "unit": "ns/iter",
            "extra": "iterations: 87949\ncpu: 7974.955940374496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7941.0918060664735,
            "unit": "ns/iter",
            "extra": "iterations: 88175\ncpu: 7940.8358378224875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.0991164818815,
            "unit": "ns/iter",
            "extra": "iterations: 88623\ncpu: 7902.764519368601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17649.561798892224,
            "unit": "ns/iter",
            "extra": "iterations: 39491\ncpu: 17649.527740497706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55369.69572108427,
            "unit": "ns/iter",
            "extra": "iterations: 12620\ncpu: 55367.163232963314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43604.96307845158,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 43604.50916801759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44048.25572751579,
            "unit": "ns/iter",
            "extra": "iterations: 16412\ncpu: 44047.23373141546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42936.07264401382,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 42934.47187673973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25269.79361144154,
            "unit": "ns/iter",
            "extra": "iterations: 27831\ncpu: 25267.805684309093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43043.497342862116,
            "unit": "ns/iter",
            "extra": "iterations: 16371\ncpu: 43040.42514201953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.0078194517118,
            "unit": "ns/iter",
            "extra": "iterations: 370870\ncpu: 1884.8947070402112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9890.932414431902,
            "unit": "ns/iter",
            "extra": "iterations: 71317\ncpu: 9890.55905324117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7769.335681487745,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7769.16116026437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7765.079733774876,
            "unit": "ns/iter",
            "extra": "iterations: 89849\ncpu: 7764.87440038287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8106.1013395326145,
            "unit": "ns/iter",
            "extra": "iterations: 86896\ncpu: 8105.834560854415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17331.594147614374,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 17330.556880066128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52228.52317929973,
            "unit": "ns/iter",
            "extra": "iterations: 13374\ncpu: 52226.401973979766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41503.64630225206,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 41499.000292312456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41736.94969886622,
            "unit": "ns/iter",
            "extra": "iterations: 17932\ncpu: 41733.95047958974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41323.39270980795,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 41320.04186934325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25120.301247199706,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 25119.116654230318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41101.436219279814,
            "unit": "ns/iter",
            "extra": "iterations: 17129\ncpu: 41100.25687430692 ns\nthreads: 1"
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
        "date": 1702490343849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.2435360883584,
            "unit": "ns/iter",
            "extra": "iterations: 1256360\ncpu: 557.2413957782801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5280.20553000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.973999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10190.385328774177,
            "unit": "ns/iter",
            "extra": "iterations: 82488\ncpu: 10190.123411890216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15301.46380308073,
            "unit": "ns/iter",
            "extra": "iterations: 55129\ncpu: 15300.988590397064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20145.31337057261,
            "unit": "ns/iter",
            "extra": "iterations: 41711\ncpu: 20143.798997866263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24047.171728536065,
            "unit": "ns/iter",
            "extra": "iterations: 34671\ncpu: 24045.103977387436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29318.646418257435,
            "unit": "ns/iter",
            "extra": "iterations: 28743\ncpu: 29316.727551055912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33607.93915248251,
            "unit": "ns/iter",
            "extra": "iterations: 24849\ncpu: 33606.55559579862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37988.656185731656,
            "unit": "ns/iter",
            "extra": "iterations: 21881\ncpu: 37988.02614140119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.7446225879247,
            "unit": "ns/iter",
            "extra": "iterations: 1313922\ncpu: 530.697636541591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.98888566489137,
            "unit": "ns/iter",
            "extra": "iterations: 1743874\ncpu: 417.9934444805074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.63546224958014,
            "unit": "ns/iter",
            "extra": "iterations: 1651294\ncpu: 424.6094880742019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.4266327365363,
            "unit": "ns/iter",
            "extra": "iterations: 1644555\ncpu: 396.39866103596387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.960899748288,
            "unit": "ns/iter",
            "extra": "iterations: 806670\ncpu: 865.944934111842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1646.3123850867025,
            "unit": "ns/iter",
            "extra": "iterations: 485148\ncpu: 1646.2986552557168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8880.370727296817,
            "unit": "ns/iter",
            "extra": "iterations: 90692\ncpu: 8879.863714550345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6886.16161616113,
            "unit": "ns/iter",
            "extra": "iterations: 117711\ncpu: 6885.749844959267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6834.696003426898,
            "unit": "ns/iter",
            "extra": "iterations: 116725\ncpu: 6834.142642964233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6344.761833765223,
            "unit": "ns/iter",
            "extra": "iterations: 125425\ncpu: 6344.416982260331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35064.68192811791,
            "unit": "ns/iter",
            "extra": "iterations: 23567\ncpu: 35062.825136843916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256226.15429202162,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 256210.3781396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182381.0024352404,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 182366.8806730131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185600.58094812208,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 185588.1261180675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 173846.11918475694,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 173833.73947718172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99227.90475652802,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99220.99197830768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186075.59363733872,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 186058.00636267266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4894.455135598352,
            "unit": "ns/iter",
            "extra": "iterations: 165599\ncpu: 4894.509024812955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23191.887969799795,
            "unit": "ns/iter",
            "extra": "iterations: 36026\ncpu: 23192.13345916838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17984.90946292775,
            "unit": "ns/iter",
            "extra": "iterations: 45208\ncpu: 17984.827906565195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17690.48809372674,
            "unit": "ns/iter",
            "extra": "iterations: 47286\ncpu: 17690.34175020093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17610.282968992047,
            "unit": "ns/iter",
            "extra": "iterations: 47666\ncpu: 17610.466579952226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49632.83814160258,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 49630.256040389235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257117.20276357868,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 257088.67527786028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201436.91805170698,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201434.18744228993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200726.1274555689,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 200719.76145930827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201970.09038505363,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201966.4053493194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109106.35141568418,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 109103.87121022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194727.27035468392,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 194722.95337943328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793795.1571072706,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 793781.7123857036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429779.3909001948,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 429764.5303326829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1558.00237271569,
            "unit": "ns/iter",
            "extra": "iterations: 511650\ncpu: 1557.9829961888029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8523.062397064734,
            "unit": "ns/iter",
            "extra": "iterations: 95934\ncpu: 8523.024162444974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6519.438310570845,
            "unit": "ns/iter",
            "extra": "iterations: 121982\ncpu: 6519.421717958379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6604.343975821811,
            "unit": "ns/iter",
            "extra": "iterations: 124407\ncpu: 6604.326123128156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6233.704479829944,
            "unit": "ns/iter",
            "extra": "iterations: 129179\ncpu: 6233.123030833193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33370.17036770271,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 33368.2351058296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254400.52642047495,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 254382.1590909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191729.2024749385,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 191715.40430979317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191140.9026625872,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 191121.80270624076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190288.66056606977,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 190273.05809746738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96914.24972340009,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96910.78778490803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182779.7423868186,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 182771.19341563858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.88406245635838,
            "unit": "ns/iter",
            "extra": "iterations: 3958157\ncpu: 176.87552565499493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.3566985837151,
            "unit": "ns/iter",
            "extra": "iterations: 511429\ncpu: 1368.2851383085533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.0051957324415,
            "unit": "ns/iter",
            "extra": "iterations: 677864\ncpu: 1030.9821734153147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1013.5286088120428,
            "unit": "ns/iter",
            "extra": "iterations: 690906\ncpu: 1013.5396132035328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.902290281786,
            "unit": "ns/iter",
            "extra": "iterations: 928925\ncpu: 818.8781656215455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9367.897418741868,
            "unit": "ns/iter",
            "extra": "iterations: 74731\ncpu: 9367.741633324786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11820.569477504621,
            "unit": "ns/iter",
            "extra": "iterations: 59235\ncpu: 11819.729889423537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2655.5109691722437,
            "unit": "ns/iter",
            "extra": "iterations: 266155\ncpu: 2655.436118051523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2688.539354760315,
            "unit": "ns/iter",
            "extra": "iterations: 263437\ncpu: 2688.3979850970154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2660.26275219713,
            "unit": "ns/iter",
            "extra": "iterations: 263484\ncpu: 2660.0628501161173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5020.277337318527,
            "unit": "ns/iter",
            "extra": "iterations: 137861\ncpu: 5020.079645439993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5071.199305800011,
            "unit": "ns/iter",
            "extra": "iterations: 139153\ncpu: 5070.891033610507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.0847926519034,
            "unit": "ns/iter",
            "extra": "iterations: 364725\ncpu: 1874.073617108774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9917.47466591192,
            "unit": "ns/iter",
            "extra": "iterations: 70715\ncpu: 9917.143463197375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7975.497947674308,
            "unit": "ns/iter",
            "extra": "iterations: 87949\ncpu: 7974.955940374496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7941.0918060664735,
            "unit": "ns/iter",
            "extra": "iterations: 88175\ncpu: 7940.8358378224875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.0991164818815,
            "unit": "ns/iter",
            "extra": "iterations: 88623\ncpu: 7902.764519368601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17649.561798892224,
            "unit": "ns/iter",
            "extra": "iterations: 39491\ncpu: 17649.527740497706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55369.69572108427,
            "unit": "ns/iter",
            "extra": "iterations: 12620\ncpu: 55367.163232963314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43604.96307845158,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 43604.50916801759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44048.25572751579,
            "unit": "ns/iter",
            "extra": "iterations: 16412\ncpu: 44047.23373141546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42936.07264401382,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 42934.47187673973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25269.79361144154,
            "unit": "ns/iter",
            "extra": "iterations: 27831\ncpu: 25267.805684309093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43043.497342862116,
            "unit": "ns/iter",
            "extra": "iterations: 16371\ncpu: 43040.42514201953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.0078194517118,
            "unit": "ns/iter",
            "extra": "iterations: 370870\ncpu: 1884.8947070402112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9890.932414431902,
            "unit": "ns/iter",
            "extra": "iterations: 71317\ncpu: 9890.55905324117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7769.335681487745,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7769.16116026437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7765.079733774876,
            "unit": "ns/iter",
            "extra": "iterations: 89849\ncpu: 7764.87440038287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8106.1013395326145,
            "unit": "ns/iter",
            "extra": "iterations: 86896\ncpu: 8105.834560854415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17331.594147614374,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 17330.556880066128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52228.52317929973,
            "unit": "ns/iter",
            "extra": "iterations: 13374\ncpu: 52226.401973979766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41503.64630225206,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 41499.000292312456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41736.94969886622,
            "unit": "ns/iter",
            "extra": "iterations: 17932\ncpu: 41733.95047958974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41323.39270980795,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 41320.04186934325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25120.301247199706,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 25119.116654230318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41101.436219279814,
            "unit": "ns/iter",
            "extra": "iterations: 17129\ncpu: 41100.25687430692 ns\nthreads: 1"
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
        "date": 1702490343849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.2435360883584,
            "unit": "ns/iter",
            "extra": "iterations: 1256360\ncpu: 557.2413957782801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5280.20553000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.973999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10190.385328774177,
            "unit": "ns/iter",
            "extra": "iterations: 82488\ncpu: 10190.123411890216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15301.46380308073,
            "unit": "ns/iter",
            "extra": "iterations: 55129\ncpu: 15300.988590397064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20145.31337057261,
            "unit": "ns/iter",
            "extra": "iterations: 41711\ncpu: 20143.798997866263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24047.171728536065,
            "unit": "ns/iter",
            "extra": "iterations: 34671\ncpu: 24045.103977387436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29318.646418257435,
            "unit": "ns/iter",
            "extra": "iterations: 28743\ncpu: 29316.727551055912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33607.93915248251,
            "unit": "ns/iter",
            "extra": "iterations: 24849\ncpu: 33606.55559579862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37988.656185731656,
            "unit": "ns/iter",
            "extra": "iterations: 21881\ncpu: 37988.02614140119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.7446225879247,
            "unit": "ns/iter",
            "extra": "iterations: 1313922\ncpu: 530.697636541591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.98888566489137,
            "unit": "ns/iter",
            "extra": "iterations: 1743874\ncpu: 417.9934444805074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.63546224958014,
            "unit": "ns/iter",
            "extra": "iterations: 1651294\ncpu: 424.6094880742019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.4266327365363,
            "unit": "ns/iter",
            "extra": "iterations: 1644555\ncpu: 396.39866103596387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.960899748288,
            "unit": "ns/iter",
            "extra": "iterations: 806670\ncpu: 865.944934111842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1646.3123850867025,
            "unit": "ns/iter",
            "extra": "iterations: 485148\ncpu: 1646.2986552557168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8880.370727296817,
            "unit": "ns/iter",
            "extra": "iterations: 90692\ncpu: 8879.863714550345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6886.16161616113,
            "unit": "ns/iter",
            "extra": "iterations: 117711\ncpu: 6885.749844959267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6834.696003426898,
            "unit": "ns/iter",
            "extra": "iterations: 116725\ncpu: 6834.142642964233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6344.761833765223,
            "unit": "ns/iter",
            "extra": "iterations: 125425\ncpu: 6344.416982260331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35064.68192811791,
            "unit": "ns/iter",
            "extra": "iterations: 23567\ncpu: 35062.825136843916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256226.15429202162,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 256210.3781396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182381.0024352404,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 182366.8806730131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185600.58094812208,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 185588.1261180675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 173846.11918475694,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 173833.73947718172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99227.90475652802,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99220.99197830768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186075.59363733872,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 186058.00636267266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4894.455135598352,
            "unit": "ns/iter",
            "extra": "iterations: 165599\ncpu: 4894.509024812955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23191.887969799795,
            "unit": "ns/iter",
            "extra": "iterations: 36026\ncpu: 23192.13345916838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17984.90946292775,
            "unit": "ns/iter",
            "extra": "iterations: 45208\ncpu: 17984.827906565195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17690.48809372674,
            "unit": "ns/iter",
            "extra": "iterations: 47286\ncpu: 17690.34175020093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17610.282968992047,
            "unit": "ns/iter",
            "extra": "iterations: 47666\ncpu: 17610.466579952226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49632.83814160258,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 49630.256040389235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257117.20276357868,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 257088.67527786028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201436.91805170698,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201434.18744228993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200726.1274555689,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 200719.76145930827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201970.09038505363,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201966.4053493194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109106.35141568418,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 109103.87121022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194727.27035468392,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 194722.95337943328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793795.1571072706,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 793781.7123857036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429779.3909001948,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 429764.5303326829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1558.00237271569,
            "unit": "ns/iter",
            "extra": "iterations: 511650\ncpu: 1557.9829961888029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8523.062397064734,
            "unit": "ns/iter",
            "extra": "iterations: 95934\ncpu: 8523.024162444974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6519.438310570845,
            "unit": "ns/iter",
            "extra": "iterations: 121982\ncpu: 6519.421717958379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6604.343975821811,
            "unit": "ns/iter",
            "extra": "iterations: 124407\ncpu: 6604.326123128156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6233.704479829944,
            "unit": "ns/iter",
            "extra": "iterations: 129179\ncpu: 6233.123030833193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33370.17036770271,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 33368.2351058296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254400.52642047495,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 254382.1590909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191729.2024749385,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 191715.40430979317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191140.9026625872,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 191121.80270624076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190288.66056606977,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 190273.05809746738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96914.24972340009,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96910.78778490803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182779.7423868186,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 182771.19341563858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.88406245635838,
            "unit": "ns/iter",
            "extra": "iterations: 3958157\ncpu: 176.87552565499493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.3566985837151,
            "unit": "ns/iter",
            "extra": "iterations: 511429\ncpu: 1368.2851383085533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.0051957324415,
            "unit": "ns/iter",
            "extra": "iterations: 677864\ncpu: 1030.9821734153147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1013.5286088120428,
            "unit": "ns/iter",
            "extra": "iterations: 690906\ncpu: 1013.5396132035328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.902290281786,
            "unit": "ns/iter",
            "extra": "iterations: 928925\ncpu: 818.8781656215455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9367.897418741868,
            "unit": "ns/iter",
            "extra": "iterations: 74731\ncpu: 9367.741633324786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11820.569477504621,
            "unit": "ns/iter",
            "extra": "iterations: 59235\ncpu: 11819.729889423537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2655.5109691722437,
            "unit": "ns/iter",
            "extra": "iterations: 266155\ncpu: 2655.436118051523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2688.539354760315,
            "unit": "ns/iter",
            "extra": "iterations: 263437\ncpu: 2688.3979850970154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2660.26275219713,
            "unit": "ns/iter",
            "extra": "iterations: 263484\ncpu: 2660.0628501161173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5020.277337318527,
            "unit": "ns/iter",
            "extra": "iterations: 137861\ncpu: 5020.079645439993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5071.199305800011,
            "unit": "ns/iter",
            "extra": "iterations: 139153\ncpu: 5070.891033610507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.0847926519034,
            "unit": "ns/iter",
            "extra": "iterations: 364725\ncpu: 1874.073617108774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9917.47466591192,
            "unit": "ns/iter",
            "extra": "iterations: 70715\ncpu: 9917.143463197375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7975.497947674308,
            "unit": "ns/iter",
            "extra": "iterations: 87949\ncpu: 7974.955940374496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7941.0918060664735,
            "unit": "ns/iter",
            "extra": "iterations: 88175\ncpu: 7940.8358378224875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.0991164818815,
            "unit": "ns/iter",
            "extra": "iterations: 88623\ncpu: 7902.764519368601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17649.561798892224,
            "unit": "ns/iter",
            "extra": "iterations: 39491\ncpu: 17649.527740497706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55369.69572108427,
            "unit": "ns/iter",
            "extra": "iterations: 12620\ncpu: 55367.163232963314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43604.96307845158,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 43604.50916801759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44048.25572751579,
            "unit": "ns/iter",
            "extra": "iterations: 16412\ncpu: 44047.23373141546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42936.07264401382,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 42934.47187673973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25269.79361144154,
            "unit": "ns/iter",
            "extra": "iterations: 27831\ncpu: 25267.805684309093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43043.497342862116,
            "unit": "ns/iter",
            "extra": "iterations: 16371\ncpu: 43040.42514201953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.0078194517118,
            "unit": "ns/iter",
            "extra": "iterations: 370870\ncpu: 1884.8947070402112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9890.932414431902,
            "unit": "ns/iter",
            "extra": "iterations: 71317\ncpu: 9890.55905324117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7769.335681487745,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7769.16116026437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7765.079733774876,
            "unit": "ns/iter",
            "extra": "iterations: 89849\ncpu: 7764.87440038287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8106.1013395326145,
            "unit": "ns/iter",
            "extra": "iterations: 86896\ncpu: 8105.834560854415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17331.594147614374,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 17330.556880066128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52228.52317929973,
            "unit": "ns/iter",
            "extra": "iterations: 13374\ncpu: 52226.401973979766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41503.64630225206,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 41499.000292312456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41736.94969886622,
            "unit": "ns/iter",
            "extra": "iterations: 17932\ncpu: 41733.95047958974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41323.39270980795,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 41320.04186934325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25120.301247199706,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 25119.116654230318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41101.436219279814,
            "unit": "ns/iter",
            "extra": "iterations: 17129\ncpu: 41100.25687430692 ns\nthreads: 1"
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
        "date": 1702490343849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.2435360883584,
            "unit": "ns/iter",
            "extra": "iterations: 1256360\ncpu: 557.2413957782801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5280.20553000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.973999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10190.385328774177,
            "unit": "ns/iter",
            "extra": "iterations: 82488\ncpu: 10190.123411890216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15301.46380308073,
            "unit": "ns/iter",
            "extra": "iterations: 55129\ncpu: 15300.988590397064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20145.31337057261,
            "unit": "ns/iter",
            "extra": "iterations: 41711\ncpu: 20143.798997866263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24047.171728536065,
            "unit": "ns/iter",
            "extra": "iterations: 34671\ncpu: 24045.103977387436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29318.646418257435,
            "unit": "ns/iter",
            "extra": "iterations: 28743\ncpu: 29316.727551055912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33607.93915248251,
            "unit": "ns/iter",
            "extra": "iterations: 24849\ncpu: 33606.55559579862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37988.656185731656,
            "unit": "ns/iter",
            "extra": "iterations: 21881\ncpu: 37988.02614140119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.7446225879247,
            "unit": "ns/iter",
            "extra": "iterations: 1313922\ncpu: 530.697636541591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.98888566489137,
            "unit": "ns/iter",
            "extra": "iterations: 1743874\ncpu: 417.9934444805074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.63546224958014,
            "unit": "ns/iter",
            "extra": "iterations: 1651294\ncpu: 424.6094880742019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 396.4266327365363,
            "unit": "ns/iter",
            "extra": "iterations: 1644555\ncpu: 396.39866103596387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.960899748288,
            "unit": "ns/iter",
            "extra": "iterations: 806670\ncpu: 865.944934111842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1646.3123850867025,
            "unit": "ns/iter",
            "extra": "iterations: 485148\ncpu: 1646.2986552557168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8880.370727296817,
            "unit": "ns/iter",
            "extra": "iterations: 90692\ncpu: 8879.863714550345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6886.16161616113,
            "unit": "ns/iter",
            "extra": "iterations: 117711\ncpu: 6885.749844959267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6834.696003426898,
            "unit": "ns/iter",
            "extra": "iterations: 116725\ncpu: 6834.142642964233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6344.761833765223,
            "unit": "ns/iter",
            "extra": "iterations: 125425\ncpu: 6344.416982260331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35064.68192811791,
            "unit": "ns/iter",
            "extra": "iterations: 23567\ncpu: 35062.825136843916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256226.15429202162,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 256210.3781396635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182381.0024352404,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 182366.8806730131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185600.58094812208,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 185588.1261180675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 173846.11918475694,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 173833.73947718172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99227.90475652802,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99220.99197830768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186075.59363733872,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 186058.00636267266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4894.455135598352,
            "unit": "ns/iter",
            "extra": "iterations: 165599\ncpu: 4894.509024812955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23191.887969799795,
            "unit": "ns/iter",
            "extra": "iterations: 36026\ncpu: 23192.13345916838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17984.90946292775,
            "unit": "ns/iter",
            "extra": "iterations: 45208\ncpu: 17984.827906565195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17690.48809372674,
            "unit": "ns/iter",
            "extra": "iterations: 47286\ncpu: 17690.34175020093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17610.282968992047,
            "unit": "ns/iter",
            "extra": "iterations: 47666\ncpu: 17610.466579952226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49632.83814160258,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 49630.256040389235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257117.20276357868,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 257088.67527786028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201436.91805170698,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201434.18744228993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200726.1274555689,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 200719.76145930827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201970.09038505363,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201966.4053493194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109106.35141568418,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 109103.87121022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194727.27035468392,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 194722.95337943328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793795.1571072706,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 793781.7123857036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429779.3909001948,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 429764.5303326829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1558.00237271569,
            "unit": "ns/iter",
            "extra": "iterations: 511650\ncpu: 1557.9829961888029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8523.062397064734,
            "unit": "ns/iter",
            "extra": "iterations: 95934\ncpu: 8523.024162444974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6519.438310570845,
            "unit": "ns/iter",
            "extra": "iterations: 121982\ncpu: 6519.421717958379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6604.343975821811,
            "unit": "ns/iter",
            "extra": "iterations: 124407\ncpu: 6604.326123128156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6233.704479829944,
            "unit": "ns/iter",
            "extra": "iterations: 129179\ncpu: 6233.123030833193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33370.17036770271,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 33368.2351058296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254400.52642047495,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 254382.1590909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191729.2024749385,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 191715.40430979317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191140.9026625872,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 191121.80270624076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190288.66056606977,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 190273.05809746738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96914.24972340009,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96910.78778490803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182779.7423868186,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 182771.19341563858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.88406245635838,
            "unit": "ns/iter",
            "extra": "iterations: 3958157\ncpu: 176.87552565499493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.3566985837151,
            "unit": "ns/iter",
            "extra": "iterations: 511429\ncpu: 1368.2851383085533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.0051957324415,
            "unit": "ns/iter",
            "extra": "iterations: 677864\ncpu: 1030.9821734153147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1013.5286088120428,
            "unit": "ns/iter",
            "extra": "iterations: 690906\ncpu: 1013.5396132035328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.902290281786,
            "unit": "ns/iter",
            "extra": "iterations: 928925\ncpu: 818.8781656215455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9367.897418741868,
            "unit": "ns/iter",
            "extra": "iterations: 74731\ncpu: 9367.741633324786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11820.569477504621,
            "unit": "ns/iter",
            "extra": "iterations: 59235\ncpu: 11819.729889423537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2655.5109691722437,
            "unit": "ns/iter",
            "extra": "iterations: 266155\ncpu: 2655.436118051523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2688.539354760315,
            "unit": "ns/iter",
            "extra": "iterations: 263437\ncpu: 2688.3979850970154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2660.26275219713,
            "unit": "ns/iter",
            "extra": "iterations: 263484\ncpu: 2660.0628501161173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5020.277337318527,
            "unit": "ns/iter",
            "extra": "iterations: 137861\ncpu: 5020.079645439993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5071.199305800011,
            "unit": "ns/iter",
            "extra": "iterations: 139153\ncpu: 5070.891033610507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1874.0847926519034,
            "unit": "ns/iter",
            "extra": "iterations: 364725\ncpu: 1874.073617108774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9917.47466591192,
            "unit": "ns/iter",
            "extra": "iterations: 70715\ncpu: 9917.143463197375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7975.497947674308,
            "unit": "ns/iter",
            "extra": "iterations: 87949\ncpu: 7974.955940374496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7941.0918060664735,
            "unit": "ns/iter",
            "extra": "iterations: 88175\ncpu: 7940.8358378224875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.0991164818815,
            "unit": "ns/iter",
            "extra": "iterations: 88623\ncpu: 7902.764519368601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17649.561798892224,
            "unit": "ns/iter",
            "extra": "iterations: 39491\ncpu: 17649.527740497706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55369.69572108427,
            "unit": "ns/iter",
            "extra": "iterations: 12620\ncpu: 55367.163232963314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43604.96307845158,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 43604.50916801759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44048.25572751579,
            "unit": "ns/iter",
            "extra": "iterations: 16412\ncpu: 44047.23373141546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42936.07264401382,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 42934.47187673973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25269.79361144154,
            "unit": "ns/iter",
            "extra": "iterations: 27831\ncpu: 25267.805684309093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43043.497342862116,
            "unit": "ns/iter",
            "extra": "iterations: 16371\ncpu: 43040.42514201953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.0078194517118,
            "unit": "ns/iter",
            "extra": "iterations: 370870\ncpu: 1884.8947070402112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9890.932414431902,
            "unit": "ns/iter",
            "extra": "iterations: 71317\ncpu: 9890.55905324117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7769.335681487745,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7769.16116026437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7765.079733774876,
            "unit": "ns/iter",
            "extra": "iterations: 89849\ncpu: 7764.87440038287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8106.1013395326145,
            "unit": "ns/iter",
            "extra": "iterations: 86896\ncpu: 8105.834560854415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17331.594147614374,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 17330.556880066128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52228.52317929973,
            "unit": "ns/iter",
            "extra": "iterations: 13374\ncpu: 52226.401973979766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41503.64630225206,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 41499.000292312456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41736.94969886622,
            "unit": "ns/iter",
            "extra": "iterations: 17932\ncpu: 41733.95047958974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41323.39270980795,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 41320.04186934325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25120.301247199706,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 25119.116654230318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41101.436219279814,
            "unit": "ns/iter",
            "extra": "iterations: 17129\ncpu: 41100.25687430692 ns\nthreads: 1"
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
        "date": 1702492925053,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 566.8133456520267,
            "unit": "ns/iter",
            "extra": "iterations: 1255540\ncpu: 566.7969160679867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5301.046429999587,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5300.816999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10311.742221298882,
            "unit": "ns/iter",
            "extra": "iterations: 81826\ncpu: 10311.161489013275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15238.053686353109,
            "unit": "ns/iter",
            "extra": "iterations: 54539\ncpu: 15237.452098498317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19974.368884144114,
            "unit": "ns/iter",
            "extra": "iterations: 42165\ncpu: 19972.7001067236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24742.292088288905,
            "unit": "ns/iter",
            "extra": "iterations: 33798\ncpu: 24741.552754600867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29594.785402281927,
            "unit": "ns/iter",
            "extra": "iterations: 28388\ncpu: 29594.022122023365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34871.33620152309,
            "unit": "ns/iter",
            "extra": "iterations: 24057\ncpu: 34869.87986864531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39294.91884584721,
            "unit": "ns/iter",
            "extra": "iterations: 21453\ncpu: 39293.83769169815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 543.2745832351698,
            "unit": "ns/iter",
            "extra": "iterations: 1319629\ncpu: 543.2526111505584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.004759065079,
            "unit": "ns/iter",
            "extra": "iterations: 1720506\ncpu: 404.99475154402336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 415.82763446469846,
            "unit": "ns/iter",
            "extra": "iterations: 1682059\ncpu: 415.8132384179149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 413.4755984056726,
            "unit": "ns/iter",
            "extra": "iterations: 1685771\ncpu: 413.4641063347283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 855.0597557230953,
            "unit": "ns/iter",
            "extra": "iterations: 820708\ncpu: 855.0360176822937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1653.9221560126327,
            "unit": "ns/iter",
            "extra": "iterations: 480461\ncpu: 1653.842247341614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9586.510594581016,
            "unit": "ns/iter",
            "extra": "iterations: 85657\ncpu: 9585.96728813757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6895.507096051319,
            "unit": "ns/iter",
            "extra": "iterations: 117812\ncpu: 6895.126133161314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6957.271188615257,
            "unit": "ns/iter",
            "extra": "iterations: 116926\ncpu: 6956.953970887568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6812.477208013016,
            "unit": "ns/iter",
            "extra": "iterations: 119055\ncpu: 6812.208643064143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35068.08167694981,
            "unit": "ns/iter",
            "extra": "iterations: 23495\ncpu: 35066.18003830608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238255.4938507896,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 238245.09428805666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 176706.67491244245,
            "unit": "ns/iter",
            "extra": "iterations: 4568\ncpu: 176703.1085814361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189989.56089459683,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 189983.1266607618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 181795.16670330652,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 181789.04772377442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96819.81114724794,
            "unit": "ns/iter",
            "extra": "iterations: 8917\ncpu: 96815.20690815322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185686.4516467358,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 185682.92427102962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4957.849652722589,
            "unit": "ns/iter",
            "extra": "iterations: 164998\ncpu: 4957.700699402409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23218.084565698202,
            "unit": "ns/iter",
            "extra": "iterations: 35298\ncpu: 23217.37208907026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17823.14339759695,
            "unit": "ns/iter",
            "extra": "iterations: 46786\ncpu: 17822.731158893734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17763.008560477367,
            "unit": "ns/iter",
            "extra": "iterations: 46960\ncpu: 17762.457410562187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17578.118708006994,
            "unit": "ns/iter",
            "extra": "iterations: 47183\ncpu: 17577.767416230436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50080.909653690804,
            "unit": "ns/iter",
            "extra": "iterations: 16315\ncpu: 50078.792522218995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 244533.54730536637,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 244525.8682634722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 196936.9450371108,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 196929.7077922064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 189008.49477594017,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 188999.39633155256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 192086.74965452644,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 192081.46015661076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110121.92444052742,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 110118.35554437984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188921.1704036062,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 188915.02242152384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789248.6477935142,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 789228.8093255623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 428584.2215064697,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 428557.7799801785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1595.451068236409,
            "unit": "ns/iter",
            "extra": "iterations: 506021\ncpu: 1595.334778596133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8443.540513608696,
            "unit": "ns/iter",
            "extra": "iterations: 96338\ncpu: 8443.297556519703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6310.762761397116,
            "unit": "ns/iter",
            "extra": "iterations: 129688\ncpu: 6310.571525507341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6335.143579890498,
            "unit": "ns/iter",
            "extra": "iterations: 129071\ncpu: 6334.9575040094405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6042.941763237224,
            "unit": "ns/iter",
            "extra": "iterations: 135739\ncpu: 6042.733481166055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33892.1493989489,
            "unit": "ns/iter",
            "extra": "iterations: 24873\ncpu: 33891.34402766041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 241346.78185439084,
            "unit": "ns/iter",
            "extra": "iterations: 3516\ncpu: 241338.76564277516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184462.68871002906,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 184453.68718729707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193149.65560889232,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 193143.49628983068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192595.24586956282,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 192591.2826086951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97888.40505767633,
            "unit": "ns/iter",
            "extra": "iterations: 9016\ncpu: 97886.12466725818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173788.41401275358,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 173781.82722929947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.2760296593321,
            "unit": "ns/iter",
            "extra": "iterations: 3971095\ncpu: 176.26946723762612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1346.8446939024002,
            "unit": "ns/iter",
            "extra": "iterations: 519883\ncpu: 1346.8036077348163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1079.1080532549215,
            "unit": "ns/iter",
            "extra": "iterations: 645950\ncpu: 1079.079185695484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1054.29117753643,
            "unit": "ns/iter",
            "extra": "iterations: 665041\ncpu: 1054.2643235529756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 799.6735981100137,
            "unit": "ns/iter",
            "extra": "iterations: 872786\ncpu: 799.6527212856289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9444.591886086044,
            "unit": "ns/iter",
            "extra": "iterations: 74021\ncpu: 9444.246902905945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11359.794055132692,
            "unit": "ns/iter",
            "extra": "iterations: 61633\ncpu: 11359.476254603804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2553.5869680095966,
            "unit": "ns/iter",
            "extra": "iterations: 270611\ncpu: 2553.515193395703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2578.7438508159285,
            "unit": "ns/iter",
            "extra": "iterations: 268125\ncpu: 2578.656223776219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2571.290074670863,
            "unit": "ns/iter",
            "extra": "iterations: 275074\ncpu: 2571.2233798905067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4964.100835999844,
            "unit": "ns/iter",
            "extra": "iterations: 143421\ncpu: 4963.917417951313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4915.0327260743625,
            "unit": "ns/iter",
            "extra": "iterations: 142608\ncpu: 4914.907298328285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1892.2922133822467,
            "unit": "ns/iter",
            "extra": "iterations: 364754\ncpu: 1892.237233861715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10077.035648930056,
            "unit": "ns/iter",
            "extra": "iterations: 70493\ncpu: 10076.701232746536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8032.825395029232,
            "unit": "ns/iter",
            "extra": "iterations: 88411\ncpu: 8032.594360430362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7922.7417082049615,
            "unit": "ns/iter",
            "extra": "iterations: 89275\ncpu: 7922.457574908935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7878.186606655555,
            "unit": "ns/iter",
            "extra": "iterations: 89761\ncpu: 7877.919140829516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17525.978045610358,
            "unit": "ns/iter",
            "extra": "iterations: 39992\ncpu: 17525.76015203014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51015.41608340526,
            "unit": "ns/iter",
            "extra": "iterations: 13716\ncpu: 51013.30562846286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42797.44878729746,
            "unit": "ns/iter",
            "extra": "iterations: 17193\ncpu: 42796.29500378112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41395.22520710251,
            "unit": "ns/iter",
            "extra": "iterations: 16900\ncpu: 41393.98224852027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41011.9165400376,
            "unit": "ns/iter",
            "extra": "iterations: 17110\ncpu: 41010.94097019276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24506.780307041216,
            "unit": "ns/iter",
            "extra": "iterations: 28335\ncpu: 24504.796188459288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42423.72918297391,
            "unit": "ns/iter",
            "extra": "iterations: 16609\ncpu: 42423.18622433617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1877.8844585716474,
            "unit": "ns/iter",
            "extra": "iterations: 370603\ncpu: 1877.7505848576363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9803.170920525283,
            "unit": "ns/iter",
            "extra": "iterations: 70916\ncpu: 9802.638332675237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7786.981001611057,
            "unit": "ns/iter",
            "extra": "iterations: 89955\ncpu: 7786.5621699737485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7757.155715661776,
            "unit": "ns/iter",
            "extra": "iterations: 90357\ncpu: 7756.758192503185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7801.421291646615,
            "unit": "ns/iter",
            "extra": "iterations: 89622\ncpu: 7801.345651737213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17414.350967517516,
            "unit": "ns/iter",
            "extra": "iterations: 40206\ncpu: 17413.430831219397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52783.706810628675,
            "unit": "ns/iter",
            "extra": "iterations: 13244\ncpu: 52780.64028994251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41616.46179895472,
            "unit": "ns/iter",
            "extra": "iterations: 16832\ncpu: 41614.1813212925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41665.270803528234,
            "unit": "ns/iter",
            "extra": "iterations: 16776\ncpu: 41664.65188364335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 39197.31611982783,
            "unit": "ns/iter",
            "extra": "iterations: 17525\ncpu: 39196.38231098451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24723.771058470116,
            "unit": "ns/iter",
            "extra": "iterations: 28409\ncpu: 24722.88359322733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41030.70405796867,
            "unit": "ns/iter",
            "extra": "iterations: 17250\ncpu: 41028.365217391314 ns\nthreads: 1"
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
        "date": 1702504011282,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 560.2148561660301,
            "unit": "ns/iter",
            "extra": "iterations: 1235487\ncpu: 560.1725473436791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5130.526010000267,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5130.187000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10050.3893120594,
            "unit": "ns/iter",
            "extra": "iterations: 83234\ncpu: 10049.65879328159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14998.914467368622,
            "unit": "ns/iter",
            "extra": "iterations: 55207\ncpu: 14998.784574419911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19857.643376519947,
            "unit": "ns/iter",
            "extra": "iterations: 42221\ncpu: 19856.843750740154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24648.119112597713,
            "unit": "ns/iter",
            "extra": "iterations: 34077\ncpu: 24646.638495172698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29656.480122652156,
            "unit": "ns/iter",
            "extra": "iterations: 28047\ncpu: 29653.634969871982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34513.81745211115,
            "unit": "ns/iter",
            "extra": "iterations: 24169\ncpu: 34511.68438909347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39395.662335833316,
            "unit": "ns/iter",
            "extra": "iterations: 21320\ncpu: 39393.18480300193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 539.511528754223,
            "unit": "ns/iter",
            "extra": "iterations: 1296801\ncpu: 539.4823107014878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.75205764143664,
            "unit": "ns/iter",
            "extra": "iterations: 1708631\ncpu: 409.7230472817132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 407.43031223855206,
            "unit": "ns/iter",
            "extra": "iterations: 1883688\ncpu: 407.4053134064668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.48869344785487,
            "unit": "ns/iter",
            "extra": "iterations: 1742839\ncpu: 403.48551989024816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 837.6921514351847,
            "unit": "ns/iter",
            "extra": "iterations: 838854\ncpu: 837.6486253865395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1649.2856522505142,
            "unit": "ns/iter",
            "extra": "iterations: 483595\ncpu: 1649.190334887661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9208.608222859923,
            "unit": "ns/iter",
            "extra": "iterations: 88558\ncpu: 9207.943946340236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6873.641631392202,
            "unit": "ns/iter",
            "extra": "iterations: 117887\ncpu: 6873.048767039631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6940.678414249311,
            "unit": "ns/iter",
            "extra": "iterations: 115655\ncpu: 6940.408110328133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6729.342308143114,
            "unit": "ns/iter",
            "extra": "iterations: 119594\ncpu: 6729.361004732652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34870.01665821114,
            "unit": "ns/iter",
            "extra": "iterations: 23652\ncpu: 34869.08929477422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239519.86543177452,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 239515.11849632312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182231.179470349,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 182226.6141387613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184559.1281028272,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 184549.6232269503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186699.89912664317,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 186696.8340611356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98538.76785915803,
            "unit": "ns/iter",
            "extra": "iterations: 8861\ncpu: 98537.2531317008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 178647.302045974,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 178642.3750263654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5012.396580110449,
            "unit": "ns/iter",
            "extra": "iterations: 162169\ncpu: 5012.268066029889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24098.189794390513,
            "unit": "ns/iter",
            "extra": "iterations: 36039\ncpu: 24097.77740780821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17897.724199402805,
            "unit": "ns/iter",
            "extra": "iterations: 46559\ncpu: 17897.643849739005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17577.70396950629,
            "unit": "ns/iter",
            "extra": "iterations: 46958\ncpu: 17577.579965075165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17550.362221664946,
            "unit": "ns/iter",
            "extra": "iterations: 47874\ncpu: 17549.981200651764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50391.32766841552,
            "unit": "ns/iter",
            "extra": "iterations: 16358\ncpu: 50390.88519378915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 261157.05917512055,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 261151.70352659843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200816.70310329177,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 200812.6447429364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202409.19715351833,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 202405.73961735892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202172.41869070724,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 202163.98334489964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109008.55637498808,
            "unit": "ns/iter",
            "extra": "iterations: 8000\ncpu: 109006.34999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192489.81182453688,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 192485.33587624432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 799744.1132389806,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 799729.8084929235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 446452.8280701452,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 446445.01253132813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1566.4447700390838,
            "unit": "ns/iter",
            "extra": "iterations: 515979\ncpu: 1566.4168502981674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8418.914056683354,
            "unit": "ns/iter",
            "extra": "iterations: 98053\ncpu: 8418.720487899413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6348.289758105829,
            "unit": "ns/iter",
            "extra": "iterations: 130181\ncpu: 6348.247440102617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6547.684172811325,
            "unit": "ns/iter",
            "extra": "iterations: 125594\ncpu: 6547.698138446084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 5929.1622267436815,
            "unit": "ns/iter",
            "extra": "iterations: 138103\ncpu: 5929.131155731596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33792.08103655979,
            "unit": "ns/iter",
            "extra": "iterations: 24890\ncpu: 33790.7914825231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 251740.49985872302,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 251724.61147216856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190226.28498292784,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 190215.37969283407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191318.94867408008,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 191307.8272027377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 188197.46150582822,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 188184.07211028718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97575.96653984065,
            "unit": "ns/iter",
            "extra": "iterations: 8936\ncpu: 97568.96821844188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182155.6525529223,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 182144.39601494337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 175.80567533433882,
            "unit": "ns/iter",
            "extra": "iterations: 3960542\ncpu: 175.78924803726483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1328.6411970064466,
            "unit": "ns/iter",
            "extra": "iterations: 528485\ncpu: 1328.6322222958147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1012.7814578557588,
            "unit": "ns/iter",
            "extra": "iterations: 690082\ncpu: 1012.7834083485646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1068.895225136325,
            "unit": "ns/iter",
            "extra": "iterations: 663642\ncpu: 1068.863935676158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 815.9544673439655,
            "unit": "ns/iter",
            "extra": "iterations: 858922\ncpu: 815.9254274544134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9489.721239174787,
            "unit": "ns/iter",
            "extra": "iterations: 74824\ncpu: 9489.523414947138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11507.991178242495,
            "unit": "ns/iter",
            "extra": "iterations: 61439\ncpu: 11507.697065381843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2653.95145446746,
            "unit": "ns/iter",
            "extra": "iterations: 263361\ncpu: 2653.9001598566188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2675.219174413828,
            "unit": "ns/iter",
            "extra": "iterations: 261390\ncpu: 2675.198362599945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2646.187899855472,
            "unit": "ns/iter",
            "extra": "iterations: 263220\ncpu: 2646.1648051060142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5055.572047817709,
            "unit": "ns/iter",
            "extra": "iterations: 146722\ncpu: 5055.470890527639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5046.247402644498,
            "unit": "ns/iter",
            "extra": "iterations: 138410\ncpu: 5046.2004190448815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1894.750412288975,
            "unit": "ns/iter",
            "extra": "iterations: 364429\ncpu: 1894.7548082068295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9897.89156006641,
            "unit": "ns/iter",
            "extra": "iterations: 69965\ncpu: 9897.918959479877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7872.485390431028,
            "unit": "ns/iter",
            "extra": "iterations: 89017\ncpu: 7872.424368378961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7907.235534026389,
            "unit": "ns/iter",
            "extra": "iterations: 87533\ncpu: 7906.957376075381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7831.559800702006,
            "unit": "ns/iter",
            "extra": "iterations: 88912\ncpu: 7831.299487133214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17738.586275598303,
            "unit": "ns/iter",
            "extra": "iterations: 39652\ncpu: 17738.626046605154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54200.82272974541,
            "unit": "ns/iter",
            "extra": "iterations: 12873\ncpu: 54200.95548823128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42487.815339873676,
            "unit": "ns/iter",
            "extra": "iterations: 16506\ncpu: 42487.216769659775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43291.18091316888,
            "unit": "ns/iter",
            "extra": "iterations: 16273\ncpu: 43290.573342346644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42692.766150657386,
            "unit": "ns/iter",
            "extra": "iterations: 16408\ncpu: 42692.393954168474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25069.644104725285,
            "unit": "ns/iter",
            "extra": "iterations: 27997\ncpu: 25069.396721077126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42694.09074387682,
            "unit": "ns/iter",
            "extra": "iterations: 16508\ncpu: 42693.009449963516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1877.872337235995,
            "unit": "ns/iter",
            "extra": "iterations: 373531\ncpu: 1877.8436060192919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9768.63815442646,
            "unit": "ns/iter",
            "extra": "iterations: 72086\ncpu: 9768.42243986349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7820.458629449512,
            "unit": "ns/iter",
            "extra": "iterations: 89351\ncpu: 7820.486620183454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7804.924918536304,
            "unit": "ns/iter",
            "extra": "iterations: 88384\ncpu: 7804.633191527997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7796.924341628306,
            "unit": "ns/iter",
            "extra": "iterations: 89653\ncpu: 7796.818845995052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17541.475832787142,
            "unit": "ns/iter",
            "extra": "iterations: 39806\ncpu: 17541.29025775007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52263.551176962894,
            "unit": "ns/iter",
            "extra": "iterations: 13297\ncpu: 52263.21726705322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41852.29344507752,
            "unit": "ns/iter",
            "extra": "iterations: 16705\ncpu: 41851.94851840797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42099.786206478966,
            "unit": "ns/iter",
            "extra": "iterations: 16544\ncpu: 42099.31092843295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41752.4818224742,
            "unit": "ns/iter",
            "extra": "iterations: 16944\ncpu: 41751.89447592005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25000.267551641722,
            "unit": "ns/iter",
            "extra": "iterations: 28174\ncpu: 25000.1029317812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41563.595028815005,
            "unit": "ns/iter",
            "extra": "iterations: 17179\ncpu: 41562.46580126834 ns\nthreads: 1"
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
        "date": 1705575626679,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.140123630753,
            "unit": "ns/iter",
            "extra": "iterations: 1245807\ncpu: 564.1311214337375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5141.238549999798,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5141.029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9985.433532876968,
            "unit": "ns/iter",
            "extra": "iterations: 83357\ncpu: 9985.38335112828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15067.518432930741,
            "unit": "ns/iter",
            "extra": "iterations: 55824\ncpu: 15067.34558612783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19905.90279342893,
            "unit": "ns/iter",
            "extra": "iterations: 41705\ncpu: 19905.745114494664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24753.31276745338,
            "unit": "ns/iter",
            "extra": "iterations: 34118\ncpu: 24752.614455712515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29822.03716168688,
            "unit": "ns/iter",
            "extra": "iterations: 28524\ncpu: 29821.60987238816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34175.607160275424,
            "unit": "ns/iter",
            "extra": "iterations: 24608\ncpu: 34174.638328998735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38780.01647953565,
            "unit": "ns/iter",
            "extra": "iterations: 22088\ncpu: 38778.78938790295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 534.5488204124658,
            "unit": "ns/iter",
            "extra": "iterations: 1315587\ncpu: 534.5376626555294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.8675543187277,
            "unit": "ns/iter",
            "extra": "iterations: 1714786\ncpu: 404.85827386041194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.4295822301194,
            "unit": "ns/iter",
            "extra": "iterations: 1680279\ncpu: 417.42805807845093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.07102952540686,
            "unit": "ns/iter",
            "extra": "iterations: 1732167\ncpu: 405.072086005564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 839.914509944107,
            "unit": "ns/iter",
            "extra": "iterations: 833711\ncpu: 839.9090332261412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1635.397177232468,
            "unit": "ns/iter",
            "extra": "iterations: 485481\ncpu: 1635.3682224433082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9222.7536205763,
            "unit": "ns/iter",
            "extra": "iterations: 88798\ncpu: 9222.479109889875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7092.893577873343,
            "unit": "ns/iter",
            "extra": "iterations: 117936\ncpu: 7083.859890109889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7416.132880431732,
            "unit": "ns/iter",
            "extra": "iterations: 113049\ncpu: 7415.88957000946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7505.93877292803,
            "unit": "ns/iter",
            "extra": "iterations: 110670\ncpu: 7505.735068220853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35134.972019622466,
            "unit": "ns/iter",
            "extra": "iterations: 23445\ncpu: 35133.80251652806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238258.3340074884,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 238252.18145044867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181974.85914260664,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 181966.40419947513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191618.64593936893,
            "unit": "ns/iter",
            "extra": "iterations: 4519\ncpu: 191608.2982960834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183735.51724894578,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 183723.59920896534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96014.15184859034,
            "unit": "ns/iter",
            "extra": "iterations: 9088\ncpu: 96010.1012323942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 175257.30191694354,
            "unit": "ns/iter",
            "extra": "iterations: 5008\ncpu: 175249.12140575072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4998.228919295096,
            "unit": "ns/iter",
            "extra": "iterations: 165827\ncpu: 4997.996707411952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23477.42445454093,
            "unit": "ns/iter",
            "extra": "iterations: 35429\ncpu: 23476.338592678363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18160.609507821413,
            "unit": "ns/iter",
            "extra": "iterations: 46467\ncpu: 18159.693976370378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18068.940593843832,
            "unit": "ns/iter",
            "extra": "iterations: 46039\ncpu: 18068.124850670134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17625.638765657088,
            "unit": "ns/iter",
            "extra": "iterations: 45984\ncpu: 17624.828201113436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49580.72063847025,
            "unit": "ns/iter",
            "extra": "iterations: 16978\ncpu: 49578.53104016975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 247075.78975663424,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 247070.51499716984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 191747.0631602184,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 191741.7913732396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192858.8789088541,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 192852.16234198128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 191485.9359087065,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 191481.67251975453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 105598.9894723963,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 105596.63361488568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192754.24003523536,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 192746.55362255021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 776707.9079160219,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 776657.6736672038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 431808.93180711067,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 431799.4641987367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1538.0537824445514,
            "unit": "ns/iter",
            "extra": "iterations: 519426\ncpu: 1537.9959801781265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8443.464741500125,
            "unit": "ns/iter",
            "extra": "iterations: 96615\ncpu: 8443.258293225736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6403.5157031920135,
            "unit": "ns/iter",
            "extra": "iterations: 127490\ncpu: 6403.357126049103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6480.461322599906,
            "unit": "ns/iter",
            "extra": "iterations: 124724\ncpu: 6480.363041595862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6045.7977839537525,
            "unit": "ns/iter",
            "extra": "iterations: 134564\ncpu: 6045.605808388576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33534.84146783239,
            "unit": "ns/iter",
            "extra": "iterations: 24853\ncpu: 33534.33790689258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 236324.61522027903,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 236316.7423230973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 180003.17885011178,
            "unit": "ns/iter",
            "extra": "iterations: 4870\ncpu: 179998.09034907477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 179803.0889344251,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 179797.45901639387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 179632.51754919163,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 179627.34834652054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94522.74862800588,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 94517.83062520219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 170833.83756949674,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 170819.0627482122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 179.1880972516975,
            "unit": "ns/iter",
            "extra": "iterations: 3896075\ncpu: 179.1874899738829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1352.2043904049629,
            "unit": "ns/iter",
            "extra": "iterations: 508928\ncpu: 1352.182234029176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1098.1046686470706,
            "unit": "ns/iter",
            "extra": "iterations: 628469\ncpu: 1098.0944167492776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1099.8950537414057,
            "unit": "ns/iter",
            "extra": "iterations: 646893\ncpu: 1099.852216672621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 780.4999108649713,
            "unit": "ns/iter",
            "extra": "iterations: 897514\ncpu: 780.4904436031123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9546.108407681395,
            "unit": "ns/iter",
            "extra": "iterations: 73528\ncpu: 9545.981122837577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11855.292942264346,
            "unit": "ns/iter",
            "extra": "iterations: 58404\ncpu: 11855.217108417219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2662.9885593360846,
            "unit": "ns/iter",
            "extra": "iterations: 265107\ncpu: 2662.929307788947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2661.8844383178266,
            "unit": "ns/iter",
            "extra": "iterations: 260441\ncpu: 2661.8523965120676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2651.0618878871464,
            "unit": "ns/iter",
            "extra": "iterations: 267516\ncpu: 2650.9928378115815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5099.652771611996,
            "unit": "ns/iter",
            "extra": "iterations: 137411\ncpu: 5099.589552510351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5051.250129821837,
            "unit": "ns/iter",
            "extra": "iterations: 138652\ncpu: 5051.171277731311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1916.920741036846,
            "unit": "ns/iter",
            "extra": "iterations: 367971\ncpu: 1916.9045930249854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9888.326214409917,
            "unit": "ns/iter",
            "extra": "iterations: 71125\ncpu: 9888.35992970129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8016.064089591348,
            "unit": "ns/iter",
            "extra": "iterations: 86972\ncpu: 8015.97755599493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7854.328893361951,
            "unit": "ns/iter",
            "extra": "iterations: 88439\ncpu: 7854.288266488842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7994.505910623072,
            "unit": "ns/iter",
            "extra": "iterations: 87808\ncpu: 7994.260204081628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17762.999543297723,
            "unit": "ns/iter",
            "extra": "iterations: 39413\ncpu: 17762.550427523987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53789.865977787544,
            "unit": "ns/iter",
            "extra": "iterations: 12968\ncpu: 53789.597470696695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42277.22200807005,
            "unit": "ns/iter",
            "extra": "iterations: 16603\ncpu: 42276.215141842265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42510.072566480056,
            "unit": "ns/iter",
            "extra": "iterations: 16509\ncpu: 42508.99509358599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42306.99603055067,
            "unit": "ns/iter",
            "extra": "iterations: 16627\ncpu: 42306.790160582124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24951.78499838213,
            "unit": "ns/iter",
            "extra": "iterations: 27837\ncpu: 24951.85185185211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42218.47848589205,
            "unit": "ns/iter",
            "extra": "iterations: 16617\ncpu: 42218.29451766242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1868.2174151967686,
            "unit": "ns/iter",
            "extra": "iterations: 374868\ncpu: 1868.189335979597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9823.312064571106,
            "unit": "ns/iter",
            "extra": "iterations: 70620\ncpu: 9823.248371566153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8480.296239238598,
            "unit": "ns/iter",
            "extra": "iterations: 88280\ncpu: 8480.319438151299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7958.18731356055,
            "unit": "ns/iter",
            "extra": "iterations: 87495\ncpu: 7958.086747814103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7964.816800715325,
            "unit": "ns/iter",
            "extra": "iterations: 87282\ncpu: 7964.714374097821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17508.141172628166,
            "unit": "ns/iter",
            "extra": "iterations: 39774\ncpu: 17507.585357268734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53492.724804415375,
            "unit": "ns/iter",
            "extra": "iterations: 13038\ncpu: 53492.42215063688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42106.277464619925,
            "unit": "ns/iter",
            "extra": "iterations: 16676\ncpu: 42106.39242024513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42164.45112782081,
            "unit": "ns/iter",
            "extra": "iterations: 16492\ncpu: 42164.19476109616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41160.034598950784,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 41159.173235453665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24690.748575846366,
            "unit": "ns/iter",
            "extra": "iterations: 28438\ncpu: 24690.590055559485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41851.12094828813,
            "unit": "ns/iter",
            "extra": "iterations: 16999\ncpu: 41850.550032354615 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}