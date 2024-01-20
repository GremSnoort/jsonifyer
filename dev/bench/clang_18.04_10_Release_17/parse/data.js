window.BENCHMARK_DATA = {
  "lastUpdate": 1705778437784,
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
      }
    ]
  }
}