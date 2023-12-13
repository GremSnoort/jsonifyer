window.BENCHMARK_DATA = {
  "lastUpdate": 1702503270739,
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
        "date": 1702492170815,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8253.119318584566,
            "unit": "ns/iter",
            "extra": "iterations: 84706\ncpu: 8252.92895426534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59716.380999998364,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59714.58 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109571.24785888846,
            "unit": "ns/iter",
            "extra": "iterations: 7823\ncpu: 109569.16783842514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159825.0982540747,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 159819.33506686476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209735.2175600513,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 209731.70021828767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260940.223225046,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 260925.15042117934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310494.05453203054,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 310473.286661754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 361070.5780731153,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 361043.9784053158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 409525.9228960512,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 409512.97602256667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6843.731856813154,
            "unit": "ns/iter",
            "extra": "iterations: 102132\ncpu: 6843.708142403935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5638.85503457477,
            "unit": "ns/iter",
            "extra": "iterations: 123933\ncpu: 5638.755617954874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5574.674529617281,
            "unit": "ns/iter",
            "extra": "iterations: 125483\ncpu: 5574.598152737822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5602.005766254255,
            "unit": "ns/iter",
            "extra": "iterations: 124691\ncpu: 5601.983302724345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9511.999402879865,
            "unit": "ns/iter",
            "extra": "iterations: 73687\ncpu: 9511.8772646464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31540.666062056538,
            "unit": "ns/iter",
            "extra": "iterations: 25912\ncpu: 31540.097252238316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146475.03269989515,
            "unit": "ns/iter",
            "extra": "iterations: 5841\ncpu: 146469.23472008214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115552.16975266841,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 115548.18218678201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117046.6150124466,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 117041.42936134881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111615.99489328002,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 111615.71297629963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 371833.3342519367,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 371821.18110236124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1994518.8365591583,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1994391.6129032306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1575962.3781940944,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1575881.9420783687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1551937.7919462456,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1551824.8322147678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1600857.209650455,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1600790.349417635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 858298.4295051456,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 858240.149393092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1511823.0049100455,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1511721.6039279911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37717.25035640489,
            "unit": "ns/iter",
            "extra": "iterations: 21745\ncpu: 37715.19889629799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185284.45151644436,
            "unit": "ns/iter",
            "extra": "iterations: 4682\ncpu: 185268.6245194362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146126.3122974515,
            "unit": "ns/iter",
            "extra": "iterations: 5863\ncpu: 146118.18181818185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147836.27726337378,
            "unit": "ns/iter",
            "extra": "iterations: 5832\ncpu: 147825.5486968454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142905.22055638878,
            "unit": "ns/iter",
            "extra": "iterations: 6003\ncpu: 142898.2008995503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 329287.9996221091,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 329268.51851851837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2034321.4104801563,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2034189.0829694374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1601952.4165231048,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1601852.3235800355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1581211.3758501825,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1581107.993197274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1619080.889081354,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1618976.7764298178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 875342.7436139255,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 875313.6234626316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1546833.8650000154,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1546762.8333333395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5437941.769999952,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5437837.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3303646.9290780276,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3303400.354609925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27475.80971252079,
            "unit": "ns/iter",
            "extra": "iterations: 29776\ncpu: 27475.35263299282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145424.6878700765,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 145420.5548976492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111732.62788587071,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 111725.3437094686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109323.17103921702,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 109315.79215486434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105483.23389579567,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 105477.7928316301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 281735.74400520296,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 281712.961762798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1991869.5256409238,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1991790.3846153845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1567714.1610736854,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1567604.3624160981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1541343.7673266358,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1541258.5808580867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1548050.7446104118,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1547961.52570481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 844812.3336363138,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 844768.8181818142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1504113.428109783,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1504012.116316634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3089.2891495782283,
            "unit": "ns/iter",
            "extra": "iterations: 227346\ncpu: 3089.1135098044138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20438.60434490662,
            "unit": "ns/iter",
            "extra": "iterations: 34247\ncpu: 20437.725932198562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15991.198356914849,
            "unit": "ns/iter",
            "extra": "iterations: 43820\ncpu: 15990.349155636679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16768.346844772266,
            "unit": "ns/iter",
            "extra": "iterations: 43420\ncpu: 16767.229387379197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12122.52196794009,
            "unit": "ns/iter",
            "extra": "iterations: 57766\ncpu: 12122.134127341338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102856.08799883527,
            "unit": "ns/iter",
            "extra": "iterations: 6841\ncpu: 102848.38473907414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130130.76677197976,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130123.39713807772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33234.73697470786,
            "unit": "ns/iter",
            "extra": "iterations: 21036\ncpu: 33232.12112568907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32832.70703749025,
            "unit": "ns/iter",
            "extra": "iterations: 21286\ncpu: 32830.91233674703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32817.83064705817,
            "unit": "ns/iter",
            "extra": "iterations: 21281\ncpu: 32815.61016869509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67357.59099671611,
            "unit": "ns/iter",
            "extra": "iterations: 10374\ncpu: 67354.05822247949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61445.29450008364,
            "unit": "ns/iter",
            "extra": "iterations: 11382\ncpu: 61441.618344754876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23825.85011056315,
            "unit": "ns/iter",
            "extra": "iterations: 29395\ncpu: 23824.126552134614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117516.06279383549,
            "unit": "ns/iter",
            "extra": "iterations: 5956\ncpu: 117512.25654801984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96472.23929159477,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 96468.20428335972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94792.9940468133,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94787.3224191584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96816.70678458766,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 96809.6863341158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 165694.7614874408,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 165686.2387494078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 584049.8011696193,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 584011.0275689246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 480638.468728515,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 480612.9209621976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 467860.4114896047,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467820.04008016764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 506949.03800001607,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506906.90000000416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302598.2469775487,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 302590.71675302647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470637.6311200798,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 470629.57746478706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23279.788151345245,
            "unit": "ns/iter",
            "extra": "iterations: 30130\ncpu: 23279.47228675767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119174.44986356662,
            "unit": "ns/iter",
            "extra": "iterations: 5864\ncpu: 119172.11800818481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96741.64735168662,
            "unit": "ns/iter",
            "extra": "iterations: 7231\ncpu: 96739.73171069124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97278.28204774184,
            "unit": "ns/iter",
            "extra": "iterations: 7247\ncpu: 97275.13453843097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94994.33324277043,
            "unit": "ns/iter",
            "extra": "iterations: 7361\ncpu: 94992.7591359872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168929.97274483755,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 168926.6039556189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590406.2662172808,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 590393.8500421292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476972.95634373865,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 476967.12141882797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 478260.1708817181,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478252.35816814454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 482620.1182943097,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 482613.8239339804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303559.44986922224,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 303549.4333042747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 469102.3181208222,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 469094.9664429576 ns\nthreads: 1"
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
        "date": 1702503269969,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8649.06923057865,
            "unit": "ns/iter",
            "extra": "iterations: 80788\ncpu: 8648.671832450365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61932.464660549995,
            "unit": "ns/iter",
            "extra": "iterations: 13625\ncpu: 61928.33761467891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 115413.79186730795,
            "unit": "ns/iter",
            "extra": "iterations: 7476\ncpu: 115407.73140716957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 167897.4227325812,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 167887.2907746205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 220121.1323865284,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 220110.09383717968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273362.2649277188,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 273340.94908862346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 325167.3242231385,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 325153.46312242583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 378850.9991281367,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 378844.8125544903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430403.55940590444,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 430383.9108910893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7090.087838317866,
            "unit": "ns/iter",
            "extra": "iterations: 98613\ncpu: 7089.915122752578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5772.563536911486,
            "unit": "ns/iter",
            "extra": "iterations: 121575\ncpu: 5772.551100143935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5708.61635671965,
            "unit": "ns/iter",
            "extra": "iterations: 122494\ncpu: 5708.282854670442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5769.639011954517,
            "unit": "ns/iter",
            "extra": "iterations: 121209\ncpu: 5769.383461624143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9913.549388590156,
            "unit": "ns/iter",
            "extra": "iterations: 70411\ncpu: 9913.176918379218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30702.582036108928,
            "unit": "ns/iter",
            "extra": "iterations: 26531\ncpu: 30700.94229392032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146481.40558235682,
            "unit": "ns/iter",
            "extra": "iterations: 5804\ncpu: 146472.69124741544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115517.48771549927,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 115510.60133025626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119613.5032131761,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 119609.7513271866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 119260.66703013453,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 119256.20825950682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 389137.11258275696,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 389117.34271523176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2064585.355555361,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2064494.8888888827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1638812.6749116585,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1638710.2473498264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1615797.4399999622,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1615723.4782608661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1616235.3414632594,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1616160.627177701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 899607.6598836589,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 899566.4728682173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1579228.3447683784,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1579138.0789022325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38063.672633914815,
            "unit": "ns/iter",
            "extra": "iterations: 21618\ncpu: 38061.6338236655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 193459.55148536782,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 193448.0232298411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 152483.26874666687,
            "unit": "ns/iter",
            "extra": "iterations: 5641\ncpu: 152476.06807303627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145834.71233810048,
            "unit": "ns/iter",
            "extra": "iterations: 5868\ncpu: 145825.98841172483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 143910.2239837967,
            "unit": "ns/iter",
            "extra": "iterations: 5929\ncpu: 143904.87434643265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 345310.61666666035,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 345304.60317460255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2106068.5837103464,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2105978.506787324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1680918.3561149552,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1680794.7841726618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1642442.585840657,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1642395.0442477833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1647823.4290780134,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1647773.2269503574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 927348.5740000069,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 927333.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1604593.5785837683,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1604557.5129533692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5662879.939999356,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5662930.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3393737.1272730324,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3393559.6363636223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28379.529272124782,
            "unit": "ns/iter",
            "extra": "iterations: 28645\ncpu: 28379.0923372317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 151319.75483986145,
            "unit": "ns/iter",
            "extra": "iterations: 5682\ncpu: 151318.32101372842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 118404.48984105611,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 118401.79682100887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112663.44943076282,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 112658.45909451951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 107234.97643814523,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 107231.01892467753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 300092.13005879225,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 300091.04116222984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2074815.3518929826,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2074732.9621380782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1639569.3894736995,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1639509.298245606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1618355.3802081954,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1618270.6597222232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1611762.1453288575,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1611770.4152249119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 888900.0326923643,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 888866.0576923067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1568617.9544687567,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1568610.2866779054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3098.130789510048,
            "unit": "ns/iter",
            "extra": "iterations: 224177\ncpu: 3097.965893022022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20588.094464838156,
            "unit": "ns/iter",
            "extra": "iterations: 34055\ncpu: 20588.02525326677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16823.621917481225,
            "unit": "ns/iter",
            "extra": "iterations: 41565\ncpu: 16822.516540358396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16943.096913208283,
            "unit": "ns/iter",
            "extra": "iterations: 41305\ncpu: 16942.251543396676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12207.097353166935,
            "unit": "ns/iter",
            "extra": "iterations: 57276\ncpu: 12206.44074306872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103726.57395043642,
            "unit": "ns/iter",
            "extra": "iterations: 6741\ncpu: 103723.12713247263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141042.8393469023,
            "unit": "ns/iter",
            "extra": "iterations: 4961\ncpu: 141043.74118121288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34372.38794754584,
            "unit": "ns/iter",
            "extra": "iterations: 20361\ncpu: 34371.489612494406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33627.33226038801,
            "unit": "ns/iter",
            "extra": "iterations: 20815\ncpu: 33627.52822483775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34185.97178027686,
            "unit": "ns/iter",
            "extra": "iterations: 20553\ncpu: 34184.99002578709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69994.32893816177,
            "unit": "ns/iter",
            "extra": "iterations: 10011\ncpu: 69993.83677954202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63814.88883827453,
            "unit": "ns/iter",
            "extra": "iterations: 10975\ncpu: 63811.77220956723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23647.493702517015,
            "unit": "ns/iter",
            "extra": "iterations: 29615\ncpu: 23647.320614553228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117502.19483133245,
            "unit": "ns/iter",
            "extra": "iterations: 5959\ncpu: 117497.2982043968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95303.86996734954,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 95300.14961915223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96149.84538207826,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96147.85596481599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96021.61066191708,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 96017.82924489657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168320.02569029428,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 168319.11164465928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 606922.8580086079,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 606892.2077922024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 492868.43582510593,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 492865.37376586976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493125.9541607834,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 493096.0507757477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 488471.95818815025,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 488445.15679443267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312183.5363676851,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 312174.65417224844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 481946.10606066714,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 481920.3856749341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23236.25363569919,
            "unit": "ns/iter",
            "extra": "iterations: 30118\ncpu: 23236.04156982499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119869.54503343551,
            "unit": "ns/iter",
            "extra": "iterations: 5829\ncpu: 119864.74523932126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96524.87401791291,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 96521.66781530052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96940.16101927456,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 96939.39393939322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95710.85794290567,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95705.9281518918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173162.75780863542,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 173164.05552801088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 602748.1094826985,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 602720.6034482705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 495370.1436659689,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495368.57749470073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 493589.57223399624,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 493576.74418604776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 488661.6313944663,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 488654.23966362793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 314504.5342651058,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 314504.8241659141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 481817.9108500905,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 481788.4588804454 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}