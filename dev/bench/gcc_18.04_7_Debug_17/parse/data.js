window.BENCHMARK_DATA = {
  "lastUpdate": 1702397918368,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-7 18.04 Debug c++-17": [
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
        "date": 1702397916933,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7644.690869994976,
            "unit": "ns/iter",
            "extra": "iterations: 92081\ncpu: 7644.565111152139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55007.73229999822,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55005.85000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101086.47236950537,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 101086.43808177214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146526.81106773036,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 146526.66779833645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192992.89005118946,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 192991.5646561318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238786.54177005572,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 238778.16377171202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284280.9161205643,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 284280.93053735275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330270.73378839577,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 330259.0822904817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 375224.88352028,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 375218.0759275238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6353.798987964985,
            "unit": "ns/iter",
            "extra": "iterations: 109680\ncpu: 6353.679795769509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5317.935792411528,
            "unit": "ns/iter",
            "extra": "iterations: 131838\ncpu: 5317.927304722454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5315.006162754318,
            "unit": "ns/iter",
            "extra": "iterations: 131597\ncpu: 5315.001101848822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5262.025295147536,
            "unit": "ns/iter",
            "extra": "iterations: 133069\ncpu: 5261.855127790849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8923.402511930632,
            "unit": "ns/iter",
            "extra": "iterations: 77948\ncpu: 8923.34376763997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29697.06254792378,
            "unit": "ns/iter",
            "extra": "iterations: 27387\ncpu: 29696.421659911637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147979.4899757979,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 147979.20843415151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115634.04894537506,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 115630.55705786904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114788.45123589634,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 114787.70822138619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112335.6318499925,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 112332.16690875478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 333639.43047549773,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 333637.60806916433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1763304.94285713,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1763244.761904757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1406068.3495440267,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1406050.7598784189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1400017.448795213,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1399995.3313253012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1386655.404761937,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386647.3214285742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 788797.1884057835,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 788770.0767263423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1358115.529926984,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1358065.2554744498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38212.57704039163,
            "unit": "ns/iter",
            "extra": "iterations: 21638\ncpu: 38211.67390701547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 181452.7210670009,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 181448.37219071647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139879.0230894342,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 139870.357723577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139023.22331824683,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 139020.19728331178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134880.02070063696,
            "unit": "ns/iter",
            "extra": "iterations: 6280\ncpu: 134876.52866242055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318668.7038532075,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 318656.8073394486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1820466.1874999807,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1820355.8593749974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1433445.8569230544,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1433425.846153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1435588.439137126,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1435582.8967642514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1454578.0931298255,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1454521.3740458009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 817508.1786971936,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 817503.873239438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1396953.9372196682,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1396908.669656208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5068250.960000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5067924.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3068484.4703947376,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3068406.2499999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29121.271027709834,
            "unit": "ns/iter",
            "extra": "iterations: 28617\ncpu: 29121.15875179094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138341.26037311114,
            "unit": "ns/iter",
            "extra": "iterations: 6218\ncpu: 138339.16050176928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107922.39260940421,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 107923.0924454537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107628.1788587223,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 107625.06284565115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104222.38505468196,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 104216.12393681656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 273661.5998107871,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 273649.51119520643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1761759.9226414186,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1761661.8867924483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1392716.8588410101,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1392655.1263001505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1390239.3979135796,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1390153.5022354752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1365964.788856321,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365937.8299120176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 771736.5504131878,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 771703.2231404925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1343407.4175036226,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1343317.9340028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2996.5408195154814,
            "unit": "ns/iter",
            "extra": "iterations: 233577\ncpu: 2996.5202053284315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19371.631901161647,
            "unit": "ns/iter",
            "extra": "iterations: 36099\ncpu: 19371.583700379626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15678.95478163409,
            "unit": "ns/iter",
            "extra": "iterations: 44650\ncpu: 15678.589025755877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15130.80725260982,
            "unit": "ns/iter",
            "extra": "iterations: 46273\ncpu: 15129.950511097239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11349.029575667155,
            "unit": "ns/iter",
            "extra": "iterations: 61909\ncpu: 11348.412993264237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95701.73657602994,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95698.75666074586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122051.75670965225,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 122045.39909376095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29898.657948631066,
            "unit": "ns/iter",
            "extra": "iterations: 23438\ncpu: 29897.32912364534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29646.301058357756,
            "unit": "ns/iter",
            "extra": "iterations: 23527\ncpu: 29645.662430399156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29728.671040896217,
            "unit": "ns/iter",
            "extra": "iterations: 23547\ncpu: 29728.891153862336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61540.72585752211,
            "unit": "ns/iter",
            "extra": "iterations: 11370\ncpu: 61539.410729991265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56027.09029001456,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 56027.47957058147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22978.0864396216,
            "unit": "ns/iter",
            "extra": "iterations: 30449\ncpu: 22977.342441459383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109828.86397866618,
            "unit": "ns/iter",
            "extra": "iterations: 6374\ncpu: 109828.34954502653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90765.24557752846,
            "unit": "ns/iter",
            "extra": "iterations: 7688\ncpu: 90764.64620187473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90753.60435571687,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 90750.59631838198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90186.3885530527,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 90187.00964630097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 162671.17366102626,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 162665.87062369665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 523160.94548169937,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 523157.13218820497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 436800.95776396303,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 436792.2981366455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 433675.8652526565,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 433677.97878976306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 430388.06081081234,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430373.7714987713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282444.31260098115,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 282445.7189014588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 426010.63564475277,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426012.77372262214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22627.60845790525,
            "unit": "ns/iter",
            "extra": "iterations: 30906\ncpu: 22627.72600789527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112534.79710377366,
            "unit": "ns/iter",
            "extra": "iterations: 6215\ncpu: 112531.08608206052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91262.216568822,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91261.53946510247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90578.19777374619,
            "unit": "ns/iter",
            "extra": "iterations: 7726\ncpu: 90576.18431271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90644.34535815287,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 90644.82803206577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 160940.26482759306,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 160941.19540229774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 517297.2029520333,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 517280.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 432399.53032177355,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 432402.04207920266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 431256.3008631035,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 431258.50801480183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430263.9969268511,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 430253.472649044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 277699.7831946021,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 277697.8596908452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 424834.61023140355,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 424812.7283800227 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397916933,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7644.690869994976,
            "unit": "ns/iter",
            "extra": "iterations: 92081\ncpu: 7644.565111152139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55007.73229999822,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55005.85000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101086.47236950537,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 101086.43808177214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146526.81106773036,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 146526.66779833645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192992.89005118946,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 192991.5646561318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238786.54177005572,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 238778.16377171202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284280.9161205643,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 284280.93053735275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330270.73378839577,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 330259.0822904817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 375224.88352028,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 375218.0759275238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6353.798987964985,
            "unit": "ns/iter",
            "extra": "iterations: 109680\ncpu: 6353.679795769509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5317.935792411528,
            "unit": "ns/iter",
            "extra": "iterations: 131838\ncpu: 5317.927304722454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5315.006162754318,
            "unit": "ns/iter",
            "extra": "iterations: 131597\ncpu: 5315.001101848822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5262.025295147536,
            "unit": "ns/iter",
            "extra": "iterations: 133069\ncpu: 5261.855127790849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8923.402511930632,
            "unit": "ns/iter",
            "extra": "iterations: 77948\ncpu: 8923.34376763997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29697.06254792378,
            "unit": "ns/iter",
            "extra": "iterations: 27387\ncpu: 29696.421659911637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147979.4899757979,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 147979.20843415151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115634.04894537506,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 115630.55705786904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114788.45123589634,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 114787.70822138619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112335.6318499925,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 112332.16690875478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 333639.43047549773,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 333637.60806916433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1763304.94285713,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1763244.761904757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1406068.3495440267,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1406050.7598784189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1400017.448795213,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1399995.3313253012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1386655.404761937,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386647.3214285742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 788797.1884057835,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 788770.0767263423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1358115.529926984,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1358065.2554744498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38212.57704039163,
            "unit": "ns/iter",
            "extra": "iterations: 21638\ncpu: 38211.67390701547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 181452.7210670009,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 181448.37219071647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139879.0230894342,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 139870.357723577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139023.22331824683,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 139020.19728331178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134880.02070063696,
            "unit": "ns/iter",
            "extra": "iterations: 6280\ncpu: 134876.52866242055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318668.7038532075,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 318656.8073394486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1820466.1874999807,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1820355.8593749974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1433445.8569230544,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1433425.846153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1435588.439137126,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1435582.8967642514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1454578.0931298255,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1454521.3740458009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 817508.1786971936,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 817503.873239438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1396953.9372196682,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1396908.669656208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5068250.960000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5067924.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3068484.4703947376,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3068406.2499999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29121.271027709834,
            "unit": "ns/iter",
            "extra": "iterations: 28617\ncpu: 29121.15875179094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138341.26037311114,
            "unit": "ns/iter",
            "extra": "iterations: 6218\ncpu: 138339.16050176928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107922.39260940421,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 107923.0924454537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107628.1788587223,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 107625.06284565115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104222.38505468196,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 104216.12393681656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 273661.5998107871,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 273649.51119520643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1761759.9226414186,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1761661.8867924483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1392716.8588410101,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1392655.1263001505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1390239.3979135796,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1390153.5022354752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1365964.788856321,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365937.8299120176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 771736.5504131878,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 771703.2231404925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1343407.4175036226,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1343317.9340028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2996.5408195154814,
            "unit": "ns/iter",
            "extra": "iterations: 233577\ncpu: 2996.5202053284315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19371.631901161647,
            "unit": "ns/iter",
            "extra": "iterations: 36099\ncpu: 19371.583700379626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15678.95478163409,
            "unit": "ns/iter",
            "extra": "iterations: 44650\ncpu: 15678.589025755877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15130.80725260982,
            "unit": "ns/iter",
            "extra": "iterations: 46273\ncpu: 15129.950511097239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11349.029575667155,
            "unit": "ns/iter",
            "extra": "iterations: 61909\ncpu: 11348.412993264237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95701.73657602994,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95698.75666074586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122051.75670965225,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 122045.39909376095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29898.657948631066,
            "unit": "ns/iter",
            "extra": "iterations: 23438\ncpu: 29897.32912364534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29646.301058357756,
            "unit": "ns/iter",
            "extra": "iterations: 23527\ncpu: 29645.662430399156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29728.671040896217,
            "unit": "ns/iter",
            "extra": "iterations: 23547\ncpu: 29728.891153862336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61540.72585752211,
            "unit": "ns/iter",
            "extra": "iterations: 11370\ncpu: 61539.410729991265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56027.09029001456,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 56027.47957058147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22978.0864396216,
            "unit": "ns/iter",
            "extra": "iterations: 30449\ncpu: 22977.342441459383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109828.86397866618,
            "unit": "ns/iter",
            "extra": "iterations: 6374\ncpu: 109828.34954502653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90765.24557752846,
            "unit": "ns/iter",
            "extra": "iterations: 7688\ncpu: 90764.64620187473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90753.60435571687,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 90750.59631838198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90186.3885530527,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 90187.00964630097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 162671.17366102626,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 162665.87062369665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 523160.94548169937,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 523157.13218820497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 436800.95776396303,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 436792.2981366455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 433675.8652526565,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 433677.97878976306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 430388.06081081234,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430373.7714987713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282444.31260098115,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 282445.7189014588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 426010.63564475277,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426012.77372262214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22627.60845790525,
            "unit": "ns/iter",
            "extra": "iterations: 30906\ncpu: 22627.72600789527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112534.79710377366,
            "unit": "ns/iter",
            "extra": "iterations: 6215\ncpu: 112531.08608206052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91262.216568822,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91261.53946510247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90578.19777374619,
            "unit": "ns/iter",
            "extra": "iterations: 7726\ncpu: 90576.18431271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90644.34535815287,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 90644.82803206577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 160940.26482759306,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 160941.19540229774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 517297.2029520333,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 517280.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 432399.53032177355,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 432402.04207920266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 431256.3008631035,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 431258.50801480183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430263.9969268511,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 430253.472649044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 277699.7831946021,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 277697.8596908452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 424834.61023140355,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 424812.7283800227 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}