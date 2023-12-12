window.BENCHMARK_DATA = {
  "lastUpdate": 1702412558129,
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
      },
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409079693,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 584.2339928663238,
            "unit": "ns/iter",
            "extra": "iterations: 1196857\ncpu: 584.231449538249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5574.413030000187,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5573.954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10598.641446989808,
            "unit": "ns/iter",
            "extra": "iterations: 78259\ncpu: 10597.768946702612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16134.089811794947,
            "unit": "ns/iter",
            "extra": "iterations: 52443\ncpu: 16133.26278054269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20873.95394504577,
            "unit": "ns/iter",
            "extra": "iterations: 39670\ncpu: 20873.032518275766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25880.073136644925,
            "unit": "ns/iter",
            "extra": "iterations: 32200\ncpu: 25879.341614906836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31300.604004904213,
            "unit": "ns/iter",
            "extra": "iterations: 26917\ncpu: 31298.941189582787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36080.04921429707,
            "unit": "ns/iter",
            "extra": "iterations: 23164\ncpu: 36079.14436194094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40583.39427169501,
            "unit": "ns/iter",
            "extra": "iterations: 19971\ncpu: 40582.79505282655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 563.8037888274605,
            "unit": "ns/iter",
            "extra": "iterations: 1274484\ncpu: 563.7825190430017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 431.67212848052185,
            "unit": "ns/iter",
            "extra": "iterations: 1622721\ncpu: 431.655287631084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.5047901325109,
            "unit": "ns/iter",
            "extra": "iterations: 1625216\ncpu: 430.4851785854923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.8384629332124,
            "unit": "ns/iter",
            "extra": "iterations: 1637977\ncpu: 427.80252714171166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 895.9265648253569,
            "unit": "ns/iter",
            "extra": "iterations: 782132\ncpu: 895.9068290263027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1486.1408584246938,
            "unit": "ns/iter",
            "extra": "iterations: 527338\ncpu: 1486.0793267316212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9028.763959559263,
            "unit": "ns/iter",
            "extra": "iterations: 90404\ncpu: 9028.183487456312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8599.507851715125,
            "unit": "ns/iter",
            "extra": "iterations: 93037\ncpu: 8598.442555112477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9186.20628289817,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 9186.149624818005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9216.94069209359,
            "unit": "ns/iter",
            "extra": "iterations: 89381\ncpu: 9216.647833432131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27204.045663156197,
            "unit": "ns/iter",
            "extra": "iterations: 30287\ncpu: 27203.15316802586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 254548.33216271995,
            "unit": "ns/iter",
            "extra": "iterations: 3417\ncpu: 254538.7474392734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197485.45218178688,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 197483.47275604738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196632.88761001726,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 196617.87406905962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196242.2780652396,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 196235.09561304888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102810.93590797635,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 102805.83401807724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188788.25664865575,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 188784.8432432437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5439.831659999754,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5439.59300000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25267.396180006355,
            "unit": "ns/iter",
            "extra": "iterations: 32932\ncpu: 25267.050285436664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21417.925421546573,
            "unit": "ns/iter",
            "extra": "iterations: 38845\ncpu: 21417.38447676664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22186.590797350425,
            "unit": "ns/iter",
            "extra": "iterations: 37424\ncpu: 22185.963552800265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21895.070686785242,
            "unit": "ns/iter",
            "extra": "iterations: 37843\ncpu: 21894.080807546925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44185.22624600618,
            "unit": "ns/iter",
            "extra": "iterations: 19081\ncpu: 44183.99454955191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 275452.99968454073,
            "unit": "ns/iter",
            "extra": "iterations: 3170\ncpu: 275437.5709779183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216125.71312883458,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 216124.66257668674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 211020.62582056885,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 211008.29078531516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 209665.45818269515,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 209656.66425644807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113179.22374902785,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 113174.42312678236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 203002.23555452412,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 202996.90121155532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 844636.546501288,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 844598.0513728962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 498105.9873817041,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 498067.77076761203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2377.9524045539392,
            "unit": "ns/iter",
            "extra": "iterations: 336944\ncpu: 2377.84587349826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8737.561117480593,
            "unit": "ns/iter",
            "extra": "iterations: 95071\ncpu: 8737.2731958221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8848.570981890916,
            "unit": "ns/iter",
            "extra": "iterations: 92108\ncpu: 8848.107656229586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8991.544211557573,
            "unit": "ns/iter",
            "extra": "iterations: 88789\ncpu: 8991.041683091364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7834.442134990165,
            "unit": "ns/iter",
            "extra": "iterations: 106230\ncpu: 7834.230443377568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25880.623686752988,
            "unit": "ns/iter",
            "extra": "iterations: 32077\ncpu: 25879.514917230503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259481.8005873735,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 259466.10866373038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 195602.31152992902,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 195588.73614190644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194168.7588715064,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 194156.51311439276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193030.15685414107,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 193015.70738137106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101164.7132513563,
            "unit": "ns/iter",
            "extra": "iterations: 8701\ncpu: 101158.41857257739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 187335.63903061312,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 187320.15306122345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 187.93256221267066,
            "unit": "ns/iter",
            "extra": "iterations: 3728340\ncpu: 187.92006630296666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1480.7798364033615,
            "unit": "ns/iter",
            "extra": "iterations: 475560\ncpu: 1480.676255362091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1177.4292444435243,
            "unit": "ns/iter",
            "extra": "iterations: 595614\ncpu: 1177.3521105951165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1322.449829768737,
            "unit": "ns/iter",
            "extra": "iterations: 536623\ncpu: 1322.4146188292327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 908.1205986624832,
            "unit": "ns/iter",
            "extra": "iterations: 768914\ncpu: 908.0631904218156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8717.383767285188,
            "unit": "ns/iter",
            "extra": "iterations: 80270\ncpu: 8716.876790830953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11631.04116202716,
            "unit": "ns/iter",
            "extra": "iterations: 60274\ncpu: 11630.084281779922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2780.1852895372917,
            "unit": "ns/iter",
            "extra": "iterations: 252351\ncpu: 2780.036140138148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2796.318242987068,
            "unit": "ns/iter",
            "extra": "iterations: 250425\ncpu: 2796.1681142058596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2812.981243626431,
            "unit": "ns/iter",
            "extra": "iterations: 247116\ncpu: 2812.7450266271494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5134.088903195712,
            "unit": "ns/iter",
            "extra": "iterations: 136688\ncpu: 5133.699373756302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5183.527741657298,
            "unit": "ns/iter",
            "extra": "iterations: 134581\ncpu: 5183.366151239804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1859.8605511914843,
            "unit": "ns/iter",
            "extra": "iterations: 355557\ncpu: 1857.0769243750044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9966.7010652091,
            "unit": "ns/iter",
            "extra": "iterations: 70972\ncpu: 9966.274023558679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7874.219357570642,
            "unit": "ns/iter",
            "extra": "iterations: 87387\ncpu: 7873.900008010277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8009.584272558712,
            "unit": "ns/iter",
            "extra": "iterations: 85354\ncpu: 8008.872460576052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7791.580663621576,
            "unit": "ns/iter",
            "extra": "iterations: 90865\ncpu: 7791.4719639025625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18541.994289405517,
            "unit": "ns/iter",
            "extra": "iterations: 38700\ncpu: 18541.524547803598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55509.9314469583,
            "unit": "ns/iter",
            "extra": "iterations: 12122\ncpu: 55506.789308694926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44788.32953964156,
            "unit": "ns/iter",
            "extra": "iterations: 15640\ncpu: 44788.158567774495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44908.62630091289,
            "unit": "ns/iter",
            "extra": "iterations: 15566\ncpu: 44907.1501991517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43823.85075282109,
            "unit": "ns/iter",
            "extra": "iterations: 15940\ncpu: 43820.991217064104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26157.850468342927,
            "unit": "ns/iter",
            "extra": "iterations: 26583\ncpu: 26157.22830380326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43848.27655060541,
            "unit": "ns/iter",
            "extra": "iterations: 16026\ncpu: 43846.08760763752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1968.7115504964977,
            "unit": "ns/iter",
            "extra": "iterations: 354738\ncpu: 1968.668707609555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10323.063808866906,
            "unit": "ns/iter",
            "extra": "iterations: 68141\ncpu: 10322.457844763238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8605.86705906997,
            "unit": "ns/iter",
            "extra": "iterations: 81209\ncpu: 8605.831865926153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8614.11420423683,
            "unit": "ns/iter",
            "extra": "iterations: 81004\ncpu: 8614.068441064583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8390.632661352924,
            "unit": "ns/iter",
            "extra": "iterations: 83683\ncpu: 8390.174826428381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19443.828685590124,
            "unit": "ns/iter",
            "extra": "iterations: 36039\ncpu: 19443.38633147402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56812.89446464679,
            "unit": "ns/iter",
            "extra": "iterations: 12375\ncpu: 56808.67878787912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46412.519046984205,
            "unit": "ns/iter",
            "extra": "iterations: 15068\ncpu: 46411.11627289689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44338.82307691691,
            "unit": "ns/iter",
            "extra": "iterations: 15730\ncpu: 44336.567069295066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45883.534502004666,
            "unit": "ns/iter",
            "extra": "iterations: 15231\ncpu: 45882.56844593184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27645.231374418,
            "unit": "ns/iter",
            "extra": "iterations: 25167\ncpu: 27644.641792824244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45336.057208088714,
            "unit": "ns/iter",
            "extra": "iterations: 15330\ncpu: 45333.54207436331 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412553026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 638.7327122901462,
            "unit": "ns/iter",
            "extra": "iterations: 1098367\ncpu: 638.7112868467461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5573.775469999874,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5573.825999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10822.728465583192,
            "unit": "ns/iter",
            "extra": "iterations: 77202\ncpu: 10822.10564493148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16144.479191163771,
            "unit": "ns/iter",
            "extra": "iterations: 51877\ncpu: 16143.500973456443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21192.910654910924,
            "unit": "ns/iter",
            "extra": "iterations: 39700\ncpu: 21191.93450881611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28135.662004366655,
            "unit": "ns/iter",
            "extra": "iterations: 31601\ncpu: 28134.29954748269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31768.396506551002,
            "unit": "ns/iter",
            "extra": "iterations: 26335\ncpu: 31766.743876969802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37021.129724971026,
            "unit": "ns/iter",
            "extra": "iterations: 22725\ncpu: 37019.995599559974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41797.44126654792,
            "unit": "ns/iter",
            "extra": "iterations: 20244\ncpu: 41794.88243430152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 576.288797458897,
            "unit": "ns/iter",
            "extra": "iterations: 1214287\ncpu: 576.2802368797489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 474.7050059474861,
            "unit": "ns/iter",
            "extra": "iterations: 1592266\ncpu: 474.63828279948206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 445.07348509609295,
            "unit": "ns/iter",
            "extra": "iterations: 1581899\ncpu: 445.0415608076121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 423.40721079298254,
            "unit": "ns/iter",
            "extra": "iterations: 1642621\ncpu: 423.39346690441687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 911.4479075566181,
            "unit": "ns/iter",
            "extra": "iterations: 752374\ncpu: 911.4070927490833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1549.4196667903727,
            "unit": "ns/iter",
            "extra": "iterations: 514451\ncpu: 1549.3401703952381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9543.814381154087,
            "unit": "ns/iter",
            "extra": "iterations: 85918\ncpu: 9543.128331665068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9840.309141107882,
            "unit": "ns/iter",
            "extra": "iterations: 83305\ncpu: 9839.735910209498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9965.130322672745,
            "unit": "ns/iter",
            "extra": "iterations: 83769\ncpu: 9964.77097733049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9671.154812701952,
            "unit": "ns/iter",
            "extra": "iterations: 84838\ncpu: 9670.58511516069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27524.670235976453,
            "unit": "ns/iter",
            "extra": "iterations: 29791\ncpu: 27523.89983552083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260441.58015494898,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 260430.27413587584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198860.81847800827,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 198855.7132883403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202133.30622677095,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 202122.1654275089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201200.51805843983,
            "unit": "ns/iter",
            "extra": "iterations: 4347\ncpu: 201191.76443524307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103078.22908576945,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 103072.86739616466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193328.65277778846,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 193325.28659612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5519.9530699997,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5519.774999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25746.671570588325,
            "unit": "ns/iter",
            "extra": "iterations: 32491\ncpu: 25745.981964236253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22726.344207973732,
            "unit": "ns/iter",
            "extra": "iterations: 37120\ncpu: 22725.059267241373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23043.20798532297,
            "unit": "ns/iter",
            "extra": "iterations: 36517\ncpu: 23043.10595065314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22196.226145269713,
            "unit": "ns/iter",
            "extra": "iterations: 37131\ncpu: 22194.877595540078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45192.68514388243,
            "unit": "ns/iter",
            "extra": "iterations: 18383\ncpu: 45191.57917641297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279456.9000638651,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 279442.27330778976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 227927.92762994525,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 227921.46232280557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215624.9762962921,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 215608.32098765453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214356.51018404358,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 214346.20858895621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110578.41135558875,
            "unit": "ns/iter",
            "extra": "iterations: 7908\ncpu: 110572.07890743531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204124.54641597738,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 204119.3654524098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 836310.0751747981,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 836258.479020981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 460042.3554526669,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 459999.8971193385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2500.470631233993,
            "unit": "ns/iter",
            "extra": "iterations: 320119\ncpu: 2500.465764293906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8848.555289550026,
            "unit": "ns/iter",
            "extra": "iterations: 92730\ncpu: 8848.179661382488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9294.542539390715,
            "unit": "ns/iter",
            "extra": "iterations: 90187\ncpu: 9294.372803175627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9169.361016028919,
            "unit": "ns/iter",
            "extra": "iterations: 90273\ncpu: 9168.877737529452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8922.351240563687,
            "unit": "ns/iter",
            "extra": "iterations: 92458\ncpu: 8922.087866923375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26835.0056688259,
            "unit": "ns/iter",
            "extra": "iterations: 31047\ncpu: 26833.64898379883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265454.8679302063,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 265441.5162454863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199946.3045937964,
            "unit": "ns/iter",
            "extra": "iterations: 4419\ncpu: 199943.38085539654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198973.96948462812,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 198973.16907775693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199135.8571428619,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 199124.05660377393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101291.82273201272,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 101288.63399374331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191764.87291259962,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 191756.66883539446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 213.05621976038523,
            "unit": "ns/iter",
            "extra": "iterations: 3321181\ncpu: 213.05562689898522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1498.673466846462,
            "unit": "ns/iter",
            "extra": "iterations: 465772\ncpu: 1498.6504126482396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1155.7453233137371,
            "unit": "ns/iter",
            "extra": "iterations: 606145\ncpu: 1155.6922848493332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1262.8225174787317,
            "unit": "ns/iter",
            "extra": "iterations: 552815\ncpu: 1262.7721751399736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 945.2268583312343,
            "unit": "ns/iter",
            "extra": "iterations: 738095\ncpu: 945.1922855458963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8910.78504177517,
            "unit": "ns/iter",
            "extra": "iterations: 79234\ncpu: 8910.769366686061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12603.257163478287,
            "unit": "ns/iter",
            "extra": "iterations: 55420\ncpu: 12602.437748105442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2872.3770745823163,
            "unit": "ns/iter",
            "extra": "iterations: 243302\ncpu: 2872.3463021265484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2886.8311653319215,
            "unit": "ns/iter",
            "extra": "iterations: 241236\ncpu: 2886.6524896781634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2873.9052587884034,
            "unit": "ns/iter",
            "extra": "iterations: 243326\ncpu: 2873.901268257392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4854.474566754471,
            "unit": "ns/iter",
            "extra": "iterations: 144260\ncpu: 4854.210453348113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5384.456120243155,
            "unit": "ns/iter",
            "extra": "iterations: 130003\ncpu: 5384.192672476766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1895.0833504330699,
            "unit": "ns/iter",
            "extra": "iterations: 370376\ncpu: 1895.033695487832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9908.74291370134,
            "unit": "ns/iter",
            "extra": "iterations: 69712\ncpu: 9908.717294009524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7949.136666856356,
            "unit": "ns/iter",
            "extra": "iterations: 87995\ncpu: 7949.12324563906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7909.316677997023,
            "unit": "ns/iter",
            "extra": "iterations: 88260\ncpu: 7908.88851121697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7854.466432435213,
            "unit": "ns/iter",
            "extra": "iterations: 89655\ncpu: 7854.193296525562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18062.88709886331,
            "unit": "ns/iter",
            "extra": "iterations: 38609\ncpu: 18061.812012742877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55428.12162054359,
            "unit": "ns/iter",
            "extra": "iterations: 12539\ncpu: 55427.98468777469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44300.610026618175,
            "unit": "ns/iter",
            "extra": "iterations: 15778\ncpu: 44297.64862466672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44295.42534963131,
            "unit": "ns/iter",
            "extra": "iterations: 15874\ncpu: 44293.51140229301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43778.84403842365,
            "unit": "ns/iter",
            "extra": "iterations: 15927\ncpu: 43776.63715702916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26080.111317118168,
            "unit": "ns/iter",
            "extra": "iterations: 26968\ncpu: 26080.087511124177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43504.72096061496,
            "unit": "ns/iter",
            "extra": "iterations: 16073\ncpu: 43502.34554843543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1917.804513921113,
            "unit": "ns/iter",
            "extra": "iterations: 366998\ncpu: 1917.7575899596156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11268.94711258911,
            "unit": "ns/iter",
            "extra": "iterations: 61924\ncpu: 11268.162586396147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9109.267814648967,
            "unit": "ns/iter",
            "extra": "iterations: 76482\ncpu: 9109.240082633665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9320.119449937718,
            "unit": "ns/iter",
            "extra": "iterations: 75337\ncpu: 9319.921154280159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8430.43074170199,
            "unit": "ns/iter",
            "extra": "iterations: 83268\ncpu: 8429.947879137253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18449.48609288674,
            "unit": "ns/iter",
            "extra": "iterations: 38110\ncpu: 18448.761479926674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56375.594172402925,
            "unit": "ns/iter",
            "extra": "iterations: 12355\ncpu: 56373.06353702856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43609.80915744068,
            "unit": "ns/iter",
            "extra": "iterations: 15987\ncpu: 43607.287170827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44634.90866331883,
            "unit": "ns/iter",
            "extra": "iterations: 15733\ncpu: 44634.24013220612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44679.12974460902,
            "unit": "ns/iter",
            "extra": "iterations: 15623\ncpu: 44677.85316520493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25885.87908496736,
            "unit": "ns/iter",
            "extra": "iterations: 27234\ncpu: 25885.822868473446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45258.21298018537,
            "unit": "ns/iter",
            "extra": "iterations: 15593\ncpu: 45254.74251266623 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}