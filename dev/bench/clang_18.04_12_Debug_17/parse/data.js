window.BENCHMARK_DATA = {
  "lastUpdate": 1705954280226,
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
        "date": 1705772702004,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8271.87470135941,
            "unit": "ns/iter",
            "extra": "iterations: 84550\ncpu: 8271.658190419872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60401.79979999038,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60401.04999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111568.30385015925,
            "unit": "ns/iter",
            "extra": "iterations: 7688\ncpu: 111561.03017689906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162555.10930715932,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 162547.2720407778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 213963.81957867916,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 213953.20941759602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 264887.45930234,
            "unit": "ns/iter",
            "extra": "iterations: 3268\ncpu: 264874.66340269265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 314205.9589687842,
            "unit": "ns/iter",
            "extra": "iterations: 2754\ncpu: 314194.48075526505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 368121.97465144674,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 368103.1263202366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 417521.90254442376,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 417505.18482957233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6976.370015114227,
            "unit": "ns/iter",
            "extra": "iterations: 101231\ncpu: 6975.930298031245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5717.299336209389,
            "unit": "ns/iter",
            "extra": "iterations: 122177\ncpu: 5716.846869705424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5599.319822484922,
            "unit": "ns/iter",
            "extra": "iterations: 125060\ncpu: 5599.176395330234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5674.49214731931,
            "unit": "ns/iter",
            "extra": "iterations: 123270\ncpu: 5674.437413807085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9621.285710358557,
            "unit": "ns/iter",
            "extra": "iterations: 72759\ncpu: 9621.106667216427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30148.04055357636,
            "unit": "ns/iter",
            "extra": "iterations: 26952\ncpu: 30147.05773226474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 154164.09407098588,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 154159.68642998766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120861.40167067548,
            "unit": "ns/iter",
            "extra": "iterations: 7063\ncpu: 120858.41710321378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119206.99428570096,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 119205.85365853633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113414.73144453105,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 113412.87576483093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 371566.9534791362,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 371541.4711729625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2006703.3073592403,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2006603.679653682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1571742.8909711258,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1571663.3730834709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1591275.6969176803,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1591204.109589043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1555612.9141415001,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1555542.5925925958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 873580.2335216955,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 873531.7325800371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1523487.51067327,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1523437.1100164156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38324.26694277366,
            "unit": "ns/iter",
            "extra": "iterations: 21248\ncpu: 38322.63742469864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 198225.02844036586,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 198219.24311926536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 154177.3739193201,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 154166.75072046154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 152890.17606244897,
            "unit": "ns/iter",
            "extra": "iterations: 5765\ncpu: 152888.23937554212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 143326.4714872569,
            "unit": "ns/iter",
            "extra": "iterations: 6085\ncpu: 143322.05423171748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 325590.4983139542,
            "unit": "ns/iter",
            "extra": "iterations: 2669\ncpu: 325584.18883476953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2036773.9164834805,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2036729.4505494367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1616870.761245593,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1616825.9515571026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1591966.5454545964,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1591931.3893653578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1592853.4178083565,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1592777.2260273988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 905054.5658291224,
            "unit": "ns/iter",
            "extra": "iterations: 995\ncpu: 905028.4422110522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1560097.330016566,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1560047.9270315042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5580823.069999497,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5580734.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3242513.3693379257,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3242395.1219512234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28669.09387926715,
            "unit": "ns/iter",
            "extra": "iterations: 28526\ncpu: 28668.250017527902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145393.2088585983,
            "unit": "ns/iter",
            "extra": "iterations: 5870\ncpu: 145389.2674616703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 116824.05775780417,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 116820.4876719788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111918.3778535844,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 111914.65494620874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108645.66547497,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 108644.42032686461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 287573.7158451832,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 287564.63777704356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1998192.2618024799,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1998112.8755364805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1584189.8847457296,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1584130.508474568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1574051.4676869004,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1574021.7687074917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1553862.5926544527,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1553827.8797996636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 857647.9014870527,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 857625.8364312281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1507174.4353518966,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1507134.3698854242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3079.9474602004498,
            "unit": "ns/iter",
            "extra": "iterations: 230530\ncpu: 3079.8846137162086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20441.89481542203,
            "unit": "ns/iter",
            "extra": "iterations: 34159\ncpu: 20441.426856758004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16727.65248073395,
            "unit": "ns/iter",
            "extra": "iterations: 41520\ncpu: 16727.23988439296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16107.39422163591,
            "unit": "ns/iter",
            "extra": "iterations: 43161\ncpu: 16107.050346377526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11885.52794988246,
            "unit": "ns/iter",
            "extra": "iterations: 58265\ncpu: 11885.260447953273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 106063.91823222641,
            "unit": "ns/iter",
            "extra": "iterations: 6494\ncpu: 106063.550970126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136270.17533091502,
            "unit": "ns/iter",
            "extra": "iterations: 5213\ncpu: 136265.33665835374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33042.747744327535,
            "unit": "ns/iter",
            "extra": "iterations: 21058\ncpu: 33041.99354164687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32265.444609179027,
            "unit": "ns/iter",
            "extra": "iterations: 21583\ncpu: 32265.004864939816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32687.20623276905,
            "unit": "ns/iter",
            "extra": "iterations: 21403\ncpu: 32687.165350651816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68608.65264705611,
            "unit": "ns/iter",
            "extra": "iterations: 10200\ncpu: 68606.23529411799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61673.26999648114,
            "unit": "ns/iter",
            "extra": "iterations: 11352\ncpu: 61671.16807611009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23531.335691426633,
            "unit": "ns/iter",
            "extra": "iterations: 29685\ncpu: 23530.837123126064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119229.75683478155,
            "unit": "ns/iter",
            "extra": "iterations: 5889\ncpu: 119226.91458651738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95497.87963704855,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 95496.41046170334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95455.60983607396,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95454.01639344146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95293.70138034639,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95291.25324586593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 167500.95779990262,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 167496.3489805597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577781.6525781765,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 577766.694843618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479935.9885057309,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 479923.46179850947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 483539.6513026621,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 483529.32531729643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473200.1338315591,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 473190.9646739134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 306129.6062335062,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 306122.95873573277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 473498.41497972305,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 473487.3144399452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23338.400514983492,
            "unit": "ns/iter",
            "extra": "iterations: 29904\ncpu: 23337.951444622904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121306.24301676107,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 121304.45181564192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96676.59732479858,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 96674.57154800092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97435.17283091853,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 97431.7714126816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94496.12100994356,
            "unit": "ns/iter",
            "extra": "iterations: 7644\ncpu: 94491.79748822592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 172135.95323212637,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 172131.61116552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 584667.1592355962,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 584644.108280255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480576.2018970272,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 480560.36585366103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477248.3132282833,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 477238.2453735418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474763.6027210771,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 474756.5306122478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305368.4841269908,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 305367.41622575244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 469973.2090357129,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 469965.34052596235 ns\nthreads: 1"
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
        "date": 1705774120400,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8348.402304328865,
            "unit": "ns/iter",
            "extra": "iterations: 83929\ncpu: 8348.014393117992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59680.473000003076,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59680.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109753.38724055258,
            "unit": "ns/iter",
            "extra": "iterations: 7853\ncpu: 109748.09626894182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160039.5922746778,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 160033.9988803882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210292.42721978895,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 210289.4953905871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260288.01169414763,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 260279.85007496236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310118.86300389655,
            "unit": "ns/iter",
            "extra": "iterations: 2803\ncpu: 310111.6303960042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 361236.606338658,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 361218.09841534623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 409690.6388102348,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 409680.5004721429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6904.855954151508,
            "unit": "ns/iter",
            "extra": "iterations: 101551\ncpu: 6904.506110230338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5656.454750708914,
            "unit": "ns/iter",
            "extra": "iterations: 123129\ncpu: 5656.329540563138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5549.629959469962,
            "unit": "ns/iter",
            "extra": "iterations: 126324\ncpu: 5549.501282416641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5640.764834457661,
            "unit": "ns/iter",
            "extra": "iterations: 124440\ncpu: 5640.732079717136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9477.454308517066,
            "unit": "ns/iter",
            "extra": "iterations: 74051\ncpu: 9477.474983457341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29850.49489700539,
            "unit": "ns/iter",
            "extra": "iterations: 26749\ncpu: 29848.181240420185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149101.33983627535,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 149096.84723915716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115423.90150181409,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 115416.58774184827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117500.81867596382,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 117500.9756097559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113682.80071979956,
            "unit": "ns/iter",
            "extra": "iterations: 7502\ncpu: 113677.08611037089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 383462.1270424985,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 383455.3921568631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1961877.089361901,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1961800.2127659635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1538586.3553719975,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1538575.0413223144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1558939.817420378,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1558860.9715242886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1522808.255354076,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1522772.4876441516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 845828.9881061394,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 845821.8664226886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1495407.1304348898,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1495317.0692431573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37821.12633313677,
            "unit": "ns/iter",
            "extra": "iterations: 21847\ncpu: 37819.85169588493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 183069.95988114958,
            "unit": "ns/iter",
            "extra": "iterations: 4711\ncpu: 183053.53428146875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 148064.7068224907,
            "unit": "ns/iter",
            "extra": "iterations: 5819\ncpu: 148065.0799106377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145935.82770962126,
            "unit": "ns/iter",
            "extra": "iterations: 5868\ncpu: 145922.52897068835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141265.260490378,
            "unit": "ns/iter",
            "extra": "iterations: 6077\ncpu: 141262.0042784267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 335834.1635658749,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 335813.9147286826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2004041.4752686282,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2004005.8064516126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1589376.554216899,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1589269.363166946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1599462.408934808,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1599407.560137463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1577359.4636209952,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1577258.8832487243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 870507.5440075839,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 870493.820224718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1534159.3673805022,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1534038.3855024702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5400940.150000224,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5400792.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3389944.218181633,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3389728.0000000116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27771.998193941323,
            "unit": "ns/iter",
            "extra": "iterations: 28792\ncpu: 27771.648374548702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144042.72127301822,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 144034.3383584587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110911.0425916411,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 110908.18275684043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110862.3267518377,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110855.60717511964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106408.13517206926,
            "unit": "ns/iter",
            "extra": "iterations: 8049\ncpu: 106404.29867064265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 297734.1309153828,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 297715.68221070874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1966119.0800001062,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1966006.5263157901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1537048.0230262505,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1536965.4605263143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1551213.9734219213,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1551195.18272425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1533002.1894563693,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1532875.2883031275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 837797.6526032032,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 837789.8563734286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1486500.4465709382,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1486455.6618819772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3087.2431092438055,
            "unit": "ns/iter",
            "extra": "iterations: 226100\ncpu: 3087.2012383900833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21254.48083994481,
            "unit": "ns/iter",
            "extra": "iterations: 32907\ncpu: 21253.684626371367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16521.12372027265,
            "unit": "ns/iter",
            "extra": "iterations: 43857\ncpu: 16520.724171739992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15491.845335280505,
            "unit": "ns/iter",
            "extra": "iterations: 45201\ncpu: 15490.692683790146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12031.18731449665,
            "unit": "ns/iter",
            "extra": "iterations: 58287\ncpu: 12031.101274726714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109718.73139006276,
            "unit": "ns/iter",
            "extra": "iterations: 6381\ncpu: 109708.88575458345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134919.8701774851,
            "unit": "ns/iter",
            "extra": "iterations: 5184\ncpu: 134917.03317901219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33287.33184240788,
            "unit": "ns/iter",
            "extra": "iterations: 21016\ncpu: 33285.18271792928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33167.26135068436,
            "unit": "ns/iter",
            "extra": "iterations: 21056\ncpu: 33167.37746960499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32856.654526681705,
            "unit": "ns/iter",
            "extra": "iterations: 21307\ncpu: 32854.07143192381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68234.39418924086,
            "unit": "ns/iter",
            "extra": "iterations: 10188\ncpu: 68232.60698861405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61622.7576184642,
            "unit": "ns/iter",
            "extra": "iterations: 11354\ncpu: 61622.018671833895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24458.967285306797,
            "unit": "ns/iter",
            "extra": "iterations: 28611\ncpu: 24459.03323896408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116688.73528921131,
            "unit": "ns/iter",
            "extra": "iterations: 5999\ncpu: 116685.64760793441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96487.90559537278,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 96475.23428886376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97125.56661603614,
            "unit": "ns/iter",
            "extra": "iterations: 7243\ncpu: 97124.13364627972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 97555.76411402907,
            "unit": "ns/iter",
            "extra": "iterations: 7156\ncpu: 97555.86920067042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 166567.62933082314,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 166560.93972472913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 586376.4051796697,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 586358.6466165358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 482725.7285911904,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 482713.881215474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 479747.55037701764,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 479744.07128170255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473576.8740690669,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 473561.27285037155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305068.8739678523,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 305049.80443285377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 469523.26827633503,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469509.79208584706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23347.66821244958,
            "unit": "ns/iter",
            "extra": "iterations: 29974\ncpu: 23346.74384466555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121272.55992347686,
            "unit": "ns/iter",
            "extra": "iterations: 5749\ncpu: 121267.03774569544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98658.51750422947,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 98656.81818181761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99427.65352193028,
            "unit": "ns/iter",
            "extra": "iterations: 6999\ncpu: 99426.3894842121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 98357.17429132324,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 98354.25203480334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169632.27306002722,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 169631.57637872145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 580524.1507870347,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 580525.600662803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480786.7327823923,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 480769.97245178744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 481812.819559272,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 481783.53994490753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 476582.4894342767,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 476583.77641445026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 302311.82734745264,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 302282.69147555245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 468070.83355705976,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 468072.08053690946 ns\nthreads: 1"
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
        "date": 1705777721356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8532.33821704083,
            "unit": "ns/iter",
            "extra": "iterations: 82178\ncpu: 8531.583878897029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60582.10655855633,
            "unit": "ns/iter",
            "extra": "iterations: 13936\ncpu: 60578.257749712975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112773.87795276329,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 112765.18372703409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 165153.29393765726,
            "unit": "ns/iter",
            "extra": "iterations: 5229\ncpu: 165139.1279403327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216213.0391423598,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 216203.11642981804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 272408.9469273634,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 272391.68218497816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 318694.1054371731,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 318684.3497428363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 371254.69411262084,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 371246.2457337881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 420633.80800771783,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 420615.6295224314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7017.389131479121,
            "unit": "ns/iter",
            "extra": "iterations: 99848\ncpu: 7017.194135085332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5695.289577864104,
            "unit": "ns/iter",
            "extra": "iterations: 123017\ncpu: 5695.073851581502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5701.514162411234,
            "unit": "ns/iter",
            "extra": "iterations: 122578\ncpu: 5701.377898154644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5690.2267029532395,
            "unit": "ns/iter",
            "extra": "iterations: 123095\ncpu: 5690.211625167552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9658.759037474965,
            "unit": "ns/iter",
            "extra": "iterations: 72476\ncpu: 9658.553176223855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29454.499636366643,
            "unit": "ns/iter",
            "extra": "iterations: 27500\ncpu: 29454.032727272763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 155453.2014911877,
            "unit": "ns/iter",
            "extra": "iterations: 5499\ncpu: 155447.20858337884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121254.24049008754,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 121249.70793560351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121379.90449200051,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 121372.21198809697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 117488.22667949212,
            "unit": "ns/iter",
            "extra": "iterations: 7279\ncpu: 117487.5669734857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 361954.1026033792,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 361937.9019908116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2032657.5811403221,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2032596.929824563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1578518.9032258454,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1578498.6417657079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1596638.2068966299,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1596534.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1583406.9897261485,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1583310.2739725995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 873865.3219696839,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 873798.8636363657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1537027.2733332512,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1536929.8333333307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38205.798781064244,
            "unit": "ns/iter",
            "extra": "iterations: 21166\ncpu: 38203.66625720502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 192947.96052924954,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 192934.60417133846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 154011.070505933,
            "unit": "ns/iter",
            "extra": "iterations: 5574\ncpu: 154004.07247936874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 150425.2826731875,
            "unit": "ns/iter",
            "extra": "iterations: 5731\ncpu: 150418.9495725006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 149959.7808484348,
            "unit": "ns/iter",
            "extra": "iterations: 5681\ncpu: 149949.3751100155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318146.1877521026,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 318123.68903557095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2095361.3887641449,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2095230.786516846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1645903.9769095683,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1645833.5701598597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1644714.3918440035,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1644654.6099290831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1647058.9982301753,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646945.3097345124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 911420.297165199,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 911368.230694041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1586288.0068727504,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1586258.9347079115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5576118.380000707,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5575931.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3504009.3571429388,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3503938.7218045047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27849.38814256417,
            "unit": "ns/iter",
            "extra": "iterations: 29180\ncpu: 27848.71144619608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150475.19662922175,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 150474.17485955037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 115965.04637916882,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 115959.34363981464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115427.11681677464,
            "unit": "ns/iter",
            "extra": "iterations: 7439\ncpu: 115421.42761123832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 112689.60727032389,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 112685.19497686702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 272803.62319296406,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 272801.66561910656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2029670.9956330121,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2029568.9956331984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1589240.634782626,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1589211.1304347746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1575239.261824385,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1575223.8175675685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1590864.4020442478,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1590845.1448040963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 863493.5600000677,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863475.069767437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1537664.9735538021,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1537612.561983475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3143.1354513025003,
            "unit": "ns/iter",
            "extra": "iterations: 222855\ncpu: 3143.1177222857955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21376.458470343397,
            "unit": "ns/iter",
            "extra": "iterations: 32844\ncpu: 21375.85860431123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16217.292944714782,
            "unit": "ns/iter",
            "extra": "iterations: 43230\ncpu: 16215.88711542912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 17064.506755108352,
            "unit": "ns/iter",
            "extra": "iterations: 41006\ncpu: 17063.524850022008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12161.319486929338,
            "unit": "ns/iter",
            "extra": "iterations: 57536\ncpu: 12160.85928809788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102534.98166739607,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 102534.61370580524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 139538.63654538756,
            "unit": "ns/iter",
            "extra": "iterations: 5002\ncpu: 139533.56657337028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33456.30169442947,
            "unit": "ns/iter",
            "extra": "iterations: 20892\ncpu: 33455.8156232051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33674.48289960692,
            "unit": "ns/iter",
            "extra": "iterations: 20789\ncpu: 33673.596613593676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34347.97287600518,
            "unit": "ns/iter",
            "extra": "iterations: 20904\ncpu: 34347.789896670394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68002.06854642819,
            "unit": "ns/iter",
            "extra": "iterations: 10285\ncpu: 67999.88332523142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63330.63438717322,
            "unit": "ns/iter",
            "extra": "iterations: 11039\ncpu: 63328.94283902578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23466.067285150195,
            "unit": "ns/iter",
            "extra": "iterations: 29858\ncpu: 23465.037845803377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119784.573776116,
            "unit": "ns/iter",
            "extra": "iterations: 5842\ncpu: 119783.85826771548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97439.28426466582,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 97436.8640533784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96748.73244886295,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96744.016030957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96734.66413478645,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 96731.99834277047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170094.41802885523,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 170089.37500000262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 600132.4412017011,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 600128.9270386312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 486974.6371249582,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 486960.99092812254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 490373.631726071,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 490362.12438853865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 486217.6194443969,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 486180.83333333104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 310161.2269503461,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 310143.0851063852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 477977.94528041116,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 477933.3105335189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22881.019828739158,
            "unit": "ns/iter",
            "extra": "iterations: 30713\ncpu: 22879.744733500524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 122794.49956148348,
            "unit": "ns/iter",
            "extra": "iterations: 5701\ncpu: 122786.93211717124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98325.31122377036,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 98321.98281931956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97972.1750733443,
            "unit": "ns/iter",
            "extra": "iterations: 7157\ncpu: 97970.56029062494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96517.29550231063,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 96509.1915370606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169279.26989118496,
            "unit": "ns/iter",
            "extra": "iterations: 4135\ncpu: 169265.82829504454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 595865.8102564677,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 595829.3162393238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 481901.8501380938,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 481864.4337016572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 488679.1161651627,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 488646.7459762037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 485616.5200553349,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 485595.7814661076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 307168.29424676974,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 307162.0114185319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 476633.58646615676,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476588.2433356081 ns\nthreads: 1"
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
        "date": 1705952869940,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8538.526005552036,
            "unit": "ns/iter",
            "extra": "iterations: 81771\ncpu: 8538.467182742048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60278.04630689997,
            "unit": "ns/iter",
            "extra": "iterations: 13972\ncpu: 60276.137990266245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112932.96130051123,
            "unit": "ns/iter",
            "extra": "iterations: 7597\ncpu: 112930.94642622088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 165282.30190114622,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 165278.85931558933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 214806.74521500574,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 214803.92741735023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 266706.34432800097,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 266696.9790382245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 317281.6377924163,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 317274.89035087713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 371669.17996531836,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 371657.97918473586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 421136.15470417694,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 421114.50048496557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6841.2025500873,
            "unit": "ns/iter",
            "extra": "iterations: 102271\ncpu: 6841.1367836434465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5632.441966833564,
            "unit": "ns/iter",
            "extra": "iterations: 124403\ncpu: 5632.316744773036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5663.52560655604,
            "unit": "ns/iter",
            "extra": "iterations: 123484\ncpu: 5663.451945191282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5643.607063052313,
            "unit": "ns/iter",
            "extra": "iterations: 123516\ncpu: 5643.55872923347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9498.227032820032,
            "unit": "ns/iter",
            "extra": "iterations: 73703\ncpu: 9497.958020704715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32276.27826327906,
            "unit": "ns/iter",
            "extra": "iterations: 25289\ncpu: 32276.084463600837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152066.6229508026,
            "unit": "ns/iter",
            "extra": "iterations: 5612\ncpu: 152060.6913756235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118046.35914423119,
            "unit": "ns/iter",
            "extra": "iterations: 7245\ncpu: 118044.77570738422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116284.07277921589,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 116280.88695415594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110723.60725900481,
            "unit": "ns/iter",
            "extra": "iterations: 7687\ncpu: 110722.81774424363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 372580.24813508306,
            "unit": "ns/iter",
            "extra": "iterations: 2547\ncpu: 372565.25323910406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2017927.732025949,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2017879.7385620896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1558613.1359061068,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1558568.9597315437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1572996.047538183,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1572960.611205433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1572420.3113368184,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1572352.961082909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 891387.0251694854,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 891358.470474347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1528273.635313509,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1528220.7920792103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38734.54172732761,
            "unit": "ns/iter",
            "extra": "iterations: 21293\ncpu: 38733.593199643066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185167.967405185,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 185158.07413719653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146295.39055574525,
            "unit": "ns/iter",
            "extra": "iterations: 5866\ncpu: 146287.14626662133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146335.8470307957,
            "unit": "ns/iter",
            "extra": "iterations: 5877\ncpu: 146329.76008167435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141716.5230410928,
            "unit": "ns/iter",
            "extra": "iterations: 6011\ncpu: 141712.7100316091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326913.444193917,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 326902.8560691463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2050659.1230769318,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2050598.901098901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1597814.381443289,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1597754.6391752493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1630736.114035252,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1630700.8771929925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1603075.1122624034,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1603008.2901554508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 933660.6526526234,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 933626.0260260265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1563608.166386549,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1563554.9579831858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5707814.929999131,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5707469.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3398919.8540145485,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3398859.8540145895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28427.446165063262,
            "unit": "ns/iter",
            "extra": "iterations: 28801\ncpu: 28426.710878094284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145673.94031112498,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 145672.60737233653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112073.81950397081,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 112070.10777820997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109143.2363780944,
            "unit": "ns/iter",
            "extra": "iterations: 7543\ncpu: 109140.16969375566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105340.20579531565,
            "unit": "ns/iter",
            "extra": "iterations: 8110\ncpu: 105336.84340320622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 283936.82188212866,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 283934.74438293744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2011672.3477323663,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2011595.4643628513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1564430.830536945,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1564401.006711412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1564712.8100840172,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1564679.3277310883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1579358.33675217,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1579335.384615383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 888376.0858777666,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 888358.2061068745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1528060.0901640535,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1528050.491803285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3158.4318125560594,
            "unit": "ns/iter",
            "extra": "iterations: 222189\ncpu: 3158.3836283524356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21254.645933305914,
            "unit": "ns/iter",
            "extra": "iterations: 32926\ncpu: 21254.422037295637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15621.889423719036,
            "unit": "ns/iter",
            "extra": "iterations: 45082\ncpu: 15621.39212989659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16782.79129413377,
            "unit": "ns/iter",
            "extra": "iterations: 41719\ncpu: 16781.986624799156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12121.401449225377,
            "unit": "ns/iter",
            "extra": "iterations: 57686\ncpu: 12120.741601081705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 107713.57203972652,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 107712.75783040475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138291.6180596722,
            "unit": "ns/iter",
            "extra": "iterations: 5061\ncpu: 138290.27860106798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33296.23761293366,
            "unit": "ns/iter",
            "extra": "iterations: 21030\ncpu: 33296.38611507376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33268.638037685196,
            "unit": "ns/iter",
            "extra": "iterations: 21016\ncpu: 33267.134564141415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33148.07652626273,
            "unit": "ns/iter",
            "extra": "iterations: 21130\ncpu: 33147.411263605965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69758.91681593032,
            "unit": "ns/iter",
            "extra": "iterations: 10050\ncpu: 69758.13930348262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62671.271645792556,
            "unit": "ns/iter",
            "extra": "iterations: 11180\ncpu: 62670.277280858376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23884.929041723226,
            "unit": "ns/iter",
            "extra": "iterations: 29313\ncpu: 23884.743970252337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117552.07213555438,
            "unit": "ns/iter",
            "extra": "iterations: 5961\ncpu: 117547.05586311068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95906.20290252013,
            "unit": "ns/iter",
            "extra": "iterations: 7304\ncpu: 95905.2573932088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94847.15158890572,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 94844.17849898488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95038.7526137115,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 95038.03122878436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 164426.16999765547,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 164424.99412179523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 591428.6135020454,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 591410.2953586439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 482589.24112025386,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 482584.69945354876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 483402.2809066096,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 483391.6895604359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 479494.7789979341,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 479492.3129718514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 311681.63891358406,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 311668.52181656193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471630.3843560447,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 471610.31692514924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23092.85334477201,
            "unit": "ns/iter",
            "extra": "iterations: 30316\ncpu: 23091.601794432077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119092.30322580991,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 119089.81324278569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97483.67842701003,
            "unit": "ns/iter",
            "extra": "iterations: 7171\ncpu: 97479.47287686549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96949.39649461102,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96945.3629588732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97445.67514435467,
            "unit": "ns/iter",
            "extra": "iterations: 7274\ncpu: 97439.48309045924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168468.32723334274,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 168460.53455333464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 585910.9749582986,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 585885.1419031689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 477416.99863386236,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 477391.66666666453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 478166.390560828,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478148.2900136827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474653.18433495454,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 474639.9729912159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 311167.39051419735,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 311157.18085106194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 467797.09725011786,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 467778.2025486227 ns\nthreads: 1"
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
        "date": 1705954279121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8197.607154159508,
            "unit": "ns/iter",
            "extra": "iterations: 85321\ncpu: 8197.078093318174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59433.28719999953,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59428.01999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111088.92399173602,
            "unit": "ns/iter",
            "extra": "iterations: 7736\ncpu: 111083.55739400208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 161164.8149738489,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 161160.71695295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210990.7732911905,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 210981.82923862804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 263106.5034944021,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 263089.9118808871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 313129.9756628771,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 313113.803123865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362118.4223240061,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 362103.91503540194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 413992.0423406258,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 413980.3520456706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6878.27326379326,
            "unit": "ns/iter",
            "extra": "iterations: 102004\ncpu: 6878.136151523459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5605.967490549842,
            "unit": "ns/iter",
            "extra": "iterations: 124856\ncpu: 5605.853943743191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5637.919584839273,
            "unit": "ns/iter",
            "extra": "iterations: 124193\ncpu: 5637.6784520866795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5611.520753293908,
            "unit": "ns/iter",
            "extra": "iterations: 124679\ncpu: 5611.498327705547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9533.250759402865,
            "unit": "ns/iter",
            "extra": "iterations: 73413\ncpu: 9533.040469671581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30190.48720139671,
            "unit": "ns/iter",
            "extra": "iterations: 26917\ncpu: 30190.12148456371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149276.10169492435,
            "unit": "ns/iter",
            "extra": "iterations: 5723\ncpu: 149268.53049100123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116088.80339673965,
            "unit": "ns/iter",
            "extra": "iterations: 7360\ncpu: 116087.36413043496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116789.84151876786,
            "unit": "ns/iter",
            "extra": "iterations: 7269\ncpu: 116786.36676296564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111445.75766271388,
            "unit": "ns/iter",
            "extra": "iterations: 7667\ncpu: 111443.01552106431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 371370.9102664248,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 371361.05015674036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1962727.6361701023,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1962690.6382978754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1536992.7669421826,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1536958.6776859527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1548193.102006732,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1548106.521739133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1535351.0033277925,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1535325.7903494178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 847457.5889908294,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 847435.7798165121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1487041.0929487522,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1486976.4423076892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37021.15783072666,
            "unit": "ns/iter",
            "extra": "iterations: 22201\ncpu: 37020.017116346215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 186467.2276545485,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 186462.86883480512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145828.57154982066,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 145824.56289254807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143197.8638638757,
            "unit": "ns/iter",
            "extra": "iterations: 5994\ncpu: 143185.30196863553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140771.48808937139,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 140767.02809265692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 328586.0866439602,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 328575.3688989792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2018882.1869564692,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2018785.2173913072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1583427.7945671885,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1583354.329371817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586316.4778155924,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1586241.8088737156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1566309.7032040292,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1566259.0219224347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 884837.9230029054,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 884787.1029836365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1536559.5950414005,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1536455.5371900715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5498987.760000773,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5498386.999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3343184.0427048067,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3343067.259786477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28131.799951753583,
            "unit": "ns/iter",
            "extra": "iterations: 29018\ncpu: 28130.033082914157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144816.15917887527,
            "unit": "ns/iter",
            "extra": "iterations: 5943\ncpu: 144807.77385158956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113455.11649841328,
            "unit": "ns/iter",
            "extra": "iterations: 7528\ncpu: 113450.2125398516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110629.95131134597,
            "unit": "ns/iter",
            "extra": "iterations: 7702\ncpu: 110625.46091924165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105012.17059690926,
            "unit": "ns/iter",
            "extra": "iterations: 8142\ncpu: 105006.5954310979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 289454.36000000173,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 289440.5042016812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1975733.0912951883,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1975616.9851380035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1546406.1887416546,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1546355.9602649007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1548445.583747968,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1548406.9651741271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1539071.6363637603,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1539012.8925619798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 837647.5616562306,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 837608.2808280794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1494476.8394862537,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1494410.9149277601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3097.457060240588,
            "unit": "ns/iter",
            "extra": "iterations: 225828\ncpu: 3097.329826239455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21206.16810709723,
            "unit": "ns/iter",
            "extra": "iterations: 33092\ncpu: 21205.53608122822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16575.63088806775,
            "unit": "ns/iter",
            "extra": "iterations: 42204\ncpu: 16575.270116576678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15340.583327854729,
            "unit": "ns/iter",
            "extra": "iterations: 45645\ncpu: 15340.521415270034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12081.726350351966,
            "unit": "ns/iter",
            "extra": "iterations: 57559\ncpu: 12080.962143192135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104714.24955117218,
            "unit": "ns/iter",
            "extra": "iterations: 6684\ncpu: 104707.85457809604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136828.2298918443,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 136823.3628318574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33527.9245319132,
            "unit": "ns/iter",
            "extra": "iterations: 20883\ncpu: 33527.03155676863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 35093.30177345645,
            "unit": "ns/iter",
            "extra": "iterations: 20976\ncpu: 35091.77631578966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33360.066854494675,
            "unit": "ns/iter",
            "extra": "iterations: 20941\ncpu: 33358.55021250192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69329.12994518426,
            "unit": "ns/iter",
            "extra": "iterations: 10035\ncpu: 69326.30792227207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52476.68831071433,
            "unit": "ns/iter",
            "extra": "iterations: 13337\ncpu: 52475.07685386536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24540.550511933354,
            "unit": "ns/iter",
            "extra": "iterations: 28617\ncpu: 24539.867910682482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115086.09126789353,
            "unit": "ns/iter",
            "extra": "iterations: 6081\ncpu: 115082.70021378051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95906.17555158836,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 95899.9588872138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93720.40277777181,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 93714.06418554563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93651.68601231017,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 93648.3685477409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 163849.32700421213,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 163842.7801218939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585684.423913012,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585672.408026755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 482038.4113181585,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 482019.7377501704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 485282.3108951957,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485263.9833449004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 476887.1028610361,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 476864.71389645734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 306702.6376811355,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 306695.7839262175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470455.04309765785,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 470444.30976430967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23308.819731183754,
            "unit": "ns/iter",
            "extra": "iterations: 29983\ncpu: 23308.724944134894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119912.3853666762,
            "unit": "ns/iter",
            "extra": "iterations: 5836\ncpu: 119908.79026730666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97046.50270345285,
            "unit": "ns/iter",
            "extra": "iterations: 7213\ncpu: 97040.0942742256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97433.1417785131,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 97428.7891498882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95656.16042635239,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 95652.51434818342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170170.0350279646,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 170163.78010216542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 588479.8194794887,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 588462.2166246813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473573.8018932049,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473557.1331981138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 475495.27476252016,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475481.81818181404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 469663.02484886337,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 469641.16856951476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 309961.7221238556,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 309947.3008849567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466389.65660629625,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 466374.044265585 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}