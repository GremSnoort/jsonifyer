window.BENCHMARK_DATA = {
  "lastUpdate": 1702381086778,
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
      }
    ]
  }
}