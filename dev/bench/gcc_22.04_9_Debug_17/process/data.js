window.BENCHMARK_DATA = {
  "lastUpdate": 1702390808573,
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
        "date": 1702382255545,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15362.48809445024,
            "unit": "ns/iter",
            "extra": "iterations: 45315\ncpu: 15361.379234249145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147499.53758226224,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 147488.48285417387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279762.87870013114,
            "unit": "ns/iter",
            "extra": "iterations: 3108\ncpu: 279748.6808236807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 410094.0222432514,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 410077.18883104593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 546915.3516209406,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 546868.2668329175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546730.1269999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546710.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 654228.2590000071,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654192.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 762848.8883415398,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 762770.0328407221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 869154.3214953416,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 869096.168224298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12357.775063451818,
            "unit": "ns/iter",
            "extra": "iterations: 56736\ncpu: 12356.611322617031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10212.322527488763,
            "unit": "ns/iter",
            "extra": "iterations: 68574\ncpu: 10211.796015982745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10133.153411478594,
            "unit": "ns/iter",
            "extra": "iterations: 69017\ncpu: 10132.490545807561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10346.384784973494,
            "unit": "ns/iter",
            "extra": "iterations: 68038\ncpu: 10345.978717775362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16525.272916374288,
            "unit": "ns/iter",
            "extra": "iterations: 42786\ncpu: 16525.113354835677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61176.04938801831,
            "unit": "ns/iter",
            "extra": "iterations: 13971\ncpu: 61172.08503328315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 328309.88136241346,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 328285.72522005375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 267300.5230817271,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 267284.5913911419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 266525.6612601309,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 266516.12601372454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 261193.27261613405,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 261177.842298288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 581957.367224092,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 581898.5284280945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4601809.507389203,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4601564.532019689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3761913.6370968055,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3761647.5806451547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3760740.229838708,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3760447.983870967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3757537.5506072496,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3757429.959514163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2176341.89953267,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2176254.205607477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3654739.275590579,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3654472.047244097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14328024.839999974,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14327393.333333353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6442697.990000283,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6442319.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18130769.864406805,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 18129957.627118606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67238.38179539402,
            "unit": "ns/iter",
            "extra": "iterations: 12766\ncpu: 67236.11154629485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 363844.92645816476,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 363819.10397295037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 291912.70806395967,
            "unit": "ns/iter",
            "extra": "iterations: 2939\ncpu: 291894.7260973142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 292910.70279598294,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 292893.6831204684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 288629.57981773786,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 288606.0411744861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 579659.10895721,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 579624.0641711232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4666731.855000137,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4666363.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3780751.35627542,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3780389.0688259257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3807123.338775427,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3806948.1632652874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3788990.5284551913,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788710.569105685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2193268.411347501,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2193113.7115839245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3682611.94488173,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3682347.6377952625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14706109.575342128,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14704610.958904121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6302202.580000085,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6301608.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59835.36690000051,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59833.95000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 316990.4313653108,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 316964.5387453883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 256181.78731009457,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 256171.87965445325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 254724.39719905384,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 254714.39213349222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 252869.48832397122,
            "unit": "ns/iter",
            "extra": "iterations: 3383\ncpu: 252849.98522021968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 542775.4059590267,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 542752.63811297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4605894.763546996,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4605846.798029584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3721169.804000056,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3721135.599999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3750919.0722892666,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3750814.056224895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3723413.628000117,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3723331.19999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2124193.9407745004,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2124174.0318906447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3632735.1050584004,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3632662.645914408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5596.676328579877,
            "unit": "ns/iter",
            "extra": "iterations: 125096\ncpu: 5596.501886551178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37544.27099646292,
            "unit": "ns/iter",
            "extra": "iterations: 18646\ncpu: 37542.92073366942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30635.459282249514,
            "unit": "ns/iter",
            "extra": "iterations: 22877\ncpu: 30635.179437863535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31046.44988489466,
            "unit": "ns/iter",
            "extra": "iterations: 22588\ncpu: 31045.338232689828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23453.507924276473,
            "unit": "ns/iter",
            "extra": "iterations: 29845\ncpu: 23453.288658066725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 146343.9150765369,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 146342.5875445607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 300808.0128976679,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 300804.98710232036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74439.31099766267,
            "unit": "ns/iter",
            "extra": "iterations: 9402\ncpu: 74436.96022123033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74740.74462854375,
            "unit": "ns/iter",
            "extra": "iterations: 9355\ncpu: 74739.95724211575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74868.01728368338,
            "unit": "ns/iter",
            "extra": "iterations: 9373\ncpu: 74865.91272804886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152676.03974666484,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 152674.66695784914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146137.98141961938,
            "unit": "ns/iter",
            "extra": "iterations: 4790\ncpu: 146136.65970772668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46516.01615369337,
            "unit": "ns/iter",
            "extra": "iterations: 15043\ncpu: 46514.61809479535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 225211.70456006087,
            "unit": "ns/iter",
            "extra": "iterations: 3114\ncpu: 225209.5054592174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187820.78961528288,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 187819.18213613096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 190236.8151878116,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 190235.00272182858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 189630.22508213672,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 189625.2190580522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311274.15684537333,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 311271.3779353125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1297337.6574073562,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1297270.0000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1083351.798461518,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1083340.4615384594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1100352.7069243097,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1100323.6714975848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1091284.4400630377,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1091274.6056782233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 695920.988071622,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 695915.208747519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1080080.4607087725,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1080041.2942989168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47454.56058245856,
            "unit": "ns/iter",
            "extra": "iterations: 14765\ncpu: 47454.11445987126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231954.16155621118,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 231913.25420375774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 191570.37156215677,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 191565.869086909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 192232.43823933727,
            "unit": "ns/iter",
            "extra": "iterations: 3635\ncpu: 192227.40027510113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 193912.71029329963,
            "unit": "ns/iter",
            "extra": "iterations: 3614\ncpu: 193910.92971776312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 311929.9906333516,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 311923.55040142965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1289670.5211786972,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1289656.7219152963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1086223.4874213894,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1086190.880503145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1096085.9028213033,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1096075.078369899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1091196.6640625435,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1091186.5625000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 693195.8715415162,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 693171.936758886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1081543.1867284197,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1081533.6419753057 ns\nthreads: 1"
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
        "date": 1702387034362,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15191.374253569718,
            "unit": "ns/iter",
            "extra": "iterations: 46220\ncpu: 15191.263522284726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148378.72675857274,
            "unit": "ns/iter",
            "extra": "iterations: 5658\ncpu: 148375.6274301874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 281146.1150986151,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 281150.1131587456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 412539.7325083213,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 412529.7001427891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 549513.6081504663,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 549480.2507836989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 549495.9119999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549495.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 655798.4660000216,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655783.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768865.4908789496,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 768796.2686567164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 870840.615239897,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 870792.7563499527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12326.386063282842,
            "unit": "ns/iter",
            "extra": "iterations: 57962\ncpu: 12326.13436389357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9854.126537290183,
            "unit": "ns/iter",
            "extra": "iterations: 70904\ncpu: 9854.009646846438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9857.123688959053,
            "unit": "ns/iter",
            "extra": "iterations: 70936\ncpu: 9856.948516973043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10139.7909622688,
            "unit": "ns/iter",
            "extra": "iterations: 65304\ncpu: 10139.677508269016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16217.576779218294,
            "unit": "ns/iter",
            "extra": "iterations: 39034\ncpu: 16217.320797253698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60032.98079999979,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60032.140000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 313622.5734163398,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 313597.4368363237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 250133.52975666302,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 250119.17326297294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 250468.12283788034,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 250455.05716798577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 247329.74862278928,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 247314.58393737313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 561087.2580025704,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 561056.7861715765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4625370.445544455,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4625119.306930691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3772329.8947368837,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772149.7975708484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3765551.546558685,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3765355.465587055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3759211.0000000345,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3758966.5322580705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2189591.7200000063,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2189499.764705879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3674001.7233200986,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3673669.1699604783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14639306.876712102,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14638464.383561645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6433587.950000117,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6433326.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18313026.293103598,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18312067.241379306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66191.53849129535,
            "unit": "ns/iter",
            "extra": "iterations: 12925\ncpu: 66187.54352030928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 347658.4267799354,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 347635.3155339814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 278448.68470511865,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 278430.36292935733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 276165.7840542278,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 276144.22207876126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 275107.06894330133,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 275098.0347938156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 563565.0077770612,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 563541.7368762159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4695805.708542654,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4695762.311557781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3805260.90612244,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3805276.3265306037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3811720.314285701,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3811707.346938777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3805949.66804975,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3805875.9336099774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2203009.8293838515,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2203017.0616113828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3707086.645418265,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3707019.1235059607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14944284.763889154,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14943961.111111194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6490450.080000017,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6490306.000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58842.55309999844,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58839.230000000236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 311167.1051673907,
            "unit": "ns/iter",
            "extra": "iterations: 2748\ncpu: 311158.4788937409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 248406.1127906987,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 248406.51162790591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 248789.5515133905,
            "unit": "ns/iter",
            "extra": "iterations: 3436\ncpu: 248786.8160651909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 246748.0467615465,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 246748.3880336912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 538996.3515189015,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 538992.5604463716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4666880.175000045,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4666780.499999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3777152.133603234,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3777164.7773279264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3779269.825910983,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3779195.141700419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3771023.967741925,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3770835.0806451654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2172294.5128204776,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2172295.571095574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3679723.7716534818,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3679635.433070881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5729.0687216179,
            "unit": "ns/iter",
            "extra": "iterations: 122436\ncpu: 5729.0192427064385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37712.216351321505,
            "unit": "ns/iter",
            "extra": "iterations: 18604\ncpu: 37710.94925822401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31046.995131020347,
            "unit": "ns/iter",
            "extra": "iterations: 22592\ncpu: 31046.87500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30950.8429769048,
            "unit": "ns/iter",
            "extra": "iterations: 24334\ncpu: 30950.032875811372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23039.68284085946,
            "unit": "ns/iter",
            "extra": "iterations: 30357\ncpu: 23039.747010574294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 144785.94039734878,
            "unit": "ns/iter",
            "extra": "iterations: 4832\ncpu: 144782.42963576003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 303757.70078057604,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 303753.85949696146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75289.16073158103,
            "unit": "ns/iter",
            "extra": "iterations: 9295\ncpu: 75287.9289940833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75327.57287624314,
            "unit": "ns/iter",
            "extra": "iterations: 9276\ncpu: 75325.56058645972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74960.06384574396,
            "unit": "ns/iter",
            "extra": "iterations: 9335\ncpu: 74959.87145152643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 148146.37470825895,
            "unit": "ns/iter",
            "extra": "iterations: 4713\ncpu: 148144.13324846234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 145951.49916666845,
            "unit": "ns/iter",
            "extra": "iterations: 4800\ncpu: 145951.1874999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45225.315257529604,
            "unit": "ns/iter",
            "extra": "iterations: 15435\ncpu: 45224.522189827694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219951.43896186742,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 219951.93848125596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180393.47358927876,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 180388.6627157982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 182107.95393024143,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 182108.25091098394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183050.38166143923,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 183046.6562173458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 300520.3527131777,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 300521.0594315227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1301148.3821891663,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1301111.317254159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1090496.073322935,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1090488.4555382198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1095837.7492163698,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1095852.8213166164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1097800.156985938,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1097778.492935628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 694949.6308457875,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 694930.9452736328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086960.6821705746,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1086933.6434108508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46447.78565271976,
            "unit": "ns/iter",
            "extra": "iterations: 15083\ncpu: 46447.178943181076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 226026.52339464493,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 226018.1994191681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 185685.21619475668,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 185682.42921407652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187009.6702212832,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 187003.91895494718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 187937.28969958046,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 187936.8562231764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303707.5511265185,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 303694.4107452386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1303871.1156716442,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1303876.8656716296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1098560.2735849158,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1098574.8427672933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1093026.2730109557,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1093006.0842433698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1098069.6363636316,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1098061.9122257072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 692288.9128712667,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 692277.6237623714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1094512.4744185607,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1094499.844961242 ns\nthreads: 1"
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
        "date": 1702390806062,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14795.317106411847,
            "unit": "ns/iter",
            "extra": "iterations: 46959\ncpu: 14795.389595178773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147238.1361356131,
            "unit": "ns/iter",
            "extra": "iterations: 5781\ncpu: 147228.0228334198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279361.67718055967,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 279348.05278403615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 409717.9966793212,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 409703.2258064517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 546131.3351990053,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 546080.7213930348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 545916.9289999863,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545871.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 651257.1609999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651249.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 759527.0720131114,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 759459.3289689035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 864941.3198494614,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 864930.4797742248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11885.637308599105,
            "unit": "ns/iter",
            "extra": "iterations: 58973\ncpu: 11885.315313787665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9783.079024718132,
            "unit": "ns/iter",
            "extra": "iterations: 71446\ncpu: 9782.977353525746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9844.213641582663,
            "unit": "ns/iter",
            "extra": "iterations: 71414\ncpu: 9844.111798806965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9816.035519356268,
            "unit": "ns/iter",
            "extra": "iterations: 71088\ncpu: 9815.613042988978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16173.82747552237,
            "unit": "ns/iter",
            "extra": "iterations: 43304\ncpu: 16173.753002032123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60710.75909999877,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60708.610000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 312667.2278293154,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 312663.5992578852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 251893.20555227992,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 251883.3727111638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 251370.40566038393,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 251368.13089622703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 245360.25086805166,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 245352.14120370318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 560577.6068921473,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 560555.7115507327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4609460.163366342,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4609351.485148515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3783869.0772358133,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783648.373983745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3781245.3211381948,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781158.1300813057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3781472.8983739647,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781390.6504064966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2174983.990654262,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2174899.766355142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3675034.7312252605,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3674923.3201581025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14608752.178082172,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14607983.56164383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6535220.500000208,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6534994.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18355143.482758533,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18354072.41379309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66360.03587098837,
            "unit": "ns/iter",
            "extra": "iterations: 12991\ncpu: 66359.15633900385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 344255.0612244939,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 344241.0164065633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 276307.92208211584,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 276304.2353701896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 275984.5218375916,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 275975.8654157215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 273046.99328859523,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 273048.0345158197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 564223.5750487349,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 564209.0318388556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4684809.507537651,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4684671.356783913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3840386.086419763,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840350.6172839347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3827655.9385245084,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3827623.3606557124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3862177.024590061,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3862091.8032786683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2212683.424170633,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2212649.9999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3720117.1230158876,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3719977.3809523797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15063141.000000237,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15062760.563380215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6378361.56999981,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6377862.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59134.819700000204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59132.61000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 310221.5892792557,
            "unit": "ns/iter",
            "extra": "iterations: 2761\ncpu: 310196.6678739594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 246652.4369723433,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 246645.88064046612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 248954.45568148763,
            "unit": "ns/iter",
            "extra": "iterations: 3441\ncpu: 248936.12321999474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 246391.92443034108,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 246389.3567926167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 539137.7033582041,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 539105.7213930372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4643558.577114464,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4643185.074626859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3792960.9149797596,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3792834.817813777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3812881.630081372,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3812502.4390243823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3799310.061224425,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3799170.612244881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2181958.2646370674,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2181883.6065573636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3683295.561264906,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3682996.8379446752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5554.2304673532735,
            "unit": "ns/iter",
            "extra": "iterations: 125879\ncpu: 5554.058262299501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37538.48023567251,
            "unit": "ns/iter",
            "extra": "iterations: 18670\ncpu: 37535.03481521148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30754.025946733607,
            "unit": "ns/iter",
            "extra": "iterations: 23317\ncpu: 30752.596817772355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31002.208645865765,
            "unit": "ns/iter",
            "extra": "iterations: 22531\ncpu: 30998.486529670285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22034.822978722706,
            "unit": "ns/iter",
            "extra": "iterations: 31725\ncpu: 22034.086682426965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 144446.9140560516,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 144440.16900247338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 304540.66233203607,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 304530.16905071255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75659.0533938631,
            "unit": "ns/iter",
            "extra": "iterations: 9252\ncpu: 75657.43623000415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75222.01131221963,
            "unit": "ns/iter",
            "extra": "iterations: 9282\ncpu: 75220.02801120473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75524.97200085792,
            "unit": "ns/iter",
            "extra": "iterations: 9286\ncpu: 75523.65927202268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141754.59032976135,
            "unit": "ns/iter",
            "extra": "iterations: 4943\ncpu: 141750.19219097757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146442.15341146715,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 146440.2678945183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45404.69512511581,
            "unit": "ns/iter",
            "extra": "iterations: 15426\ncpu: 45402.58654220096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 222087.68759911082,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 222083.8883602929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181197.0802277431,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 181185.40372671088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 181970.12766509922,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 181967.732709307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183919.2536098588,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 183917.3798897342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 302129.33419688273,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 302118.9119170959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1307160.2216015062,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1307166.4804469126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096813.9339623032,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096748.5849056663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1095069.9405320997,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1095054.7730829509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1099167.9263322838,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1099108.777429463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 694553.548611122,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 694541.9642857078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1084086.5838509784,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1084011.80124223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46144.56120031237,
            "unit": "ns/iter",
            "extra": "iterations: 15196\ncpu: 46143.29428797067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 223617.70012827704,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 223589.99358562956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 183723.96720881545,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 183719.93704092386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 184714.7622192868,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 184697.04095112195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186149.19116081012,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 186137.75292864963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 302097.63934426574,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 302072.8213977543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1298373.8826816517,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1298253.4450651766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1100611.6985871387,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1100616.7974882133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1096665.5790297252,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1096553.0516431858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1102299.9464566822,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1102276.3779527533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 691432.6393280203,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 691358.2015810357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1085186.2779503388,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1085133.3850931718 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}