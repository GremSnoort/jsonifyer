window.BENCHMARK_DATA = {
  "lastUpdate": 1702381105078,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 22.04 Debug c++-17": [
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
        "date": 1702381104468,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14981.57479579887,
            "unit": "ns/iter",
            "extra": "iterations: 47135\ncpu: 14981.101092606343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147362.07229847292,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 147358.01275855402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 278386.0996794866,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 278377.2435897437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 408886.33883907145,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 408873.1949032564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 544679.9583850836,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 544662.0496894413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 544483.6000000067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544464.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 649388.7659999871,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649372.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 758891.2000000053,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 758870.7755102044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 863385.7990697792,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 863349.0232558134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11960.223745693833,
            "unit": "ns/iter",
            "extra": "iterations: 58638\ncpu: 11960.03103789351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9890.132821491805,
            "unit": "ns/iter",
            "extra": "iterations: 71246\ncpu: 9889.811357830617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9848.1393987271,
            "unit": "ns/iter",
            "extra": "iterations: 70883\ncpu: 9847.726535276433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10015.193092888634,
            "unit": "ns/iter",
            "extra": "iterations: 70536\ncpu: 10015.041964386963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16030.283013685737,
            "unit": "ns/iter",
            "extra": "iterations: 43694\ncpu: 16029.782121115024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63291.49160000043,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 63290.239999999896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 319228.6253720208,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 319219.19642857136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254668.17910447938,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 254659.4925373134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 253505.64485425272,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 253497.41225461007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250511.31158141902,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 250508.55379188815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 550741.7683615803,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 550703.6409290641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4606578.561576409,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4606394.088669951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3750441.2096774518,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3750362.903225806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3767109.319838081,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3766980.5668016197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3786845.048583051,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3786719.8380566738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2164624.500000011,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2164545.348837207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3662767.359683831,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3662622.13438735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14392777.459459534,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14392217.567567598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6292619.949999789,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6292467.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18190896.62711852,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 18189969.491525423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66262.22489183968,
            "unit": "ns/iter",
            "extra": "iterations: 12944\ncpu: 66261.64245982688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 347584.5862068957,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 347581.29310344753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 279892.1699346421,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 279889.47712418245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 278857.64879792795,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 278857.79727095505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278674.47294654255,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 278667.9595827895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 555607.4208840537,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 555601.4093529781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4631010.980197985,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4630953.960396035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850495.7479675366,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3850366.2601626026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3807341.101625962,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3807308.9430894167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3846147.5795919127,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3846113.4693877497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2184502.446009422,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2184437.3239436606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3683892.964285665,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3683096.0317460373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14734376.945945946,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14733652.702702696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6361876.569999936,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6361880.000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59000.6657999993,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58999.86000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 313270.1452554692,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 313264.45255474537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 249086.88869464185,
            "unit": "ns/iter",
            "extra": "iterations: 3432\ncpu: 249080.6526806533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 252283.95755968805,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 252271.94223401183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 249122.12656751228,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 249113.91076115464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 527430.2615291325,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 527418.9320388372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4595289.356783913,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4595146.231155785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3739141.020000034,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3739026.800000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3770318.87044528,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770280.971659926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3757541.449799185,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3757449.7991967974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2135634.1034483006,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2135615.6321839155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3639084.179687502,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3638958.203124987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5730.501374796887,
            "unit": "ns/iter",
            "extra": "iterations: 124382\ncpu: 5730.395877216921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37523.27765866188,
            "unit": "ns/iter",
            "extra": "iterations: 18656\ncpu: 37521.75171526584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29623.718806853907,
            "unit": "ns/iter",
            "extra": "iterations: 23635\ncpu: 29621.29045906481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30889.07629548053,
            "unit": "ns/iter",
            "extra": "iterations: 22675\ncpu: 30887.466372656912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21914.47189432274,
            "unit": "ns/iter",
            "extra": "iterations: 32022\ncpu: 21913.550059334244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 143209.78195950043,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 143201.3704234006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 303823.936280888,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 303801.2570437781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75372.0034497633,
            "unit": "ns/iter",
            "extra": "iterations: 9276\ncpu: 75363.77749029761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75294.05153862861,
            "unit": "ns/iter",
            "extra": "iterations: 9294\ncpu: 75288.30428233309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75289.51276801909,
            "unit": "ns/iter",
            "extra": "iterations: 9281\ncpu: 75287.71684085754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153048.95330995033,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 153048.92590969047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146664.0427707072,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 146650.82411850567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46067.62683424534,
            "unit": "ns/iter",
            "extra": "iterations: 15197\ncpu: 46067.217213923206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 224019.18381167334,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 224014.67268623132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183973.49618320528,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 183965.62253224765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 185075.33157059242,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 185064.93918561906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 185651.26868044297,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 185636.77795442505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304753.07942708547,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 304732.3784722278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1303351.8268156508,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1303245.9962755966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1093503.4890624972,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1093442.0312499914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1099428.1114599586,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1099328.257456839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1101678.1905511816,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1101666.7716535446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 693431.4479682735,
            "unit": "ns/iter",
            "extra": "iterations: 1009\ncpu: 693403.2705649139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1087730.374805653,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1087614.4634525827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46540.62123015806,
            "unit": "ns/iter",
            "extra": "iterations: 15120\ncpu: 46538.697089946756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227129.81075828095,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 227116.9151004498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 186418.51053614536,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 186404.3478260888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 186718.9196690635,
            "unit": "ns/iter",
            "extra": "iterations: 3747\ncpu: 186701.44115292365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 188271.21137339633,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 188258.04721030343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 301936.83290044195,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 301907.6190476163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1304631.3787313155,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1304542.3507462784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1095787.3428571208,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1095668.4126983965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1096577.1332288045,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1096576.802507824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1101032.7223974266,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1101032.1766561572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 704108.7458128122,
            "unit": "ns/iter",
            "extra": "iterations: 1015\ncpu: 703353.7931034418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1085802.04968945,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1085802.0186335468 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}