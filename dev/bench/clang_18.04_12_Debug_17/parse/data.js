window.BENCHMARK_DATA = {
  "lastUpdate": 1702489613807,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-12 18.04 Debug c++-17": [
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
        "date": 1702489603985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8449.904547924769,
            "unit": "ns/iter",
            "extra": "iterations: 82785\ncpu: 8449.504137222928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60087.66380000452,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60084.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111077.05005160277,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 111075.21929824562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162279.98291400628,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162273.97671798724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212087.93338231402,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212081.43521920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261822.94503172193,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261805.0739957717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312936.60216607555,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312923.7184115522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363708.3874061945,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 363688.8240200167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414569.8827716724,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 414384.14807783597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6957.940717195156,
            "unit": "ns/iter",
            "extra": "iterations: 100670\ncpu: 6957.425250819499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5686.267567854152,
            "unit": "ns/iter",
            "extra": "iterations: 122653\ncpu: 5685.861740030819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5671.181983031973,
            "unit": "ns/iter",
            "extra": "iterations: 123528\ncpu: 5671.1636228223615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5592.109759608999,
            "unit": "ns/iter",
            "extra": "iterations: 125046\ncpu: 5591.834205012553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9818.735356941941,
            "unit": "ns/iter",
            "extra": "iterations: 71160\ncpu: 9818.116919617756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29517.42389140487,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29514.993665158338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156352.18417733474,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 156338.0969544062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.8785189354,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118435.44584662335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118355.2691881407,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118347.68633970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111556.12449273454,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111550.16363398317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376427.33770884445,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 376396.34049323783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992123.2602149346,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992009.892473116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1612566.9550172281,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612451.2110726647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1567913.8699325093,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567797.128378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1554569.9932997639,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1554507.3701842532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884433.4259790126,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884374.1165234009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1524957.0904606383,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524838.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37823.183833718256,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37819.704387990714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191844.39190391416,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 191829.9822064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153206.56554173605,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 153188.7744227353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151013.6654385924,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151001.59649122765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145032.97365289778,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145022.45453000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326923.19300222845,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 326904.9285176821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053848.0484581285,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053755.5066079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1634427.5298245903,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634403.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604972.629116237,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604891.854419416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1588475.3333334357,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588430.7692307797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901483.0959301889,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901429.2635658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557003.2063758068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1556941.2751677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549748.390000105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549387.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3451882.642066451,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3451775.2767527765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27690.608761943353,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27687.998915768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148365.04116431213,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 148358.97347571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114081.52432216301,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114076.20946305103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111624.02527027934,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111621.5579002207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108297.06313645816,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108291.30600814619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288600.61958693725,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288588.1079280471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1984523.1702128274,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984409.3617021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599001.8850772053,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598951.8010291592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551379.928807947,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1551065.5629139123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1562940.0890756026,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1562853.1092436921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863915.5655813485,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863838.046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522612.8594771628,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1522582.1895424924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.579597018735,
            "unit": "ns/iter",
            "extra": "iterations: 223683\ncpu: 3119.330034021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21459.412227102697,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21458.881690054204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16791.30220334278,
            "unit": "ns/iter",
            "extra": "iterations: 41664\ncpu: 16790.504992319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16291.469723063106,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 16291.454503141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12114.586846425234,
            "unit": "ns/iter",
            "extra": "iterations: 57855\ncpu: 12113.502722323055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103898.85324231967,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 103895.38507196886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136267.56172118295,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136257.2819314643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33869.87093653523,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33868.638738390204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33063.990976520945,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33062.89034818345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32842.22567580031,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 32839.15889610995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68845.37817534474,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 68838.2623307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55693.29171984911,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55692.80472239973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.47245392062,
            "unit": "ns/iter",
            "extra": "iterations: 29732\ncpu: 23531.050719763214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122161.45778710107,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122153.53959098214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96328.2907713439,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96322.2451790627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97183.72527320539,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 97176.80177064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94996.91203263759,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94989.54452753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170614.49489053307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170609.39172749317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588710.1162790391,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 588699.5847176147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485649.53504512616,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485630.6731436466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481851.5566231928,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481814.82498284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475513.1775067982,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475479.60704606475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312413.36537604517,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 312393.5914552765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470839.80215341644,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470816.41991925176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23473.293167993634,
            "unit": "ns/iter",
            "extra": "iterations: 29918\ncpu: 23472.016846045753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118854.95469969511,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118846.84424838852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97097.92995838696,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97088.87656033304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97650.11188616374,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97640.93191964268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95925.0079593784,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95923.15081652119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173553.88410104258,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 173547.47399703172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590051.4743481561,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590034.7350714933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486571.9958246334,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486568.1280445374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476977.69651404646,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476957.9630895413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 481090.2954856204,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 481038.50889192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 315311.1999999985,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315293.00225733686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473997.4959294551,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473972.86295794277 ns\nthreads: 1"
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
        "date": 1702489603985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8449.904547924769,
            "unit": "ns/iter",
            "extra": "iterations: 82785\ncpu: 8449.504137222928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60087.66380000452,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60084.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111077.05005160277,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 111075.21929824562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162279.98291400628,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162273.97671798724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212087.93338231402,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212081.43521920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261822.94503172193,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261805.0739957717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312936.60216607555,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312923.7184115522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363708.3874061945,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 363688.8240200167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414569.8827716724,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 414384.14807783597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6957.940717195156,
            "unit": "ns/iter",
            "extra": "iterations: 100670\ncpu: 6957.425250819499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5686.267567854152,
            "unit": "ns/iter",
            "extra": "iterations: 122653\ncpu: 5685.861740030819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5671.181983031973,
            "unit": "ns/iter",
            "extra": "iterations: 123528\ncpu: 5671.1636228223615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5592.109759608999,
            "unit": "ns/iter",
            "extra": "iterations: 125046\ncpu: 5591.834205012553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9818.735356941941,
            "unit": "ns/iter",
            "extra": "iterations: 71160\ncpu: 9818.116919617756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29517.42389140487,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29514.993665158338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156352.18417733474,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 156338.0969544062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.8785189354,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118435.44584662335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118355.2691881407,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118347.68633970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111556.12449273454,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111550.16363398317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376427.33770884445,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 376396.34049323783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992123.2602149346,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992009.892473116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1612566.9550172281,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612451.2110726647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1567913.8699325093,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567797.128378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1554569.9932997639,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1554507.3701842532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884433.4259790126,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884374.1165234009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1524957.0904606383,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524838.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37823.183833718256,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37819.704387990714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191844.39190391416,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 191829.9822064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153206.56554173605,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 153188.7744227353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151013.6654385924,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151001.59649122765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145032.97365289778,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145022.45453000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326923.19300222845,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 326904.9285176821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053848.0484581285,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053755.5066079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1634427.5298245903,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634403.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604972.629116237,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604891.854419416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1588475.3333334357,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588430.7692307797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901483.0959301889,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901429.2635658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557003.2063758068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1556941.2751677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549748.390000105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549387.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3451882.642066451,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3451775.2767527765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27690.608761943353,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27687.998915768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148365.04116431213,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 148358.97347571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114081.52432216301,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114076.20946305103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111624.02527027934,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111621.5579002207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108297.06313645816,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108291.30600814619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288600.61958693725,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288588.1079280471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1984523.1702128274,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984409.3617021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599001.8850772053,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598951.8010291592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551379.928807947,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1551065.5629139123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1562940.0890756026,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1562853.1092436921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863915.5655813485,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863838.046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522612.8594771628,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1522582.1895424924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.579597018735,
            "unit": "ns/iter",
            "extra": "iterations: 223683\ncpu: 3119.330034021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21459.412227102697,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21458.881690054204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16791.30220334278,
            "unit": "ns/iter",
            "extra": "iterations: 41664\ncpu: 16790.504992319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16291.469723063106,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 16291.454503141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12114.586846425234,
            "unit": "ns/iter",
            "extra": "iterations: 57855\ncpu: 12113.502722323055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103898.85324231967,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 103895.38507196886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136267.56172118295,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136257.2819314643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33869.87093653523,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33868.638738390204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33063.990976520945,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33062.89034818345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32842.22567580031,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 32839.15889610995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68845.37817534474,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 68838.2623307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55693.29171984911,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55692.80472239973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.47245392062,
            "unit": "ns/iter",
            "extra": "iterations: 29732\ncpu: 23531.050719763214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122161.45778710107,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122153.53959098214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96328.2907713439,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96322.2451790627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97183.72527320539,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 97176.80177064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94996.91203263759,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94989.54452753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170614.49489053307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170609.39172749317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588710.1162790391,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 588699.5847176147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485649.53504512616,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485630.6731436466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481851.5566231928,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481814.82498284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475513.1775067982,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475479.60704606475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312413.36537604517,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 312393.5914552765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470839.80215341644,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470816.41991925176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23473.293167993634,
            "unit": "ns/iter",
            "extra": "iterations: 29918\ncpu: 23472.016846045753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118854.95469969511,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118846.84424838852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97097.92995838696,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97088.87656033304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97650.11188616374,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97640.93191964268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95925.0079593784,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95923.15081652119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173553.88410104258,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 173547.47399703172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590051.4743481561,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590034.7350714933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486571.9958246334,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486568.1280445374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476977.69651404646,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476957.9630895413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 481090.2954856204,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 481038.50889192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 315311.1999999985,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315293.00225733686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473997.4959294551,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473972.86295794277 ns\nthreads: 1"
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
        "date": 1702489603985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8449.904547924769,
            "unit": "ns/iter",
            "extra": "iterations: 82785\ncpu: 8449.504137222928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60087.66380000452,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60084.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111077.05005160277,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 111075.21929824562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162279.98291400628,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162273.97671798724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212087.93338231402,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212081.43521920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261822.94503172193,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261805.0739957717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312936.60216607555,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312923.7184115522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363708.3874061945,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 363688.8240200167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414569.8827716724,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 414384.14807783597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6957.940717195156,
            "unit": "ns/iter",
            "extra": "iterations: 100670\ncpu: 6957.425250819499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5686.267567854152,
            "unit": "ns/iter",
            "extra": "iterations: 122653\ncpu: 5685.861740030819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5671.181983031973,
            "unit": "ns/iter",
            "extra": "iterations: 123528\ncpu: 5671.1636228223615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5592.109759608999,
            "unit": "ns/iter",
            "extra": "iterations: 125046\ncpu: 5591.834205012553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9818.735356941941,
            "unit": "ns/iter",
            "extra": "iterations: 71160\ncpu: 9818.116919617756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29517.42389140487,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29514.993665158338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156352.18417733474,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 156338.0969544062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.8785189354,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118435.44584662335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118355.2691881407,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118347.68633970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111556.12449273454,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111550.16363398317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376427.33770884445,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 376396.34049323783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992123.2602149346,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992009.892473116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1612566.9550172281,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612451.2110726647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1567913.8699325093,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567797.128378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1554569.9932997639,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1554507.3701842532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884433.4259790126,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884374.1165234009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1524957.0904606383,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524838.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37823.183833718256,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37819.704387990714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191844.39190391416,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 191829.9822064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153206.56554173605,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 153188.7744227353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151013.6654385924,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151001.59649122765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145032.97365289778,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145022.45453000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326923.19300222845,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 326904.9285176821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053848.0484581285,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053755.5066079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1634427.5298245903,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634403.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604972.629116237,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604891.854419416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1588475.3333334357,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588430.7692307797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901483.0959301889,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901429.2635658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557003.2063758068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1556941.2751677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549748.390000105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549387.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3451882.642066451,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3451775.2767527765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27690.608761943353,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27687.998915768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148365.04116431213,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 148358.97347571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114081.52432216301,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114076.20946305103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111624.02527027934,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111621.5579002207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108297.06313645816,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108291.30600814619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288600.61958693725,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288588.1079280471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1984523.1702128274,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984409.3617021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599001.8850772053,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598951.8010291592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551379.928807947,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1551065.5629139123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1562940.0890756026,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1562853.1092436921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863915.5655813485,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863838.046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522612.8594771628,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1522582.1895424924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.579597018735,
            "unit": "ns/iter",
            "extra": "iterations: 223683\ncpu: 3119.330034021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21459.412227102697,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21458.881690054204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16791.30220334278,
            "unit": "ns/iter",
            "extra": "iterations: 41664\ncpu: 16790.504992319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16291.469723063106,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 16291.454503141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12114.586846425234,
            "unit": "ns/iter",
            "extra": "iterations: 57855\ncpu: 12113.502722323055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103898.85324231967,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 103895.38507196886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136267.56172118295,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136257.2819314643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33869.87093653523,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33868.638738390204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33063.990976520945,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33062.89034818345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32842.22567580031,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 32839.15889610995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68845.37817534474,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 68838.2623307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55693.29171984911,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55692.80472239973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.47245392062,
            "unit": "ns/iter",
            "extra": "iterations: 29732\ncpu: 23531.050719763214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122161.45778710107,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122153.53959098214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96328.2907713439,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96322.2451790627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97183.72527320539,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 97176.80177064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94996.91203263759,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94989.54452753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170614.49489053307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170609.39172749317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588710.1162790391,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 588699.5847176147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485649.53504512616,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485630.6731436466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481851.5566231928,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481814.82498284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475513.1775067982,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475479.60704606475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312413.36537604517,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 312393.5914552765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470839.80215341644,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470816.41991925176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23473.293167993634,
            "unit": "ns/iter",
            "extra": "iterations: 29918\ncpu: 23472.016846045753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118854.95469969511,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118846.84424838852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97097.92995838696,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97088.87656033304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97650.11188616374,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97640.93191964268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95925.0079593784,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95923.15081652119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173553.88410104258,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 173547.47399703172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590051.4743481561,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590034.7350714933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486571.9958246334,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486568.1280445374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476977.69651404646,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476957.9630895413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 481090.2954856204,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 481038.50889192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 315311.1999999985,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315293.00225733686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473997.4959294551,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473972.86295794277 ns\nthreads: 1"
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
        "date": 1702489603985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8449.904547924769,
            "unit": "ns/iter",
            "extra": "iterations: 82785\ncpu: 8449.504137222928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60087.66380000452,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60084.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111077.05005160277,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 111075.21929824562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162279.98291400628,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162273.97671798724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212087.93338231402,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212081.43521920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261822.94503172193,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261805.0739957717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312936.60216607555,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312923.7184115522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363708.3874061945,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 363688.8240200167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414569.8827716724,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 414384.14807783597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6957.940717195156,
            "unit": "ns/iter",
            "extra": "iterations: 100670\ncpu: 6957.425250819499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5686.267567854152,
            "unit": "ns/iter",
            "extra": "iterations: 122653\ncpu: 5685.861740030819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5671.181983031973,
            "unit": "ns/iter",
            "extra": "iterations: 123528\ncpu: 5671.1636228223615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5592.109759608999,
            "unit": "ns/iter",
            "extra": "iterations: 125046\ncpu: 5591.834205012553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9818.735356941941,
            "unit": "ns/iter",
            "extra": "iterations: 71160\ncpu: 9818.116919617756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29517.42389140487,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29514.993665158338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156352.18417733474,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 156338.0969544062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.8785189354,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118435.44584662335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118355.2691881407,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118347.68633970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111556.12449273454,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111550.16363398317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376427.33770884445,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 376396.34049323783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992123.2602149346,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992009.892473116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1612566.9550172281,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612451.2110726647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1567913.8699325093,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567797.128378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1554569.9932997639,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1554507.3701842532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884433.4259790126,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884374.1165234009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1524957.0904606383,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524838.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37823.183833718256,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37819.704387990714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191844.39190391416,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 191829.9822064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153206.56554173605,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 153188.7744227353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151013.6654385924,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151001.59649122765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145032.97365289778,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145022.45453000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326923.19300222845,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 326904.9285176821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053848.0484581285,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053755.5066079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1634427.5298245903,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634403.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604972.629116237,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604891.854419416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1588475.3333334357,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588430.7692307797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901483.0959301889,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901429.2635658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557003.2063758068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1556941.2751677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549748.390000105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549387.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3451882.642066451,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3451775.2767527765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27690.608761943353,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27687.998915768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148365.04116431213,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 148358.97347571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114081.52432216301,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114076.20946305103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111624.02527027934,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111621.5579002207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108297.06313645816,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108291.30600814619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288600.61958693725,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288588.1079280471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1984523.1702128274,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984409.3617021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599001.8850772053,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598951.8010291592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551379.928807947,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1551065.5629139123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1562940.0890756026,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1562853.1092436921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863915.5655813485,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863838.046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522612.8594771628,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1522582.1895424924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.579597018735,
            "unit": "ns/iter",
            "extra": "iterations: 223683\ncpu: 3119.330034021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21459.412227102697,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21458.881690054204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16791.30220334278,
            "unit": "ns/iter",
            "extra": "iterations: 41664\ncpu: 16790.504992319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16291.469723063106,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 16291.454503141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12114.586846425234,
            "unit": "ns/iter",
            "extra": "iterations: 57855\ncpu: 12113.502722323055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103898.85324231967,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 103895.38507196886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136267.56172118295,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136257.2819314643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33869.87093653523,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33868.638738390204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33063.990976520945,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33062.89034818345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32842.22567580031,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 32839.15889610995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68845.37817534474,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 68838.2623307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55693.29171984911,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55692.80472239973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.47245392062,
            "unit": "ns/iter",
            "extra": "iterations: 29732\ncpu: 23531.050719763214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122161.45778710107,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122153.53959098214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96328.2907713439,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96322.2451790627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97183.72527320539,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 97176.80177064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94996.91203263759,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94989.54452753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170614.49489053307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170609.39172749317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588710.1162790391,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 588699.5847176147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485649.53504512616,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485630.6731436466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481851.5566231928,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481814.82498284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475513.1775067982,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475479.60704606475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312413.36537604517,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 312393.5914552765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470839.80215341644,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470816.41991925176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23473.293167993634,
            "unit": "ns/iter",
            "extra": "iterations: 29918\ncpu: 23472.016846045753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118854.95469969511,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118846.84424838852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97097.92995838696,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97088.87656033304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97650.11188616374,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97640.93191964268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95925.0079593784,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95923.15081652119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173553.88410104258,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 173547.47399703172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590051.4743481561,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590034.7350714933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486571.9958246334,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486568.1280445374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476977.69651404646,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476957.9630895413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 481090.2954856204,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 481038.50889192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 315311.1999999985,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315293.00225733686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473997.4959294551,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473972.86295794277 ns\nthreads: 1"
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
        "date": 1702489603985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8449.904547924769,
            "unit": "ns/iter",
            "extra": "iterations: 82785\ncpu: 8449.504137222928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60087.66380000452,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60084.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111077.05005160277,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 111075.21929824562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162279.98291400628,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162273.97671798724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212087.93338231402,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212081.43521920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261822.94503172193,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261805.0739957717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312936.60216607555,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312923.7184115522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363708.3874061945,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 363688.8240200167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414569.8827716724,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 414384.14807783597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6957.940717195156,
            "unit": "ns/iter",
            "extra": "iterations: 100670\ncpu: 6957.425250819499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5686.267567854152,
            "unit": "ns/iter",
            "extra": "iterations: 122653\ncpu: 5685.861740030819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5671.181983031973,
            "unit": "ns/iter",
            "extra": "iterations: 123528\ncpu: 5671.1636228223615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5592.109759608999,
            "unit": "ns/iter",
            "extra": "iterations: 125046\ncpu: 5591.834205012553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9818.735356941941,
            "unit": "ns/iter",
            "extra": "iterations: 71160\ncpu: 9818.116919617756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29517.42389140487,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29514.993665158338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156352.18417733474,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 156338.0969544062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.8785189354,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118435.44584662335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118355.2691881407,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118347.68633970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111556.12449273454,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111550.16363398317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376427.33770884445,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 376396.34049323783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992123.2602149346,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992009.892473116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1612566.9550172281,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612451.2110726647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1567913.8699325093,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567797.128378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1554569.9932997639,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1554507.3701842532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884433.4259790126,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884374.1165234009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1524957.0904606383,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524838.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37823.183833718256,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37819.704387990714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191844.39190391416,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 191829.9822064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153206.56554173605,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 153188.7744227353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151013.6654385924,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151001.59649122765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145032.97365289778,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145022.45453000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326923.19300222845,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 326904.9285176821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053848.0484581285,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053755.5066079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1634427.5298245903,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634403.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604972.629116237,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604891.854419416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1588475.3333334357,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588430.7692307797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901483.0959301889,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901429.2635658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557003.2063758068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1556941.2751677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549748.390000105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549387.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3451882.642066451,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3451775.2767527765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27690.608761943353,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27687.998915768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148365.04116431213,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 148358.97347571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114081.52432216301,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114076.20946305103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111624.02527027934,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111621.5579002207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108297.06313645816,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108291.30600814619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288600.61958693725,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288588.1079280471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1984523.1702128274,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984409.3617021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599001.8850772053,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598951.8010291592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551379.928807947,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1551065.5629139123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1562940.0890756026,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1562853.1092436921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863915.5655813485,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863838.046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522612.8594771628,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1522582.1895424924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.579597018735,
            "unit": "ns/iter",
            "extra": "iterations: 223683\ncpu: 3119.330034021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21459.412227102697,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21458.881690054204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16791.30220334278,
            "unit": "ns/iter",
            "extra": "iterations: 41664\ncpu: 16790.504992319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16291.469723063106,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 16291.454503141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12114.586846425234,
            "unit": "ns/iter",
            "extra": "iterations: 57855\ncpu: 12113.502722323055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103898.85324231967,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 103895.38507196886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136267.56172118295,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136257.2819314643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33869.87093653523,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33868.638738390204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33063.990976520945,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33062.89034818345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32842.22567580031,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 32839.15889610995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68845.37817534474,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 68838.2623307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55693.29171984911,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55692.80472239973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.47245392062,
            "unit": "ns/iter",
            "extra": "iterations: 29732\ncpu: 23531.050719763214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122161.45778710107,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122153.53959098214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96328.2907713439,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96322.2451790627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97183.72527320539,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 97176.80177064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94996.91203263759,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94989.54452753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170614.49489053307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170609.39172749317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588710.1162790391,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 588699.5847176147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485649.53504512616,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485630.6731436466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481851.5566231928,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481814.82498284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475513.1775067982,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475479.60704606475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312413.36537604517,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 312393.5914552765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470839.80215341644,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470816.41991925176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23473.293167993634,
            "unit": "ns/iter",
            "extra": "iterations: 29918\ncpu: 23472.016846045753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118854.95469969511,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118846.84424838852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97097.92995838696,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97088.87656033304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97650.11188616374,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97640.93191964268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95925.0079593784,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95923.15081652119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173553.88410104258,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 173547.47399703172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590051.4743481561,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590034.7350714933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486571.9958246334,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486568.1280445374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476977.69651404646,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476957.9630895413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 481090.2954856204,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 481038.50889192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 315311.1999999985,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315293.00225733686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473997.4959294551,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473972.86295794277 ns\nthreads: 1"
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
        "date": 1702489603985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8449.904547924769,
            "unit": "ns/iter",
            "extra": "iterations: 82785\ncpu: 8449.504137222928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60087.66380000452,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60084.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111077.05005160277,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 111075.21929824562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162279.98291400628,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162273.97671798724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212087.93338231402,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212081.43521920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261822.94503172193,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261805.0739957717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312936.60216607555,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312923.7184115522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363708.3874061945,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 363688.8240200167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414569.8827716724,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 414384.14807783597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6957.940717195156,
            "unit": "ns/iter",
            "extra": "iterations: 100670\ncpu: 6957.425250819499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5686.267567854152,
            "unit": "ns/iter",
            "extra": "iterations: 122653\ncpu: 5685.861740030819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5671.181983031973,
            "unit": "ns/iter",
            "extra": "iterations: 123528\ncpu: 5671.1636228223615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5592.109759608999,
            "unit": "ns/iter",
            "extra": "iterations: 125046\ncpu: 5591.834205012553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9818.735356941941,
            "unit": "ns/iter",
            "extra": "iterations: 71160\ncpu: 9818.116919617756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29517.42389140487,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29514.993665158338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156352.18417733474,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 156338.0969544062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.8785189354,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118435.44584662335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118355.2691881407,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118347.68633970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111556.12449273454,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111550.16363398317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376427.33770884445,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 376396.34049323783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992123.2602149346,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992009.892473116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1612566.9550172281,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612451.2110726647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1567913.8699325093,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567797.128378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1554569.9932997639,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1554507.3701842532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884433.4259790126,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884374.1165234009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1524957.0904606383,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524838.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37823.183833718256,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37819.704387990714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191844.39190391416,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 191829.9822064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153206.56554173605,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 153188.7744227353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151013.6654385924,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151001.59649122765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145032.97365289778,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145022.45453000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326923.19300222845,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 326904.9285176821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053848.0484581285,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053755.5066079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1634427.5298245903,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634403.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604972.629116237,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604891.854419416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1588475.3333334357,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588430.7692307797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901483.0959301889,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901429.2635658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557003.2063758068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1556941.2751677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549748.390000105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549387.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3451882.642066451,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3451775.2767527765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27690.608761943353,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27687.998915768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148365.04116431213,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 148358.97347571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114081.52432216301,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114076.20946305103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111624.02527027934,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111621.5579002207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108297.06313645816,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108291.30600814619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288600.61958693725,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288588.1079280471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1984523.1702128274,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984409.3617021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599001.8850772053,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598951.8010291592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551379.928807947,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1551065.5629139123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1562940.0890756026,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1562853.1092436921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863915.5655813485,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863838.046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522612.8594771628,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1522582.1895424924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.579597018735,
            "unit": "ns/iter",
            "extra": "iterations: 223683\ncpu: 3119.330034021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21459.412227102697,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21458.881690054204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16791.30220334278,
            "unit": "ns/iter",
            "extra": "iterations: 41664\ncpu: 16790.504992319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16291.469723063106,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 16291.454503141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12114.586846425234,
            "unit": "ns/iter",
            "extra": "iterations: 57855\ncpu: 12113.502722323055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103898.85324231967,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 103895.38507196886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136267.56172118295,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136257.2819314643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33869.87093653523,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33868.638738390204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33063.990976520945,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33062.89034818345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32842.22567580031,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 32839.15889610995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68845.37817534474,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 68838.2623307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55693.29171984911,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55692.80472239973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.47245392062,
            "unit": "ns/iter",
            "extra": "iterations: 29732\ncpu: 23531.050719763214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122161.45778710107,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122153.53959098214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96328.2907713439,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96322.2451790627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97183.72527320539,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 97176.80177064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94996.91203263759,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94989.54452753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170614.49489053307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170609.39172749317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588710.1162790391,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 588699.5847176147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485649.53504512616,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485630.6731436466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481851.5566231928,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481814.82498284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475513.1775067982,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475479.60704606475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312413.36537604517,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 312393.5914552765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470839.80215341644,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470816.41991925176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23473.293167993634,
            "unit": "ns/iter",
            "extra": "iterations: 29918\ncpu: 23472.016846045753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118854.95469969511,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118846.84424838852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97097.92995838696,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97088.87656033304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97650.11188616374,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97640.93191964268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95925.0079593784,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95923.15081652119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173553.88410104258,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 173547.47399703172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590051.4743481561,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590034.7350714933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486571.9958246334,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486568.1280445374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476977.69651404646,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476957.9630895413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 481090.2954856204,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 481038.50889192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 315311.1999999985,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315293.00225733686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473997.4959294551,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473972.86295794277 ns\nthreads: 1"
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
        "date": 1702489603985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8449.904547924769,
            "unit": "ns/iter",
            "extra": "iterations: 82785\ncpu: 8449.504137222928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60087.66380000452,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60084.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111077.05005160277,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 111075.21929824562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162279.98291400628,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162273.97671798724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212087.93338231402,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212081.43521920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261822.94503172193,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261805.0739957717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312936.60216607555,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312923.7184115522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363708.3874061945,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 363688.8240200167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414569.8827716724,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 414384.14807783597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6957.940717195156,
            "unit": "ns/iter",
            "extra": "iterations: 100670\ncpu: 6957.425250819499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5686.267567854152,
            "unit": "ns/iter",
            "extra": "iterations: 122653\ncpu: 5685.861740030819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5671.181983031973,
            "unit": "ns/iter",
            "extra": "iterations: 123528\ncpu: 5671.1636228223615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5592.109759608999,
            "unit": "ns/iter",
            "extra": "iterations: 125046\ncpu: 5591.834205012553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9818.735356941941,
            "unit": "ns/iter",
            "extra": "iterations: 71160\ncpu: 9818.116919617756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29517.42389140487,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29514.993665158338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156352.18417733474,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 156338.0969544062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.8785189354,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118435.44584662335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118355.2691881407,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118347.68633970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111556.12449273454,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111550.16363398317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376427.33770884445,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 376396.34049323783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992123.2602149346,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992009.892473116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1612566.9550172281,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612451.2110726647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1567913.8699325093,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567797.128378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1554569.9932997639,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1554507.3701842532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884433.4259790126,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884374.1165234009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1524957.0904606383,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524838.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37823.183833718256,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37819.704387990714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191844.39190391416,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 191829.9822064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153206.56554173605,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 153188.7744227353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151013.6654385924,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151001.59649122765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145032.97365289778,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145022.45453000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326923.19300222845,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 326904.9285176821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053848.0484581285,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053755.5066079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1634427.5298245903,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634403.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604972.629116237,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604891.854419416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1588475.3333334357,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588430.7692307797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901483.0959301889,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901429.2635658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557003.2063758068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1556941.2751677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549748.390000105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549387.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3451882.642066451,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3451775.2767527765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27690.608761943353,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27687.998915768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148365.04116431213,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 148358.97347571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114081.52432216301,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114076.20946305103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111624.02527027934,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111621.5579002207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108297.06313645816,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108291.30600814619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288600.61958693725,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288588.1079280471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1984523.1702128274,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984409.3617021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599001.8850772053,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598951.8010291592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551379.928807947,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1551065.5629139123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1562940.0890756026,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1562853.1092436921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863915.5655813485,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863838.046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522612.8594771628,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1522582.1895424924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.579597018735,
            "unit": "ns/iter",
            "extra": "iterations: 223683\ncpu: 3119.330034021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21459.412227102697,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21458.881690054204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16791.30220334278,
            "unit": "ns/iter",
            "extra": "iterations: 41664\ncpu: 16790.504992319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16291.469723063106,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 16291.454503141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12114.586846425234,
            "unit": "ns/iter",
            "extra": "iterations: 57855\ncpu: 12113.502722323055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103898.85324231967,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 103895.38507196886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136267.56172118295,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136257.2819314643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33869.87093653523,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33868.638738390204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33063.990976520945,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33062.89034818345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32842.22567580031,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 32839.15889610995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68845.37817534474,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 68838.2623307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55693.29171984911,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55692.80472239973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.47245392062,
            "unit": "ns/iter",
            "extra": "iterations: 29732\ncpu: 23531.050719763214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122161.45778710107,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122153.53959098214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96328.2907713439,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96322.2451790627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97183.72527320539,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 97176.80177064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94996.91203263759,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94989.54452753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170614.49489053307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170609.39172749317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588710.1162790391,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 588699.5847176147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485649.53504512616,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485630.6731436466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481851.5566231928,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481814.82498284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475513.1775067982,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475479.60704606475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312413.36537604517,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 312393.5914552765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470839.80215341644,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470816.41991925176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23473.293167993634,
            "unit": "ns/iter",
            "extra": "iterations: 29918\ncpu: 23472.016846045753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118854.95469969511,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118846.84424838852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97097.92995838696,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97088.87656033304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97650.11188616374,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97640.93191964268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95925.0079593784,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95923.15081652119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173553.88410104258,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 173547.47399703172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590051.4743481561,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590034.7350714933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486571.9958246334,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486568.1280445374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476977.69651404646,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476957.9630895413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 481090.2954856204,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 481038.50889192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 315311.1999999985,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315293.00225733686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473997.4959294551,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473972.86295794277 ns\nthreads: 1"
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
        "date": 1702489603985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8449.904547924769,
            "unit": "ns/iter",
            "extra": "iterations: 82785\ncpu: 8449.504137222928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60087.66380000452,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60084.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111077.05005160277,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 111075.21929824562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162279.98291400628,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162273.97671798724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212087.93338231402,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212081.43521920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261822.94503172193,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 261805.0739957717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312936.60216607555,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 312923.7184115522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 363708.3874061945,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 363688.8240200167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414569.8827716724,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 414384.14807783597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6957.940717195156,
            "unit": "ns/iter",
            "extra": "iterations: 100670\ncpu: 6957.425250819499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5686.267567854152,
            "unit": "ns/iter",
            "extra": "iterations: 122653\ncpu: 5685.861740030819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5671.181983031973,
            "unit": "ns/iter",
            "extra": "iterations: 123528\ncpu: 5671.1636228223615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5592.109759608999,
            "unit": "ns/iter",
            "extra": "iterations: 125046\ncpu: 5591.834205012553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9818.735356941941,
            "unit": "ns/iter",
            "extra": "iterations: 71160\ncpu: 9818.116919617756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29517.42389140487,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29514.993665158338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156352.18417733474,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 156338.0969544062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118440.8785189354,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118435.44584662335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118355.2691881407,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118347.68633970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111556.12449273454,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111550.16363398317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376427.33770884445,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 376396.34049323783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1992123.2602149346,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1992009.892473116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1612566.9550172281,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612451.2110726647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1567913.8699325093,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1567797.128378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1554569.9932997639,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1554507.3701842532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 884433.4259790126,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 884374.1165234009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1524957.0904606383,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1524838.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37823.183833718256,
            "unit": "ns/iter",
            "extra": "iterations: 21650\ncpu: 37819.704387990714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 191844.39190391416,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 191829.9822064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153206.56554173605,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 153188.7744227353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151013.6654385924,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151001.59649122765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145032.97365289778,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 145022.45453000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326923.19300222845,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 326904.9285176821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053848.0484581285,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053755.5066079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1634427.5298245903,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634403.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604972.629116237,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604891.854419416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1588475.3333334357,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588430.7692307797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901483.0959301889,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 901429.2635658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1557003.2063758068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1556941.2751677851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549748.390000105,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549387.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3451882.642066451,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3451775.2767527765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27690.608761943353,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27687.998915768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148365.04116431213,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 148358.97347571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114081.52432216301,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114076.20946305103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111624.02527027934,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111621.5579002207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108297.06313645816,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108291.30600814619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288600.61958693725,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288588.1079280471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1984523.1702128274,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984409.3617021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599001.8850772053,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598951.8010291592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551379.928807947,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1551065.5629139123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1562940.0890756026,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1562853.1092436921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863915.5655813485,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863838.046511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1522612.8594771628,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1522582.1895424924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3119.579597018735,
            "unit": "ns/iter",
            "extra": "iterations: 223683\ncpu: 3119.330034021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21459.412227102697,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21458.881690054204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16791.30220334278,
            "unit": "ns/iter",
            "extra": "iterations: 41664\ncpu: 16790.504992319522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16291.469723063106,
            "unit": "ns/iter",
            "extra": "iterations: 42970\ncpu: 16291.454503141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12114.586846425234,
            "unit": "ns/iter",
            "extra": "iterations: 57855\ncpu: 12113.502722323055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103898.85324231967,
            "unit": "ns/iter",
            "extra": "iterations: 6739\ncpu: 103895.38507196886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136267.56172118295,
            "unit": "ns/iter",
            "extra": "iterations: 5136\ncpu: 136257.2819314643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33869.87093653523,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33868.638738390204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33063.990976520945,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33062.89034818345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32842.22567580031,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 32839.15889610995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68845.37817534474,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 68838.2623307304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55693.29171984911,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55692.80472239973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.47245392062,
            "unit": "ns/iter",
            "extra": "iterations: 29732\ncpu: 23531.050719763214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122161.45778710107,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 122153.53959098214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96328.2907713439,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96322.2451790627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97183.72527320539,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 97176.80177064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94996.91203263759,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94989.54452753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170614.49489053307,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170609.39172749317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 588710.1162790391,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 588699.5847176147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 485649.53504512616,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485630.6731436466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481851.5566231928,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481814.82498284464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475513.1775067982,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475479.60704606475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312413.36537604517,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 312393.5914552765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470839.80215341644,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470816.41991925176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23473.293167993634,
            "unit": "ns/iter",
            "extra": "iterations: 29918\ncpu: 23472.016846045753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118854.95469969511,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118846.84424838852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97097.92995838696,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 97088.87656033304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97650.11188616374,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97640.93191964268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95925.0079593784,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95923.15081652119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173553.88410104258,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 173547.47399703172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590051.4743481561,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590034.7350714933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486571.9958246334,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486568.1280445374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476977.69651404646,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476957.9630895413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 481090.2954856204,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 481038.50889192463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 315311.1999999985,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 315293.00225733686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473997.4959294551,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473972.86295794277 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}