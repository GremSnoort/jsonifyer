window.BENCHMARK_DATA = {
  "lastUpdate": 1702490352653,
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
      }
    ]
  }
}