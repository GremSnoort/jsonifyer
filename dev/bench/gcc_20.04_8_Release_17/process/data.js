window.BENCHMARK_DATA = {
  "lastUpdate": 1702390823646,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 20.04 Release c++-17": [
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
        "date": 1702381117722,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1799.1846479329083,
            "unit": "ns/iter",
            "extra": "iterations: 391843\ncpu: 1799.1435345278596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26684.42485010014,
            "unit": "ns/iter",
            "extra": "iterations: 30020\ncpu: 26684.433710859426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55062.38160690434,
            "unit": "ns/iter",
            "extra": "iterations: 15060\ncpu: 55059.58831341301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68096.83117596057,
            "unit": "ns/iter",
            "extra": "iterations: 12747\ncpu: 67962.2342511964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 95719.93854519243,
            "unit": "ns/iter",
            "extra": "iterations: 9747\ncpu: 95697.63004001233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 118132.74398486364,
            "unit": "ns/iter",
            "extra": "iterations: 7398\ncpu: 118126.70992160047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143187.58496362073,
            "unit": "ns/iter",
            "extra": "iterations: 6185\ncpu: 143177.9143088117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 166771.0388123407,
            "unit": "ns/iter",
            "extra": "iterations: 5153\ncpu: 166763.10886862018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 189792.4925758553,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 189784.35549817065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1570.9668745653996,
            "unit": "ns/iter",
            "extra": "iterations: 445730\ncpu: 1570.8971799071187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1291.3038543975886,
            "unit": "ns/iter",
            "extra": "iterations: 541200\ncpu: 1291.2435328898755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1280.4270286965316,
            "unit": "ns/iter",
            "extra": "iterations: 547174\ncpu: 1280.3753467818299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1272.793677862802,
            "unit": "ns/iter",
            "extra": "iterations: 551206\ncpu: 1272.7989172831938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2331.682450679164,
            "unit": "ns/iter",
            "extra": "iterations: 300684\ncpu: 2331.6601481954503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9698.132961407926,
            "unit": "ns/iter",
            "extra": "iterations: 84784\ncpu: 9697.769626344605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48139.17061693923,
            "unit": "ns/iter",
            "extra": "iterations: 17214\ncpu: 48137.852910421745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37221.17914984167,
            "unit": "ns/iter",
            "extra": "iterations: 23031\ncpu: 37219.94702791891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38953.05970078823,
            "unit": "ns/iter",
            "extra": "iterations: 21189\ncpu: 38951.43706640234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 37231.501461791195,
            "unit": "ns/iter",
            "extra": "iterations: 22233\ncpu: 37229.98695632616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 93551.26186927984,
            "unit": "ns/iter",
            "extra": "iterations: 9394\ncpu: 93549.34000425793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 854703.5566820224,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 854683.4101382499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 695302.1573867898,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 695288.8641425406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 698401.2946428835,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 698377.9017857136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 696249.6186567185,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 696229.6268656715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 494007.85342462716,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 494003.69863013754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 699911.8111019165,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 699875.3106876544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3685709.6259843623,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3685377.952755918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1592736.9197952498,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1592679.8634812285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4879610.371134082,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4879357.731958761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13296.975633190283,
            "unit": "ns/iter",
            "extra": "iterations: 63488\ncpu: 13296.572580645146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55712.125400003744,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55711.23 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 51995.77448469212,
            "unit": "ns/iter",
            "extra": "iterations: 16398\ncpu: 51993.20039029144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52681.595081551815,
            "unit": "ns/iter",
            "extra": "iterations: 15818\ncpu: 52681.23656593735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50881.11579395175,
            "unit": "ns/iter",
            "extra": "iterations: 16443\ncpu: 50881.712582861815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 103143.89061021483,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 103143.11731315048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 891920.3034351153,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 891929.8664122125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720117.617805033,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 720119.7237145052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 715923.9034220733,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 715932.6996197768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 713324.3945371824,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 713319.6509863435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 503227.198399075,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 503232.7615780438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 704072.3323464235,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 704072.7609178375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3889974.2697095685,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3889832.365145231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1653130.9017543145,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1653136.4912280622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8689.451754202475,
            "unit": "ns/iter",
            "extra": "iterations: 95656\ncpu: 8689.552145186935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 49753.56342253827,
            "unit": "ns/iter",
            "extra": "iterations: 16666\ncpu: 49752.82011280449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39790.68884935531,
            "unit": "ns/iter",
            "extra": "iterations: 20797\ncpu: 39789.84949752358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 39687.46982655593,
            "unit": "ns/iter",
            "extra": "iterations: 20929\ncpu: 39687.5579339672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 39998.35891352835,
            "unit": "ns/iter",
            "extra": "iterations: 20654\ncpu: 39998.382879829674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 89019.56902185008,
            "unit": "ns/iter",
            "extra": "iterations: 9794\ncpu: 89018.91974678333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 869141.6297989057,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 869135.6489945202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 699114.4472511411,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 699122.9569093633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 699890.1263858002,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 699886.9179600899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 699265.5122676585,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 699258.7360594793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 494317.9519773816,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 494316.10169491725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 690311.2749817637,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 690309.4821298327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 669.6375404717032,
            "unit": "ns/iter",
            "extra": "iterations: 1043631\ncpu: 669.6457847649256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4938.053812795501,
            "unit": "ns/iter",
            "extra": "iterations: 142048\ncpu: 4938.0012390178235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3684.2204418318943,
            "unit": "ns/iter",
            "extra": "iterations: 189846\ncpu: 3684.2614540206337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3910.8012709261407,
            "unit": "ns/iter",
            "extra": "iterations: 185534\ncpu: 3910.8104174975924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2837.479060601678,
            "unit": "ns/iter",
            "extra": "iterations: 246115\ncpu: 2837.461349369203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 24171.658871696785,
            "unit": "ns/iter",
            "extra": "iterations: 28822\ncpu: 24171.382971341263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 48544.01948952589,
            "unit": "ns/iter",
            "extra": "iterations: 14418\ncpu: 48544.5554168397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11353.547304551594,
            "unit": "ns/iter",
            "extra": "iterations: 61474\ncpu: 11353.521814100144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11330.527396045985,
            "unit": "ns/iter",
            "extra": "iterations: 62071\ncpu: 11330.310450935222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11298.533095507522,
            "unit": "ns/iter",
            "extra": "iterations: 61670\ncpu: 11298.070374574405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22735.446052032898,
            "unit": "ns/iter",
            "extra": "iterations: 30826\ncpu: 22735.06131187938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22405.865365572306,
            "unit": "ns/iter",
            "extra": "iterations: 31307\ncpu: 22405.33107611712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7025.702572781657,
            "unit": "ns/iter",
            "extra": "iterations: 99853\ncpu: 7025.504491602621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34927.451007852454,
            "unit": "ns/iter",
            "extra": "iterations: 19993\ncpu: 34926.47426599302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27736.552205650354,
            "unit": "ns/iter",
            "extra": "iterations: 25208\ncpu: 27736.067914947253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27626.87609921686,
            "unit": "ns/iter",
            "extra": "iterations: 25359\ncpu: 27626.06963997004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28377.97569585498,
            "unit": "ns/iter",
            "extra": "iterations: 24646\ncpu: 28377.517649922887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58889.809523811215,
            "unit": "ns/iter",
            "extra": "iterations: 11634\ncpu: 58888.82585525277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 223905.68612439837,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 223900.54226475203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 186730.71880021557,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 186730.85163363398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 189193.28847703213,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 189185.54928820967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 187698.10711387737,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 187694.02218014566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 111555.36167146335,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 111550.70445084757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 187603.36935009077,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 187599.54533297484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6760.18580915484,
            "unit": "ns/iter",
            "extra": "iterations: 104053\ncpu: 6760.054010936714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 35263.22578695643,
            "unit": "ns/iter",
            "extra": "iterations: 19855\ncpu: 35262.58876857197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 28677.522289600467,
            "unit": "ns/iter",
            "extra": "iterations: 24406\ncpu: 28676.61230844855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27724.116668650302,
            "unit": "ns/iter",
            "extra": "iterations: 25191\ncpu: 27723.567940931076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 29656.083333333758,
            "unit": "ns/iter",
            "extra": "iterations: 23604\ncpu: 29654.833926453295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 60508.807836308195,
            "unit": "ns/iter",
            "extra": "iterations: 11485\ncpu: 60505.807575097766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 218894.56337589372,
            "unit": "ns/iter",
            "extra": "iterations: 3211\ncpu: 218886.35938959607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 187658.06722238054,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187654.5576767962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 186714.81228118035,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 186714.94748182068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 186123.64954764018,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 186123.3901011169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 111619.2511160717,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 111615.94387755009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 188706.89862866353,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 188698.30599623523 ns\nthreads: 1"
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
        "date": 1702382310986,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1793.7340622128834,
            "unit": "ns/iter",
            "extra": "iterations: 387444\ncpu: 1793.6909592095892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27016.9785386632,
            "unit": "ns/iter",
            "extra": "iterations: 30520\ncpu: 27014.41022280472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55218.064306978544,
            "unit": "ns/iter",
            "extra": "iterations: 15115\ncpu: 55215.851802844845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68043.07447645793,
            "unit": "ns/iter",
            "extra": "iterations: 12702\ncpu: 68038.63958431743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 95151.0854753818,
            "unit": "ns/iter",
            "extra": "iterations: 9687\ncpu: 95149.9948384433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 118353.40528813179,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 118338.73898305088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143816.12593556516,
            "unit": "ns/iter",
            "extra": "iterations: 6146\ncpu: 143808.47705824926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 166887.720593908,
            "unit": "ns/iter",
            "extra": "iterations: 5186\ncpu: 166874.16120323946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 190668.3144396555,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 190654.9353448277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1539.150076512575,
            "unit": "ns/iter",
            "extra": "iterations: 455481\ncpu: 1539.0312658486303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1286.7744070437818,
            "unit": "ns/iter",
            "extra": "iterations: 537898\ncpu: 1286.7720274104038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1259.7156645873115,
            "unit": "ns/iter",
            "extra": "iterations: 557391\ncpu: 1259.615960788745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1274.79272163433,
            "unit": "ns/iter",
            "extra": "iterations: 548832\ncpu: 1274.7086540143434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2287.3451471336543,
            "unit": "ns/iter",
            "extra": "iterations: 306252\ncpu: 2287.1827775818624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9390.17310251485,
            "unit": "ns/iter",
            "extra": "iterations: 90172\ncpu: 9389.914829437092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 47282.14169670026,
            "unit": "ns/iter",
            "extra": "iterations: 17481\ncpu: 47280.02402608541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 34519.601437095596,
            "unit": "ns/iter",
            "extra": "iterations: 23798\ncpu: 34518.14438188094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 36560.3576823959,
            "unit": "ns/iter",
            "extra": "iterations: 22506\ncpu: 36557.86012618849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 34649.977350371635,
            "unit": "ns/iter",
            "extra": "iterations: 23709\ncpu: 34649.89244590664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 94213.25316722956,
            "unit": "ns/iter",
            "extra": "iterations: 9472\ncpu: 94207.63302364857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 843265.4950316135,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 843234.6883468856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 690222.7296511431,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 690170.9302325592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 693112.5478645208,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 693110.530191457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 697850.6497764671,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 697789.9403874811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 494593.95439187647,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 494558.0518018024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 691111.7971768422,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 691087.8157503704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3755940.670634982,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3755630.952380948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1652960.7923210391,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1652900.872600348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4888700.541237167,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4888135.051546392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13194.118728734868,
            "unit": "ns/iter",
            "extra": "iterations: 64660\ncpu: 13193.578719455605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55998.86599999877,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55997.590000000135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 52335.70479569507,
            "unit": "ns/iter",
            "extra": "iterations: 16348\ncpu: 52334.499632982544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52805.52894135463,
            "unit": "ns/iter",
            "extra": "iterations: 15756\ncpu: 52802.95760345262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50984.10096683487,
            "unit": "ns/iter",
            "extra": "iterations: 16342\ncpu: 50981.532248194555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 103653.5114350046,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 103648.07441639982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 900705.1543624433,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 900643.9117928994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 727106.5799227735,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 727071.1969111956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 727913.5482625471,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 727878.1467181437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 724201.153022196,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 724155.470543227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 516779.63188745687,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 516760.2579132487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 708999.1027756974,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 708965.2663165762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3958091.857142773,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3957796.6386554623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1708096.3049002318,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1707955.5353901954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8779.254687499519,
            "unit": "ns/iter",
            "extra": "iterations: 94720\ncpu: 8778.657094594628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 49557.11881424909,
            "unit": "ns/iter",
            "extra": "iterations: 16732\ncpu: 49554.59598374401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39658.634890189336,
            "unit": "ns/iter",
            "extra": "iterations: 20854\ncpu: 39656.18106837993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 39714.283388401396,
            "unit": "ns/iter",
            "extra": "iterations: 20883\ncpu: 39710.38643873022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 39772.95576413902,
            "unit": "ns/iter",
            "extra": "iterations: 20775\ncpu: 39772.84235860406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 89646.58746250215,
            "unit": "ns/iter",
            "extra": "iterations: 9667\ncpu: 89640.99513809879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 884892.20427113,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 884873.2590529275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 705482.0420105165,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 705427.4568642124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 703760.9710467678,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 703750.482553823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 701768.7125837739,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 701745.2717795984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 500026.5384615401,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 499987.50000000285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 694032.0007336852,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 693983.8591342639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 682.000189736717,
            "unit": "ns/iter",
            "extra": "iterations: 1027740\ncpu: 681.9653803491143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4960.468848907053,
            "unit": "ns/iter",
            "extra": "iterations: 141231\ncpu: 4960.304748957382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3870.3051237413715,
            "unit": "ns/iter",
            "extra": "iterations: 180376\ncpu: 3870.0725151904994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3833.0269757251795,
            "unit": "ns/iter",
            "extra": "iterations: 184388\ncpu: 3832.9549645313305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2865.4707827778734,
            "unit": "ns/iter",
            "extra": "iterations: 244616\ncpu: 2865.341596624897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 24111.103473326195,
            "unit": "ns/iter",
            "extra": "iterations: 28906\ncpu: 24110.686362692977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 48165.42800938507,
            "unit": "ns/iter",
            "extra": "iterations: 14488\ncpu: 48162.644947542736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11277.279425468576,
            "unit": "ns/iter",
            "extra": "iterations: 62242\ncpu: 11276.678127309686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11471.399941524103,
            "unit": "ns/iter",
            "extra": "iterations: 61564\ncpu: 11470.520109154797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11423.159417450634,
            "unit": "ns/iter",
            "extra": "iterations: 61248\ncpu: 11422.466039707628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22943.276523627315,
            "unit": "ns/iter",
            "extra": "iterations: 30388\ncpu: 22942.898512570493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22213.150685368837,
            "unit": "ns/iter",
            "extra": "iterations: 31224\ncpu: 22212.090058928974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6993.100458674328,
            "unit": "ns/iter",
            "extra": "iterations: 100071\ncpu: 6993.081911842606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34726.838428594325,
            "unit": "ns/iter",
            "extra": "iterations: 20313\ncpu: 34724.37355388161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27724.04851336288,
            "unit": "ns/iter",
            "extra": "iterations: 25292\ncpu: 27723.256365649082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27506.630550203183,
            "unit": "ns/iter",
            "extra": "iterations: 25427\ncpu: 27504.66826601638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28183.959774511448,
            "unit": "ns/iter",
            "extra": "iterations: 24835\ncpu: 28183.881618683234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59331.28514465388,
            "unit": "ns/iter",
            "extra": "iterations: 11787\ncpu: 59326.5377110378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 221784.58705994507,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 221778.5601014865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 190318.99428571295,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 190302.5034013598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 191443.96243487106,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 191436.8247874962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 190388.75238353803,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 190379.05202941946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 110553.8736958613,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 110547.6604489391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 187751.19250335134,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 187745.56894243613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6797.520511181194,
            "unit": "ns/iter",
            "extra": "iterations: 103212\ncpu: 6796.713560438665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34869.10196445287,
            "unit": "ns/iter",
            "extra": "iterations: 20311\ncpu: 34867.40682388867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 28228.133877912962,
            "unit": "ns/iter",
            "extra": "iterations: 24851\ncpu: 28226.55426341035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 28549.099573777756,
            "unit": "ns/iter",
            "extra": "iterations: 24635\ncpu: 28547.087477166322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 29458.81663787071,
            "unit": "ns/iter",
            "extra": "iterations: 23729\ncpu: 29457.05676598271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 59509.77277371025,
            "unit": "ns/iter",
            "extra": "iterations: 11746\ncpu: 59509.671377490646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 221088.89886578443,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 221078.2923755501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 189581.82980454876,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 189581.5146579805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 188458.77798760487,
            "unit": "ns/iter",
            "extra": "iterations: 3707\ncpu: 188453.16967898593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 189156.8101026514,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 189147.83900594263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110809.86795746945,
            "unit": "ns/iter",
            "extra": "iterations: 6301\ncpu: 110800.9363593078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 187353.38453303833,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 187345.6248327541 ns\nthreads: 1"
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
        "date": 1702387047032,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1757.1474222155027,
            "unit": "ns/iter",
            "extra": "iterations: 399180\ncpu: 1757.1135828448319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26491.612112865303,
            "unit": "ns/iter",
            "extra": "iterations: 31223\ncpu: 26491.471030970763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54317.41734892716,
            "unit": "ns/iter",
            "extra": "iterations: 15390\ncpu: 54318.102664067555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68043.95081713419,
            "unit": "ns/iter",
            "extra": "iterations: 12911\ncpu: 68043.17248857563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 95385.696104703,
            "unit": "ns/iter",
            "extra": "iterations: 9704\ncpu: 95384.54245671886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 118278.1246105962,
            "unit": "ns/iter",
            "extra": "iterations: 7383\ncpu: 118277.48882568057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143434.83428291796,
            "unit": "ns/iter",
            "extra": "iterations: 6143\ncpu: 143434.42943187366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 165794.63692190556,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 165790.86547687574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 188512.02928322702,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 188510.2491258741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1552.6918806307137,
            "unit": "ns/iter",
            "extra": "iterations: 449764\ncpu: 1552.6576159941656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1267.4472512087386,
            "unit": "ns/iter",
            "extra": "iterations: 551406\ncpu: 1267.4639013721282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1261.3339819488235,
            "unit": "ns/iter",
            "extra": "iterations: 551431\ncpu: 1261.3001445330424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1264.0092236093772,
            "unit": "ns/iter",
            "extra": "iterations: 546207\ncpu: 1263.9649436935094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2343.325920651081,
            "unit": "ns/iter",
            "extra": "iterations: 300521\ncpu: 2343.265528864874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9701.091978735703,
            "unit": "ns/iter",
            "extra": "iterations: 84650\ncpu: 9700.64028352036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 47980.613846963024,
            "unit": "ns/iter",
            "extra": "iterations: 17159\ncpu: 47979.2645259048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 35711.90272188327,
            "unit": "ns/iter",
            "extra": "iterations: 23109\ncpu: 35710.740404171476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 39798.65247520031,
            "unit": "ns/iter",
            "extra": "iterations: 21069\ncpu: 39796.21719113402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 37045.99074697872,
            "unit": "ns/iter",
            "extra": "iterations: 22263\ncpu: 37036.594349368825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 92322.1646910773,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 92317.32927724735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 855607.5040650278,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 855572.8093947624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 685633.46407623,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 685595.1612903225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 689696.9346879532,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 689675.6168359935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 690823.8997789391,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 690784.3773028731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 488263.9591950797,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 488242.761319171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 688604.653647764,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 688566.6175386893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3875611.0980390236,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3875445.098039207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1569903.1013288272,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1569877.4086378727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4843331.102564172,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4843257.435897441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13050.789160250943,
            "unit": "ns/iter",
            "extra": "iterations: 64817\ncpu: 13050.850857028248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55664.47890000176,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55662.309999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50825.27984915737,
            "unit": "ns/iter",
            "extra": "iterations: 16441\ncpu: 50823.70902013249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52899.61439067593,
            "unit": "ns/iter",
            "extra": "iterations: 15788\ncpu: 52899.170255890625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50827.244623656945,
            "unit": "ns/iter",
            "extra": "iterations: 16368\ncpu: 50825.5131964811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 102713.83280122692,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 102709.37684758256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 898780.0218216047,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 898736.2428842515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 712645.3859648827,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 712644.2410373737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 715540.755319135,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 715535.8662614007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 716373.2207001499,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 716410.5783866014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 507932.3795284551,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 507919.66647498653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 703589.3259094502,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 703556.5701559038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3905021.1924687275,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3904883.2635983042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1668361.0685413682,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1668344.9912126523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8667.229990155054,
            "unit": "ns/iter",
            "extra": "iterations: 95478\ncpu: 8667.106558578917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 49582.81441398612,
            "unit": "ns/iter",
            "extra": "iterations: 16817\ncpu: 49583.06475590205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39752.847172081725,
            "unit": "ns/iter",
            "extra": "iterations: 20775\ncpu: 39753.00120336942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 39788.05402404376,
            "unit": "ns/iter",
            "extra": "iterations: 20713\ncpu: 39787.819243953236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 39959.35494946566,
            "unit": "ns/iter",
            "extra": "iterations: 20679\ncpu: 39959.877170076026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 88921.46252545726,
            "unit": "ns/iter",
            "extra": "iterations: 9820\ncpu: 88919.51120162968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 874029.2657534546,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 874027.7625570805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 704393.2290585646,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 704391.1045218635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 696035.3585043655,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 696044.0615835795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 697378.1806784669,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 697360.0294985254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 502576.92072479957,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 502578.82219705766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 687473.9256559834,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 687455.9037900894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 686.6813265554473,
            "unit": "ns/iter",
            "extra": "iterations: 1020176\ncpu: 686.6788671758634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4919.104476669443,
            "unit": "ns/iter",
            "extra": "iterations: 142539\ncpu: 4919.094423280687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3656.779267496689,
            "unit": "ns/iter",
            "extra": "iterations: 191535\ncpu: 3656.5766047980574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3730.0851804097047,
            "unit": "ns/iter",
            "extra": "iterations: 187684\ncpu: 3729.7857036295086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2831.347976295963,
            "unit": "ns/iter",
            "extra": "iterations: 246034\ncpu: 2831.1956884007855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 24168.198210955597,
            "unit": "ns/iter",
            "extra": "iterations: 28954\ncpu: 24167.33439248474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47825.683486238624,
            "unit": "ns/iter",
            "extra": "iterations: 14606\ncpu: 47825.10612077204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11374.7433304158,
            "unit": "ns/iter",
            "extra": "iterations: 61698\ncpu: 11374.778761061902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11353.47053387627,
            "unit": "ns/iter",
            "extra": "iterations: 61681\ncpu: 11353.54971547154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11370.75546419213,
            "unit": "ns/iter",
            "extra": "iterations: 61537\ncpu: 11370.5185498155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23085.61698839249,
            "unit": "ns/iter",
            "extra": "iterations: 30409\ncpu: 23085.428655989916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22512.036464195695,
            "unit": "ns/iter",
            "extra": "iterations: 31099\ncpu: 22511.4183735812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7017.444940848605,
            "unit": "ns/iter",
            "extra": "iterations: 99829\ncpu: 7017.555019082704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34675.929013414876,
            "unit": "ns/iter",
            "extra": "iterations: 20201\ncpu: 34674.8626305633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27565.205329152494,
            "unit": "ns/iter",
            "extra": "iterations: 25520\ncpu: 27564.572884012003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27399.426381684003,
            "unit": "ns/iter",
            "extra": "iterations: 25639\ncpu: 27398.95471742272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28155.879974327006,
            "unit": "ns/iter",
            "extra": "iterations: 24928\ncpu: 28155.96919127064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58741.56494050573,
            "unit": "ns/iter",
            "extra": "iterations: 11934\ncpu: 58739.91955756584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 219034.58994624318,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 219036.13657919774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 190837.25941988613,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 190837.16454323914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 188067.20032224126,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 188067.80343716603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 190412.25339488595,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 190413.0907115721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 111647.39688591691,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 111646.45694311999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 186208.1428950822,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 186210.9163346621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6790.998791974061,
            "unit": "ns/iter",
            "extra": "iterations: 101819\ncpu: 6790.872037635529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34888.92903864978,
            "unit": "ns/iter",
            "extra": "iterations: 20180\ncpu: 34889.46977205167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 28376.84242131168,
            "unit": "ns/iter",
            "extra": "iterations: 24813\ncpu: 28376.250352637267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 28233.193300007697,
            "unit": "ns/iter",
            "extra": "iterations: 24806\ncpu: 28233.05248730133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 28578.388096891023,
            "unit": "ns/iter",
            "extra": "iterations: 24481\ncpu: 28577.70924390386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 60299.491238622446,
            "unit": "ns/iter",
            "extra": "iterations: 11642\ncpu: 60300.44665865034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 218868.44521191588,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 218863.73626373537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 186751.06700617028,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 186753.52452425676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 187349.91762503222,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 187349.61219577628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 186267.07866666644,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 186266.9333333353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110227.63054419545,
            "unit": "ns/iter",
            "extra": "iterations: 6358\ncpu: 110227.83894306293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184152.89221872968,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184141.71924289994 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388131486,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1790.5814237053064,
            "unit": "ns/iter",
            "extra": "iterations: 385459\ncpu: 1790.381078143201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27036.678292706638,
            "unit": "ns/iter",
            "extra": "iterations: 31137\ncpu: 27034.386742460738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54514.91163948562,
            "unit": "ns/iter",
            "extra": "iterations: 15267\ncpu: 54511.69188445667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67793.59534161615,
            "unit": "ns/iter",
            "extra": "iterations: 12880\ncpu: 67790.37267080741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 94963.80594326876,
            "unit": "ns/iter",
            "extra": "iterations: 8884\ncpu: 94960.5695632598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 118415.19174724398,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 118408.66131009134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143327.2779759959,
            "unit": "ns/iter",
            "extra": "iterations: 6166\ncpu: 143318.6020110281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 166353.94723568938,
            "unit": "ns/iter",
            "extra": "iterations: 5155\ncpu: 166344.4422890397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 189008.4488003487,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 189000.1928020564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1575.5319241850527,
            "unit": "ns/iter",
            "extra": "iterations: 444240\ncpu: 1575.3838015487122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1281.1978336456434,
            "unit": "ns/iter",
            "extra": "iterations: 541278\ncpu: 1281.1344632517842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1263.6775076102936,
            "unit": "ns/iter",
            "extra": "iterations: 554841\ncpu: 1263.5661387676844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1268.1569928437982,
            "unit": "ns/iter",
            "extra": "iterations: 552522\ncpu: 1268.086157655261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2321.139434013672,
            "unit": "ns/iter",
            "extra": "iterations: 301562\ncpu: 2321.0978173642566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9772.13475227539,
            "unit": "ns/iter",
            "extra": "iterations: 84711\ncpu: 9771.745109844076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 50082.232860878205,
            "unit": "ns/iter",
            "extra": "iterations: 16439\ncpu: 50079.907536954735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37532.673561762764,
            "unit": "ns/iter",
            "extra": "iterations: 22093\ncpu: 37531.44434888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 39173.10466828017,
            "unit": "ns/iter",
            "extra": "iterations: 21057\ncpu: 39170.423137199046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 37152.563974818666,
            "unit": "ns/iter",
            "extra": "iterations: 22079\ncpu: 37150.79034376556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 93359.15164789592,
            "unit": "ns/iter",
            "extra": "iterations: 9588\ncpu: 93353.81727158956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 846667.599095032,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 846625.4298642557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 710223.8405584339,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 710166.7156502581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 687773.8066176211,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 687727.205882353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 682621.7359050423,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 682576.1127596436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 494736.40671214636,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 494732.7076222988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 690744.9738219932,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 690712.6402393407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3700297.701960813,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3700114.509803923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1592798.3333333312,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1592768.0134680145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4818697.867346996,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4818451.020408153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12748.836068648585,
            "unit": "ns/iter",
            "extra": "iterations: 63978\ncpu: 12748.061833755362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55835.96499999999,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55832.849999999824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50864.11149890006,
            "unit": "ns/iter",
            "extra": "iterations: 16332\ncpu: 50862.39897134454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52646.71275855479,
            "unit": "ns/iter",
            "extra": "iterations: 15809\ncpu: 52643.75355809946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50857.669025254014,
            "unit": "ns/iter",
            "extra": "iterations: 16394\ncpu: 50855.28242039745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 101540.4205673762,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 101534.9054373523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 886144.8962263995,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 886116.3207547166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720646.7989296546,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 720615.8256880739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 722372.7257319111,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 722340.7550077023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 713827.9333837997,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 713793.4140802419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 511484.69860628294,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 511460.3368176526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 703063.2109548461,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 703041.3027387117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3877246.88016533,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3877048.347107451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1680347.7168141638,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1680284.0707964555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8605.389698837918,
            "unit": "ns/iter",
            "extra": "iterations: 96028\ncpu: 8604.933977589906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 49389.47134138951,
            "unit": "ns/iter",
            "extra": "iterations: 16714\ncpu: 49388.34509991606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39909.18224726702,
            "unit": "ns/iter",
            "extra": "iterations: 20763\ncpu: 39907.315898473236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 39671.34058144601,
            "unit": "ns/iter",
            "extra": "iterations: 20879\ncpu: 39669.26097993198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 39908.6956500792,
            "unit": "ns/iter",
            "extra": "iterations: 20759\ncpu: 39907.052362830735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 88726.76185598208,
            "unit": "ns/iter",
            "extra": "iterations: 9763\ncpu: 88721.29468401097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 871717.3844037035,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 871690.2752293617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 701984.7064492393,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 701935.7301704993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 700178.6128318401,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 700146.0176991166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 694931.1231563197,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 694896.091445428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 501717.3610169566,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 501701.24293785373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 688508.8736842255,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 688464.812030072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 678.4727176449164,
            "unit": "ns/iter",
            "extra": "iterations: 1031106\ncpu: 678.4353887961074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 5052.64107852382,
            "unit": "ns/iter",
            "extra": "iterations: 138671\ncpu: 5052.390189729653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3631.3285654011524,
            "unit": "ns/iter",
            "extra": "iterations: 191977\ncpu: 3631.192278241692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3919.681637564499,
            "unit": "ns/iter",
            "extra": "iterations: 178680\ncpu: 3919.3978061338867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2864.41859751985,
            "unit": "ns/iter",
            "extra": "iterations: 244581\ncpu: 2864.2870868955565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 24238.99415528304,
            "unit": "ns/iter",
            "extra": "iterations: 28915\ncpu: 24237.627528964233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47990.70690494753,
            "unit": "ns/iter",
            "extra": "iterations: 14381\ncpu: 47990.33446909054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11304.99344683579,
            "unit": "ns/iter",
            "extra": "iterations: 62260\ncpu: 11304.180854481248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11495.680747934204,
            "unit": "ns/iter",
            "extra": "iterations: 60861\ncpu: 11495.230114523369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11439.981558458348,
            "unit": "ns/iter",
            "extra": "iterations: 60624\ncpu: 11439.43652678822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23196.75346992645,
            "unit": "ns/iter",
            "extra": "iterations: 30260\ncpu: 23195.895571711855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22391.996866507652,
            "unit": "ns/iter",
            "extra": "iterations: 31275\ncpu: 22391.13029576366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6884.511359028189,
            "unit": "ns/iter",
            "extra": "iterations: 101109\ncpu: 6884.326815614731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34151.311156600736,
            "unit": "ns/iter",
            "extra": "iterations: 20517\ncpu: 34150.10966515582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 26994.715753689965,
            "unit": "ns/iter",
            "extra": "iterations: 25886\ncpu: 26993.94267171432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 26768.083422501953,
            "unit": "ns/iter",
            "extra": "iterations: 26168\ncpu: 26767.892081932285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 27461.182204724428,
            "unit": "ns/iter",
            "extra": "iterations: 25400\ncpu: 27460.40944881932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58378.98635039376,
            "unit": "ns/iter",
            "extra": "iterations: 12015\ncpu: 58377.32833957604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 222707.87622976134,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 222694.70009520886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 187204.1242302522,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 187197.13520749458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 188322.9536585333,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 188310.8943089443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 187019.81483502255,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 187010.1990728131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 111354.21038424631,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 111349.36487773871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 186824.10061546616,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 186816.69788600376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6461.515983988644,
            "unit": "ns/iter",
            "extra": "iterations: 109422\ncpu: 6461.4666154885845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 35256.00809574092,
            "unit": "ns/iter",
            "extra": "iterations: 19887\ncpu: 35253.85427666268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 28133.12713533537,
            "unit": "ns/iter",
            "extra": "iterations: 24879\ncpu: 28131.564773503644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 28308.279183112667,
            "unit": "ns/iter",
            "extra": "iterations: 24826\ncpu: 28307.19004269755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 28813.967037934224,
            "unit": "ns/iter",
            "extra": "iterations: 24331\ncpu: 28812.83136739171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 59079.69150008189,
            "unit": "ns/iter",
            "extra": "iterations: 11906\ncpu: 59077.75071392569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 216308.08369499183,
            "unit": "ns/iter",
            "extra": "iterations: 3226\ncpu: 216302.60384377223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184298.87297798958,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 184288.62370724088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 186493.26664897258,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 186486.0440435145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 186082.48749335072,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 186071.5540180971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 110553.6730163753,
            "unit": "ns/iter",
            "extra": "iterations: 6352\ncpu: 110549.43324936931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 185740.6952732939,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 185733.24531291242 ns\nthreads: 1"
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
        "date": 1702390822383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1797.7976067782517,
            "unit": "ns/iter",
            "extra": "iterations: 386174\ncpu: 1797.7199397162938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26981.351321912643,
            "unit": "ns/iter",
            "extra": "iterations: 30297\ncpu: 26980.130045879134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55569.137279850234,
            "unit": "ns/iter",
            "extra": "iterations: 14933\ncpu: 55568.043929552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68111.35341930429,
            "unit": "ns/iter",
            "extra": "iterations: 12795\ncpu: 68109.69910121143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 95398.08911097383,
            "unit": "ns/iter",
            "extra": "iterations: 9606\ncpu: 95393.04601290866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 119286.24134628274,
            "unit": "ns/iter",
            "extra": "iterations: 7309\ncpu: 119279.05322205498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 145906.50192146754,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 145902.7067669173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 168989.92762388207,
            "unit": "ns/iter",
            "extra": "iterations: 5126\ncpu: 168982.81310963692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 192372.02284098644,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 192364.95540569938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1560.6226610695442,
            "unit": "ns/iter",
            "extra": "iterations: 449511\ncpu: 1560.5333351130437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1283.8411121104164,
            "unit": "ns/iter",
            "extra": "iterations: 543723\ncpu: 1283.8022301797055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1300.3016857550458,
            "unit": "ns/iter",
            "extra": "iterations: 538809\ncpu: 1300.2650289805836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1300.8910522718309,
            "unit": "ns/iter",
            "extra": "iterations: 537019\ncpu: 1300.8273450287622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2305.3854193825237,
            "unit": "ns/iter",
            "extra": "iterations: 303005\ncpu: 2305.326974802396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9091.905631081885,
            "unit": "ns/iter",
            "extra": "iterations: 84371\ncpu: 9091.48759644903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 47133.77706532552,
            "unit": "ns/iter",
            "extra": "iterations: 17467\ncpu: 47130.63491154755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 34922.91212981272,
            "unit": "ns/iter",
            "extra": "iterations: 23603\ncpu: 34921.412532305236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 37001.11142061285,
            "unit": "ns/iter",
            "extra": "iterations: 22258\ncpu: 36999.68999910151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 35000.46165637657,
            "unit": "ns/iter",
            "extra": "iterations: 23485\ncpu: 34999.46348733235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 93237.75369768392,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 93234.44875694958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 858394.7422018413,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 858379.8165137618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 704198.2774480708,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 704174.7032640943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 706219.5914221209,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 706218.284424377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 700662.237538937,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 700647.8193146402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 495772.47559592605,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 495755.2213393872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 702175.0795198708,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 702122.5806451606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3747081.5238096057,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3746950.0000000126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1648594.1608392538,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1648509.265734266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4893517.557291875,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4893194.270833345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12991.911435728178,
            "unit": "ns/iter",
            "extra": "iterations: 64281\ncpu: 12991.856069445048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 56247.43980000062,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56245.19999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50862.11658698106,
            "unit": "ns/iter",
            "extra": "iterations: 16314\ncpu: 50860.08336398186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52810.40441316322,
            "unit": "ns/iter",
            "extra": "iterations: 15771\ncpu: 52807.10164225479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50968.338445560184,
            "unit": "ns/iter",
            "extra": "iterations: 16366\ncpu: 50966.85812049359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 103415.80619971608,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 103407.40653099804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 894972.7125237127,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 894926.5654648965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 724329.0468510152,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 724287.4807987678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 724600.4463190447,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 724581.7484662571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 719667.674542695,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 719622.4847560995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 504468.4683179992,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 504439.631336406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 704908.3528528485,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 704893.7687687686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3927878.962499894,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3927737.083333345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1681320.6943462992,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1681236.925795055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8664.101837512153,
            "unit": "ns/iter",
            "extra": "iterations: 95564\ncpu: 8663.765643966384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 49796.935599713965,
            "unit": "ns/iter",
            "extra": "iterations: 16708\ncpu: 49795.541058175564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39733.47280294666,
            "unit": "ns/iter",
            "extra": "iterations: 20903\ncpu: 39731.32564703648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 39551.081299653575,
            "unit": "ns/iter",
            "extra": "iterations: 21021\ncpu: 39548.413491270796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 39496.77772427476,
            "unit": "ns/iter",
            "extra": "iterations: 20767\ncpu: 39495.68064718068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 90150.00340451518,
            "unit": "ns/iter",
            "extra": "iterations: 9693\ncpu: 90145.65150108286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 874430.941612637,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 874387.8591288207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 700454.8053691414,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 700413.1991051503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 695980.3491124145,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 695966.6420118344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 701884.7507331636,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 701854.4721407626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 491778.563697852,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 491762.68320180173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 687031.20101969,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 686991.9155134754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 738.5519762372202,
            "unit": "ns/iter",
            "extra": "iterations: 1048027\ncpu: 738.5497701872197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 5013.001673838346,
            "unit": "ns/iter",
            "extra": "iterations: 139201\ncpu: 5012.610541590937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3823.856222958587,
            "unit": "ns/iter",
            "extra": "iterations: 197382\ncpu: 3823.8015624525224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3895.376397781551,
            "unit": "ns/iter",
            "extra": "iterations: 177424\ncpu: 3895.181598881762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2914.274852508791,
            "unit": "ns/iter",
            "extra": "iterations: 239845\ncpu: 2914.2650461756707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 24087.64427621965,
            "unit": "ns/iter",
            "extra": "iterations: 29194\ncpu: 24086.819209426565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47734.46091460552,
            "unit": "ns/iter",
            "extra": "iterations: 14673\ncpu: 47732.154297008274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11205.40783874637,
            "unit": "ns/iter",
            "extra": "iterations: 62510\ncpu: 11204.640857462888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11711.43149960529,
            "unit": "ns/iter",
            "extra": "iterations: 59569\ncpu: 11711.279356712528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11743.64746916798,
            "unit": "ns/iter",
            "extra": "iterations: 59921\ncpu: 11742.85976535777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22907.846123597647,
            "unit": "ns/iter",
            "extra": "iterations: 30518\ncpu: 22906.845140573165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22763.744220682896,
            "unit": "ns/iter",
            "extra": "iterations: 30886\ncpu: 22762.319497506793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7029.7350752258,
            "unit": "ns/iter",
            "extra": "iterations: 99700\ncpu: 7029.51354062194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34820.49599163467,
            "unit": "ns/iter",
            "extra": "iterations: 20083\ncpu: 34818.816909824476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27648.551851996916,
            "unit": "ns/iter",
            "extra": "iterations: 25351\ncpu: 27647.39458009537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27335.9333411342,
            "unit": "ns/iter",
            "extra": "iterations: 25638\ncpu: 27335.20165379511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28152.954208917876,
            "unit": "ns/iter",
            "extra": "iterations: 24852\ncpu: 28152.341863833786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 60074.44405172719,
            "unit": "ns/iter",
            "extra": "iterations: 11600\ncpu: 60073.21551724109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 223541.37045309995,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 223536.40714741434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 192123.78661546425,
            "unit": "ns/iter",
            "extra": "iterations: 3646\ncpu: 192120.76247942596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 188380.96746204738,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 188366.62147505465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 187368.8510980191,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187366.55061596038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 111832.89148154657,
            "unit": "ns/iter",
            "extra": "iterations: 6257\ncpu: 111829.96643758884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 187606.96891051705,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 187598.64828331783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6712.019829430687,
            "unit": "ns/iter",
            "extra": "iterations: 104239\ncpu: 6711.653987471102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 36084.407846155606,
            "unit": "ns/iter",
            "extra": "iterations: 19500\ncpu: 36083.292307691954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 28620.66782572957,
            "unit": "ns/iter",
            "extra": "iterations: 24445\ncpu: 28619.72591532059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 28133.344560837635,
            "unit": "ns/iter",
            "extra": "iterations: 24820\ncpu: 28132.159548751035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 29387.123580805364,
            "unit": "ns/iter",
            "extra": "iterations: 23693\ncpu: 29385.67509390956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 60925.10752967486,
            "unit": "ns/iter",
            "extra": "iterations: 11541\ncpu: 60922.571700891895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 216071.09274192614,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 216063.95781637807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 185651.3332445452,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 185637.10708577672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 188704.11018318564,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 188698.22198276033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 186716.67725573134,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 186703.3368926842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 111405.26830435712,
            "unit": "ns/iter",
            "extra": "iterations: 6269\ncpu: 111404.88116126784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 185158.35220293346,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 185152.28304405656 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}