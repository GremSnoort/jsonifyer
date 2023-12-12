window.BENCHMARK_DATA = {
  "lastUpdate": 1702391761082,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-9 22.04 Release c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381086474,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 624.6446076198246,
            "unit": "ns/iter",
            "extra": "iterations: 1119450\ncpu: 624.6204832730359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5840.565306181493,
            "unit": "ns/iter",
            "extra": "iterations: 139068\ncpu: 5840.432018868467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11458.40016221452,
            "unit": "ns/iter",
            "extra": "iterations: 72743\ncpu: 11457.151890903591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16955.226658107425,
            "unit": "ns/iter",
            "extra": "iterations: 49846\ncpu: 16954.67038478514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22302.860165665366,
            "unit": "ns/iter",
            "extra": "iterations: 37666\ncpu: 22301.624807518725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27752.34562320786,
            "unit": "ns/iter",
            "extra": "iterations: 29645\ncpu: 27751.79962894248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33721.299441118885,
            "unit": "ns/iter",
            "extra": "iterations: 25050\ncpu: 33719.90818363273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38607.879981421735,
            "unit": "ns/iter",
            "extra": "iterations: 21530\ncpu: 38607.0645610776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44013.61893880198,
            "unit": "ns/iter",
            "extra": "iterations: 17942\ncpu: 44011.94961542754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 591.8535779085403,
            "unit": "ns/iter",
            "extra": "iterations: 1179460\ncpu: 591.8514404897163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 450.05083987787555,
            "unit": "ns/iter",
            "extra": "iterations: 1554095\ncpu: 450.03928331279667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 442.1599174554234,
            "unit": "ns/iter",
            "extra": "iterations: 1573937\ncpu: 442.1443806200626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 444.36263818002686,
            "unit": "ns/iter",
            "extra": "iterations: 1572948\ncpu: 444.36090703570665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 911.5769100778532,
            "unit": "ns/iter",
            "extra": "iterations: 769288\ncpu: 911.5645895945329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1387.8501168918267,
            "unit": "ns/iter",
            "extra": "iterations: 573607\ncpu: 1387.8284260826654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8667.434521446876,
            "unit": "ns/iter",
            "extra": "iterations: 95726\ncpu: 8667.391304347837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8561.49646648574,
            "unit": "ns/iter",
            "extra": "iterations: 96929\ncpu: 8560.802236688702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9149.02174348681,
            "unit": "ns/iter",
            "extra": "iterations: 89820\ncpu: 9148.44466711199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8052.168510186585,
            "unit": "ns/iter",
            "extra": "iterations: 101798\ncpu: 8051.5628990746345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27214.644626487083,
            "unit": "ns/iter",
            "extra": "iterations: 30762\ncpu: 27212.967297314877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281199.0634920632,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 281168.9814814817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221506.72745744992,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 221503.78460756887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 220740.8064842986,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 220729.40729483275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 219734.36278717348,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 219729.4622570052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109431.37112499813,
            "unit": "ns/iter",
            "extra": "iterations: 8000\ncpu: 109427.81250000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209703.1174342914,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 209700.09645526894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5318.4844559585545,
            "unit": "ns/iter",
            "extra": "iterations: 153242\ncpu: 5318.389214445134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26212.197612856926,
            "unit": "ns/iter",
            "extra": "iterations: 31921\ncpu: 26211.077347200884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22088.800178882528,
            "unit": "ns/iter",
            "extra": "iterations: 38014\ncpu: 22088.501604671965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23070.5988334955,
            "unit": "ns/iter",
            "extra": "iterations: 36005\ncpu: 23070.004166088034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21535.93861558525,
            "unit": "ns/iter",
            "extra": "iterations: 39049\ncpu: 21535.831903505827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45285.33164294802,
            "unit": "ns/iter",
            "extra": "iterations: 18339\ncpu: 45283.766835705195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 307405.83280535275,
            "unit": "ns/iter",
            "extra": "iterations: 2841\ncpu: 307404.4350580763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 240866.82218552532,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 240852.9314616015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 237348.12462502957,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 237335.83310608187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 237000.34684930582,
            "unit": "ns/iter",
            "extra": "iterations: 3650\ncpu: 236975.17808219083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123413.25338600391,
            "unit": "ns/iter",
            "extra": "iterations: 7088\ncpu: 123407.78781038403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 226336.0375426544,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 226319.1913888144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 880711.0289990369,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 880663.61085126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 478663.5187806011,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 478636.7446924303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1420.4475295486343,
            "unit": "ns/iter",
            "extra": "iterations: 560687\ncpu: 1420.3487863995451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8569.26376848018,
            "unit": "ns/iter",
            "extra": "iterations: 95508\ncpu: 8568.594253884496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7784.572980274487,
            "unit": "ns/iter",
            "extra": "iterations: 106611\ncpu: 7784.335575128296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8535.611627081844,
            "unit": "ns/iter",
            "extra": "iterations: 95828\ncpu: 8535.416579705356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7660.201825370735,
            "unit": "ns/iter",
            "extra": "iterations: 108252\ncpu: 7660.085725898845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26816.92781892446,
            "unit": "ns/iter",
            "extra": "iterations: 31324\ncpu: 26816.46660707441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 293976.17271214194,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 293968.78535773733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 222010.45098534613,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 222009.42395149096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 222075.96312200397,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 222070.39656478964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 220273.99448067954,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 220272.93025589566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105961.8898614151,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 105958.18137612435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 213951.65436893716,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 213950.63106796096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.91403834380765,
            "unit": "ns/iter",
            "extra": "iterations: 3618055\ncpu: 193.9090201779691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1562.1341543121378,
            "unit": "ns/iter",
            "extra": "iterations: 443698\ncpu: 1562.128745227613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1178.2349334403348,
            "unit": "ns/iter",
            "extra": "iterations: 593002\ncpu: 1178.2177800412078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1146.7280822304892,
            "unit": "ns/iter",
            "extra": "iterations: 602502\ncpu: 1146.7082266946834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 914.6147765779533,
            "unit": "ns/iter",
            "extra": "iterations: 764629\ncpu: 914.6113997768879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9140.87009013945,
            "unit": "ns/iter",
            "extra": "iterations: 79432\ncpu: 9140.623426326945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14136.667444855946,
            "unit": "ns/iter",
            "extra": "iterations: 49688\ncpu: 14136.602398969524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3196.499634175733,
            "unit": "ns/iter",
            "extra": "iterations: 220051\ncpu: 3196.3744768258066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3143.7919316475636,
            "unit": "ns/iter",
            "extra": "iterations: 221557\ncpu: 3143.7792531944474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3136.7974572456574,
            "unit": "ns/iter",
            "extra": "iterations: 222200\ncpu: 3136.684968496829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5708.981072992481,
            "unit": "ns/iter",
            "extra": "iterations: 122629\ncpu: 5708.9579137072105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5849.861185228883,
            "unit": "ns/iter",
            "extra": "iterations: 119555\ncpu: 5849.708502362925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1890.541503497431,
            "unit": "ns/iter",
            "extra": "iterations: 368993\ncpu: 1890.494941638446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10354.275779235595,
            "unit": "ns/iter",
            "extra": "iterations: 67855\ncpu: 10354.240660231499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8133.733577654492,
            "unit": "ns/iter",
            "extra": "iterations: 86498\ncpu: 8133.519850169894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8160.3684734312865,
            "unit": "ns/iter",
            "extra": "iterations: 86416\ncpu: 8160.345306424658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8028.459697039026,
            "unit": "ns/iter",
            "extra": "iterations: 87140\ncpu: 8028.22354831295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18300.143814027724,
            "unit": "ns/iter",
            "extra": "iterations: 38070\ncpu: 18300.09193590763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 61780.75848621522,
            "unit": "ns/iter",
            "extra": "iterations: 11283\ncpu: 61780.54595409045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49986.98785770123,
            "unit": "ns/iter",
            "extra": "iterations: 14083\ncpu: 49986.84229212527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49542.41010600751,
            "unit": "ns/iter",
            "extra": "iterations: 14150\ncpu: 49540.74204947023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49111.05466170206,
            "unit": "ns/iter",
            "extra": "iterations: 14233\ncpu: 49110.890184782336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27451.766741115272,
            "unit": "ns/iter",
            "extra": "iterations: 25521\ncpu: 27450.879667724417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48246.69600110607,
            "unit": "ns/iter",
            "extra": "iterations: 14454\ncpu: 48246.47156496492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1920.642897951719,
            "unit": "ns/iter",
            "extra": "iterations: 365817\ncpu: 1920.5870694910539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10503.756594273122,
            "unit": "ns/iter",
            "extra": "iterations: 66535\ncpu: 10503.712331855402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8454.105272023251,
            "unit": "ns/iter",
            "extra": "iterations: 83118\ncpu: 8453.972665367195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8136.241063116922,
            "unit": "ns/iter",
            "extra": "iterations: 85936\ncpu: 8136.210668404378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8028.366848511093,
            "unit": "ns/iter",
            "extra": "iterations: 87254\ncpu: 8028.328787218842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18327.363767092862,
            "unit": "ns/iter",
            "extra": "iterations: 38247\ncpu: 18327.09755013438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60786.93029723469,
            "unit": "ns/iter",
            "extra": "iterations: 11506\ncpu: 60786.71128106962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48735.75104398641,
            "unit": "ns/iter",
            "extra": "iterations: 14368\ncpu: 48734.35412026644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48683.8353006531,
            "unit": "ns/iter",
            "extra": "iterations: 14402\ncpu: 48682.523260658636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48778.80721635423,
            "unit": "ns/iter",
            "extra": "iterations: 14384\ncpu: 48778.58036707454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27214.924574589237,
            "unit": "ns/iter",
            "extra": "iterations: 25681\ncpu: 27214.45426579963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47762.4006552446,
            "unit": "ns/iter",
            "extra": "iterations: 14651\ncpu: 47762.20735785925 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382264904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 626.7321447765308,
            "unit": "ns/iter",
            "extra": "iterations: 1116424\ncpu: 626.6993543671581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5954.398677190877,
            "unit": "ns/iter",
            "extra": "iterations: 136830\ncpu: 5954.104363078273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11419.057435079265,
            "unit": "ns/iter",
            "extra": "iterations: 72743\ncpu: 11418.43201407696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17122.600897840108,
            "unit": "ns/iter",
            "extra": "iterations: 41210\ncpu: 17122.07716573647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22418.07943300323,
            "unit": "ns/iter",
            "extra": "iterations: 37390\ncpu: 22417.31479005082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28393.303771560364,
            "unit": "ns/iter",
            "extra": "iterations: 29802\ncpu: 28392.47030400645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33768.003094232765,
            "unit": "ns/iter",
            "extra": "iterations: 24885\ncpu: 33767.07655213985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38892.90520750512,
            "unit": "ns/iter",
            "extra": "iterations: 21373\ncpu: 38891.540728957065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43923.10449904242,
            "unit": "ns/iter",
            "extra": "iterations: 18804\ncpu: 43922.36758136567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 587.1453124510543,
            "unit": "ns/iter",
            "extra": "iterations: 1180649\ncpu: 587.0961649059122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 448.5930445986026,
            "unit": "ns/iter",
            "extra": "iterations: 1564712\ncpu: 448.5794190879848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 443.34526027394645,
            "unit": "ns/iter",
            "extra": "iterations: 1579701\ncpu: 443.3439619269723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 439.80480075475236,
            "unit": "ns/iter",
            "extra": "iterations: 1594166\ncpu: 439.77760157976104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 899.9755745485962,
            "unit": "ns/iter",
            "extra": "iterations: 762033\ncpu: 899.9578758400238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1387.6918725177093,
            "unit": "ns/iter",
            "extra": "iterations: 573068\ncpu: 1387.6183978166632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8716.235352426154,
            "unit": "ns/iter",
            "extra": "iterations: 93821\ncpu: 8715.76192963197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8429.246835314996,
            "unit": "ns/iter",
            "extra": "iterations: 98746\ncpu: 8428.877119073173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9432.686263037998,
            "unit": "ns/iter",
            "extra": "iterations: 88877\ncpu: 9432.187180035324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8176.734165076637,
            "unit": "ns/iter",
            "extra": "iterations: 101153\ncpu: 8176.229078722306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27609.80621038909,
            "unit": "ns/iter",
            "extra": "iterations: 29821\ncpu: 27607.95412628689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 280975.28178583144,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 280961.5011323201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221167.08618051666,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 221158.23559408533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 222892.82284263492,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 222877.20812182745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 219929.7275747478,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 219922.61691796544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109943.96026322471,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 109937.68666160463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 212695.6419843604,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 212690.51808406686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5397.919665272018,
            "unit": "ns/iter",
            "extra": "iterations: 150570\ncpu: 5397.569236899789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25849.185641609754,
            "unit": "ns/iter",
            "extra": "iterations: 31647\ncpu: 25847.67592504819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21880.18757074025,
            "unit": "ns/iter",
            "extra": "iterations: 37991\ncpu: 21878.89500144774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22899.626000980857,
            "unit": "ns/iter",
            "extra": "iterations: 36714\ncpu: 22898.221386936875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21493.180700896777,
            "unit": "ns/iter",
            "extra": "iterations: 38893\ncpu: 21491.486899956355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44067.77076341167,
            "unit": "ns/iter",
            "extra": "iterations: 18771\ncpu: 44065.595865963514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 304465.2845670551,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 304451.6061452508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 234197.72793523603,
            "unit": "ns/iter",
            "extra": "iterations: 3705\ncpu: 234185.88394062073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 234140.15475550457,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 234132.1869962385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 235852.8172685309,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 235833.26092858924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122921.95253521609,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 122915.38028169007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 226601.32018803182,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 226584.30399582157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 871750.7948244172,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 871690.9426987102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 495740.29745041096,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 495709.63172804436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1388.0982457269708,
            "unit": "ns/iter",
            "extra": "iterations: 558864\ncpu: 1387.9929642990055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8487.510007768993,
            "unit": "ns/iter",
            "extra": "iterations: 97824\ncpu: 8486.849852796835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8092.304578697447,
            "unit": "ns/iter",
            "extra": "iterations: 102824\ncpu: 8091.722749552594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8479.707478828606,
            "unit": "ns/iter",
            "extra": "iterations: 98010\ncpu: 8478.889909192994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7521.688933137562,
            "unit": "ns/iter",
            "extra": "iterations: 110989\ncpu: 7521.4552793520215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26866.479536480863,
            "unit": "ns/iter",
            "extra": "iterations: 31153\ncpu: 26864.427181972922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 289856.3264367868,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 289836.71592775016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218331.56835067514,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 218316.1713719667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 217854.28316832447,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 217840.5445544555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 216842.4865332377,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 216828.24314306912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105863.33445217386,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 105857.49220810384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 209567.3494842925,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 209554.68937395152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.64620393265312,
            "unit": "ns/iter",
            "extra": "iterations: 3550780\ncpu: 196.63414799001822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1490.9620191910071,
            "unit": "ns/iter",
            "extra": "iterations: 471159\ncpu: 1490.836214526306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1288.0098523251386,
            "unit": "ns/iter",
            "extra": "iterations: 545252\ncpu: 1287.8980728177112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1221.8345313060006,
            "unit": "ns/iter",
            "extra": "iterations: 572495\ncpu: 1221.7980943065024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 917.5657090404384,
            "unit": "ns/iter",
            "extra": "iterations: 764773\ncpu: 917.5269001389956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8702.490453371878,
            "unit": "ns/iter",
            "extra": "iterations: 80552\ncpu: 8701.780216506102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14108.680516950752,
            "unit": "ns/iter",
            "extra": "iterations: 49289\ncpu: 14107.786727261659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3186.768838245619,
            "unit": "ns/iter",
            "extra": "iterations: 219487\ncpu: 3186.6042180174854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3133.3279926030445,
            "unit": "ns/iter",
            "extra": "iterations: 223877\ncpu: 3133.0744113955516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3113.7254423593477,
            "unit": "ns/iter",
            "extra": "iterations: 223800\ncpu: 3106.404378909736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5458.823082110328,
            "unit": "ns/iter",
            "extra": "iterations: 129009\ncpu: 5458.43003201327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5877.757599684004,
            "unit": "ns/iter",
            "extra": "iterations: 119051\ncpu: 5877.293764857031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1877.8993719537707,
            "unit": "ns/iter",
            "extra": "iterations: 369718\ncpu: 1877.8212042692007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10278.470553859046,
            "unit": "ns/iter",
            "extra": "iterations: 68447\ncpu: 10278.470933715129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8240.807180505408,
            "unit": "ns/iter",
            "extra": "iterations: 84618\ncpu: 8240.3200264719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8190.256617508221,
            "unit": "ns/iter",
            "extra": "iterations: 84624\ncpu: 8189.628237852063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8040.764598141159,
            "unit": "ns/iter",
            "extra": "iterations: 86809\ncpu: 8040.142151159347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18282.26471276089,
            "unit": "ns/iter",
            "extra": "iterations: 38487\ncpu: 18281.74968171037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60724.3308657022,
            "unit": "ns/iter",
            "extra": "iterations: 11482\ncpu: 60723.15798641391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49417.90828651433,
            "unit": "ns/iter",
            "extra": "iterations: 14240\ncpu: 49416.49578651671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49244.00182404927,
            "unit": "ns/iter",
            "extra": "iterations: 14254\ncpu: 49243.945559142005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48699.975882557046,
            "unit": "ns/iter",
            "extra": "iterations: 14305\ncpu: 48699.3638587914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27635.19005813291,
            "unit": "ns/iter",
            "extra": "iterations: 25287\ncpu: 27634.282437616228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47777.244163091986,
            "unit": "ns/iter",
            "extra": "iterations: 14691\ncpu: 47775.68579402366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1913.9303085774084,
            "unit": "ns/iter",
            "extra": "iterations: 367104\ncpu: 1913.859832635961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10077.958493288948,
            "unit": "ns/iter",
            "extra": "iterations: 69290\ncpu: 10077.800548419822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8103.985628181664,
            "unit": "ns/iter",
            "extra": "iterations: 85445\ncpu: 8103.898414184458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8200.992641613651,
            "unit": "ns/iter",
            "extra": "iterations: 85073\ncpu: 8200.831050979761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8260.917838568115,
            "unit": "ns/iter",
            "extra": "iterations: 84407\ncpu: 8260.729560344487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18137.174345521616,
            "unit": "ns/iter",
            "extra": "iterations: 38504\ncpu: 18136.746831497807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61034.51626452111,
            "unit": "ns/iter",
            "extra": "iterations: 11190\ncpu: 61033.646112599825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48849.75337767072,
            "unit": "ns/iter",
            "extra": "iterations: 14285\ncpu: 48848.19740987117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48332.44517604417,
            "unit": "ns/iter",
            "extra": "iterations: 14428\ncpu: 48331.39035209335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48720.59894170929,
            "unit": "ns/iter",
            "extra": "iterations: 11906\ncpu: 48718.67965731511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26931.452815684603,
            "unit": "ns/iter",
            "extra": "iterations: 26015\ncpu: 26931.08591197366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47547.93014880813,
            "unit": "ns/iter",
            "extra": "iterations: 14717\ncpu: 47546.884555276265 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387018579,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 621.6415545163815,
            "unit": "ns/iter",
            "extra": "iterations: 1121635\ncpu: 621.6440285832736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5791.90747000041,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5791.535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11239.158954021479,
            "unit": "ns/iter",
            "extra": "iterations: 73883\ncpu: 11238.782940595265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17053.70089081919,
            "unit": "ns/iter",
            "extra": "iterations: 50403\ncpu: 17052.778604448147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22179.42712465073,
            "unit": "ns/iter",
            "extra": "iterations: 37818\ncpu: 22178.84340790099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27542.66494075488,
            "unit": "ns/iter",
            "extra": "iterations: 30129\ncpu: 27541.962892893913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32657.76086871437,
            "unit": "ns/iter",
            "extra": "iterations: 25509\ncpu: 32655.78815320084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37987.50398651584,
            "unit": "ns/iter",
            "extra": "iterations: 21949\ncpu: 37985.643992892634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43081.570312499076,
            "unit": "ns/iter",
            "extra": "iterations: 19200\ncpu: 43080.75520833334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 594.0592589762726,
            "unit": "ns/iter",
            "extra": "iterations: 1177965\ncpu: 594.0308073669413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 449.16234428611034,
            "unit": "ns/iter",
            "extra": "iterations: 1552848\ncpu: 449.15349087611975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 445.54173953066606,
            "unit": "ns/iter",
            "extra": "iterations: 1570849\ncpu: 445.52143458728415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 465.6293972740094,
            "unit": "ns/iter",
            "extra": "iterations: 1503602\ncpu: 465.6152359467471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 909.1569137790099,
            "unit": "ns/iter",
            "extra": "iterations: 770729\ncpu: 909.1166934162337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1383.911586615801,
            "unit": "ns/iter",
            "extra": "iterations: 568285\ncpu: 1383.8610908259063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8968.028937228446,
            "unit": "ns/iter",
            "extra": "iterations: 90057\ncpu: 8967.556103356754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8524.341802670966,
            "unit": "ns/iter",
            "extra": "iterations: 97056\ncpu: 8524.23858391032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9404.562814629753,
            "unit": "ns/iter",
            "extra": "iterations: 89788\ncpu: 9404.408161447001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8107.186944288985,
            "unit": "ns/iter",
            "extra": "iterations: 102009\ncpu: 8106.949386818832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27248.91373687163,
            "unit": "ns/iter",
            "extra": "iterations: 30662\ncpu: 27248.144282825724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 279277.0997123564,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 279277.8843080866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221743.77119071936,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 221730.54994954565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 219719.60065426087,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 219712.75792652316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 219366.73589165293,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 219357.18585402553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108650.34355980622,
            "unit": "ns/iter",
            "extra": "iterations: 8051\ncpu: 108649.18643646751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208830.93043895418,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 208820.5804749341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5386.305900101845,
            "unit": "ns/iter",
            "extra": "iterations: 152455\ncpu: 5386.131645403557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26175.931244889955,
            "unit": "ns/iter",
            "extra": "iterations: 31794\ncpu: 26175.37271183233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22155.39029177623,
            "unit": "ns/iter",
            "extra": "iterations: 37700\ncpu: 22154.458885941654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23203.79258828175,
            "unit": "ns/iter",
            "extra": "iterations: 36078\ncpu: 23202.921447973855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21368.793563019408,
            "unit": "ns/iter",
            "extra": "iterations: 39242\ncpu: 21368.204984455453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45558.29341839709,
            "unit": "ns/iter",
            "extra": "iterations: 18339\ncpu: 45558.307432248315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 300355.5993788807,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 300340.8212560394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 235007.71635387864,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 234999.35656836518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 233335.75066596016,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 233320.83111347863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 230603.34337031152,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 230595.45694664598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121007.97275996099,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 121002.93141592949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 223348.2372188211,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 223272.31595092107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 870166.276400365,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 870105.6014692361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476460.6360215102,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 476435.21505376406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1354.2237456736332,
            "unit": "ns/iter",
            "extra": "iterations: 585075\ncpu: 1354.1563047472628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8516.662020302783,
            "unit": "ns/iter",
            "extra": "iterations: 98213\ncpu: 8516.50901611804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7804.5141373119595,
            "unit": "ns/iter",
            "extra": "iterations: 105890\ncpu: 7804.266691850016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8707.520618987071,
            "unit": "ns/iter",
            "extra": "iterations: 95834\ncpu: 8707.268818999482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7550.557270490253,
            "unit": "ns/iter",
            "extra": "iterations: 113383\ncpu: 7550.040129472686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26700.44875618647,
            "unit": "ns/iter",
            "extra": "iterations: 31516\ncpu: 26698.28341160046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 285775.49499515805,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 285760.31643526047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 216284.6977832544,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 216276.45320196962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215886.80323449866,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 215873.38887527565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 214262.44759344388,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 214254.28780845218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103703.03824362808,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 103698.97308781816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207165.90390956064,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 207156.28827131388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.6647394806882,
            "unit": "ns/iter",
            "extra": "iterations: 3608197\ncpu: 193.65345074007834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1491.2902767875194,
            "unit": "ns/iter",
            "extra": "iterations: 472673\ncpu: 1491.2620352759616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1142.2331891127135,
            "unit": "ns/iter",
            "extra": "iterations: 613412\ncpu: 1142.1604076868484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1222.8798102007775,
            "unit": "ns/iter",
            "extra": "iterations: 571130\ncpu: 1222.8319296832515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 918.4283893785155,
            "unit": "ns/iter",
            "extra": "iterations: 761172\ncpu: 918.3828359424725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8721.604395878263,
            "unit": "ns/iter",
            "extra": "iterations: 80348\ncpu: 8721.502713197557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13733.158058796651,
            "unit": "ns/iter",
            "extra": "iterations: 51329\ncpu: 13732.597556936655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3014.672754405015,
            "unit": "ns/iter",
            "extra": "iterations: 233201\ncpu: 3014.446764808052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3024.0399918525545,
            "unit": "ns/iter",
            "extra": "iterations: 230747\ncpu: 3023.8997690110637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3054.6451914953186,
            "unit": "ns/iter",
            "extra": "iterations: 229614\ncpu: 3054.608604004998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5566.452607029931,
            "unit": "ns/iter",
            "extra": "iterations: 126063\ncpu: 5566.314461816693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5686.017405089304,
            "unit": "ns/iter",
            "extra": "iterations: 123010\ncpu: 5685.859686204348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1859.896537452229,
            "unit": "ns/iter",
            "extra": "iterations: 376919\ncpu: 1859.8438921890634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10206.951585685285,
            "unit": "ns/iter",
            "extra": "iterations: 68740\ncpu: 10206.667151585605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8123.266324838065,
            "unit": "ns/iter",
            "extra": "iterations: 86203\ncpu: 8122.995719406441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8069.979213023236,
            "unit": "ns/iter",
            "extra": "iterations: 86737\ncpu: 8069.75800408135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8080.996683269677,
            "unit": "ns/iter",
            "extra": "iterations: 86531\ncpu: 8080.669355491044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18235.334386655428,
            "unit": "ns/iter",
            "extra": "iterations: 38608\ncpu: 18234.75445503509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59779.13619979462,
            "unit": "ns/iter",
            "extra": "iterations: 11652\ncpu: 59779.26536216897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48152.38140430479,
            "unit": "ns/iter",
            "extra": "iterations: 14541\ncpu: 48150.2441372673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48216.056254728595,
            "unit": "ns/iter",
            "extra": "iterations: 14541\ncpu: 48214.58634206691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47911.28850888868,
            "unit": "ns/iter",
            "extra": "iterations: 14620\ncpu: 47910.766073871106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27092.73873978846,
            "unit": "ns/iter",
            "extra": "iterations: 25821\ncpu: 27092.498354052677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46981.45943957441,
            "unit": "ns/iter",
            "extra": "iterations: 14953\ncpu: 46980.866715709766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1901.571214262684,
            "unit": "ns/iter",
            "extra": "iterations: 368627\ncpu: 1901.5565870106925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10256.93044912478,
            "unit": "ns/iter",
            "extra": "iterations: 68511\ncpu: 10256.478521697323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8194.427798002502,
            "unit": "ns/iter",
            "extra": "iterations: 85150\ncpu: 8194.199647680567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8156.725111251787,
            "unit": "ns/iter",
            "extra": "iterations: 85842\ncpu: 8156.397800610507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8109.773495064504,
            "unit": "ns/iter",
            "extra": "iterations: 86316\ncpu: 8109.537049909644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18081.10062893223,
            "unit": "ns/iter",
            "extra": "iterations: 38478\ncpu: 18080.851395602862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60005.796759064084,
            "unit": "ns/iter",
            "extra": "iterations: 11725\ncpu: 60005.270788912814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47963.03998902614,
            "unit": "ns/iter",
            "extra": "iterations: 14579\ncpu: 47961.57486796123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47856.863399944516,
            "unit": "ns/iter",
            "extra": "iterations: 14612\ncpu: 47855.570763756084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 50252.26870000097,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50251.31000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27108.369709351267,
            "unit": "ns/iter",
            "extra": "iterations: 25942\ncpu: 27108.08341685317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46826.002006285256,
            "unit": "ns/iter",
            "extra": "iterations: 14953\ncpu: 46823.70092957982 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702391183713,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 632.9002277854231,
            "unit": "ns/iter",
            "extra": "iterations: 1094012\ncpu: 632.8956172327179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5893.3195642077135,
            "unit": "ns/iter",
            "extra": "iterations: 137772\ncpu: 5892.997851522806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11542.93679327315,
            "unit": "ns/iter",
            "extra": "iterations: 72429\ncpu: 11542.491267310057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17278.385383642555,
            "unit": "ns/iter",
            "extra": "iterations: 48261\ncpu: 17277.934564140814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22827.521601743887,
            "unit": "ns/iter",
            "extra": "iterations: 36710\ncpu: 22826.801961318426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28539.9735079068,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 28538.27920421698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33701.13450715407,
            "unit": "ns/iter",
            "extra": "iterations: 24876\ncpu: 33701.009004663145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39363.498104375285,
            "unit": "ns/iter",
            "extra": "iterations: 21365\ncpu: 39362.808331383116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44350.92184442845,
            "unit": "ns/iter",
            "extra": "iterations: 18911\ncpu: 44348.580191423054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 597.2454063368726,
            "unit": "ns/iter",
            "extra": "iterations: 1168784\ncpu: 597.2307971361698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 451.18427769206227,
            "unit": "ns/iter",
            "extra": "iterations: 1551935\ncpu: 451.17205295324936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 450.36760155041145,
            "unit": "ns/iter",
            "extra": "iterations: 1555951\ncpu: 450.35531324572486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 447.4422843209788,
            "unit": "ns/iter",
            "extra": "iterations: 1565034\ncpu: 447.4330909104852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 915.6905220019846,
            "unit": "ns/iter",
            "extra": "iterations: 768158\ncpu: 915.6601897005562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1391.1680441302326,
            "unit": "ns/iter",
            "extra": "iterations: 570493\ncpu: 1391.144501334811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8785.659552495794,
            "unit": "ns/iter",
            "extra": "iterations: 92960\ncpu: 8785.267857142859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8557.14742432621,
            "unit": "ns/iter",
            "extra": "iterations: 95839\ncpu: 8556.929851104465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9114.661514906114,
            "unit": "ns/iter",
            "extra": "iterations: 90131\ncpu: 9114.362428021437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7996.106151058708,
            "unit": "ns/iter",
            "extra": "iterations: 101007\ncpu: 7996.045818606645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27387.86513114094,
            "unit": "ns/iter",
            "extra": "iterations: 30044\ncpu: 27387.155505258957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 278743.5340981587,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 278730.6883365206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220121.5032630512,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 220108.38353413704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 219155.05544355072,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 219147.37903225826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 219795.197186641,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 219785.1796031141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109381.38719359518,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 109376.83841920973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209208.8556329544,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 209197.86211866452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5399.705258057611,
            "unit": "ns/iter",
            "extra": "iterations: 150664\ncpu: 5399.673445547711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26836.141872013777,
            "unit": "ns/iter",
            "extra": "iterations: 31613\ncpu: 26834.716730458953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22056.5480936102,
            "unit": "ns/iter",
            "extra": "iterations: 38030\ncpu: 22056.07415198528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23361.325407360375,
            "unit": "ns/iter",
            "extra": "iterations: 35411\ncpu: 23360.938691367075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21434.684727919433,
            "unit": "ns/iter",
            "extra": "iterations: 38757\ncpu: 21434.16415099205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43813.294658911094,
            "unit": "ns/iter",
            "extra": "iterations: 18910\ncpu: 43810.137493389746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 302406.52582644415,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 302391.66666666704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 234054.61935484654,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 234044.59677419343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 233243.62613819717,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 233237.84145688167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 229589.03638777309,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 229582.97476759707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121615.11960318484,
            "unit": "ns/iter",
            "extra": "iterations: 7157\ncpu: 121609.87844068729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 221681.09641312782,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 221676.79979648962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 873857.7247451489,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 873828.266913813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 482494.6231647484,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 482469.16802610114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1439.0355334418205,
            "unit": "ns/iter",
            "extra": "iterations: 556518\ncpu: 1439.0264106461948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8273.945511915399,
            "unit": "ns/iter",
            "extra": "iterations: 99196\ncpu: 8273.382999314495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7911.50060303223,
            "unit": "ns/iter",
            "extra": "iterations: 104472\ncpu: 7911.248947086299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8650.16428852078,
            "unit": "ns/iter",
            "extra": "iterations: 96714\ncpu: 8649.807680377173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7481.405939343592,
            "unit": "ns/iter",
            "extra": "iterations: 110854\ncpu: 7481.258231547837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26709.048522806468,
            "unit": "ns/iter",
            "extra": "iterations: 31614\ncpu: 26708.031251976976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 289796.4450639433,
            "unit": "ns/iter",
            "extra": "iterations: 3049\ncpu: 289785.86421777547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 216619.08556018633,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 216609.41407207758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 217607.4105911316,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 217599.556650247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 215918.36312439942,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 215910.01469147915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103610.6207344391,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 103604.25079702472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206556.94214876537,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 206553.90791027216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.53497600044383,
            "unit": "ns/iter",
            "extra": "iterations: 3505275\ncpu: 199.53273280983603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1529.3536285936625,
            "unit": "ns/iter",
            "extra": "iterations: 460633\ncpu: 1529.2909973883743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1186.2920372755511,
            "unit": "ns/iter",
            "extra": "iterations: 589233\ncpu: 1186.2621407830266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1165.255393488836,
            "unit": "ns/iter",
            "extra": "iterations: 599890\ncpu: 1165.1929520412116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 905.7960891115874,
            "unit": "ns/iter",
            "extra": "iterations: 775118\ncpu: 905.7591231270612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8763.043168177574,
            "unit": "ns/iter",
            "extra": "iterations: 79642\ncpu: 8762.951708897312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13847.937273085477,
            "unit": "ns/iter",
            "extra": "iterations: 50680\ncpu: 13847.74861878456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3116.9124720419554,
            "unit": "ns/iter",
            "extra": "iterations: 223997\ncpu: 3116.826564641487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3089.4460942828837,
            "unit": "ns/iter",
            "extra": "iterations: 225746\ncpu: 3089.39471795734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3106.440274824932,
            "unit": "ns/iter",
            "extra": "iterations: 225307\ncpu: 3106.415690591071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5685.388216454458,
            "unit": "ns/iter",
            "extra": "iterations: 123019\ncpu: 5685.3185280322095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5796.458458739747,
            "unit": "ns/iter",
            "extra": "iterations: 120940\ncpu: 5796.327104349258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1878.2447852065475,
            "unit": "ns/iter",
            "extra": "iterations: 370868\ncpu: 1878.1396615507397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10153.058744413855,
            "unit": "ns/iter",
            "extra": "iterations: 69147\ncpu: 10152.60821149152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8155.725308172734,
            "unit": "ns/iter",
            "extra": "iterations: 85423\ncpu: 8155.636069910854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8130.074293824714,
            "unit": "ns/iter",
            "extra": "iterations: 85956\ncpu: 8129.99557913366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8025.197270700103,
            "unit": "ns/iter",
            "extra": "iterations: 86982\ncpu: 8024.879860201052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18232.339521654412,
            "unit": "ns/iter",
            "extra": "iterations: 38675\ncpu: 18231.296703296823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60913.429389313154,
            "unit": "ns/iter",
            "extra": "iterations: 11528\ncpu: 60910.45281054806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48980.85867507686,
            "unit": "ns/iter",
            "extra": "iterations: 14265\ncpu: 48981.093585699506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49769.28888256927,
            "unit": "ns/iter",
            "extra": "iterations: 14068\ncpu: 49768.97924367415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48588.92712607247,
            "unit": "ns/iter",
            "extra": "iterations: 14381\ncpu: 48587.33745914752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27309.672679003117,
            "unit": "ns/iter",
            "extra": "iterations: 25614\ncpu: 27309.38939642425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47834.65695373293,
            "unit": "ns/iter",
            "extra": "iterations: 14654\ncpu: 47832.714617170044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1915.347546773777,
            "unit": "ns/iter",
            "extra": "iterations: 365804\ncpu: 1915.2373948890793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10143.087433279139,
            "unit": "ns/iter",
            "extra": "iterations: 68944\ncpu: 10142.956602460024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8160.65378690474,
            "unit": "ns/iter",
            "extra": "iterations: 86337\ncpu: 8160.7074603009305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8041.756453281195,
            "unit": "ns/iter",
            "extra": "iterations: 87010\ncpu: 8041.581427422112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8121.065709750958,
            "unit": "ns/iter",
            "extra": "iterations: 86319\ncpu: 8120.732399587617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18259.3524371759,
            "unit": "ns/iter",
            "extra": "iterations: 38282\ncpu: 18257.99853717169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 61926.743310298836,
            "unit": "ns/iter",
            "extra": "iterations: 11286\ncpu: 61925.79301789904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49673.89119354222,
            "unit": "ns/iter",
            "extra": "iterations: 14126\ncpu: 49671.924111567205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 49662.43301654496,
            "unit": "ns/iter",
            "extra": "iterations: 14205\ncpu: 49661.50651179123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 49342.16154558938,
            "unit": "ns/iter",
            "extra": "iterations: 14027\ncpu: 49341.27040707204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27466.243503179823,
            "unit": "ns/iter",
            "extra": "iterations: 25474\ncpu: 27466.36963178151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48721.88836104352,
            "unit": "ns/iter",
            "extra": "iterations: 14314\ncpu: 48721.168087187216 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702391759319,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 627.3485348666692,
            "unit": "ns/iter",
            "extra": "iterations: 1107476\ncpu: 627.331608089024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5931.251599055571,
            "unit": "ns/iter",
            "extra": "iterations: 139770\ncpu: 5930.88216355441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11388.425610087019,
            "unit": "ns/iter",
            "extra": "iterations: 73760\ncpu: 11388.371746203902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17451.945599550727,
            "unit": "ns/iter",
            "extra": "iterations: 49779\ncpu: 17451.226420779847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22061.952328480726,
            "unit": "ns/iter",
            "extra": "iterations: 38115\ncpu: 22061.81818181818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27833.04873809248,
            "unit": "ns/iter",
            "extra": "iterations: 29915\ncpu: 27831.25188032758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33180.59702852734,
            "unit": "ns/iter",
            "extra": "iterations: 25240\ncpu: 33180.14263074487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38597.05061292722,
            "unit": "ns/iter",
            "extra": "iterations: 21536\ncpu: 38596.243499257034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44152.86970461299,
            "unit": "ns/iter",
            "extra": "iterations: 19026\ncpu: 44150.394197414105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 595.2397347756682,
            "unit": "ns/iter",
            "extra": "iterations: 1174402\ncpu: 595.2279543120663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 451.6030579825057,
            "unit": "ns/iter",
            "extra": "iterations: 1561160\ncpu: 451.5846550001282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 442.6612725320576,
            "unit": "ns/iter",
            "extra": "iterations: 1573870\ncpu: 442.6587329321983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 445.3506116225771,
            "unit": "ns/iter",
            "extra": "iterations: 1571394\ncpu: 445.3224334571719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 942.2593370103373,
            "unit": "ns/iter",
            "extra": "iterations: 763119\ncpu: 942.2442633455581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1380.062494119053,
            "unit": "ns/iter",
            "extra": "iterations: 573894\ncpu: 1380.009026057074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9029.385237366914,
            "unit": "ns/iter",
            "extra": "iterations: 90282\ncpu: 9029.33475111316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8552.736545844258,
            "unit": "ns/iter",
            "extra": "iterations: 96643\ncpu: 8552.214852601817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9341.516502157596,
            "unit": "ns/iter",
            "extra": "iterations: 87837\ncpu: 9341.192208294922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8010.169060090868,
            "unit": "ns/iter",
            "extra": "iterations: 101946\ncpu: 8009.885625723412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27621.634249541614,
            "unit": "ns/iter",
            "extra": "iterations: 30015\ncpu: 27621.17274695985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 280033.1478599212,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 280015.9533073932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221401.99491870392,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 221399.31402439068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 220118.68651799433,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 220107.85605676568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218025.08759124196,
            "unit": "ns/iter",
            "extra": "iterations: 3973\ncpu: 218022.14950918732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108795.38646315038,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 108790.52921306137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208878.2376261419,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 208872.080730418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5425.386604650857,
            "unit": "ns/iter",
            "extra": "iterations: 150500\ncpu: 5425.16212624583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26109.626277189578,
            "unit": "ns/iter",
            "extra": "iterations: 31906\ncpu: 26109.208299379363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22198.09458740908,
            "unit": "ns/iter",
            "extra": "iterations: 37616\ncpu: 22196.881646108017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23099.740224930763,
            "unit": "ns/iter",
            "extra": "iterations: 36189\ncpu: 23099.253916936046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21508.10036665941,
            "unit": "ns/iter",
            "extra": "iterations: 38728\ncpu: 21507.2970460649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43972.7611584702,
            "unit": "ns/iter",
            "extra": "iterations: 18887\ncpu: 43971.35066447804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 301111.1772679906,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 301109.5238095222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 232615.2347708891,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 232604.01617250603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 231880.86757261417,
            "unit": "ns/iter",
            "extra": "iterations: 3753\ncpu: 231878.2573940845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228976.69214549486,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 228964.89193463314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121520.11284962832,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 121513.07117142019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 221595.1967586604,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 221584.2998227397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 872231.3924632525,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 872193.3823529384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 482804.99343902216,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 482773.8108255891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1392.7703145368282,
            "unit": "ns/iter",
            "extra": "iterations: 563845\ncpu: 1392.7499578784932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8201.213873749164,
            "unit": "ns/iter",
            "extra": "iterations: 100910\ncpu: 8200.994945991528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7920.889679956738,
            "unit": "ns/iter",
            "extra": "iterations: 103236\ncpu: 7920.850284784383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8509.224989914159,
            "unit": "ns/iter",
            "extra": "iterations: 96671\ncpu: 8508.90132511301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7458.1054293326215,
            "unit": "ns/iter",
            "extra": "iterations: 111487\ncpu: 7458.0695507099645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26649.648690733942,
            "unit": "ns/iter",
            "extra": "iterations: 31468\ncpu: 26648.8432693529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 288326.4519736808,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 288322.6315789481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218292.1960391071,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 218281.3487089494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 218040.75593306153,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 218034.92380714556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 216172.33168194126,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 216153.85187019946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105374.4259571373,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 105370.6236455572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207550.39408984038,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 207538.88888888937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.98607178293662,
            "unit": "ns/iter",
            "extra": "iterations: 3614174\ncpu: 193.9814740518862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1471.431805777942,
            "unit": "ns/iter",
            "extra": "iterations: 489213\ncpu: 1471.390375971206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1229.8814192227785,
            "unit": "ns/iter",
            "extra": "iterations: 566930\ncpu: 1229.839839133576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1159.5678178234566,
            "unit": "ns/iter",
            "extra": "iterations: 616018\ncpu: 1159.4938784256349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 913.7105097537215,
            "unit": "ns/iter",
            "extra": "iterations: 769038\ncpu: 913.662913926228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8732.14895796913,
            "unit": "ns/iter",
            "extra": "iterations: 80036\ncpu: 8731.720725673475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13833.534047254214,
            "unit": "ns/iter",
            "extra": "iterations: 50239\ncpu: 13833.052011385593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3032.755436419764,
            "unit": "ns/iter",
            "extra": "iterations: 229057\ncpu: 3032.7403222778594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3054.714461712591,
            "unit": "ns/iter",
            "extra": "iterations: 229710\ncpu: 3054.5500848896345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3037.7263655642973,
            "unit": "ns/iter",
            "extra": "iterations: 230088\ncpu: 3037.6612426549723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5673.548802781985,
            "unit": "ns/iter",
            "extra": "iterations: 123077\ncpu: 5673.343516660276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5698.86468309738,
            "unit": "ns/iter",
            "extra": "iterations: 122372\ncpu: 5698.720295492358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1882.0239472423964,
            "unit": "ns/iter",
            "extra": "iterations: 371358\ncpu: 1881.9540712735654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10241.461332514735,
            "unit": "ns/iter",
            "extra": "iterations: 68352\ncpu: 10241.299449906292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8084.504205401202,
            "unit": "ns/iter",
            "extra": "iterations: 85842\ncpu: 8084.299061065759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8050.438666910789,
            "unit": "ns/iter",
            "extra": "iterations: 87196\ncpu: 8050.199550438062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7940.311334502221,
            "unit": "ns/iter",
            "extra": "iterations: 87838\ncpu: 7940.273002572931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18313.90364767968,
            "unit": "ns/iter",
            "extra": "iterations: 38079\ncpu: 18313.238267811597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 61240.541855598334,
            "unit": "ns/iter",
            "extra": "iterations: 11468\ncpu: 61239.48378095566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48877.274453877464,
            "unit": "ns/iter",
            "extra": "iterations: 14374\ncpu: 48876.21399749542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48616.40541103018,
            "unit": "ns/iter",
            "extra": "iterations: 14415\ncpu: 48616.19146722169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48398.715029864994,
            "unit": "ns/iter",
            "extra": "iterations: 14398\ncpu: 48396.47173218495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27378.03493041126,
            "unit": "ns/iter",
            "extra": "iterations: 25651\ncpu: 27377.412186658854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47630.02789305266,
            "unit": "ns/iter",
            "extra": "iterations: 14699\ncpu: 47629.253690726684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1891.0941489188056,
            "unit": "ns/iter",
            "extra": "iterations: 367556\ncpu: 1891.0552405620022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10094.731198851392,
            "unit": "ns/iter",
            "extra": "iterations: 69650\ncpu: 10094.179468772478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8037.550902451649,
            "unit": "ns/iter",
            "extra": "iterations: 85988\ncpu: 8037.343582825564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8057.159226918354,
            "unit": "ns/iter",
            "extra": "iterations: 85890\ncpu: 8056.869251368147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8226.146401781909,
            "unit": "ns/iter",
            "extra": "iterations: 85320\ncpu: 8226.01969057675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18334.89236933216,
            "unit": "ns/iter",
            "extra": "iterations: 38437\ncpu: 18334.79199729408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60725.360849880206,
            "unit": "ns/iter",
            "extra": "iterations: 11484\ncpu: 60722.30929989634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48994.057486535334,
            "unit": "ns/iter",
            "extra": "iterations: 14299\ncpu: 48992.82467305422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48934.82538127831,
            "unit": "ns/iter",
            "extra": "iterations: 14294\ncpu: 48934.60193087944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48162.547048670975,
            "unit": "ns/iter",
            "extra": "iterations: 14485\ncpu: 48159.57197100402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27240.63095608971,
            "unit": "ns/iter",
            "extra": "iterations: 25688\ncpu: 27240.213329180842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47711.34255913835,
            "unit": "ns/iter",
            "extra": "iterations: 14669\ncpu: 47708.94403163151 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}