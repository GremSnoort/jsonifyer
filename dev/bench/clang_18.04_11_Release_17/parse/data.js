window.BENCHMARK_DATA = {
  "lastUpdate": 1705962048665,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-11 18.04 Release c++-17": [
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
        "date": 1702490298121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.5119516171399,
            "unit": "ns/iter",
            "extra": "iterations: 1256148\ncpu: 557.4906778500623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5162.06708000027,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9981.114832478408,
            "unit": "ns/iter",
            "extra": "iterations: 82825\ncpu: 9980.893450045278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14962.885398236756,
            "unit": "ns/iter",
            "extra": "iterations: 55959\ncpu: 14962.68875426652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19426.734754886606,
            "unit": "ns/iter",
            "extra": "iterations: 42817\ncpu: 19426.547866501627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24498.565794076265,
            "unit": "ns/iter",
            "extra": "iterations: 34304\ncpu: 24498.207206156694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29590.87146230387,
            "unit": "ns/iter",
            "extra": "iterations: 28373\ncpu: 29590.293588975423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34043.808994687955,
            "unit": "ns/iter",
            "extra": "iterations: 24659\ncpu: 34043.099882395865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38195.177320235234,
            "unit": "ns/iter",
            "extra": "iterations: 22293\ncpu: 38192.95294487059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 536.758010528254,
            "unit": "ns/iter",
            "extra": "iterations: 1303160\ncpu: 536.7460634150827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.36978977401577,
            "unit": "ns/iter",
            "extra": "iterations: 1725429\ncpu: 407.3522584818032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.01299166837276,
            "unit": "ns/iter",
            "extra": "iterations: 1701706\ncpu: 409.98609630570775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.6981147272112,
            "unit": "ns/iter",
            "extra": "iterations: 1725798\ncpu: 406.68131496270115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 822.6330696553898,
            "unit": "ns/iter",
            "extra": "iterations: 820698\ncpu: 822.5819972754913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1752.7246646197743,
            "unit": "ns/iter",
            "extra": "iterations: 455677\ncpu: 1752.6502325111874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10206.419790032538,
            "unit": "ns/iter",
            "extra": "iterations: 81536\ncpu: 10206.297831632657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7631.869598329534,
            "unit": "ns/iter",
            "extra": "iterations: 106356\ncpu: 7631.684155101737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8003.3056791081,
            "unit": "ns/iter",
            "extra": "iterations: 102745\ncpu: 8002.915956980864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7000.850340200647,
            "unit": "ns/iter",
            "extra": "iterations: 106849\ncpu: 7000.772117661346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34483.89322005417,
            "unit": "ns/iter",
            "extra": "iterations: 24012\ncpu: 34482.971014492694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 225413.5443708706,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 225408.82119205297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185162.81124945855,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 185155.55802578875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185946.29124915475,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 185932.73213092843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187346.03322925826,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 187337.37734165954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99110.36182045941,
            "unit": "ns/iter",
            "extra": "iterations: 8811\ncpu: 99104.24469413229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 177157.0728194856,
            "unit": "ns/iter",
            "extra": "iterations: 4930\ncpu: 177148.94523326633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5046.033806423082,
            "unit": "ns/iter",
            "extra": "iterations: 163253\ncpu: 5045.804977550192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24201.327653646127,
            "unit": "ns/iter",
            "extra": "iterations: 33746\ncpu: 24200.183725478542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19084.844903192017,
            "unit": "ns/iter",
            "extra": "iterations: 44469\ncpu: 19083.633542467735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18414.92831581378,
            "unit": "ns/iter",
            "extra": "iterations: 44431\ncpu: 18413.78767077039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17695.353893450796,
            "unit": "ns/iter",
            "extra": "iterations: 46514\ncpu: 17694.577976523204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50705.89982887431,
            "unit": "ns/iter",
            "extra": "iterations: 16362\ncpu: 50702.80528052794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267076.1773006401,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 267066.1963190191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205468.17804012223,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 205452.46753246692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 197284.14144037047,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 197272.11334120415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203429.66604606766,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 203417.12822899615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106793.92791776289,
            "unit": "ns/iter",
            "extra": "iterations: 7977\ncpu: 106788.75517111631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187767.20078914132,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 187754.25252082414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 777696.562864207,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 777660.0333055776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 437793.39375634235,
            "unit": "ns/iter",
            "extra": "iterations: 1986\ncpu: 437781.97381671844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1619.680771160783,
            "unit": "ns/iter",
            "extra": "iterations: 494216\ncpu: 1619.6715606131681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9014.26835139643,
            "unit": "ns/iter",
            "extra": "iterations: 90974\ncpu: 9014.122716380472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6865.68006652567,
            "unit": "ns/iter",
            "extra": "iterations: 119653\ncpu: 6865.5746199426685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6505.452181143409,
            "unit": "ns/iter",
            "extra": "iterations: 115467\ncpu: 6505.367767414072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6270.531085573924,
            "unit": "ns/iter",
            "extra": "iterations: 129047\ncpu: 6270.435577735253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33590.126036618065,
            "unit": "ns/iter",
            "extra": "iterations: 24961\ncpu: 33589.75601939018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 257645.8715649205,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 257639.6008099523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 181825.0822482634,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 181822.80815972248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185682.37273324793,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 185677.88944723574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184934.227262845,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 184930.062947688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96415.12027223411,
            "unit": "ns/iter",
            "extra": "iterations: 8963\ncpu: 96412.31730447378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185391.86636042228,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 185389.76821883448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 174.83140785326992,
            "unit": "ns/iter",
            "extra": "iterations: 4004629\ncpu: 174.82905407716885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1357.073578399943,
            "unit": "ns/iter",
            "extra": "iterations: 513330\ncpu: 1357.0539419087088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1065.2188013637222,
            "unit": "ns/iter",
            "extra": "iterations: 657080\ncpu: 1065.1986059536127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1063.430902248285,
            "unit": "ns/iter",
            "extra": "iterations: 651273\ncpu: 1063.4294681339436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 801.1700862275367,
            "unit": "ns/iter",
            "extra": "iterations: 848452\ncpu: 801.1465586739071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9320.494039612877,
            "unit": "ns/iter",
            "extra": "iterations: 75079\ncpu: 9320.109484676159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12137.021612534132,
            "unit": "ns/iter",
            "extra": "iterations: 57698\ncpu: 12135.994315227626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2709.942723607609,
            "unit": "ns/iter",
            "extra": "iterations: 258466\ncpu: 2709.7289392028224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2733.8522922263173,
            "unit": "ns/iter",
            "extra": "iterations: 255843\ncpu: 2733.550263247391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2620.8760329615675,
            "unit": "ns/iter",
            "extra": "iterations: 257875\ncpu: 2620.762384876399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5089.688025089026,
            "unit": "ns/iter",
            "extra": "iterations: 138072\ncpu: 5089.471435193243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4534.498248145642,
            "unit": "ns/iter",
            "extra": "iterations: 153837\ncpu: 4534.147181757312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1931.4698206890343,
            "unit": "ns/iter",
            "extra": "iterations: 364339\ncpu: 1931.3285154759735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10004.647229445683,
            "unit": "ns/iter",
            "extra": "iterations: 69986\ncpu: 10004.247992455645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8069.391195761553,
            "unit": "ns/iter",
            "extra": "iterations: 85686\ncpu: 8069.3788950353755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7939.430456680684,
            "unit": "ns/iter",
            "extra": "iterations: 88355\ncpu: 7938.958745968031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7875.372632300173,
            "unit": "ns/iter",
            "extra": "iterations: 87585\ncpu: 7874.939772792148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17785.837484181804,
            "unit": "ns/iter",
            "extra": "iterations: 39510\ncpu: 17784.345735256793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52760.039485909634,
            "unit": "ns/iter",
            "extra": "iterations: 12916\ncpu: 52756.201610406264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43171.9337129383,
            "unit": "ns/iter",
            "extra": "iterations: 16157\ncpu: 43169.38788141392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42384.13884958645,
            "unit": "ns/iter",
            "extra": "iterations: 16255\ncpu: 42381.870193786526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43530.325764192916,
            "unit": "ns/iter",
            "extra": "iterations: 16030\ncpu: 43527.579538365615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24534.65460073975,
            "unit": "ns/iter",
            "extra": "iterations: 27626\ncpu: 24533.57344530548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42479.15973821801,
            "unit": "ns/iter",
            "extra": "iterations: 16502\ncpu: 42478.16628287414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1888.2711352085457,
            "unit": "ns/iter",
            "extra": "iterations: 370531\ncpu: 1888.1640132674431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10045.989048932677,
            "unit": "ns/iter",
            "extra": "iterations: 69217\ncpu: 10045.337128162237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8014.087848283316,
            "unit": "ns/iter",
            "extra": "iterations: 87321\ncpu: 8013.745834335246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8026.530932276599,
            "unit": "ns/iter",
            "extra": "iterations: 87045\ncpu: 8026.088804641251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8031.639085992994,
            "unit": "ns/iter",
            "extra": "iterations: 87658\ncpu: 8031.309178854189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17445.36499726345,
            "unit": "ns/iter",
            "extra": "iterations: 40214\ncpu: 17445.12358879996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49485.39559438222,
            "unit": "ns/iter",
            "extra": "iterations: 13165\ncpu: 49480.87352829481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41591.78857244533,
            "unit": "ns/iter",
            "extra": "iterations: 16819\ncpu: 41589.928057553836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41617.93544371453,
            "unit": "ns/iter",
            "extra": "iterations: 16869\ncpu: 41617.22686584825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41368.319379751905,
            "unit": "ns/iter",
            "extra": "iterations: 16961\ncpu: 41368.28017215959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24975.731790335212,
            "unit": "ns/iter",
            "extra": "iterations: 27911\ncpu: 24975.181827953325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41455.91114204626,
            "unit": "ns/iter",
            "extra": "iterations: 17241\ncpu: 41454.16159155481 ns\nthreads: 1"
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
        "date": 1702492924233,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 549.3455381523985,
            "unit": "ns/iter",
            "extra": "iterations: 1274797\ncpu: 549.3491120547036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5159.346300000607,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5159.382999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10078.03951741528,
            "unit": "ns/iter",
            "extra": "iterations: 82141\ncpu: 10077.656712238708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15097.631646231757,
            "unit": "ns/iter",
            "extra": "iterations: 55539\ncpu: 15097.10113613857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19435.851765255447,
            "unit": "ns/iter",
            "extra": "iterations: 42770\ncpu: 19435.92938975918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24705.611790710784,
            "unit": "ns/iter",
            "extra": "iterations: 33026\ncpu: 24704.738690728518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29812.174661143432,
            "unit": "ns/iter",
            "extra": "iterations: 28478\ncpu: 29811.285904909062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35115.95479731548,
            "unit": "ns/iter",
            "extra": "iterations: 24003\ncpu: 35114.731491896826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39564.71070540451,
            "unit": "ns/iter",
            "extra": "iterations: 21307\ncpu: 39564.49523630728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 527.8292010000314,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 527.7824999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.0821412077181,
            "unit": "ns/iter",
            "extra": "iterations: 1734367\ncpu: 404.0588871905418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 407.8994440031278,
            "unit": "ns/iter",
            "extra": "iterations: 1712240\ncpu: 407.8828318460025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.4920705448658,
            "unit": "ns/iter",
            "extra": "iterations: 1746463\ncpu: 403.4759396563232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 854.8911321784034,
            "unit": "ns/iter",
            "extra": "iterations: 817698\ncpu: 854.8165704208649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1753.4128941011184,
            "unit": "ns/iter",
            "extra": "iterations: 464538\ncpu: 1753.2899353766563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10053.735534403037,
            "unit": "ns/iter",
            "extra": "iterations: 80052\ncpu: 10052.698246139991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7683.791093290553,
            "unit": "ns/iter",
            "extra": "iterations: 107986\ncpu: 7683.454336673266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6828.8956812376055,
            "unit": "ns/iter",
            "extra": "iterations: 110402\ncpu: 6828.309269759624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7028.042931656646,
            "unit": "ns/iter",
            "extra": "iterations: 112155\ncpu: 7027.4227631402755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34530.82150169548,
            "unit": "ns/iter",
            "extra": "iterations: 23933\ncpu: 34527.12990431626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 229956.38985427844,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 229936.7152466363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185634.12845455273,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 185613.90669909318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186188.67511778773,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 186165.6944132824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188311.36762718568,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 188292.66096353007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98943.93247698025,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 98936.35330226208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185454.79490472746,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 185436.5660458145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5019.416081949082,
            "unit": "ns/iter",
            "extra": "iterations: 161759\ncpu: 5018.9856514938865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23989.166938490544,
            "unit": "ns/iter",
            "extra": "iterations: 34336\ncpu: 23986.29426840634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17717.677582411932,
            "unit": "ns/iter",
            "extra": "iterations: 45897\ncpu: 17716.996753600462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17964.1999263316,
            "unit": "ns/iter",
            "extra": "iterations: 46152\ncpu: 17962.12731842607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17632.71103764368,
            "unit": "ns/iter",
            "extra": "iterations: 46885\ncpu: 17631.376772955155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51107.17623226965,
            "unit": "ns/iter",
            "extra": "iterations: 16291\ncpu: 51103.95924129903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268324.171262261,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 268299.0196078417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205378.6175158493,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 205357.97135477705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 210252.7063953534,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 210233.93895348755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204723.00915922335,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 204704.46218882117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109736.53523785596,
            "unit": "ns/iter",
            "extra": "iterations: 7946\ncpu: 109728.19028442059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196340.13387424115,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 196314.87491548355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 784932.94323871,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 784872.8714524172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 431547.86301371566,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 431514.18786692887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1610.0890850574474,
            "unit": "ns/iter",
            "extra": "iterations: 486883\ncpu: 1609.9639954568042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9445.50939931122,
            "unit": "ns/iter",
            "extra": "iterations: 87666\ncpu: 9444.693495768033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7079.5803809043655,
            "unit": "ns/iter",
            "extra": "iterations: 115357\ncpu: 7078.986970881682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6766.111118323756,
            "unit": "ns/iter",
            "extra": "iterations: 123238\ncpu: 6765.478180431321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6641.257105188457,
            "unit": "ns/iter",
            "extra": "iterations: 119842\ncpu: 6641.050716777107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34199.8043416613,
            "unit": "ns/iter",
            "extra": "iterations: 24691\ncpu: 34196.44809849736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256597.249345387,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 256575.41460575984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192001.33978681162,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 191981.03110724318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193014.31419806933,
            "unit": "ns/iter",
            "extra": "iterations: 4564\ncpu: 192998.15950920215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193611.48839247235,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 193593.88961892296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97778.64520440136,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 97769.83402027434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183275.20874088665,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 183259.18834547352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.2345165101937,
            "unit": "ns/iter",
            "extra": "iterations: 3890289\ncpu: 180.22177786791653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1367.2152638928262,
            "unit": "ns/iter",
            "extra": "iterations: 510643\ncpu: 1367.095994657719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1087.1213296579838,
            "unit": "ns/iter",
            "extra": "iterations: 644286\ncpu: 1087.1155046050994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1084.6231976900792,
            "unit": "ns/iter",
            "extra": "iterations: 646254\ncpu: 1084.583460992124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 833.4664304702527,
            "unit": "ns/iter",
            "extra": "iterations: 842237\ncpu: 833.4359568625026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9567.234002318777,
            "unit": "ns/iter",
            "extra": "iterations: 72448\ncpu: 9566.563604240246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12152.57995086203,
            "unit": "ns/iter",
            "extra": "iterations: 57798\ncpu: 12151.619433198353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2757.007560776451,
            "unit": "ns/iter",
            "extra": "iterations: 254868\ncpu: 2756.802737103149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2764.8352981065204,
            "unit": "ns/iter",
            "extra": "iterations: 253634\ncpu: 2764.6750829935954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2779.2389291197696,
            "unit": "ns/iter",
            "extra": "iterations: 250635\ncpu: 2779.0731541883706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5102.637157343692,
            "unit": "ns/iter",
            "extra": "iterations: 136872\ncpu: 5102.355485417029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5184.36180467609,
            "unit": "ns/iter",
            "extra": "iterations: 135692\ncpu: 5184.248150222543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1894.602557581018,
            "unit": "ns/iter",
            "extra": "iterations: 367613\ncpu: 1894.4346364247087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10106.226121474407,
            "unit": "ns/iter",
            "extra": "iterations: 69529\ncpu: 10105.817716348523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8155.436469863892,
            "unit": "ns/iter",
            "extra": "iterations: 86093\ncpu: 8154.9103876042245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7924.170253935514,
            "unit": "ns/iter",
            "extra": "iterations: 87857\ncpu: 7923.623615648116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7909.467064722263,
            "unit": "ns/iter",
            "extra": "iterations: 88765\ncpu: 7909.2119641751015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17845.731818068994,
            "unit": "ns/iter",
            "extra": "iterations: 39641\ncpu: 17845.024091218704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51980.595136588694,
            "unit": "ns/iter",
            "extra": "iterations: 12666\ncpu: 51977.9093636504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43619.14421820179,
            "unit": "ns/iter",
            "extra": "iterations: 16059\ncpu: 43615.81667600708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44101.568157310445,
            "unit": "ns/iter",
            "extra": "iterations: 15765\ncpu: 44100.78655248942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43888.17724768104,
            "unit": "ns/iter",
            "extra": "iterations: 15972\ncpu: 43885.411970949506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25557.001492212876,
            "unit": "ns/iter",
            "extra": "iterations: 27476\ncpu: 25555.462949482928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43185.333085775084,
            "unit": "ns/iter",
            "extra": "iterations: 16158\ncpu: 43181.965589800675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1901.0217095522742,
            "unit": "ns/iter",
            "extra": "iterations: 366014\ncpu: 1900.898053079942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10136.812647763127,
            "unit": "ns/iter",
            "extra": "iterations: 68945\ncpu: 10136.51026180281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8020.876717995834,
            "unit": "ns/iter",
            "extra": "iterations: 87020\ncpu: 8020.9032406343795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8079.37785211641,
            "unit": "ns/iter",
            "extra": "iterations: 86690\ncpu: 8078.874149267385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8061.397370930175,
            "unit": "ns/iter",
            "extra": "iterations: 87027\ncpu: 8060.928217679543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17455.084346674517,
            "unit": "ns/iter",
            "extra": "iterations: 40049\ncpu: 17454.036305525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53901.401411209954,
            "unit": "ns/iter",
            "extra": "iterations: 12755\ncpu: 53899.92159937297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42439.21423826728,
            "unit": "ns/iter",
            "extra": "iterations: 16561\ncpu: 42436.73087374026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42572.404505326034,
            "unit": "ns/iter",
            "extra": "iterations: 16425\ncpu: 42569.436834094195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42539.87376642339,
            "unit": "ns/iter",
            "extra": "iterations: 16517\ncpu: 42537.331234485515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25594.95333698967,
            "unit": "ns/iter",
            "extra": "iterations: 27345\ncpu: 25594.415798134654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 39614.168180453555,
            "unit": "ns/iter",
            "extra": "iterations: 16625\ncpu: 39611.12180451166 ns\nthreads: 1"
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
        "date": 1702503981325,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 593.9361346718672,
            "unit": "ns/iter",
            "extra": "iterations: 1179341\ncpu: 593.9121933350915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5194.249760000957,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5193.924000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10206.775048923662,
            "unit": "ns/iter",
            "extra": "iterations: 81760\ncpu: 10206.700097847359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15452.220037623068,
            "unit": "ns/iter",
            "extra": "iterations: 55286\ncpu: 15451.817820062948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19997.92157866465,
            "unit": "ns/iter",
            "extra": "iterations: 41022\ncpu: 19997.49890302766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24507.683942850974,
            "unit": "ns/iter",
            "extra": "iterations: 34016\ncpu: 24507.381820319868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29494.168400705392,
            "unit": "ns/iter",
            "extra": "iterations: 28450\ncpu: 29492.242530755706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34250.350038615536,
            "unit": "ns/iter",
            "extra": "iterations: 24603\ncpu: 34249.611835954944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38100.78709358564,
            "unit": "ns/iter",
            "extra": "iterations: 22268\ncpu: 38099.15124842821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.2410453277338,
            "unit": "ns/iter",
            "extra": "iterations: 1292035\ncpu: 542.2367815113365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 408.6931545457461,
            "unit": "ns/iter",
            "extra": "iterations: 1708769\ncpu: 408.6841463064939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 375.37373662605023,
            "unit": "ns/iter",
            "extra": "iterations: 1688633\ncpu: 375.36504379577974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 404.83024396151234,
            "unit": "ns/iter",
            "extra": "iterations: 1750194\ncpu: 404.81100952237296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 855.5503018993583,
            "unit": "ns/iter",
            "extra": "iterations: 817822\ncpu: 855.5618459762621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1746.1774279031292,
            "unit": "ns/iter",
            "extra": "iterations: 456608\ncpu: 1746.147023267222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10053.388931497044,
            "unit": "ns/iter",
            "extra": "iterations: 89967\ncpu: 10053.223959896399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7721.196478579908,
            "unit": "ns/iter",
            "extra": "iterations: 105696\ncpu: 7720.947812594621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7477.689488829941,
            "unit": "ns/iter",
            "extra": "iterations: 108418\ncpu: 7477.467763655488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7239.0614917919165,
            "unit": "ns/iter",
            "extra": "iterations: 112080\ncpu: 7238.983761598852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34551.138044882224,
            "unit": "ns/iter",
            "extra": "iterations: 23927\ncpu: 34550.165085468274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242923.4006141795,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 242917.92294807316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184363.5172721242,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 184355.07020280755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186252.67807606107,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 186250.17897091713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194349.29753168512,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 194346.7422726262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99054.3419251754,
            "unit": "ns/iter",
            "extra": "iterations: 8768\ncpu: 99049.5209854015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176914.65995717281,
            "unit": "ns/iter",
            "extra": "iterations: 4670\ncpu: 176907.23768736608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5000.068361977596,
            "unit": "ns/iter",
            "extra": "iterations: 161347\ncpu: 4999.739071690217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24401.53243219595,
            "unit": "ns/iter",
            "extra": "iterations: 34179\ncpu: 24400.38035050763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18431.20900307134,
            "unit": "ns/iter",
            "extra": "iterations: 44607\ncpu: 18430.210505077648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17814.954970080646,
            "unit": "ns/iter",
            "extra": "iterations: 46458\ncpu: 17814.10521331098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17931.66563768244,
            "unit": "ns/iter",
            "extra": "iterations: 46324\ncpu: 17930.267248078802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49713.91696837878,
            "unit": "ns/iter",
            "extra": "iterations: 16572\ncpu: 49710.04706734225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268656.3462484902,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 268649.415744158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 194084.46708833153,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 194080.97915202603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205452.7812721642,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 205448.7112792624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 191245.36282772574,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 191238.5065543074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109055.92630654901,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 109053.7912019052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195413.75028120607,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 195409.17885264326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789121.6337208882,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 789103.1561461812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 425245.0893027922,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 425231.3753581652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1618.0793998987456,
            "unit": "ns/iter",
            "extra": "iterations: 495983\ncpu: 1618.0617077601512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9347.857508283736,
            "unit": "ns/iter",
            "extra": "iterations: 86005\ncpu: 9347.397244346299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6959.7481152579385,
            "unit": "ns/iter",
            "extra": "iterations: 117788\ncpu: 6959.469555472588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6981.386703686599,
            "unit": "ns/iter",
            "extra": "iterations: 116694\ncpu: 6981.174696214059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6401.127108179963,
            "unit": "ns/iter",
            "extra": "iterations: 132816\ncpu: 6400.755933020073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33522.84852113395,
            "unit": "ns/iter",
            "extra": "iterations: 25053\ncpu: 33521.278888755754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259297.9175855807,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 259289.3499709802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192829.44010531774,
            "unit": "ns/iter",
            "extra": "iterations: 4558\ncpu: 192815.40149188283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194749.5513409114,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 194741.9666586123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183366.90684328452,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 183356.22516556393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99163.41740995621,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 99160.596138647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 172144.5919528153,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 172137.34990520283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.1276031168029,
            "unit": "ns/iter",
            "extra": "iterations: 3951369\ncpu: 177.12238467224776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1377.9666304932537,
            "unit": "ns/iter",
            "extra": "iterations: 507739\ncpu: 1377.942998272731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1083.479303364978,
            "unit": "ns/iter",
            "extra": "iterations: 646192\ncpu: 1083.4640478371787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1135.1791376565793,
            "unit": "ns/iter",
            "extra": "iterations: 644175\ncpu: 1135.1255481817855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 827.288588644754,
            "unit": "ns/iter",
            "extra": "iterations: 846052\ncpu: 827.264399824118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9569.498809840077,
            "unit": "ns/iter",
            "extra": "iterations: 71839\ncpu: 9569.222845529579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11530.584221220748,
            "unit": "ns/iter",
            "extra": "iterations: 60537\ncpu: 11530.63746138722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2709.846409047659,
            "unit": "ns/iter",
            "extra": "iterations: 260126\ncpu: 2709.806401513131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2732.2241247044503,
            "unit": "ns/iter",
            "extra": "iterations: 256799\ncpu: 2732.190935322962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2729.4497901599066,
            "unit": "ns/iter",
            "extra": "iterations: 256862\ncpu: 2729.3745279566315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5150.963055182146,
            "unit": "ns/iter",
            "extra": "iterations: 136149\ncpu: 5150.876613122419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5181.0701241511315,
            "unit": "ns/iter",
            "extra": "iterations: 135802\ncpu: 5180.950206918892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1900.2805057898818,
            "unit": "ns/iter",
            "extra": "iterations: 370905\ncpu: 1900.1903452366612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10039.026274803631,
            "unit": "ns/iter",
            "extra": "iterations: 69344\ncpu: 10038.7315413014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8043.835673815861,
            "unit": "ns/iter",
            "extra": "iterations: 86663\ncpu: 8043.662231863652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7875.524139092849,
            "unit": "ns/iter",
            "extra": "iterations: 89005\ncpu: 7875.6373237459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7877.694493325418,
            "unit": "ns/iter",
            "extra": "iterations: 89219\ncpu: 7877.591096066992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17836.2328072023,
            "unit": "ns/iter",
            "extra": "iterations: 39217\ncpu: 17836.004793839456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54105.11448598642,
            "unit": "ns/iter",
            "extra": "iterations: 12840\ncpu: 54103.45794392554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43024.6306786841,
            "unit": "ns/iter",
            "extra": "iterations: 16311\ncpu: 43023.30942308864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42773.84111017038,
            "unit": "ns/iter",
            "extra": "iterations: 16502\ncpu: 42773.23960732027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43075.815794297276,
            "unit": "ns/iter",
            "extra": "iterations: 16373\ncpu: 43074.745007023754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25360.58243272651,
            "unit": "ns/iter",
            "extra": "iterations: 27574\ncpu: 25359.508957713646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42644.924479322464,
            "unit": "ns/iter",
            "extra": "iterations: 16565\ncpu: 42645.07696951366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1921.2213955229856,
            "unit": "ns/iter",
            "extra": "iterations: 362889\ncpu: 1921.1786524253885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10048.491713498795,
            "unit": "ns/iter",
            "extra": "iterations: 69752\ncpu: 10048.332664296293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8034.857501684285,
            "unit": "ns/iter",
            "extra": "iterations: 87587\ncpu: 8034.582757715251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8127.70182417088,
            "unit": "ns/iter",
            "extra": "iterations: 86231\ncpu: 8127.405457434064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8003.504912670171,
            "unit": "ns/iter",
            "extra": "iterations: 87427\ncpu: 8003.522939137833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17544.277772193578,
            "unit": "ns/iter",
            "extra": "iterations: 39788\ncpu: 17543.95043731773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53164.00007661443,
            "unit": "ns/iter",
            "extra": "iterations: 13052\ncpu: 53163.20870364761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41809.13817204617,
            "unit": "ns/iter",
            "extra": "iterations: 16740\ncpu: 41807.97491039435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41603.68416030464,
            "unit": "ns/iter",
            "extra": "iterations: 16768\ncpu: 41603.769083969855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41999.911651349015,
            "unit": "ns/iter",
            "extra": "iterations: 16865\ncpu: 41998.60065223824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25218.38971753907,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 25218.050151318577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42084.4121929522,
            "unit": "ns/iter",
            "extra": "iterations: 16895\ncpu: 42083.054158034334 ns\nthreads: 1"
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
        "date": 1705575630036,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 554.4686127849403,
            "unit": "ns/iter",
            "extra": "iterations: 1271043\ncpu: 554.4304952704198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5099.23970999921,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5099.203000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10017.427129639786,
            "unit": "ns/iter",
            "extra": "iterations: 83230\ncpu: 10017.32788657936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14818.504725930277,
            "unit": "ns/iter",
            "extra": "iterations: 56391\ncpu: 14818.447979287475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19460.770532638533,
            "unit": "ns/iter",
            "extra": "iterations: 42956\ncpu: 19460.890213241455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24383.154679629788,
            "unit": "ns/iter",
            "extra": "iterations: 34148\ncpu: 24382.8101206513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29252.154029664795,
            "unit": "ns/iter",
            "extra": "iterations: 28923\ncpu: 29251.12194447324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34106.90527817592,
            "unit": "ns/iter",
            "extra": "iterations: 24535\ncpu: 34105.184430405534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36862.78682771374,
            "unit": "ns/iter",
            "extra": "iterations: 21940\ncpu: 36861.89152233366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 534.2724878615683,
            "unit": "ns/iter",
            "extra": "iterations: 1309273\ncpu: 534.2714621014877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.21988669630764,
            "unit": "ns/iter",
            "extra": "iterations: 1730041\ncpu: 404.21082506137145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.83027238665375,
            "unit": "ns/iter",
            "extra": "iterations: 1705627\ncpu: 410.8329077811268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.2894396535463,
            "unit": "ns/iter",
            "extra": "iterations: 1717491\ncpu: 407.28009637313926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 857.1773111680426,
            "unit": "ns/iter",
            "extra": "iterations: 817433\ncpu: 857.1714134369431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1756.3465465582383,
            "unit": "ns/iter",
            "extra": "iterations: 456588\ncpu: 1756.3135693447916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9543.542640125059,
            "unit": "ns/iter",
            "extra": "iterations: 85049\ncpu: 9543.516090724164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7383.622578479073,
            "unit": "ns/iter",
            "extra": "iterations: 110158\ncpu: 7383.39748361443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6966.052150194945,
            "unit": "ns/iter",
            "extra": "iterations: 111083\ncpu: 6965.882268213862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6825.960080428507,
            "unit": "ns/iter",
            "extra": "iterations: 115382\ncpu: 6825.822918652822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34300.47773295919,
            "unit": "ns/iter",
            "extra": "iterations: 24296\ncpu: 34299.55548238386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245435.87419443985,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 245430.23255813916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192101.3599377352,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 192099.24410849303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 190019.11568581703,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 190015.30543745795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190025.58133274977,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 190023.37895445363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99374.83764005908,
            "unit": "ns/iter",
            "extra": "iterations: 8746\ncpu: 99372.73039103574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186835.0690246591,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 186836.20578778157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5092.166569982563,
            "unit": "ns/iter",
            "extra": "iterations: 163763\ncpu: 5092.075743605085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23399.36569542346,
            "unit": "ns/iter",
            "extra": "iterations: 35144\ncpu: 23398.796380605545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18956.98893014039,
            "unit": "ns/iter",
            "extra": "iterations: 44174\ncpu: 18956.207271245523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18513.975341049747,
            "unit": "ns/iter",
            "extra": "iterations: 44568\ncpu: 18513.22249147369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17346.985766484642,
            "unit": "ns/iter",
            "extra": "iterations: 47072\ncpu: 17346.501104690677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49257.81143595249,
            "unit": "ns/iter",
            "extra": "iterations: 17034\ncpu: 49256.95080427375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268968.96203997807,
            "unit": "ns/iter",
            "extra": "iterations: 3451\ncpu: 268956.91104027757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202330.25516919064,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 202328.12500000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205661.31469192475,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 205657.9383886242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197040.55621162138,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 197036.32498819014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110942.27206540368,
            "unit": "ns/iter",
            "extra": "iterations: 7829\ncpu: 110940.65653340155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188269.74607674178,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 188264.34176111693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793763.9715480857,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 793744.518828452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 432964.4589514919,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 432945.8456973294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1615.6499333099348,
            "unit": "ns/iter",
            "extra": "iterations: 495577\ncpu: 1615.6042350633707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9251.851727770052,
            "unit": "ns/iter",
            "extra": "iterations: 89248\ncpu: 9251.568662603111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7029.7956147624045,
            "unit": "ns/iter",
            "extra": "iterations: 117029\ncpu: 7029.684949884207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7349.782280588709,
            "unit": "ns/iter",
            "extra": "iterations: 111708\ncpu: 7349.769935904318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6437.66576801011,
            "unit": "ns/iter",
            "extra": "iterations: 117583\ncpu: 6437.449291139033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33402.80031307438,
            "unit": "ns/iter",
            "extra": "iterations: 24914\ncpu: 33401.790158144104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 253262.43052325954,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 253254.56395348668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185584.5023830274,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 185585.65857885662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192146.93362446208,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 192142.29257641858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191850.62166267802,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 191845.5611026692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97887.47791300937,
            "unit": "ns/iter",
            "extra": "iterations: 8874\ncpu: 97886.46608068458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184976.44629476644,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 184976.20732722705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.62017686714907,
            "unit": "ns/iter",
            "extra": "iterations: 3979597\ncpu: 176.6187128998251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1367.1531643511657,
            "unit": "ns/iter",
            "extra": "iterations: 510863\ncpu: 1367.1467692903905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1079.9129824821778,
            "unit": "ns/iter",
            "extra": "iterations: 647226\ncpu: 1079.8962031809594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1074.015876271898,
            "unit": "ns/iter",
            "extra": "iterations: 653239\ncpu: 1074.0115026812455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.3226483874853,
            "unit": "ns/iter",
            "extra": "iterations: 834757\ncpu: 838.3202536786163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9337.12500000031,
            "unit": "ns/iter",
            "extra": "iterations: 74600\ncpu: 9337.052278820336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11593.30626057506,
            "unit": "ns/iter",
            "extra": "iterations: 56736\ncpu: 11592.872250422934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2687.791072079172,
            "unit": "ns/iter",
            "extra": "iterations: 260755\ncpu: 2687.7241088377928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2513.7942303472128,
            "unit": "ns/iter",
            "extra": "iterations: 259669\ncpu: 2513.770607966291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2503.511677654154,
            "unit": "ns/iter",
            "extra": "iterations: 262724\ncpu: 2503.400526788579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5111.446528422901,
            "unit": "ns/iter",
            "extra": "iterations: 136811\ncpu: 5111.148957320665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4953.056979854728,
            "unit": "ns/iter",
            "extra": "iterations: 141278\ncpu: 4952.975693313915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1888.1153832676935,
            "unit": "ns/iter",
            "extra": "iterations: 371007\ncpu: 1888.033379424133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9904.310641945145,
            "unit": "ns/iter",
            "extra": "iterations: 71143\ncpu: 9903.641960558156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7956.52709348468,
            "unit": "ns/iter",
            "extra": "iterations: 87641\ncpu: 7955.931584532315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8028.709486660461,
            "unit": "ns/iter",
            "extra": "iterations: 87934\ncpu: 8028.231400823393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7847.273639849609,
            "unit": "ns/iter",
            "extra": "iterations: 89457\ncpu: 7847.050538247451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17740.901974270717,
            "unit": "ns/iter",
            "extra": "iterations: 39255\ncpu: 17740.84575213355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55030.87965161971,
            "unit": "ns/iter",
            "extra": "iterations: 12630\ncpu: 55026.634996040426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44114.869671363245,
            "unit": "ns/iter",
            "extra": "iterations: 15975\ncpu: 44112.913928012786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43854.04816714882,
            "unit": "ns/iter",
            "extra": "iterations: 15986\ncpu: 43851.907919429665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40930.7131552286,
            "unit": "ns/iter",
            "extra": "iterations: 15796\ncpu: 40930.45074702455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25283.559406657387,
            "unit": "ns/iter",
            "extra": "iterations: 27640\ncpu: 25283.726483357506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41094.13598942394,
            "unit": "ns/iter",
            "extra": "iterations: 16641\ncpu: 41094.39336578326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1892.735869822151,
            "unit": "ns/iter",
            "extra": "iterations: 367989\ncpu: 1892.7217933144618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9984.808757666553,
            "unit": "ns/iter",
            "extra": "iterations: 70110\ncpu: 9984.769647696412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7893.225225740751,
            "unit": "ns/iter",
            "extra": "iterations: 87268\ncpu: 7893.283907044983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8031.678725651673,
            "unit": "ns/iter",
            "extra": "iterations: 87072\ncpu: 8031.4831403896105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7911.532277503731,
            "unit": "ns/iter",
            "extra": "iterations: 88777\ncpu: 7911.581828626905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17489.924512342168,
            "unit": "ns/iter",
            "extra": "iterations: 40192\ncpu: 17489.846238057376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54001.54594973683,
            "unit": "ns/iter",
            "extra": "iterations: 12851\ncpu: 54000.412419267224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42335.84399038375,
            "unit": "ns/iter",
            "extra": "iterations: 16640\ncpu: 42336.08173076925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42945.92148456448,
            "unit": "ns/iter",
            "extra": "iterations: 16328\ncpu: 42946.184468397245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42530.25576430028,
            "unit": "ns/iter",
            "extra": "iterations: 16394\ncpu: 42530.059777967326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25499.887484241404,
            "unit": "ns/iter",
            "extra": "iterations: 27765\ncpu: 25500.064829821735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42484.665210893596,
            "unit": "ns/iter",
            "extra": "iterations: 16715\ncpu: 42484.58271014085 ns\nthreads: 1"
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
        "date": 1705773455205,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 561.7446576678246,
            "unit": "ns/iter",
            "extra": "iterations: 1246319\ncpu: 561.7188697275737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5014.796179999621,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5014.700999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9823.489171552834,
            "unit": "ns/iter",
            "extra": "iterations: 84592\ncpu: 9823.385190088897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14893.604217040287,
            "unit": "ns/iter",
            "extra": "iterations: 56248\ncpu: 14892.961527520974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19603.102692531982,
            "unit": "ns/iter",
            "extra": "iterations: 42525\ncpu: 19602.21046443269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24177.736576012398,
            "unit": "ns/iter",
            "extra": "iterations: 34416\ncpu: 24176.83926080893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29097.223254999986,
            "unit": "ns/iter",
            "extra": "iterations: 28510\ncpu: 29096.422307962137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33690.162690414705,
            "unit": "ns/iter",
            "extra": "iterations: 24814\ncpu: 33689.4575642782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38140.67614591325,
            "unit": "ns/iter",
            "extra": "iterations: 22013\ncpu: 38139.78103847724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.0646772595828,
            "unit": "ns/iter",
            "extra": "iterations: 1308296\ncpu: 535.0481083791424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.4239003177184,
            "unit": "ns/iter",
            "extra": "iterations: 1731341\ncpu: 404.4150170301515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 412.14750165904957,
            "unit": "ns/iter",
            "extra": "iterations: 1701269\ncpu: 412.1387623003766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 402.33936795899064,
            "unit": "ns/iter",
            "extra": "iterations: 1715047\ncpu: 402.32349317540576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 856.3795575997705,
            "unit": "ns/iter",
            "extra": "iterations: 817947\ncpu: 856.3655102347692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1745.7079117750093,
            "unit": "ns/iter",
            "extra": "iterations: 457331\ncpu: 1745.6629880764694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10145.953952532436,
            "unit": "ns/iter",
            "extra": "iterations: 80265\ncpu: 10145.631346165823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7783.165543362568,
            "unit": "ns/iter",
            "extra": "iterations: 105344\ncpu: 7783.050767010955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8072.744073307597,
            "unit": "ns/iter",
            "extra": "iterations: 101490\ncpu: 8072.60222682039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7015.475403198708,
            "unit": "ns/iter",
            "extra": "iterations: 118552\ncpu: 7015.2565962615745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34367.040899626925,
            "unit": "ns/iter",
            "extra": "iterations: 24010\ncpu: 34366.50978758865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245092.63559559372,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 245082.9062235992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184121.0060200872,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 184112.79821627674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 193639.0811775396,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 193629.34879571834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189394.72149074104,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 189384.98103101947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99475.40235728804,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 99472.27871504515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188024.5434412349,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 188012.13798977874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5068.545283186677,
            "unit": "ns/iter",
            "extra": "iterations: 157564\ncpu: 5068.281460232034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23495.1083225156,
            "unit": "ns/iter",
            "extra": "iterations: 34665\ncpu: 23494.19299004759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17744.284043624615,
            "unit": "ns/iter",
            "extra": "iterations: 45662\ncpu: 17743.32924532434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18355.76375340525,
            "unit": "ns/iter",
            "extra": "iterations: 45516\ncpu: 18355.092714649774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18470.794551950028,
            "unit": "ns/iter",
            "extra": "iterations: 44493\ncpu: 18469.745802710597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48998.50003052601,
            "unit": "ns/iter",
            "extra": "iterations: 16379\ncpu: 48996.41003724296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267963.6994148455,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 267947.39759778057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204955.82694567254,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 204945.05055255213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206208.50165171127,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 206198.9853704572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 191204.89185393753,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 191199.97659176105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107244.06328320944,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 107237.54385964936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194733.60211426765,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 194731.4889788572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 798882.2410640666,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 798872.6517040721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438017.46669980045,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 438010.8349900594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1628.9172672707502,
            "unit": "ns/iter",
            "extra": "iterations: 494641\ncpu: 1628.8779134766478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9105.233301674918,
            "unit": "ns/iter",
            "extra": "iterations: 90548\ncpu: 9104.989618765743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7164.2188403158725,
            "unit": "ns/iter",
            "extra": "iterations: 115221\ncpu: 7164.074257296814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6953.411394328379,
            "unit": "ns/iter",
            "extra": "iterations: 118480\ncpu: 6953.382849426082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6217.166010108649,
            "unit": "ns/iter",
            "extra": "iterations: 132763\ncpu: 6212.136664582748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33954.040009629185,
            "unit": "ns/iter",
            "extra": "iterations: 24919\ncpu: 33953.10004414292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256101.00318101764,
            "unit": "ns/iter",
            "extra": "iterations: 3458\ncpu: 256093.03065355634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192218.35866262126,
            "unit": "ns/iter",
            "extra": "iterations: 4606\ncpu: 192213.35214937068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191957.9012211058,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 191951.89707806308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191104.17592189967,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 191101.0845986978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97590.0163355344,
            "unit": "ns/iter",
            "extra": "iterations: 9060\ncpu: 97587.8035320091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183770.97854439483,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 183768.36348338195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 174.93443382046144,
            "unit": "ns/iter",
            "extra": "iterations: 4008225\ncpu: 174.9292766748382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1371.7599351702172,
            "unit": "ns/iter",
            "extra": "iterations: 510258\ncpu: 1371.7417463322386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1006.2816308471035,
            "unit": "ns/iter",
            "extra": "iterations: 693848\ncpu: 1006.2637638214636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1068.1187205421159,
            "unit": "ns/iter",
            "extra": "iterations: 695482\ncpu: 1068.0900440270188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 826.2411596915714,
            "unit": "ns/iter",
            "extra": "iterations: 846294\ncpu: 826.2171302171572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9254.917017351307,
            "unit": "ns/iter",
            "extra": "iterations: 75329\ncpu: 9254.411979450235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12137.864396737512,
            "unit": "ns/iter",
            "extra": "iterations: 57388\ncpu: 12137.713459259807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2731.3929432817886,
            "unit": "ns/iter",
            "extra": "iterations: 257060\ncpu: 2731.3428771493163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2726.73656652803,
            "unit": "ns/iter",
            "extra": "iterations: 256877\ncpu: 2726.6839771563855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2527.6571371359278,
            "unit": "ns/iter",
            "extra": "iterations: 259684\ncpu: 2527.5750527564455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5125.954745847314,
            "unit": "ns/iter",
            "extra": "iterations: 137004\ncpu: 5125.8912148550335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5073.8930909877145,
            "unit": "ns/iter",
            "extra": "iterations: 138370\ncpu: 5073.793452337922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1863.8412701790994,
            "unit": "ns/iter",
            "extra": "iterations: 375758\ncpu: 1863.8080892489295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9886.947095185493,
            "unit": "ns/iter",
            "extra": "iterations: 70693\ncpu: 9886.809160737237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7896.323427559879,
            "unit": "ns/iter",
            "extra": "iterations: 90385\ncpu: 7896.077889030183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7909.156168242401,
            "unit": "ns/iter",
            "extra": "iterations: 89442\ncpu: 7908.558618993294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7666.322489947301,
            "unit": "ns/iter",
            "extra": "iterations: 91761\ncpu: 7665.902725558642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17647.585414988924,
            "unit": "ns/iter",
            "extra": "iterations: 39712\ncpu: 17647.24768331981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52279.739046742725,
            "unit": "ns/iter",
            "extra": "iterations: 12987\ncpu: 52278.463078463225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43843.04230383528,
            "unit": "ns/iter",
            "extra": "iterations: 15956\ncpu: 43842.35397342692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43908.4390593746,
            "unit": "ns/iter",
            "extra": "iterations: 16032\ncpu: 43907.04840319357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43664.58865026746,
            "unit": "ns/iter",
            "extra": "iterations: 16018\ncpu: 43664.37757522872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25367.240384263365,
            "unit": "ns/iter",
            "extra": "iterations: 27273\ncpu: 25366.64833351681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43240.37902829343,
            "unit": "ns/iter",
            "extra": "iterations: 16260\ncpu: 43239.79704797026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1870.7945798718029,
            "unit": "ns/iter",
            "extra": "iterations: 373386\ncpu: 1870.7586786864229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10010.285591692924,
            "unit": "ns/iter",
            "extra": "iterations: 69918\ncpu: 10010.121857032393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7926.15748948724,
            "unit": "ns/iter",
            "extra": "iterations: 90133\ncpu: 7925.954977644021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7979.08250937965,
            "unit": "ns/iter",
            "extra": "iterations: 87687\ncpu: 7978.7870493916325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7950.4020562523665,
            "unit": "ns/iter",
            "extra": "iterations: 88316\ncpu: 7950.177770732297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17478.490613203336,
            "unit": "ns/iter",
            "extra": "iterations: 40003\ncpu: 17478.15413843952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53590.72507506291,
            "unit": "ns/iter",
            "extra": "iterations: 12989\ncpu: 53589.71437370083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42119.810799392886,
            "unit": "ns/iter",
            "extra": "iterations: 16575\ncpu: 42118.8838612369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42126.619992778746,
            "unit": "ns/iter",
            "extra": "iterations: 16626\ncpu: 42125.69469505608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42054.69557140017,
            "unit": "ns/iter",
            "extra": "iterations: 16687\ncpu: 42053.69449271828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26481.222415230655,
            "unit": "ns/iter",
            "extra": "iterations: 27633\ncpu: 26480.660804110885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42018.88764244899,
            "unit": "ns/iter",
            "extra": "iterations: 16848\ncpu: 42017.96652421697 ns\nthreads: 1"
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
        "date": 1705774884680,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 549.5339785144089,
            "unit": "ns/iter",
            "extra": "iterations: 1286254\ncpu: 549.5105943305133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5121.013540000376,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5120.976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10021.517891588986,
            "unit": "ns/iter",
            "extra": "iterations: 82944\ncpu: 10021.383101851854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15027.902512634768,
            "unit": "ns/iter",
            "extra": "iterations: 55997\ncpu: 15027.412182795504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19734.794245486195,
            "unit": "ns/iter",
            "extra": "iterations: 42332\ncpu: 19734.319191155635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24782.405626296033,
            "unit": "ns/iter",
            "extra": "iterations: 33770\ncpu: 24781.347349718686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29479.39069377348,
            "unit": "ns/iter",
            "extra": "iterations: 28626\ncpu: 29479.38237965487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33993.82682060161,
            "unit": "ns/iter",
            "extra": "iterations: 24772\ncpu: 33992.23316647828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38878.65429977416,
            "unit": "ns/iter",
            "extra": "iterations: 21536\ncpu: 38877.54921991086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 537.5649930219146,
            "unit": "ns/iter",
            "extra": "iterations: 1303363\ncpu: 537.5496312232286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 408.55913138485295,
            "unit": "ns/iter",
            "extra": "iterations: 1685856\ncpu: 408.5386296338475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 414.2584208155896,
            "unit": "ns/iter",
            "extra": "iterations: 1689771\ncpu: 414.2489721980078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.27945451853947,
            "unit": "ns/iter",
            "extra": "iterations: 1694723\ncpu: 412.2569883101834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 861.986235400509,
            "unit": "ns/iter",
            "extra": "iterations: 808596\ncpu: 861.9639473853443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1755.5962165861022,
            "unit": "ns/iter",
            "extra": "iterations: 453030\ncpu: 1755.535615742888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9813.036823950564,
            "unit": "ns/iter",
            "extra": "iterations: 82039\ncpu: 9812.875583563917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7201.062189334169,
            "unit": "ns/iter",
            "extra": "iterations: 115679\ncpu: 7201.054642588529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7243.972046441079,
            "unit": "ns/iter",
            "extra": "iterations: 112830\ncpu: 7243.648852255599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7193.759656235444,
            "unit": "ns/iter",
            "extra": "iterations: 113217\ncpu: 7193.870178506753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34606.31706098053,
            "unit": "ns/iter",
            "extra": "iterations: 24008\ncpu: 34605.5648117293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246986.9646924802,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 246975.284738041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184168.41649854288,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 184157.83456624037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187717.5258447221,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 187709.86797941435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187881.17081371008,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 187872.15870880938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99734.51303750822,
            "unit": "ns/iter",
            "extra": "iterations: 8744\ncpu: 99731.7817932296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 177785.87405900666,
            "unit": "ns/iter",
            "extra": "iterations: 4915\ncpu: 177774.83214649037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5009.285762854874,
            "unit": "ns/iter",
            "extra": "iterations: 158831\ncpu: 5008.922061814114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24012.55494078227,
            "unit": "ns/iter",
            "extra": "iterations: 34701\ncpu: 24011.783522088663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18929.74192893919,
            "unit": "ns/iter",
            "extra": "iterations: 44356\ncpu: 18928.841644873264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18084.762015130877,
            "unit": "ns/iter",
            "extra": "iterations: 45734\ncpu: 18084.51261643417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17617.55485986924,
            "unit": "ns/iter",
            "extra": "iterations: 46956\ncpu: 17616.705000425947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50616.69940294331,
            "unit": "ns/iter",
            "extra": "iterations: 16414\ncpu: 50616.43109540626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270320.7580445621,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 270309.34405940573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205870.82571830862,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 205862.45878473797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205684.1737898453,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 205678.77213695375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203933.82625935058,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 203933.5354477602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109691.08996104916,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 109684.42015328557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196548.4466019452,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 196545.450440281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 796538.728714526,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 796512.0200333903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 442514.81155780953,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 442489.6984924599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1618.9466167591509,
            "unit": "ns/iter",
            "extra": "iterations: 493713\ncpu: 1618.9119994814798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9332.089424000585,
            "unit": "ns/iter",
            "extra": "iterations: 88455\ncpu: 9331.896444519834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7115.920584672025,
            "unit": "ns/iter",
            "extra": "iterations: 117194\ncpu: 7115.792617369511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7200.20937249499,
            "unit": "ns/iter",
            "extra": "iterations: 115999\ncpu: 7199.990517159656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6366.423187673364,
            "unit": "ns/iter",
            "extra": "iterations: 130578\ncpu: 6366.403222594919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34286.19407987968,
            "unit": "ns/iter",
            "extra": "iterations: 24763\ncpu: 34285.361224407476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 257298.24948936442,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 257291.30434782535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191202.54595789927,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 191194.04208194822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188649.75548173205,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 188638.87043189452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189340.9797979925,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 189333.684672814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99437.35211110077,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 99434.4383469587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183804.98992443888,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 183805.47858942047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 175.58412847722852,
            "unit": "ns/iter",
            "extra": "iterations: 3992988\ncpu: 175.5786894425921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1367.9637429647946,
            "unit": "ns/iter",
            "extra": "iterations: 510825\ncpu: 1367.960456124892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1143.1347945660584,
            "unit": "ns/iter",
            "extra": "iterations: 613044\ncpu: 1143.087282478908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1017.7251946914924,
            "unit": "ns/iter",
            "extra": "iterations: 685700\ncpu: 1017.7214525302609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 830.1113988988171,
            "unit": "ns/iter",
            "extra": "iterations: 838195\ncpu: 830.0696138726611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9663.221880115574,
            "unit": "ns/iter",
            "extra": "iterations: 72102\ncpu: 9662.86372083996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12546.720964663424,
            "unit": "ns/iter",
            "extra": "iterations: 56061\ncpu: 12515.900536915213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2737.812811421492,
            "unit": "ns/iter",
            "extra": "iterations: 256084\ncpu: 2737.7833054778803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2746.756906033563,
            "unit": "ns/iter",
            "extra": "iterations: 253112\ncpu: 2746.742548753123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2734.2791194233514,
            "unit": "ns/iter",
            "extra": "iterations: 256650\ncpu: 2734.225599064888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5113.310820964731,
            "unit": "ns/iter",
            "extra": "iterations: 151724\ncpu: 5113.2477393161025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4918.249788285394,
            "unit": "ns/iter",
            "extra": "iterations: 141700\ncpu: 4918.219477769894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1894.0161491290385,
            "unit": "ns/iter",
            "extra": "iterations: 368379\ncpu: 1894.001286718329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10001.71113076797,
            "unit": "ns/iter",
            "extra": "iterations: 70094\ncpu: 10001.335349673127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8046.6217586858875,
            "unit": "ns/iter",
            "extra": "iterations: 87156\ncpu: 8046.625590894547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7985.071720563125,
            "unit": "ns/iter",
            "extra": "iterations: 87576\ncpu: 7984.696720562725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7934.967441281583,
            "unit": "ns/iter",
            "extra": "iterations: 88302\ncpu: 7934.933523589511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17827.9134335243,
            "unit": "ns/iter",
            "extra": "iterations: 39126\ncpu: 17827.69258293699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54055.95103811754,
            "unit": "ns/iter",
            "extra": "iterations: 12908\ncpu: 54054.617291602386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43272.44042763217,
            "unit": "ns/iter",
            "extra": "iterations: 16182\ncpu: 43271.83908045945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43035.614440607984,
            "unit": "ns/iter",
            "extra": "iterations: 16786\ncpu: 43035.86321934991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43155.565696779966,
            "unit": "ns/iter",
            "extra": "iterations: 16325\ncpu: 43155.79173047496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25261.578013416372,
            "unit": "ns/iter",
            "extra": "iterations: 27726\ncpu: 25261.99596046992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42397.15752886676,
            "unit": "ns/iter",
            "extra": "iterations: 16543\ncpu: 42395.80487215178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1926.2851909043666,
            "unit": "ns/iter",
            "extra": "iterations: 363297\ncpu: 1926.2333572807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10186.809948422428,
            "unit": "ns/iter",
            "extra": "iterations: 68634\ncpu: 10186.6043069033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8079.629243091691,
            "unit": "ns/iter",
            "extra": "iterations: 86523\ncpu: 8079.303768939946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8109.683261524404,
            "unit": "ns/iter",
            "extra": "iterations: 86573\ncpu: 8109.225740126791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8109.548942553733,
            "unit": "ns/iter",
            "extra": "iterations: 86009\ncpu: 8109.264146775493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17391.27637384581,
            "unit": "ns/iter",
            "extra": "iterations: 39888\ncpu: 17389.821500200356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53512.69379195113,
            "unit": "ns/iter",
            "extra": "iterations: 13112\ncpu: 53511.45515558336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41684.73958026866,
            "unit": "ns/iter",
            "extra": "iterations: 17011\ncpu: 41684.60407971298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42057.62906516407,
            "unit": "ns/iter",
            "extra": "iterations: 16666\ncpu: 42057.47629905144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41965.79274300012,
            "unit": "ns/iter",
            "extra": "iterations: 16646\ncpu: 41965.643397812964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25329.389669851324,
            "unit": "ns/iter",
            "extra": "iterations: 27957\ncpu: 25328.347104481836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41432.976560661984,
            "unit": "ns/iter",
            "extra": "iterations: 16980\ncpu: 41430.75382803265 ns\nthreads: 1"
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
        "date": 1705778456766,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 567.1012023574028,
            "unit": "ns/iter",
            "extra": "iterations: 1203885\ncpu: 567.0697782595514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5170.948360000693,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5170.818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10050.772057038095,
            "unit": "ns/iter",
            "extra": "iterations: 82332\ncpu: 10050.253850264782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15174.390380516255,
            "unit": "ns/iter",
            "extra": "iterations: 55346\ncpu: 15173.316951541208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19772.5032070252,
            "unit": "ns/iter",
            "extra": "iterations: 42251\ncpu: 19769.82083264302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24253.26083027411,
            "unit": "ns/iter",
            "extra": "iterations: 34302\ncpu: 24253.005655646906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29575.729398584717,
            "unit": "ns/iter",
            "extra": "iterations: 28566\ncpu: 29575.67037737171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33931.845594214414,
            "unit": "ns/iter",
            "extra": "iterations: 24604\ncpu: 33931.738741668014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38365.024567128734,
            "unit": "ns/iter",
            "extra": "iterations: 22062\ncpu: 38364.32327078235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 536.4955195070534,
            "unit": "ns/iter",
            "extra": "iterations: 1299299\ncpu: 536.4935245851794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 416.05569626993946,
            "unit": "ns/iter",
            "extra": "iterations: 1690185\ncpu: 416.03960513198206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 406.1871703943437,
            "unit": "ns/iter",
            "extra": "iterations: 1676435\ncpu: 406.17447142299073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 387.64647759259213,
            "unit": "ns/iter",
            "extra": "iterations: 1721195\ncpu: 387.6377168188383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 886.5525665308259,
            "unit": "ns/iter",
            "extra": "iterations: 796172\ncpu: 886.5506448355377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1750.3417213679243,
            "unit": "ns/iter",
            "extra": "iterations: 454894\ncpu: 1750.3178762524906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9704.985379978265,
            "unit": "ns/iter",
            "extra": "iterations: 83926\ncpu: 9704.950789981656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7571.058682745824,
            "unit": "ns/iter",
            "extra": "iterations: 107800\ncpu: 7570.956400742136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7626.611090173199,
            "unit": "ns/iter",
            "extra": "iterations: 106130\ncpu: 7626.655045698692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7073.861237432736,
            "unit": "ns/iter",
            "extra": "iterations: 114786\ncpu: 7073.850469569468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34242.35073517197,
            "unit": "ns/iter",
            "extra": "iterations: 24212\ncpu: 34241.834627457516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 224954.06887623572,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 224935.99171413807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182697.6297539146,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 182684.63087248267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187102.7650723045,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 187093.14794215772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185676.28382616787,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 185662.701612903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99223.73498072635,
            "unit": "ns/iter",
            "extra": "iterations: 8822\ncpu: 99223.36204942163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 174677.2513894833,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 174674.71141513472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4959.714082415009,
            "unit": "ns/iter",
            "extra": "iterations: 161620\ncpu: 4959.462319019925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24124.297179915848,
            "unit": "ns/iter",
            "extra": "iterations: 34538\ncpu: 24123.055764664983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18276.645968942128,
            "unit": "ns/iter",
            "extra": "iterations: 45013\ncpu: 18275.80698909206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18800.12281021071,
            "unit": "ns/iter",
            "extra": "iterations: 43954\ncpu: 18800.220685261917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17756.306324847006,
            "unit": "ns/iter",
            "extra": "iterations: 45677\ncpu: 17755.798323007275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50775.96942531638,
            "unit": "ns/iter",
            "extra": "iterations: 16844\ncpu: 50774.66753740194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269932.9240467235,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 269924.4464944643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205252.85398022135,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 205250.80075365095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204312.77917159282,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 204307.9763313607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205662.19920130164,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 205659.4080338272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106265.33362391288,
            "unit": "ns/iter",
            "extra": "iterations: 8030\ncpu: 106262.85180572793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 183734.4733064272,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 183730.7537012102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789311.0224813238,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 789261.6153205653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 432061.64436792186,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 432045.9911460889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1596.2212722694885,
            "unit": "ns/iter",
            "extra": "iterations: 492773\ncpu: 1596.1550247274065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9299.965087395083,
            "unit": "ns/iter",
            "extra": "iterations: 88564\ncpu: 9299.932252382485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6977.496170148605,
            "unit": "ns/iter",
            "extra": "iterations: 118673\ncpu: 6976.944208033849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7053.388851023499,
            "unit": "ns/iter",
            "extra": "iterations: 117374\ncpu: 7053.004072452108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6674.898934891739,
            "unit": "ns/iter",
            "extra": "iterations: 120645\ncpu: 6674.513655766961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33578.20384414485,
            "unit": "ns/iter",
            "extra": "iterations: 24921\ncpu: 33576.349263673066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 257833.77048228664,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 257817.2283556057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192399.63151014614,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 192390.34648071454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192472.85458124135,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 192466.93636562463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191327.01216597517,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 191326.28720399638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98201.27802740672,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 98197.02314086711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184214.4395305018,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 184213.83357786512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 174.42643451553042,
            "unit": "ns/iter",
            "extra": "iterations: 4012731\ncpu: 174.42133549445438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1365.0216926847272,
            "unit": "ns/iter",
            "extra": "iterations: 509711\ncpu: 1364.9758392500898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1119.325093803849,
            "unit": "ns/iter",
            "extra": "iterations: 626573\ncpu: 1119.266709545419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1068.9911055741118,
            "unit": "ns/iter",
            "extra": "iterations: 656591\ncpu: 1068.9292116401218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 825.4363963480093,
            "unit": "ns/iter",
            "extra": "iterations: 849849\ncpu: 825.4002769903816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9360.7138528613,
            "unit": "ns/iter",
            "extra": "iterations: 72938\ncpu: 9360.51303847099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12157.623568800413,
            "unit": "ns/iter",
            "extra": "iterations: 57644\ncpu: 12157.586218860679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2693.235987722885,
            "unit": "ns/iter",
            "extra": "iterations: 259344\ncpu: 2693.190897032523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2704.0246688367115,
            "unit": "ns/iter",
            "extra": "iterations: 264220\ncpu: 2703.93346453714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2672.6863581838556,
            "unit": "ns/iter",
            "extra": "iterations: 261754\ncpu: 2672.6449261520424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5160.096119420652,
            "unit": "ns/iter",
            "extra": "iterations: 136861\ncpu: 5159.884846669247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4962.985009258084,
            "unit": "ns/iter",
            "extra": "iterations: 140420\ncpu: 4962.956843754466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1900.4166578330485,
            "unit": "ns/iter",
            "extra": "iterations: 367923\ncpu: 1900.4055196331926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10080.646559673727,
            "unit": "ns/iter",
            "extra": "iterations: 69412\ncpu: 10080.488964444326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7987.700570476538,
            "unit": "ns/iter",
            "extra": "iterations: 85192\ncpu: 7987.740632923235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7859.5854975805605,
            "unit": "ns/iter",
            "extra": "iterations: 89061\ncpu: 7859.629916573969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7892.709174989128,
            "unit": "ns/iter",
            "extra": "iterations: 89308\ncpu: 7892.59864737758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17649.51320620807,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 17649.413760794112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54079.46265060671,
            "unit": "ns/iter",
            "extra": "iterations: 12865\ncpu: 54077.94014768764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43149.246596443765,
            "unit": "ns/iter",
            "extra": "iterations: 16233\ncpu: 43148.43836629059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43008.72735691396,
            "unit": "ns/iter",
            "extra": "iterations: 16197\ncpu: 43006.562943755096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42992.54165899607,
            "unit": "ns/iter",
            "extra": "iterations: 16287\ncpu: 42992.31902744542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25051.023395190197,
            "unit": "ns/iter",
            "extra": "iterations: 27698\ncpu: 25051.158928442394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42281.915830579215,
            "unit": "ns/iter",
            "extra": "iterations: 16645\ncpu: 42281.61610093128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1874.6109426012115,
            "unit": "ns/iter",
            "extra": "iterations: 371228\ncpu: 1874.620987641031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10118.831807632458,
            "unit": "ns/iter",
            "extra": "iterations: 69367\ncpu: 10118.890827050367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7961.156956531345,
            "unit": "ns/iter",
            "extra": "iterations: 88018\ncpu: 7961.0000227225655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8022.321197595843,
            "unit": "ns/iter",
            "extra": "iterations: 87208\ncpu: 8022.291532886865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7965.580141665856,
            "unit": "ns/iter",
            "extra": "iterations: 88094\ncpu: 7965.447136013858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17392.7989069391,
            "unit": "ns/iter",
            "extra": "iterations: 40071\ncpu: 17392.638067430376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52850.333763273586,
            "unit": "ns/iter",
            "extra": "iterations: 13180\ncpu: 52849.94688922584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 39434.37545735939,
            "unit": "ns/iter",
            "extra": "iterations: 17765\ncpu: 39434.55671263722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 39338.117107426544,
            "unit": "ns/iter",
            "extra": "iterations: 17659\ncpu: 39337.74279404286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40934.03061224366,
            "unit": "ns/iter",
            "extra": "iterations: 16758\ncpu: 40933.70927318291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25393.699276672545,
            "unit": "ns/iter",
            "extra": "iterations: 27650\ncpu: 25393.236889692595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42158.38306356023,
            "unit": "ns/iter",
            "extra": "iterations: 16804\ncpu: 42158.27779100223 ns\nthreads: 1"
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
        "date": 1705953617971,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 558.8433294406736,
            "unit": "ns/iter",
            "extra": "iterations: 1254505\ncpu: 558.8298173383129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5147.057939999513,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5146.740000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10343.522594956861,
            "unit": "ns/iter",
            "extra": "iterations: 81589\ncpu: 10342.97883293091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15035.804668503755,
            "unit": "ns/iter",
            "extra": "iterations: 55521\ncpu: 15035.193890599947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19773.134949166342,
            "unit": "ns/iter",
            "extra": "iterations: 42001\ncpu: 19772.2673269684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24453.085046399243,
            "unit": "ns/iter",
            "extra": "iterations: 34052\ncpu: 24451.394925408196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29723.595077510225,
            "unit": "ns/iter",
            "extra": "iterations: 28319\ncpu: 29721.51205904161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34618.774311100366,
            "unit": "ns/iter",
            "extra": "iterations: 24423\ncpu: 34617.34430659625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39254.30116604104,
            "unit": "ns/iter",
            "extra": "iterations: 21440\ncpu: 39252.57462686569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 537.369962111293,
            "unit": "ns/iter",
            "extra": "iterations: 1306723\ncpu: 537.3463235896207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 378.604727755358,
            "unit": "ns/iter",
            "extra": "iterations: 1723101\ncpu: 378.59719192316624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.4405295087414,
            "unit": "ns/iter",
            "extra": "iterations: 1712984\ncpu: 409.4428202481749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.0857335897444,
            "unit": "ns/iter",
            "extra": "iterations: 1739085\ncpu: 405.0839378178754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 854.4582056219741,
            "unit": "ns/iter",
            "extra": "iterations: 819883\ncpu: 854.4627709075572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1771.512729808612,
            "unit": "ns/iter",
            "extra": "iterations: 455977\ncpu: 1771.4634729383274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10334.265697878664,
            "unit": "ns/iter",
            "extra": "iterations: 79756\ncpu: 10334.22187672399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8241.365921110699,
            "unit": "ns/iter",
            "extra": "iterations: 99076\ncpu: 8241.211797004324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7670.245168258744,
            "unit": "ns/iter",
            "extra": "iterations: 105552\ncpu: 7670.099098074888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7232.411666263579,
            "unit": "ns/iter",
            "extra": "iterations: 111741\ncpu: 7232.090280201536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35028.27036122026,
            "unit": "ns/iter",
            "extra": "iterations: 23476\ncpu: 35027.4578292724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 248023.50127081212,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 248020.3049985881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183603.1618752869,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 183601.68067226917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184404.4177271806,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 184395.26680062537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194561.3835890561,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 194558.83922615106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99008.46626188519,
            "unit": "ns/iter",
            "extra": "iterations: 8729\ncpu: 99006.51850154651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185053.8251703579,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 185049.70187393544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5038.125246820025,
            "unit": "ns/iter",
            "extra": "iterations: 160036\ncpu: 5038.042690394672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 22871.07211168387,
            "unit": "ns/iter",
            "extra": "iterations: 36388\ncpu: 22869.49818621522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18530.309476900038,
            "unit": "ns/iter",
            "extra": "iterations: 45173\ncpu: 18529.150156066662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18527.849604644372,
            "unit": "ns/iter",
            "extra": "iterations: 43758\ncpu: 18527.32071849711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17813.62182540529,
            "unit": "ns/iter",
            "extra": "iterations: 46817\ncpu: 17812.666339150313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50571.26023515202,
            "unit": "ns/iter",
            "extra": "iterations: 16585\ncpu: 50567.741935483864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268117.7244897802,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 268103.7414965981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203846.7652965985,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 203833.4189631012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212303.33596005064,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 212285.86813763998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 193997.2447116518,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 193986.41727900202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107571.45020413448,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 107565.97797847386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187721.48031154933,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 187709.1951536133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 781096.9133333856,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 781077.9999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 439264.9845077512,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 439255.82208895526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1619.3856640219449,
            "unit": "ns/iter",
            "extra": "iterations: 495955\ncpu: 1619.3747416600286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9322.304178714481,
            "unit": "ns/iter",
            "extra": "iterations: 88185\ncpu: 9322.180642966427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6673.057431631661,
            "unit": "ns/iter",
            "extra": "iterations: 122389\ncpu: 6672.982866107256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6899.90090340956,
            "unit": "ns/iter",
            "extra": "iterations: 118551\ncpu: 6899.732604533051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6217.9032278945815,
            "unit": "ns/iter",
            "extra": "iterations: 123579\ncpu: 6217.758680681954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33868.12870968804,
            "unit": "ns/iter",
            "extra": "iterations: 24901\ncpu: 33867.451106381224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 257756.84324009749,
            "unit": "ns/iter",
            "extra": "iterations: 3432\ncpu: 257753.8752913762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191265.58958783324,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 191260.36876355784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 182126.62958916326,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 182114.6853146862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190003.73320199698,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 189993.36835193753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97789.8926496963,
            "unit": "ns/iter",
            "extra": "iterations: 8952\ncpu: 97785.05361930333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185941.92556091186,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 185930.55147829623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 176.8821400867102,
            "unit": "ns/iter",
            "extra": "iterations: 3956307\ncpu: 176.87393824594355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1368.9512432406136,
            "unit": "ns/iter",
            "extra": "iterations: 509837\ncpu: 1368.8861341958323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1088.3168536982653,
            "unit": "ns/iter",
            "extra": "iterations: 719130\ncpu: 1088.2241041258142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1135.2851010796505,
            "unit": "ns/iter",
            "extra": "iterations: 641127\ncpu: 1135.239195978329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 814.0014188365266,
            "unit": "ns/iter",
            "extra": "iterations: 843649\ncpu: 813.9620861282398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9324.860255966276,
            "unit": "ns/iter",
            "extra": "iterations: 75166\ncpu: 9324.436580368756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12202.564395267269,
            "unit": "ns/iter",
            "extra": "iterations: 57116\ncpu: 12201.887387072016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2713.529703354096,
            "unit": "ns/iter",
            "extra": "iterations: 258018\ncpu: 2713.3773612693744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2733.488946683914,
            "unit": "ns/iter",
            "extra": "iterations: 256846\ncpu: 2733.328531493578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2703.903267071835,
            "unit": "ns/iter",
            "extra": "iterations: 256407\ncpu: 2703.740537504827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5014.644263468489,
            "unit": "ns/iter",
            "extra": "iterations: 135561\ncpu: 5014.194347931958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5106.692752066707,
            "unit": "ns/iter",
            "extra": "iterations: 137791\ncpu: 5106.664441073769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1889.5870851516174,
            "unit": "ns/iter",
            "extra": "iterations: 370798\ncpu: 1889.524215340977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9988.12108624806,
            "unit": "ns/iter",
            "extra": "iterations: 70297\ncpu: 9987.825938517959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8062.376325677687,
            "unit": "ns/iter",
            "extra": "iterations: 87031\ncpu: 8062.246785628063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7891.169482796089,
            "unit": "ns/iter",
            "extra": "iterations: 89307\ncpu: 7890.985029169013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7941.14809520196,
            "unit": "ns/iter",
            "extra": "iterations: 89537\ncpu: 7940.967421289593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17629.148260211594,
            "unit": "ns/iter",
            "extra": "iterations: 39660\ncpu: 17628.769541099336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52481.563331004865,
            "unit": "ns/iter",
            "extra": "iterations: 12861\ncpu: 52479.185133347986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42237.85950861156,
            "unit": "ns/iter",
            "extra": "iterations: 16606\ncpu: 42237.016740937026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42663.739679868086,
            "unit": "ns/iter",
            "extra": "iterations: 16618\ncpu: 42660.55482007523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40821.70684766259,
            "unit": "ns/iter",
            "extra": "iterations: 16575\ncpu: 40819.78883861294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25263.502309471955,
            "unit": "ns/iter",
            "extra": "iterations: 27712\ncpu: 25262.777857967776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42292.8530336005,
            "unit": "ns/iter",
            "extra": "iterations: 16548\ncpu: 42292.05946337928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1888.7659218605834,
            "unit": "ns/iter",
            "extra": "iterations: 367702\ncpu: 1888.7310920255804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9996.038972466922,
            "unit": "ns/iter",
            "extra": "iterations: 69331\ncpu: 9995.432057809605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7920.6689884439165,
            "unit": "ns/iter",
            "extra": "iterations: 88438\ncpu: 7920.488930097842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8008.236106980863,
            "unit": "ns/iter",
            "extra": "iterations: 87418\ncpu: 8007.855361596002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7797.53788992917,
            "unit": "ns/iter",
            "extra": "iterations: 89760\ncpu: 7797.189171122913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17357.343897906852,
            "unit": "ns/iter",
            "extra": "iterations: 40355\ncpu: 17356.43662495345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52990.69348222338,
            "unit": "ns/iter",
            "extra": "iterations: 13164\ncpu: 52987.55697356486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44185.56411631873,
            "unit": "ns/iter",
            "extra": "iterations: 16782\ncpu: 44184.70384936239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41564.93001841934,
            "unit": "ns/iter",
            "extra": "iterations: 16833\ncpu: 41563.399275233125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41518.9874232404,
            "unit": "ns/iter",
            "extra": "iterations: 16936\ncpu: 41518.73523854541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25401.721033157293,
            "unit": "ns/iter",
            "extra": "iterations: 27566\ncpu: 25401.030254661342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41094.37730257244,
            "unit": "ns/iter",
            "extra": "iterations: 17209\ncpu: 41094.02638154446 ns\nthreads: 1"
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
        "date": 1705955049915,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 587.8260947191636,
            "unit": "ns/iter",
            "extra": "iterations: 1193000\ncpu: 587.7953059513832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5237.909610000315,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5237.946999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10110.285337350158,
            "unit": "ns/iter",
            "extra": "iterations: 83000\ncpu: 10109.738554216867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15264.192976997962,
            "unit": "ns/iter",
            "extra": "iterations: 54649\ncpu: 15263.69924426796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19290.7504160108,
            "unit": "ns/iter",
            "extra": "iterations: 42667\ncpu: 19290.599292193034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24170.19315166173,
            "unit": "ns/iter",
            "extra": "iterations: 35045\ncpu: 24169.741760593515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28747.598434269657,
            "unit": "ns/iter",
            "extra": "iterations: 29507\ncpu: 28746.934625682054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34226.21794819576,
            "unit": "ns/iter",
            "extra": "iterations: 24593\ncpu: 34224.43378197048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38659.3802959283,
            "unit": "ns/iter",
            "extra": "iterations: 21762\ncpu: 38659.089238121516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 534.6587955256304,
            "unit": "ns/iter",
            "extra": "iterations: 1306545\ncpu: 534.6433532714141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.9563757571864,
            "unit": "ns/iter",
            "extra": "iterations: 1725348\ncpu: 405.9590297145857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.0477684927878,
            "unit": "ns/iter",
            "extra": "iterations: 1710772\ncpu: 409.04159058016006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.7066153763818,
            "unit": "ns/iter",
            "extra": "iterations: 1729501\ncpu: 403.7036116197679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 861.0549066642856,
            "unit": "ns/iter",
            "extra": "iterations: 812069\ncpu: 861.0611906131131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1803.7487469072626,
            "unit": "ns/iter",
            "extra": "iterations: 453877\ncpu: 1803.7611511488788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10225.792491026144,
            "unit": "ns/iter",
            "extra": "iterations: 80517\ncpu: 10225.536222164263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7735.993253252905,
            "unit": "ns/iter",
            "extra": "iterations: 105977\ncpu: 7735.912509318057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7681.370879199118,
            "unit": "ns/iter",
            "extra": "iterations: 105835\ncpu: 7681.3398214201125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6755.11456290348,
            "unit": "ns/iter",
            "extra": "iterations: 114723\ncpu: 6754.613285914766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34074.882990561484,
            "unit": "ns/iter",
            "extra": "iterations: 24263\ncpu: 34072.88051766072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256733.65150236283,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 256723.30805953383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 191255.4440489276,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 191252.48053392654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 177462.3690248521,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 177458.23241979996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184368.14928859752,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 184364.40857931573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98796.6135847273,
            "unit": "ns/iter",
            "extra": "iterations: 8804\ncpu: 98793.82099045899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179123.1816700549,
            "unit": "ns/iter",
            "extra": "iterations: 4910\ncpu: 179120.0814663958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5068.669523121024,
            "unit": "ns/iter",
            "extra": "iterations: 161739\ncpu: 5068.472662746783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24281.47359687967,
            "unit": "ns/iter",
            "extra": "iterations: 34352\ncpu: 24279.797391709355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18525.511961616765,
            "unit": "ns/iter",
            "extra": "iterations: 45228\ncpu: 18525.433359865576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17882.609862921974,
            "unit": "ns/iter",
            "extra": "iterations: 47491\ncpu: 17882.516687372317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18198.294348647418,
            "unit": "ns/iter",
            "extra": "iterations: 45582\ncpu: 18198.229564301724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50148.844337930575,
            "unit": "ns/iter",
            "extra": "iterations: 16690\ncpu: 50148.7177950871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263127.06756758166,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 263121.74447174364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204279.40910157334,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 204278.53624208336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 198847.48627542704,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 198844.20255560736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203705.11524946766,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 203704.61466385642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108920.26941839163,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 108919.67479674835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191744.91760976994,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 191740.8555907649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 794247.9272574977,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 794222.7424749173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 436223.3967065902,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 436221.95608782384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1617.7813145710575,
            "unit": "ns/iter",
            "extra": "iterations: 494610\ncpu: 1617.7725885040802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9388.583015452557,
            "unit": "ns/iter",
            "extra": "iterations: 87821\ncpu: 9388.549435784109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6934.322030891059,
            "unit": "ns/iter",
            "extra": "iterations: 118352\ncpu: 6934.21657428686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7390.211300553767,
            "unit": "ns/iter",
            "extra": "iterations: 111145\ncpu: 7390.188492509772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6507.117868981444,
            "unit": "ns/iter",
            "extra": "iterations: 117953\ncpu: 6507.056200350977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33394.363025944054,
            "unit": "ns/iter",
            "extra": "iterations: 25169\ncpu: 33394.21907902588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 255996.91222939314,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 255993.70977179596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190851.84240438402,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 190849.39890710433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 187361.65244969536,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 187358.13648294014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189657.2638223716,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 189654.5494122758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97742.23064066816,
            "unit": "ns/iter",
            "extra": "iterations: 8975\ncpu: 97740.03342618377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183873.97477590345,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 183873.6293516788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 174.92593845577363,
            "unit": "ns/iter",
            "extra": "iterations: 4005250\ncpu: 174.92468634916727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1370.2689066171874,
            "unit": "ns/iter",
            "extra": "iterations: 515309\ncpu: 1370.2580393511364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1087.2552152327182,
            "unit": "ns/iter",
            "extra": "iterations: 646184\ncpu: 1087.2468213388051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1113.9810954836073,
            "unit": "ns/iter",
            "extra": "iterations: 627522\ncpu: 1113.9650880765998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 830.570750523345,
            "unit": "ns/iter",
            "extra": "iterations: 843598\ncpu: 830.5760563680815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9429.848496205292,
            "unit": "ns/iter",
            "extra": "iterations: 74711\ncpu: 9429.760008566305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12154.954862799625,
            "unit": "ns/iter",
            "extra": "iterations: 57580\ncpu: 12154.722125738077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2790.743705819926,
            "unit": "ns/iter",
            "extra": "iterations: 260439\ncpu: 2790.6504018215146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2719.3931775707247,
            "unit": "ns/iter",
            "extra": "iterations: 257914\ncpu: 2719.365757578115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2555.0035066782734,
            "unit": "ns/iter",
            "extra": "iterations: 259790\ncpu: 2554.9759421070835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5090.927674108671,
            "unit": "ns/iter",
            "extra": "iterations: 136438\ncpu: 5090.541491373419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5035.002890463847,
            "unit": "ns/iter",
            "extra": "iterations: 139078\ncpu: 5034.789111146266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1865.26763336851,
            "unit": "ns/iter",
            "extra": "iterations: 367159\ncpu: 1865.2548350986817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9943.898648168972,
            "unit": "ns/iter",
            "extra": "iterations: 70497\ncpu: 9943.963572918026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7954.236604935627,
            "unit": "ns/iter",
            "extra": "iterations: 84994\ncpu: 7954.148528131361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7891.116043552473,
            "unit": "ns/iter",
            "extra": "iterations: 89363\ncpu: 7890.654969058771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7854.786276258006,
            "unit": "ns/iter",
            "extra": "iterations: 88591\ncpu: 7854.531498684959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17653.357632932264,
            "unit": "ns/iter",
            "extra": "iterations: 39644\ncpu: 17652.17182928076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53777.33917858989,
            "unit": "ns/iter",
            "extra": "iterations: 13002\ncpu: 53777.22658052529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43081.6992844516,
            "unit": "ns/iter",
            "extra": "iterations: 16351\ncpu: 43080.19692985183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42525.44919070268,
            "unit": "ns/iter",
            "extra": "iterations: 16434\ncpu: 42523.99294146214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42800.89743277101,
            "unit": "ns/iter",
            "extra": "iterations: 16399\ncpu: 42798.54259406038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25282.268304136338,
            "unit": "ns/iter",
            "extra": "iterations: 27685\ncpu: 25281.40509301085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42859.46176239081,
            "unit": "ns/iter",
            "extra": "iterations: 16489\ncpu: 42856.74692219097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1886.1574902345244,
            "unit": "ns/iter",
            "extra": "iterations: 369915\ncpu: 1886.0978873524982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10100.087197352774,
            "unit": "ns/iter",
            "extra": "iterations: 68603\ncpu: 10099.440257714794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7968.451694886461,
            "unit": "ns/iter",
            "extra": "iterations: 87351\ncpu: 7968.156060033586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7959.561485079962,
            "unit": "ns/iter",
            "extra": "iterations: 86891\ncpu: 7959.614919842203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7826.549471282706,
            "unit": "ns/iter",
            "extra": "iterations: 88516\ncpu: 7826.279994577265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17361.851419902836,
            "unit": "ns/iter",
            "extra": "iterations: 40214\ncpu: 17361.2523001938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 49601.96566069272,
            "unit": "ns/iter",
            "extra": "iterations: 14182\ncpu: 49601.09998589695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 38957.25472486862,
            "unit": "ns/iter",
            "extra": "iterations: 17937\ncpu: 38956.34721525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 39175.86477227778,
            "unit": "ns/iter",
            "extra": "iterations: 17807\ncpu: 39174.56056606896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 39553.92363986478,
            "unit": "ns/iter",
            "extra": "iterations: 17627\ncpu: 39550.32053100351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24512.974795781833,
            "unit": "ns/iter",
            "extra": "iterations: 28646\ncpu: 24512.204147175922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 39191.85248914232,
            "unit": "ns/iter",
            "extra": "iterations: 17958\ncpu: 39189.570108029744 ns\nthreads: 1"
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
        "date": 1705957075332,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 577.3793338593779,
            "unit": "ns/iter",
            "extra": "iterations: 1240609\ncpu: 577.3616022453489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5210.999380000203,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5211.008000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10209.199846339476,
            "unit": "ns/iter",
            "extra": "iterations: 80697\ncpu: 10208.565374177479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14859.416767597122,
            "unit": "ns/iter",
            "extra": "iterations: 56144\ncpu: 14858.506697064693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19855.016905932403,
            "unit": "ns/iter",
            "extra": "iterations: 42352\ncpu: 19854.047034378535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24125.89991552742,
            "unit": "ns/iter",
            "extra": "iterations: 34331\ncpu: 24125.026943578676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29383.55271174044,
            "unit": "ns/iter",
            "extra": "iterations: 28561\ncpu: 29381.523756171024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34546.09048915308,
            "unit": "ns/iter",
            "extra": "iterations: 24246\ncpu: 34543.61131733068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39585.72934852769,
            "unit": "ns/iter",
            "extra": "iterations: 21766\ncpu: 39584.04392171276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.9426099531486,
            "unit": "ns/iter",
            "extra": "iterations: 1295939\ncpu: 538.9424193577023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.16299978949246,
            "unit": "ns/iter",
            "extra": "iterations: 1714947\ncpu: 409.14558875580406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 421.9652073122791,
            "unit": "ns/iter",
            "extra": "iterations: 1660780\ncpu: 421.94511012897584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.1918796885157,
            "unit": "ns/iter",
            "extra": "iterations: 1737224\ncpu: 403.16574028449986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 853.0107382631506,
            "unit": "ns/iter",
            "extra": "iterations: 819965\ncpu: 852.9914081698616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1752.0800744264877,
            "unit": "ns/iter",
            "extra": "iterations: 456288\ncpu: 1752.0059699137353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9789.870614610321,
            "unit": "ns/iter",
            "extra": "iterations: 83858\ncpu: 9789.699253499974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7637.4971728634155,
            "unit": "ns/iter",
            "extra": "iterations: 106645\ncpu: 7637.035022738994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7799.172800611798,
            "unit": "ns/iter",
            "extra": "iterations: 104745\ncpu: 7798.703518067672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6757.059093684711,
            "unit": "ns/iter",
            "extra": "iterations: 119539\ncpu: 6756.620015225158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34293.948388969555,
            "unit": "ns/iter",
            "extra": "iterations: 24084\ncpu: 34292.50954990863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240389.50044052905,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 240378.76651982396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 186435.74079005394,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 186433.7993786067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185620.4191522787,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 185596.90513567996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196373.19592018242,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 196365.59067473683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100813.0799168502,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 100808.76544635663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188307.28098106448,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 188303.95869191046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5021.866856779093,
            "unit": "ns/iter",
            "extra": "iterations: 160256\ncpu: 5021.751447683697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23775.732161983615,
            "unit": "ns/iter",
            "extra": "iterations: 34547\ncpu: 23773.94563927404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18539.902621978075,
            "unit": "ns/iter",
            "extra": "iterations: 44394\ncpu: 18539.0705951255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18131.58759611715,
            "unit": "ns/iter",
            "extra": "iterations: 45647\ncpu: 18130.731482901356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17419.37090825267,
            "unit": "ns/iter",
            "extra": "iterations: 47718\ncpu: 17418.512930131168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49303.86594440285,
            "unit": "ns/iter",
            "extra": "iterations: 16799\ncpu: 49301.28579082071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 255913.5813668337,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 255900.2145265095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205090.24588623235,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 205080.37141513938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202425.0801046038,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 202410.62514856103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 193916.8228584444,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 193907.15723551784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107100.20722950585,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 107093.99603862295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 186786.86252151462,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 186775.17211704075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 779280.4991830394,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 779220.5882352955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 430889.870262377,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 430878.8143828946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1593.7439585882526,
            "unit": "ns/iter",
            "extra": "iterations: 492807\ncpu: 1593.707678665285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9317.683564525161,
            "unit": "ns/iter",
            "extra": "iterations: 88887\ncpu: 9317.366994048663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7186.8987855666655,
            "unit": "ns/iter",
            "extra": "iterations: 114045\ncpu: 7186.520233241221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7251.928192190735,
            "unit": "ns/iter",
            "extra": "iterations: 113762\ncpu: 7251.469735060887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6185.504921406523,
            "unit": "ns/iter",
            "extra": "iterations: 120494\ncpu: 6185.131209852754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33660.05641703492,
            "unit": "ns/iter",
            "extra": "iterations: 24957\ncpu: 33658.58476579715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254770.32908826234,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 254741.67872648395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191733.12600827325,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 191720.60170045844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192814.5169007844,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 192802.65583845405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190714.33985224573,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 190705.91047370736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97322.56025370088,
            "unit": "ns/iter",
            "extra": "iterations: 8987\ncpu: 97315.63369311228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184269.93651790754,
            "unit": "ns/iter",
            "extra": "iterations: 4773\ncpu: 184260.19275089056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 174.46723637485502,
            "unit": "ns/iter",
            "extra": "iterations: 4009187\ncpu: 174.46068242763332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1335.2021020643579,
            "unit": "ns/iter",
            "extra": "iterations: 524532\ncpu: 1335.1355112748104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1119.307642374851,
            "unit": "ns/iter",
            "extra": "iterations: 651643\ncpu: 1119.2289336338993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1061.2479013911252,
            "unit": "ns/iter",
            "extra": "iterations: 659008\ncpu: 1061.1859036612548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 844.400221486663,
            "unit": "ns/iter",
            "extra": "iterations: 830750\ncpu: 844.3798976828233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9833.047766924643,
            "unit": "ns/iter",
            "extra": "iterations: 70844\ncpu: 9832.748009711484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12385.092178078472,
            "unit": "ns/iter",
            "extra": "iterations: 56380\ncpu: 12384.31713373533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2789.6899847748086,
            "unit": "ns/iter",
            "extra": "iterations: 250249\ncpu: 2789.474483414519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2588.4183609832426,
            "unit": "ns/iter",
            "extra": "iterations: 248527\ncpu: 2588.226228940936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2729.170499180979,
            "unit": "ns/iter",
            "extra": "iterations: 255098\ncpu: 2729.0061074567543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5117.242444874571,
            "unit": "ns/iter",
            "extra": "iterations: 136596\ncpu: 5117.029781252771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5023.755457951059,
            "unit": "ns/iter",
            "extra": "iterations: 139338\ncpu: 5023.533422325547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1875.2675616683223,
            "unit": "ns/iter",
            "extra": "iterations: 373854\ncpu: 1875.229367614096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10030.372756781027,
            "unit": "ns/iter",
            "extra": "iterations: 69933\ncpu: 10030.003002874111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7989.447818055204,
            "unit": "ns/iter",
            "extra": "iterations: 87147\ncpu: 7988.976097857709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7901.386192345773,
            "unit": "ns/iter",
            "extra": "iterations: 88632\ncpu: 7900.99399765317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7833.4524758111975,
            "unit": "ns/iter",
            "extra": "iterations: 89607\ncpu: 7832.908143337015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17743.1196596391,
            "unit": "ns/iter",
            "extra": "iterations: 39370\ncpu: 17742.745745491644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53609.162014187976,
            "unit": "ns/iter",
            "extra": "iterations: 12968\ncpu: 53608.17396668769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43364.41619458277,
            "unit": "ns/iter",
            "extra": "iterations: 16240\ncpu: 43364.359605910984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43331.00407583033,
            "unit": "ns/iter",
            "extra": "iterations: 16193\ncpu: 43328.5802507253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42929.86507547074,
            "unit": "ns/iter",
            "extra": "iterations: 16298\ncpu: 42927.55552828581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24758.1898143097,
            "unit": "ns/iter",
            "extra": "iterations: 27627\ncpu: 24757.08907952355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43123.136138920265,
            "unit": "ns/iter",
            "extra": "iterations: 16182\ncpu: 43120.4301075263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1883.1289303415158,
            "unit": "ns/iter",
            "extra": "iterations: 369688\ncpu: 1883.0127026032553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10172.821366452174,
            "unit": "ns/iter",
            "extra": "iterations: 69567\ncpu: 10172.146276251679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8071.899582791835,
            "unit": "ns/iter",
            "extra": "iterations: 87007\ncpu: 8071.562058225217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8108.23960278924,
            "unit": "ns/iter",
            "extra": "iterations: 86201\ncpu: 8108.229602904833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8052.485145443522,
            "unit": "ns/iter",
            "extra": "iterations: 87044\ncpu: 8051.92201645151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17549.830164130424,
            "unit": "ns/iter",
            "extra": "iterations: 39968\ncpu: 17548.541333066314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54021.46290685927,
            "unit": "ns/iter",
            "extra": "iterations: 12873\ncpu: 54018.51938165189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42490.51290459423,
            "unit": "ns/iter",
            "extra": "iterations: 16467\ncpu: 42488.21886196615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41368.272345092635,
            "unit": "ns/iter",
            "extra": "iterations: 16413\ncpu: 41290.76951197183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42084.91044775593,
            "unit": "ns/iter",
            "extra": "iterations: 16616\ncpu: 42082.86591237365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24988.820707161693,
            "unit": "ns/iter",
            "extra": "iterations: 27971\ncpu: 24987.83740302469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42000.837235160565,
            "unit": "ns/iter",
            "extra": "iterations: 17086\ncpu: 41999.43228374083 ns\nthreads: 1"
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
        "date": 1705958543015,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 561.5171001527791,
            "unit": "ns/iter",
            "extra": "iterations: 1246714\ncpu: 561.4967025316151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5144.901820001451,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5144.759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9963.907552675275,
            "unit": "ns/iter",
            "extra": "iterations: 83626\ncpu: 9963.407313514937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14800.28623246196,
            "unit": "ns/iter",
            "extra": "iterations: 56517\ncpu: 14799.380717306292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19973.915222848,
            "unit": "ns/iter",
            "extra": "iterations: 42653\ncpu: 19972.484936581244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24253.36132397064,
            "unit": "ns/iter",
            "extra": "iterations: 34321\ncpu: 24251.729261967885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29175.132579826946,
            "unit": "ns/iter",
            "extra": "iterations: 28843\ncpu: 29174.766841174613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33835.34688613761,
            "unit": "ns/iter",
            "extra": "iterations: 24423\ncpu: 33834.49207714038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38481.37713357018,
            "unit": "ns/iter",
            "extra": "iterations: 22146\ncpu: 38480.82723742438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 499.3425785356251,
            "unit": "ns/iter",
            "extra": "iterations: 1293680\ncpu: 499.30593346113346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 403.79851679249737,
            "unit": "ns/iter",
            "extra": "iterations: 1738125\ncpu: 403.7956993887092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 414.15083079003614,
            "unit": "ns/iter",
            "extra": "iterations: 1693328\ncpu: 414.14185556489855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.69857037460457,
            "unit": "ns/iter",
            "extra": "iterations: 1721430\ncpu: 403.68013802478174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 856.2438117680127,
            "unit": "ns/iter",
            "extra": "iterations: 819903\ncpu: 856.2229922320083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1751.0002295987626,
            "unit": "ns/iter",
            "extra": "iterations: 457319\ncpu: 1750.970766576503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9602.292827883515,
            "unit": "ns/iter",
            "extra": "iterations: 84466\ncpu: 9602.030402765602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7760.1220912017825,
            "unit": "ns/iter",
            "extra": "iterations: 105413\ncpu: 7759.7250813467235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7989.193801099435,
            "unit": "ns/iter",
            "extra": "iterations: 99437\ncpu: 7988.316220320384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7126.162006243094,
            "unit": "ns/iter",
            "extra": "iterations: 107644\ncpu: 7125.853740106247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34324.54373316819,
            "unit": "ns/iter",
            "extra": "iterations: 24135\ncpu: 34323.23596436709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244321.43350169464,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 244316.72278338962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 180756.77151138213,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 180745.31876950545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191625.70586925777,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 191616.31332291925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194870.4754319196,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 194858.94099169862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99785.58071902592,
            "unit": "ns/iter",
            "extra": "iterations: 8734\ncpu: 99781.26860545001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186829.09502262037,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 186813.4453781514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5038.293166739826,
            "unit": "ns/iter",
            "extra": "iterations: 163992\ncpu: 5038.192106932031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23788.41405668982,
            "unit": "ns/iter",
            "extra": "iterations: 34930\ncpu: 23786.78499856858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18586.443770875856,
            "unit": "ns/iter",
            "extra": "iterations: 43714\ncpu: 18585.47833645972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18387.147381026312,
            "unit": "ns/iter",
            "extra": "iterations: 45094\ncpu: 18385.83403557013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18121.27487857843,
            "unit": "ns/iter",
            "extra": "iterations: 46737\ncpu: 18120.384277981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50070.31607546547,
            "unit": "ns/iter",
            "extra": "iterations: 16379\ncpu: 50066.481470175015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 252553.6716923223,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 252535.13846153798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203625.1878688066,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 203613.68893084722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206446.63321468837,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 206432.88256227778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205088.0438162642,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 205076.4193168437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109951.3523485792,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 109941.85870797138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196955.07273976153,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 196944.21753097727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 780094.3560730658,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 780035.6905158084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 460979.463971034,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 460976.4126490409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1625.267693138983,
            "unit": "ns/iter",
            "extra": "iterations: 496068\ncpu: 1625.2056169718685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9376.7335900797,
            "unit": "ns/iter",
            "extra": "iterations: 88285\ncpu: 9376.55773914028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7295.451776785811,
            "unit": "ns/iter",
            "extra": "iterations: 112394\ncpu: 7295.332491058205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7381.898990987632,
            "unit": "ns/iter",
            "extra": "iterations: 111297\ncpu: 7381.87102976725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6935.829144154123,
            "unit": "ns/iter",
            "extra": "iterations: 118082\ncpu: 6935.654883894237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33757.821560732475,
            "unit": "ns/iter",
            "extra": "iterations: 24860\ncpu: 33757.6709573611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 239280.72964791232,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 239271.56215621464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 193941.39237177823,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 193939.98246383082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 181808.77546549172,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 181793.93209200545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192306.79716777467,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 192298.77995642708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96005.56715075657,
            "unit": "ns/iter",
            "extra": "iterations: 8883\ncpu: 95999.94371270953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186184.21141292126,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 186173.08907138451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 175.03666524484564,
            "unit": "ns/iter",
            "extra": "iterations: 3973845\ncpu: 175.0205405595836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1372.0138777125162,
            "unit": "ns/iter",
            "extra": "iterations: 510747\ncpu: 1371.9448180801865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1022.3857666269513,
            "unit": "ns/iter",
            "extra": "iterations: 685614\ncpu: 1022.34143410141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1011.1113293332076,
            "unit": "ns/iter",
            "extra": "iterations: 693483\ncpu: 1011.037040561911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 834.5608742939462,
            "unit": "ns/iter",
            "extra": "iterations: 839443\ncpu: 834.5556517833811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9485.949883528194,
            "unit": "ns/iter",
            "extra": "iterations: 74267\ncpu: 9484.931396178707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12330.415442403091,
            "unit": "ns/iter",
            "extra": "iterations: 56973\ncpu: 12329.628069436343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2725.8152552130005,
            "unit": "ns/iter",
            "extra": "iterations: 250026\ncpu: 2725.6245350483587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2776.974216754898,
            "unit": "ns/iter",
            "extra": "iterations: 254933\ncpu: 2776.8213609065883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2752.49780280085,
            "unit": "ns/iter",
            "extra": "iterations: 253277\ncpu: 2752.2728080323163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5185.848775672275,
            "unit": "ns/iter",
            "extra": "iterations: 134727\ncpu: 5185.717042612103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5221.668889988812,
            "unit": "ns/iter",
            "extra": "iterations: 135233\ncpu: 5221.489577248158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1900.5432505110086,
            "unit": "ns/iter",
            "extra": "iterations: 360331\ncpu: 1900.3760431381313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9949.855204452746,
            "unit": "ns/iter",
            "extra": "iterations: 70603\ncpu: 9949.786836253425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8042.560288427228,
            "unit": "ns/iter",
            "extra": "iterations: 86816\ncpu: 8041.7077497236305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8066.877093109623,
            "unit": "ns/iter",
            "extra": "iterations: 86952\ncpu: 8066.405603091333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7974.697321019939,
            "unit": "ns/iter",
            "extra": "iterations: 87720\ncpu: 7974.2316461467835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17668.345082358017,
            "unit": "ns/iter",
            "extra": "iterations: 39521\ncpu: 17667.49070114653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54308.15932651953,
            "unit": "ns/iter",
            "extra": "iterations: 12829\ncpu: 54307.28038038891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42289.95108603319,
            "unit": "ns/iter",
            "extra": "iterations: 17541\ncpu: 42288.752066586974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42559.68197432783,
            "unit": "ns/iter",
            "extra": "iterations: 16593\ncpu: 42559.531127583236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42598.28828224613,
            "unit": "ns/iter",
            "extra": "iterations: 16411\ncpu: 42597.635732131115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25301.910033603996,
            "unit": "ns/iter",
            "extra": "iterations: 27677\ncpu: 25300.585323553645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40528.94387879143,
            "unit": "ns/iter",
            "extra": "iterations: 16500\ncpu: 40525.818181818475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1881.1210457814418,
            "unit": "ns/iter",
            "extra": "iterations: 374189\ncpu: 1881.0146744025194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9966.520074351432,
            "unit": "ns/iter",
            "extra": "iterations: 69940\ncpu: 9965.727766657064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7986.588172177625,
            "unit": "ns/iter",
            "extra": "iterations: 87607\ncpu: 7986.53760544253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7973.244197467095,
            "unit": "ns/iter",
            "extra": "iterations: 87548\ncpu: 7972.421985653508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8006.825301135996,
            "unit": "ns/iter",
            "extra": "iterations: 87419\ncpu: 8006.3716125783985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17401.65665783424,
            "unit": "ns/iter",
            "extra": "iterations: 39998\ncpu: 17400.860043002336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52773.184892470796,
            "unit": "ns/iter",
            "extra": "iterations: 13159\ncpu: 52769.37457253667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41482.08425587954,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 41479.55239064121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41552.43609425928,
            "unit": "ns/iter",
            "extra": "iterations: 16806\ncpu: 41549.375223134426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41456.46497985086,
            "unit": "ns/iter",
            "extra": "iterations: 16876\ncpu: 41452.376155487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25052.97887298261,
            "unit": "ns/iter",
            "extra": "iterations: 27879\ncpu: 25051.84188815988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41699.30135545744,
            "unit": "ns/iter",
            "extra": "iterations: 17116\ncpu: 41697.38256602005 ns\nthreads: 1"
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
        "date": 1705960008645,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.615922474805,
            "unit": "ns/iter",
            "extra": "iterations: 1248110\ncpu: 559.5832098132377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5148.354039999958,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5148.198999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10144.991459967741,
            "unit": "ns/iter",
            "extra": "iterations: 82084\ncpu: 10144.359436674624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15147.331523705627,
            "unit": "ns/iter",
            "extra": "iterations: 55260\ncpu: 15146.44951140066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19859.46626255096,
            "unit": "ns/iter",
            "extra": "iterations: 42727\ncpu: 19858.426755915465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24560.230591714302,
            "unit": "ns/iter",
            "extra": "iterations: 33800\ncpu: 24557.736686390526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29427.234327685313,
            "unit": "ns/iter",
            "extra": "iterations: 28729\ncpu: 29426.078178843687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34397.02535433972,
            "unit": "ns/iter",
            "extra": "iterations: 24059\ncpu: 34395.53597406375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39751.96223218985,
            "unit": "ns/iter",
            "extra": "iterations: 21844\ncpu: 39750.09155832264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.5032264228504,
            "unit": "ns/iter",
            "extra": "iterations: 1308260\ncpu: 535.4866769602373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 433.62013206886763,
            "unit": "ns/iter",
            "extra": "iterations: 1749845\ncpu: 433.5946898153828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.37492557871724,
            "unit": "ns/iter",
            "extra": "iterations: 1649394\ncpu: 424.35500553536616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 392.81032911449574,
            "unit": "ns/iter",
            "extra": "iterations: 1678808\ncpu: 392.77725624371584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 841.3627934256908,
            "unit": "ns/iter",
            "extra": "iterations: 801310\ncpu: 841.3371853589738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1762.9918577408002,
            "unit": "ns/iter",
            "extra": "iterations: 457981\ncpu: 1762.9967182044657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9776.594158505646,
            "unit": "ns/iter",
            "extra": "iterations: 82924\ncpu: 9776.43022526651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7940.280188081206,
            "unit": "ns/iter",
            "extra": "iterations: 99319\ncpu: 7940.189691801154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7972.555585868316,
            "unit": "ns/iter",
            "extra": "iterations: 102634\ncpu: 7972.273320731948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6775.734239791579,
            "unit": "ns/iter",
            "extra": "iterations: 116718\ncpu: 6775.633578368392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33930.633722587314,
            "unit": "ns/iter",
            "extra": "iterations: 24577\ncpu: 33930.23151727222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243550.1352941273,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243548.2352941174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192896.83524737,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 192890.34893992989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184371.3076922954,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 184369.65196187134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194165.5472868145,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 194157.16500553745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99090.59179754279,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99089.21025872769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184275.69222599396,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 184261.66100254867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5070.644752076242,
            "unit": "ns/iter",
            "extra": "iterations: 159787\ncpu: 5070.496974096785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24285.36759272736,
            "unit": "ns/iter",
            "extra": "iterations: 34375\ncpu: 24284.354909090922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18573.926948267628,
            "unit": "ns/iter",
            "extra": "iterations: 44886\ncpu: 18572.753196987953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18465.17315539179,
            "unit": "ns/iter",
            "extra": "iterations: 44359\ncpu: 18464.40632115239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17228.44118577406,
            "unit": "ns/iter",
            "extra": "iterations: 47429\ncpu: 17227.77414661917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50647.107179833925,
            "unit": "ns/iter",
            "extra": "iterations: 16421\ncpu: 50644.07770537711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267568.51678473206,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 267546.6276563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205405.48259532065,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 205396.2822637945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206094.4818073563,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 206081.92627823987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 211647.2829232901,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 211634.10516160118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110482.86573426113,
            "unit": "ns/iter",
            "extra": "iterations: 7865\ncpu: 110475.8041958039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 198235.89248051544,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 198222.21458046755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789034.3733332845,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 788976.7499999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 435733.16923844087,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 435705.02737680456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1596.9612640863163,
            "unit": "ns/iter",
            "extra": "iterations: 495251\ncpu: 1596.891273313944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9076.240620260618,
            "unit": "ns/iter",
            "extra": "iterations: 90994\ncpu: 9075.941270852989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6964.184239904009,
            "unit": "ns/iter",
            "extra": "iterations: 117347\ncpu: 6963.760471081502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6911.642963460483,
            "unit": "ns/iter",
            "extra": "iterations: 118915\ncpu: 6911.287894714666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6252.451569434903,
            "unit": "ns/iter",
            "extra": "iterations: 131353\ncpu: 6251.883854955716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34911.91978458002,
            "unit": "ns/iter",
            "extra": "iterations: 24696\ncpu: 34910.10689990297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261617.04234045622,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 261615.17200823323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 195088.4538241139,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 195086.37866431646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196236.39928938253,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 196223.96180324294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192888.24117516328,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 192886.8669151497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98614.4361642561,
            "unit": "ns/iter",
            "extra": "iterations: 8937\ncpu: 98611.91675058722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 187046.3334765667,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 187042.50107434476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 175.11599514902477,
            "unit": "ns/iter",
            "extra": "iterations: 3990960\ncpu: 175.11052478601638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1373.0509810688802,
            "unit": "ns/iter",
            "extra": "iterations: 509954\ncpu: 1373.0522753032578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1122.7526831295102,
            "unit": "ns/iter",
            "extra": "iterations: 620544\ncpu: 1122.737952506184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1123.1868062346462,
            "unit": "ns/iter",
            "extra": "iterations: 622779\ncpu: 1123.1740312374086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 833.9241804937424,
            "unit": "ns/iter",
            "extra": "iterations: 840140\ncpu: 833.9175613588171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9324.924202215978,
            "unit": "ns/iter",
            "extra": "iterations: 74989\ncpu: 9324.65961674377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12194.847046247563,
            "unit": "ns/iter",
            "extra": "iterations: 57063\ncpu: 12194.719871019683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2735.1920072975445,
            "unit": "ns/iter",
            "extra": "iterations: 255433\ncpu: 2735.0855214478947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2773.386540392547,
            "unit": "ns/iter",
            "extra": "iterations: 250988\ncpu: 2773.3831896345637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2749.3518702247966,
            "unit": "ns/iter",
            "extra": "iterations: 256012\ncpu: 2749.288705216967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5167.585661230174,
            "unit": "ns/iter",
            "extra": "iterations: 136246\ncpu: 5167.48014620612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5192.054982307011,
            "unit": "ns/iter",
            "extra": "iterations: 134516\ncpu: 5191.948913140458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1872.8015647037553,
            "unit": "ns/iter",
            "extra": "iterations: 372978\ncpu: 1872.7219836022546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9971.443713898852,
            "unit": "ns/iter",
            "extra": "iterations: 70115\ncpu: 9971.359908721397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8027.3171439043645,
            "unit": "ns/iter",
            "extra": "iterations: 87238\ncpu: 8027.117769779304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7949.164622068456,
            "unit": "ns/iter",
            "extra": "iterations: 88852\ncpu: 7949.028721919725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7925.847262734157,
            "unit": "ns/iter",
            "extra": "iterations: 88793\ncpu: 7925.766670796137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17661.603341725804,
            "unit": "ns/iter",
            "extra": "iterations: 39321\ncpu: 17660.58594644078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54255.187139520305,
            "unit": "ns/iter",
            "extra": "iterations: 12830\ncpu: 54252.21356196339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43113.1194887013,
            "unit": "ns/iter",
            "extra": "iterations: 16194\ncpu: 43110.29393602601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44197.075412317135,
            "unit": "ns/iter",
            "extra": "iterations: 15886\ncpu: 44194.92635024564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44305.902489889886,
            "unit": "ns/iter",
            "extra": "iterations: 15824\ncpu: 44303.311425681844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25669.237181136315,
            "unit": "ns/iter",
            "extra": "iterations: 27245\ncpu: 25667.671132317842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41651.53122480554,
            "unit": "ns/iter",
            "extra": "iterations: 16125\ncpu: 41649.14108527185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1895.4356916109236,
            "unit": "ns/iter",
            "extra": "iterations: 368249\ncpu: 1895.3091522312493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10134.854971163006,
            "unit": "ns/iter",
            "extra": "iterations: 69531\ncpu: 10134.383224748712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7946.009893462766,
            "unit": "ns/iter",
            "extra": "iterations: 89453\ncpu: 7945.562474148425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8072.6484826176975,
            "unit": "ns/iter",
            "extra": "iterations: 86926\ncpu: 8072.317833559577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7982.984628073754,
            "unit": "ns/iter",
            "extra": "iterations: 87302\ncpu: 7983.081716340983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17467.994520549364,
            "unit": "ns/iter",
            "extra": "iterations: 40150\ncpu: 17468.02490660029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54276.009258535465,
            "unit": "ns/iter",
            "extra": "iterations: 12853\ncpu: 54274.40286314475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41186.28917932035,
            "unit": "ns/iter",
            "extra": "iterations: 17522\ncpu: 41183.27816459282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42622.412375945445,
            "unit": "ns/iter",
            "extra": "iterations: 17130\ncpu: 42622.96555750091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42618.24061443743,
            "unit": "ns/iter",
            "extra": "iterations: 16275\ncpu: 42616.65745007708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25193.357816662457,
            "unit": "ns/iter",
            "extra": "iterations: 27774\ncpu: 25191.949305105514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42262.3021441309,
            "unit": "ns/iter",
            "extra": "iterations: 16790\ncpu: 42260.744490767895 ns\nthreads: 1"
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
        "date": 1705962048141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 583.3493653200964,
            "unit": "ns/iter",
            "extra": "iterations: 1183904\ncpu: 583.3390207314106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5029.856720000225,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5029.900000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9823.671352772448,
            "unit": "ns/iter",
            "extra": "iterations: 84434\ncpu: 9823.528436411874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14895.999719589348,
            "unit": "ns/iter",
            "extra": "iterations: 57059\ncpu: 14895.247025009205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19935.86795035429,
            "unit": "ns/iter",
            "extra": "iterations: 43105\ncpu: 19934.93330240112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24293.227808111034,
            "unit": "ns/iter",
            "extra": "iterations: 29121\ncpu: 24292.62731362249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28978.60895698742,
            "unit": "ns/iter",
            "extra": "iterations: 28782\ncpu: 28977.972343825986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33872.501778484104,
            "unit": "ns/iter",
            "extra": "iterations: 24459\ncpu: 33871.96532973548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38432.77319207283,
            "unit": "ns/iter",
            "extra": "iterations: 21710\ncpu: 38431.98065407642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.8005342307775,
            "unit": "ns/iter",
            "extra": "iterations: 1309172\ncpu: 535.7914009771066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.75293038874946,
            "unit": "ns/iter",
            "extra": "iterations: 1724174\ncpu: 405.75092769059245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 412.0219387075243,
            "unit": "ns/iter",
            "extra": "iterations: 1689115\ncpu: 412.0062281135391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 386.4117759100004,
            "unit": "ns/iter",
            "extra": "iterations: 1727306\ncpu: 386.4090091738232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 871.1319225069512,
            "unit": "ns/iter",
            "extra": "iterations: 803737\ncpu: 871.1111968218459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1749.7261369019714,
            "unit": "ns/iter",
            "extra": "iterations: 453975\ncpu: 1749.7146318629902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9818.658729014145,
            "unit": "ns/iter",
            "extra": "iterations: 83148\ncpu: 9818.445422619912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7538.885232348816,
            "unit": "ns/iter",
            "extra": "iterations: 107661\ncpu: 7538.709467680956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7539.643892898324,
            "unit": "ns/iter",
            "extra": "iterations: 107375\ncpu: 7539.632130384189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6968.3453200923195,
            "unit": "ns/iter",
            "extra": "iterations: 108453\ncpu: 6968.094935133185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34381.007686202785,
            "unit": "ns/iter",
            "extra": "iterations: 23939\ncpu: 34380.21638330746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243336.53775934124,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 243328.1604426002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181972.16484982564,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 181964.8053392659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 194201.69017855418,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 194197.18749999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195403.78853445814,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 195396.76555877755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100342.58274205646,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 100338.72739757365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185351.89256902022,
            "unit": "ns/iter",
            "extra": "iterations: 4710\ncpu: 185343.07855626263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4971.38110279685,
            "unit": "ns/iter",
            "extra": "iterations: 163040\ncpu: 4971.378189401385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23649.570223112114,
            "unit": "ns/iter",
            "extra": "iterations: 34960\ncpu: 23648.598398169295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19094.846326173767,
            "unit": "ns/iter",
            "extra": "iterations: 44191\ncpu: 19094.392523364524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19035.47815654664,
            "unit": "ns/iter",
            "extra": "iterations: 44178\ncpu: 19034.811444610426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17779.802497039265,
            "unit": "ns/iter",
            "extra": "iterations: 46455\ncpu: 17779.52857604134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48774.37542702702,
            "unit": "ns/iter",
            "extra": "iterations: 16978\ncpu: 48772.55271527849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267563.251074283,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 267562.9527317386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203696.26534933428,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 203692.02540578676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205781.2372280167,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 205779.2336802263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204860.46822977153,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 204856.38921453775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109051.37470196882,
            "unit": "ns/iter",
            "extra": "iterations: 7969\ncpu: 109049.56707240583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194973.55475764957,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 194967.616696589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 778935.2572856613,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 778927.7268942537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429355.67994172376,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 429350.5585235551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1636.0367267074719,
            "unit": "ns/iter",
            "extra": "iterations: 499827\ncpu: 1636.007858719112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9447.853946115425,
            "unit": "ns/iter",
            "extra": "iterations: 87187\ncpu: 9447.673391675353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7297.035246148037,
            "unit": "ns/iter",
            "extra": "iterations: 113062\ncpu: 7296.922927243468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7284.529642120026,
            "unit": "ns/iter",
            "extra": "iterations: 117721\ncpu: 7284.309511472094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6052.967004437794,
            "unit": "ns/iter",
            "extra": "iterations: 135200\ncpu: 6052.901627218941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33593.70269404411,
            "unit": "ns/iter",
            "extra": "iterations: 24981\ncpu: 33592.93062727675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 258027.73665892766,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 258027.0881670544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192806.7895427695,
            "unit": "ns/iter",
            "extra": "iterations: 4571\ncpu: 192801.99081163856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193687.61848956614,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 193687.02256944426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191113.43215755455,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 191114.84527158688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98313.29847081438,
            "unit": "ns/iter",
            "extra": "iterations: 8959\ncpu: 98312.31164192448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182780.1011446585,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 182774.88033298604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 174.71477436808826,
            "unit": "ns/iter",
            "extra": "iterations: 4011312\ncpu: 174.7127872376907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1329.820328807043,
            "unit": "ns/iter",
            "extra": "iterations: 526996\ncpu: 1329.8131295114104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1013.5521007578413,
            "unit": "ns/iter",
            "extra": "iterations: 692274\ncpu: 1013.5096796932934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1045.532436491594,
            "unit": "ns/iter",
            "extra": "iterations: 669832\ncpu: 1045.480807127758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 835.6198060298137,
            "unit": "ns/iter",
            "extra": "iterations: 839098\ncpu: 835.6102624484814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9532.588955740635,
            "unit": "ns/iter",
            "extra": "iterations: 74627\ncpu: 9532.489581518808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11933.189133578166,
            "unit": "ns/iter",
            "extra": "iterations: 58805\ncpu: 11933.28118357289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2703.337112567273,
            "unit": "ns/iter",
            "extra": "iterations: 259400\ncpu: 2703.284117193509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2700.735259438646,
            "unit": "ns/iter",
            "extra": "iterations: 259522\ncpu: 2700.7536933285264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2751.4533121719714,
            "unit": "ns/iter",
            "extra": "iterations: 257701\ncpu: 2751.4002662000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5115.29994958096,
            "unit": "ns/iter",
            "extra": "iterations: 136853\ncpu: 5115.18636785453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5109.462483857657,
            "unit": "ns/iter",
            "extra": "iterations: 136288\ncpu: 5109.394810988497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1888.4565129723717,
            "unit": "ns/iter",
            "extra": "iterations: 371950\ncpu: 1888.412689877663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9782.808156401074,
            "unit": "ns/iter",
            "extra": "iterations: 71355\ncpu: 9782.658538294392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7999.248145827983,
            "unit": "ns/iter",
            "extra": "iterations: 87775\ncpu: 7999.0919965822195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7936.0046475338695,
            "unit": "ns/iter",
            "extra": "iterations: 88434\ncpu: 7935.8934346517835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7893.292938460575,
            "unit": "ns/iter",
            "extra": "iterations: 89244\ncpu: 7893.046031105611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17699.94277437623,
            "unit": "ns/iter",
            "extra": "iterations: 39353\ncpu: 17699.377429928896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54017.08323009911,
            "unit": "ns/iter",
            "extra": "iterations: 12916\ncpu: 54015.987921957334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43389.801313529635,
            "unit": "ns/iter",
            "extra": "iterations: 16292\ncpu: 43388.81045912105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43494.334258062976,
            "unit": "ns/iter",
            "extra": "iterations: 16221\ncpu: 43492.97823808619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42967.128700126355,
            "unit": "ns/iter",
            "extra": "iterations: 16317\ncpu: 42966.45829502961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25250.83726748322,
            "unit": "ns/iter",
            "extra": "iterations: 27579\ncpu: 25249.265745675937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42695.70822972744,
            "unit": "ns/iter",
            "extra": "iterations: 16489\ncpu: 42696.027654799924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1906.5207341926248,
            "unit": "ns/iter",
            "extra": "iterations: 366062\ncpu: 1906.4644786948388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10067.621609147789,
            "unit": "ns/iter",
            "extra": "iterations: 69341\ncpu: 10067.404565841282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8034.385846273933,
            "unit": "ns/iter",
            "extra": "iterations: 86804\ncpu: 8034.200036864693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7943.025394300256,
            "unit": "ns/iter",
            "extra": "iterations: 79191\ncpu: 7941.72191284367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7861.74865615562,
            "unit": "ns/iter",
            "extra": "iterations: 89296\ncpu: 7861.703771725616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17289.400222828444,
            "unit": "ns/iter",
            "extra": "iterations: 40390\ncpu: 17289.12849715284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52539.03439730169,
            "unit": "ns/iter",
            "extra": "iterations: 13315\ncpu: 52538.60307923382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 38573.94054472926,
            "unit": "ns/iter",
            "extra": "iterations: 18064\ncpu: 38573.36691762577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41357.899474025566,
            "unit": "ns/iter",
            "extra": "iterations: 16921\ncpu: 41357.79209266527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41253.74376510412,
            "unit": "ns/iter",
            "extra": "iterations: 16961\ncpu: 41252.933199692656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25135.02803872422,
            "unit": "ns/iter",
            "extra": "iterations: 27890\ncpu: 25134.962352097846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 38369.389117893596,
            "unit": "ns/iter",
            "extra": "iterations: 18195\ncpu: 38368.8375927445 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}