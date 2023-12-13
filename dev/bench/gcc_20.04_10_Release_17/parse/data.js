window.BENCHMARK_DATA = {
  "lastUpdate": 1702488607880,
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702416015536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 638.0473835590709,
            "unit": "ns/iter",
            "extra": "iterations: 1097617\ncpu: 637.9992292393432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5685.289779999606,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5684.862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11091.017621553201,
            "unit": "ns/iter",
            "extra": "iterations: 75646\ncpu: 11090.300875128887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16171.665021544819,
            "unit": "ns/iter",
            "extra": "iterations: 52681\ncpu: 16170.985744386016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21303.311917707004,
            "unit": "ns/iter",
            "extra": "iterations: 39177\ncpu: 21302.358526686567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26750.38595253242,
            "unit": "ns/iter",
            "extra": "iterations: 31180\ncpu: 26748.880692751783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31539.374407229774,
            "unit": "ns/iter",
            "extra": "iterations: 26781\ncpu: 31538.07550128822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36874.85566279934,
            "unit": "ns/iter",
            "extra": "iterations: 22586\ncpu: 36872.80616310988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41859.023277932094,
            "unit": "ns/iter",
            "extra": "iterations: 19976\ncpu: 41858.54024829792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.7336485164773,
            "unit": "ns/iter",
            "extra": "iterations: 1226800\ncpu: 571.7009292468216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 447.362094373745,
            "unit": "ns/iter",
            "extra": "iterations: 1577006\ncpu: 447.35720726490547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 437.38024749000715,
            "unit": "ns/iter",
            "extra": "iterations: 1589236\ncpu: 437.35757307284734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.21384084705636,
            "unit": "ns/iter",
            "extra": "iterations: 1666950\ncpu: 421.19025765619875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 934.4633175416164,
            "unit": "ns/iter",
            "extra": "iterations: 745329\ncpu: 934.4041356233278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1506.2893433529146,
            "unit": "ns/iter",
            "extra": "iterations: 524574\ncpu: 1506.2540270772083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9837.97724804402,
            "unit": "ns/iter",
            "extra": "iterations: 72741\ncpu: 9837.930465624604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9694.675668076847,
            "unit": "ns/iter",
            "extra": "iterations: 81802\ncpu: 9693.869343047852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9834.964928335523,
            "unit": "ns/iter",
            "extra": "iterations: 84142\ncpu: 9834.433457726253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9451.284629757789,
            "unit": "ns/iter",
            "extra": "iterations: 85093\ncpu: 9450.706873655894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28146.557478962262,
            "unit": "ns/iter",
            "extra": "iterations: 29115\ncpu: 28145.124506268185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260379.57941968998,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 260360.51450792738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198786.47145531222,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 198775.85400093623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 197700.6027429121,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 197686.49465364925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198535.62554863494,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 198527.55832755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103077.64021662627,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 103069.86107840818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193878.6921023363,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 193867.96440489468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5540.085289999865,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5539.632999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25987.608686356787,
            "unit": "ns/iter",
            "extra": "iterations: 32741\ncpu: 25986.60700650564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23113.138939569937,
            "unit": "ns/iter",
            "extra": "iterations: 36174\ncpu: 23111.4640349422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22634.243607256838,
            "unit": "ns/iter",
            "extra": "iterations: 36604\ncpu: 22633.06469238337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22392.270971228714,
            "unit": "ns/iter",
            "extra": "iterations: 37015\ncpu: 22390.290422801503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44678.208281729836,
            "unit": "ns/iter",
            "extra": "iterations: 18571\ncpu: 44676.2963760703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 280786.2871322346,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 280771.7830556548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216945.31002735812,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 216942.6971883562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215127.84057611314,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 215123.66525949715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214962.3632562651,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 214959.2966060003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110628.72121135025,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 110625.85570683291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205887.4420306999,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 205881.44037780486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 829265.000882606,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 829250.220653133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 459252.831256486,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 459235.92938733235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2449.3555065525065,
            "unit": "ns/iter",
            "extra": "iterations: 325603\ncpu: 2449.32909094817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9238.386849808328,
            "unit": "ns/iter",
            "extra": "iterations: 88820\ncpu: 9237.634541769832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9403.269594641204,
            "unit": "ns/iter",
            "extra": "iterations: 86886\ncpu: 9402.828994314355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9739.433969015734,
            "unit": "ns/iter",
            "extra": "iterations: 86626\ncpu: 9739.094498187611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8856.333261523449,
            "unit": "ns/iter",
            "extra": "iterations: 92837\ncpu: 8855.751478397617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27047.24540135137,
            "unit": "ns/iter",
            "extra": "iterations: 30933\ncpu: 27045.92829664109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 267637.0925256235,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 267623.4779987947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201092.80209997433,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 201081.05455375637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 202747.4624370244,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 202737.10490151128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199895.39995421993,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 199882.5091575082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102259.46220929852,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 102254.6860465113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191718.14791348184,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 191706.9040856458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 210.1810739001996,
            "unit": "ns/iter",
            "extra": "iterations: 3319247\ncpu: 210.17155396992098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1510.3544699200102,
            "unit": "ns/iter",
            "extra": "iterations: 475400\ncpu: 1510.278502313843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1233.5715680400976,
            "unit": "ns/iter",
            "extra": "iterations: 567460\ncpu: 1233.504564198358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1322.6642349547512,
            "unit": "ns/iter",
            "extra": "iterations: 529668\ncpu: 1322.6574004848414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 955.4336634823253,
            "unit": "ns/iter",
            "extra": "iterations: 734113\ncpu: 955.390518898314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9003.472760384764,
            "unit": "ns/iter",
            "extra": "iterations: 77424\ncpu: 9003.083023351965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12555.008973277303,
            "unit": "ns/iter",
            "extra": "iterations: 55721\ncpu: 12554.212953823493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2892.473829075865,
            "unit": "ns/iter",
            "extra": "iterations: 241967\ncpu: 2892.3415176449585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2889.2861781591537,
            "unit": "ns/iter",
            "extra": "iterations: 242985\ncpu: 2889.021544539771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2883.7440886739673,
            "unit": "ns/iter",
            "extra": "iterations: 242416\ncpu: 2883.5976173190006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5142.77399999969,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5142.475999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5396.769927323217,
            "unit": "ns/iter",
            "extra": "iterations: 127551\ncpu: 5396.54491144723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1910.872556612292,
            "unit": "ns/iter",
            "extra": "iterations: 365425\ncpu: 1910.7964698638539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10057.758616225674,
            "unit": "ns/iter",
            "extra": "iterations: 69520\ncpu: 10056.766398158854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8008.110506997236,
            "unit": "ns/iter",
            "extra": "iterations: 87180\ncpu: 8007.749483826498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7918.464209419595,
            "unit": "ns/iter",
            "extra": "iterations: 88473\ncpu: 7917.994190318025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7898.839492297244,
            "unit": "ns/iter",
            "extra": "iterations: 88083\ncpu: 7898.551366324906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18595.87345408151,
            "unit": "ns/iter",
            "extra": "iterations: 37599\ncpu: 18595.77648341712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55202.85791395344,
            "unit": "ns/iter",
            "extra": "iterations: 12598\ncpu: 55198.98396570864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44201.31337916885,
            "unit": "ns/iter",
            "extra": "iterations: 15853\ncpu: 44201.072352237024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44419.39501891469,
            "unit": "ns/iter",
            "extra": "iterations: 15860\ncpu: 44419.16771752823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44116.80023923446,
            "unit": "ns/iter",
            "extra": "iterations: 15884\ncpu: 44116.57642911067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26023.02491290033,
            "unit": "ns/iter",
            "extra": "iterations: 26693\ncpu: 26022.3316974486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43538.93624161198,
            "unit": "ns/iter",
            "extra": "iterations: 16092\ncpu: 43538.37310464839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2061.593890081314,
            "unit": "ns/iter",
            "extra": "iterations: 341543\ncpu: 2061.5650152396643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10621.140405783717,
            "unit": "ns/iter",
            "extra": "iterations: 65503\ncpu: 10621.093690365275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9302.528455391992,
            "unit": "ns/iter",
            "extra": "iterations: 75592\ncpu: 9302.371944121025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9415.362828601694,
            "unit": "ns/iter",
            "extra": "iterations: 73379\ncpu: 9415.10922743561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8979.391564482665,
            "unit": "ns/iter",
            "extra": "iterations: 77719\ncpu: 8979.272764703608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18404.88679295141,
            "unit": "ns/iter",
            "extra": "iterations: 37851\ncpu: 18404.604898153528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55184.29192055096,
            "unit": "ns/iter",
            "extra": "iterations: 12637\ncpu: 55183.413784917655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44156.41663494517,
            "unit": "ns/iter",
            "extra": "iterations: 15762\ncpu: 44155.83047836557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44292.30906663357,
            "unit": "ns/iter",
            "extra": "iterations: 15728\ncpu: 44292.12232960376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44671.28539369217,
            "unit": "ns/iter",
            "extra": "iterations: 15596\ncpu: 44671.13362400624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26765.232644103377,
            "unit": "ns/iter",
            "extra": "iterations: 25971\ncpu: 26764.83000269558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45227.139317498884,
            "unit": "ns/iter",
            "extra": "iterations: 15619\ncpu: 45226.070811191166 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418372330,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 624.8291828115622,
            "unit": "ns/iter",
            "extra": "iterations: 1113354\ncpu: 624.8340599665515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5605.747549999478,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5605.226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10852.320908401323,
            "unit": "ns/iter",
            "extra": "iterations: 76486\ncpu: 10851.635593441943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16068.789334465864,
            "unit": "ns/iter",
            "extra": "iterations: 51793\ncpu: 16067.874037032032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21184.062482629673,
            "unit": "ns/iter",
            "extra": "iterations: 39579\ncpu: 21182.9732939185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26321.643535311876,
            "unit": "ns/iter",
            "extra": "iterations: 31703\ncpu: 26321.06740687001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31569.955970092637,
            "unit": "ns/iter",
            "extra": "iterations: 26482\ncpu: 31568.767464693006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36360.81504251004,
            "unit": "ns/iter",
            "extra": "iterations: 22935\ncpu: 36360.34009156311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41225.056608452614,
            "unit": "ns/iter",
            "extra": "iterations: 20156\ncpu: 41223.0650922802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 565.1561088189426,
            "unit": "ns/iter",
            "extra": "iterations: 1234895\ncpu: 565.1606006988455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 444.7157407213197,
            "unit": "ns/iter",
            "extra": "iterations: 1525864\ncpu: 444.70811291176614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 437.601792360761,
            "unit": "ns/iter",
            "extra": "iterations: 1587850\ncpu: 437.59920647416214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.1231932378029,
            "unit": "ns/iter",
            "extra": "iterations: 1667624\ncpu: 421.12022854072677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 917.667139804314,
            "unit": "ns/iter",
            "extra": "iterations: 765105\ncpu: 917.6269923735955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1521.2625378227729,
            "unit": "ns/iter",
            "extra": "iterations: 521841\ncpu: 1521.231946129187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9619.95320217156,
            "unit": "ns/iter",
            "extra": "iterations: 85645\ncpu: 9620.238192538958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9731.486310988234,
            "unit": "ns/iter",
            "extra": "iterations: 77617\ncpu: 9730.830874679532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9904.759294758156,
            "unit": "ns/iter",
            "extra": "iterations: 81901\ncpu: 9904.565267823324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9497.953377679265,
            "unit": "ns/iter",
            "extra": "iterations: 84037\ncpu: 9497.560598307906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27791.7843744693,
            "unit": "ns/iter",
            "extra": "iterations: 29375\ncpu: 27791.4791489362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261574.6500298855,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 261559.65331739333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 202476.35403582122,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 202471.50500116326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201544.84275413217,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 201534.47313328664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200533.327209306,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 200524.2558139535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103963.6863905322,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 103957.00591715955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195694.88150483818,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 195679.04933543567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5623.298040000009,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5622.679999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25897.588954770345,
            "unit": "ns/iter",
            "extra": "iterations: 32213\ncpu: 25896.392760686613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22707.003198206243,
            "unit": "ns/iter",
            "extra": "iterations: 36583\ncpu: 22705.92078287738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22836.768040244446,
            "unit": "ns/iter",
            "extra": "iterations: 36377\ncpu: 22834.763724331322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22651.266922654435,
            "unit": "ns/iter",
            "extra": "iterations: 36460\ncpu: 22649.621503016948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44790.87165341606,
            "unit": "ns/iter",
            "extra": "iterations: 18489\ncpu: 44791.16772134786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279810.71103271376,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 279806.38229634275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217832.5850664069,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 217823.47782510554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 214827.14378270478,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 214806.65337652573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214703.3161004415,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 214680.50221565724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110546.14390055886,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110539.87698616054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204906.3915918715,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 204891.61549362342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 843166.3194689959,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 843105.0442477897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 461565.50621119444,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 461537.2153209088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2451.698643653556,
            "unit": "ns/iter",
            "extra": "iterations: 327350\ncpu: 2451.5726286848926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9055.722782758414,
            "unit": "ns/iter",
            "extra": "iterations: 90687\ncpu: 9055.182109894455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9412.498694367181,
            "unit": "ns/iter",
            "extra": "iterations: 87314\ncpu: 9412.066793412283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9242.620155645001,
            "unit": "ns/iter",
            "extra": "iterations: 89434\ncpu: 9242.13721850752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8983.380475292282,
            "unit": "ns/iter",
            "extra": "iterations: 91228\ncpu: 8982.90108300081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26804.160082490973,
            "unit": "ns/iter",
            "extra": "iterations: 31034\ncpu: 26802.007475671748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269276.46948639775,
            "unit": "ns/iter",
            "extra": "iterations: 3310\ncpu: 269263.6858006042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 204495.32973840606,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 204480.01376778423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201097.49476559093,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 201079.74510696362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199804.09694223874,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 199791.7100792751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102414.31244163931,
            "unit": "ns/iter",
            "extra": "iterations: 8568\ncpu: 102407.99486461197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 193118.1587439971,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 193107.93720017446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.8654085822575,
            "unit": "ns/iter",
            "extra": "iterations: 3229619\ncpu: 206.85480237761837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1460.863946445814,
            "unit": "ns/iter",
            "extra": "iterations: 478319\ncpu: 1460.772204323895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1212.1858587851618,
            "unit": "ns/iter",
            "extra": "iterations: 608010\ncpu: 1212.1228269271885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1195.2478504531662,
            "unit": "ns/iter",
            "extra": "iterations: 583844\ncpu: 1195.2413658442993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 935.6718245268888,
            "unit": "ns/iter",
            "extra": "iterations: 749471\ncpu: 935.6723609052302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9002.98388647779,
            "unit": "ns/iter",
            "extra": "iterations: 76954\ncpu: 9002.475504847062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12537.500249891033,
            "unit": "ns/iter",
            "extra": "iterations: 56024\ncpu: 12536.620019991435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2886.716263231136,
            "unit": "ns/iter",
            "extra": "iterations: 243740\ncpu: 2886.5873471731898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2902.846649452476,
            "unit": "ns/iter",
            "extra": "iterations: 242438\ncpu: 2902.6798604179335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2881.9874210476714,
            "unit": "ns/iter",
            "extra": "iterations: 243343\ncpu: 2881.825653501424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5151.536778013043,
            "unit": "ns/iter",
            "extra": "iterations: 136481\ncpu: 5151.194671785845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5302.398996928272,
            "unit": "ns/iter",
            "extra": "iterations: 132194\ncpu: 5302.096161701706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1892.4745662549421,
            "unit": "ns/iter",
            "extra": "iterations: 372281\ncpu: 1892.4594593868674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10084.095034771952,
            "unit": "ns/iter",
            "extra": "iterations: 70027\ncpu: 10083.953332286066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8049.088880151882,
            "unit": "ns/iter",
            "extra": "iterations: 86476\ncpu: 8048.568388917064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8125.518587403581,
            "unit": "ns/iter",
            "extra": "iterations: 86564\ncpu: 8124.537914144488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8010.254048559877,
            "unit": "ns/iter",
            "extra": "iterations: 87562\ncpu: 8009.54295242232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18734.162058516707,
            "unit": "ns/iter",
            "extra": "iterations: 37289\ncpu: 18733.363726568346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55705.00232166535,
            "unit": "ns/iter",
            "extra": "iterations: 12491\ncpu: 55703.32239212156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44862.64703634919,
            "unit": "ns/iter",
            "extra": "iterations: 15707\ncpu: 44862.98465652272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44376.81550072974,
            "unit": "ns/iter",
            "extra": "iterations: 15767\ncpu: 44373.62212215455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44442.707892232036,
            "unit": "ns/iter",
            "extra": "iterations: 15775\ncpu: 44439.39778130037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26278.25885978278,
            "unit": "ns/iter",
            "extra": "iterations: 26609\ncpu: 26276.8048404672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44079.66858177279,
            "unit": "ns/iter",
            "extra": "iterations: 16013\ncpu: 44076.225566727626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1903.997447095824,
            "unit": "ns/iter",
            "extra": "iterations: 364291\ncpu: 1903.9086883837438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11873.92308997302,
            "unit": "ns/iter",
            "extra": "iterations: 58952\ncpu: 11872.90337902017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9051.568102880463,
            "unit": "ns/iter",
            "extra": "iterations: 77449\ncpu: 9050.92899843778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8097.3062372722925,
            "unit": "ns/iter",
            "extra": "iterations: 86913\ncpu: 8097.370934152506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9376.009597702629,
            "unit": "ns/iter",
            "extra": "iterations: 74497\ncpu: 9375.66479187089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18754.242364351594,
            "unit": "ns/iter",
            "extra": "iterations: 37947\ncpu: 18753.208422273292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56918.41261261213,
            "unit": "ns/iter",
            "extra": "iterations: 12210\ncpu: 56914.67649467705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46817.077222674336,
            "unit": "ns/iter",
            "extra": "iterations: 14892\ncpu: 46814.1753961864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45862.15120611507,
            "unit": "ns/iter",
            "extra": "iterations: 15297\ncpu: 45859.80911289851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44921.52184278508,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 44920.35438144373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28475.71123298792,
            "unit": "ns/iter",
            "extra": "iterations: 24615\ncpu: 28475.40524070687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46249.58842022891,
            "unit": "ns/iter",
            "extra": "iterations: 15268\ncpu: 46245.75582918538 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421408396,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 626.3151478732714,
            "unit": "ns/iter",
            "extra": "iterations: 1114975\ncpu: 626.2770017264961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5538.499780000166,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5538.354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10930.62991558604,
            "unit": "ns/iter",
            "extra": "iterations: 77712\ncpu: 10929.856392835085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15920.914500605879,
            "unit": "ns/iter",
            "extra": "iterations: 52784\ncpu: 15920.492952409819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20938.4976129736,
            "unit": "ns/iter",
            "extra": "iterations: 39589\ncpu: 20937.70744398697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25919.963079972353,
            "unit": "ns/iter",
            "extra": "iterations: 32286\ncpu: 25919.87548782755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31219.709520085817,
            "unit": "ns/iter",
            "extra": "iterations: 26859\ncpu: 31218.7981682118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36237.6215351351,
            "unit": "ns/iter",
            "extra": "iterations: 23125\ncpu: 36235.757837837846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42296.6230550603,
            "unit": "ns/iter",
            "extra": "iterations: 20759\ncpu: 42293.78582783369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 576.8211024339362,
            "unit": "ns/iter",
            "extra": "iterations: 1215964\ncpu: 576.792240559754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 448.6270885096283,
            "unit": "ns/iter",
            "extra": "iterations: 1563615\ncpu: 448.5980884041149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 449.7160669181782,
            "unit": "ns/iter",
            "extra": "iterations: 1555930\ncpu: 449.6930453169477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 433.73099835637663,
            "unit": "ns/iter",
            "extra": "iterations: 1613492\ncpu: 433.7166840616505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 930.4174158832038,
            "unit": "ns/iter",
            "extra": "iterations: 749672\ncpu: 930.3628786989506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1518.3937634609347,
            "unit": "ns/iter",
            "extra": "iterations: 523271\ncpu: 1518.3138373806314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9667.664155959732,
            "unit": "ns/iter",
            "extra": "iterations: 85766\ncpu: 9667.234102091734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9624.795457038863,
            "unit": "ns/iter",
            "extra": "iterations: 82017\ncpu: 9624.097443213013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9944.33054316583,
            "unit": "ns/iter",
            "extra": "iterations: 81835\ncpu: 9943.687908596583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9359.384572888719,
            "unit": "ns/iter",
            "extra": "iterations: 86886\ncpu: 9358.836866698906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27332.45504574913,
            "unit": "ns/iter",
            "extra": "iterations: 30164\ncpu: 27331.000530433703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260890.83661888342,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 260872.28195937912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197118.6608956618,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 197104.7783933521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200843.2214236007,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 200828.17064688096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200597.2182282021,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 200587.0129870124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102749.06198444484,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 102743.48338439791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193280.60304318584,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 193273.19310807792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5554.999960000373,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5554.845999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25831.128325068898,
            "unit": "ns/iter",
            "extra": "iterations: 32067\ncpu: 25830.80737206473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22510.624802656726,
            "unit": "ns/iter",
            "extra": "iterations: 36738\ncpu: 22510.18836082534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22970.573640658764,
            "unit": "ns/iter",
            "extra": "iterations: 36617\ncpu: 22970.194172105847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22235.90340587271,
            "unit": "ns/iter",
            "extra": "iterations: 37083\ncpu: 22234.608850416695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 42747.02516212777,
            "unit": "ns/iter",
            "extra": "iterations: 19275\ncpu: 42744.798962386376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 278639.29279134615,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 278625.72245157126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214973.0528775252,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 214960.94441711868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 214552.5864791502,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 214539.84702689305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214300.9463235269,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 214287.72058823478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111204.17820399016,
            "unit": "ns/iter",
            "extra": "iterations: 7873\ncpu: 111195.98628223088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204739.12901700794,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 204727.6701323254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 837870.4045336016,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 837828.2476024393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 442660.8146870346,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 442627.84622966836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2522.6416247237285,
            "unit": "ns/iter",
            "extra": "iterations: 323058\ncpu: 2522.4699589547376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9228.612165227923,
            "unit": "ns/iter",
            "extra": "iterations: 89912\ncpu: 9224.650769641437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9507.00857106575,
            "unit": "ns/iter",
            "extra": "iterations: 86687\ncpu: 9506.898381533521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9202.031512391079,
            "unit": "ns/iter",
            "extra": "iterations: 88251\ncpu: 9201.563721657569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8974.055583773159,
            "unit": "ns/iter",
            "extra": "iterations: 90566\ncpu: 8973.558509816108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26715.658630942497,
            "unit": "ns/iter",
            "extra": "iterations: 31277\ncpu: 26714.109409470133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264599.82638681034,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 264587.9460269884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198849.8164759704,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 198847.39130434665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199658.50833523375,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 199652.59191596205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198354.66984560204,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 198342.98365122633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101780.96284216316,
            "unit": "ns/iter",
            "extra": "iterations: 8585\ncpu: 101778.10133954558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191350.7502728729,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 191340.31870770472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 210.17895601271826,
            "unit": "ns/iter",
            "extra": "iterations: 3302454\ncpu: 210.1703460517531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1510.010619560261,
            "unit": "ns/iter",
            "extra": "iterations: 484860\ncpu: 1509.966382048427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1240.6152614151922,
            "unit": "ns/iter",
            "extra": "iterations: 565059\ncpu: 1240.5644366340516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1184.7091284701378,
            "unit": "ns/iter",
            "extra": "iterations: 589102\ncpu: 1184.6327121618938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 943.4062415262787,
            "unit": "ns/iter",
            "extra": "iterations: 741261\ncpu: 943.3666414393823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8842.535731900001,
            "unit": "ns/iter",
            "extra": "iterations: 79075\ncpu: 8841.89946253553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12089.779799409092,
            "unit": "ns/iter",
            "extra": "iterations: 57929\ncpu: 12089.616599630657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2904.0648899576886,
            "unit": "ns/iter",
            "extra": "iterations: 239544\ncpu: 2904.028904919349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2901.941343740444,
            "unit": "ns/iter",
            "extra": "iterations: 239838\ncpu: 2901.9000325219386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2920.1411193635117,
            "unit": "ns/iter",
            "extra": "iterations: 239797\ncpu: 2919.9201824876804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5127.701561825111,
            "unit": "ns/iter",
            "extra": "iterations: 136571\ncpu: 5127.620797973214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5396.599041075808,
            "unit": "ns/iter",
            "extra": "iterations: 129103\ncpu: 5396.436953440261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1887.1306377478868,
            "unit": "ns/iter",
            "extra": "iterations: 375305\ncpu: 1887.030548487239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10097.737651498466,
            "unit": "ns/iter",
            "extra": "iterations: 69968\ncpu: 10097.284472902005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7973.395234583412,
            "unit": "ns/iter",
            "extra": "iterations: 88135\ncpu: 7972.747489646565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7963.985312560409,
            "unit": "ns/iter",
            "extra": "iterations: 88511\ncpu: 7963.7638259651785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7844.609843696206,
            "unit": "ns/iter",
            "extra": "iterations: 89377\ncpu: 7844.269778578389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18137.10425197621,
            "unit": "ns/iter",
            "extra": "iterations: 38829\ncpu: 18135.91387880175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55286.73509092083,
            "unit": "ns/iter",
            "extra": "iterations: 12593\ncpu: 55284.26109743561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44257.07503307295,
            "unit": "ns/iter",
            "extra": "iterations: 15873\ncpu: 44254.06665406634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44159.04146218802,
            "unit": "ns/iter",
            "extra": "iterations: 15894\ncpu: 44156.82647540035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43772.34236146015,
            "unit": "ns/iter",
            "extra": "iterations: 16024\ncpu: 43771.72990514228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26004.360697811517,
            "unit": "ns/iter",
            "extra": "iterations: 26884\ncpu: 26003.477905073698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43304.77780534843,
            "unit": "ns/iter",
            "extra": "iterations: 16121\ncpu: 43302.0160039696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2293.5602854983686,
            "unit": "ns/iter",
            "extra": "iterations: 305571\ncpu: 2293.430659323011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10011.256432407963,
            "unit": "ns/iter",
            "extra": "iterations: 69453\ncpu: 10010.99016601159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9074.88800124076,
            "unit": "ns/iter",
            "extra": "iterations: 77358\ncpu: 9074.362056930191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9322.90097898002,
            "unit": "ns/iter",
            "extra": "iterations: 75691\ncpu: 9322.180972638858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9114.58608011035,
            "unit": "ns/iter",
            "extra": "iterations: 76969\ncpu: 9114.093985890317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18147.977565177447,
            "unit": "ns/iter",
            "extra": "iterations: 38779\ncpu: 18146.67990407203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55715.13456147125,
            "unit": "ns/iter",
            "extra": "iterations: 12485\ncpu: 55714.064877853736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43513.83450263223,
            "unit": "ns/iter",
            "extra": "iterations: 15964\ncpu: 43510.48609371151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45964.49004402832,
            "unit": "ns/iter",
            "extra": "iterations: 15217\ncpu: 45962.581323519895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43377.565933390964,
            "unit": "ns/iter",
            "extra": "iterations: 16274\ncpu: 43375.26115275895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28270.356094807667,
            "unit": "ns/iter",
            "extra": "iterations: 24808\ncpu: 28268.901160916146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44995.7535487954,
            "unit": "ns/iter",
            "extra": "iterations: 15780\ncpu: 44992.15462610899 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421921135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 631.2371685544571,
            "unit": "ns/iter",
            "extra": "iterations: 1105838\ncpu: 631.2122571298871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5598.261760000014,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5598.151000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10887.615409450716,
            "unit": "ns/iter",
            "extra": "iterations: 77433\ncpu: 10887.285782547491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16376.199314922747,
            "unit": "ns/iter",
            "extra": "iterations: 51381\ncpu: 16376.076759891785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21224.09876606032,
            "unit": "ns/iter",
            "extra": "iterations: 39305\ncpu: 21223.320188271202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26441.066148861908,
            "unit": "ns/iter",
            "extra": "iterations: 31157\ncpu: 26439.51599961487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32035.545897183994,
            "unit": "ns/iter",
            "extra": "iterations: 26494\ncpu: 32033.313202989364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36995.80888184155,
            "unit": "ns/iter",
            "extra": "iterations: 22698\ncpu: 36993.63380033484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41037.03606861792,
            "unit": "ns/iter",
            "extra": "iterations: 20461\ncpu: 41033.21929524465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 572.3134308955961,
            "unit": "ns/iter",
            "extra": "iterations: 1223083\ncpu: 572.2607541761272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 442.97638406670563,
            "unit": "ns/iter",
            "extra": "iterations: 1581517\ncpu: 442.9419980942354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 472.1032800834178,
            "unit": "ns/iter",
            "extra": "iterations: 1585417\ncpu: 472.0697456883587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 434.04833982905376,
            "unit": "ns/iter",
            "extra": "iterations: 1634139\ncpu: 434.03920963883786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 942.1759205671739,
            "unit": "ns/iter",
            "extra": "iterations: 741255\ncpu: 942.1330041618602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1529.5646263209053,
            "unit": "ns/iter",
            "extra": "iterations: 520500\ncpu: 1529.5535062439963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9470.066697555234,
            "unit": "ns/iter",
            "extra": "iterations: 88489\ncpu: 9469.896823333976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9666.08196096197,
            "unit": "ns/iter",
            "extra": "iterations: 83918\ncpu: 9665.509187540238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10002.064634325261,
            "unit": "ns/iter",
            "extra": "iterations: 81876\ncpu: 10001.830817333544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9482.906273540566,
            "unit": "ns/iter",
            "extra": "iterations: 86283\ncpu: 9482.250269462113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27360.543552845953,
            "unit": "ns/iter",
            "extra": "iterations: 30021\ncpu: 27358.90876386538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259397.02116245532,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 259373.65126676552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197635.9552686357,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 197621.78925524614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 197385.0321461579,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 197371.50786309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198893.49644251578,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 198879.82556805175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102555.79432458151,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 102547.98311444627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200001.73165851826,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 199989.6398399285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5422.087460000285,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5421.6849999999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25816.237763108285,
            "unit": "ns/iter",
            "extra": "iterations: 32116\ncpu: 25814.70606551255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22689.791662138887,
            "unit": "ns/iter",
            "extra": "iterations: 36820\ncpu: 22688.280825638278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22966.633680745024,
            "unit": "ns/iter",
            "extra": "iterations: 36460\ncpu: 22965.13713658804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22031.97204024942,
            "unit": "ns/iter",
            "extra": "iterations: 38162\ncpu: 22030.166133850475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44394.88511112231,
            "unit": "ns/iter",
            "extra": "iterations: 18853\ncpu: 44392.56351774264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277169.45355887775,
            "unit": "ns/iter",
            "extra": "iterations: 3133\ncpu: 277151.57995531405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214985.78300716585,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 214971.88506316504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215059.33958074544,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 215052.35511713993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214482.12315271693,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 214472.98029556664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109481.84878905847,
            "unit": "ns/iter",
            "extra": "iterations: 7969\ncpu: 109477.39992470792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205334.25889281867,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 205322.75618374566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 829837.8714788898,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 829773.3274647876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 455809.1537672698,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 455770.6304459227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2455.4561497407485,
            "unit": "ns/iter",
            "extra": "iterations: 323225\ncpu: 2455.2797586820225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9013.190624173529,
            "unit": "ns/iter",
            "extra": "iterations: 90744\ncpu: 9012.559508066608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9400.211358644645,
            "unit": "ns/iter",
            "extra": "iterations: 88338\ncpu: 9399.744164459233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9116.977476384,
            "unit": "ns/iter",
            "extra": "iterations: 90616\ncpu: 9116.249889644174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9019.117516342116,
            "unit": "ns/iter",
            "extra": "iterations: 92702\ncpu: 9019.053526353295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26429.22566273661,
            "unit": "ns/iter",
            "extra": "iterations: 31649\ncpu: 26428.218901071028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265673.736952606,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 265671.62567486486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199798.29284903116,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 199791.39614074875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199348.92091547037,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 199341.3550872424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197939.09350416934,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 197933.67048774927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100820.76015185167,
            "unit": "ns/iter",
            "extra": "iterations: 8693\ncpu: 100818.91176808883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192222.2300520367,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 192215.7849089323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 211.94319023057758,
            "unit": "ns/iter",
            "extra": "iterations: 3301404\ncpu: 211.93934459399637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1517.229260064133,
            "unit": "ns/iter",
            "extra": "iterations: 462405\ncpu: 1517.1602815713393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1163.6382921135646,
            "unit": "ns/iter",
            "extra": "iterations: 602218\ncpu: 1163.6297819062127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1249.3180689036224,
            "unit": "ns/iter",
            "extra": "iterations: 561567\ncpu: 1249.2769340078755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 938.93150920173,
            "unit": "ns/iter",
            "extra": "iterations: 745341\ncpu: 938.9156104387091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9002.962409668758,
            "unit": "ns/iter",
            "extra": "iterations: 78185\ncpu: 9002.799769776824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12565.623440900994,
            "unit": "ns/iter",
            "extra": "iterations: 55561\ncpu: 12565.227407714008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2852.8540745935657,
            "unit": "ns/iter",
            "extra": "iterations: 245276\ncpu: 2852.7564865702275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2871.5950946679113,
            "unit": "ns/iter",
            "extra": "iterations: 243694\ncpu: 2871.5073001387173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2871.7547721821516,
            "unit": "ns/iter",
            "extra": "iterations: 243023\ncpu: 2871.601864844054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5117.7252695563475,
            "unit": "ns/iter",
            "extra": "iterations: 136057\ncpu: 5117.416964948513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5364.0242062936995,
            "unit": "ns/iter",
            "extra": "iterations: 130338\ncpu: 5363.92686706869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1879.2479760472952,
            "unit": "ns/iter",
            "extra": "iterations: 373403\ncpu: 1879.2130754171878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10057.160259259916,
            "unit": "ns/iter",
            "extra": "iterations: 69737\ncpu: 10056.168174713473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7960.0577795928075,
            "unit": "ns/iter",
            "extra": "iterations: 88128\ncpu: 7959.6064814815245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7955.058531746673,
            "unit": "ns/iter",
            "extra": "iterations: 87696\ncpu: 7954.5931399379815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7916.605064465397,
            "unit": "ns/iter",
            "extra": "iterations: 88341\ncpu: 7916.196330129898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18100.035547576328,
            "unit": "ns/iter",
            "extra": "iterations: 30635\ncpu: 18099.57238452759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55633.42057790294,
            "unit": "ns/iter",
            "extra": "iterations: 12528\ncpu: 55628.86334610483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44292.16267004027,
            "unit": "ns/iter",
            "extra": "iterations: 15805\ncpu: 44289.91458399189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44119.87941565181,
            "unit": "ns/iter",
            "extra": "iterations: 15881\ncpu: 44118.57565644466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44097.582808166466,
            "unit": "ns/iter",
            "extra": "iterations: 15868\ncpu: 44094.555079404425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26157.658891583513,
            "unit": "ns/iter",
            "extra": "iterations: 26795\ncpu: 26156.163463333138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43746.357570096945,
            "unit": "ns/iter",
            "extra": "iterations: 16050\ncpu: 43743.23987539015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1930.7791235453476,
            "unit": "ns/iter",
            "extra": "iterations: 364765\ncpu: 1930.637807903736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9979.973548903079,
            "unit": "ns/iter",
            "extra": "iterations: 70016\ncpu: 9979.740345064145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9581.965357651938,
            "unit": "ns/iter",
            "extra": "iterations: 73032\ncpu: 9581.609431482035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8084.85554800344,
            "unit": "ns/iter",
            "extra": "iterations: 86797\ncpu: 8084.401534615194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9363.324462805533,
            "unit": "ns/iter",
            "extra": "iterations: 74554\ncpu: 9362.633795637958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18913.72381549552,
            "unit": "ns/iter",
            "extra": "iterations: 36682\ncpu: 18912.30303691214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56416.16047173895,
            "unit": "ns/iter",
            "extra": "iterations: 12295\ncpu: 56411.858479057606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44948.17280986151,
            "unit": "ns/iter",
            "extra": "iterations: 15410\ncpu: 44944.646333549135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45524.86501628551,
            "unit": "ns/iter",
            "extra": "iterations: 15350\ncpu: 45522.058631921325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43591.30866966144,
            "unit": "ns/iter",
            "extra": "iterations: 16056\ncpu: 43588.77678126489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25852.738584305935,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 25850.8644894341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45075.32384295953,
            "unit": "ns/iter",
            "extra": "iterations: 15665\ncpu: 45075.02074688762 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702460358763,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 626.190164268797,
            "unit": "ns/iter",
            "extra": "iterations: 1108184\ncpu: 626.1900550811057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5485.911689999057,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5485.360999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10710.51080583115,
            "unit": "ns/iter",
            "extra": "iterations: 77597\ncpu: 10709.527430184155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16009.695331179124,
            "unit": "ns/iter",
            "extra": "iterations: 52283\ncpu: 16008.463554118933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21313.570368124027,
            "unit": "ns/iter",
            "extra": "iterations: 39606\ncpu: 21311.44776044034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25930.376223819363,
            "unit": "ns/iter",
            "extra": "iterations: 32276\ncpu: 25928.86045358782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31338.401595048876,
            "unit": "ns/iter",
            "extra": "iterations: 26833\ncpu: 31336.019080982347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35955.84616045259,
            "unit": "ns/iter",
            "extra": "iterations: 23284\ncpu: 35953.71070262839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41082.47557352234,
            "unit": "ns/iter",
            "extra": "iterations: 20531\ncpu: 41082.40709171499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 573.0821259678232,
            "unit": "ns/iter",
            "extra": "iterations: 1220978\ncpu: 573.048900143983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 445.41188421657847,
            "unit": "ns/iter",
            "extra": "iterations: 1566683\ncpu: 445.4066329946771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 448.1355864548947,
            "unit": "ns/iter",
            "extra": "iterations: 1563283\ncpu: 448.09858483716664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 430.0158596445897,
            "unit": "ns/iter",
            "extra": "iterations: 1639381\ncpu: 429.98973393006156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 930.3344671517527,
            "unit": "ns/iter",
            "extra": "iterations: 754089\ncpu: 930.2789193318025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1525.2110876489662,
            "unit": "ns/iter",
            "extra": "iterations: 521878\ncpu: 1525.1717834436415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9784.44473283422,
            "unit": "ns/iter",
            "extra": "iterations: 82065\ncpu: 9783.921281910696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9675.061651768616,
            "unit": "ns/iter",
            "extra": "iterations: 82009\ncpu: 9674.625955687772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9940.933372893141,
            "unit": "ns/iter",
            "extra": "iterations: 84260\ncpu: 9940.342985995714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9955.28603573464,
            "unit": "ns/iter",
            "extra": "iterations: 82217\ncpu: 9954.665093593765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27874.53326846415,
            "unit": "ns/iter",
            "extra": "iterations: 29803\ncpu: 27872.39539643655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263534.0894941645,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 263517.1505537264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198488.65473932703,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 198473.90995260718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199068.856811863,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 199055.86190917518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199241.23789668552,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 199235.62659254146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103240.08991825802,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 103237.40078189781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193096.36775763702,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 193083.6576735951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5746.0417800007235,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5745.573999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26036.070139661566,
            "unit": "ns/iter",
            "extra": "iterations: 32364\ncpu: 26034.393152885914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23100.319028875696,
            "unit": "ns/iter",
            "extra": "iterations: 36329\ncpu: 23059.208896473858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23059.593122343955,
            "unit": "ns/iter",
            "extra": "iterations: 36495\ncpu: 23059.17248938214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22718.267986144136,
            "unit": "ns/iter",
            "extra": "iterations: 37237\ncpu: 22717.78875849292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44580.44793469121,
            "unit": "ns/iter",
            "extra": "iterations: 18496\ncpu: 44578.10878027683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 278032.20314502314,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 278021.148908858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218444.79389123202,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 218438.09287310662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216919.85728769697,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 216909.22686945533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 216023.95164508885,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 216010.66799601194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110133.02854626805,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 110129.91700201172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204427.0739089709,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 204419.92022524678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 837838.1026315502,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 837818.4210526353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 462949.40186918736,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 462934.68328141083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2468.8978372104,
            "unit": "ns/iter",
            "extra": "iterations: 325598\ncpu: 2468.8981504800327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8808.513361386329,
            "unit": "ns/iter",
            "extra": "iterations: 92206\ncpu: 8808.460403878265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9141.065077275942,
            "unit": "ns/iter",
            "extra": "iterations: 89678\ncpu: 9140.787038069528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9316.275814863202,
            "unit": "ns/iter",
            "extra": "iterations: 88389\ncpu: 9315.880935410445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9010.883395603742,
            "unit": "ns/iter",
            "extra": "iterations: 91000\ncpu: 9010.641758241763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27008.082557541158,
            "unit": "ns/iter",
            "extra": "iterations: 30936\ncpu: 27006.9401344713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265848.92985073256,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 265844.56716417876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200661.45792475177,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 200657.1037628283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199303.82840907545,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 199301.43181818203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197774.21619156477,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 197768.80273660237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101559.4284725453,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 101559.5523765572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189872.74018972364,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 189868.19749892267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 212.60246338192616,
            "unit": "ns/iter",
            "extra": "iterations: 3276390\ncpu: 212.60301734530955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1519.770630681781,
            "unit": "ns/iter",
            "extra": "iterations: 458710\ncpu: 1519.7288046914048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1123.4998343480586,
            "unit": "ns/iter",
            "extra": "iterations: 621786\ncpu: 1123.455015069497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1320.6516834366835,
            "unit": "ns/iter",
            "extra": "iterations: 608725\ncpu: 1320.5319314961653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 937.7548847287142,
            "unit": "ns/iter",
            "extra": "iterations: 743030\ncpu: 937.7544648264449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8915.184838117144,
            "unit": "ns/iter",
            "extra": "iterations: 78328\ncpu: 8915.080175671546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12601.699015141214,
            "unit": "ns/iter",
            "extra": "iterations: 55541\ncpu: 12600.91644010737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2872.9084668668033,
            "unit": "ns/iter",
            "extra": "iterations: 240077\ncpu: 2872.6716845012356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2866.338669606109,
            "unit": "ns/iter",
            "extra": "iterations: 243116\ncpu: 2866.1643001694824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2881.4180922296196,
            "unit": "ns/iter",
            "extra": "iterations: 240899\ncpu: 2881.261856628726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5198.524844408402,
            "unit": "ns/iter",
            "extra": "iterations: 129345\ncpu: 5198.103521589552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5360.458967867261,
            "unit": "ns/iter",
            "extra": "iterations: 130739\ncpu: 5360.235277920112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1875.8533230628782,
            "unit": "ns/iter",
            "extra": "iterations: 369990\ncpu: 1875.6420443795787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10028.623796901418,
            "unit": "ns/iter",
            "extra": "iterations: 70547\ncpu: 10028.616383403874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7986.068693616467,
            "unit": "ns/iter",
            "extra": "iterations: 87126\ncpu: 7985.561141335581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7940.472593720382,
            "unit": "ns/iter",
            "extra": "iterations: 88082\ncpu: 7939.942326468492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7838.736295056719,
            "unit": "ns/iter",
            "extra": "iterations: 88417\ncpu: 7838.328601965601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18306.41209938549,
            "unit": "ns/iter",
            "extra": "iterations: 38316\ncpu: 18304.676897379766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55738.460355595045,
            "unit": "ns/iter",
            "extra": "iterations: 12486\ncpu: 55738.39500240316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44407.12462139963,
            "unit": "ns/iter",
            "extra": "iterations: 15848\ncpu: 44403.57142857166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44032.86212991215,
            "unit": "ns/iter",
            "extra": "iterations: 15841\ncpu: 44030.919765166575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43815.37778194721,
            "unit": "ns/iter",
            "extra": "iterations: 15996\ncpu: 43812.734433608406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26298.244035599968,
            "unit": "ns/iter",
            "extra": "iterations: 26742\ncpu: 26296.283000523614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43518.16762571376,
            "unit": "ns/iter",
            "extra": "iterations: 15988\ncpu: 43516.24343257413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1900.773956454715,
            "unit": "ns/iter",
            "extra": "iterations: 368168\ncpu: 1900.7165207188314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11902.6953494324,
            "unit": "ns/iter",
            "extra": "iterations: 58595\ncpu: 11902.358563017322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9464.750558874734,
            "unit": "ns/iter",
            "extra": "iterations: 73809\ncpu: 9464.601877819887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9937.352215623463,
            "unit": "ns/iter",
            "extra": "iterations: 70048\ncpu: 9937.33297167669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8894.690506490628,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8894.49987274118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18347.801935162548,
            "unit": "ns/iter",
            "extra": "iterations: 38033\ncpu: 18347.57184550256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55614.85723492899,
            "unit": "ns/iter",
            "extra": "iterations: 12412\ncpu: 55614.25233644856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44586.61734141177,
            "unit": "ns/iter",
            "extra": "iterations: 15685\ncpu: 44586.51577940757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45144.82669956537,
            "unit": "ns/iter",
            "extra": "iterations: 15401\ncpu: 45143.821829751614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45496.24234164492,
            "unit": "ns/iter",
            "extra": "iterations: 15408\ncpu: 45495.66458982368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26103.26731899788,
            "unit": "ns/iter",
            "extra": "iterations: 26878\ncpu: 26102.477862936474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45470.44827586652,
            "unit": "ns/iter",
            "extra": "iterations: 15776\ncpu: 45470.404411764626 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479535640,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 633.6287548003738,
            "unit": "ns/iter",
            "extra": "iterations: 1106417\ncpu: 633.6213199905642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5651.828729999693,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5651.7469999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11054.144812251425,
            "unit": "ns/iter",
            "extra": "iterations: 75553\ncpu: 11053.656373671462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16378.127969678224,
            "unit": "ns/iter",
            "extra": "iterations: 51184\ncpu: 16378.063457330423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21638.758563721643,
            "unit": "ns/iter",
            "extra": "iterations: 38739\ncpu: 21637.83783783784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26764.981866767794,
            "unit": "ns/iter",
            "extra": "iterations: 31434\ncpu: 26764.43023477762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32291.406714831897,
            "unit": "ns/iter",
            "extra": "iterations: 25883\ncpu: 32290.348877641718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37348.92724506668,
            "unit": "ns/iter",
            "extra": "iterations: 22349\ncpu: 37347.50995570271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41484.11008261158,
            "unit": "ns/iter",
            "extra": "iterations: 20094\ncpu: 41482.666467602285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 566.1184735696943,
            "unit": "ns/iter",
            "extra": "iterations: 1238445\ncpu: 566.0938515638562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 442.8143711518076,
            "unit": "ns/iter",
            "extra": "iterations: 1586289\ncpu: 442.8131317811574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 445.02640176499443,
            "unit": "ns/iter",
            "extra": "iterations: 1572357\ncpu: 445.0203102730482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.6348958141737,
            "unit": "ns/iter",
            "extra": "iterations: 1658239\ncpu: 421.61268671162645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 916.4337802466392,
            "unit": "ns/iter",
            "extra": "iterations: 756821\ncpu: 916.395818826381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1518.7384991184742,
            "unit": "ns/iter",
            "extra": "iterations: 522373\ncpu: 1518.733548632873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9598.544811014772,
            "unit": "ns/iter",
            "extra": "iterations: 84901\ncpu: 9598.239125569793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9831.331615779096,
            "unit": "ns/iter",
            "extra": "iterations: 83452\ncpu: 9830.938743229624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9592.555478510722,
            "unit": "ns/iter",
            "extra": "iterations: 85087\ncpu: 9592.008179862973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9368.981850096643,
            "unit": "ns/iter",
            "extra": "iterations: 87163\ncpu: 9368.77459472486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27471.877981253387,
            "unit": "ns/iter",
            "extra": "iterations: 29979\ncpu: 27470.94299342872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259350.5647234685,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 259344.27503736882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197980.1624798342,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 197968.42590458645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201705.61675539293,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 201699.02800277696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196222.79714154737,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 196217.98063623835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104110.6656346771,
            "unit": "ns/iter",
            "extra": "iterations: 8398\ncpu: 104106.9897594662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195559.08605012333,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 195549.21268573956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5651.739170000383,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5651.441999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25649.363669734605,
            "unit": "ns/iter",
            "extra": "iterations: 32689\ncpu: 25648.31288812753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22780.72139194901,
            "unit": "ns/iter",
            "extra": "iterations: 36668\ncpu: 22779.31711574124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22448.347340381555,
            "unit": "ns/iter",
            "extra": "iterations: 36791\ncpu: 22446.7750265011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22252.22308394088,
            "unit": "ns/iter",
            "extra": "iterations: 37264\ncpu: 22251.349828252518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44001.56543703599,
            "unit": "ns/iter",
            "extra": "iterations: 19003\ncpu: 43998.52654843966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279311.20897435606,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 279300.8333333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217245.7583809328,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 217234.83983113946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216372.28736498218,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 216353.9311730725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214197.8171120444,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 214186.81049276836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112374.74574536015,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 112367.34484964814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205505.2529035318,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 205489.26285849814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 845402.5229277015,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 845345.5908289279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476306.12506827747,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 476297.59694156173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2429.8111004925004,
            "unit": "ns/iter",
            "extra": "iterations: 330652\ncpu: 2429.7451701486684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9097.323120363226,
            "unit": "ns/iter",
            "extra": "iterations: 90310\ncpu: 9097.279371055247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9450.185470016411,
            "unit": "ns/iter",
            "extra": "iterations: 86731\ncpu: 9449.972904728362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9059.084487932427,
            "unit": "ns/iter",
            "extra": "iterations: 90652\ncpu: 9058.940784538667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8603.378733169771,
            "unit": "ns/iter",
            "extra": "iterations: 94993\ncpu: 8603.060225490308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27136.176694150716,
            "unit": "ns/iter",
            "extra": "iterations: 31048\ncpu: 27136.0699561969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 266272.36530921067,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 266263.28808446415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201954.55308924743,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 201951.99084668307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201460.14216701884,
            "unit": "ns/iter",
            "extra": "iterations: 4347\ncpu: 201450.86266390551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201013.6185472891,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 201012.63133851095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102358.32173811199,
            "unit": "ns/iter",
            "extra": "iterations: 8538\ncpu: 102354.96603419996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191602.12366413022,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 191599.84732824453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 207.32604174277958,
            "unit": "ns/iter",
            "extra": "iterations: 3380561\ncpu: 207.31875567398316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1488.5273699571196,
            "unit": "ns/iter",
            "extra": "iterations: 480399\ncpu: 1488.5037229469667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1162.3537355473927,
            "unit": "ns/iter",
            "extra": "iterations: 600327\ncpu: 1162.3175369423636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1310.0642393399107,
            "unit": "ns/iter",
            "extra": "iterations: 534470\ncpu: 1310.0591239919981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 958.6894750732299,
            "unit": "ns/iter",
            "extra": "iterations: 723739\ncpu: 958.6111844186886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9029.911024192575,
            "unit": "ns/iter",
            "extra": "iterations: 77212\ncpu: 9028.061700253867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12534.08554503669,
            "unit": "ns/iter",
            "extra": "iterations: 55877\ncpu: 12534.012205379726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2884.4176747420984,
            "unit": "ns/iter",
            "extra": "iterations: 244360\ncpu: 2884.333360615475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2882.790424913478,
            "unit": "ns/iter",
            "extra": "iterations: 242567\ncpu: 2882.7334303511952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2872.4175685602563,
            "unit": "ns/iter",
            "extra": "iterations: 245040\ncpu: 2872.3061540973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5238.594802731244,
            "unit": "ns/iter",
            "extra": "iterations: 133878\ncpu: 5238.491761155699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5368.637095350112,
            "unit": "ns/iter",
            "extra": "iterations: 130205\ncpu: 5368.498137552346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1930.211699914816,
            "unit": "ns/iter",
            "extra": "iterations: 360071\ncpu: 1930.1515534436307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9999.752822925633,
            "unit": "ns/iter",
            "extra": "iterations: 70140\ncpu: 9999.441117764518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7912.468663802651,
            "unit": "ns/iter",
            "extra": "iterations: 88460\ncpu: 7911.7544652949555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7898.553760036522,
            "unit": "ns/iter",
            "extra": "iterations: 88430\ncpu: 7898.312789777188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7966.021533725633,
            "unit": "ns/iter",
            "extra": "iterations: 88373\ncpu: 7965.723693888559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18123.141585361573,
            "unit": "ns/iter",
            "extra": "iterations: 38641\ncpu: 18122.784089438683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55381.034748095764,
            "unit": "ns/iter",
            "extra": "iterations: 12346\ncpu: 55379.94492143115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44199.59686814587,
            "unit": "ns/iter",
            "extra": "iterations: 15965\ncpu: 44198.327591607005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44049.32594976739,
            "unit": "ns/iter",
            "extra": "iterations: 15846\ncpu: 44047.78492995084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43893.598837213736,
            "unit": "ns/iter",
            "extra": "iterations: 15996\ncpu: 43892.65441360365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26116.168195490605,
            "unit": "ns/iter",
            "extra": "iterations: 26600\ncpu: 26114.7105263154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43505.5935151283,
            "unit": "ns/iter",
            "extra": "iterations: 16099\ncpu: 43504.78911733617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2280.0975346807254,
            "unit": "ns/iter",
            "extra": "iterations: 307952\ncpu: 2280.0296799500875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9924.860606318218,
            "unit": "ns/iter",
            "extra": "iterations: 70656\ncpu: 9924.540024909375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9381.119720104096,
            "unit": "ns/iter",
            "extra": "iterations: 74599\ncpu: 9380.27855601269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9430.815549907627,
            "unit": "ns/iter",
            "extra": "iterations: 74367\ncpu: 9430.614385412986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9201.975697021437,
            "unit": "ns/iter",
            "extra": "iterations: 75464\ncpu: 9201.240326513152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18894.94894213976,
            "unit": "ns/iter",
            "extra": "iterations: 37056\ncpu: 18893.40457685663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55913.65723472253,
            "unit": "ns/iter",
            "extra": "iterations: 12440\ncpu: 55909.20418006525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44000.47276633101,
            "unit": "ns/iter",
            "extra": "iterations: 15826\ncpu: 43999.026917730385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43893.56566415851,
            "unit": "ns/iter",
            "extra": "iterations: 15960\ncpu: 43892.61904761897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43848.32278162096,
            "unit": "ns/iter",
            "extra": "iterations: 15890\ncpu: 43847.973568282316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25968.978866721343,
            "unit": "ns/iter",
            "extra": "iterations: 27019\ncpu: 25968.462933491188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44387.21726227485,
            "unit": "ns/iter",
            "extra": "iterations: 15838\ncpu: 44384.20255082699 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488603515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 645.6056870815552,
            "unit": "ns/iter",
            "extra": "iterations: 1101303\ncpu: 645.585456500164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5508.838229999924,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5508.611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10736.765855163447,
            "unit": "ns/iter",
            "extra": "iterations: 77798\ncpu: 10736.036916116098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16374.623258491321,
            "unit": "ns/iter",
            "extra": "iterations: 52110\ncpu: 16373.957014008824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21684.41201781913,
            "unit": "ns/iter",
            "extra": "iterations: 39508\ncpu: 21683.038878201885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26277.26607294558,
            "unit": "ns/iter",
            "extra": "iterations: 31777\ncpu: 26276.16515089529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31561.631390032086,
            "unit": "ns/iter",
            "extra": "iterations: 26467\ncpu: 31559.043336985666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36631.748045675224,
            "unit": "ns/iter",
            "extra": "iterations: 22770\ncpu: 36630.70267896357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41523.48281234133,
            "unit": "ns/iter",
            "extra": "iterations: 19898\ncpu: 41522.73595336221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.3983989353558,
            "unit": "ns/iter",
            "extra": "iterations: 1217315\ncpu: 571.3955714009938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 443.96323431261686,
            "unit": "ns/iter",
            "extra": "iterations: 1580713\ncpu: 443.9554808494646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 445.839232156286,
            "unit": "ns/iter",
            "extra": "iterations: 1543387\ncpu: 445.82952946992555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.37280308132995,
            "unit": "ns/iter",
            "extra": "iterations: 1642414\ncpu: 425.3647984004039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 930.9739591186398,
            "unit": "ns/iter",
            "extra": "iterations: 756042\ncpu: 930.9431222074983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1508.3367504254466,
            "unit": "ns/iter",
            "extra": "iterations: 525398\ncpu: 1508.304751826235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10220.069153709133,
            "unit": "ns/iter",
            "extra": "iterations: 81355\ncpu: 10219.779976645563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9934.995146575899,
            "unit": "ns/iter",
            "extra": "iterations: 82210\ncpu: 9934.497019827297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10452.182509263768,
            "unit": "ns/iter",
            "extra": "iterations: 78533\ncpu: 10451.951408961817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9621.720611069839,
            "unit": "ns/iter",
            "extra": "iterations: 83722\ncpu: 9621.318172045589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27740.758701644347,
            "unit": "ns/iter",
            "extra": "iterations: 29391\ncpu: 27739.8012997177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259369.04801920187,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 259359.1236494592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197260.3578193689,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 197251.02795102785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201972.05490466498,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 201961.4059269472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198876.29244850605,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 198867.50572082357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102880.26214160412,
            "unit": "ns/iter",
            "extra": "iterations: 8545\ncpu: 102874.49970743137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193355.17182663287,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 193343.91862007914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5719.365150000044,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5719.124999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26161.86114889937,
            "unit": "ns/iter",
            "extra": "iterations: 32344\ncpu: 26160.77479594361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22977.877923449545,
            "unit": "ns/iter",
            "extra": "iterations: 36002\ncpu: 22977.276262429878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22737.457314235224,
            "unit": "ns/iter",
            "extra": "iterations: 36511\ncpu: 22737.073758593277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22281.231505256997,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 22280.4524691191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43365.65958328887,
            "unit": "ns/iter",
            "extra": "iterations: 19294\ncpu: 43363.8644138073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283941.28621570097,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 283917.26228462195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 215172.25332675606,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 215158.00887136615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215512.3972297786,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 215502.02819688368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214100.36682186802,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 214084.2930654247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109217.20939261308,
            "unit": "ns/iter",
            "extra": "iterations: 7985\ncpu: 109215.76706324407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 202188.58731638736,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 202181.51084168805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 833040.4394736765,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 833016.7543859639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 467163.4731012693,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 467160.917721519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2480.564953600242,
            "unit": "ns/iter",
            "extra": "iterations: 326510\ncpu: 2480.5506722611935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9086.033190134604,
            "unit": "ns/iter",
            "extra": "iterations: 91714\ncpu: 9085.90727696965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9464.594880736575,
            "unit": "ns/iter",
            "extra": "iterations: 87747\ncpu: 9464.434111707533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9176.87475757585,
            "unit": "ns/iter",
            "extra": "iterations: 89203\ncpu: 9176.56917368246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9236.441609793717,
            "unit": "ns/iter",
            "extra": "iterations: 89527\ncpu: 9236.229293956008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26466.962911303875,
            "unit": "ns/iter",
            "extra": "iterations: 31546\ncpu: 26466.195397197727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264873.25305879494,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 264865.1745747524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200362.61947904964,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 200361.54020385147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200651.36186594237,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 200650.29438405848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198006.57989227335,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 198004.48833034156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101762.26953803777,
            "unit": "ns/iter",
            "extra": "iterations: 8637\ncpu: 101761.97753849729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190735.59986973656,
            "unit": "ns/iter",
            "extra": "iterations: 4606\ncpu: 190734.9544072945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.40189588290724,
            "unit": "ns/iter",
            "extra": "iterations: 3412869\ncpu: 205.40085189323173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1509.5521096605016,
            "unit": "ns/iter",
            "extra": "iterations: 463321\ncpu: 1509.5316206258854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1220.7254056807865,
            "unit": "ns/iter",
            "extra": "iterations: 573049\ncpu: 1220.6998005406203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1254.6397456496443,
            "unit": "ns/iter",
            "extra": "iterations: 557656\ncpu: 1254.5911816603832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 937.373208076981,
            "unit": "ns/iter",
            "extra": "iterations: 747800\ncpu: 937.3566461620807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9033.164479462152,
            "unit": "ns/iter",
            "extra": "iterations: 77420\ncpu: 9032.86747610442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12587.992452830746,
            "unit": "ns/iter",
            "extra": "iterations: 55650\ncpu: 12564.434860736801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2880.431747705105,
            "unit": "ns/iter",
            "extra": "iterations: 242827\ncpu: 2880.4214523096434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2875.652045008747,
            "unit": "ns/iter",
            "extra": "iterations: 242175\ncpu: 2875.643646123682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2873.582140422428,
            "unit": "ns/iter",
            "extra": "iterations: 243522\ncpu: 2873.569533758766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5103.984020907546,
            "unit": "ns/iter",
            "extra": "iterations: 137367\ncpu: 5103.904140004498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5347.922449856133,
            "unit": "ns/iter",
            "extra": "iterations: 130277\ncpu: 5347.7643789770855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1901.5080118145697,
            "unit": "ns/iter",
            "extra": "iterations: 368019\ncpu: 1901.4591637931778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10129.956679799452,
            "unit": "ns/iter",
            "extra": "iterations: 69044\ncpu: 10129.637622385653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8068.508188194906,
            "unit": "ns/iter",
            "extra": "iterations: 86527\ncpu: 8068.161383152097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7946.2719677229,
            "unit": "ns/iter",
            "extra": "iterations: 87492\ncpu: 7946.1287889177065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7870.942598699531,
            "unit": "ns/iter",
            "extra": "iterations: 88552\ncpu: 7870.802466347517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18331.801530117387,
            "unit": "ns/iter",
            "extra": "iterations: 38167\ncpu: 18330.4320486283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55475.39108595368,
            "unit": "ns/iter",
            "extra": "iterations: 12542\ncpu: 55472.89108595106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44914.04912103038,
            "unit": "ns/iter",
            "extra": "iterations: 15757\ncpu: 44911.74081360715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44208.38704193637,
            "unit": "ns/iter",
            "extra": "iterations: 15882\ncpu: 44207.30386601134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44276.49692134054,
            "unit": "ns/iter",
            "extra": "iterations: 15916\ncpu: 44275.09424478486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26007.531755177093,
            "unit": "ns/iter",
            "extra": "iterations: 26909\ncpu: 26007.402727711935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43430.211194677504,
            "unit": "ns/iter",
            "extra": "iterations: 16222\ncpu: 43428.87436814233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2040.3642046940631,
            "unit": "ns/iter",
            "extra": "iterations: 340391\ncpu: 2040.3333225614067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9870.491793668749,
            "unit": "ns/iter",
            "extra": "iterations: 69946\ncpu: 9869.923941326122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8893.003638521901,
            "unit": "ns/iter",
            "extra": "iterations: 79153\ncpu: 8892.693896630515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9240.441116002277,
            "unit": "ns/iter",
            "extra": "iterations: 75878\ncpu: 9239.953609742017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9088.468050138685,
            "unit": "ns/iter",
            "extra": "iterations: 76667\ncpu: 9087.996139147243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18417.065381344397,
            "unit": "ns/iter",
            "extra": "iterations: 37656\ncpu: 18416.33205863608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55291.95428844878,
            "unit": "ns/iter",
            "extra": "iterations: 12557\ncpu: 55288.651748028606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44843.998003987464,
            "unit": "ns/iter",
            "extra": "iterations: 15531\ncpu: 44843.75764599836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45287.67551679461,
            "unit": "ns/iter",
            "extra": "iterations: 15480\ncpu: 45285.80103359213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45148.42661763795,
            "unit": "ns/iter",
            "extra": "iterations: 15501\ncpu: 45145.94542287616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27146.950711556,
            "unit": "ns/iter",
            "extra": "iterations: 25929\ncpu: 27146.0565390105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44126.661522894,
            "unit": "ns/iter",
            "extra": "iterations: 15812\ncpu: 44124.62054136107 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}