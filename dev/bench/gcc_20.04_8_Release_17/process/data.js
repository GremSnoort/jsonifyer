window.BENCHMARK_DATA = {
  "lastUpdate": 1702381118312,
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
      }
    ]
  }
}