window.BENCHMARK_DATA = {
  "lastUpdate": 1702420966007,
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
      }
    ]
  }
}