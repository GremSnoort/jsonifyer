window.BENCHMARK_DATA = {
  "lastUpdate": 1702492925621,
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
      }
    ]
  }
}