window.BENCHMARK_DATA = {
  "lastUpdate": 1702382265192,
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
      }
    ]
  }
}