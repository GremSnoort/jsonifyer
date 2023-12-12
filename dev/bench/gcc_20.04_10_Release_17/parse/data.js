window.BENCHMARK_DATA = {
  "lastUpdate": 1702398838297,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-10 20.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702398837981,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 624.5608157067406,
            "unit": "ns/iter",
            "extra": "iterations: 1066805\ncpu: 624.5165705072624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5547.931600000311,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5547.515999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10757.167387426398,
            "unit": "ns/iter",
            "extra": "iterations: 77927\ncpu: 10757.09959320903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16075.327149959927,
            "unit": "ns/iter",
            "extra": "iterations: 53908\ncpu: 16075.144690954958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20917.266901763236,
            "unit": "ns/iter",
            "extra": "iterations: 39700\ncpu: 20915.367758186385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26213.00717328655,
            "unit": "ns/iter",
            "extra": "iterations: 31924\ncpu: 26211.383285302603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31605.480945924963,
            "unit": "ns/iter",
            "extra": "iterations: 26556\ncpu: 31604.100768188007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36711.86597803948,
            "unit": "ns/iter",
            "extra": "iterations: 23041\ncpu: 36711.640119786454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41543.99995010165,
            "unit": "ns/iter",
            "extra": "iterations: 20040\ncpu: 41542.89920159684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 570.5273208928994,
            "unit": "ns/iter",
            "extra": "iterations: 1214748\ncpu: 570.5305956461762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.7766696853221,
            "unit": "ns/iter",
            "extra": "iterations: 1586811\ncpu: 439.7704578554093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 453.6773463528873,
            "unit": "ns/iter",
            "extra": "iterations: 1541275\ncpu: 453.6740036657963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 440.8687630460557,
            "unit": "ns/iter",
            "extra": "iterations: 1590520\ncpu: 440.8650001257453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 914.0352486978938,
            "unit": "ns/iter",
            "extra": "iterations: 768000\ncpu: 914.0470052083325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1504.0497054471787,
            "unit": "ns/iter",
            "extra": "iterations: 530465\ncpu: 1504.037966689603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9384.468853958146,
            "unit": "ns/iter",
            "extra": "iterations: 87475\ncpu: 9384.480137182045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8106.949495730947,
            "unit": "ns/iter",
            "extra": "iterations: 103417\ncpu: 8106.679752845291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9925.971804284187,
            "unit": "ns/iter",
            "extra": "iterations: 82814\ncpu: 9926.03062284154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8360.588199967975,
            "unit": "ns/iter",
            "extra": "iterations: 94915\ncpu: 8360.37296528473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27632.084240401597,
            "unit": "ns/iter",
            "extra": "iterations: 29950\ncpu: 27631.943238731154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261038.49205397387,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 261031.93403298294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203780.90894384167,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 203779.10792697044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201810.7267696573,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201804.86511413418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201649.6502770025,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201648.6149584483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103835.1788048003,
            "unit": "ns/iter",
            "extra": "iterations: 8417\ncpu: 103832.33931329435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193390.9263531474,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 193390.68322981382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5515.273899999897,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5515.13700000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26533.707382849367,
            "unit": "ns/iter",
            "extra": "iterations: 31519\ncpu: 26533.757416161676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20911.402327222502,
            "unit": "ns/iter",
            "extra": "iterations: 39704\ncpu: 20911.029115454345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22782.1879317923,
            "unit": "ns/iter",
            "extra": "iterations: 36476\ncpu: 22782.33084768068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21425.62610880452,
            "unit": "ns/iter",
            "extra": "iterations: 39006\ncpu: 21425.014100394834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43862.75152558433,
            "unit": "ns/iter",
            "extra": "iterations: 19173\ncpu: 43862.30636833032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 281311.79438346636,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 281303.453841187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 215303.8337028895,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 215303.12884947064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 214545.9111931192,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 214542.0910209099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 213907.01321585808,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 213901.61527165867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111583.26510919853,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 111579.52006094487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 203443.5280660479,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 203443.89150943316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 854977.2412280526,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 854968.5087719283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 458740.3218749842,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 458727.96874999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2397.835116603954,
            "unit": "ns/iter",
            "extra": "iterations: 335152\ncpu: 2397.8472454289317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9016.34903450682,
            "unit": "ns/iter",
            "extra": "iterations: 89229\ncpu: 9016.08445684694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9065.050725910749,
            "unit": "ns/iter",
            "extra": "iterations: 91058\ncpu: 9064.658788903793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8372.541689091076,
            "unit": "ns/iter",
            "extra": "iterations: 98479\ncpu: 8372.159546705338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8049.668565152607,
            "unit": "ns/iter",
            "extra": "iterations: 102889\ncpu: 8049.442603193724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26561.40678450102,
            "unit": "ns/iter",
            "extra": "iterations: 31513\ncpu: 26560.295750959827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 266284.50722456345,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 266272.0048163753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200029.9555051104,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 200020.47673098813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199041.31838665204,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 199031.68093735926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197120.6082289714,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 197114.62432915886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99543.49056603783,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 99539.7022050466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192841.65099063827,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 192833.8123231011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.55997284179577,
            "unit": "ns/iter",
            "extra": "iterations: 3500968\ncpu: 199.54901044511124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1493.1918591590556,
            "unit": "ns/iter",
            "extra": "iterations: 467421\ncpu: 1493.1335990466803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1139.527890822137,
            "unit": "ns/iter",
            "extra": "iterations: 614557\ncpu: 1139.507970782213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1272.2510791536863,
            "unit": "ns/iter",
            "extra": "iterations: 550663\ncpu: 1272.2374664722422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 909.8971108821013,
            "unit": "ns/iter",
            "extra": "iterations: 766670\ncpu: 909.8473919678646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8922.054442464392,
            "unit": "ns/iter",
            "extra": "iterations: 78560\ncpu: 8921.678971486797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12643.773665736393,
            "unit": "ns/iter",
            "extra": "iterations: 55555\ncpu: 12643.252632526308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2864.3909345662264,
            "unit": "ns/iter",
            "extra": "iterations: 244445\ncpu: 2864.2606721348366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2899.158063422127,
            "unit": "ns/iter",
            "extra": "iterations: 241808\ncpu: 2899.0111989677707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2872.608610680088,
            "unit": "ns/iter",
            "extra": "iterations: 243047\ncpu: 2872.4818656473744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5190.454432858239,
            "unit": "ns/iter",
            "extra": "iterations: 134834\ncpu: 5190.269516590784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5334.501835600686,
            "unit": "ns/iter",
            "extra": "iterations: 130475\ncpu: 5334.457942134495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1864.8707114289123,
            "unit": "ns/iter",
            "extra": "iterations: 374542\ncpu: 1864.8509379455597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9724.020248139788,
            "unit": "ns/iter",
            "extra": "iterations: 72056\ncpu: 9723.782891084691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8056.967804012545,
            "unit": "ns/iter",
            "extra": "iterations: 86781\ncpu: 8057.062029706923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8133.769628255863,
            "unit": "ns/iter",
            "extra": "iterations: 85731\ncpu: 8133.715925394619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7924.405334716595,
            "unit": "ns/iter",
            "extra": "iterations: 88702\ncpu: 7924.335415210576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18876.274864703493,
            "unit": "ns/iter",
            "extra": "iterations: 38619\ncpu: 18876.273336958417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55908.903212915306,
            "unit": "ns/iter",
            "extra": "iterations: 12512\ncpu: 55906.77749360686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45308.755124473464,
            "unit": "ns/iter",
            "extra": "iterations: 15465\ncpu: 45308.62592951883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44847.37451068509,
            "unit": "ns/iter",
            "extra": "iterations: 15583\ncpu: 44845.56888917441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45121.497539778866,
            "unit": "ns/iter",
            "extra": "iterations: 15649\ncpu: 45118.71685091686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26359.231936580305,
            "unit": "ns/iter",
            "extra": "iterations: 26490\ncpu: 26357.50471876178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44110.93717771144,
            "unit": "ns/iter",
            "extra": "iterations: 15902\ncpu: 44108.697019243344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1878.9478993434066,
            "unit": "ns/iter",
            "extra": "iterations: 375216\ncpu: 1878.8188669992703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11595.06971670308,
            "unit": "ns/iter",
            "extra": "iterations: 60043\ncpu: 11594.512266209118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8645.987187550376,
            "unit": "ns/iter",
            "extra": "iterations: 81093\ncpu: 8645.720345775813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9060.259555452601,
            "unit": "ns/iter",
            "extra": "iterations: 77652\ncpu: 9060.252150620769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9525.4427743619,
            "unit": "ns/iter",
            "extra": "iterations: 73516\ncpu: 9524.999999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18975.907639836827,
            "unit": "ns/iter",
            "extra": "iterations: 36650\ncpu: 18974.668485675393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55853.01205588756,
            "unit": "ns/iter",
            "extra": "iterations: 12525\ncpu: 55849.884231537275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47311.03070264362,
            "unit": "ns/iter",
            "extra": "iterations: 14787\ncpu: 47309.02820044655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46050.85644479632,
            "unit": "ns/iter",
            "extra": "iterations: 15144\ncpu: 46048.494453248735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46459.267833377984,
            "unit": "ns/iter",
            "extra": "iterations: 15028\ncpu: 46458.776949693056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27929.4839748692,
            "unit": "ns/iter",
            "extra": "iterations: 25148\ncpu: 27928.789565770254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45777.80324862488,
            "unit": "ns/iter",
            "extra": "iterations: 15268\ncpu: 45776.01519517981 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}