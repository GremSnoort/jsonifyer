window.BENCHMARK_DATA = {
  "lastUpdate": 1705772012598,
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
        "date": 1702409138452,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7654.465957469935,
            "unit": "ns/iter",
            "extra": "iterations: 91371\ncpu: 7654.014950038854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54859.1751999993,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54858.76 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101674.48457993616,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 101672.22025286539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147836.17790358572,
            "unit": "ns/iter",
            "extra": "iterations: 5829\ncpu: 147833.60782295422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195343.42684563328,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 195338.32214765114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241228.83830498354,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 241217.73069417346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287228.48577102553,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 287223.1965585705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334048.1941560957,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 334047.71241830086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380080.9593175831,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 380072.878390201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6354.902726589402,
            "unit": "ns/iter",
            "extra": "iterations: 110431\ncpu: 6354.899439468987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5249.169803701732,
            "unit": "ns/iter",
            "extra": "iterations: 133725\ncpu: 5249.106001121712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5258.659185319777,
            "unit": "ns/iter",
            "extra": "iterations: 132641\ncpu: 5258.605559367013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5228.456860056028,
            "unit": "ns/iter",
            "extra": "iterations: 134168\ncpu: 5228.434500029822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8907.877657676132,
            "unit": "ns/iter",
            "extra": "iterations: 78452\ncpu: 8907.728292459075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29184.977101148972,
            "unit": "ns/iter",
            "extra": "iterations: 27949\ncpu: 29185.255286414493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149709.99773360847,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 149700.06973500704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117787.29349470731,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 117782.45083207272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117857.21986499519,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 117853.10648849688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114690.47316156974,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 114686.28556092334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 346783.76755539514,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 346760.72099136387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1772880.6183206565,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1772797.13740458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1407042.5447647762,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1406971.7754173006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1415401.9663609012,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1415375.2293577984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1391054.4054054583,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1391014.5645645643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793499.3479005861,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 793482.3479005982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1358303.539823024,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1358252.3598820046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37270.29002719781,
            "unit": "ns/iter",
            "extra": "iterations: 22060\ncpu: 37269.97733454211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 187996.945593035,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 187991.73014145787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 144326.71698114034,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 144326.54986522894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141317.2660098588,
            "unit": "ns/iter",
            "extra": "iterations: 6090\ncpu: 141314.5812807879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137715.01509554966,
            "unit": "ns/iter",
            "extra": "iterations: 6227\ncpu: 137714.8386060703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 325258.3970698784,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 325258.11419984984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1816895.0779726824,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1816848.7329434725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1442502.8193146656,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1442491.900311521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1432211.491525433,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1432166.872110936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1424304.4801222836,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1424195.5657492334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 815882.7957931608,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 815850.0438212053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1390838.4388059857,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1390750.4477611936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5041677.92999965,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5041274.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2994114.800642979,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2993909.6463022693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28723.581687235153,
            "unit": "ns/iter",
            "extra": "iterations: 28603\ncpu: 28722.770338775514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138970.00403551126,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 138962.8248587565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110631.9238598312,
            "unit": "ns/iter",
            "extra": "iterations: 7762\ncpu: 110627.48003092007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111490.77211901241,
            "unit": "ns/iter",
            "extra": "iterations: 7697\ncpu: 111490.51578537088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105872.02129239876,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 105871.76281257675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 282320.00812215963,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 282315.0097465896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1774454.0208728556,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1774386.5275142258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1410414.3783783715,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1410427.9279279325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1413890.880368095,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1413847.3926380316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1385064.5908419674,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1385078.8774002986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 789803.7094878381,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 789778.3375314877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1352871.1583577741,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1352884.897360708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2916.488142366926,
            "unit": "ns/iter",
            "extra": "iterations: 239213\ncpu: 2916.431799275146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19097.080810832478,
            "unit": "ns/iter",
            "extra": "iterations: 36703\ncpu: 19097.28087622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15654.40447781169,
            "unit": "ns/iter",
            "extra": "iterations: 44754\ncpu: 15654.008580238555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15059.818695968603,
            "unit": "ns/iter",
            "extra": "iterations: 46502\ncpu: 15059.984516794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11464.996709056235,
            "unit": "ns/iter",
            "extra": "iterations: 60469\ncpu: 11464.934098463658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98327.33619476843,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 98324.89445539072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121050.91131129098,
            "unit": "ns/iter",
            "extra": "iterations: 5773\ncpu: 121052.2085570765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29540.52982930423,
            "unit": "ns/iter",
            "extra": "iterations: 23668\ncpu: 29538.94287645759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29514.391289668358,
            "unit": "ns/iter",
            "extra": "iterations: 23696\ncpu: 29514.69024307896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29391.561369644754,
            "unit": "ns/iter",
            "extra": "iterations: 23831\ncpu: 29390.70957995879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60755.947318009625,
            "unit": "ns/iter",
            "extra": "iterations: 11484\ncpu: 60756.62661093728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55496.45765665474,
            "unit": "ns/iter",
            "extra": "iterations: 12623\ncpu: 55494.73183870722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21362.305335124267,
            "unit": "ns/iter",
            "extra": "iterations: 32764\ncpu: 21362.550360151406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105781.32416086044,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 105780.49591775076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87040.65254237839,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 87037.68693918169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85468.48173040949,
            "unit": "ns/iter",
            "extra": "iterations: 8183\ncpu: 85469.36331418855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85059.36554826694,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 85056.83199611075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157440.6182553936,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 157442.35611511068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 515583.81623620697,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 515580.6642066382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431483.0819470045,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 431488.0468268603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 427898.43921812926,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427884.54489921266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 427167.35186314565,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427171.96090409305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277713.91237110464,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 277710.1506740671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420317.6383874924,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 420313.2972322512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21827.47467979815,
            "unit": "ns/iter",
            "extra": "iterations: 32089\ncpu: 21825.98709838277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108342.80492335725,
            "unit": "ns/iter",
            "extra": "iterations: 6459\ncpu: 108336.73943334915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88501.89855804597,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 88495.93979256257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88703.44783489837,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 88693.93517346116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87426.0931452133,
            "unit": "ns/iter",
            "extra": "iterations: 8009\ncpu: 87427.08203271327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155412.55375029537,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 155408.85822390308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 514770.27667410276,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 514738.99926415907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426188.28867235116,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 426177.8319122984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427514.0329670851,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427518.6813186799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 425150.78163020214,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 425110.7664233526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276294.7245461774,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 276282.39936858776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 421081.76788932295,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 421045.7606734853 ns\nthreads: 1"
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
        "date": 1702412542209,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7731.2203489142785,
            "unit": "ns/iter",
            "extra": "iterations: 90452\ncpu: 7730.752222173086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56688.25249999827,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56684.820000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104429.50122248591,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 104428.23960880196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151723.5277337508,
            "unit": "ns/iter",
            "extra": "iterations: 5679\ncpu: 151717.06286318012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 199401.3563627803,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 199386.396011396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 245552.36018151126,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 245538.76914350525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 292595.55126048194,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 292588.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 339952.1989036798,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 339921.7306186374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 386432.4897686764,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 386404.9377224202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6558.932419673741,
            "unit": "ns/iter",
            "extra": "iterations: 106969\ncpu: 6558.208452916267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5395.182291346386,
            "unit": "ns/iter",
            "extra": "iterations: 129880\ncpu: 5394.868340006164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5390.734263104059,
            "unit": "ns/iter",
            "extra": "iterations: 130283\ncpu: 5390.1130615659695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5413.11539503083,
            "unit": "ns/iter",
            "extra": "iterations: 129243\ncpu: 5412.591784468015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8991.358433464691,
            "unit": "ns/iter",
            "extra": "iterations: 77649\ncpu: 8990.330847789402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29695.26613841451,
            "unit": "ns/iter",
            "extra": "iterations: 27512\ncpu: 29692.10889793544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145990.14246621024,
            "unit": "ns/iter",
            "extra": "iterations: 5847\ncpu: 145979.0832905765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113127.64245885111,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 113115.53372278289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112605.13405320492,
            "unit": "ns/iter",
            "extra": "iterations: 7594\ncpu: 112487.43745061867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111098.33613038823,
            "unit": "ns/iter",
            "extra": "iterations: 6197\ncpu: 111089.28513797009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 340328.28618906945,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 340298.264401772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1847383.8962075273,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1847208.7824351345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1471153.8594249792,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1471007.188498403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1492826.2818035297,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1492661.352657007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1447238.584639378,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1447127.586206897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 810968.1716548558,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 810888.8204225353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1414566.492331252,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1414443.8650306764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37053.4166217896,
            "unit": "ns/iter",
            "extra": "iterations: 22284\ncpu: 37049.510859809656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176020.78206698276,
            "unit": "ns/iter",
            "extra": "iterations: 4896\ncpu: 176010.17156862697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137656.0923662891,
            "unit": "ns/iter",
            "extra": "iterations: 6301\ncpu: 137654.34058086041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136544.29944223643,
            "unit": "ns/iter",
            "extra": "iterations: 6275\ncpu: 136537.0199203185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133390.91152648165,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 133389.28348909656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 324148.5588784947,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 324129.30841121526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1893596.2367345847,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1893544.8979591914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1501477.7003205,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1501374.03846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1501121.4368932645,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1501102.2653721718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1478075.9036335514,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1477978.3570300138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 839531.0686539895,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 839484.2818428227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1447577.2886114302,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1447444.773790947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5148216.84000026,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5148070.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3037380.504886283,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3037124.4299674165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27660.43975984875,
            "unit": "ns/iter",
            "extra": "iterations: 29648\ncpu: 27658.496357258366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135048.6440063243,
            "unit": "ns/iter",
            "extra": "iterations: 6340\ncpu: 135032.76025236634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105368.31786286335,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 105361.09811645994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105365.76607252963,
            "unit": "ns/iter",
            "extra": "iterations: 8135\ncpu: 105358.26674861717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101697.152500002,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 101688.238095238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 276847.7091430575,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 276823.63810130785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1845673.1422924863,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1845651.7786561386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1458278.3740218678,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1458192.4882629074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1470927.1908518258,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1470874.2902208208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1444896.4361370222,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1444835.0467289675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 794989.9196581519,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 794979.6581196552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1403719.5857360002,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1403661.0015174435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2995.856010602234,
            "unit": "ns/iter",
            "extra": "iterations: 234677\ncpu: 2995.75373811665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19422.51119133327,
            "unit": "ns/iter",
            "extra": "iterations: 36010\ncpu: 19421.166342682503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15235.307909481446,
            "unit": "ns/iter",
            "extra": "iterations: 45692\ncpu: 15235.122122034387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15663.414666263952,
            "unit": "ns/iter",
            "extra": "iterations: 46324\ncpu: 15662.637077972484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11499.534673926002,
            "unit": "ns/iter",
            "extra": "iterations: 60968\ncpu: 11499.404605694845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 99276.51460320965,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 99274.09887448406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125995.24675558004,
            "unit": "ns/iter",
            "extra": "iterations: 5548\ncpu: 125992.14131218453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30672.506466178755,
            "unit": "ns/iter",
            "extra": "iterations: 22811\ncpu: 30671.895138310345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30925.903372675093,
            "unit": "ns/iter",
            "extra": "iterations: 22623\ncpu: 30924.634221809563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30538.39430291386,
            "unit": "ns/iter",
            "extra": "iterations: 22924\ncpu: 30537.602512650425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61361.19945666413,
            "unit": "ns/iter",
            "extra": "iterations: 11411\ncpu: 61357.16413986474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57528.517952504044,
            "unit": "ns/iter",
            "extra": "iterations: 12171\ncpu: 57527.84487716721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21764.50650843622,
            "unit": "ns/iter",
            "extra": "iterations: 32189\ncpu: 21762.77610363787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112805.14696896367,
            "unit": "ns/iter",
            "extra": "iterations: 6219\ncpu: 112801.64013506932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89696.64809610035,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 89694.27549194921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89317.97958401253,
            "unit": "ns/iter",
            "extra": "iterations: 7837\ncpu: 89313.51282378477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88785.10426480735,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 88781.88415022203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157455.31264056585,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 157442.3301844349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 541189.461003861,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 541177.1428571444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 441697.9682741003,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 441667.25888325274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 444683.60546381364,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444673.379923766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 436672.4304429518,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 436649.7816593953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277638.78534651577,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 277619.7623762361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 434158.1661500631,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 434137.1977681358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22277.505815991855,
            "unit": "ns/iter",
            "extra": "iterations: 31379\ncpu: 22277.045157589782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113693.77849844839,
            "unit": "ns/iter",
            "extra": "iterations: 6167\ncpu: 113684.6927193123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91494.63130320766,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 91491.86640471497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91771.78115903585,
            "unit": "ns/iter",
            "extra": "iterations: 7558\ncpu: 91763.05901032053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90740.91278311572,
            "unit": "ns/iter",
            "extra": "iterations: 7682\ncpu: 90738.77896381181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155120.24578899468,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 155117.10992907936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 537424.8842024567,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 537388.4969325124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 438183.645225482,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 438170.0265251996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 441045.63802906877,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 441033.48073279316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 435316.40669563063,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 435286.1748295169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275826.69592720165,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 275814.5116646871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430019.5641975071,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 429974.2592592634 ns\nthreads: 1"
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
        "date": 1702415987900,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7654.349328634954,
            "unit": "ns/iter",
            "extra": "iterations: 91381\ncpu: 7654.106433503684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56315.394599999985,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56314.27 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104025.27826822514,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 104023.86020074978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151723.58795646377,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 151719.5400280899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198688.9187010592,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 198678.35099032713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 246313.87939840797,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 246307.00908059021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 293547.98884004063,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 293535.98241460935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 340604.8253719577,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 340597.6115896633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 388702.7228915615,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 388683.40026773774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6420.0466629401935,
            "unit": "ns/iter",
            "extra": "iterations: 109123\ncpu: 6419.892231701855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5427.703009679713,
            "unit": "ns/iter",
            "extra": "iterations: 130479\ncpu: 5427.366855969168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5295.672735279088,
            "unit": "ns/iter",
            "extra": "iterations: 131716\ncpu: 5295.490297306327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5335.885954646523,
            "unit": "ns/iter",
            "extra": "iterations: 131588\ncpu: 5335.711463051349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8815.443426229589,
            "unit": "ns/iter",
            "extra": "iterations: 79551\ncpu: 8815.089690890114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29197.049182089755,
            "unit": "ns/iter",
            "extra": "iterations: 27937\ncpu: 29196.413358628342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141106.72577456073,
            "unit": "ns/iter",
            "extra": "iterations: 6068\ncpu: 141100.97231377728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110006.11791295695,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 110003.75823324302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109909.59920175163,
            "unit": "ns/iter",
            "extra": "iterations: 7767\ncpu: 109905.57486803138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106012.89996271496,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 106011.99204672533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 325254.6133523607,
            "unit": "ns/iter",
            "extra": "iterations: 2801\ncpu: 325237.55801499437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815486.5276679636,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1815403.5573122553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1462427.0817610468,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1462356.4465408805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1468222.2547468508,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1468193.196202532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1454198.4968750477,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1454129.8437500016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 825442.7848214618,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 825414.8214285717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1406461.1869300397,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1406412.7659574435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37675.128342001415,
            "unit": "ns/iter",
            "extra": "iterations: 21918\ncpu: 37673.993977552745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171467.15881883234,
            "unit": "ns/iter",
            "extra": "iterations: 5012\ncpu: 171460.7940941737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138060.63219685288,
            "unit": "ns/iter",
            "extra": "iterations: 6218\ncpu: 138052.6696687036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136959.7915335396,
            "unit": "ns/iter",
            "extra": "iterations: 6260\ncpu: 136956.677316294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133419.1757575747,
            "unit": "ns/iter",
            "extra": "iterations: 6435\ncpu: 133413.1002331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318405.931275256,
            "unit": "ns/iter",
            "extra": "iterations: 2721\ncpu: 318398.56670341827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1872604.8651912343,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872490.744466803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1485697.974440866,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1485655.4313098968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1491808.990306915,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1491732.4717285966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1479686.2060702965,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1479673.1629392996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 854765.0092336477,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 854734.9030470948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1435251.4806800857,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1435208.964451312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5229833.79999971,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5229612.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3107142.265780741,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3107044.518272444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27526.919876215678,
            "unit": "ns/iter",
            "extra": "iterations: 29729\ncpu: 27524.888156345507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 131007.2964947139,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 131003.97979488736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102036.47560104501,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 102031.706736491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103321.63450856782,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 103318.95677372653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100241.40850212133,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 100235.79839849332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263211.9654440742,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 263200.75780539674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1813226.4296875088,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1813168.9453124988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1445833.0665633925,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1445789.3188854444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1462561.0142180028,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1462487.5197472316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1444183.099378913,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1444133.3850931674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 815559.5892079921,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 815507.9199303758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1401100.565610869,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1401068.929110107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3008.6975079304766,
            "unit": "ns/iter",
            "extra": "iterations: 232016\ncpu: 3008.5054479001524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19228.55135417049,
            "unit": "ns/iter",
            "extra": "iterations: 36443\ncpu: 19228.109650687376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15611.476711228883,
            "unit": "ns/iter",
            "extra": "iterations: 44807\ncpu: 15611.01167228326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14854.4377838133,
            "unit": "ns/iter",
            "extra": "iterations: 47126\ncpu: 14854.023256800916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11455.756085135126,
            "unit": "ns/iter",
            "extra": "iterations: 60845\ncpu: 11455.263374147422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 96083.04765862976,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 96080.49321141673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118170.5994591793,
            "unit": "ns/iter",
            "extra": "iterations: 5917\ncpu: 118167.60182524913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30505.73996251058,
            "unit": "ns/iter",
            "extra": "iterations: 22939\ncpu: 30504.363747329917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30427.278862460244,
            "unit": "ns/iter",
            "extra": "iterations: 22997\ncpu: 30426.433882680496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30650.33873581835,
            "unit": "ns/iter",
            "extra": "iterations: 22829\ncpu: 30648.942135003672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62825.68464767669,
            "unit": "ns/iter",
            "extra": "iterations: 11197\ncpu: 62823.98856836678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56955.63696396725,
            "unit": "ns/iter",
            "extra": "iterations: 12266\ncpu: 56954.09261372904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22185.022030072705,
            "unit": "ns/iter",
            "extra": "iterations: 31457\ncpu: 22184.83962234156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111410.48568701826,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 111404.78689567499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90576.2716800405,
            "unit": "ns/iter",
            "extra": "iterations: 7726\ncpu: 90573.85451721464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90501.79447456596,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 90499.5481538856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89776.71558691931,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 89774.38101347031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157966.25078864186,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 157963.29427670068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 533510.4119878461,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 533475.1138088017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 442396.67087009875,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 442392.875157623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 445908.15418781416,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 445895.81218273804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 443314.1069620134,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443302.658227849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 284126.11264180864,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 284112.3176661271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 432243.2129112147,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 432231.65735568217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22669.0923012175,
            "unit": "ns/iter",
            "extra": "iterations: 30888\ncpu: 22668.528231028344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111738.00607805503,
            "unit": "ns/iter",
            "extra": "iterations: 6252\ncpu: 111734.74088291892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91642.21257052476,
            "unit": "ns/iter",
            "extra": "iterations: 7621\ncpu: 91637.63285658072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91952.80036774657,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 91949.63225636915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91655.68399114607,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 91650.6578090397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155550.63052654595,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155544.32348366888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 529273.9812029896,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 529259.2481202952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 438583.0654912091,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 438560.4534005015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 438987.6303258176,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 438972.8696741826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 437745.3268750031,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 437733.31250000605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 281943.63247172406,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 281932.390953154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430639.1352686701,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 430630.8832612688 ns\nthreads: 1"
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
        "date": 1702418344403,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7601.842708901955,
            "unit": "ns/iter",
            "extra": "iterations: 91550\ncpu: 7601.198252321136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56242.68650000204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56243.09999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103392.80344039116,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 103388.64429207264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152539.62244363473,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 152531.637825555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197442.14438624348,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 197423.5026189934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243947.19949210648,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 243930.2200902934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289511.9782826564,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 289505.6465085199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 337650.2291828787,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 337642.52918287955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 384820.31685790577,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 384804.3689320387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6441.272608427061,
            "unit": "ns/iter",
            "extra": "iterations: 108621\ncpu: 6440.94972427062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5386.6454607079495,
            "unit": "ns/iter",
            "extra": "iterations: 129822\ncpu: 5386.546194019506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5371.234089285848,
            "unit": "ns/iter",
            "extra": "iterations: 130211\ncpu: 5371.083088218354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5364.686678771784,
            "unit": "ns/iter",
            "extra": "iterations: 130521\ncpu: 5364.3973000513315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8815.061402091103,
            "unit": "ns/iter",
            "extra": "iterations: 80437\ncpu: 8814.70343249997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29868.0355940864,
            "unit": "ns/iter",
            "extra": "iterations: 27336\ncpu: 29866.465466783746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143852.0899274481,
            "unit": "ns/iter",
            "extra": "iterations: 5927\ncpu: 143845.4530116417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110351.08370101429,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 110346.93745133681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109964.95337454932,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 109961.47604327643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106929.0605945506,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 106924.60468058183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 327610.3732244144,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 327606.0014204551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1795865.9708171673,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1795856.031128403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1429245.811145453,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1429248.1424148583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1438562.7978394192,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1438516.049382714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1432625.7057010538,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1432628.0431432964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 802512.6354166782,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 802509.4618055543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1384363.4249248772,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1384345.7957957992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36771.95270966832,
            "unit": "ns/iter",
            "extra": "iterations: 22309\ncpu: 36771.675108700554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171418.28296266153,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 171418.4670373314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133833.51416121545,
            "unit": "ns/iter",
            "extra": "iterations: 6426\ncpu: 133832.77310924357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133948.87680250104,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 133948.91849529778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133291.72605514637,
            "unit": "ns/iter",
            "extra": "iterations: 6421\ncpu: 133289.6745055287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 310412.34953200974,
            "unit": "ns/iter",
            "extra": "iterations: 2778\ncpu: 310414.72282217414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1843449.855731312,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1843442.0948616595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1466907.9576138281,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1466883.2025117637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1495056.1987178572,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1495029.80769231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1472842.4240505733,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1472844.4620253243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 836065.854054067,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 836067.2072072041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1427484.835384733,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1427474.6153846143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5104736.929999945,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104703.000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3043697.7119741724,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3043723.948220056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27573.12205812659,
            "unit": "ns/iter",
            "extra": "iterations: 29658\ncpu: 27573.379863780563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132449.9825751728,
            "unit": "ns/iter",
            "extra": "iterations: 6485\ncpu: 132449.14417887494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103822.61729442034,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 103821.61802107342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103975.72486067194,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 103976.54470559672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99211.8398837224,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 99211.8139534881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 262317.46557968657,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 262317.8140096606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1805727.019455209,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1805645.1361867664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1432561.9830768888,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1432559.2307692256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1453214.8024884227,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1453228.7713841416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1437256.164869116,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1437199.5377503794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 795256.8960818184,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 795255.1107325401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1385745.5934230504,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1385650.5231689117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2973.5246012573607,
            "unit": "ns/iter",
            "extra": "iterations: 233484\ncpu: 2973.3026674204625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19312.5623470558,
            "unit": "ns/iter",
            "extra": "iterations: 36369\ncpu: 19311.336577854778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14930.380031514216,
            "unit": "ns/iter",
            "extra": "iterations: 48867\ncpu: 14929.83608570211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14291.292543295389,
            "unit": "ns/iter",
            "extra": "iterations: 48909\ncpu: 14291.449426485875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10789.937758506201,
            "unit": "ns/iter",
            "extra": "iterations: 65037\ncpu: 10788.941679351765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 94636.67616475945,
            "unit": "ns/iter",
            "extra": "iterations: 7405\ncpu: 94630.91154625213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118938.40044209882,
            "unit": "ns/iter",
            "extra": "iterations: 5881\ncpu: 118927.20625743984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30376.811250378596,
            "unit": "ns/iter",
            "extra": "iterations: 23057\ncpu: 30374.58038773493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30485.548988704068,
            "unit": "ns/iter",
            "extra": "iterations: 22842\ncpu: 30483.06628141161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30552.022564593535,
            "unit": "ns/iter",
            "extra": "iterations: 22912\ncpu: 30549.794867318597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61924.0567206403,
            "unit": "ns/iter",
            "extra": "iterations: 11301\ncpu: 61916.18440845964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57009.879449380795,
            "unit": "ns/iter",
            "extra": "iterations: 12277\ncpu: 57008.17789362193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22438.54784696733,
            "unit": "ns/iter",
            "extra": "iterations: 31235\ncpu: 22438.78981911328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113858.24881786677,
            "unit": "ns/iter",
            "extra": "iterations: 6133\ncpu: 113855.53562693507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90953.59381495515,
            "unit": "ns/iter",
            "extra": "iterations: 7696\ncpu: 90954.4568607083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91010.15312742833,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 91006.25486633879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90852.30484478346,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 90849.3051045589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159278.70125141638,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 159277.92946529982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 540552.554531438,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 540548.4639016867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 439689.91342534707,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 439682.6850690145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 449038.1293213442,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 449042.76568502304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441317.5375394424,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 441310.22082018363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283712.9352869243,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 283716.15791615617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 437793.25637834216,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 437775.7934038631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22596.717885027283,
            "unit": "ns/iter",
            "extra": "iterations: 30998\ncpu: 22596.977224337457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113905.64249715269,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 113904.61713542411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91877.69514919296,
            "unit": "ns/iter",
            "extra": "iterations: 7607\ncpu: 91878.66438806344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91846.13324555343,
            "unit": "ns/iter",
            "extra": "iterations: 7595\ncpu: 91844.59512837384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91470.83923206931,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 91469.191589396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155799.21384067085,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 155800.44503782727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 530581.6814024441,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 530572.4847560945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 439574.88617885014,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 439578.8617886175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 441080.24098673346,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 441064.4528779274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441449.30933003715,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 441445.084533499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 281385.06884057797,
            "unit": "ns/iter",
            "extra": "iterations: 2484\ncpu: 281388.2850241572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430866.5631546413,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 430850.15403573395 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420963133,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7803.6465346535515,
            "unit": "ns/iter",
            "extra": "iterations: 89890\ncpu: 7803.317387918567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57985.14469999532,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57982.35 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107141.43223717454,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 107134.7035376183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156103.4505871799,
            "unit": "ns/iter",
            "extra": "iterations: 5535\ncpu: 156100.65040650405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 204975.69259871493,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 204967.69921967378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 254002.48786193956,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 253988.4176659843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 303588.50192374334,
            "unit": "ns/iter",
            "extra": "iterations: 2859\ncpu: 303567.26128016785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 352040.40589661506,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 352023.9095315025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 401354.9406623679,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 401320.5611775528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6445.885803148927,
            "unit": "ns/iter",
            "extra": "iterations: 108996\ncpu: 6445.759477412018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5363.378486822813,
            "unit": "ns/iter",
            "extra": "iterations: 129846\ncpu: 5362.738166751389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5480.194883394174,
            "unit": "ns/iter",
            "extra": "iterations: 128210\ncpu: 5479.8892442087235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5436.920652605973,
            "unit": "ns/iter",
            "extra": "iterations: 128347\ncpu: 5436.4597536366155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8849.331538636025,
            "unit": "ns/iter",
            "extra": "iterations: 79122\ncpu: 8848.565506433104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30994.787550231747,
            "unit": "ns/iter",
            "extra": "iterations: 26378\ncpu: 30992.201834862408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145976.03034952647,
            "unit": "ns/iter",
            "extra": "iterations: 5865\ncpu: 145964.8934356352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115678.57418478688,
            "unit": "ns/iter",
            "extra": "iterations: 7360\ncpu: 115671.86141304334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115901.48176374531,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 115891.49428415894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116018.98683496582,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 116013.47719869729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 330840.4152633452,
            "unit": "ns/iter",
            "extra": "iterations: 2791\ncpu: 330807.88247939723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1834998.452381,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1834834.325396827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1468007.6545166862,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1467883.8351822535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1484151.9695512517,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1483973.2371794884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1461783.1534810266,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1461678.006329113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 806950.1185702132,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 806885.4402789886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1423438.1228878647,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1423311.6743471576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38155.25861989264,
            "unit": "ns/iter",
            "extra": "iterations: 21607\ncpu: 38151.455546813515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178928.80623562072,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 178916.69805398636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 140018.38621586966,
            "unit": "ns/iter",
            "extra": "iterations: 6152\ncpu: 140004.4375812744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138465.73721798934,
            "unit": "ns/iter",
            "extra": "iterations: 6161\ncpu: 138453.80620029225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137478.83795103003,
            "unit": "ns/iter",
            "extra": "iterations: 6208\ncpu: 137462.25837628884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 317438.45624313067,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 317420.2123764186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1886443.7874494642,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1886214.5748987915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1671329.089887649,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1671135.3130016106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1509519.377633739,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1509397.5688816882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1501022.8325281793,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1500936.7149758418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 842921.3497267942,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 842861.3843351556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1448591.4672897214,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1448458.7227414304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5198709.050000047,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5198609.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3001331.3697749316,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3001090.9967845664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29132.00414923001,
            "unit": "ns/iter",
            "extra": "iterations: 28198\ncpu: 29130.714944322157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137082.2973490855,
            "unit": "ns/iter",
            "extra": "iterations: 6262\ncpu: 137074.9600766531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108577.9603143889,
            "unit": "ns/iter",
            "extra": "iterations: 7761\ncpu: 108569.24365416859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109407.52675371664,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 109401.97132616484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106873.70156347811,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 106867.74233896208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 269207.36614907463,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 269184.47204968927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1840660.4781745723,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1840526.190476193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1464398.5219436574,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1464274.2946708475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1467668.3492062977,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1467575.873015873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1462430.4726134732,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1462255.3990610284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 795518.3526405756,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 795470.4429301537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1417138.2765958058,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1417051.5197568377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3060.985627437791,
            "unit": "ns/iter",
            "extra": "iterations: 229465\ncpu: 3060.8188612642357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19804.61643951611,
            "unit": "ns/iter",
            "extra": "iterations: 35439\ncpu: 19802.39566579175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15254.557476155765,
            "unit": "ns/iter",
            "extra": "iterations: 45819\ncpu: 15253.669874942749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15711.329032838115,
            "unit": "ns/iter",
            "extra": "iterations: 44491\ncpu: 15710.24476860494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11564.00084291988,
            "unit": "ns/iter",
            "extra": "iterations: 60504\ncpu: 11563.48010048923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95005.02607986866,
            "unit": "ns/iter",
            "extra": "iterations: 7362\ncpu: 94999.32083672908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125814.3379646339,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 125805.43125225531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30621.12775176226,
            "unit": "ns/iter",
            "extra": "iterations: 22849\ncpu: 30619.576349074494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30755.34656293984,
            "unit": "ns/iter",
            "extra": "iterations: 22752\ncpu: 30753.82823488022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30608.58203603453,
            "unit": "ns/iter",
            "extra": "iterations: 22868\ncpu: 30607.210949798908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62113.84309549404,
            "unit": "ns/iter",
            "extra": "iterations: 11268\ncpu: 62109.13205537783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57308.480715347294,
            "unit": "ns/iter",
            "extra": "iterations: 12134\ncpu: 57304.812922366684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22260.262691123167,
            "unit": "ns/iter",
            "extra": "iterations: 31459\ncpu: 22259.3470866842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113787.68274070082,
            "unit": "ns/iter",
            "extra": "iterations: 6159\ncpu: 113781.18201006592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92365.06102232165,
            "unit": "ns/iter",
            "extra": "iterations: 7571\ncpu: 92361.78840311772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92737.29169426362,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 92730.46761160427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91590.2477412659,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 91587.03679455297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 158978.54955772488,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 158969.5622590146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 544985.4471228607,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 544962.9082426117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 446590.15813062864,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 446562.22791292483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 451695.18427834223,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 451664.626288655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 444871.11558108835,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 444847.89272031025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282344.49778136256,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 282318.9592577694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 439917.09005035803,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 439896.6624685064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22569.084460658778,
            "unit": "ns/iter",
            "extra": "iterations: 30973\ncpu: 22568.391825138366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113919.73703040968,
            "unit": "ns/iter",
            "extra": "iterations: 6149\ncpu: 113910.89608066344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93126.65956313262,
            "unit": "ns/iter",
            "extra": "iterations: 7508\ncpu: 93121.44379328712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93588.46624866473,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 93579.76254002085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92346.32613304908,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 92341.13437582793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156005.11460422658,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 155997.59197324328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 536025.2857143015,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 536002.9953917048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 443144.50031743763,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 443128.63492063485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 448183.725703312,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 448155.49872122577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441129.0989911912,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441107.3139974792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280447.56833668123,
            "unit": "ns/iter",
            "extra": "iterations: 2495\ncpu: 280427.09418837796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 435523.25360050146,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 435496.49342517427 ns\nthreads: 1"
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
        "date": 1702421915634,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7704.651505981051,
            "unit": "ns/iter",
            "extra": "iterations: 90871\ncpu: 7704.329213940641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55262.48659999738,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55258.570000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101828.0515793216,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 101826.85437122916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147514.717909164,
            "unit": "ns/iter",
            "extra": "iterations: 5835\ncpu: 147508.1748071979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193845.1014751852,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 193845.2615109522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240443.51467331362,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 240430.1218161682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286208.86188752437,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 286197.3364024994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 331663.7283479596,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 331651.65967188077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377469.76353399205,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 377462.97098310996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6641.483626759246,
            "unit": "ns/iter",
            "extra": "iterations: 107523\ncpu: 6641.1707262632235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5422.888909521473,
            "unit": "ns/iter",
            "extra": "iterations: 129246\ncpu: 5422.651377992354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5348.688050276335,
            "unit": "ns/iter",
            "extra": "iterations: 130957\ncpu: 5348.378475377415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5357.399293908709,
            "unit": "ns/iter",
            "extra": "iterations: 130578\ncpu: 5357.164300264977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8774.777581542217,
            "unit": "ns/iter",
            "extra": "iterations: 79836\ncpu: 8774.336139085122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29642.616598351644,
            "unit": "ns/iter",
            "extra": "iterations: 27569\ncpu: 29641.572055569675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141231.76361243636,
            "unit": "ns/iter",
            "extra": "iterations: 6079\ncpu: 141227.14262214178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110611.70228712112,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 110608.08890037486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111160.19322166243,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 111158.13530710306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108227.51592437444,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 108224.38776804948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 327428.21035828086,
            "unit": "ns/iter",
            "extra": "iterations: 2819\ncpu: 327421.21319616865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1777144.3249516145,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1777056.4796905222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1435458.7577639255,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1435411.1801242256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1448985.7916018667,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1448894.5567651622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1417338.5503048433,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1417254.1158536565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 769136.8193979921,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 769109.3645484946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1376282.2340740294,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376260.7407407442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36612.45141745073,
            "unit": "ns/iter",
            "extra": "iterations: 22611\ncpu: 36612.025120516475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169118.11169899942,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 169113.77621007257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134486.33629838063,
            "unit": "ns/iter",
            "extra": "iterations: 6408\ncpu: 134485.65855181045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133447.82700356675,
            "unit": "ns/iter",
            "extra": "iterations: 6451\ncpu: 133445.2953030539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131932.15178571525,
            "unit": "ns/iter",
            "extra": "iterations: 6496\ncpu: 131932.34298029594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 310633.7946428539,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 310624.2857142862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1829734.3359374718,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1829699.609374992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1456801.5031348183,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1456738.5579937287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1467357.925750421,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1467324.1706161138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1440087.460000016,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1440030.1538461563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 806482.4612706829,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 806464.7519582254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1407168.6399395168,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1407120.4236005973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6645421.835714111,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6643058.571428589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3022692.524271805,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3022550.4854368744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27624.371134019908,
            "unit": "ns/iter",
            "extra": "iterations: 29682\ncpu: 27623.46203086041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130441.15694317633,
            "unit": "ns/iter",
            "extra": "iterations: 6582\ncpu: 130436.31115162588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103967.56566513276,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 103964.06590743878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104103.02225986027,
            "unit": "ns/iter",
            "extra": "iterations: 8266\ncpu: 104099.56448100643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100511.65015843263,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 100509.00129092853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 264004.98516500485,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 263996.8513472595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1782339.1436781674,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1782274.3295019155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1412528.398176312,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1412491.6413373887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1432546.6759259526,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1432504.9382716103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1402677.849849848,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1402625.075075081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 759909.3260162727,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 759877.642276422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1366231.4787077585,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1366191.7767988287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3011.3872997808767,
            "unit": "ns/iter",
            "extra": "iterations: 231996\ncpu: 3011.369161537267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19056.289093836866,
            "unit": "ns/iter",
            "extra": "iterations: 36649\ncpu: 19056.348058610154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14931.174307617006,
            "unit": "ns/iter",
            "extra": "iterations: 46831\ncpu: 14930.443509641074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15497.547469309155,
            "unit": "ns/iter",
            "extra": "iterations: 46430\ncpu: 15496.973939263376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11356.7905087713,
            "unit": "ns/iter",
            "extra": "iterations: 61678\ncpu: 11356.36693796813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95673.48545830366,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 95668.84906960701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121975.22862129836,
            "unit": "ns/iter",
            "extra": "iterations: 5730\ncpu: 121969.38917975558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30255.108254105657,
            "unit": "ns/iter",
            "extra": "iterations: 23140\ncpu: 30253.794295592088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30026.28623530272,
            "unit": "ns/iter",
            "extra": "iterations: 23306\ncpu: 30024.890586115118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29908.90263214278,
            "unit": "ns/iter",
            "extra": "iterations: 23365\ncpu: 29907.562593622843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60113.20222203105,
            "unit": "ns/iter",
            "extra": "iterations: 11611\ncpu: 60113.23744724867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56195.223092914835,
            "unit": "ns/iter",
            "extra": "iterations: 12506\ncpu: 56192.779465856474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21911.303693783906,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21910.517628005375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108917.9967315155,
            "unit": "ns/iter",
            "extra": "iterations: 6425\ncpu: 108914.00778210034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87639.37507850771,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 87636.05074739292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88945.7621223679,
            "unit": "ns/iter",
            "extra": "iterations: 7878\ncpu: 88941.49530337611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88249.00025166494,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 88249.17578960715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156920.05064993852,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 156920.17032720565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 521855.2896706656,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 521835.7784431151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 449980.43784788944,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 449959.6165738987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436785.3092848307,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 436776.6624843198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 430377.31381010666,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 430360.2342786724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 274170.7001949359,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 274157.42690058495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424480.2908101698,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 424458.948004834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22471.708976044923,
            "unit": "ns/iter",
            "extra": "iterations: 31183\ncpu: 22470.644261296246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110204.73039370628,
            "unit": "ns/iter",
            "extra": "iterations: 6350\ncpu: 110200.4251968499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89456.73205374596,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 89455.96928982685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89793.9323627957,
            "unit": "ns/iter",
            "extra": "iterations: 7762\ncpu: 89790.19582581773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89264.59232827678,
            "unit": "ns/iter",
            "extra": "iterations: 7847\ncpu: 89260.43073786162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154993.3505747026,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 154987.5331564989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 526243.0412913077,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526214.0390390377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426665.43936621887,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 426640.70688604284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 428796.67178859137,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 428775.7836508874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 428275.9268292233,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 428260.6097560937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271041.7022841869,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 271024.5838172676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 420460.7862318964,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 420460.92995169363 ns\nthreads: 1"
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
        "date": 1702476630456,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7731.152696764232,
            "unit": "ns/iter",
            "extra": "iterations: 90349\ncpu: 7730.62236438699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56039.069799999204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56037.41999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102379.8586762039,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 102379.28443649375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149448.86788233987,
            "unit": "ns/iter",
            "extra": "iterations: 5813\ncpu: 149439.48047479783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197737.91258821602,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 197736.4898702481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 245342.26550659625,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 245317.56946393478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 291671.66197182843,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 291658.8531187124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 337907.7551496409,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 337891.9160513019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 384881.23654015735,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 384858.2082965582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6441.393111756331,
            "unit": "ns/iter",
            "extra": "iterations: 111233\ncpu: 6441.119991369473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5361.302748498744,
            "unit": "ns/iter",
            "extra": "iterations: 130544\ncpu: 5361.103535972545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5282.765488194342,
            "unit": "ns/iter",
            "extra": "iterations: 135571\ncpu: 5282.72491904611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5322.867934807778,
            "unit": "ns/iter",
            "extra": "iterations: 130322\ncpu: 5322.783566857472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8840.778578187415,
            "unit": "ns/iter",
            "extra": "iterations: 79265\ncpu: 8840.576547025788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29242.527751043446,
            "unit": "ns/iter",
            "extra": "iterations: 28053\ncpu: 29241.988379139457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144723.26070038756,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 144722.55117577413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111297.62400313867,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 111295.1889135834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112024.08363778118,
            "unit": "ns/iter",
            "extra": "iterations: 7664\ncpu: 112022.69050104367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106681.87357043716,
            "unit": "ns/iter",
            "extra": "iterations: 7957\ncpu: 106677.32813874567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 329839.7571530839,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 329824.2846924176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1810680.7792969136,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1810636.1328125014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1438714.6842105037,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1438632.5077399358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1459437.4687500356,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1459400.7812500033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1448838.4218750205,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1448765.3125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 790239.2572649423,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 790218.0341880334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1401720.8401206492,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1401643.1372548994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37195.305980590565,
            "unit": "ns/iter",
            "extra": "iterations: 22155\ncpu: 37194.073572557085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175797.7804679622,
            "unit": "ns/iter",
            "extra": "iterations: 4915\ncpu: 175791.4140386571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136038.3659850986,
            "unit": "ns/iter",
            "extra": "iterations: 6309\ncpu: 136033.95149786057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135401.54359866816,
            "unit": "ns/iter",
            "extra": "iterations: 6319\ncpu: 135396.9298939709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132066.2812837486,
            "unit": "ns/iter",
            "extra": "iterations: 6481\ncpu: 132064.5116494367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 317268.1711054322,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 317257.82561109046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1863782.4209486276,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1863691.304347825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1467913.950949417,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1467871.6772151992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1476503.6269840682,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1476433.8095238104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1480032.5039872536,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1479988.3572567762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 824392.9137778044,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 824339.8222222204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1433559.4283489531,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1431912.4610592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5101460.619999898,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5101325.000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3101043.8675497836,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3100980.463576157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27569.902715466145,
            "unit": "ns/iter",
            "extra": "iterations: 29645\ncpu: 27569.52268510709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134653.42604476825,
            "unit": "ns/iter",
            "extra": "iterations: 6389\ncpu: 134650.46173110075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103439.69585698849,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 103438.25341224788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103527.13402548622,
            "unit": "ns/iter",
            "extra": "iterations: 8476\ncpu: 103524.70504955186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99252.79171570216,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 99252.21228524431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 266956.9541397406,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 266952.5084641433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1813833.9211538744,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1813791.9230769128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1426950.623277219,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1426911.3323124058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1452001.1121495573,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451916.0436137102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1443377.2620154636,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1443333.0232558148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 780946.9949706463,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 780918.2732606862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1395003.9551569738,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1394953.5127055224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3036.5058153945592,
            "unit": "ns/iter",
            "extra": "iterations: 229993\ncpu: 3036.3141486914956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19001.79045490435,
            "unit": "ns/iter",
            "extra": "iterations: 36689\ncpu: 19001.251056174788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15497.910527483447,
            "unit": "ns/iter",
            "extra": "iterations: 45120\ncpu: 15497.007978723526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14891.530287878302,
            "unit": "ns/iter",
            "extra": "iterations: 46999\ncpu: 14890.865763101378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11461.329985489567,
            "unit": "ns/iter",
            "extra": "iterations: 61333\ncpu: 11461.197071723276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97391.87095411574,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 97387.67238953053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122112.63706294002,
            "unit": "ns/iter",
            "extra": "iterations: 5720\ncpu: 122108.84615384601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29911.285260128025,
            "unit": "ns/iter",
            "extra": "iterations: 23277\ncpu: 29909.649009752116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30042.59065210781,
            "unit": "ns/iter",
            "extra": "iterations: 23171\ncpu: 30042.15182771574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30294.62399342,
            "unit": "ns/iter",
            "extra": "iterations: 23098\ncpu: 30293.306779807575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60650.42820024167,
            "unit": "ns/iter",
            "extra": "iterations: 11546\ncpu: 60648.17252728179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56242.21760824134,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 56239.80363753402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22563.676241386474,
            "unit": "ns/iter",
            "extra": "iterations: 31054\ncpu: 22562.661814902927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112783.2073584009,
            "unit": "ns/iter",
            "extra": "iterations: 6197\ncpu: 112780.65192835135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90224.01283048316,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 90219.11612234288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89953.91369509298,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 89952.5710594313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89897.20302487042,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 89891.84824404001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157363.63313875473,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 157358.17242927974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 540781.0146491639,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 540767.5404780243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 438977.3261693911,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 438966.43489253696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 437204.08904108364,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 437200.12453299947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 436879.06963614514,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 436875.21957340115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 280927.6614394743,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 280923.2006433453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 432791.25633106893,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 432784.9907350215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22849.311192589474,
            "unit": "ns/iter",
            "extra": "iterations: 30547\ncpu: 22849.114479326905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113039.15793701922,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 113038.04627249473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91314.50633738558,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 91306.89925519333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91198.22672751141,
            "unit": "ns/iter",
            "extra": "iterations: 7670\ncpu: 91194.09387222867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90358.8586732064,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 90356.05317501367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155827.12825651394,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 155819.59474504582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 528280.7020470086,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 528272.7065959104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 435208.9023168386,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 435190.16906700016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 435447.5139319181,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 435438.2662538756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433680.3836126675,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 433661.70080695907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 273687.9396551697,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 273681.5438871473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 425601.40133983805,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 425587.3934226538 ns\nthreads: 1"
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
        "date": 1702479536519,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7725.32527137865,
            "unit": "ns/iter",
            "extra": "iterations: 91293\ncpu: 7724.892379481451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55770.996799998335,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55769.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102444.86346291334,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 102440.11447650843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148444.43962848018,
            "unit": "ns/iter",
            "extra": "iterations: 5814\ncpu: 148437.63329893356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194825.9190465489,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 194814.54913424782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242181.41990495657,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 242165.11042773267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 288511.77209303295,
            "unit": "ns/iter",
            "extra": "iterations: 3010\ncpu: 288497.8737541531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334631.18567028205,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 334619.64560862863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380306.81356673,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 380287.7899343544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6423.112274899306,
            "unit": "ns/iter",
            "extra": "iterations: 108840\ncpu: 6422.907019478135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5300.729236829396,
            "unit": "ns/iter",
            "extra": "iterations: 133024\ncpu: 5300.39466562424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5280.250667112757,
            "unit": "ns/iter",
            "extra": "iterations: 131537\ncpu: 5279.920478648594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5250.15674481086,
            "unit": "ns/iter",
            "extra": "iterations: 131679\ncpu: 5237.157025797577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8855.264370429084,
            "unit": "ns/iter",
            "extra": "iterations: 79173\ncpu: 8854.891187652369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30765.689441227398,
            "unit": "ns/iter",
            "extra": "iterations: 26594\ncpu: 30764.161088967478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143896.07657354794,
            "unit": "ns/iter",
            "extra": "iterations: 5942\ncpu: 143885.81285762356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109828.22692109196,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 109825.90252707587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110490.34158351576,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 110484.98121031495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106393.64531834985,
            "unit": "ns/iter",
            "extra": "iterations: 8010\ncpu: 106390.72409488143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 331558.6411637849,
            "unit": "ns/iter",
            "extra": "iterations: 2784\ncpu: 331540.0862068959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1803123.0565301366,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1803019.493177391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1436387.918083415,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1436308.6553323034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1449779.2877138231,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1449693.7791601878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1419526.595712123,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1419449.4640122545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 795654.3140638527,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 795611.3028472837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1379637.2203897848,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1379598.9505247413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37669.231453601446,
            "unit": "ns/iter",
            "extra": "iterations: 21918\ncpu: 37668.74258600232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172410.74285143102,
            "unit": "ns/iter",
            "extra": "iterations: 5001\ncpu: 172407.3585282941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135510.27631995326,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 135503.2405943726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134171.22485114055,
            "unit": "ns/iter",
            "extra": "iterations: 6382\ncpu: 134166.23315575064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131207.0163959506,
            "unit": "ns/iter",
            "extra": "iterations: 6526\ncpu: 131201.19521912342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 327665.17095309944,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 327646.6338880486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1848184.172619058,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1848068.849206348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1475784.7452531648,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1475694.7784810062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1474240.834130832,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1474160.7655502432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1452184.5758998229,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1452112.3630672905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 828532.4138543751,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 828472.5577264646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1418241.8519083976,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1418160.7633587795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5068524.729999808,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5068128.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3015245.7419356164,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3015077.741935491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28622.17402300352,
            "unit": "ns/iter",
            "extra": "iterations: 28864\ncpu: 28620.658952328296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 131832.98456552424,
            "unit": "ns/iter",
            "extra": "iterations: 6479\ncpu: 131828.64639604837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102389.50956333455,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 102384.14531456777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103166.1739235289,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 103161.6692799421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100045.41781783625,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 100038.43362210236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 274320.17410573177,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 274305.2548274773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1811091.3597679401,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1810968.6653771673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1422844.0338983412,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1422775.8089368227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1455201.1934477359,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1455123.7129485176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1420314.7293577695,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1420249.8470947982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 782213.8571428531,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 782170.5882352925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1370904.272459453,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1370861.8556700998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2980.877442454683,
            "unit": "ns/iter",
            "extra": "iterations: 235163\ncpu: 2980.7890697090916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18968.00879192392,
            "unit": "ns/iter",
            "extra": "iterations: 36852\ncpu: 18967.15239335716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15588.575026139617,
            "unit": "ns/iter",
            "extra": "iterations: 44951\ncpu: 15588.095926675634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14343.595078985374,
            "unit": "ns/iter",
            "extra": "iterations: 48933\ncpu: 14342.950565058274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11424.140926011098,
            "unit": "ns/iter",
            "extra": "iterations: 61252\ncpu: 11423.395154443882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97792.22863935214,
            "unit": "ns/iter",
            "extra": "iterations: 7151\ncpu: 97785.89008530245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124746.58162719833,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 124738.84635926622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30617.256803389533,
            "unit": "ns/iter",
            "extra": "iterations: 22893\ncpu: 30614.20084742056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30423.403245455735,
            "unit": "ns/iter",
            "extra": "iterations: 22986\ncpu: 30421.80457669886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30562.370370370205,
            "unit": "ns/iter",
            "extra": "iterations: 22950\ncpu: 30560.013071895268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61290.616842843345,
            "unit": "ns/iter",
            "extra": "iterations: 11447\ncpu: 61289.14999563197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56579.56617527838,
            "unit": "ns/iter",
            "extra": "iterations: 12346\ncpu: 56577.96047302787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22432.44711045728,
            "unit": "ns/iter",
            "extra": "iterations: 31216\ncpu: 22430.888006150828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110046.56113743983,
            "unit": "ns/iter",
            "extra": "iterations: 6330\ncpu: 110039.47867298704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89643.84258311884,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 89636.63682864433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90804.82156761432,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 90798.63742538154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89204.78682466307,
            "unit": "ns/iter",
            "extra": "iterations: 7848\ncpu: 89200.77726809365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155687.10444444555,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 155684.88888888826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 535895.839572196,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 535856.684491983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 439226.39127687126,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 439219.9115044275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 445958.70379746694,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 445939.24050632725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 437835.4556249775,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 437559.5625000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277839.3681908676,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 277815.9045725641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 431229.60604191397,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 431201.1097410652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22656.730785411466,
            "unit": "ns/iter",
            "extra": "iterations: 30901\ncpu: 22654.778162519095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111211.38251192623,
            "unit": "ns/iter",
            "extra": "iterations: 6290\ncpu: 111202.8616852148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90299.49845281382,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90295.80969572056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90878.43559079542,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 90877.16105550482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89933.41959928388,
            "unit": "ns/iter",
            "extra": "iterations: 7786\ncpu: 89928.43565373661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154283.04049294934,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 154271.08274647873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 532782.8304182182,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532755.5133079774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434190.2099688546,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 434173.457943921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 436738.2137499831,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 436734.12500000454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 432395.54842689756,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 432388.2171499064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276707.8390804683,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 276698.45422116615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 427254.51374468615,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427238.91264508385 ns\nthreads: 1"
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
        "date": 1702488559737,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7609.167130404588,
            "unit": "ns/iter",
            "extra": "iterations: 92006\ncpu: 7609.253744321024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55885.676300005114,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55883.73999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102983.82176674639,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 102980.75032961764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149785.9385174974,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 149785.85036369937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196563.33166742252,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 196563.06224443438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242724.7834733988,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 242718.15126050427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 291542.8754197512,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 291537.23975822673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 337278.4750096815,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 337279.2328554826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 383518.50485867594,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 383515.68021201406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6414.358006555538,
            "unit": "ns/iter",
            "extra": "iterations: 108917\ncpu: 6414.355885674422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5345.294056198269,
            "unit": "ns/iter",
            "extra": "iterations: 132104\ncpu: 5345.165172894084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5661.897594815955,
            "unit": "ns/iter",
            "extra": "iterations: 131175\ncpu: 5661.882218410513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5314.3797499963675,
            "unit": "ns/iter",
            "extra": "iterations: 132158\ncpu: 5314.219343513065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8754.514406017413,
            "unit": "ns/iter",
            "extra": "iterations: 80036\ncpu: 8754.619171372882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29238.572714182686,
            "unit": "ns/iter",
            "extra": "iterations: 27780\ncpu: 29238.286537077092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145272.00443307517,
            "unit": "ns/iter",
            "extra": "iterations: 5865\ncpu: 145271.8670076728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113684.80698014893,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 113686.01305448258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114002.08976757167,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 114003.23270104191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110829.42930019725,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 110829.49640287734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 329574.02541160845,
            "unit": "ns/iter",
            "extra": "iterations: 2794\ncpu: 329568.8618468141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1790391.1119691934,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1790374.1312741316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1420310.8363914667,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1420312.8440366972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1431961.8505392445,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1431943.1432973787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1407525.5857359963,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1407511.6843702563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 781375.9687500112,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 781371.030405404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1369608.7248520353,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1369603.6982248472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37101.72418459784,
            "unit": "ns/iter",
            "extra": "iterations: 22167\ncpu: 37100.40149772178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175172.6508550488,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 175172.1091205211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138524.2904162718,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 138523.10422717038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136665.60241922678,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 136666.9425433708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138283.9677571489,
            "unit": "ns/iter",
            "extra": "iterations: 6358\ncpu: 138279.66341616883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 313664.0293265652,
            "unit": "ns/iter",
            "extra": "iterations: 2762\ncpu: 313666.9804489504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1840388.6528599279,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1840343.9842209066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1451035.4147104663,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1451038.3411580604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1456351.4519684,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1456305.1968503902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1451918.6181532275,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1451918.779342727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 814228.2999999719,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 814221.6666666631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1410436.0674846696,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1410416.7177914078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5024556.070000017,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5024380.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3065085.361841936,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3065001.973684224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27645.22315441883,
            "unit": "ns/iter",
            "extra": "iterations: 29679\ncpu: 27645.01499376653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134679.9851446578,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 134681.42298670812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105687.05478776139,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 105681.5153010866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107002.40394210718,
            "unit": "ns/iter",
            "extra": "iterations: 8016\ncpu: 107001.8338323354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104242.79205265731,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 104242.3817649926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 262807.2392489145,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 262809.9333737145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1794364.4365385142,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1794317.3076923075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1415781.7990867768,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1415780.6697108077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1437227.6486903029,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1437207.0878274327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1415998.5037935332,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1415996.0546282304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 768042.7629628802,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 768029.3004115219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1369904.5403817564,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1369917.7679882476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3051.2438519840534,
            "unit": "ns/iter",
            "extra": "iterations: 228651\ncpu: 3051.275962055688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19005.944037220608,
            "unit": "ns/iter",
            "extra": "iterations: 36971\ncpu: 19006.134537881084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15469.338723970162,
            "unit": "ns/iter",
            "extra": "iterations: 45140\ncpu: 15468.821444395207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14863.855200544433,
            "unit": "ns/iter",
            "extra": "iterations: 47072\ncpu: 14864.012576478606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11924.794462770164,
            "unit": "ns/iter",
            "extra": "iterations: 60933\ncpu: 11924.631972822679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95672.49165525867,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 95671.96990424102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122080.04988582608,
            "unit": "ns/iter",
            "extra": "iterations: 5693\ncpu: 122078.28912699856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30124.253608865347,
            "unit": "ns/iter",
            "extra": "iterations: 23276\ncpu: 30124.192301082603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30170.948290821838,
            "unit": "ns/iter",
            "extra": "iterations: 23052\ncpu: 30170.47544681577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30162.15195762154,
            "unit": "ns/iter",
            "extra": "iterations: 23217\ncpu: 30162.47146487468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60948.10445160434,
            "unit": "ns/iter",
            "extra": "iterations: 11479\ncpu: 60948.7673142262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56634.09954933747,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 56631.93304361793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22229.35838168578,
            "unit": "ns/iter",
            "extra": "iterations: 31539\ncpu: 22229.60144582887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115111.54503689925,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 115109.89335520956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91428.53297566653,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 91429.50798220214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90765.45203167824,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 90762.98844605905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90479.3485847166,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 90476.21817241756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157193.3681368319,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157184.40594059345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525721.2381311457,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 525679.2765636795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 437809.46269595105,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 437794.357366775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 442196.1892744161,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 442180.12618296716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 433006.69832400244,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 433011.17318435723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277515.77500000154,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 277500.6746031772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 429326.41533738805,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 429318.2208588952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22562.88482249248,
            "unit": "ns/iter",
            "extra": "iterations: 31013\ncpu: 22563.115467707106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112342.03493590036,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 112341.68269230766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91698.69491747358,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 91699.71181556286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92203.8182057011,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 92204.79443058012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91111.85888773805,
            "unit": "ns/iter",
            "extra": "iterations: 7696\ncpu: 91105.54833679833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154264.36850222095,
            "unit": "ns/iter",
            "extra": "iterations: 4540\ncpu: 154266.01321585928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 528188.2775263956,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 528186.9532428336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 433973.62484468357,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 433978.07453415735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 436053.47306502634,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 436027.36842105276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433505.89659448166,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 433510.83591331163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 273916.75586855714,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 273912.2848200297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 425140.5699513463,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 425139.5377128937 ns\nthreads: 1"
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
        "date": 1702490788258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7754.216791827645,
            "unit": "ns/iter",
            "extra": "iterations: 90151\ncpu: 7754.273385763885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56003.73050000371,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56003.05 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102967.96517232498,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 102966.81127982646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149311.04538367214,
            "unit": "ns/iter",
            "extra": "iterations: 5773\ncpu: 149309.09405854845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195579.0162675233,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 195577.60957975607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241797.92821228175,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 241784.94413407808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 288562.2210386296,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 288561.05193075916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334988.2515408178,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 334988.52080123284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 379684.29272564943,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 379675.8983347944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6569.767447577232,
            "unit": "ns/iter",
            "extra": "iterations: 105774\ncpu: 6569.665513264129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5385.643854351152,
            "unit": "ns/iter",
            "extra": "iterations: 130149\ncpu: 5385.593435216561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5363.393234154361,
            "unit": "ns/iter",
            "extra": "iterations: 130538\ncpu: 5363.334048323091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5409.182690521761,
            "unit": "ns/iter",
            "extra": "iterations: 129224\ncpu: 5409.108215192221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8824.170934900554,
            "unit": "ns/iter",
            "extra": "iterations: 79463\ncpu: 8824.154638007632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28922.151103688186,
            "unit": "ns/iter",
            "extra": "iterations: 28133\ncpu: 28921.352148722184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153644.21608039,
            "unit": "ns/iter",
            "extra": "iterations: 5572\ncpu: 153640.68557071072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119014.74555060109,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 119013.16740823137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118391.42940200272,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 118388.2890365452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 117291.78708264393,
            "unit": "ns/iter",
            "extra": "iterations: 7308\ncpu: 117291.00985221675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326751.68212388165,
            "unit": "ns/iter",
            "extra": "iterations: 2825\ncpu: 326751.2566371686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1828840.928853627,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1828821.146245057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1464552.8862559146,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1464539.336492894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1472341.8233438535,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1472026.9716088327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1440603.4868217774,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1440546.511627908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793919.7751072395,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 793900.944206007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1405948.9031770844,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1405862.178517397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36564.75585061682,
            "unit": "ns/iter",
            "extra": "iterations: 22519\ncpu: 36564.0348150451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 181376.76678594295,
            "unit": "ns/iter",
            "extra": "iterations: 4751\ncpu: 181371.6270258897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142289.81585042938,
            "unit": "ns/iter",
            "extra": "iterations: 6044\ncpu: 142287.92190602253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146037.43000511237,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 146035.7543799967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140146.12250245785,
            "unit": "ns/iter",
            "extra": "iterations: 6106\ncpu: 140147.13396659022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 315194.2469989026,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 315187.23172062583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1873900.8862274536,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1873875.0499002042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1475229.2635782366,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1475174.760383396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1498105.072231151,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1498060.3531300111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1475862.4992076666,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1475817.1156893857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 820878.2334801705,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 820847.1365638741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1431309.5984614566,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1431268.1538461572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5094791.340000029,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5094836.000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3051018.9967319295,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3050864.705882366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27693.20539664296,
            "unit": "ns/iter",
            "extra": "iterations: 29611\ncpu: 27692.23937050412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144082.62765779183,
            "unit": "ns/iter",
            "extra": "iterations: 5973\ncpu: 144077.90055248665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111247.93001293516,
            "unit": "ns/iter",
            "extra": "iterations: 7730\ncpu: 111245.00646830509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115058.93359425447,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 115056.20352250469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108389.43003671468,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 108386.9317462325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263394.35970785597,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 263385.30127814854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1827086.8543307253,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1827006.2992125938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1452823.9502332187,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1452790.8242612786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1469909.3761754353,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1469887.7742946635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1442631.9860896794,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1442573.2612055556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 781978.1860855358,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 781962.3637887645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1385315.275037487,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1385287.443946186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3036.3470210243167,
            "unit": "ns/iter",
            "extra": "iterations: 231254\ncpu: 3036.2436974063075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19438.98341772919,
            "unit": "ns/iter",
            "extra": "iterations: 35942\ncpu: 19438.478660063418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15262.954471971001,
            "unit": "ns/iter",
            "extra": "iterations: 45774\ncpu: 15262.915628959576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15202.614233267048,
            "unit": "ns/iter",
            "extra": "iterations: 46033\ncpu: 15202.613342601966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11938.089276823825,
            "unit": "ns/iter",
            "extra": "iterations: 60262\ncpu: 11937.707012711131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95157.65393534166,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 95153.08961942379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124675.18180199718,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 124673.21937321992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30510.543855066906,
            "unit": "ns/iter",
            "extra": "iterations: 22962\ncpu: 30508.971343959594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30589.437138003406,
            "unit": "ns/iter",
            "extra": "iterations: 22963\ncpu: 30588.951792013177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30167.779534682977,
            "unit": "ns/iter",
            "extra": "iterations: 23210\ncpu: 30166.28608358458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60989.8546461355,
            "unit": "ns/iter",
            "extra": "iterations: 11558\ncpu: 60988.70046720915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57237.92934738512,
            "unit": "ns/iter",
            "extra": "iterations: 12243\ncpu: 57237.5561545375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22019.375903691016,
            "unit": "ns/iter",
            "extra": "iterations: 31814\ncpu: 22019.309109197304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113273.16040181319,
            "unit": "ns/iter",
            "extra": "iterations: 6172\ncpu: 113270.04212572983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91469.03121734661,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 91463.75391849605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90798.53354094383,
            "unit": "ns/iter",
            "extra": "iterations: 7707\ncpu: 90796.93784871027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92945.09129374922,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 92935.90203872195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156830.72383525237,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 156830.1823092516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 537398.5574273018,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 537390.8116385917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 440526.8942368916,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 440514.6295123441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 445115.9275270012,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 445104.5136681506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 436034.7651847323,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 436013.7132122685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 276559.3855564182,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 276544.3962115264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 434648.87818525406,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 434640.1491609622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22491.869605703996,
            "unit": "ns/iter",
            "extra": "iterations: 31144\ncpu: 22491.26316465427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113563.05652103791,
            "unit": "ns/iter",
            "extra": "iterations: 6157\ncpu: 113561.32856910936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91432.81528161073,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 91429.25036103536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91538.85240963638,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 91537.68988999458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90935.71575387505,
            "unit": "ns/iter",
            "extra": "iterations: 7687\ncpu: 90934.04449069874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156567.38693133046,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 156563.02408563907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 535653.2098008794,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 535643.1852986234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 437084.5681250302,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 437062.8750000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 440156.65184723045,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 440154.7276142746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 428230.1875000362,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 428228.5539215698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 272707.5504300239,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 272705.7857701346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426810.6923077189,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 426796.79999999877 ns\nthreads: 1"
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
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573913527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7749.526346117289,
            "unit": "ns/iter",
            "extra": "iterations: 90241\ncpu: 7748.938952360902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56565.38470000215,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56562.32999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104528.08942693913,
            "unit": "ns/iter",
            "extra": "iterations: 8219\ncpu: 104523.47000851684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151254.07634256675,
            "unit": "ns/iter",
            "extra": "iterations: 5698\ncpu: 151241.36539136537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198234.31904653597,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 198221.81984872787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 246595.42564686187,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 246582.9684390106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 293593.36397431215,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 293570.1926326462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 340436.22634874756,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 340403.7529319781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405244.81166518026,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 405219.90204808564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6397.495595852436,
            "unit": "ns/iter",
            "extra": "iterations: 110237\ncpu: 6397.323947494946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5348.722179474822,
            "unit": "ns/iter",
            "extra": "iterations: 131261\ncpu: 5348.597831800761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5366.728398485873,
            "unit": "ns/iter",
            "extra": "iterations: 129771\ncpu: 5366.530272557041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5383.573458844863,
            "unit": "ns/iter",
            "extra": "iterations: 130665\ncpu: 5383.360502047215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8690.830236057152,
            "unit": "ns/iter",
            "extra": "iterations: 80447\ncpu: 8690.480689149372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29362.589640286944,
            "unit": "ns/iter",
            "extra": "iterations: 27800\ncpu: 29361.345323740996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 151351.9346405234,
            "unit": "ns/iter",
            "extra": "iterations: 5661\ncpu: 151343.5082140964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118704.25804661847,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 118701.90066592654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119098.58491619311,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 119095.0837988827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120159.76752304508,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 120071.1951968724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 325256.7768769916,
            "unit": "ns/iter",
            "extra": "iterations: 2837\ncpu: 325239.68981318315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1813832.4058824372,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1813691.1764705926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1447308.6050156283,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1447280.4075235154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1463080.9025156877,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463043.3962264159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1440343.961180256,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1440313.8198757754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 804310.1807958941,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 804285.5536332182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1398786.6641452212,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1398669.7428139215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36494.589366468754,
            "unit": "ns/iter",
            "extra": "iterations: 22777\ncpu: 36493.70417526452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178767.75193001333,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 178758.646423057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142352.09776304115,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 142346.4291632147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143062.97336440385,
            "unit": "ns/iter",
            "extra": "iterations: 6007\ncpu: 143054.55302147477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 143174.9613397832,
            "unit": "ns/iter",
            "extra": "iterations: 6001\ncpu: 143167.20546575575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 311686.27869442815,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 311671.37733142154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1851888.7738094144,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1851778.9682539653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1493153.6220095432,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1493054.8644338134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1490906.2721416568,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1490810.3059581337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1468100.5666667651,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1467965.2380952316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 834561.0637916138,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 834524.4384546311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1425811.9953561637,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1425681.4241486045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5130773.33999945,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5130557.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3037850.622149933,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3037711.4006514642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27386.769505919263,
            "unit": "ns/iter",
            "extra": "iterations: 29914\ncpu: 27385.46834258229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139783.90024409565,
            "unit": "ns/iter",
            "extra": "iterations: 6145\ncpu: 139768.0878763228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110982.4445728899,
            "unit": "ns/iter",
            "extra": "iterations: 7785\ncpu: 110980.39820166957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113982.27811670782,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 113976.90981432355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111826.06446971318,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 111825.98404603094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 261730.20463437808,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 261701.8055973507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1819854.7023346387,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1819742.801556425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1446227.543750034,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1446082.5000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1449924.528125024,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1449875.7812499986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1537943.8228043695,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1537838.3667180229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 823667.2095959708,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 823614.225589228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1393652.2230538144,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1393544.311377243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3037.3566622335074,
            "unit": "ns/iter",
            "extra": "iterations: 229315\ncpu: 3037.2138761092824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19289.532650307923,
            "unit": "ns/iter",
            "extra": "iterations: 36309\ncpu: 19287.78815169777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15094.087581755564,
            "unit": "ns/iter",
            "extra": "iterations: 46174\ncpu: 15093.110841599202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15076.674050768233,
            "unit": "ns/iter",
            "extra": "iterations: 46406\ncpu: 15075.341550661553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11555.641203093508,
            "unit": "ns/iter",
            "extra": "iterations: 60544\ncpu: 11555.630615750548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95705.82019099586,
            "unit": "ns/iter",
            "extra": "iterations: 7330\ncpu: 95705.70259208721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124425.24849771046,
            "unit": "ns/iter",
            "extra": "iterations: 5658\ncpu: 124417.26758572011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30404.067202657825,
            "unit": "ns/iter",
            "extra": "iterations: 22886\ncpu: 30401.74779341072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30283.157012591353,
            "unit": "ns/iter",
            "extra": "iterations: 23030\ncpu: 30281.88449848017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30402.92466289835,
            "unit": "ns/iter",
            "extra": "iterations: 22990\ncpu: 30401.42670726422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58552.81876887248,
            "unit": "ns/iter",
            "extra": "iterations: 11924\ncpu: 58547.4002012748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56652.063990875366,
            "unit": "ns/iter",
            "extra": "iterations: 12283\ncpu: 56648.19669461852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22269.386858524635,
            "unit": "ns/iter",
            "extra": "iterations: 31412\ncpu: 22267.327772825767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111192.58128470785,
            "unit": "ns/iter",
            "extra": "iterations: 6305\ncpu: 111192.45043616128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89569.71362764885,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 89569.58413307821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89324.25385497272,
            "unit": "ns/iter",
            "extra": "iterations: 7847\ncpu: 89319.89295272026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89221.26120733492,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 89215.05348955683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156641.01882564116,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 156626.311071269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 533988.5760121822,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 533963.6363636435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 435609.4074766356,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 435569.84423676494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 444783.4920634589,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 444744.8253968231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 433453.45353160816,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 433424.4733581188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277482.3491874534,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 277470.70947284636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 428767.73026718525,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 428762.46115599904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22565.43057168623,
            "unit": "ns/iter",
            "extra": "iterations: 30996\ncpu: 22564.927732610566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112345.39263902738,
            "unit": "ns/iter",
            "extra": "iterations: 6222\ncpu: 112334.26550948167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91900.1250000085,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 91895.79842932006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92974.28071784477,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 92966.8718889177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90616.99974115573,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 90615.95703377863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154165.71368653583,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 154164.26048564946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 530596.2551097904,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 530586.6010598014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 450217.2280373822,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 450216.947040503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 435376.7214241095,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 435368.58213616785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430164.892506154,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430151.4127764154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275323.79212599644,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 275319.9606299185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 427314.4344362778,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 427288.90931372193 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771605037,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7650.700445385645,
            "unit": "ns/iter",
            "extra": "iterations: 91606\ncpu: 7650.372246359409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54900.53540000304,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54899.23999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101569.67340425507,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 101563.30969267142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147337.5988719884,
            "unit": "ns/iter",
            "extra": "iterations: 5851\ncpu: 147332.28507947354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193394.81022549866,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 193387.80977896863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240046.21656050542,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 240039.9612295763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285751.0411997391,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 285740.4416611732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332598.2008400235,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 332588.6216113017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377110.8888888837,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 377099.56597222236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6333.05593442944,
            "unit": "ns/iter",
            "extra": "iterations: 110415\ncpu: 6332.8506090657975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5312.024735197495,
            "unit": "ns/iter",
            "extra": "iterations: 131513\ncpu: 5311.776022142301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5312.8680788014035,
            "unit": "ns/iter",
            "extra": "iterations: 130252\ncpu: 5312.698461443965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5340.5693747756995,
            "unit": "ns/iter",
            "extra": "iterations: 130977\ncpu: 5340.50558495003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8712.34341645885,
            "unit": "ns/iter",
            "extra": "iterations: 80200\ncpu: 8712.134663341649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29179.625531763013,
            "unit": "ns/iter",
            "extra": "iterations: 27973\ncpu: 29178.51499660386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145696.81297774726,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 145690.02887718694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111529.73782478756,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 111528.14988901957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111090.79661678604,
            "unit": "ns/iter",
            "extra": "iterations: 7685\ncpu: 111087.56018217329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108558.72308084863,
            "unit": "ns/iter",
            "extra": "iterations: 7829\ncpu: 108557.22314471852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326139.0785840666,
            "unit": "ns/iter",
            "extra": "iterations: 2825\ncpu: 326124.530973452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1797950.6485436475,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1797911.6504854313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1420850.2076922532,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1420787.6923076904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1430570.5155279033,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1430539.596273296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1424075.3634969664,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1424006.748466254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793679.6572164986,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 793653.608247423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1383171.4074626688,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1383110.4477611964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36906.894008190575,
            "unit": "ns/iter",
            "extra": "iterations: 22464\ncpu: 36905.02136752142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172509.38900000392,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 172505.7399999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134719.11532435723,
            "unit": "ns/iter",
            "extra": "iterations: 6382\ncpu: 134714.39987464724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135926.95866328184,
            "unit": "ns/iter",
            "extra": "iterations: 6314\ncpu: 135925.18213493822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131993.87764560754,
            "unit": "ns/iter",
            "extra": "iterations: 6473\ncpu: 131986.80673567127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 324879.5735679402,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 324872.7817296887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1842173.701581025,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1842078.4584980253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1453086.8312499835,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1453056.4062499974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1468088.006309145,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1467991.4826498432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1443520.6729264646,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1443478.560250393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 824892.9555160413,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 824845.1067615658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1408833.0590014984,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1408708.4720120996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5090964.419999864,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5090909.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3006696.86173628,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3006481.0289389063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27817.593911894066,
            "unit": "ns/iter",
            "extra": "iterations: 29533\ncpu: 27816.99793451392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134756.52170506743,
            "unit": "ns/iter",
            "extra": "iterations: 6381\ncpu: 134752.1548346654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104280.64830354498,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 104274.57132433391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105223.65518088311,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 105216.8730839978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101588.4055244611,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 101581.42636028116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 265575.27414423565,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 265554.30929095385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1798634.130268136,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1798543.8697317967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1415226.4370258679,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1415161.1532625258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1429340.4241960768,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1429288.2082695232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1400386.1497731165,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1400282.148260214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 778917.0775646279,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 778852.4603836546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1369756.524229131,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1369633.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3005.065519332661,
            "unit": "ns/iter",
            "extra": "iterations: 232481\ncpu: 3004.870505546697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19316.877942434716,
            "unit": "ns/iter",
            "extra": "iterations: 36237\ncpu: 19315.522808179314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14939.350669600017,
            "unit": "ns/iter",
            "extra": "iterations: 46819\ncpu: 14938.813302291803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14219.362928949773,
            "unit": "ns/iter",
            "extra": "iterations: 49219\ncpu: 14218.531461427423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11705.350208663422,
            "unit": "ns/iter",
            "extra": "iterations: 60384\ncpu: 11704.764507154225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 96313.80090746644,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 96308.30468857418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121605.9487719297,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 121596.66666666644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29918.680818347435,
            "unit": "ns/iter",
            "extra": "iterations: 23413\ncpu: 29916.917951565356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29773.932513511016,
            "unit": "ns/iter",
            "extra": "iterations: 23501\ncpu: 29773.545806561215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30053.683026495582,
            "unit": "ns/iter",
            "extra": "iterations: 22759\ncpu: 30052.932905663703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60951.37740279944,
            "unit": "ns/iter",
            "extra": "iterations: 11497\ncpu: 60949.8999739063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55819.05626598265,
            "unit": "ns/iter",
            "extra": "iterations: 12512\ncpu: 55816.40824808164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21965.31020959024,
            "unit": "ns/iter",
            "extra": "iterations: 31872\ncpu: 21964.231927710793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111249.83800918513,
            "unit": "ns/iter",
            "extra": "iterations: 6309\ncpu: 111244.01648438754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90248.49806651569,
            "unit": "ns/iter",
            "extra": "iterations: 7758\ncpu: 90241.73756122832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89849.31215576027,
            "unit": "ns/iter",
            "extra": "iterations: 7807\ncpu: 89843.03829896111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89326.88426163926,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 89323.31374553007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155196.90139594575,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 155193.33037890648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 526279.5551388048,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 526256.9392348046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431514.8429803173,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 431503.20197044476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 430029.93431552546,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 429994.41375076486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 427205.5397726924,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 427200.18939393957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 276232.72648218233,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 276213.08300395036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424569.3331317841,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 424564.02660217317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23533.191003727396,
            "unit": "ns/iter",
            "extra": "iterations: 31413\ncpu: 23532.03132461078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110427.6853223923,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 110426.26517420764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90597.11763944787,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 90593.47741685036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92011.8584955286,
            "unit": "ns/iter",
            "extra": "iterations: 7604\ncpu: 92010.71804313608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91184.47354014417,
            "unit": "ns/iter",
            "extra": "iterations: 7672\ncpu: 91181.30865484769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154509.78820671325,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 154496.66519434509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 519500.54423792387,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 519465.2044609643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 425956.7669310919,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 425928.1269066473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 426105.238386295,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 426094.8044009746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 425356.10814095155,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 425346.35479951795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271990.38389729266,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 271980.0855698135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 421469.430114023,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 421457.4085182937 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772012027,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7691.330859978174,
            "unit": "ns/iter",
            "extra": "iterations: 90700\ncpu: 7690.88533627343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56055.60849999733,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56054.90999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102959.62782044563,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 102954.06865098418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148888.59982668658,
            "unit": "ns/iter",
            "extra": "iterations: 5770\ncpu: 148879.80935875222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196219.5983717786,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 196212.5508819539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242015.79379715255,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 242013.9145012572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 288617.10033223283,
            "unit": "ns/iter",
            "extra": "iterations: 3010\ncpu: 288596.0797342193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334231.8013856845,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 334215.2809853734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 381183.17866551486,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 381162.4231782272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6479.5812180853245,
            "unit": "ns/iter",
            "extra": "iterations: 107710\ncpu: 6479.189490298022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5514.419793833136,
            "unit": "ns/iter",
            "extra": "iterations: 130283\ncpu: 5514.221348909677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5315.2320156332435,
            "unit": "ns/iter",
            "extra": "iterations: 131517\ncpu: 5315.183588433439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5384.012673130396,
            "unit": "ns/iter",
            "extra": "iterations: 129960\ncpu: 5383.785780240079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8802.430296281154,
            "unit": "ns/iter",
            "extra": "iterations: 79924\ncpu: 8801.801711626042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29100.45713265618,
            "unit": "ns/iter",
            "extra": "iterations: 28005\ncpu: 29098.464559900036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153693.3536231884,
            "unit": "ns/iter",
            "extra": "iterations: 5520\ncpu: 153685.18115942017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120349.35757661327,
            "unit": "ns/iter",
            "extra": "iterations: 7081\ncpu: 120343.66614884904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 120062.33844638486,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 120060.6107514777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115748.41975982557,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 115745.33296943217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 325505.72159491875,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 325496.82427664165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1820982.5009784896,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1820963.9921722116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1452941.3275862022,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1452888.7147335445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1472570.7527733785,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1472535.9746434256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1448561.462616804,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1448514.7975077878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793350.5671256601,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 793312.8227194502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1408798.7000000237,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1408720.7575757594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36448.08152340865,
            "unit": "ns/iter",
            "extra": "iterations: 22791\ncpu: 36447.70742837089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182015.54577982883,
            "unit": "ns/iter",
            "extra": "iterations: 4751\ncpu: 182013.5129446438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141387.90630155598,
            "unit": "ns/iter",
            "extra": "iterations: 6062\ncpu: 141382.118112834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140828.20495163428,
            "unit": "ns/iter",
            "extra": "iterations: 6099\ncpu: 140819.9376947044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139897.20559986122,
            "unit": "ns/iter",
            "extra": "iterations: 6143\ncpu: 139890.6560312546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 314504.6027546092,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 314488.58281986264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1865308.6760000405,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1865220.6000000078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1484565.660287004,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1484493.7799043045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1501857.36510499,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1501780.6138933732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1493945.2655999959,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1491128.1599999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 819348.2533215301,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 819312.1346324192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1425335.5208655917,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1425233.69397217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5073897.849999866,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5073911.000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2993835.741214038,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2993734.5047923243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27514.868380428074,
            "unit": "ns/iter",
            "extra": "iterations: 29798\ncpu: 27513.420363782792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143701.26759151372,
            "unit": "ns/iter",
            "extra": "iterations: 5983\ncpu: 143691.2251378896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111053.22917744404,
            "unit": "ns/iter",
            "extra": "iterations: 7732\ncpu: 111047.76254526588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112504.65819468419,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 112502.73811083433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106567.93000373578,
            "unit": "ns/iter",
            "extra": "iterations: 8029\ncpu: 106567.9910325071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263464.208801217,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 263451.4112291359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1832241.1009709637,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1832147.3786407763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1448167.4164086713,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1448097.6780185772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1465463.2971697708,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1465380.031446543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1429140.5830769795,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1429045.692307686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 785841.8755256548,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 785802.5231286774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1388967.087928469,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1388884.0536512733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3020.043414411372,
            "unit": "ns/iter",
            "extra": "iterations: 232204\ncpu: 3019.8730426694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19507.48677130591,
            "unit": "ns/iter",
            "extra": "iterations: 35869\ncpu: 19505.96057877277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15206.042586442252,
            "unit": "ns/iter",
            "extra": "iterations: 46071\ncpu: 15205.014000130312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14544.28429187376,
            "unit": "ns/iter",
            "extra": "iterations: 48007\ncpu: 14543.281188160052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11558.695014565697,
            "unit": "ns/iter",
            "extra": "iterations: 60416\ncpu: 11558.707958156694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 96262.08736008311,
            "unit": "ns/iter",
            "extra": "iterations: 7326\ncpu: 96256.92055692039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124871.43774527717,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 124862.73635390695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30497.20884392366,
            "unit": "ns/iter",
            "extra": "iterations: 22931\ncpu: 30495.748113907197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30648.537694594484,
            "unit": "ns/iter",
            "extra": "iterations: 22868\ncpu: 30646.54101801657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30264.58405500619,
            "unit": "ns/iter",
            "extra": "iterations: 22979\ncpu: 30262.78776273991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60943.80420924009,
            "unit": "ns/iter",
            "extra": "iterations: 11451\ncpu: 60939.35900794716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57121.6571031564,
            "unit": "ns/iter",
            "extra": "iterations: 12234\ncpu: 57118.031714893026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22161.89032869667,
            "unit": "ns/iter",
            "extra": "iterations: 31640\ncpu: 22160.183312262918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113399.0379438969,
            "unit": "ns/iter",
            "extra": "iterations: 6167\ncpu: 113399.1243716549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91310.6784129457,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 91309.78856695397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91398.15026786996,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 91393.17914543337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90837.7288179579,
            "unit": "ns/iter",
            "extra": "iterations: 7707\ncpu: 90832.63267159619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157128.95065343962,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 157119.19783686276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 537804.0675883403,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 537786.175115204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 439657.2105927,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 439622.88776796625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 443867.62500001135,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443841.81472081377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 439072.0119047592,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 439047.7443609062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278469.11738957616,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 278450.7361719084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 432181.8433065931,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 432166.8106107362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22448.792656379017,
            "unit": "ns/iter",
            "extra": "iterations: 31238\ncpu: 22448.143287022383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113408.02121457446,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 113408.17813765112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92202.10036977766,
            "unit": "ns/iter",
            "extra": "iterations: 7572\ncpu: 92201.22820919268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92736.31796310731,
            "unit": "ns/iter",
            "extra": "iterations: 7482\ncpu: 92733.11948676774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91799.51488133903,
            "unit": "ns/iter",
            "extra": "iterations: 7627\ncpu: 91794.24413268655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155114.0554692686,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155108.94164632907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 535204.4334862159,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 535205.2752293532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 438980.55743882543,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 438965.2228499705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 440956.97340088943,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 440944.521849268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 432755.3355995148,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 432728.43016069516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275599.32516789687,
            "unit": "ns/iter",
            "extra": "iterations: 2531\ncpu: 275584.3540102706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 429996.24031957716,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 429958.94283957814 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}