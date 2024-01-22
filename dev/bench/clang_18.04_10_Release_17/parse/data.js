window.BENCHMARK_DATA = {
  "lastUpdate": 1705962038149,
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
        "date": 1705773450156,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.8438999925976,
            "unit": "ns/iter",
            "extra": "iterations: 1244228\ncpu: 564.8363483220119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5165.147290000505,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5165.1129999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10079.273522577661,
            "unit": "ns/iter",
            "extra": "iterations: 82644\ncpu: 10079.193891873578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15122.45250004555,
            "unit": "ns/iter",
            "extra": "iterations: 55779\ncpu: 15122.461858405493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20180.83664173458,
            "unit": "ns/iter",
            "extra": "iterations: 41712\ncpu: 20180.859225163025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24539.80171369605,
            "unit": "ns/iter",
            "extra": "iterations: 33845\ncpu: 24539.42975328706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29896.208763978648,
            "unit": "ns/iter",
            "extra": "iterations: 28252\ncpu: 29895.508282599483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34350.28187206106,
            "unit": "ns/iter",
            "extra": "iterations: 24465\ncpu: 34349.20498671573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39187.706060323595,
            "unit": "ns/iter",
            "extra": "iterations: 21484\ncpu: 39187.72109476821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 539.0610271238949,
            "unit": "ns/iter",
            "extra": "iterations: 1301323\ncpu: 539.0481840403963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 408.4818001497897,
            "unit": "ns/iter",
            "extra": "iterations: 1707569\ncpu: 408.47778332822884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 420.12864405022935,
            "unit": "ns/iter",
            "extra": "iterations: 1667547\ncpu: 420.12441028648647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 413.219135813432,
            "unit": "ns/iter",
            "extra": "iterations: 1691718\ncpu: 413.2191653691689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 855.3371987177661,
            "unit": "ns/iter",
            "extra": "iterations: 821738\ncpu: 855.3216475324269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1643.678985513229,
            "unit": "ns/iter",
            "extra": "iterations: 484028\ncpu: 1643.6611105142695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9163.802167042817,
            "unit": "ns/iter",
            "extra": "iterations: 88600\ncpu: 9163.504514672686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6833.8911300992995,
            "unit": "ns/iter",
            "extra": "iterations: 117149\ncpu: 6833.84407890804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7007.9138039165055,
            "unit": "ns/iter",
            "extra": "iterations: 114808\ncpu: 7007.7590411818055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6489.658494211608,
            "unit": "ns/iter",
            "extra": "iterations: 123178\ncpu: 6489.589861825957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35263.79760581627,
            "unit": "ns/iter",
            "extra": "iterations: 23390\ncpu: 35262.56947413424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 223024.38068328524,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 223021.2689442591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 179261.5631149085,
            "unit": "ns/iter",
            "extra": "iterations: 4777\ncpu: 179255.6834833583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186669.61447311475,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 186666.50444350395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185093.55187000424,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 185088.24577025865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99341.5806011012,
            "unit": "ns/iter",
            "extra": "iterations: 8784\ncpu: 99340.73315118405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184966.70204255002,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 184961.69719941053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5010.808120126704,
            "unit": "ns/iter",
            "extra": "iterations: 164160\ncpu: 5010.752923976606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23342.548299933682,
            "unit": "ns/iter",
            "extra": "iterations: 35528\ncpu: 23342.107633415966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17690.498963146758,
            "unit": "ns/iter",
            "extra": "iterations: 46294\ncpu: 17690.486888149604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17703.096955542984,
            "unit": "ns/iter",
            "extra": "iterations: 46248\ncpu: 17702.62497837745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17525.99690669606,
            "unit": "ns/iter",
            "extra": "iterations: 47522\ncpu: 17525.796473212406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49812.585095431576,
            "unit": "ns/iter",
            "extra": "iterations: 16505\ncpu: 49811.41472281121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262890.2003007717,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 262883.33834586374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202336.20454547304,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 202332.32838590082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 191387.78599672313,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 191379.36729472014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203964.16503496337,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 203954.12587412502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109246.36615112839,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 109241.85841820683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 183076.39354254695,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 183064.39376834538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787241.885313548,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 787192.9867986753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 418677.0897622533,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 418647.54973313794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1572.0466980950569,
            "unit": "ns/iter",
            "extra": "iterations: 519700\ncpu: 1571.9619010967795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8588.021646103274,
            "unit": "ns/iter",
            "extra": "iterations: 96045\ncpu: 8587.412150554448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6395.161067680859,
            "unit": "ns/iter",
            "extra": "iterations: 127791\ncpu: 6394.933915533992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6707.812275015981,
            "unit": "ns/iter",
            "extra": "iterations: 122509\ncpu: 6707.624745937033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6156.918896514928,
            "unit": "ns/iter",
            "extra": "iterations: 133903\ncpu: 6156.846373867641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34137.44218718407,
            "unit": "ns/iter",
            "extra": "iterations: 25055\ncpu: 34136.036719217846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246549.3941584504,
            "unit": "ns/iter",
            "extra": "iterations: 3458\ncpu: 246542.1631000584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191816.20950324525,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 191814.94600431883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190624.1101235529,
            "unit": "ns/iter",
            "extra": "iterations: 4613\ncpu: 190619.51008020784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189510.79112438118,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 189506.2940046938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97221.08909911022,
            "unit": "ns/iter",
            "extra": "iterations: 9091\ncpu: 97218.25981740224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183611.49297811033,
            "unit": "ns/iter",
            "extra": "iterations: 4842\ncpu: 183605.3903345723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.44726944447933,
            "unit": "ns/iter",
            "extra": "iterations: 3932350\ncpu: 177.44163159433856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1389.9780170020363,
            "unit": "ns/iter",
            "extra": "iterations: 507938\ncpu: 1389.965310726901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1141.5252074443372,
            "unit": "ns/iter",
            "extra": "iterations: 614382\ncpu: 1141.5126094188988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1072.6907118996207,
            "unit": "ns/iter",
            "extra": "iterations: 657691\ncpu: 1072.6616298535334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 823.4832594127113,
            "unit": "ns/iter",
            "extra": "iterations: 843698\ncpu: 823.4845880872027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9759.49886820238,
            "unit": "ns/iter",
            "extra": "iterations: 70684\ncpu: 9759.023258446035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12316.058057313037,
            "unit": "ns/iter",
            "extra": "iterations: 56427\ncpu: 12315.79208534929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2762.587613520236,
            "unit": "ns/iter",
            "extra": "iterations: 252598\ncpu: 2762.49614011195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2763.9715101297525,
            "unit": "ns/iter",
            "extra": "iterations: 251879\ncpu: 2763.909258016731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2741.8587810618073,
            "unit": "ns/iter",
            "extra": "iterations: 255419\ncpu: 2741.7607930498566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4845.721675664813,
            "unit": "ns/iter",
            "extra": "iterations: 143728\ncpu: 4845.677947233644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5196.901504481399,
            "unit": "ns/iter",
            "extra": "iterations: 134199\ncpu: 5196.6989321827905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1941.2102614410994,
            "unit": "ns/iter",
            "extra": "iterations: 359852\ncpu: 1941.183319809236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9993.091774730388,
            "unit": "ns/iter",
            "extra": "iterations: 69943\ncpu: 9992.962841170609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8008.9848330723025,
            "unit": "ns/iter",
            "extra": "iterations: 87493\ncpu: 8008.81899123353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7942.226394351283,
            "unit": "ns/iter",
            "extra": "iterations: 88231\ncpu: 7942.033978987053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7975.632603103096,
            "unit": "ns/iter",
            "extra": "iterations: 88237\ncpu: 7975.300610854776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17682.991361838063,
            "unit": "ns/iter",
            "extra": "iterations: 39476\ncpu: 17682.71608065671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54322.88483190249,
            "unit": "ns/iter",
            "extra": "iterations: 12790\ncpu: 54322.23612197113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42672.560111608866,
            "unit": "ns/iter",
            "extra": "iterations: 16486\ncpu: 42671.4060414894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42922.31632527795,
            "unit": "ns/iter",
            "extra": "iterations: 16306\ncpu: 42921.07199803764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42966.87896148358,
            "unit": "ns/iter",
            "extra": "iterations: 16408\ncpu: 42966.82715748427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25081.134958470026,
            "unit": "ns/iter",
            "extra": "iterations: 27690\ncpu: 25080.487540628044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42493.97068913142,
            "unit": "ns/iter",
            "extra": "iterations: 16615\ncpu: 42493.60818537505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1851.8803909846342,
            "unit": "ns/iter",
            "extra": "iterations: 373007\ncpu: 1851.834147884613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9772.019412573693,
            "unit": "ns/iter",
            "extra": "iterations: 71294\ncpu: 9771.590877212697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7812.310091906753,
            "unit": "ns/iter",
            "extra": "iterations: 89438\ncpu: 7811.969185357437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7795.769369128685,
            "unit": "ns/iter",
            "extra": "iterations: 89511\ncpu: 7795.527923942252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7823.543102191294,
            "unit": "ns/iter",
            "extra": "iterations: 89195\ncpu: 7823.243455350524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17584.652366676564,
            "unit": "ns/iter",
            "extra": "iterations: 39697\ncpu: 17583.845126835542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52954.77066988332,
            "unit": "ns/iter",
            "extra": "iterations: 13256\ncpu: 52952.01418225642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41805.70181731116,
            "unit": "ns/iter",
            "extra": "iterations: 16728\ncpu: 41804.19057867005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41715.98995959977,
            "unit": "ns/iter",
            "extra": "iterations: 16832\ncpu: 41714.03873574132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41874.10777837525,
            "unit": "ns/iter",
            "extra": "iterations: 16803\ncpu: 41873.15360352332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24878.782548376865,
            "unit": "ns/iter",
            "extra": "iterations: 28112\ncpu: 24878.752845759976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40933.934680914244,
            "unit": "ns/iter",
            "extra": "iterations: 17315\ncpu: 40932.347675426245 ns\nthreads: 1"
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
        "date": 1705774873498,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 541.8094064371084,
            "unit": "ns/iter",
            "extra": "iterations: 1286098\ncpu: 541.7779982551874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5097.972629999958,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5097.807999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10034.35176558531,
            "unit": "ns/iter",
            "extra": "iterations: 82862\ncpu: 10033.887668653906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15024.51315130261,
            "unit": "ns/iter",
            "extra": "iterations: 55888\ncpu: 15023.686659032353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19901.987803124528,
            "unit": "ns/iter",
            "extra": "iterations: 41732\ncpu: 19900.805137544332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24995.125210108883,
            "unit": "ns/iter",
            "extra": "iterations: 33911\ncpu: 24993.712954498547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29565.48790056459,
            "unit": "ns/iter",
            "extra": "iterations: 28803\ncpu: 29564.795333819413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34693.40359403356,
            "unit": "ns/iter",
            "extra": "iterations: 24485\ncpu: 34692.88952419846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38932.23711759046,
            "unit": "ns/iter",
            "extra": "iterations: 22162\ncpu: 38931.58559696777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.8948930679144,
            "unit": "ns/iter",
            "extra": "iterations: 1305128\ncpu: 535.8776303933399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 406.9076189856517,
            "unit": "ns/iter",
            "extra": "iterations: 1720754\ncpu: 406.8903515551896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 403.1992594661117,
            "unit": "ns/iter",
            "extra": "iterations: 1672307\ncpu: 403.1687961600354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.67360378332313,
            "unit": "ns/iter",
            "extra": "iterations: 1715314\ncpu: 407.64903685272776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 818.2732665292149,
            "unit": "ns/iter",
            "extra": "iterations: 809532\ncpu: 818.2066922617028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1655.9478817066704,
            "unit": "ns/iter",
            "extra": "iterations: 480906\ncpu: 1655.8616444793788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9228.18670886053,
            "unit": "ns/iter",
            "extra": "iterations: 89744\ncpu: 9227.955072205386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7139.713020581642,
            "unit": "ns/iter",
            "extra": "iterations: 113935\ncpu: 7139.630491069481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7398.763200243163,
            "unit": "ns/iter",
            "extra": "iterations: 111854\ncpu: 7398.26559622366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7033.027248805039,
            "unit": "ns/iter",
            "extra": "iterations: 115528\ncpu: 7032.499480645401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34843.3991674355,
            "unit": "ns/iter",
            "extra": "iterations: 23782\ncpu: 34841.24968463539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 219470.00759221063,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 219453.1724511936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 180128.61146358782,
            "unit": "ns/iter",
            "extra": "iterations: 4571\ncpu: 180110.67600087472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191707.8811967693,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 191694.34374317556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 177112.51970768638,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 177100.53144375575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98540.56848772784,
            "unit": "ns/iter",
            "extra": "iterations: 8841\ncpu: 98532.49632394503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185647.83008060616,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 185635.34153585113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4911.7288341546455,
            "unit": "ns/iter",
            "extra": "iterations: 164593\ncpu: 4911.527221692308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25727.7530714843,
            "unit": "ns/iter",
            "extra": "iterations: 32232\ncpu: 25725.940059568144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18529.74314197773,
            "unit": "ns/iter",
            "extra": "iterations: 44437\ncpu: 18528.84083083911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17879.604980044693,
            "unit": "ns/iter",
            "extra": "iterations: 46104\ncpu: 17878.17759847301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17771.698137499312,
            "unit": "ns/iter",
            "extra": "iterations: 46604\ncpu: 17770.596944468274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49234.6387360179,
            "unit": "ns/iter",
            "extra": "iterations: 16899\ncpu: 49232.978282738426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 244766.6382385577,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 244756.71683389222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201993.90559034387,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 201987.1723498022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 189905.03769655872,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 189896.71600370063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200985.0852677429,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 200977.79820730977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109192.88817930866,
            "unit": "ns/iter",
            "extra": "iterations: 7986\ncpu: 109188.98071625376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192449.9328142388,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 192441.2458286998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 776967.2934426155,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 776942.0491803285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444030.79072113946,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 444024.76046394533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1559.1701414613656,
            "unit": "ns/iter",
            "extra": "iterations: 518304\ncpu: 1559.0962060875481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8334.433255126663,
            "unit": "ns/iter",
            "extra": "iterations: 98457\ncpu: 8334.207826767006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6348.341120829334,
            "unit": "ns/iter",
            "extra": "iterations: 126228\ncpu: 6348.095509712575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6626.685751405011,
            "unit": "ns/iter",
            "extra": "iterations: 122384\ncpu: 6626.49365930186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6101.566275199269,
            "unit": "ns/iter",
            "extra": "iterations: 134281\ncpu: 6101.436539793433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33537.29117117092,
            "unit": "ns/iter",
            "extra": "iterations: 24975\ncpu: 33535.91991991987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 252904.5767599673,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 252894.17585524503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190216.46933504954,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 190211.4697654408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190891.1356042606,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 190884.18311998277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 179738.82380951362,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 179733.52813852733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96101.43034907882,
            "unit": "ns/iter",
            "extra": "iterations: 9081\ncpu: 96091.49873361975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181864.56608065497,
            "unit": "ns/iter",
            "extra": "iterations: 4835\ncpu: 181853.87797311283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 175.879405695847,
            "unit": "ns/iter",
            "extra": "iterations: 3949291\ncpu: 175.87273259934523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1326.6108791150511,
            "unit": "ns/iter",
            "extra": "iterations: 525392\ncpu: 1326.581485823915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1080.77483273883,
            "unit": "ns/iter",
            "extra": "iterations: 643455\ncpu: 1080.7509460646033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1068.290199465024,
            "unit": "ns/iter",
            "extra": "iterations: 654250\ncpu: 1068.2470003821088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.5409804157716,
            "unit": "ns/iter",
            "extra": "iterations: 857983\ncpu: 818.5290384541405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9592.461185843953,
            "unit": "ns/iter",
            "extra": "iterations: 73298\ncpu: 9592.141668258331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10320.815602041172,
            "unit": "ns/iter",
            "extra": "iterations: 62479\ncpu: 10319.861073320719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2529.191773536416,
            "unit": "ns/iter",
            "extra": "iterations: 266992\ncpu: 2528.9491819979803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2640.2715432365967,
            "unit": "ns/iter",
            "extra": "iterations: 267114\ncpu: 2640.038710063878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2622.883918728543,
            "unit": "ns/iter",
            "extra": "iterations: 267597\ncpu: 2622.743528514888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4884.447365196974,
            "unit": "ns/iter",
            "extra": "iterations: 138739\ncpu: 4884.322360691627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4927.12881862998,
            "unit": "ns/iter",
            "extra": "iterations: 142394\ncpu: 4927.006053625883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.9455530117461,
            "unit": "ns/iter",
            "extra": "iterations: 368193\ncpu: 1917.87567933123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9821.370532872574,
            "unit": "ns/iter",
            "extra": "iterations: 72250\ncpu: 9821.216608996552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7951.157587769037,
            "unit": "ns/iter",
            "extra": "iterations: 88300\ncpu: 7950.835787089343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7840.324268470583,
            "unit": "ns/iter",
            "extra": "iterations: 88069\ncpu: 7840.19916202066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7859.72919516585,
            "unit": "ns/iter",
            "extra": "iterations: 89186\ncpu: 7859.582221424888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17622.309818418376,
            "unit": "ns/iter",
            "extra": "iterations: 39762\ncpu: 17621.787133443933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54268.22879057815,
            "unit": "ns/iter",
            "extra": "iterations: 12907\ncpu: 54267.12636553737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42563.151853427444,
            "unit": "ns/iter",
            "extra": "iterations: 16483\ncpu: 42561.04471273426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42694.32340373274,
            "unit": "ns/iter",
            "extra": "iterations: 16382\ncpu: 42692.723721156835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42957.688097412254,
            "unit": "ns/iter",
            "extra": "iterations: 16425\ncpu: 42955.086757991055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24966.645124392726,
            "unit": "ns/iter",
            "extra": "iterations: 27976\ncpu: 24965.842150414628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42311.67632181292,
            "unit": "ns/iter",
            "extra": "iterations: 16606\ncpu: 42311.0442008916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1883.9907536205724,
            "unit": "ns/iter",
            "extra": "iterations: 370956\ncpu: 1883.9590140070557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9705.917239155782,
            "unit": "ns/iter",
            "extra": "iterations: 71326\ncpu: 9700.921122732387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7867.213236876207,
            "unit": "ns/iter",
            "extra": "iterations: 88329\ncpu: 7867.085555140368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7945.113523313638,
            "unit": "ns/iter",
            "extra": "iterations: 88255\ncpu: 7944.632032179361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7948.546550721644,
            "unit": "ns/iter",
            "extra": "iterations: 87743\ncpu: 7948.420956657458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17440.220103080774,
            "unit": "ns/iter",
            "extra": "iterations: 40163\ncpu: 17440.014441152038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52720.9631868991,
            "unit": "ns/iter",
            "extra": "iterations: 13066\ncpu: 52717.67947344318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41590.9762555988,
            "unit": "ns/iter",
            "extra": "iterations: 17183\ncpu: 41586.69033346973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41759.430758271796,
            "unit": "ns/iter",
            "extra": "iterations: 16854\ncpu: 41758.84063130368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41697.20242266265,
            "unit": "ns/iter",
            "extra": "iterations: 16841\ncpu: 41696.4432040856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24986.92959150992,
            "unit": "ns/iter",
            "extra": "iterations: 28079\ncpu: 24986.83001531404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41437.88651488912,
            "unit": "ns/iter",
            "extra": "iterations: 17130\ncpu: 41434.67016929345 ns\nthreads: 1"
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
        "date": 1705778436324,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 573.8480996751655,
            "unit": "ns/iter",
            "extra": "iterations: 1225501\ncpu: 573.8240931667947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5260.242739999512,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5259.708999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10273.45729692501,
            "unit": "ns/iter",
            "extra": "iterations: 81411\ncpu: 10272.820626205305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15241.064478458664,
            "unit": "ns/iter",
            "extra": "iterations: 55662\ncpu: 15239.730875642263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20090.632233075306,
            "unit": "ns/iter",
            "extra": "iterations: 42081\ncpu: 20089.06157173071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24999.491074084664,
            "unit": "ns/iter",
            "extra": "iterations: 33610\ncpu: 24997.48884260636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29970.289441168934,
            "unit": "ns/iter",
            "extra": "iterations: 28327\ncpu: 29967.896353302516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34957.88720524656,
            "unit": "ns/iter",
            "extra": "iterations: 24088\ncpu: 34954.96927930923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39485.7739253632,
            "unit": "ns/iter",
            "extra": "iterations: 21170\ncpu: 39483.30184222957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 536.3003789861161,
            "unit": "ns/iter",
            "extra": "iterations: 1307172\ncpu: 536.2637051589236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 411.79568425003686,
            "unit": "ns/iter",
            "extra": "iterations: 1702879\ncpu: 411.78445444450216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.0890316574363,
            "unit": "ns/iter",
            "extra": "iterations: 1675595\ncpu: 418.07787681390795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.4314801709784,
            "unit": "ns/iter",
            "extra": "iterations: 1682907\ncpu: 415.403109025038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 852.9031590117943,
            "unit": "ns/iter",
            "extra": "iterations: 810380\ncpu: 852.8698882005965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1647.3051225403863,
            "unit": "ns/iter",
            "extra": "iterations: 483432\ncpu: 1647.2256697943017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9538.834527778445,
            "unit": "ns/iter",
            "extra": "iterations: 86093\ncpu: 9538.064651016932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7153.033935461395,
            "unit": "ns/iter",
            "extra": "iterations: 114040\ncpu: 7152.4421255699635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7254.814972512661,
            "unit": "ns/iter",
            "extra": "iterations: 111324\ncpu: 7254.210233193201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7133.339418774892,
            "unit": "ns/iter",
            "extra": "iterations: 114207\ncpu: 7132.950694791032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35249.87894669924,
            "unit": "ns/iter",
            "extra": "iterations: 23469\ncpu: 35246.989645915965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243037.44225651392,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 243022.5385843532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 175196.38935946496,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 175181.10111169965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184362.74827201333,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 184350.85841694567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182146.2836411647,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 182131.79419525072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95222.16945512732,
            "unit": "ns/iter",
            "extra": "iterations: 8846\ncpu: 95214.93330318789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 173765.2502132926,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 173751.45051194512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4901.404316608438,
            "unit": "ns/iter",
            "extra": "iterations: 163508\ncpu: 4901.144286518098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23023.90954219663,
            "unit": "ns/iter",
            "extra": "iterations: 36260\ncpu: 23022.27247655815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17787.443013591284,
            "unit": "ns/iter",
            "extra": "iterations: 46204\ncpu: 17786.332352177295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17591.89665988538,
            "unit": "ns/iter",
            "extra": "iterations: 47184\ncpu: 17590.780773143415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17150.289733155492,
            "unit": "ns/iter",
            "extra": "iterations: 47668\ncpu: 17149.40211462612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49238.445797948465,
            "unit": "ns/iter",
            "extra": "iterations: 17075\ncpu: 49237.095168374915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 253898.29870907054,
            "unit": "ns/iter",
            "extra": "iterations: 3331\ncpu: 253879.25547883462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201890.6762672935,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 201878.45622119895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202318.70277196457,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 202299.58071278784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202048.5480082907,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 202033.75546856984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106238.30157934852,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 106229.94484833349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196097.83526074773,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 196085.38075496367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 783871.804455438,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 783815.2640264041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 439818.9859496063,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 439791.4728682186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1561.6260320280678,
            "unit": "ns/iter",
            "extra": "iterations: 517670\ncpu: 1561.646608843469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8307.47058046207,
            "unit": "ns/iter",
            "extra": "iterations: 98387\ncpu: 8307.01515444115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6539.0053946166945,
            "unit": "ns/iter",
            "extra": "iterations: 124754\ncpu: 6538.553473235359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6738.269339751209,
            "unit": "ns/iter",
            "extra": "iterations: 124226\ncpu: 6737.9195981517705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6271.097391197683,
            "unit": "ns/iter",
            "extra": "iterations: 130443\ncpu: 6270.863135622487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33451.76350242608,
            "unit": "ns/iter",
            "extra": "iterations: 24977\ncpu: 33450.5064659488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 250848.9968396058,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 250826.12588885945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188271.7106437167,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 188260.8667941365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189970.36773223832,
            "unit": "ns/iter",
            "extra": "iterations: 4661\ncpu: 189964.17077880347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 178151.11515539978,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 178147.76500638542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96903.00557255423,
            "unit": "ns/iter",
            "extra": "iterations: 9152\ncpu: 96899.19143356668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182895.14626061736,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 182880.13258752789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.59531594496238,
            "unit": "ns/iter",
            "extra": "iterations: 3936461\ncpu: 177.5836468340467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1362.1117775043388,
            "unit": "ns/iter",
            "extra": "iterations: 509709\ncpu: 1362.0762042655726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1152.9716189040537,
            "unit": "ns/iter",
            "extra": "iterations: 607658\ncpu: 1152.9254942747466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1130.3964830874813,
            "unit": "ns/iter",
            "extra": "iterations: 618952\ncpu: 1130.313820780944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 825.5929991531937,
            "unit": "ns/iter",
            "extra": "iterations: 851497\ncpu: 825.5179994762157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9426.010476461694,
            "unit": "ns/iter",
            "extra": "iterations: 73689\ncpu: 9425.39320658446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12255.702433494,
            "unit": "ns/iter",
            "extra": "iterations: 57325\ncpu: 12255.347579590089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2709.7965496429624,
            "unit": "ns/iter",
            "extra": "iterations: 258466\ncpu: 2709.663940324837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2716.0036490099847,
            "unit": "ns/iter",
            "extra": "iterations: 256782\ncpu: 2715.915056351306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2683.7680937038676,
            "unit": "ns/iter",
            "extra": "iterations: 261334\ncpu: 2683.6385621465315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5055.5297017783205,
            "unit": "ns/iter",
            "extra": "iterations: 137113\ncpu: 5055.357989395614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5150.600638977789,
            "unit": "ns/iter",
            "extra": "iterations: 136155\ncpu: 5150.414601006204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1920.3883617132035,
            "unit": "ns/iter",
            "extra": "iterations: 364521\ncpu: 1920.2476674869222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9886.840656939632,
            "unit": "ns/iter",
            "extra": "iterations: 70935\ncpu: 9886.317050821202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8063.006062710316,
            "unit": "ns/iter",
            "extra": "iterations: 86430\ncpu: 8062.641443943193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7817.352273869711,
            "unit": "ns/iter",
            "extra": "iterations: 89473\ncpu: 7816.876599644634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7962.533515978757,
            "unit": "ns/iter",
            "extra": "iterations: 88331\ncpu: 7962.124282528199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17600.58313482598,
            "unit": "ns/iter",
            "extra": "iterations: 39881\ncpu: 17599.475940924447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54406.85799690087,
            "unit": "ns/iter",
            "extra": "iterations: 12880\ncpu: 54403.54037267115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43057.590962191214,
            "unit": "ns/iter",
            "extra": "iterations: 16265\ncpu: 43053.62434675678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43401.08079930505,
            "unit": "ns/iter",
            "extra": "iterations: 16114\ncpu: 43399.255305945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42576.02421765255,
            "unit": "ns/iter",
            "extra": "iterations: 16393\ncpu: 42574.30000609987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25008.92921708017,
            "unit": "ns/iter",
            "extra": "iterations: 28100\ncpu: 25008.12455515978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42509.32130116392,
            "unit": "ns/iter",
            "extra": "iterations: 16539\ncpu: 42507.87230183178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.7052297723924,
            "unit": "ns/iter",
            "extra": "iterations: 370475\ncpu: 1885.658141575007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9944.319258118121,
            "unit": "ns/iter",
            "extra": "iterations: 70739\ncpu: 9943.717044346162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7845.5674568892055,
            "unit": "ns/iter",
            "extra": "iterations: 89131\ncpu: 7845.20873770069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7833.939123131907,
            "unit": "ns/iter",
            "extra": "iterations: 89295\ncpu: 7833.38484797594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7856.336125677479,
            "unit": "ns/iter",
            "extra": "iterations: 89053\ncpu: 7856.171044209643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17282.734777128273,
            "unit": "ns/iter",
            "extra": "iterations: 40449\ncpu: 17282.350614353916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52251.66151163731,
            "unit": "ns/iter",
            "extra": "iterations: 13191\ncpu: 52248.45728148056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41425.28653618352,
            "unit": "ns/iter",
            "extra": "iterations: 16860\ncpu: 41424.38315539687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41765.77031045472,
            "unit": "ns/iter",
            "extra": "iterations: 16814\ncpu: 41764.88640418695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41680.079356600894,
            "unit": "ns/iter",
            "extra": "iterations: 16848\ncpu: 41677.55223171948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24753.797726950455,
            "unit": "ns/iter",
            "extra": "iterations: 28244\ncpu: 24752.52442996746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41150.545042690464,
            "unit": "ns/iter",
            "extra": "iterations: 17217\ncpu: 41147.267235871564 ns\nthreads: 1"
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
        "date": 1705953598154,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 565.292700909494,
            "unit": "ns/iter",
            "extra": "iterations: 1239675\ncpu: 565.2781575816243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5231.392910000068,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5231.331999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10128.376022947723,
            "unit": "ns/iter",
            "extra": "iterations: 82971\ncpu: 10128.117052946212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15256.11738276122,
            "unit": "ns/iter",
            "extra": "iterations: 54974\ncpu: 15255.646305526254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19988.546221089113,
            "unit": "ns/iter",
            "extra": "iterations: 41983\ncpu: 19988.180930376584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25133.53989504364,
            "unit": "ns/iter",
            "extra": "iterations: 33538\ncpu: 25132.413978173998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29860.675593039454,
            "unit": "ns/iter",
            "extra": "iterations: 28455\ncpu: 29859.54665260939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35031.31874429279,
            "unit": "ns/iter",
            "extra": "iterations: 24082\ncpu: 35030.41275641558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39279.4888847387,
            "unit": "ns/iter",
            "extra": "iterations: 21412\ncpu: 39278.3439192976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 537.9077605420337,
            "unit": "ns/iter",
            "extra": "iterations: 1303878\ncpu: 537.894342875638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.62919541428505,
            "unit": "ns/iter",
            "extra": "iterations: 1683326\ncpu: 409.62220033433766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 416.1706216141393,
            "unit": "ns/iter",
            "extra": "iterations: 1688813\ncpu: 416.1630683799805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 408.08750119964867,
            "unit": "ns/iter",
            "extra": "iterations: 1708868\ncpu: 408.06972803048626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 841.332419688632,
            "unit": "ns/iter",
            "extra": "iterations: 832198\ncpu: 841.2947399537131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1636.0223136222994,
            "unit": "ns/iter",
            "extra": "iterations: 485533\ncpu: 1635.9798407111357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8956.442527079707,
            "unit": "ns/iter",
            "extra": "iterations: 90286\ncpu: 8956.231309394587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6795.117075922469,
            "unit": "ns/iter",
            "extra": "iterations: 118752\ncpu: 6794.950821880887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7017.009097761652,
            "unit": "ns/iter",
            "extra": "iterations: 114094\ncpu: 7016.647676477281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6683.973599596647,
            "unit": "ns/iter",
            "extra": "iterations: 120983\ncpu: 6683.804336146383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34965.6931784575,
            "unit": "ns/iter",
            "extra": "iterations: 23675\ncpu: 34964.01689545927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 224951.1715686413,
            "unit": "ns/iter",
            "extra": "iterations: 3672\ncpu: 224947.46732026193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188495.33413884207,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 188488.6423550089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183706.06730131464,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 183701.48328536682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 178639.50991067983,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 178634.1755608802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98281.85754504365,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 98280.0788288287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 175942.71907270586,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 175934.2887249739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5020.397195579815,
            "unit": "ns/iter",
            "extra": "iterations: 164526\ncpu: 5020.2363152328635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23270.15139773231,
            "unit": "ns/iter",
            "extra": "iterations: 36130\ncpu: 23269.703847218345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18153.85448167606,
            "unit": "ns/iter",
            "extra": "iterations: 45898\ncpu: 18153.409734628924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17626.95973808549,
            "unit": "ns/iter",
            "extra": "iterations: 47191\ncpu: 17626.541077747854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17174.344719083423,
            "unit": "ns/iter",
            "extra": "iterations: 48306\ncpu: 17173.785865109894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49330.43806124989,
            "unit": "ns/iter",
            "extra": "iterations: 16815\ncpu: 49329.51531370826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262044.43031565924,
            "unit": "ns/iter",
            "extra": "iterations: 3358\ncpu: 262033.56164383603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200121.4393592743,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 200110.82379862675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202868.8096239192,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 202862.25181032607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199421.77605323444,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 199417.42793791564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108854.6822808076,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 108850.59472716112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195734.36049659323,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 195725.5756207681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 785446.2089552813,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 785419.9004975082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 452790.2147117515,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 452206.80914513115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1532.8790728231254,
            "unit": "ns/iter",
            "extra": "iterations: 509935\ncpu: 1532.852030160706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8245.231454349463,
            "unit": "ns/iter",
            "extra": "iterations: 103744\ncpu: 8244.96163633562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6398.51009514791,
            "unit": "ns/iter",
            "extra": "iterations: 126645\ncpu: 6398.27628410121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6519.7181504308655,
            "unit": "ns/iter",
            "extra": "iterations: 126862\ncpu: 6519.514905960762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6002.643378405252,
            "unit": "ns/iter",
            "extra": "iterations: 136893\ncpu: 6002.364620543046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33537.696934478765,
            "unit": "ns/iter",
            "extra": "iterations: 24955\ncpu: 33536.49368863934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 249328.62085577394,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 249315.84018135446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188716.2707619818,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 188712.69263698612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189612.5504725018,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 189603.67268041347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 186407.48687606578,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 186401.6135972463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96335.39271524048,
            "unit": "ns/iter",
            "extra": "iterations: 9060\ncpu: 96330.81677704141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182034.31109309304,
            "unit": "ns/iter",
            "extra": "iterations: 4931\ncpu: 182030.44007300693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.0664631314148,
            "unit": "ns/iter",
            "extra": "iterations: 3961640\ncpu: 177.0602073888595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1321.518167312393,
            "unit": "ns/iter",
            "extra": "iterations: 515156\ncpu: 1321.4439897817379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1132.4621338195307,
            "unit": "ns/iter",
            "extra": "iterations: 615919\ncpu: 1132.4058845400111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1118.9010947966863,
            "unit": "ns/iter",
            "extra": "iterations: 626509\ncpu: 1118.8603834901103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 820.898754642244,
            "unit": "ns/iter",
            "extra": "iterations: 853570\ncpu: 820.8709303279223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9426.03067102087,
            "unit": "ns/iter",
            "extra": "iterations: 73783\ncpu: 9425.443530352577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11395.673690683532,
            "unit": "ns/iter",
            "extra": "iterations: 61788\ncpu: 11395.036252994098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2643.520715345682,
            "unit": "ns/iter",
            "extra": "iterations: 264152\ncpu: 2643.363669402489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2632.188473651038,
            "unit": "ns/iter",
            "extra": "iterations: 261644\ncpu: 2632.0981944932732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2676.139971085322,
            "unit": "ns/iter",
            "extra": "iterations: 264226\ncpu: 2675.9917646257272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5047.155301148528,
            "unit": "ns/iter",
            "extra": "iterations: 136876\ncpu: 5046.876735147158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5061.7177037627325,
            "unit": "ns/iter",
            "extra": "iterations: 138801\ncpu: 5061.491631904671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1899.01099048765,
            "unit": "ns/iter",
            "extra": "iterations: 372049\ncpu: 1898.9160029996049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9854.129221421881,
            "unit": "ns/iter",
            "extra": "iterations: 70770\ncpu: 9854.011586830706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7828.059984856849,
            "unit": "ns/iter",
            "extra": "iterations: 88489\ncpu: 7827.548056820637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7786.416106275011,
            "unit": "ns/iter",
            "extra": "iterations: 90859\ncpu: 7785.960664326155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7845.321664770065,
            "unit": "ns/iter",
            "extra": "iterations: 88757\ncpu: 7844.865193731218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17380.463356912966,
            "unit": "ns/iter",
            "extra": "iterations: 39721\ncpu: 17379.68077339462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54094.708171204824,
            "unit": "ns/iter",
            "extra": "iterations: 12850\ncpu: 54094.02334630294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42795.12924505626,
            "unit": "ns/iter",
            "extra": "iterations: 16372\ncpu: 42792.76814072828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43339.634943182515,
            "unit": "ns/iter",
            "extra": "iterations: 16192\ncpu: 43337.36413043519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42762.591644203334,
            "unit": "ns/iter",
            "extra": "iterations: 16324\ncpu: 42761.05733888747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24842.58489553519,
            "unit": "ns/iter",
            "extra": "iterations: 27952\ncpu: 24841.36018889495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42409.60432600149,
            "unit": "ns/iter",
            "extra": "iterations: 16736\ncpu: 42406.769837475724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1851.3272182866592,
            "unit": "ns/iter",
            "extra": "iterations: 368708\ncpu: 1851.2288857306962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9931.659394283064,
            "unit": "ns/iter",
            "extra": "iterations: 70495\ncpu: 9931.222072487242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7848.714957403634,
            "unit": "ns/iter",
            "extra": "iterations: 89327\ncpu: 7848.305663461133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7772.913762179902,
            "unit": "ns/iter",
            "extra": "iterations: 90320\ncpu: 7772.703720106294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7796.926222686274,
            "unit": "ns/iter",
            "extra": "iterations: 90109\ncpu: 7796.597454194348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17379.136065124218,
            "unit": "ns/iter",
            "extra": "iterations: 40047\ncpu: 17378.118211102046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52318.075108112724,
            "unit": "ns/iter",
            "extra": "iterations: 13181\ncpu: 52316.06099688926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41392.95331014998,
            "unit": "ns/iter",
            "extra": "iterations: 16963\ncpu: 41390.81530389697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41927.80557873615,
            "unit": "ns/iter",
            "extra": "iterations: 16778\ncpu: 41925.670520919746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41672.64002133778,
            "unit": "ns/iter",
            "extra": "iterations: 16876\ncpu: 41671.29059018719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24741.650098287024,
            "unit": "ns/iter",
            "extra": "iterations: 28488\ncpu: 24741.37180567251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40775.58123864431,
            "unit": "ns/iter",
            "extra": "iterations: 17067\ncpu: 40773.773949727634 ns\nthreads: 1"
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
        "date": 1705955085010,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 580.8727988143855,
            "unit": "ns/iter",
            "extra": "iterations: 1189643\ncpu: 580.7844033882435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5372.542449999855,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5372.615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10519.55068690576,
            "unit": "ns/iter",
            "extra": "iterations: 79123\ncpu: 10518.988157678554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15640.128295915574,
            "unit": "ns/iter",
            "extra": "iterations: 53096\ncpu: 15639.227060418867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21001.92249738987,
            "unit": "ns/iter",
            "extra": "iterations: 40218\ncpu: 21001.48192351682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25776.12654368569,
            "unit": "ns/iter",
            "extra": "iterations: 32471\ncpu: 25774.678944288735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30678.817663094876,
            "unit": "ns/iter",
            "extra": "iterations: 27515\ncpu: 30677.350536071233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35757.54643115086,
            "unit": "ns/iter",
            "extra": "iterations: 23551\ncpu: 35756.337310517614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41123.945109543056,
            "unit": "ns/iter",
            "extra": "iterations: 21133\ncpu: 41121.94671840257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 539.8690380997494,
            "unit": "ns/iter",
            "extra": "iterations: 1298118\ncpu: 539.861399348903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.10891151673457,
            "unit": "ns/iter",
            "extra": "iterations: 1709204\ncpu: 410.0759768874873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.70066492563546,
            "unit": "ns/iter",
            "extra": "iterations: 1670262\ncpu: 417.68165712924014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 384.86294446691676,
            "unit": "ns/iter",
            "extra": "iterations: 1683843\ncpu: 384.84840926380974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 819.9297565567854,
            "unit": "ns/iter",
            "extra": "iterations: 826312\ncpu: 819.8818364007778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1645.0286862837393,
            "unit": "ns/iter",
            "extra": "iterations: 482844\ncpu: 1644.9176131421327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9351.746809532353,
            "unit": "ns/iter",
            "extra": "iterations: 87448\ncpu: 9351.342512121488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7235.64603254335,
            "unit": "ns/iter",
            "extra": "iterations: 111482\ncpu: 7235.603056995742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7212.367384958992,
            "unit": "ns/iter",
            "extra": "iterations: 112721\ncpu: 7212.040347406426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6717.787314782454,
            "unit": "ns/iter",
            "extra": "iterations: 118847\ncpu: 6717.519163294007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35195.64553960922,
            "unit": "ns/iter",
            "extra": "iterations: 23619\ncpu: 35193.96248782755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236653.24841316688,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 236649.13444893263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192148.4946332891,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 192136.42665474024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 175802.46293027874,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 175798.32303618678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 191743.2497795218,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 191731.37125220467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98936.20280987493,
            "unit": "ns/iter",
            "extra": "iterations: 8826\ncpu: 98932.8914570587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184583.20025619632,
            "unit": "ns/iter",
            "extra": "iterations: 4684\ncpu: 184571.58411614038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4935.912991794199,
            "unit": "ns/iter",
            "extra": "iterations: 164881\ncpu: 4935.602646757352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23332.60924796676,
            "unit": "ns/iter",
            "extra": "iterations: 35424\ncpu: 23331.22741644081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17785.36928558965,
            "unit": "ns/iter",
            "extra": "iterations: 46024\ncpu: 17750.2759429863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17724.216747086433,
            "unit": "ns/iter",
            "extra": "iterations: 46838\ncpu: 17724.170545283763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17404.783359960333,
            "unit": "ns/iter",
            "extra": "iterations: 47572\ncpu: 17404.399646851103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49905.03093220828,
            "unit": "ns/iter",
            "extra": "iterations: 16520\ncpu: 49905.575060532494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 266025.76860004955,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 266020.07288187154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204301.94095505297,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 204297.60056457273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204605.7571022689,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 204599.38446969743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203076.80018607818,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 203079.04163759045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110146.72950820497,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 110143.41740226974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195667.9010654633,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 195658.4474885852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789199.5207986181,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 789156.7387687165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434303.1056168518,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 434296.3994239081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1551.9601801429587,
            "unit": "ns/iter",
            "extra": "iterations: 509595\ncpu: 1551.937715244456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8395.987910684433,
            "unit": "ns/iter",
            "extra": "iterations: 97855\ncpu: 8395.813192989624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6310.212657799256,
            "unit": "ns/iter",
            "extra": "iterations: 129833\ncpu: 6309.938921537683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6419.784440728974,
            "unit": "ns/iter",
            "extra": "iterations: 128605\ncpu: 6419.853815948048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6055.665458715954,
            "unit": "ns/iter",
            "extra": "iterations: 136871\ncpu: 6055.626831103711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33478.19917527685,
            "unit": "ns/iter",
            "extra": "iterations: 24978\ncpu: 33478.00064056396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 251873.3147308811,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 251866.7705382435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184446.11515411932,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 184442.9794520545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189157.22503215072,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 189144.0205743673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182380.04972375746,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 182378.73951299413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96980.03141074098,
            "unit": "ns/iter",
            "extra": "iterations: 9137\ncpu: 96979.22731750068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177709.60637861848,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 177708.7448559668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.719199173813,
            "unit": "ns/iter",
            "extra": "iterations: 3940081\ncpu: 177.71743778871559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1296.2853456438056,
            "unit": "ns/iter",
            "extra": "iterations: 541757\ncpu: 1296.2717602172117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1153.2340355944493,
            "unit": "ns/iter",
            "extra": "iterations: 605378\ncpu: 1153.2214583285145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1080.4964314838876,
            "unit": "ns/iter",
            "extra": "iterations: 642564\ncpu: 1080.5077782135343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 820.1430780558675,
            "unit": "ns/iter",
            "extra": "iterations: 854247\ncpu: 820.1303604226895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10141.755534909984,
            "unit": "ns/iter",
            "extra": "iterations: 69965\ncpu: 10141.676552562038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12193.314169487934,
            "unit": "ns/iter",
            "extra": "iterations: 57278\ncpu: 12193.21903697757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2727.8919472274647,
            "unit": "ns/iter",
            "extra": "iterations: 256421\ncpu: 2727.8296239387664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2745.623809860956,
            "unit": "ns/iter",
            "extra": "iterations: 254382\ncpu: 2745.660070287975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2690.255474592543,
            "unit": "ns/iter",
            "extra": "iterations: 261161\ncpu: 2690.207573106223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5140.555180899817,
            "unit": "ns/iter",
            "extra": "iterations: 136125\ncpu: 5140.445179063355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5208.178612346998,
            "unit": "ns/iter",
            "extra": "iterations: 134414\ncpu: 5208.115226092473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1928.0865797396357,
            "unit": "ns/iter",
            "extra": "iterations: 361759\ncpu: 1928.1090449719384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10072.495141729774,
            "unit": "ns/iter",
            "extra": "iterations: 69675\ncpu: 10072.612845353337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8082.77863791342,
            "unit": "ns/iter",
            "extra": "iterations: 86808\ncpu: 8082.606441802621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7941.955329833772,
            "unit": "ns/iter",
            "extra": "iterations: 87620\ncpu: 7941.735905044516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7809.4547814358875,
            "unit": "ns/iter",
            "extra": "iterations: 88990\ncpu: 7808.909989886511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17607.169058126983,
            "unit": "ns/iter",
            "extra": "iterations: 39655\ncpu: 17606.158113730977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51393.69672321473,
            "unit": "ns/iter",
            "extra": "iterations: 12909\ncpu: 51393.647842590544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42430.13270891887,
            "unit": "ns/iter",
            "extra": "iterations: 16442\ncpu: 42429.8382191951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42847.28921628909,
            "unit": "ns/iter",
            "extra": "iterations: 16358\ncpu: 42846.778334759845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42691.36122088923,
            "unit": "ns/iter",
            "extra": "iterations: 16447\ncpu: 42691.913418860524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25112.177633710635,
            "unit": "ns/iter",
            "extra": "iterations: 27765\ncpu: 25111.716189447503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42466.22729471346,
            "unit": "ns/iter",
            "extra": "iterations: 16538\ncpu: 42465.72741564803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1841.092514429296,
            "unit": "ns/iter",
            "extra": "iterations: 372677\ncpu: 1840.903516986552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9994.262860243849,
            "unit": "ns/iter",
            "extra": "iterations: 70022\ncpu: 9993.676273171286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7896.710735887887,
            "unit": "ns/iter",
            "extra": "iterations: 88777\ncpu: 7896.087950707975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7915.328592925249,
            "unit": "ns/iter",
            "extra": "iterations: 88389\ncpu: 7915.079930760648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7927.151383023167,
            "unit": "ns/iter",
            "extra": "iterations: 88068\ncpu: 7926.723668074768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17488.05776777966,
            "unit": "ns/iter",
            "extra": "iterations: 40005\ncpu: 17486.22922134702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52687.816485346,
            "unit": "ns/iter",
            "extra": "iterations: 13236\ncpu: 52684.90480507776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40334.23660076292,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 40330.061934254714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41689.0311328043,
            "unit": "ns/iter",
            "extra": "iterations: 16799\ncpu: 41686.13012679353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 39331.54182100274,
            "unit": "ns/iter",
            "extra": "iterations: 16738\ncpu: 39330.85792806758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24983.61510305823,
            "unit": "ns/iter",
            "extra": "iterations: 28140\ncpu: 24983.848614072558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41701.88312218951,
            "unit": "ns/iter",
            "extra": "iterations: 17129\ncpu: 41702.28267849824 ns\nthreads: 1"
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
        "date": 1705957062577,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 577.107352647085,
            "unit": "ns/iter",
            "extra": "iterations: 1215331\ncpu: 577.0910969933294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5325.517610000361,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5325.409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10292.623182678248,
            "unit": "ns/iter",
            "extra": "iterations: 80957\ncpu: 10292.346554343663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15645.312982150737,
            "unit": "ns/iter",
            "extra": "iterations: 52888\ncpu: 15645.00831946755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20680.3153736684,
            "unit": "ns/iter",
            "extra": "iterations: 40758\ncpu: 20679.797831100645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25339.360307057774,
            "unit": "ns/iter",
            "extra": "iterations: 32958\ncpu: 25338.467139996363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29637.170826301146,
            "unit": "ns/iter",
            "extra": "iterations: 27847\ncpu: 29636.233705605628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35078.95371251391,
            "unit": "ns/iter",
            "extra": "iterations: 24175\ncpu: 35077.07549120992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39745.128062831136,
            "unit": "ns/iter",
            "extra": "iterations: 21263\ncpu: 39743.12185486529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.8173546625674,
            "unit": "ns/iter",
            "extra": "iterations: 1320187\ncpu: 530.801545538624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.45411931720946,
            "unit": "ns/iter",
            "extra": "iterations: 1728636\ncpu: 405.4469535518181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.53967901013044,
            "unit": "ns/iter",
            "extra": "iterations: 1677436\ncpu: 417.52680877243534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 400.9594861764177,
            "unit": "ns/iter",
            "extra": "iterations: 1799139\ncpu: 400.9476755270153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 839.0352734829812,
            "unit": "ns/iter",
            "extra": "iterations: 832410\ncpu: 838.9972489518385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1645.4561722051308,
            "unit": "ns/iter",
            "extra": "iterations: 483563\ncpu: 1645.3796092753178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9590.007580208765,
            "unit": "ns/iter",
            "extra": "iterations: 85090\ncpu: 9589.488776589502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6966.906584407018,
            "unit": "ns/iter",
            "extra": "iterations: 117839\ncpu: 6966.433014536799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6949.36372217767,
            "unit": "ns/iter",
            "extra": "iterations: 113353\ncpu: 6948.983264668782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6390.88124201047,
            "unit": "ns/iter",
            "extra": "iterations: 124379\ncpu: 6390.504827985413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35038.32866416324,
            "unit": "ns/iter",
            "extra": "iterations: 23416\ncpu: 35036.35548343013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239128.73201539472,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 239117.65513454098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 179811.3103674526,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 179802.88713910774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 181723.39533853254,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 181714.27302996672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182585.41159674912,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 182575.46672523624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97021.21608591109,
            "unit": "ns/iter",
            "extra": "iterations: 9126\ncpu: 97015.30791146183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 190110.83078213545,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 190099.83224994724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4937.919037305093,
            "unit": "ns/iter",
            "extra": "iterations: 165743\ncpu: 4937.699933028837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23172.248245342253,
            "unit": "ns/iter",
            "extra": "iterations: 35477\ncpu: 23170.56120867042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18108.091005612965,
            "unit": "ns/iter",
            "extra": "iterations: 46151\ncpu: 18107.544798595856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17936.100959868636,
            "unit": "ns/iter",
            "extra": "iterations: 46048\ncpu: 17935.753995830488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17592.77422143619,
            "unit": "ns/iter",
            "extra": "iterations: 47427\ncpu: 17592.21962173443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50271.25449047461,
            "unit": "ns/iter",
            "extra": "iterations: 16535\ncpu: 50269.80949501078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 247065.5934593612,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 247053.58535853503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201959.29472714657,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 201951.00161178864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 194795.63152987452,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 194791.11473880563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201303.48664824423,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 201291.80478821407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109992.72201984588,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 109986.28313026013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196104.82276204193,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 196088.88888888803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 778429.9991482554,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 778383.9011925079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 447237.1089710984,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 447213.735428281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1542.3920804534011,
            "unit": "ns/iter",
            "extra": "iterations: 518363\ncpu: 1542.3153272899501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8514.334994504274,
            "unit": "ns/iter",
            "extra": "iterations: 95515\ncpu: 8513.954876197484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6317.69357352764,
            "unit": "ns/iter",
            "extra": "iterations: 128951\ncpu: 6317.4725283247035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6619.177181989741,
            "unit": "ns/iter",
            "extra": "iterations: 123534\ncpu: 6618.942963070891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6075.8558260685795,
            "unit": "ns/iter",
            "extra": "iterations: 133984\ncpu: 6075.564992834959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33642.03989795809,
            "unit": "ns/iter",
            "extra": "iterations: 23911\ncpu: 33640.56710300716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256782.06214529555,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 256772.4177071505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192152.7231540109,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 192134.67654105893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193740.15447514597,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 193728.75138121648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 176848.0381794753,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 176836.00086281332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97392.45931700557,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 97387.92137915888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174468.3200753784,
            "unit": "ns/iter",
            "extra": "iterations: 4777\ncpu: 174457.35817458562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 178.60688515849287,
            "unit": "ns/iter",
            "extra": "iterations: 3919445\ncpu: 178.60110296228106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1331.888813477085,
            "unit": "ns/iter",
            "extra": "iterations: 527474\ncpu: 1331.8362611237694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1143.3968743427702,
            "unit": "ns/iter",
            "extra": "iterations: 613247\ncpu: 1143.336208738074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1127.7026477233119,
            "unit": "ns/iter",
            "extra": "iterations: 621364\ncpu: 1127.6128002265937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 833.7735027759768,
            "unit": "ns/iter",
            "extra": "iterations: 824743\ncpu: 833.713775079023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9682.05500930924,
            "unit": "ns/iter",
            "extra": "iterations: 72515\ncpu: 9681.42453285532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11946.093370457736,
            "unit": "ns/iter",
            "extra": "iterations: 58541\ncpu: 11945.624434157331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2666.232790214887,
            "unit": "ns/iter",
            "extra": "iterations: 261944\ncpu: 2666.177885349549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2704.1837332738764,
            "unit": "ns/iter",
            "extra": "iterations: 260372\ncpu: 2704.1202587067746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2617.0193659194665,
            "unit": "ns/iter",
            "extra": "iterations: 266086\ncpu: 2616.9336229640166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5071.443264476332,
            "unit": "ns/iter",
            "extra": "iterations: 154524\ncpu: 5071.234889078728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5135.396281384846,
            "unit": "ns/iter",
            "extra": "iterations: 136610\ncpu: 5135.294634360589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1954.9054275972032,
            "unit": "ns/iter",
            "extra": "iterations: 361099\ncpu: 1954.8647323863986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9905.34414940312,
            "unit": "ns/iter",
            "extra": "iterations: 70574\ncpu: 9904.874316320405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7928.447186663899,
            "unit": "ns/iter",
            "extra": "iterations: 87885\ncpu: 7927.886442510062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7819.346807983402,
            "unit": "ns/iter",
            "extra": "iterations: 88784\ncpu: 7818.875022526621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7877.837448374797,
            "unit": "ns/iter",
            "extra": "iterations: 88618\ncpu: 7877.558735245648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17605.48712403206,
            "unit": "ns/iter",
            "extra": "iterations: 39764\ncpu: 17605.017100895086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54165.046132448486,
            "unit": "ns/iter",
            "extra": "iterations: 12941\ncpu: 54163.20995286329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43007.727989243955,
            "unit": "ns/iter",
            "extra": "iterations: 16367\ncpu: 43006.177063603674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43368.8724059403,
            "unit": "ns/iter",
            "extra": "iterations: 16239\ncpu: 43367.17778188363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42832.51332441051,
            "unit": "ns/iter",
            "extra": "iterations: 16436\ncpu: 42830.70698466752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25425.04338512858,
            "unit": "ns/iter",
            "extra": "iterations: 27544\ncpu: 25423.74019750216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42736.10590320186,
            "unit": "ns/iter",
            "extra": "iterations: 16364\ncpu: 42733.12148618925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1888.201410409218,
            "unit": "ns/iter",
            "extra": "iterations: 371098\ncpu: 1888.0875132714257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9883.164395667385,
            "unit": "ns/iter",
            "extra": "iterations: 70160\ncpu: 9882.68244013689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7772.229482959487,
            "unit": "ns/iter",
            "extra": "iterations: 89645\ncpu: 7771.991745217262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7825.558540100198,
            "unit": "ns/iter",
            "extra": "iterations: 88828\ncpu: 7825.076552438365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7818.331308149647,
            "unit": "ns/iter",
            "extra": "iterations: 89210\ncpu: 7817.985651832686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17441.743902438506,
            "unit": "ns/iter",
            "extra": "iterations: 40262\ncpu: 17440.92692861747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52598.098927651175,
            "unit": "ns/iter",
            "extra": "iterations: 13242\ncpu: 52595.91451442386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41217.377907660804,
            "unit": "ns/iter",
            "extra": "iterations: 16938\ncpu: 41215.30286928775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41595.18014487619,
            "unit": "ns/iter",
            "extra": "iterations: 16842\ncpu: 41593.03526897044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41872.71785040159,
            "unit": "ns/iter",
            "extra": "iterations: 16952\ncpu: 41870.01533742378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25244.861085262262,
            "unit": "ns/iter",
            "extra": "iterations: 27938\ncpu: 25243.596535185086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41605.88090097094,
            "unit": "ns/iter",
            "extra": "iterations: 17137\ncpu: 41604.32981268658 ns\nthreads: 1"
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
        "date": 1705958479403,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 548.4525807098815,
            "unit": "ns/iter",
            "extra": "iterations: 1265582\ncpu: 548.441191483444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5178.956140000537,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5178.817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10152.156498064238,
            "unit": "ns/iter",
            "extra": "iterations: 82640\ncpu: 10152.122458857697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15136.211409941472,
            "unit": "ns/iter",
            "extra": "iterations: 55513\ncpu: 15136.12126889197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19844.91642875544,
            "unit": "ns/iter",
            "extra": "iterations: 42383\ncpu: 19844.553240686128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24555.291477305265,
            "unit": "ns/iter",
            "extra": "iterations: 33886\ncpu: 24554.85746325916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29886.70227597593,
            "unit": "ns/iter",
            "extra": "iterations: 28691\ncpu: 29886.061831236268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34933.84729003304,
            "unit": "ns/iter",
            "extra": "iterations: 24373\ncpu: 34933.122717761486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38490.986187320996,
            "unit": "ns/iter",
            "extra": "iterations: 21140\ncpu: 38490.17029328291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 527.5183053484841,
            "unit": "ns/iter",
            "extra": "iterations: 1323930\ncpu: 527.5027380601686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 397.56828523943625,
            "unit": "ns/iter",
            "extra": "iterations: 1762870\ncpu: 397.5652203509047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 407.90014682225603,
            "unit": "ns/iter",
            "extra": "iterations: 1710912\ncpu: 407.8938016683506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 402.6869800128851,
            "unit": "ns/iter",
            "extra": "iterations: 1736822\ncpu: 402.682197715137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 835.1257125207351,
            "unit": "ns/iter",
            "extra": "iterations: 832081\ncpu: 835.1170138484106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1645.5280151345164,
            "unit": "ns/iter",
            "extra": "iterations: 490003\ncpu: 1645.5162519413116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8939.83491316491,
            "unit": "ns/iter",
            "extra": "iterations: 90516\ncpu: 8939.568695037347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6819.6981794108415,
            "unit": "ns/iter",
            "extra": "iterations: 120840\ncpu: 6819.580436941406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7012.942624875749,
            "unit": "ns/iter",
            "extra": "iterations: 115015\ncpu: 7012.819197495982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6747.834464431919,
            "unit": "ns/iter",
            "extra": "iterations: 122300\ncpu: 6747.8192968111325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35619.53455546779,
            "unit": "ns/iter",
            "extra": "iterations: 23238\ncpu: 35618.048024787044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247086.26330610373,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 247080.6814981697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184147.53208555075,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 184140.0623885915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 174478.46415689497,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 174474.9774571685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185954.51812320118,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 185949.8554591948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99531.5631519314,
            "unit": "ns/iter",
            "extra": "iterations: 8820\ncpu: 99531.2811791383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184748.90413012457,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 184747.48555531772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4984.783488675009,
            "unit": "ns/iter",
            "extra": "iterations: 162652\ncpu: 4984.725057177298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23204.729304749384,
            "unit": "ns/iter",
            "extra": "iterations: 36059\ncpu: 23204.190354696526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18154.77385905879,
            "unit": "ns/iter",
            "extra": "iterations: 45905\ncpu: 18154.442871146897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18211.11300823731,
            "unit": "ns/iter",
            "extra": "iterations: 45156\ncpu: 18210.601027548975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17528.66803355431,
            "unit": "ns/iter",
            "extra": "iterations: 48041\ncpu: 17528.47359547058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50654.23323525758,
            "unit": "ns/iter",
            "extra": "iterations: 16314\ncpu: 50653.3652077972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 266421.01809817215,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 266418.00613496924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204902.28662121727,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 204899.29461556638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205889.25029404572,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 205886.16796048035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204703.6985724213,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 204699.25111163207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110146.5154118172,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 110145.57857503783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195488.92641468378,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 195484.76850816488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 794866.4966832199,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 794850.6633499169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441654.02055136894,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 441645.21303258225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1581.5851649676442,
            "unit": "ns/iter",
            "extra": "iterations: 498280\ncpu: 1581.5449145058917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8244.405753073599,
            "unit": "ns/iter",
            "extra": "iterations: 99738\ncpu: 8244.35721590566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6308.853545675384,
            "unit": "ns/iter",
            "extra": "iterations: 129665\ncpu: 6308.813480893061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6374.584623139204,
            "unit": "ns/iter",
            "extra": "iterations: 128960\ncpu: 6374.454094292802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 5909.64286800443,
            "unit": "ns/iter",
            "extra": "iterations: 138103\ncpu: 5909.586323251476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33165.039410827645,
            "unit": "ns/iter",
            "extra": "iterations: 25120\ncpu: 33164.70541401273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 239435.7568356863,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 239431.35120785775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 181086.26489253022,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 181082.55885363446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 180663.30883550784,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 180662.35749185688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 179061.4078257421,
            "unit": "ns/iter",
            "extra": "iterations: 4958\ncpu: 179058.08793868564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94493.81930073329,
            "unit": "ns/iter",
            "extra": "iterations: 9181\ncpu: 94492.58250735201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174720.77153038405,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 174716.45218768588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.41966080988755,
            "unit": "ns/iter",
            "extra": "iterations: 3958311\ncpu: 176.4158500936383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1335.5088499022806,
            "unit": "ns/iter",
            "extra": "iterations: 526277\ncpu: 1335.49233578514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1076.5002521393726,
            "unit": "ns/iter",
            "extra": "iterations: 650434\ncpu: 1076.4915425700428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1061.3126418428435,
            "unit": "ns/iter",
            "extra": "iterations: 661383\ncpu: 1061.2979166383213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 791.8439004133998,
            "unit": "ns/iter",
            "extra": "iterations: 876543\ncpu: 791.8277825503166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9484.881124583517,
            "unit": "ns/iter",
            "extra": "iterations: 74801\ncpu: 9484.755551396385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11398.614555519109,
            "unit": "ns/iter",
            "extra": "iterations: 61420\ncpu: 11398.565613806542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2673.2845293169094,
            "unit": "ns/iter",
            "extra": "iterations: 263298\ncpu: 2673.2648937705444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2673.165049212284,
            "unit": "ns/iter",
            "extra": "iterations: 261419\ncpu: 2673.1262838584707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2633.6543631589466,
            "unit": "ns/iter",
            "extra": "iterations: 266401\ncpu: 2633.6241230325722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5039.899058168972,
            "unit": "ns/iter",
            "extra": "iterations: 136861\ncpu: 5039.8440753757895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4854.133541626654,
            "unit": "ns/iter",
            "extra": "iterations: 133786\ncpu: 4854.093103912215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1907.1172495949352,
            "unit": "ns/iter",
            "extra": "iterations: 365997\ncpu: 1907.0773804156813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9925.83875179112,
            "unit": "ns/iter",
            "extra": "iterations: 70469\ncpu: 9925.69498644795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7964.908408902831,
            "unit": "ns/iter",
            "extra": "iterations: 88109\ncpu: 7964.86624521899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7918.276995464106,
            "unit": "ns/iter",
            "extra": "iterations: 88626\ncpu: 7918.189921693402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7961.527624782596,
            "unit": "ns/iter",
            "extra": "iterations: 87693\ncpu: 7961.492935582091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17647.682948356247,
            "unit": "ns/iter",
            "extra": "iterations: 39656\ncpu: 17647.175711115313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54192.63470036428,
            "unit": "ns/iter",
            "extra": "iterations: 12899\ncpu: 54191.75905108968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43059.77670736813,
            "unit": "ns/iter",
            "extra": "iterations: 16297\ncpu: 43058.86973062542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43444.91815809169,
            "unit": "ns/iter",
            "extra": "iterations: 16092\ncpu: 43444.60601541122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43094.056459563995,
            "unit": "ns/iter",
            "extra": "iterations: 16224\ncpu: 43093.293885601226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25219.656863448894,
            "unit": "ns/iter",
            "extra": "iterations: 27916\ncpu: 25219.50136122666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42567.13222938961,
            "unit": "ns/iter",
            "extra": "iterations: 16426\ncpu: 42565.93814684041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1882.5819943519343,
            "unit": "ns/iter",
            "extra": "iterations: 369684\ncpu: 1882.5762002142396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9859.816125346315,
            "unit": "ns/iter",
            "extra": "iterations: 70907\ncpu: 9859.664067017336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7971.691115053383,
            "unit": "ns/iter",
            "extra": "iterations: 89072\ncpu: 7971.670109574247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8008.025089564795,
            "unit": "ns/iter",
            "extra": "iterations: 87925\ncpu: 8007.874893375121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8009.93479034363,
            "unit": "ns/iter",
            "extra": "iterations: 87119\ncpu: 8009.831380066436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17910.84787054667,
            "unit": "ns/iter",
            "extra": "iterations: 39118\ncpu: 17910.75463980782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54143.530589978654,
            "unit": "ns/iter",
            "extra": "iterations: 12831\ncpu: 54142.49863611654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42809.40501770138,
            "unit": "ns/iter",
            "extra": "iterations: 16382\ncpu: 42809.199120986435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42988.71055394294,
            "unit": "ns/iter",
            "extra": "iterations: 16193\ncpu: 42988.23565738333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42613.65093250893,
            "unit": "ns/iter",
            "extra": "iterations: 16461\ncpu: 42613.49249741804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25586.45863177771,
            "unit": "ns/iter",
            "extra": "iterations: 27364\ncpu: 25586.478585002315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41627.21066698166,
            "unit": "ns/iter",
            "extra": "iterations: 16837\ncpu: 41626.619944171 ns\nthreads: 1"
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
        "date": 1705959965356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 587.1995370948482,
            "unit": "ns/iter",
            "extra": "iterations: 1209319\ncpu: 587.1908900794581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5360.771109999405,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5360.557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10363.238070933705,
            "unit": "ns/iter",
            "extra": "iterations: 80329\ncpu: 10362.768116122443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15381.043552945193,
            "unit": "ns/iter",
            "extra": "iterations: 54141\ncpu: 15380.604347906388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20626.96118530807,
            "unit": "ns/iter",
            "extra": "iterations: 40732\ncpu: 20627.086811352245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25515.886198475368,
            "unit": "ns/iter",
            "extra": "iterations: 32750\ncpu: 25514.82748091603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30565.25826663147,
            "unit": "ns/iter",
            "extra": "iterations: 27611\ncpu: 30564.289594726743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34863.912381839014,
            "unit": "ns/iter",
            "extra": "iterations: 23591\ncpu: 34863.37162477216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38736.27585411167,
            "unit": "ns/iter",
            "extra": "iterations: 21660\ncpu: 38735.3554939982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 585.3582100218711,
            "unit": "ns/iter",
            "extra": "iterations: 1189400\ncpu: 585.3500084076009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 460.27039154373955,
            "unit": "ns/iter",
            "extra": "iterations: 1501186\ncpu: 460.25029543307835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 453.5267057764187,
            "unit": "ns/iter",
            "extra": "iterations: 1516245\ncpu: 453.5221550606932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 458.74104717065484,
            "unit": "ns/iter",
            "extra": "iterations: 1528958\ncpu: 458.7293437753025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 836.6182223036355,
            "unit": "ns/iter",
            "extra": "iterations: 802983\ncpu: 836.5646595257938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1655.1201590787311,
            "unit": "ns/iter",
            "extra": "iterations: 483534\ncpu: 1655.0401833169944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9079.381642565319,
            "unit": "ns/iter",
            "extra": "iterations: 89555\ncpu: 9079.349003405718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6843.28417607793,
            "unit": "ns/iter",
            "extra": "iterations: 117948\ncpu: 6843.176654118744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7056.747262215524,
            "unit": "ns/iter",
            "extra": "iterations: 116061\ncpu: 7056.4651347136505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6864.748202352041,
            "unit": "ns/iter",
            "extra": "iterations: 118210\ncpu: 6864.382031976981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35813.487736778174,
            "unit": "ns/iter",
            "extra": "iterations: 23281\ncpu: 35812.22026545248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 224830.9474362172,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 224818.42308683365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 171133.97441764036,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 171125.33277870255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 172510.77148233083,
            "unit": "ns/iter",
            "extra": "iterations: 4783\ncpu: 172499.54003763298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182098.9706550789,
            "unit": "ns/iter",
            "extra": "iterations: 4839\ncpu: 182090.36991113873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96519.11149132684,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 96516.56915774362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 173338.81914030857,
            "unit": "ns/iter",
            "extra": "iterations: 4932\ncpu: 173331.18410381224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4944.309134462357,
            "unit": "ns/iter",
            "extra": "iterations: 163644\ncpu: 4944.082276160437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23255.22501575081,
            "unit": "ns/iter",
            "extra": "iterations: 34922\ncpu: 23254.306740736414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18110.025400016548,
            "unit": "ns/iter",
            "extra": "iterations: 45748\ncpu: 18109.37090146014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17958.16626449391,
            "unit": "ns/iter",
            "extra": "iterations: 46829\ncpu: 17957.2615259775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17230.75260040418,
            "unit": "ns/iter",
            "extra": "iterations: 47781\ncpu: 17229.760783575028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49970.51207906362,
            "unit": "ns/iter",
            "extra": "iterations: 16392\ncpu: 49967.40483162515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263353.6676673747,
            "unit": "ns/iter",
            "extra": "iterations: 3331\ncpu: 263338.39687781385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205051.58240483116,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 205041.3649025065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 195869.58914177414,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 195853.0346135607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199417.5684186191,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 199417.36513081734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109794.49572218892,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 109790.03522898772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192819.33658970115,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 192812.85523978688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 776537.6626115398,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 776505.5961070537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 431869.93639922346,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 431867.8571428582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1548.1850620654432,
            "unit": "ns/iter",
            "extra": "iterations: 515908\ncpu: 1548.153934422413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8606.364538770142,
            "unit": "ns/iter",
            "extra": "iterations: 95603\ncpu: 8606.2602637992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6346.521668770242,
            "unit": "ns/iter",
            "extra": "iterations: 129149\ncpu: 6346.20322263436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6285.880033202573,
            "unit": "ns/iter",
            "extra": "iterations: 130111\ncpu: 6285.812114271684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6190.159814535431,
            "unit": "ns/iter",
            "extra": "iterations: 131346\ncpu: 6190.001979504513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33537.42386209937,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 33536.67884661208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 249577.679838472,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 249566.36861840176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192911.77122745974,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 192911.5706115264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189496.21474571413,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 189489.8734177216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 179715.84308626485,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 179711.3567403564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97808.74537759434,
            "unit": "ns/iter",
            "extra": "iterations: 8978\ncpu: 97803.64223657783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183389.12787088053,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 183384.46099731018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 187.50515934507513,
            "unit": "ns/iter",
            "extra": "iterations: 3735164\ncpu: 187.49674713078377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1549.0502815705192,
            "unit": "ns/iter",
            "extra": "iterations: 448733\ncpu: 1549.0282640233672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1054.0671216214475,
            "unit": "ns/iter",
            "extra": "iterations: 665121\ncpu: 1054.0506163540185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1066.2414628242561,
            "unit": "ns/iter",
            "extra": "iterations: 656921\ncpu: 1066.2390150413771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 874.4872421735025,
            "unit": "ns/iter",
            "extra": "iterations: 796805\ncpu: 874.4814603322016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10056.265059032949,
            "unit": "ns/iter",
            "extra": "iterations: 69792\ncpu: 10056.128209536924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11591.31738164668,
            "unit": "ns/iter",
            "extra": "iterations: 60328\ncpu: 11591.135127967205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2670.164867993336,
            "unit": "ns/iter",
            "extra": "iterations: 261767\ncpu: 2670.0963070211337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2698.119825934384,
            "unit": "ns/iter",
            "extra": "iterations: 259902\ncpu: 2698.138529137902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2660.4159076139154,
            "unit": "ns/iter",
            "extra": "iterations: 263157\ncpu: 2660.353705202613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5194.879000162719,
            "unit": "ns/iter",
            "extra": "iterations: 135182\ncpu: 5194.79368554989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5110.407923997193,
            "unit": "ns/iter",
            "extra": "iterations: 137153\ncpu: 5110.27246943194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1906.5973734462912,
            "unit": "ns/iter",
            "extra": "iterations: 367097\ncpu: 1906.572377328063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10785.474313409022,
            "unit": "ns/iter",
            "extra": "iterations: 64995\ncpu: 10785.546580506076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8532.41892901263,
            "unit": "ns/iter",
            "extra": "iterations: 81663\ncpu: 8532.216548498112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8387.472267899706,
            "unit": "ns/iter",
            "extra": "iterations: 83315\ncpu: 8387.245994118663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8476.129078270924,
            "unit": "ns/iter",
            "extra": "iterations: 82725\ncpu: 8475.858567542986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19080.64250627789,
            "unit": "ns/iter",
            "extra": "iterations: 36644\ncpu: 19080.326929374514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55410.29872293427,
            "unit": "ns/iter",
            "extra": "iterations: 12607\ncpu: 55410.67660823353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44064.01142355135,
            "unit": "ns/iter",
            "extra": "iterations: 15932\ncpu: 44062.76675872498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44361.71968253557,
            "unit": "ns/iter",
            "extra": "iterations: 15750\ncpu: 44360.6984126989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43685.4655528457,
            "unit": "ns/iter",
            "extra": "iterations: 15981\ncpu: 43685.37012702565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26055.346104962977,
            "unit": "ns/iter",
            "extra": "iterations: 26752\ncpu: 26054.586572966404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40580.07457627793,
            "unit": "ns/iter",
            "extra": "iterations: 16225\ncpu: 40576.84437596306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1879.7579436269218,
            "unit": "ns/iter",
            "extra": "iterations: 372909\ncpu: 1879.6794928521788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10669.605023680464,
            "unit": "ns/iter",
            "extra": "iterations: 64614\ncpu: 10668.995883245203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8288.524489141604,
            "unit": "ns/iter",
            "extra": "iterations: 84221\ncpu: 8288.479120409425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8340.46200691585,
            "unit": "ns/iter",
            "extra": "iterations: 83581\ncpu: 8340.406312439516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8292.26862596566,
            "unit": "ns/iter",
            "extra": "iterations: 84452\ncpu: 8292.244115000254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18954.4900575537,
            "unit": "ns/iter",
            "extra": "iterations: 36661\ncpu: 18953.841957393408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53992.74800897708,
            "unit": "ns/iter",
            "extra": "iterations: 12933\ncpu: 53992.63898554128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42558.01757468949,
            "unit": "ns/iter",
            "extra": "iterations: 16501\ncpu: 42556.80261802302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42723.59471041985,
            "unit": "ns/iter",
            "extra": "iterations: 16334\ncpu: 42722.05216113641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42120.6639937805,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 42119.89707378376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25718.03811371961,
            "unit": "ns/iter",
            "extra": "iterations: 27313\ncpu: 25717.603339069195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42072.00053175603,
            "unit": "ns/iter",
            "extra": "iterations: 16925\ncpu: 42070.35745937943 ns\nthreads: 1"
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
        "date": 1705962036827,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 584.5922056040849,
            "unit": "ns/iter",
            "extra": "iterations: 1204840\ncpu: 584.5528036917765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5366.556829999354,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5366.224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10399.535396839927,
            "unit": "ns/iter",
            "extra": "iterations: 79541\ncpu: 10399.034460215486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15465.650707790162,
            "unit": "ns/iter",
            "extra": "iterations: 54536\ncpu: 15464.898415725393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20521.917710629088,
            "unit": "ns/iter",
            "extra": "iterations: 41269\ncpu: 20521.05696769972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25509.98536496332,
            "unit": "ns/iter",
            "extra": "iterations: 32798\ncpu: 25508.534056954693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30455.600211005654,
            "unit": "ns/iter",
            "extra": "iterations: 27487\ncpu: 30454.46574744423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35459.12132431236,
            "unit": "ns/iter",
            "extra": "iterations: 23499\ncpu: 35456.91306013022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37728.982010431384,
            "unit": "ns/iter",
            "extra": "iterations: 20901\ncpu: 37726.62552031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.8035238728138,
            "unit": "ns/iter",
            "extra": "iterations: 1318379\ncpu: 538.7796680620671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.4827402345919,
            "unit": "ns/iter",
            "extra": "iterations: 1764827\ncpu: 398.4643820612441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.4461968686951,
            "unit": "ns/iter",
            "extra": "iterations: 1715021\ncpu: 409.4294472195965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 400.8495790400286,
            "unit": "ns/iter",
            "extra": "iterations: 1744584\ncpu: 400.84415539750444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 836.9895731746409,
            "unit": "ns/iter",
            "extra": "iterations: 834674\ncpu: 836.95945962136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1699.4980107271676,
            "unit": "ns/iter",
            "extra": "iterations: 486610\ncpu: 1699.4445243624255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9740.291494168148,
            "unit": "ns/iter",
            "extra": "iterations: 87199\ncpu: 9739.748162249554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7130.174852738177,
            "unit": "ns/iter",
            "extra": "iterations: 113913\ncpu: 7129.8517289510455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7017.777059167522,
            "unit": "ns/iter",
            "extra": "iterations: 114573\ncpu: 7017.421207439786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6689.467360103563,
            "unit": "ns/iter",
            "extra": "iterations: 121232\ncpu: 6689.263560776025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35367.51482352947,
            "unit": "ns/iter",
            "extra": "iterations: 23375\ncpu: 35367.465240641766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 223644.51370419547,
            "unit": "ns/iter",
            "extra": "iterations: 3685\ncpu: 223641.2483039345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 178371.83905300204,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 178371.459600347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 181819.14291966014,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 181816.45874370748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184162.44469025277,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 184162.61061946847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97735.63523938441,
            "unit": "ns/iter",
            "extra": "iterations: 8814\ncpu: 97734.96709779909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185507.7515330954,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 185509.34658490165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5018.754078804864,
            "unit": "ns/iter",
            "extra": "iterations: 163467\ncpu: 5018.718151064122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23099.889058765348,
            "unit": "ns/iter",
            "extra": "iterations: 35974\ncpu: 23099.919386223417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17847.687709753107,
            "unit": "ns/iter",
            "extra": "iterations: 45589\ncpu: 17847.461010331506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17720.47084265997,
            "unit": "ns/iter",
            "extra": "iterations: 46009\ncpu: 17720.38948901299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17582.817534838727,
            "unit": "ns/iter",
            "extra": "iterations: 47072\ncpu: 17582.84542828004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49652.36312014287,
            "unit": "ns/iter",
            "extra": "iterations: 16730\ncpu: 49653.13807531385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262182.23288492585,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 262179.7907324348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201982.46440204748,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 201982.59655653732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 201085.00991469523,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201083.37560525734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200484.65954515757,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 200483.4826556395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107880.55248482752,
            "unit": "ns/iter",
            "extra": "iterations: 8069\ncpu: 107879.9107696121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190063.84898227226,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 190062.83650689333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 788073.8716048916,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 788052.67489712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 433036.01826257206,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 433022.2606120429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1563.8709125218822,
            "unit": "ns/iter",
            "extra": "iterations: 519330\ncpu: 1563.8511158608242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8485.62605994085,
            "unit": "ns/iter",
            "extra": "iterations: 97529\ncpu: 8485.637092557048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6164.6098760427985,
            "unit": "ns/iter",
            "extra": "iterations: 133191\ncpu: 6164.668783926823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6412.33111135577,
            "unit": "ns/iter",
            "extra": "iterations: 127214\ncpu: 6412.3366925023465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6259.752722881733,
            "unit": "ns/iter",
            "extra": "iterations: 129183\ncpu: 6259.760185163659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34381.61451825084,
            "unit": "ns/iter",
            "extra": "iterations: 24328\ncpu: 34381.92206511017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246785.45034641254,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 246782.79445727495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191906.8881254106,
            "unit": "ns/iter",
            "extra": "iterations: 4657\ncpu: 191906.5707537041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185291.60022448027,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 185292.83950617313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190053.15984405947,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 190052.60991986003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96019.01196356701,
            "unit": "ns/iter",
            "extra": "iterations: 9111\ncpu: 96018.74657008024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180930.24234216588,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 180929.77703688282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 178.57531554871247,
            "unit": "ns/iter",
            "extra": "iterations: 3921740\ncpu: 178.57377082621403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.937764415729,
            "unit": "ns/iter",
            "extra": "iterations: 510560\ncpu: 1368.9372453776207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1087.1555275478877,
            "unit": "ns/iter",
            "extra": "iterations: 636331\ncpu: 1087.153384009273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1070.91786839067,
            "unit": "ns/iter",
            "extra": "iterations: 649969\ncpu: 1070.9169206531387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 826.278627945828,
            "unit": "ns/iter",
            "extra": "iterations: 845127\ncpu: 826.2561721492689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9363.618887604454,
            "unit": "ns/iter",
            "extra": "iterations: 74398\ncpu: 9363.578321997838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11808.951959887203,
            "unit": "ns/iter",
            "extra": "iterations: 59034\ncpu: 11808.905037774854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2633.193324160205,
            "unit": "ns/iter",
            "extra": "iterations: 266723\ncpu: 2633.2194823843533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2648.3880832615614,
            "unit": "ns/iter",
            "extra": "iterations: 264804\ncpu: 2648.3648283258435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2604.7119591895125,
            "unit": "ns/iter",
            "extra": "iterations: 268948\ncpu: 2604.7139223939294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5023.910927516099,
            "unit": "ns/iter",
            "extra": "iterations: 139437\ncpu: 5023.9047024821075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5038.455820178321,
            "unit": "ns/iter",
            "extra": "iterations: 141207\ncpu: 5038.500924175169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1924.8148986669507,
            "unit": "ns/iter",
            "extra": "iterations: 365281\ncpu: 1924.8137735058651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9918.202101369538,
            "unit": "ns/iter",
            "extra": "iterations: 70811\ncpu: 9918.206210899429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7981.905391030491,
            "unit": "ns/iter",
            "extra": "iterations: 87423\ncpu: 7981.89721240393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7924.152347050036,
            "unit": "ns/iter",
            "extra": "iterations: 88771\ncpu: 7924.001081434143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7885.36024429476,
            "unit": "ns/iter",
            "extra": "iterations: 88254\ncpu: 7885.352505268972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17585.23612822188,
            "unit": "ns/iter",
            "extra": "iterations: 39775\ncpu: 17585.216844751572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54068.41732344861,
            "unit": "ns/iter",
            "extra": "iterations: 12815\ncpu: 54068.44323058971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42308.24317271578,
            "unit": "ns/iter",
            "extra": "iterations: 16478\ncpu: 42307.780070396526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42377.33907524425,
            "unit": "ns/iter",
            "extra": "iterations: 16545\ncpu: 42376.548806286075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43036.48200217967,
            "unit": "ns/iter",
            "extra": "iterations: 16502\ncpu: 43036.5046661015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25286.083297368885,
            "unit": "ns/iter",
            "extra": "iterations: 27804\ncpu: 25286.077542799696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42514.94993308347,
            "unit": "ns/iter",
            "extra": "iterations: 16438\ncpu: 42514.11363912889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1878.2721256813488,
            "unit": "ns/iter",
            "extra": "iterations: 371288\ncpu: 1878.2530003662832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9979.904943395812,
            "unit": "ns/iter",
            "extra": "iterations: 70842\ncpu: 9979.900341605233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7922.13413071752,
            "unit": "ns/iter",
            "extra": "iterations: 88205\ncpu: 7922.150671730618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7881.396184555164,
            "unit": "ns/iter",
            "extra": "iterations: 88797\ncpu: 7881.383380069188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7944.809467254608,
            "unit": "ns/iter",
            "extra": "iterations: 88410\ncpu: 7944.775477887089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17369.416563352614,
            "unit": "ns/iter",
            "extra": "iterations: 40330\ncpu: 17369.347879990128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52541.55447868277,
            "unit": "ns/iter",
            "extra": "iterations: 13207\ncpu: 52540.978269099294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41279.0595154088,
            "unit": "ns/iter",
            "extra": "iterations: 17004\ncpu: 41278.54034344892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41511.26694839206,
            "unit": "ns/iter",
            "extra": "iterations: 16801\ncpu: 41511.11243378397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41497.34959252628,
            "unit": "ns/iter",
            "extra": "iterations: 16811\ncpu: 41497.31723276423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25052.60714030811,
            "unit": "ns/iter",
            "extra": "iterations: 28038\ncpu: 25052.84613738466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41518.99482718082,
            "unit": "ns/iter",
            "extra": "iterations: 17012\ncpu: 41518.92193745573 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}