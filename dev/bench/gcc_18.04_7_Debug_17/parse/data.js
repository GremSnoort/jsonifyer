window.BENCHMARK_DATA = {
  "lastUpdate": 1702409139220,
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
      }
    ]
  }
}