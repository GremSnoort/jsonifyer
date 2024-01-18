window.BENCHMARK_DATA = {
  "lastUpdate": 1705575630506,
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
      }
    ]
  }
}