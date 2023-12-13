window.BENCHMARK_DATA = {
  "lastUpdate": 1702490298640,
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
      }
    ]
  }
}